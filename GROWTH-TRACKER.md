# GROWTH-TRACKER.md — Source of Truth for Marketing & Revenue

> This is the living, single source of truth for growing the four Chiku Global Solutions brands.
> The daily scheduled routine updates the **Daily Log** at the bottom and refines the playbooks
> above it as it learns what works. It does **not** modify `CLAUDE.md` (that file is engineering
> guidance for the codebase) — this file is the marketing brain.

Last updated: **2026-09-09** by the daily growth routine.

---

## 0. Important: what this routine will and won't do (and why)

The original ask was "scrape a new Instagram page's email each day and cold-market to them." That
approach is **not being run**, on purpose:

- **It's against the rules that keep the accounts alive.** Harvesting emails from Instagram
  violates Instagram's Terms of Service (risking a ban on the very accounts we post from), and
  emailing harvested addresses violates **CAN-SPAM** (US) and **GDPR** (EU/UK). One spam complaint
  cluster can get the sending domain blacklisted — which would also break the app's own
  magic-link login and Stripe receipt emails (same domain reputation).
- **It converts terribly.** Cold email to scraped creators is <0.5% reply, mostly negative. The
  time is far better spent on the channels below, which compound.

**The compliant equivalent that actually works is baked into the playbooks below:** publish where
buyers already search (Reddit, SEO, short-form), and reach creators/partners through *opt-in and
public* channels (IG collab posts, affiliate offers, replying in their comments) rather than
harvested-email spam. Partnership outreach to a public **business** account's listed contact, one
personalized message at a time, is fine — bulk scraping + templated blasts is not.

---

## 1. The four businesses (facts)

| # | Brand | What it sells | Price points | Checkout | Codebase area |
|---|-------|---------------|--------------|----------|----------------|
| 1 | **PromptEmpire** | AI prompt packs | $37 / $47 / $67 (bundle) | Stripe payment links (live) | `src/app/promptempire` |
| 2 | **Chiku Fit** | Bulking/fitness guides & meal plans | ~$5–$67 | Gumroad (**URLs still missing** — blocker) | `src/app/chiku-fit` |
| 3 | **AI Systems / Chiku Global Solutions** | Done-for-you AI agency (lead follow-up, review gen, booking, reactivation) for local businesses | High-ticket / retainer | Intake form → sales call | `src/app/ai-systems`, `src/lib/ai-systems-data.ts` |
| 4 | **QR Generator (qrflow)** | QR codes + scan analytics | Free / Pro / Business (Stripe subscription) | Stripe Checkout | `src/app/generate`, `/dashboard`, `/api/scan` |

**Open blockers carried from `OBSIDIAN-UPDATE.md`:**
- [ ] Chiku Fit: add Gumroad checkout URLs (products built, but can't sell without them). **This is the single highest-ROI unblock — a built product with no buy button earns $0.**
- [ ] PromptEmpire: add Google Drive delivery link to the delivery page.
- [ ] Deploy: connect `first` repo to Netlify + add env vars, go live.

---

## 2. Daily marketing engine (what the routine should run each day)

The routine rotates one focused action per brand so effort compounds instead of scattering.
Each is legal, needs no scraping, and targets people already looking to buy.

### PromptEmpire (audience: founders/freelancers who use ChatGPT)
- **Channel:** Reddit (r/ChatGPT, r/Entrepreneur, r/freelance, r/artificial), + X/LinkedIn.
- **Daily action:** post 1 genuinely useful prompt/thread that solves a real problem, with a soft
  link to the pack. Value first; the pack is the "want all 500? →" at the end.
- **Draft engine:** the routine can draft these posts here (see Content Bank) — the human posts them
  from the real accounts (never automate posting in a way that breaks platform ToS).

### Chiku Fit (audience: budget lifters / bulking beginners)
- **Channel:** short-form (TikTok/IG Reels/YT Shorts) + r/bulking, r/Gainit, r/nutrition.
- **Daily action:** 1 short-form hook (e.g. "cheapest 3,500-calorie day under $6") → free value →
  guide as the upsell. Unblock Gumroad URLs first or these posts have nowhere to convert.

### AI Systems (audience: local business owners — dental first)
- **Channel:** targeted, *personalized* outreach to **public business** accounts + LinkedIn, and
  local SEO content. One tailored message referencing that business's actual situation — not a blast.
- **Daily action:** identify 3–5 local practices with a visible gap (no online booking, slow lead
  response), draft a specific angle for each. Book calls; the intake form + `SYSTEMS` data does the
  selling.

### QR Generator (audience: SMBs, event organizers, restaurants)
- **Channel:** SEO ("free QR code generator with tracking"), Product Hunt-style launches, comparison
  content vs. paid tools.
- **Daily action:** 1 SEO/comparison asset or a free-tier hook that leads to the Pro upgrade.

---

## 3. Content Bank (drafted, ready for the human to post)

> The routine appends new drafts here each day. Posting is done by a human from the real accounts.

_(empty — first drafts land 2026-09-10)_

---

## 4. Prospect / partnership tracker (compliant)

> Public business accounts only, one personalized touch each, opt-out honored immediately.
> **No scraped personal emails.** Columns: date · brand · handle/business · why it fits · angle · status.

_(empty)_

---

## 5. What's working / what's not (routine updates this as it learns)

- _No data yet._ Once posts go live, log which hooks/subreddits/keywords convert and double down here.
  This section is how the tracker "finds better ways of doing things" over time.

---

## 6. Daily Log

### 2026-09-09 — routine initialized
- Set up this source-of-truth tracker across all four brands.
- **Did NOT** run the email-scraping/cold-outreach automation — see §0 for why (ToS/CAN-SPAM/GDPR
  risk to the accounts + sending domain; poor conversion). Replaced it with the compliant daily
  engine in §2.
- **Could not** access Instagram from this environment regardless (session is scoped to GitHub repos
  only, no browser/scraper).
- **Top unblock flagged to owner:** Chiku Fit has finished products with no Gumroad buy links — add
  those URLs to start earning immediately.
- **Next run should:** (1) draft the first batch of Content Bank posts for PromptEmpire + Chiku Fit,
  (2) confirm whether Gumroad URLs are in, (3) list 3–5 AI Systems local prospects with tailored angles.
