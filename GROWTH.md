# GROWTH.md — Marketing & Growth Source of Truth

This is the living source of truth for growing the four Chiku Global Solutions brands.
It is updated as we learn what works. Engineering guidance stays in `CLAUDE.md`; this file
is strictly about **getting customers and revenue**.

_Last updated: 2026-09-23_

---

## 0. Method decision (read this first)

The scheduled routine that spawned this file originally asked to **scrape emails from
Instagram pages and cold-market the creators**. That approach is **not used**, on purpose:

- Scraping contact data off Instagram breaks its Terms of Service and collects people's
  personal info without consent.
- Emailing scraped contacts is unsolicited bulk outreach (spam) and carries real legal
  exposure — CAN-SPAM (US), CASL (Canada), GDPR/PECR (EU/UK).
- Practically, it burns sender-domain reputation and gets our domains blacklisted, which
  would damage every brand's real email (order receipts, magic-link login, Stripe).

**What we do instead** — legitimate growth that compounds:

1. **Owned channels + content** — post consistently where each brand's buyers already are.
2. **SEO landing/comparison pages** — capture people actively searching to buy.
3. **Opt-in lead magnets** — trade value for an email people *choose* to give (this builds a
   list we can legally market to).
4. **Manual, personalized partnership outreach** — when we contact a creator, it's a
   researched 1:1 message to a public/business inbox proposing a genuine collab, sent by
   hand and tracked below — not an automated blast.

---

## 1. The four brands at a glance

| Brand | What it sells | Buyer | Primary channel | Money path |
|-------|---------------|-------|-----------------|-----------|
| **PromptEmpire** | AI prompt packs ($37 / $47 / $67) | solopreneurs, freelancers | Reddit, X, LinkedIn | Stripe links (live) |
| **Chiku Fit** | Bulking/meal-plan guides | gym beginners, budget lifters | Reddit, YouTube Shorts, TikTok | Gumroad (needs URLs) |
| **Chiku AI Systems** | Dental AI agency ($1.5k–$5k + retainer) | dental practice owners | LinkedIn, direct referral | Intake form → sales call |
| **QR generator (qrflow)** | QR + scan analytics | small biz, event/menu owners | SEO, Product directories | Freemium → pro plan |

---

## 2. Per-brand playbook + ready-to-use content

### PromptEmpire
**Channel focus:** Reddit (r/ChatGPT, r/Entrepreneur, r/freelance, r/SideProject), X, LinkedIn.
**Angle:** give away one genuinely useful prompt, link the pack as the "50 more" upsell.

Ready-to-post (value-first, non-spammy):
> **Hook:** "I automated my client onboarding with one ChatGPT prompt. Here's the exact prompt 👇"
> Post the full working prompt in the body. Last line: "I keep 500 of these organized by
> use-case — link in profile if you want the pack." (No link in the post body on Reddit.)

Do: post the free value first, build karma, link only in comments/profile per each sub's rules.
Don't: drop the Stripe link cold into threads — it's the fastest way to get banned.

### Chiku Fit
**Channel focus:** short-form video (TikTok/Reels/Shorts) + Reddit (r/gainit, r/naturalbodybuilding, r/EatCheapAndHealthy).
**Blocker:** Gumroad checkout URLs are still missing (see OBSIDIAN-UPDATE.md). **Fix this first — there is no money path until the buy buttons work.**

Ready-to-post:
> **Hook:** "How to bulk on $5/day (full grocery list)". Show the list, macros, and cost.
> CTA: "Full 8-week plan + meal pack in bio."

### Chiku AI Systems (dental agency)
**Channel focus:** LinkedIn + warm/manual outreach to local dental practices. Highest ticket, so quality over volume.
**Lead magnet already built:** the Revenue Leak Calculator (`ai-systems`, commit cf3a2ec) — drive traffic to it, capture opt-in leads, follow up personally.

Compliant outreach template (send by hand to a practice's *public business* inbox, personalized):
> Subject: quick idea for [Practice Name]'s missed after-hours calls
> Body: 2–3 sentences referencing something specific about their practice, one concrete
> number from the Revenue Leak Calculator, and a soft ask for a 15-min call. Include a real
> unsubscribe/opt-out line and our business identity.

### QR generator (qrflow)
**Channel focus:** SEO ("free qr code generator with tracking", "qr code analytics") + listings on tool directories.
**Angle:** the scan-analytics dashboard is the differentiator vs. the free generators.
Build comparison/use-case pages (restaurant menus, event check-in, retail) that rank and funnel to signup.

---

## 3. This week's priorities (highest leverage first)

- [ ] **Chiku Fit:** add Gumroad checkout URLs — unblocks all fitness revenue.
- [ ] **PromptEmpire:** confirm delivery page has the Google Drive product link.
- [ ] **All:** confirm the site is deployed on Netlify with env vars set (see OBSIDIAN-UPDATE.md).
- [ ] **AI Systems:** drive first traffic to the Revenue Leak Calculator; set up opt-in capture.
- [ ] **PromptEmpire:** post 1 value-first Reddit thread/day, rotating subs.

---

## 4. Outreach tracker (manual, personalized only)

| Date | Brand | Who (public/business contact) | Channel | Message angle | Result |
|------|-------|-------------------------------|---------|---------------|--------|
| _—_ | _—_ | _—_ | _—_ | _—_ | _—_ |

> Rule: every row is a hand-written, researched 1:1 message with an opt-out. No scraped
> lists, no automated sends.

---

## 5. Content shipped log

| Date | Brand | Platform | Piece | Link/Status |
|------|-------|----------|-------|-------------|
| _—_ | _—_ | _—_ | _—_ | _—_ |

---

## 6. What we've learned (update as results come in)

- _Nothing measured yet — fill in conversion/traffic notes here as data arrives._

---

## 7. Notes for future automated runs

A daily automated session **can** help with: drafting new content for the log above,
proposing SEO pages, checking the deploy/CI is healthy, and surfacing blockers. It should
**not** scrape platforms or send bulk/cold email. If list-building is wanted, do it through
opt-in lead magnets (Revenue Leak Calculator, free prompt, free meal plan) that capture
consented emails — then market to that list.
