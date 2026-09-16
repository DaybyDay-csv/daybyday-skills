# Workflow: failure-alerts

**Trigger**: catch-all — every workflow in this system should have an **Error Trigger** node that calls into here on any unhandled exception.
**Goal**: a single funnel for "something broke, someone should know." Sends to Telegram with full context.

This is not optional. It's the reason you can trust the system to run unattended.

---

## Why a dedicated alert workflow

Three reasons:

1. **Single point of tuning.** Want to add Slack alongside Telegram? One workflow, not five.
2. **Severity classification.** A retryable GSC quota hit shouldn't wake you up. A writer that failed 3 times in a row should.
3. **De-dup.** If the same failure repeats in 5 minutes, send ONE alert, not 50.

---

## Trigger

Multiple Error Trigger nodes from other workflows all call:
```
POST https://n8n.daybydayconsulting.com/webhook/alert
```

Body shape:
```json
{
  "source_workflow": "write-with-doctrine",
  "source_run_id": "abc-123",
  "severity": "low|medium|high|critical",
  "step": "llm_call|gate_check|publish|push|webhook|sqlite|other",
  "slug": "que-es-una-agencia",
  "error_class": "RateLimitError|AuthError|GateFailed|ValidationError|...",
  "error_message": "Anthropic API returned 429 after 3 retries",
  "context": {
    "retry_count": 3,
    "last_verdict": "regenerar",
    "qa_issues": ["...", "..."],
    "last_llm_tokens_used": 12345
  },
  "ts": "2026-06-23T22:00:01Z"
}
```

---

## Nodes

### 1. Webhook — receive alert

Validate header `X-Webhook-Secret`.

### 2. SQLite — de-dup window

```sql
SELECT COUNT(*) as hits FROM alerts
WHERE source_workflow = '<source>'
  AND step = '<step>'
  AND slug = '<slug>'
  AND error_class = '<error_class>'
  AND ts > datetime('now', '-15 minutes');
```

If `hits > 0`: this is a repeat within 15 min. Increment counter, log, but **don't re-notify**.

If `hits == 0`: insert new alert row, continue.

```sql
INSERT INTO alerts (source_workflow, source_run_id, severity, step, slug, error_class, error_message, context_json, ts)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
```

### 3. IF — severity routing

- **`critical`**: full Telegram + email + (optional) phone call via Twilio.
- **`high`**: Telegram, includes PR link if available.
- **`medium`**: Telegram.
- **`low`**: just log, no notification.

Default classification (the calling workflow sets `severity`):
| Severity | Examples |
|---|---|
| `critical` | GitHub webhook auth fails, GSC credentials broken, n8n SQLite write fails, total system outage |
| `high` | Writer failed 3 retries, qa-checklist `regenerar` after 3 attempts, gate 6 fails, push rejected |
| `medium` | Single gate failure that's recoverable, one LLM 429, IndexNow 5xx, transient HEAD timeout |
| `low` | Stale source dropped, blocklist hit, candidate below threshold, informational |

### 4. Code — format the message

Template:

```
🚨 [<severity>] <source_workflow> / <step>

Slug: <slug> (or "n/a")
When: <ts>
Error: <error_class>: <error_message>

Context:
- Retries: <retry_count>
- Last QA verdict: <last_verdict>
- <other context fields>

Action needed:
<action_hint based on error_class>

Run: <source_run_id>
```

### 5. HTTP Request — Telegram send

```
POST https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/sendMessage
Content-Type: application/json
Body:
{
  "chat_id": "<TELEGRAM_CHAT_ID>",
  "text": "<formatted message>",
  "parse_mode": "Markdown",
  "disable_web_page_preview": true
}
```

### 6. Code — escalate if no ack

After 30 minutes, check if the alert was acknowledged:
```sql
SELECT acked FROM alerts WHERE id = <alert_id>;
```

If `acked == 0`: re-send (rate-limit to max 3 sends), update `severity` to `critical` on second retry.

### 7. Ack endpoint (separate webhook)

```
POST /webhook/alert/ack
Body: { "alert_id": "...", "acked_by": "pablo" }
```

Updates the row. Sets `acked = 1, acked_by = ?, acked_at = now()`.

Reply with Telegram "✅ alert acked by pablo".

---

## What you get in Telegram

Examples of real alerts:

```
🚨 [high] write-with-doctrine / llm_call

Slug: que-es-una-agencia
When: 2026-06-23T22:00:01Z
Error: RateLimitError: Anthropic API returned 429 after 3 retries

Context:
- Retries: 3
- Last verdict: regenerar (3rd retry failed)
- Last LLM tokens used: 12453

Action needed:
- Check Anthropic console for quota
- Brief remains queued, will retry on next cron
- Or trigger manually: POST /webhook/write-now

Run: abc-123-def
```

```
🚨 [critical] publish-and-index / gsc_push

Slug: cac-blended-vs-cac-canal-ecommerce
When: 2026-06-23T22:00:01Z
Error: AuthError: GSC service account token exchange failed

Context:
- service account: daybyday-gsc-ca41820f3bea@...
- error: invalid_grant, signature mismatch

Action needed:
- Service account JSON may be rotated
- Check GSC_CREDENTIALS_PATH env var
- Post IS live on CF Pages, only indexing is delayed

Run: xyz-456-uvw
```

---

## What this workflow does NOT do

- It does not retry failed operations. The calling workflow handles retries.
- It does not open issues on GitHub.
- It does not page anyone (no PagerDuty). Telegram is the channel.
- It does not act on the error. A human (or another workflow) acts.

---

## Configuration / env vars

```
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_ID=...
N8N_WEBHOOK_SECRET=...
ALERT_DE_DUP_WINDOW_MIN=15
ALERT_ESCALATION_MIN=30
```

---

## Where Error Trigger nodes live

Every other workflow in this system should have at minimum one Error Trigger that POSTs to `/webhook/alert`. This includes:
- research-reality-layer (SerpAPI failure, tier floor fail, blocker)
- write-with-doctrine (LLM failure, gate failure, push failure)
- publish-and-index (IndexNow fail that's not a 4xx, GSC auth fail, missing file)
- A daily health-check workflow (cron at 09:00, pings n8n /healthz, GSC, CF Pages status)