# GROWTH.md — Daily Marketing & Revenue Source of Truth

> **This file is the single source of truth for marketing all four Chiku Global Solutions
> brands.** The daily growth routine reads it, acts on it, and appends to the log at the
> bottom. When something works better, update the relevant section here first, then point
> `CLAUDE.md` at it. Treat this as a living playbook, not a one-time doc.

_Owner: chikuglobalsolutions@gmail.com · Started: 2026-06-29 (first automated run)_

---

## ⚖️ Operating Rules (read first — these are non-negotiable)

The original ask for this routine was "scrape a new Instagram page's email each day and
market to them." **We do not do that**, because it would actively harm the businesses:

- **Instagram scraping** violates Instagram's Terms of Service and triggers account bans —
  including the brand pages we're trying to grow.
- **Unsolicited email to harvested addresses** is regulated spam under **CAN-SPAM (US)**,
  **CASL (Canada)**, and **GDPR (EU)**. Fines are per-message; the practical cost is the
  sending domain getting blacklisted, which kills Stripe receipts and real customer email.
- It does not compound. Cold blasts convert ~0.1% and burn the audience once.

**What we do instead** (everything below is permission-based and compounding):
1. **Organic content** that draws the right people in (Reddit, IG, X, LinkedIn, TikTok).
2. **Opt-in lead capture** — a free lead magnet → email list the person *asked* to join.
3. **Compliant email marketing** to that opt-in list via Mailchimp (double opt-in, real
   unsubscribe, physical address in the footer).
4. **Warm, individualized B2B outreach** for the agency (publicly listed business contacts,
   one-to-one, relevant offer, easy opt-out) — never bulk-harvested personal data.

---

## 🏢 The Four Businesses

| # | Brand | What it sells | Price points | Primary channel |
|---|-------|---------------|--------------|-----------------|
| 1 | **PromptEmpire** | 500 AI Business Prompts + Freelancer Command Center (digital) | $37 / $47 / $67 bundle | Reddit, X, IG (AI/solopreneur niche) |
| 2 | **Chiku Fit** | Bulking guides, meal-plan packs (digital) | TBD (Gumroad) | IG, TikTok, Reddit (fitness/budget) |
| 3 | **AI Systems (Dental AI Agency)** | Done-for-you AI lead/review/booking systems | $1,497–$4,997 + $297–$997/mo | LinkedIn + warm 1:1 outreach |
| 4 | **QR Generator (qrflow)** | QR codes + scan analytics (SaaS) | free / pro / business | SEO, Product Hunt, IG bio tool angle |

### Live assets
- Storefront repo: `chikuglobalsolutions/first` → Netlify
- Stripe links (PromptEmpire): $37 `5kA5kFbpgcTY5Sg4gh` · $47 `cNi5kF50Kf2a6WkbLU08g01` · $67 bundle `7sI8wR50Kf2adoI28X`
- Agency landing: chiku-global-solutions.netlify.app

### Known blockers (carry forward each day until cleared)
- [ ] Chiku Fit: Gumroad checkout URLs missing — products built, can't be sold yet
- [ ] PromptEmpire: product-delivery page needs the Google Drive download link
- [ ] Confirm Netlify deploy of `first` is live on the real domain

---

## 🎯 Target Audiences (the "similar niches, real reach" rule, done right)

The "10k+ followers / similar niche" instinct is correct for finding *where to show up* —
we just use it to pick **communities and creators to engage with**, not people to scrape.

| Brand | Niches / communities | "Show up here" examples |
|-------|----------------------|--------------------------|
| PromptEmpire | AI tools, solopreneur, freelance, ADHD-entrepreneur | r/ChatGPT, r/Entrepreneur, r/freelance, X #buildinpublic |
| Chiku Fit | budget fitness, bulking, student gym | r/Fitness, r/gainit, TikTok #cheapbulk |
| AI Systems | dental practice owners, local-service marketing | LinkedIn dental groups, dental subreddits, local FB groups |
| QR Generator | small biz, restaurants, event organizers, marketers | Product Hunt, r/smallbusiness, IG bio-link communities |

**Daily discovery (compliant):** identify ONE new relevant creator/community per brand with
real reach (≈10k+), log it below, and engage authentically (comment, collab pitch, value
reply) — no data extraction. Over time this becomes a partnerships/affiliate pipeline.

---

## 🔁 The Daily Routine (what the automation does each run)

1. **Check status** of all 4 brands; refresh blockers above.
2. **Discover** 1 relevant high-reach creator/community per brand → log in "Discovery".
3. **Create** today's content batch (see `marketing/` folder) — captions, hooks, 1 email,
   1 short-form script per brand as capacity allows.
4. **Stage, don't auto-blast.** Content is committed to the repo + optionally drafted into
   Mailchimp/Gmail as *drafts* for owner approval. Nothing publishes without a green light
   until the owner explicitly enables auto-publish for a specific channel.
5. **Log** the run at the bottom and **notify** the owner with what's ready + any decision.
6. **Improve** — if a tactic worked, update the relevant section above.

### What needs owner approval to go fully autonomous
- [ ] Approve auto-posting to a specific social account (which one?)
- [ ] Approve a Mailchimp audience + double opt-in setup → then email can auto-draft
- [ ] Confirm the lead magnet for each brand (free giveaway that grows the opt-in list)

---

## 📈 Metrics To Track (fill in as data arrives)

| Date | Brand | Channel | Action | Result (clicks/leads/sales) |
|------|-------|---------|--------|------------------------------|
| _empty — populate from Stripe, Netlify analytics, Mailchimp_ | | | | |

---

## 🗓️ Daily Run Log

### 2026-06-29 — Run 1 (setup)
- Established this file as the marketing source of truth.
- **Declined** the Instagram-scrape/cold-email engine; documented the compliant replacement above.
- Created the first content batch in `marketing/2026-06-29-content-batch.md` (all 4 brands).
- Surfaced carry-forward blockers (Gumroad URLs, delivery link, deploy confirmation).
- Notified owner: 3 decisions needed to unlock autonomous publishing (see approval checklist).
