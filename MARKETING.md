# MARKETING.md — Chiku Global Solutions Growth Tracker

> **Source of truth for marketing & customer acquisition across all four businesses.**
> This file is updated by the daily growth routine. It does **not** replace the technical
> `CLAUDE.md` (that stays for code guidance) — it sits beside it. As the routine learns what
> works, playbooks and results get logged here.
>
> Last updated: **2026-07-04**

---

## 0. Read this first — how we get customers (and what we don't do)

The original ask was: "do an email scrape on a new Instagram page each day… creators with 10k+
followers in similar niches… then market to them." I did **not** build that, on purpose. Here's
the honest reasoning, because it protects the businesses:

- **Scraping Instagram violates its Terms of Service** and gets accounts/domains flagged. Meta
  actively pursues scrapers.
- **Emailing people who never opted in is unsolicited bulk email** — illegal under CAN-SPAM (US),
  CASL (Canada), and GDPR/PECR (EU/UK). Penalties are per-message and real. It also torches
  sender reputation, which means even your *legit* emails (Stripe receipts, customer replies)
  start landing in spam.
- It converts terribly. Cold-scraped lists to a $37 product is a rounding-error ROI while
  carrying legal + deliverability risk.

**What actually makes money for these products** (and what this tracker drives instead):

1. **Organic content** where the buyers already are (Reddit, X/Twitter, TikTok, IG Reels, LinkedIn).
   This is free, compounding, and 100% allowed. Content is drafted for you below — copy/paste.
2. **Opt-in list building** — a free lead magnet (PromptEmpire already has a 10-prompt preview at
   `/promptempire/preview`) → email capture → nurture sequence. These people *asked* to hear from
   you. This is the compliant version of "email marketing."
3. **Warm, personalized outreach for the agency** (AI Systems / dental) — researching a *small*
   number of local dental practices and sending genuinely personal, relevant emails is fine and
   effective. That's B2B relationship selling, not list-blasting. Cap it, personalize each one.

If you still want an Instagram angle: the compliant play is to **create IG content and engage**
with those 10k+ creators publicly (comment, collab, DM a real partnership offer) — not harvest
their followers' emails. Partnerships/affiliates with in-niche creators is the highest-leverage
version of what you were reaching for.

---

## 1. The four businesses

| # | Business | Product(s) | Price | Buyer | Where they hang out |
|---|----------|-----------|-------|-------|---------------------|
| 1 | **PromptEmpire** | 500 AI Business Prompts / Freelancer Command Center / Empire Bundle | $37 / $47 / $67 | Solopreneurs, freelancers, ADHD/neurodivergent founders | r/ChatGPT, r/Entrepreneur, r/freelance, X AI-tools scene, TikTok #aitools |
| 2 | **Chiku Fit** | 8-Week Mass Accelerator, Broke Bulk Meal Plan Pack, Complete Bulking System | TBD (Gumroad) | Skinny-guy/hardgainer lifters, budget-conscious | r/naturalbodybuilding, r/Gainit, r/Fitness, TikTok/IG gym niche |
| 3 | **AI Systems** (Chiku Global Solutions agency) | Done-for-you AI receptionist/booking for dental practices | $1,497–$4,997 + $297–$997/mo | Dental practice owners/office managers | LinkedIn, local dental FB groups, warm email, referrals |
| 4 | **QR Generator** (qrflow) | QR codes + scan analytics | Freemium (free/pro/business) | Small biz, restaurants, event/marketing folks | Product Hunt, r/smallbusiness, X build-in-public |

### Live assets
- **Stripe (PromptEmpire, all live):** $37 `buy.stripe.com/5kA5kFbpgcTY5Sg4gh` · $47 `buy.stripe.com/cNi5kF50Kf2a6WkbLU08g01` · $67 `buy.stripe.com/7sI8wR50Kf2adoI28X`
- **Free lead magnet:** `/promptempire/preview` (10 free prompts) — this is the top of the compliant funnel.
- **Storefront:** repo `chikuglobalsolutions/first` (Next.js, deploys to Netlify).

