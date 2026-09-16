# Workflow: research-reality-layer

**Trigger**: incoming webhook `POST /webhook/research-reality` (called by the topic-queue feeder or by you/me manually)
**Goal**: turn a topic brief into a **verified, citation-mapped, tier-checked** research package that the write-with-doctrine workflow can consume without hallucinating sources.
**Output**: enriched brief JSON pushed into the writer's queue.

---

## Input schema

```json
{
  "slug": "que-es-una-agencia-de-paid-media",
  "title": "Qué es una agencia de paid media (y cuándo NO la necesitas)",
  "thesis": "El fundador D2C español promedio contrata una agencia esperando delegación total y termina con reporting de plataforma, no de negocio.",
  "primary_keyword": "agencia paid media",
  "secondary_keywords": ["agencia marketing digital", "agencia performance españa"],
  "faq": [
    "¿Cuánto cobra una agencia de paid media en España?",
    "¿Qué diferencia hay entre una agencia y un growth partner?"
  ],
  "intent": "BOFU comparison",
  "archetype": "Framework con nombre",
  "target_word_count": 1400,
  "requested_sources": [
    {"claim": "El CPA medio en Meta Ads para eCommerce D2C en España en 2026 es 8-15€",
     "preference": "T1 Meta primary or T2 analyst"}
  ],
  "submitted_by": "pablo",
  "submitted_at": "2026-06-23T..."
}
```

---

## Nodes (in order)

### 1. Webhook — `POST /webhook/research-reality`
- Auth: header `X-Webhook-Secret: $N8N_WEBHOOK_SECRET` (matches env var in `/etc/n8n/n8n.env`)
- Returns `200 OK` immediately. Work continues async.
- Validates input schema. If invalid → reply `400` with the missing fields, log to `logs/research-rejected.jsonl`.

### 2. Set — normalize and tag the brief
- Adds `run_id` (UUID), `submitted_at_received` (ISO), `workflow_version: "1.0"`.
- Splits `requested_sources[]` into individual claim threads.

### 3. Code (JS) — generate keyword pack and search queries

For each claim in `requested_sources`, generate 3-5 search queries optimized for finding primary sources:

```
claim → query variants:
  - "<claim keywords>" + "site:meta.com OR site:facebook.com"
  - "<claim keywords>" + "site:gartner.com OR site:forrester.com"
  - "<claim keywords>" + "site:*.edu OR site:wikipedia.org"
  - "<claim keywords>" + "site:hbr.org OR site:mckinsey.com"
  - "<claim keywords>" + exact-match year (e.g. "2026")
```

Also generates 3 generic queries from `primary_keyword` + `intent` to find:
- 1-2 recent competitor posts on the same topic (for "BofU comparison" intent)
- 1-2 contrarian takes (for "framework con nombre" archetype)

Output: `queries[]` array, ~15-20 queries total per brief.

### 4. HTTP Request — execute queries via SerpAPI or Bing Search API

- **Recommended**: SerpAPI (`https://serpapi.com/`, paid but reliable) with `engine=google` and `num=10`.
- **Cheaper alt**: Bing Web Search API v7 (`https://api.bing.microsoft.com/v7.0/search`).
- Each query returns top 10 results: `{ title, url, snippet, position }`.
- All queries run in parallel (n8n `SplitInBatches` + `HTTP Request` in parallel mode).
- Captures user-agent: `DayByDay-Research/1.0 (+https://daybydayconsulting.com)`.

Cost control: max 20 queries × 10 results = 200 URL candidates per brief.

### 5. Code — dedupe + tier classification

Input: ~200 URL candidates across queries.

Algorithm:
```
1. dedupe by URL (strip utm_*, normalize trailing slash)
2. for each URL:
     domain = extract(url)
     tier = classify(domain)         // uses source-authority-tiers.md allowlist/blocklist
     if tier == "blocklist": drop
     else: keep with { url, tier, title, snippet }
3. group by claim: a URL keeps the first claim it appears for (don't double-count)
4. score each URL:
     score = 100
     if tier == T1: score += 50
     if tier == T2: score += 30
     if tier == T3: score += 15
     if tier == T4: score += 10
     if tier == T5: score += 5
     if tier == "unknown": score -= 20
     if snippet contains year < (current_year - 2): score -= 30
5. top 8 URLs per claim (or 8 globally if no claim mapping)
```

Output: `candidates[]` with `url, tier, score, claim_for, snippet, title`.

### 6. HTTP Request — HEAD verify each candidate

