# Workflow: publish-and-index

**Trigger**: GitHub webhook (`repository.push` or `pull_request.closed` with `merged=true` on `main`).
**Goal**: when a post merges to `main`, immediately push it to IndexNow + Google Search Console + regenerate `llms.txt` + `sitemap.xml` if missing + open the post for indexing.
**Output**: search engines notified within 60 seconds of merge.

This is the "activation of the posting" you mentioned. The work itself is mostly already coded in `DaybyDayWeb-HTML/scripts/` — this workflow just calls it.

---

## Why a separate workflow

The writing workflow opens a PR. The human (you) merges. After merge, Cloudflare Pages deploys the static site. But:

1. **Cloudflare Pages doesn't ping Google.** IndexNow and GSC URL Inspection are separate calls.
2. **Cloudflare Pages doesn't update `llms.txt` or `sitemap.xml`.** The repo's `scripts/update-llms-txt.mjs` and `scripts/update-sitemap.mjs` are run by `rewrite-batch.mjs`, but only when a batch is processed — not when a single post merges via PR.
3. **If the writing workflow used `--no-index`, IndexNow + GSC were skipped.** We need to run them now.

So: merge webhook → n8n runs the indexation chain.

---

## Trigger

GitHub webhook to n8n:
- URL: `POST https://n8n.daybydayconsulting.com/webhook/publish-and-index`
- Content-Type: `application/json`
- Secret: `$GITHUB_WEBHOOK_SECRET`
- Events: `pull_request` (action: `closed`, merged: `true`), `push` (branch: `main`)

Validate signature in n8n's Webhook node.

---

## Nodes

### 1. Webhook — receive GitHub event

Filter: `pull_request.merged == true && base.ref == "main"` OR `ref == "refs/heads/main"`.

Extract from payload:
- PR title (e.g. "feat(blog): auto-write que-es-una-agencia")
- PR body (contains slug, word count, sources count)
- Commit SHA
- Author
- List of changed files

### 2. Code — extract the slug

Parse the PR title with regex `/feat\(blog\): auto-write (.+)/` → captures `slug`.

If no slug matched, this isn't a blog post merge. Reply `200 { skipped: true, reason: "not a blog post" }` and exit.

### 3. SQLite — record the publish

```sql
INSERT INTO published_posts (slug, pr_url, merged_at, commit_sha)
VALUES ('<slug>', '<pr_url>', now(), '<sha>')
ON CONFLICT(slug) DO UPDATE SET merged_at = excluded.merged_at;
```

### 4. Execute Command — pull latest from VPS clone

```bash
cd /var/lib/n8n/workspace/daybyday-blog
git fetch --quiet
git reset --hard origin/main >/dev/null
ls -la blog/<slug>.html   # sanity check
```

If file missing: alert (post claimed merged but file not present — possible race or revert).

### 5. HTTP Request — IndexNow submit

```
POST https://api.indexnow.org/indexnow
Content-Type: application/json
Body:
{
  "host": "daybydayconsulting.com",
  "key": "$INDEXNOW_KEY",
  "keyLocation": "https://daybydayconsulting.com/<key>.txt",
  "urlList": [
    "https://daybydayconsulting.com/blog/<slug>.html"
  ]
}
```

Expected: `202 Accepted`. Anything else: log warning, continue (Bing isn't critical).

n8n captures the HTTP status; if not 2xx, mark as "warning" not "failure" — we don't block publishing on Bing.

### 6. HTTP Request — GSC URL Inspection

```
POST https://searchconsole.googleapis.com/v1/urlInspection/index:inspect
Authorization: Bearer <GSC service account OAuth token>
Body:
{
  "inspectionUrl": "https://daybydayconsulting.com/blog/<slug>.html",
  "siteUrl": "https://daybydayconsulting.com/",
  "languageCode": "es-ES"
}
```

n8n's **Google Service Account** credential handles the OAuth dance.

Expected: `200 OK` with `inspectionResult` containing the indexed state. We don't act on the result — just record it.

This **requests indexing**, doesn't guarantee it. Google takes minutes to hours to actually crawl.

### 7. Execute Command — regenerate llms.txt + sitemap.xml (idempotent)

The repo's scripts handle this:

```bash
cd /var/lib/n8n/workspace/daybyday-blog

# Verify llms.txt includes the new slug
grep -q "<slug>" llms.txt || node scripts/update-llms-txt.mjs <slug>

# Regenerate sitemap only if missing or stale
node scripts/update-sitemap.mjs

# Commit any regenerations (shouldn't happen often — the writing workflow runs these)
if [[ -n $(git status --porcelain llms.txt sitemap.xml) ]]; then
  git -c user.email=bot@daybyday.local \
      -c user.name="DayByDay Bot" \
      commit -am "chore(indexing): regenerate llms.txt + sitemap after merge of <slug>"
  git push origin main
fi
```

### 8. HTTP Request — Telegram notify on success

```
✅ <slug> published and indexed
- Cloudflare deploy: triggered
- IndexNow: <status>
- GSC URL Inspection: <status>
- llms.txt + sitemap: <regenerated|unchanged>
- Commit: <sha>
```

### 9. HTTP Request — Telegram notify on failure (any of the above)

```
❌ Publish failed for <slug>
Step: <which step>
Error: <message>
PR: <pr_url>
Action needed: <what to do>
```

---

## Configuration / env vars

```
GITHUB_WEBHOOK_SECRET=<random 32-byte hex>
INDEXNOW_KEY=<from IndexNow dashboard>
GSC_SITE_URL=https://daybydayconsulting.com/
GSC_CREDENTIALS_PATH=/etc/n8n/gsc-credentials.json
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_ID=...
N8N_WORKSPACE_DIR=/var/lib/n8n/workspace/daybyday-blog
```

---

## Race conditions

| Race | Mitigation |
|---|---|
| Cloudflare deploy hasn't finished when we call IndexNow | `cf:deploy` step first (small wait) |
| Multiple posts merged in same PR (rare) | Loop over all `feat(blog): auto-write <slug>` matches in the PR title — but PR title is single, so de-dup by file list |
| Worker retry causes duplicate IndexNow calls | Idempotent — IndexNow de-dupes URLs server-side |
| GSC daily quota exceeded | Log, alert, skip. Resume tomorrow. |

---

## What this workflow does NOT do

- It does not run the writing workflow (separate).
- It does not modify the post itself.
- It does not handle deletes / unpublishes (yet).
- It does not read GSC analytics (that's measurement, separate workflow).

---

## Failure modes that should NOT block the post

A post is already live on Cloudflare by the time this workflow runs. The post is published regardless of what happens here. These are **best-effort**:

- IndexNow 4xx/5xx → log, don't retry, don't alert (Bing noise)
- GSC quota exceeded → log, alert, retry tomorrow

These **should** alert:

- GSC service account auth failure (broken config, rotate the key)
- Webhook signature validation failure (possible security incident)
- `blog/<slug>.html` missing after merge (the merge may have failed silently)