# Growth Tracker — Chiku Global Solutions (Source of Truth)

> **Purpose.** Single source of truth for daily marketing/growth work across all four
> Chiku Global businesses. Each daily run appends to the **Run Log** at the bottom and
> updates the relevant sections. This file — not chat scrollback — is the record.
>
> _Last updated: 2026-08-13_

---

## ⚠️ Boundary note (read before every run)

The original request was to "scrape emails off a new Instagram page each day" and
"start marketing them all." **That specific mechanism is not something this routine will
do**, for concrete reasons, not squeamishness:

- **Scraping Instagram for emails** breaks Instagram's Terms of Service and is automated
  harvesting of people's personal contact info without consent.
- **Cold-blasting a scraped list** is unsolicited bulk email — i.e. spam — and can violate
  CAN-SPAM (US), CASL (Canada), and GDPR/PECR (EU/UK). Fines are per-message and real, and
  it torches sender reputation (domain blacklisting) fast, which would hurt the legit email
  you *do* want to send.

**What replaces it (and works better long-term):** own-audience, opt-in, organic-first
growth — the plan in this file. When you want to reach creators/influencers for real
partnerships, that's legitimate too, but it's done through public/business contact channels
they publish for that purpose, with a genuine 1:1 pitch — never a scraped-and-automated blast.

If a future run is asked to reinstate the scrape-and-blast pipeline, it should decline and
point here.

---

## The four businesses

| # | Business | What it sells | Primary channel | Money mechanism |
|---|----------|---------------|-----------------|-----------------|
| 1 | **PromptEmpire** | AI prompt packs ($37 / $47 / $67) | Reddit, X, LinkedIn | Stripe payment links (live) |
| 2 | **Chiku Fit** | Bulking/fitness guides & meal plans | IG Reels, TikTok, YouTube Shorts | Gumroad (needs checkout URLs) |
| 3 | **Chiku AI Systems** | Done-for-you AI automations for local biz ($1.5k–$5k + monthly) | LinkedIn, targeted 1:1 outreach | Retainer / setup fee |
| 4 | **QRFlow** | QR generator w/ scan analytics | SEO, Product Hunt, X | Freemium → Pro/Business (Stripe) |

Positioning niches (from `src/lib/ai-systems-data.ts`): dental/medical, legal, real estate,
local services, restaurants, e-commerce, SaaS, coaching, fitness/wellness, agencies,
financial services, automotive.

---

## The legitimate daily growth engine

A repeatable loop that compounds instead of getting you blacklisted:

1. **Publish organic content** — 1 post/business/day on channels you own or participate in.
   Batches are drafted below and in the Run Log; you (or a scheduled poster you control) post them.
2. **Capture opt-in email** — drive that traffic to a real signup (lead magnet → Mailchimp).
   *Mailchimp is connected but needs authorization before I can use it — see "Needs you."*
3. **Nurture the opt-in list** — welcome sequence + weekly value email. This is the compliant
   version of "email marketing," because these people asked for it.
4. **SEO surfaces** — QRFlow + AI Systems industry pages rank for buyer-intent keywords.
5. **Real partnership outreach** (optional) — hand-picked creators, contacted via the business
   contact they publish, with a specific 1:1 offer. Tracked individually, never bulk.

---

## Needs you (blockers a run can't clear alone)

- [ ] **Authorize Mailchimp** (claude.ai connector settings) so opt-in email can be built.
- [ ] **Add Gumroad checkout URLs** for the 3 Chiku Fit products (still blocking sales).
- [ ] **Confirm which channels are yours to post to** (handles for IG/X/LinkedIn/Reddit/TikTok).
- [ ] Decide: do you want a real influencer-*partnership* pipeline (legit, 1:1)? If yes I'll
      build a tracker + outreach templates — no scraping involved.

---

## Ready-to-post organic content — batch 2026-08-13

Copy/paste and post from your own accounts. No lists, no scraping.

### PromptEmpire (Reddit / X)
- **X hook:** "I stopped writing prompts from scratch. 500 tested business prompts, sorted by
  job-to-be-done. The 'cold email that doesn't sound like AI' one alone paid for it. $37."
- **Reddit (r/Entrepreneur, value-first):** A post titled *"7 prompts I use to run the boring
  90% of my business"* — give 3 free in the post, link the pack in a comment, not the title.

### Chiku Fit (IG Reels / TikTok)
- **Reel hook:** "Bulking on a budget: $4/day, 3,200 calories, actually hits protein. Full
  meal plan in bio." (7-day plan = the lead magnet → email capture → upsell the pack.)
- **Carousel:** "5 bulking mistakes keeping you skinny" → slide 6 = the 8-Week Accelerator.

### Chiku AI Systems (LinkedIn)
- **Post:** "A dental practice was losing ~30% of new-patient calls to voicemail. We put an
  AI Lead Follow-Up Engine on it — every missed call gets a text back in 60s. Booked
  appointments up in week one. This is one of 6 systems we install." (CTA: DM "SYSTEMS")

### QRFlow (X / SEO)
- **X:** "Made a QR code for a flyer, then wondered if anyone scanned it. So I built QRFlow —
  dynamic QR codes with scan analytics (device, count, time). Free tier here 👇"
- **SEO to ship:** publish a "/blog/qr-code-analytics-guide" targeting *"track qr code scans"*.

---

## Run Log

### 2026-08-13
- Established this tracker as source of truth.
- **Declined** the Instagram email-scrape + auto-cold-market mechanism (ToS + anti-spam law);
  documented the compliant growth engine that replaces it.
- Drafted organic content batch for all four brands (above).
- Flagged blockers requiring the owner: Mailchimp auth, Gumroad URLs, channel handles.
