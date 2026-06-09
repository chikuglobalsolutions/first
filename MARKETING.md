# MARKETING.md — Chiku Global Solutions Growth Tracker

> **This file is the single source of truth for marketing across all Chiku Global Solutions
> brands.** It is meant to be updated continuously — every outreach, every piece of content,
> every experiment, and every lesson learned goes here. When a better way of doing something
> is found, update the relevant section AND the "Playbook & Learnings" log so the knowledge
> compounds.
>
> Last updated: 2026-06-09 · Owner: Aku Nwabeke (chikuglobalsolutions@gmail.com)

---

## 0. How to use this file

- **Daily routine** lives in §1. Run it, then log what happened in §5 (outreach) and §6 (content).
- **Anything you learn** that changes how we should operate → §7 (Playbook & Learnings).
- Keep entries dated. Append, don't overwrite — the history is the asset.
- This is the marketing brain. `CLAUDE.md` is the engineering brain. They link to each other.

### Ground rules (read before doing outreach)

These exist to protect the business, not to slow it down:

1. **No scraping.** Do not scrape emails from Instagram, LinkedIn, or anywhere else. It
   violates their ToS, risks account bans, and feeds illegal cold-email lists.
2. **No unsolicited bulk cold email.** Blasting purchased/scraped lists gets our sending
   domain blacklisted — which would also send our Stripe receipts and NextAuth magic-links
   to spam, breaking the actual product. Not worth it.
3. **Outreach happens through channels people opened for it:** the public business/booking
   email in a creator's bio, Instagram/DM where they invite contact, their listed contact
   form, or warm intros. Always personalized, always one-to-one, never automated blasts.
4. **CAN-SPAM / GDPR basics on any email we do send:** real identity, real physical address
   (Wyoming LLC), working unsubscribe, no deceptive subject lines.

If a tactic can't pass these four rules, find a different tactic.

---

## 1. Daily routine (the "money loop")

Run this once per day. Time-box to ~45 min total.

| # | Step | Output | Logged in |
|---|------|--------|-----------|
| 1 | **Pick today's brand focus** (rotate, see §2) | 1 brand | — |
| 2 | **Find 3–5 aligned creators/partners** (10k+ followers, same niche) for the focus brand | shortlist | §5 |
| 3 | **Draft 1 personalized partnership outreach** to each, sent via their *public* business contact | 3–5 messages | §5 |
| 4 | **Produce 1 content piece** for the focus brand (caption + hook + visual brief) | 1 post | §6 |
| 5 | **Schedule/queue** the content (Canva for visuals, native scheduler) | queued post | §6 |
| 6 | **Log results** from yesterday's actions (replies, clicks, sales) | metrics | §4 |
| 7 | **Capture 1 learning** if anything surprised you | note | §7 |

**Weekly (Mondays):** review §4 metrics, double down on the channel/brand with best ROI,
kill what's flat. Update §7.

---

## 2. The four brands

All are product lines of **Chiku Global Solutions LLC (Wyoming)**. Rotate daily focus so each
brand gets attention ~2×/week.

### A. PromptEmpire — `/promptempire`
- **What:** 500 AI business prompts (10 categories) for freelancers & entrepreneurs, built
  specifically for people with ADHD who lose hours to writer's block.
- **Products:** 500 Prompts $37 · Freelancer Command Center $47 (most popular) · Empire Bundle $67 (best value, was $134).
- **Sold via:** Stripe payment links. Instant PDF + Notion template. 14-day refund.
- **Audience:** freelancers, agency owners, solopreneurs, ADHD founders, side-hustlers, beginners.
- **Core promise:** "Stop staring at a blank screen. Copy. Paste. Ship."
- **Best channels:** X/Twitter (build-in-public, AI tips), Reddit (r/ADHD_Entrepreneurs, r/freelance — value first), TikTok/IG Reels (prompt demos), Gumroad/Product Hunt.
- **Aligned creator niches:** AI productivity, ADHD/neurodivergent creators, freelance coaches, "AI for solopreneurs" accounts.

### B. Chiku Fit — `/chiku-fit`
- **What:** Training + nutrition guides for skinny beginners who want size/strength without a $200/mo coach or $500/mo food budget.
- **Products:** 8-Week Mass Accelerator **$49.99 (LIVE on Gumroad: chikuglobal.gumroad.com/l/teliz)** · Broke Bulk Meal Plan $29.99 (coming soon) · Complete Bulking System $89.99 (coming soon).
- **Audience:** skinny/"hardgainer" beginners, broke college lifters, men 16–28 starting from zero.
- **Core promise:** "Build real size. On a budget. No coach required."
- **Best channels:** TikTok + IG Reels (transformation/educational), YouTube Shorts, Reddit (r/naturalbodybuilding, r/Gainit — value first, no spam).
- **Aligned creator niches:** natural bodybuilding, hardgainer/skinny-to-muscle, budget fitness, beginner gym creators.