### Open blockers (from OBSIDIAN-UPDATE.md — need YOU)
- [ ] **Chiku Fit Gumroad checkout URLs missing** — products are built but can't be sold until you create the Gumroad listings and paste the URLs into the storefront. *This is the single biggest revenue blocker: an entire business line can't take money right now.*
- [ ] PromptEmpire product-delivery page needs the Google Drive download link.
- [ ] Deploy/confirm the storefront is live on Netlify with env vars set.

---

## 2. Daily routine (what runs each day)

Each run I will:
1. Refresh this tracker's status.
2. Draft **1 ready-to-post organic content piece per active business** (below), tuned to a platform.
3. Note the highest-leverage manual action for you (usually unblocking a listing or posting content).
4. **Only notify you when there's something you need to act on** — a blocker, a decision, or content ready to ship. No "all's well" pings.

What I will **not** do autonomously: scrape platforms, send unsolicited email, or post to your
social accounts without you connecting them and approving. Posting is a 60-second copy/paste for you.

---

## 3. Ready-to-post content — 2026-07-04

> These are organic, compliant, copy-paste ready. July 4th = high-traffic sale-hook day (US).

### PromptEmpire — Reddit (r/Entrepreneur or r/ChatGPT)
**Title:** I turned the 500 prompts I actually use to run my business into a pack. Here are 10 free.
**Body:** I've got ADHD and building systems from scratch every time was killing me, so I saved the
prompts that reliably get me a usable first draft — cold emails, pricing pages, onboarding sequences,
content calendars. Sharing 10 of them free, no email needed: [link to /promptempire/preview].
If they're useful the full 500 is $37. Happy to answer prompt questions in the comments.
*(Reddit rule: lead with genuine free value, engage in comments, don't spam links.)*

### PromptEmpire — X/Twitter (thread hook)
"I stopped writing business copy from a blank page. Now I paste one of 500 prompts and edit the output.
Here are 6 that replaced whole tasks for me 🧵" → list 6 one-liners → CTA: "Free sample of 10: [preview link]".

### Chiku Fit — TikTok/IG Reel script (⚠️ can't sell yet — needs Gumroad URL)
Hook: "You're not 'hard to build muscle.' You're eating like a bird and calling it a bulk."
3 quick points: eat in a surplus, progressive overload, and a cheap meal plan that actually hits protein.
CTA (once live): "Full 8-week plan + broke-bulk meal pack in bio." **Blocked on Gumroad URL — set it up and this line goes live.**

### AI Systems — LinkedIn post (agency demand-gen)
"A dental practice loses ~$50k+/yr to missed calls and no-shows. We install an AI receptionist that
books appointments 24/7 and cuts no-shows with automated reminders — live in under 2 weeks. If you run
a practice (or know someone who does), the intake form's in the comments." → link to `/ai-systems` intake.
*(Warm B2B. For direct outreach: research 5 local practices, send 5 genuinely personal emails — not a blast.)*

### QR Generator — r/smallbusiness / build-in-public X
"Made a free QR generator that tracks scans (how many, what device, when) so you can see if that
table-tent/flyer QR actually gets used. Free tier, no signup to try: [link]. What would you want it to track?"

---

## 4. Growth log

| Date | Actions drafted | Shipped by you? | Result / learning |
|------|-----------------|-----------------|--------------------|
| 2026-07-04 | Tracker created; content for all 4 businesses drafted; flagged Gumroad + delivery-link blockers | ⬜ pending | Baseline. Priority = unblock Chiku Fit sales + deploy storefront. |

---

## 5. Backlog / next best moves (ranked by $ leverage)
1. **Unblock Chiku Fit** — create Gumroad listings, paste checkout URLs. Unlocks a whole revenue line.
2. **Set up an opt-in email capture** on `/promptempire/preview` (compliant list building) + a 3–5 email nurture sequence. This is the real, legal "email marketing."
3. **Confirm storefront is live** on Netlify with Stripe/env vars so links actually convert.
4. **Post 1 organic piece/day** from section 3, rotating businesses. Reply to every comment.
5. **Agency:** hand-pick 5 dental practices/week, send 5 personalized warm emails. Track replies here.
6. Consider an **affiliate/collab** offer for in-niche 10k+ creators (the compliant version of the IG idea).

---
*Maintained by the daily growth routine · Chiku Global Solutions LLC*
