# Workflow: write-with-doctrine

**Trigger**: cron at 20:00 UTC Tue + Thu (= 22:00 CEST Madrid), OR on demand via webhook.
**Goal**: consume a verified brief from `research-reality-layer`, produce a `content/<slug>.md` that follows the doctrine in `daybyday-skills`, run the 6-gate CI checks, and commit on green.
**Output**: PR opened against `DaybyDay-csv/DaybyDayWeb-HTML`, ready for human review.

This workflow is the **only** place where the writing agent runs. It guarantees:
- The writer reads all 5 doctrine skills BEFORE producing a sentence.
- The writer cites only the URLs the reality layer approved.
- The writer cannot pass the gate without satisfying `qa-checklist.mjs`.

---

## Why the writer lives in n8n and not Claude/opencode

Three reasons:

1. **The writer needs to be a stateless function** that takes a brief in, returns a draft out. n8n's Code node with a long-lived Claude/OpenAI API key fits this. A chat session doesn't — chat state leaks between posts.

2. **The doctrine must be injected verbatim** every time. Hard to guarantee in a chat session where the user might say "ignore the rules, just write fast." A Code node that pulls `tono-humano/SKILL.md` from `daybyday-skills` on every run is bulletproof.

3. **The gate chain is the contract.** If `qa-checklist.mjs` says `regenerar`, the post doesn't ship. Period. A chat agent can rationalize skipping the gate ("the user said it's fine"). A code path cannot.

---

## Trigger

```
schedule:
  - cron: '0 20 * * 2,4'    # Tue + Thu 20:00 UTC
webhook:
  - POST /webhook/write-now   # manual override
```

---

## Nodes

### 1. Schedule Trigger / Webhook

If webhook: validate header `X-Webhook-Secret`.

### 2. SQLite — pick the next brief

```sql
SELECT slug, brief_json FROM research_briefs
WHERE status = 'pending_write'
ORDER BY created_at ASC
LIMIT 1;
```

If empty: log `no_work=true`, exit cleanly (no error, no alert).

If found: mark `status = 'writing'`, `updated_at = now()`, `workflow_run_id = <uuid>`.

### 3. HTTP Request — fetch doctrine skills

In parallel (5 HTTP requests):

```
GET https://raw.githubusercontent.com/DaybyDay-csv/daybyday-skills/<PINNED_SHA>/
    tono-humano/SKILL.md
    ethical-conversion-system/SKILL.md
    direct-response-copy-engine/SKILL.md
    copy-estilo-jesus/SKILL.md
    mecanicas-atencion-hooks/SKILL.md
```

`<PINNED_SHA>` is stored as a workflow static value. Update it manually when the skills repo evolves (with a test post first).

### 4. Code — assemble the writer prompt

This is the heart. The function assembles a single user message that contains:

```
SECTION 1 — DOCTRINE (read all of this before writing a single word)
[full text of tono-humano SKILL.md]
[full text of ethical-conversion-system SKILL.md]
[full text of direct-response-copy-engine SKILL.md]
[full text of copy-estilo-jesus SKILL.md]
[full text of mecanicas-atencion-hooks SKILL.md]

SECTION 2 — THE BRIEF
- Slug: <slug>
- Title: <title>
- Thesis: <thesis>
- Primary keyword: <primary_keyword>
- Secondary keywords: [...]
- FAQ: [...]
- Intent: <intent>
- Archetype: <archetype>
- Target word count: <target_word_count>

SECTION 3 — VERIFIED SOURCES (use ONLY these, in this order of priority)
[for each source in brief.sources[]:]
  T<N> · <label>
  URL: <url>
  Lastmod: <lastmod>
  Use for claim: <claim_for>
  Excerpt: <snippet_excerpt>

SECTION 4 — OUTPUT CONTRACT

Write the post in this exact format:

---
slug: <slug>
title: <title>
meta_desc: <155 chars, includes primary keyword, no clickbait>
primary_keyword: <primary_keyword>
secondary_keywords: [...]
h1: <h1, includes primary keyword>
migration_state: "rendered"
date: <YYYY-MM-DD>
sources:
  - label: <source 1 label>
    url: <source 1 url>
  ...
faq:
  - q: <faq question>
    a: <faq answer>
related:
  - <slug-of-related-post-1>
  - <slug-of-related-post-2>
  - <slug-of-related-post-3>
---

<post body in markdown, 1100-1700 words, all gates must pass>

DOCTRINE REMINDERS (these are the qa-checklist hard fails):
- No "verdaderamente", "sinceramente", "en términos de", "a nivel de"
- No "no es X, es Y" as empty antithesis
- No anaphora stacks
- No staccato triplets
- No rhetorical question as hook ("¿El resultado? X")
- No "Here's the thing", "Mira..." (without content after)
- No bold/italic/underline in body (allowlist: **N. Word.** numbered framework labels only)
- 3+ concrete numbers (not "muchos", "varios")
- 3+ rhetorical moves from the repertoire
- Has epígrafe/quote, promise, authority drop, framework, real example, pro tip, action step, recap
- Cliffhanger at the end

CITATION DISCIPLINE:
- Use ONLY the URLs in SECTION 3
- Each citation must back a specific claim, not be decorative
- Inline [n] notation preferred; sources[] array maps to those [n]
- DO NOT invent URLs even if you think a related one exists
- DO NOT cite user-facing URLs that aren't in SECTION 3

VOICE:
- Tuteo, 4-12 word sentences, no adverbs ending in -mente (max 2)
- Sound like a friend in a café, not a coach in a BMW
- Read aloud before submitting
```