### C. AI Systems / "Dental AI Agency" — `/ai-systems`
- **What:** Done-for-you AI automation systems for local & service businesses (lead follow-up, review generation, booking optimization, AI sales assistant, reactivation, reporting). Has an intake form.
- **Products:** Service/agency engagements (not a fixed-price digital product). Lead gen via intake form.
- **Audience:** owners of dental/medical practices, law firms, real estate, local services (HVAC/plumbing), restaurants, e-comm, SaaS, coaches, agencies, etc.
- **Core promise:** "Stop losing leads, reviews, and bookings to slow follow-up. AI handles it 24/7."
- **Best channels:** LinkedIn (owner-targeted thought leadership + case-snapshot posts), niche FB groups, direct partnership with industry consultants, cold-but-personalized outreach to *businesses* (B2B, their public contact).
- **Aligned partner niches:** practice-management consultants, local marketing agencies (white-label), industry associations.

### D. QR Generator (pkg `qrflow`) — `/generate`, `/dashboard`
- **What:** QR code generator with scan tracking/analytics. The app's origin product.
- **Products:** free/pro/business plans (Stripe subscription). `PLANS` in `src/lib/stripe.ts`.
- **Audience:** small businesses, event organizers, restaurants (menus), marketers needing trackable QR.
- **Core promise:** "QR codes that tell you who scanned, when, and where."
- **Best channels:** SEO (huge intent for "qr code generator"), Product Hunt, comparison/listicle content, IG/TikTok for use-case demos (restaurant menus, event check-in).
- **Aligned creator niches:** small-business tips, restaurant marketing, event planning, marketing-tool reviewers.

---

## 3. Channels & assets (status)

| Channel | Brand(s) | Handle/URL | Status | Notes |
|---------|----------|-----------|--------|-------|
| Instagram | all | _TODO add handles_ | ⬜ set up | confirm handles |
| TikTok | Chiku Fit, PromptEmpire | _TODO_ | ⬜ | highest organic upside |
| X/Twitter | PromptEmpire | _TODO_ | ⬜ | build-in-public |
| LinkedIn | AI Systems | _TODO_ | ⬜ | B2B owner targeting |
| YouTube | Chiku Fit | _TODO_ | ⬜ | Shorts first |
| Reddit | PromptEmpire, Chiku Fit | _TODO_ | ⬜ | value-first only |
| Email list | all | Resend / Mailchimp | ⬜ | Mailchimp MCP available |
| Product Hunt | QR, PromptEmpire | — | ⬜ | one-time launch each |

> **Action needed from owner:** drop the real handles/URLs above so outreach and cross-promo
> can link correctly.

---

## 4. Metrics dashboard

Update weekly. Numbers > vibes.

| Week of | Brand | Posts shipped | Outreach sent | Replies | Site clicks | Sales | Revenue |
|---------|-------|---------------|---------------|---------|-------------|-------|---------|
| 2026-06-09 | — | 0 | 0 | 0 | — | — | — |

**Baseline to fill in (owner):** current monthly revenue per brand, current email list size,
current follower counts. Without baselines we can't prove what's working.

---

## 5. Outreach log

Personalized partnership outreach only (see Ground Rules). One row per contact.

| Date | Brand | Creator/Business | Niche | Followers | Channel used | Angle | Status |
|------|-------|------------------|-------|-----------|--------------|-------|--------|
| _example_ | Chiku Fit | (name) | natural bb | 24k | bio business email | affiliate 40% on $49.99 guide | drafted |

**Outreach angles that fit our brands:**
- **Affiliate / rev-share:** give creators a tracked link + commission (e.g. 30–40% on Chiku Fit / PromptEmpire digital products — high margin).
- **Free product for honest review:** zero-cost for us on digital goods.
- **Content collab:** co-create a Reel/post; cross-promote to both audiences.
- **White-label (AI Systems):** partner with local agencies/consultants to resell our systems.

---

## 6. Content log

| Date | Brand | Format | Hook | Status | Link/file |
|------|-------|--------|------|--------|-----------|
| 2026-06-09 | all | starter batch | see `marketing/content/` | drafted | `marketing/content/` |

First batch lives in `marketing/content/` (one file per brand). Pull from there, customize,
ship, then log the specific post here.

---

## 7. Playbook & Learnings (the compounding knowledge base)

> Append dated entries. This is what makes tomorrow better than today. When something works
> or fails, write down *why* you think so.

- **2026-06-09 — Setup.** Established this tracker as source of truth. Decided against
  scraping/cold-blast tactics (deliverability + legal + ToS risk would damage core product
  email). Strategy: organic content engine + personalized partnership/affiliate outreach.
  Highest-leverage bets by brand: Chiku Fit → TikTok/Reels; PromptEmpire → X + Reddit;
  AI Systems → LinkedIn B2B; QR → SEO. Digital products have ~100% margin, so affiliate
  commissions of 30–40% are cheap, high-ROI acquisition.

---

## 8. Open questions for the owner

1. Real social handles/URLs for each brand (for §3 + cross-promo links)?
2. Current baselines: revenue/brand, list size, follower counts (for §4)?
3. Affiliate commission % you're comfortable offering on Chiku Fit / PromptEmpire?
4. For AI Systems: do you want inbound (content + intake form) or active B2B outreach first?
5. Should I set up a daily `/loop` to run §1 once a real social account + scheduling path exists?
