# source-authority-tiers.md — canonical authority list for the research-reality-layer

Every claim in a DayByDay blog post must trace to one of these sources, or be flagged. Tiers ordered by trust; the n8n `research-reality-layer` workflow checks every cited URL against this list.

---

## T1 — Primary vendor / regulator docs

**Use**: definitions, official specs, current numbers, terms of service, API docs, policy.

**Trust**: absolute. No debate.

**Rules**:
- T1 sources trump everything. If Meta says ROAS means X, we say X.
- Always cite with the canonical URL (not blog posts about the source).
- Capture `lastmod` from the page if available; recency matters for stats.

**Domains**:
```
ads.google.com                  # Google Ads docs
business.google.com             # Google Business Profile
developers.google.com           # Google APIs (GA4, GSC, etc.)
support.google.com              # Google product support
search.google.com               # Google Search Central
analytics.google.com            # GA4 product

business.meta.com               # Meta Business Help
www.meta.com                    # Meta corporate
developers.facebook.com         # Meta Marketing API
developers.instagram.com        # IG API
web.facebook.com                # FB Ads Manager help

ads.tiktok.com                  # TikTok Ads
ads.linkedin.com                # LinkedIn Ads
ads.x.com                       # X Ads
business.pinterest.com          # Pinterest Ads
ads.snapchat.com                # Snapchat Ads

ec.europa.eu                    # EU regulation (GDPR, DSA, DMA)
gdpr.eu                         # GDPR official text
aepd.es                         # Spanish DPA
agpd.es                         # (alias)
ico.org.uk                      # UK ICO
ftc.gov                         # US FTC
sec.gov                         # US SEC

icann.org                       # DNS / domain policy
w3.org                          # Web standards
schema.org                      # Structured data
```

---

## T2 — Tier-1 industry analysts + research firms

**Use**: market sizing, trend data, benchmarks, forecasts.

**Trust**: high, but cite the specific report (not the homepage).

**Rules**:
- Always cite the report URL, not the analyst's blog.
- Capture the report year. Anything >2 years old = recency warning.
- Don't paraphrase a chart; cite the exact figure with date.

**Domains**:
```
gartner.com                     # Gartner
forrester.com                   # Forrester
idc.com                         # IDC
emarketer.com                   # eMarketer (Insider Intelligence)
statista.com                    # Statista (with caveat: paywalled, cite the URL you actually accessed)
mckinsey.com                    # McKinsey
bcg.com                         # BCG
bain.com                        # Bain
deloitte.com                    # Deloitte Insights
pwc.com                         # PwC
accenture.com                   # Accenture
nielsen.com                     # Nielsen
kantar.com                      # Kantar
```

---

## T3 — Established publishers + encyclopedias

**Use**: factual reference, historical context, common-knowledge primers.

**Trust**: high for facts, medium for opinions. Encyclopedias are reference, not primary.

**Rules**:
- Wikipedia OK as a definition source; do NOT use Wikipedia as the sole source for a contested claim.
- News outlets OK for events with dates; do NOT use op-eds.
- Always include publication date in the citation.

**Domains**:
```
wikipedia.org                   # Reference (use carefully)
britannica.com                  # Encyclopedia
reuters.com                     # Wire service
apnews.com                      # Wire service
bloomberg.com                   # Business news
ft.com                          # Financial Times
economist.com                   # The Economist
wsj.com                         # Wall Street Journal
nytimes.com                     # NYT
hbr.org                         # Harvard Business Review
sloanreview.mit.edu             # MIT Sloan Management Review
technologyreview.com            # MIT Technology Review
arstechnica.com                 # Tech press
theverge.com                    # Tech press
wired.com                       # Tech press
```

---

## T4 — Named D2C / ecommerce founders + public case studies

**Use**: real numbers from real operators, framework references, named tools.

**Trust**: variable. Trust the named operator; never trust anonymous.

**Rules**:
- Must be a named, identifiable person or company.
- Prefer primary sources (their own blog, podcast transcript, conference talk) over third-party write-ups.
- If a stat is from a third-party article, that article is the citation — not the original (unless verified).

**Domains / patterns**:
```
*casey*.* / *differ*.*           # casey bell, differ
*2xe* / *double*.*               # common 2xE branding
shivarback.com / irshad.com / ... # known founders (curated list)
.shopify.com                    # Shopify case studies (their customers)
*podcast*.com / youtube.com     # podcast transcripts (cite the episode)
```

**Curated named-operator list** (the n8n workflow has this as a code node):
- Andrew Youderian (eCommerceFuel)
- Klaviyo case studies (with klaviyo.com brand confirm)
- TripleWhale customers (their blog, with explicit customer quote)
- Postscript case studies
- RetentionX / Northbeam blog posts
- Latin America D2C operators: Grow, Wabi, Moova founders (when published)

---

## T5 — Specialist trade press (D2C, performance marketing)

**Use**: tactical how-to, recent platform changes, niche benchmarks.

**Trust**: medium. Cross-check with T1/T2 when claiming a number.

**Rules**:
- Prefer sources with named authors and editorial standards.
- Recency check: <12 months old preferred for tactical posts.
- If you cite a "study," find the underlying primary source — trade press summarizing a study is not the study.

**Domains**:
```
modernretail.co                 # Modern Retail
retaildive.com                  # Retail Dive
adweek.com                      # Adweek
digiday.com                     # Digiday
marketingweek.com               # Marketing Week (UK)
ppc.land                        # PPC.land
searchengineland.com            # Search Engine Land
searchenginejournal.com         # SEJ
moz.com                         # Moz (SEO)
ahrefs.com                      # Ahrefs (SEO)
semrush.com                     # Semrush blog
backlinko.com                   # Backlinko
```

---

## Blocklist — never cite

These fail the trust gate regardless of content:

```
medium.com                      # Anyone can publish; cite the author elsewhere
linkedin.com/pulse              # Same; cite the author's actual publication
quora.com                       # User-generated
reddit.com                      # User-generated (cite specific thread only as anecdotal)
forbes.com/sites/*              # Contributor network (forbes.com/contributors/*) — verify the contributor
*.wordpress.com                 # Generic blog; cite specific author domain
*.blogspot.com                  # Same
hubspot.com/marketing/*         # Vendor content; OK for their product, not for third-party stats
```

---

## The verification protocol (run by `research-reality-layer`)

For every URL in the brief's `sources[]`:

1. **Resolve domain** → classify into T1-T5 or blocklist.
2. **HEAD request** → must be 2xx (or 3xx that resolves to 2xx within 3 hops).
3. **Recency check** → fetch page, look for `<meta name="date">`, JSON-LD `datePublished`, or visible year. Flag if >24 months old.
4. **Claim mapping** → every claim in the brief must have a `source[N]` reference. Uncited claims → flag.
5. **Tier floor** → a brief must have at least:
   - 1 T1 source (a vendor doc OR a regulator OR an encyclopedia definition)
   - 2 T2/T3 sources (analyst or established publisher)
   - 0 blocklist hits
6. **Output**: enriched brief with `{ tier, status, lastmod, claim_for }` per source. Pass to write-with-doctrine.

A brief that fails any of (1)-(5) is queued for human review (Telegram ping with the diff) rather than auto-passed.

---

## Why this matters

Without an authority tier, the writer agent hallucinates plausible-looking sources. With it, every claim has a paper trail, and the writer is forced to pick from real, verified material. This is what makes the system "real-backed" instead of "looks legit at a glance."