### 5. HTTP Request — call the LLM

Model selection (configurable per workflow):

| Use case | Model | Why |
|---|---|---|
| Default writing | `claude-opus-4-5` (or latest) | Best long-form reasoning + doctrine adherence |
| Cheap fallback | `claude-sonnet-4-5` | 10x cheaper, ~85% as good for this task |
| Forbidden | `gpt-4o`, `gpt-4-turbo` | Hallucinates sources more, weaker on tone |

Endpoint: Anthropic Messages API.
```
POST https://api.anthropic.com/v1/messages
Headers:
  x-api-key: $ANTHROPIC_API_KEY
  anthropic-version: 2023-06-01
Body:
  model: claude-opus-4-5
  max_tokens: 4096
  messages:
    - role: user
      content: <assembled prompt from node 4>
```

Set `temperature: 0.7` (some creativity, not zero-shot deterministic).

### 6. Code — extract the markdown

The LLM returns the post inside a markdown code fence (or sometimes loose). Extract:

1. Strip ```markdown / ``` fences if present.
2. Find the `---` frontmatter delimiter pair (first occurrence) → that's the frontmatter.
3. Everything after the second `---` is the body.
4. Parse frontmatter with a small YAML-ish parser (no need for full YAML, the frontmatter is constrained).

If extraction fails: alert (Telegram), mark brief as `status = 'failed'` with reason.

### 7. Write — save to disk

Path: `/var/lib/n8n/workspace/daybyday-blog/content/<slug>.md`

Use the n8n **Write Binary File** node. The `/var/lib/n8n/workspace/` is a checked-out clone of `DaybyDay-csv/DaybyDayWeb-HTML`, refreshed at workflow start.

### 8. Execute Command — run qa-checklist

```bash
cd /var/lib/n8n/workspace/daybyday-blog
node scripts/qa-checklist.mjs <slug> > /tmp/qa-<slug>.json
```

Parse stdout as JSON. Capture exit code.

### 9. IF — verdict handling

- **`publicar`** (exit 0): → continue to node 10
- **`reescribir`** (exit 3): → retry loop, see below
- **`regenerar`** (exit 2): → retry loop, see below

#### Retry loop (for `reescribir` or `regenerar`)

Max 3 retries. On each retry:

1. Take the qa issues list (`result.issues[]`).
2. Call LLM again with a focused feedback prompt:
   ```
   Your draft of "<slug>" failed these checks:
   [for each issue:]
   - <issue>

   Rewrite to fix ONLY these. Do not change anything that already passed.
   Re-emit the full markdown file with frontmatter.
   ```
3. Write the new draft to disk.
4. Re-run qa-checklist.
5. If still failing after 3 retries: mark `status = 'failed'`, send Telegram alert with all 3 verdict histories.

### 10. Execute Command — full pipeline

Once qa-checklist is green:

```bash
cd /var/lib/n8n/workspace/daybyday-blog
node scripts/rewrite-batch.mjs <slug> --no-index 2>&1 | tee /tmp/batch-<slug>.log
```

`--no-index` because indexation is the next workflow's job.

Parse output. If exit 0 AND `blog/<slug>.html` exists, → continue.

