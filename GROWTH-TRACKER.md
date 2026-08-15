# GROWTH TRACKER — Chiku Global Solutions LLC

> **This file is the marketing/growth source of truth.** The daily growth routine reads
> and updates it. Development instructions live in `CLAUDE.md`; this file governs
> marketing, content, and lead-gen. When something here changes materially, add a dated
> entry to the **Daily Log** at the bottom rather than silently overwriting.

_Owner: chikuglobalsolutions@gmail.com · Last updated: 2026-08-15_

---

## 0. Read this first — how growth actually happens here (a compliance guardrail)

The original brief asked to **scrape emails from a new Instagram page each day and cold-market
to those creators**. This routine does **not** do that, and the reason matters for the
business, not just for policy:

- **It violates Instagram's Terms of Service.** Automated scraping of profiles/contact info
  is grounds for account bans and, historically, legal action against scrapers.
- **Cold-emailing scraped addresses is unlawful marketing** in most of the business's likely
  markets — CAN-SPAM (US) at minimum, and CASL (Canada) / GDPR (EU) treat non-consented
  marketing email as a finable offense. Scraped lists also wreck sender reputation, which
  poisons the deliverability of the legitimate email you *do* want to land.
- **It's outward-facing and irreversible**, and this routine runs unattended. Sending real
  messages to real third parties with no human in the loop is exactly the kind of action
  that should never be automated without review.

**What we do instead** — a compliant engine that actually compounds (see §4). The goal
("make money from the businesses") is unchanged; only the method is swapped for one that
scales without torching the brand or the sender domain.

---

## 1. The four businesses

| # | Business | What it sells | Monetization | Live surface |
|---|----------|---------------|--------------|--------------|
| 1 | **PromptEmpire** | AI prompt packs for entrepreneurs/freelancers | Stripe payment links ($37 / $47 / $67) | `/promptempire` |
| 2 | **Chiku Fit** | Fitness guides, meal plans, bulking programs | Gumroad (checkout URLs pending) | `/chiku-fit` |
| 3 | **Chiku AI Systems** | Done-for-you AI automation for local businesses (dental focus) | Retainer: Starter $1,497+$297/mo · Growth $2,497+$497/mo · Premium $4,997+$997/mo | `/ai-systems` |
| 4 | **QR Generator (qrflow)** | QR codes + scan analytics | Freemium → `pro`/`business` Stripe subscriptions | `/generate`, `/dashboard` |

### Product detail

**PromptEmpire** (Stripe links live — from `OBSIDIAN-UPDATE.md`)
- 500 AI Business Prompts — $37 — https://buy.stripe.com/5kA5kFbpgcTY5Sg4gh
- Freelancer Command Center — $47 — https://buy.stripe.com/cNi5kF50Kf2a6WkbLU08g01
- Empire Bundle — $67 — https://buy.stripe.com/7sI8wR50Kf2adoI28X

**Chiku Fit** (built, **blocked on Gumroad checkout URLs**)
- 8-Week Mass Accelerator · Broke Bulk Meal Plan Pack · Complete Bulking System (bundle)

**Chiku AI Systems** — offers 6 productized "systems": Lead Follow-Up Engine, Review
Generation, Booking Optimization, AI Sales Assistant, Reactivation Campaigns, Reporting
Automation. 14 industry landing pages (dental, legal, real estate, HVAC, restaurants, etc.)
already exist in `src/lib/ai-systems-data.ts`.

**QR Generator** — the highest-margin, most-automatable product (pure software, subscription).
Currently the least marketed. Flagged as the biggest under-exploited asset (see §5).

---

## 2. Current status & blockers (carried from OBSIDIAN-UPDATE.md + verified 2026-08-15)

