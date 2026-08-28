# Marketing Tracker — Chiku Global Solutions (Source of Truth)

> This file is the running source of truth for marketing the four brands. It is
> updated by the scheduled "daily business check" routine. It intentionally does
> **not** overwrite `CLAUDE.md` — that file is the engineering source of truth and
> stays clean. Marketing knowledge lives here.

_Last routine run: 2026-08-28_

---

## The four businesses

| # | Brand | What it sells | Storefront route | Payment | Primary channel |
|---|-------|---------------|------------------|---------|-----------------|
| 1 | **PromptEmpire** | AI prompt packs ($37 / $47 / $67) | `/promptempire` | Stripe payment links (live) | Reddit, X, organic social |
| 2 | **Chiku Fit** | Fitness guides / meal plans | `/chiku-fit` | Gumroad (needs checkout URLs) | Instagram/TikTok organic, Reddit |
| 3 | **Chiku AI Systems** | Dental AI agency ($1.5k–$5k + retainer) | `/ai-systems` | Sales call → invoice | Warm B2B outreach, LinkedIn |
| 4 | **QR generator (qrflow)** | QR codes + scan analytics | `/generate`, `/dashboard` | Stripe subscription (free/pro/business) | SEO, product-led, X |

Stripe/Gumroad status and deploy blockers are tracked in `OBSIDIAN-UPDATE.md` — keep the two in sync.

---

## ⛔ Method correction: no email scraping / cold blasting

The routine was originally described as "scrape a new Instagram page's email each
day and auto-market to them." **That path is off the table** and this tracker
replaces it, for reasons that protect the businesses:

- **Deliverability suicide.** Blasting scraped, non-opted-in addresses gets the
  sending domain flagged and blocklisted. That destroys the deliverability of the
  *real* transactional + customer email these businesses depend on (Stripe receipts,
  magic-link login, agency proposals). One spam run can quietly break everything.
- **Legal exposure.** Unsolicited commercial email to harvested contacts is
  regulated by CAN-SPAM (US, up to ~$50k/email), CASL (Canada), and GDPR (EU).
  Instagram email scraping also violates Instagram's Terms of Service.
- **It converts badly.** Cold-scraped creator lists convert far worse than the
  organic + partnership + SEO engine below, for more risk.

**What replaces it:** a permission-based engine — owned-audience organic content,
community/SEO reach, and *manual, personalized* partnership outreach (opt-in, one
at a time, clearly identified). This is what actually compounds into revenue.

---

## The daily marketing engine (compliant, compounding)

Each brand gets one lightweight daily action. The routine drafts the assets; a
human posts/sends them (posting to social and emailing third parties are
outward-facing actions that need a person in the loop).

| Brand | Daily action | Owned asset |
|-------|--------------|-------------|
| PromptEmpire | 1 value post (a usable prompt) + soft CTA | X thread / Reddit comment |
| Chiku Fit | 1 tip or transformation hook | IG/TikTok caption |
| AI Systems | Research 1 warm dental-practice lead, draft 1 personalized note | LinkedIn/email draft |
| qrflow | 1 SEO/use-case snippet ("QR codes for restaurants" etc.) | blog/landing copy |

**Partnership prospecting (the compliant version of "find a 10k+ creator in the niche"):**
identify one relevant creator/affiliate per brand and draft a *personalized partner
pitch* (collab / affiliate / shoutout-swap) — not a scraped cold email. Sent
one-at-a-time by a human. Log prospects in the table below.

> Note: this environment has no Instagram/web-browsing tool, so creator discovery
> is done from names the user supplies or from public sources a human checks. The
> routine cannot verify a follower count itself — that's a human step.

---

## Ready-to-post content — drop for 2026-08-28

Copy/paste these. Nothing here has been published; posting is a human step.

### PromptEmpire — X post
> Most people use ChatGPT like a search engine. Try this instead:
> "Act as my COO. Here's my week: [dump]. Rank what actually moves revenue,
> cut the busywork, and give me a 3-task day."
> I packaged 500 prompts like this for founders → [link]

### Chiku Fit — Instagram caption
> You don't need 2 hours in the gym. You need 45 focused minutes and progressive
> overload. Here's the exact 4-day split I used to add real size on a budget 👇
> Full 8-week plan (with the broke-bulk meal pack) in bio.

### Chiku AI Systems — LinkedIn / warm outreach draft
> Subject: quick idea for [Practice Name]'s front desk
> Hi [Name] — I build AI phone/reception agents for dental practices so no
> after-hours call goes to voicemail (missed calls = missed $300+ appointments).
> Worth a 15-min look? Happy to show a live demo on your own numbers.
> — [Your name], Chiku AI Systems

### qrflow — SEO snippet ("QR codes for restaurants")
> H1: Free QR Code Menus for Restaurants — with Scan Analytics
> Generate a branded QR code for your menu in seconds, then see exactly how many
> diners scan it, on what device, and when your rushes hit. No app, no reprints.
> CTA: Make your menu QR free →

---

## Partnership / collab prospect log

| Date | Brand | Prospect (handle) | Niche | 10k+? (human-verified) | Status |
|------|-------|-------------------|-------|------------------------|--------|
| _(add as identified)_ | | | | | |

---

## What each routine run does

1. Read this file + `OBSIDIAN-UPDATE.md` for current state.
2. Draft the day's content drop (above) for each brand.
3. Draft any partnership pitches from prospects the user has supplied.
4. Update the "This week" checklist and prospect log.
5. **Notify the user** with what's ready and any decision needed.
6. **Never** post to social, send email, or scrape third-party contacts autonomously.

## Decisions needed from the user

- [ ] **Pick the primary paid channel to actually run** (or confirm organic-only). The
      engine above is drafted but nothing goes out until a human posts/sends.
- [ ] Supply Gumroad checkout URLs so Chiku Fit can actually take money.
- [ ] Confirm: keep marketing to a permission-based engine (recommended), or discuss
      what compliant outreach you want instead of the scraping approach.

---
_Marketing source of truth. Engineering source of truth remains `CLAUDE.md`._