If exit non-zero: mark `status = 'failed'`, alert with the full log.

### 11. Execute Command — commit and push branch

```bash
cd /var/lib/n8n/workspace/daybyday-blog

git checkout -b blog/auto-<slug>-$(date +%Y%m%d)
git add content/<slug>.md blog/<slug>.html
# plus any updates to llms.txt, sitemap.xml, scripts/...
git -c user.email=bot@daybyday.local \
    -c user.name="DayByDay Bot" \
    commit -m "feat(blog): auto-write <slug>

Generated by write-with-doctrine v1.0
Brief: research-reality-layer run <run_id>
QA verdict: publicar
All 6 gates: pass"
git push origin blog/auto-<slug>-<date>
```

### 12. HTTP Request — open PR via GitHub API

```
POST https://api.github.com/repos/DaybyDay-csv/DaybyDayWeb-HTML/pulls
Authorization: Bearer $GH_TOKEN
Body:
  title: "feat(blog): auto-write <slug>"
  head: blog/auto-<slug>-<date>
  base: main
  body: |
    Auto-generated by write-with-doctrine.

    - Brief: <thesis>
    - Sources: <N> verified (T1: <n>, T2: <n>, T3: <n>)
    - QA verdict: publicar
    - Pipeline gates: all 6 pass
    - Word count: <n>

    Human review required before merge.
```

### 13. SQLite — mark brief complete

```sql
UPDATE research_briefs
SET status = 'written', updated_at = now()
WHERE slug = '<slug>';
```

Also insert into `published_posts`:
```sql
INSERT INTO published_posts (slug, pr_url, published_at)
VALUES ('<slug>', '<pr_url>', now());
```

### 14. Telegram — notify

```
✅ <slug> drafted and PR opened
PR: <pr_url>
Sources: T1=<n> T2=<n> T3=<n>
QA: publicar (after <n_retries> retries)
Word count: <n>
```

### 15. Webhook response (only for manual triggers)

Reply `200 { ok: true, slug, pr_url }`.

---

## Configuration / env vars

```
ANTHROPIC_API_KEY=sk-ant-...       # writer LLM
GH_TOKEN=ghp_...                   # open PR
TELEGRAM_BOT_TOKEN=...             # notify
TELEGRAM_CHAT_ID=...
SKILLS_PINNED_SHA=25862d1          # doctrine version, update with care
N8N_WORKSPACE_DIR=/var/lib/n8n/workspace/daybyday-blog
```

The workspace dir is a git clone, refreshed by a small cron:
```cron
*/5 * * * * n8n bash -c 'cd /var/lib/n8n/workspace/daybyday-blog && git fetch --quiet && git reset --hard origin/main >/dev/null 2>&1'
```

---

## Anti-hallucination guarantees

| Risk | Mitigation |
|---|---|
| LLM invents a URL | Source list is the ONLY URLs passed. The LLM is instructed to use ONLY those. qa-checklist verifies each via `verify-external-links.mjs` later. |
| LLM drops a source | `sources[]` array must have at least 1 T1 and 2 T2/T3 (enforced by research-reality-layer pass criteria). Writer sees this constraint. |
| LLM adds editorial commentary as fact | Doctrine bans invented proof. The writer prompt says "if a number isn't in the brief, do not write it." |
| LLM drifts from voice | 3-retry loop with explicit feedback each time. After 3 fails, human review. |
| LLM hallucinates FAQ answers | FAQ seed questions come from the brief. The LLM only writes the answer from sourced material. |

---

## What this workflow does NOT do

- It does not publish. Publishing requires human merge of the PR.
- It does not run the indexation phase (IndexNow + GSC push). That's the publish-and-index workflow.
- It does not rewrite legacy posts. That's a separate cron.
- It does not invent images. Hero images stay as they are (no AI image gen yet).

---

## Cost estimate (per post)

- LLM call 1 (full draft): ~12K tokens input + ~2K tokens output @ Opus pricing ≈ $0.40
- LLM call 2-4 (retries, if any): ~3K + 1K each ≈ $0.10 each, expected <1 per post
- SerpAPI queries: ~$0.01 per brief
- Anthropic + GitHub + Telegram: free tier fine
- **Total: ~$0.50 per post, $1/week at 2 posts/week**

Acceptable. Increase to $5/post if we move to a 200K-token context model.