- For each candidate: HEAD request with 10s timeout.
- Drop if not 2xx (allow 3xx → 2xx within 3 hops).
- Drop if redirect lands on a different domain (often a sign of a parked domain or scraper).

### 7. Code — assemble the verified brief

The deliverable:

```json
{
  "slug": "...",
  "title": "...",
  "thesis": "...",
  "primary_keyword": "...",
  "secondary_keywords": [...],
  "faq": [...],
  "intent": "...",
  "archetype": "...",
  "target_word_count": 1400,
  "sources": [
    {
      "label": "Meta Ads Help: What is ROAS",
      "url": "https://www.facebook.com/business/help/...",
      "tier": "T1",
      "lastmod": "2026-03-15",
      "claim_for": "ROAS definition and formula",
      "snippet_excerpt": "Return on ad spend (ROAS) is a marketing metric..."
    },
    ...
  ],
  "research_notes": {
    "queries_run": 18,
    "candidates_found": 142,
    "candidates_tier1": 4,
    "candidates_tier2": 11,
    "passed_head_check": 47,
    "selected_for_brief": 7,
    "blocklist_dropped": 23,
    "stale_dropped": 18
  },
  "ready_for_writing": true|false,
  "blockers": []  // populated if ready_for_writing is false
}
```

**Pass criteria** (sets `ready_for_writing: true`):
- ≥1 T1 source
- ≥2 T2 or T3 sources (combined)
- 0 blocklist hits
- Every requested claim has at least one matching source in `sources[]`

**Fail criteria** → fills `blockers[]`:
- "no T1 source for claim X"
- "all candidates for claim Y were stale (>24 months)"
- "claim Z has no candidate at all — broaden search"

### 8. IF — split on ready_for_writing

- **True** → Continue to node 9 (push to writer queue)
- **False** → Branch A: Telegram alert with blockers + brief context. Branch B: save brief to `~/daybyday-research/pending/<slug>.json` for human follow-up.

### 9. Code — push to writer queue

Two paths depending on config:

**Path A (default)**: HTTP POST to GitHub API to create the queue entry remotely.
```
POST https://api.github.com/repos/DaybyDay-csv/DaybyDayWeb-HTML/contents/content/_queue.json
Authorization: Bearer $GH_TOKEN
Body: { message: "queue: <slug>", content: base64(json.stringify(brief)) }
```

Wait — this won't work if `_queue.json` already exists (PUT vs POST). GitHub's Contents API needs the file's current SHA. Better path:

**Path B (simpler)**: SSH or webhook into the VPS running the daily cron. But VPS is the same one as n8n — chicken/egg.

**Recommended path C**: keep a local SQLite table inside n8n for queue state. The writer workflow (write-with-doctrine) reads from n8n's own DB, not from a git-tracked file. This decouples the writer from git history and lets us iterate fast.

n8n has a built-in **SQLite node** (uses the same `/var/lib/n8n/database.sqlite`). Use it.

```sql
CREATE TABLE IF NOT EXISTS research_briefs (
  slug TEXT PRIMARY KEY,
  brief_json TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending_write',  -- pending_write | writing | written | published | failed
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  workflow_run_id TEXT
);
```

### 10. Respond to webhook

Reply `200 { ok: true, slug, ready_for_writing, sources_count }` to the original caller.

---

## Configuration / env vars

In n8n credentials store:
- `SERP_API_KEY` (or `BING_SEARCH_KEY`)
- `GH_TOKEN` (only if using Path A above)
- `TELEGRAM_BOT_TOKEN` + `TELEGRAM_CHAT_ID` (for failure alerts)
- `N8N_WEBHOOK_SECRET` (set in `/etc/n8n/n8n.env`)

---

## Error handling

| Failure | Action |
|---|---|
| SerpAPI 429 (rate limit) | Backoff 60s, retry up to 3 times, then fail brief |
| SerpAPI 5xx | Retry up to 2 times, then fail brief |
| HEAD timeout on candidate | Drop that candidate, continue |
| All candidates for a claim fail HEAD | Flag as blocker |
| Webhook payload malformed | Reply 400, log, don't enqueue |
| n8n SQLite write fails | Retry once, then alert |

Every failure logs to `logs/research-reality.jsonl` with `{ run_id, slug, step, error, ts }`.

---

## What the writer gets

A clean brief with verified sources, tier-classified, claim-mapped. No hallucination possible because every URL has been:
1. Tier-classified against the allowlist
2. HEAD-checked for liveness
3. Recency-checked
4. Mapped to a specific claim

The writer's job becomes: structure the doctrine + voice around real material. That's the "reality layer."