- 🔴 **Chiku Fit** — Gumroad checkout URLs still missing → **product cannot be bought.** Highest-priority revenue blocker; a built product with no checkout earns $0.
- 🔴 **PromptEmpire** — delivery page needs the Google Drive product link wired in.
- 🟡 **Deploy** — confirm the site is live on Netlify with Stripe + NextAuth env vars set.
- 🟢 **PromptEmpire Stripe links** — live and sellable today.
- 🟢 **AI Systems site** — multi-page site with 6 systems × 14 industries shipped.

**The single most valuable thing to fix this week:** get Chiku Fit checkout URLs live. Every
day without them, all Chiku Fit marketing converts to zero.

---

## 3. Ideal customer per business (who marketing should reach)

| Business | Target audience | Where they already are |
|----------|-----------------|------------------------|
| PromptEmpire | Solo freelancers, agency owners, SMB operators using ChatGPT | r/ChatGPT, r/Entrepreneur, r/freelance, X/LinkedIn AI communities |
| Chiku Fit | Budget-conscious lifters, beginners wanting to bulk | r/naturalbodybuilding, r/GYM, fitness TikTok/IG |
| AI Systems | Local business owners — dentists, clinics, law firms, HVAC | LinkedIn, local FB groups, industry associations |
| QR Generator | Restaurants, event organizers, small marketers | Small-biz FB groups, Etsy sellers, event planners |

---

## 4. The compliant daily growth engine (what the routine should run)

A repeatable loop that builds an *owned, opted-in* audience instead of a scraped one:

1. **Publish 1 piece of organic content** per active brand to a channel we control
   (Reddit thread, X post, LinkedIn post). Drafts are prepared in `/marketing/` for the
   owner to approve and post — the routine drafts, a human posts. Never auto-post.
2. **Drive to a lead magnet, not a cold pitch.** Each brand offers a free item (prompt
   sampler, a free meal-plan day, an "AI audit" checklist, a free QR code) in exchange for
   an email *the person chooses to give*. That opt-in list is the marketing asset.
3. **Nurture the opt-in list** with value emails → offer. This is lawful email marketing:
   consented, with a real unsubscribe.
4. **For AI Systems (high-ticket):** warm outreach via LinkedIn/referrals to businesses the
   owner has a real connection to, or inbound from the industry landing pages — not scraped
   cold blasts. If cold outreach is used, it must be manually reviewed, personalized, B2B,
   and CAN-SPAM compliant (physical address + opt-out), sent from the owner's own account.
5. **Log** what was published and what converted, here in the Daily Log.

**Guardrail:** this routine may *draft and prepare* content and *update files*. It must not
*send email, post to social, scrape any platform, or contact third parties* without a human
approving that specific action. Those steps are left as checklists for the owner.

---

## 5. Strategic notes (revisit weekly)

- **QR Generator is the sleeper.** It's software (near-zero marginal cost), already has a
  subscription + analytics engine, and is the least marketed. A free-QR lead magnet →
  `pro`/`business` upgrade path is the cleanest recurring-revenue play in the portfolio.
- **Fix conversion before spending on traffic.** Chiku Fit checkout + PromptEmpire delivery
  link are the current leaks. Traffic into a broken funnel is wasted.
- **One niche at a time for AI Systems.** Dental is already built out; go deep (one industry,
  a handful of great case studies) before going wide.

---

## 6. Daily Log

### 2026-08-15 — Routine initialized
- Created this tracker as the marketing source of truth.
- Mapped the four businesses, their monetization, and current blockers.
- **Declined** the Instagram email-scraping + cold-marketing mechanism (ToS + anti-spam law +
  unattended outward action). Replaced it with the compliant engine in §4.
- Drafted ready-to-publish organic content for each brand in `/marketing/` (for owner review).
- **Flagged for the owner (action needed):**
  1. Add Gumroad checkout URLs for the 3 Chiku Fit products — this is blocking all Chiku Fit sales.
  2. Wire the Google Drive delivery link into the PromptEmpire delivery page.
  3. Confirm the site is deployed on Netlify with Stripe + NextAuth env vars.
- No emails sent, nothing posted, nothing scraped this run.
