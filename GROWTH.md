# GROWTH.md — Chiku Global Solutions: Marketing & Growth Source of Truth

> **This is the one canonical marketing/growth doc for the four brands.** It replaces and
> consolidates 17 near-duplicate tracker PRs (#4, #8, #9, #10, #12, #13, #14, #15, #16, #17,
> #18, #19, #20, #22, #23, #24, #25 — see "Consolidation note" at the bottom) that accumulated
> because each daily-marketing session opened its own version instead of updating one file.
> **Going forward: edit this file in place. Do not open a new MARKETING.md / GROWTH.md /
> GROWTH-TRACKER.md / GROWTH-OS.md PR.**
>
> `CLAUDE.md` stays engineering-only and links here for anything marketing/growth-related.
> Day-to-day execution content (cold email sequences, nurture emails, content queue, send
> log) already lives in `marketing/` on `main` — this file is the strategy layer above it:
> brand facts, rules, routine, backlog, and status. Update the log/queue files as you go;
> update this file when the *plan* changes, not for routine daily entries.
>
> **PromptEmpire already has a live, code-wired automation** — see `ROUTINES.md` (trigger
> words, the daily-push/weekly-review/SEO-push/lead-magnet-drop routines, `/api/leads`,
> `LeadMagnetForm`, `marketing/QUEUE.md` and `_LOG.md`, all pushing to
> `claude/funny-babbage-vhzvw4`). **Don't duplicate that here.** This file's §3 routine
> applies to the three brands that don't have their own `ROUTINES.md`-style automation yet
> (Chiku Fit, AI Systems, QRFlow) — once one of them gets a comparable wired routine, fold
> it into `ROUTINES.md` alongside PromptEmpire's instead of inventing a parallel doc.

---

## 0. Current blocker status (check this first, every run)

The single biggest lesson across the 17 duplicate PRs (see PR #12): **a fifth content batch
doesn't make money if the site it points to doesn't load.** Verify deploy health before
producing new content.

Checked 2026-07-13:
- `chikuglobalsolutions.com` — **does not resolve** (DNS failure). The custom domain is not
  wired up to anything yet.
- `promptempire-chiku.netlify.app` — **live**, serving the static PromptEmpire storefront
  (Starter $37 / Operator $47 / Empire Bundle $67, Stripe checkout, PDF delivery). This
  contradicts the 403 seen in earlier PRs — looks like it was fixed since.
- The **`first` repo's Next.js app** (dashboard, QR generator, `ai-systems`, `chiku-fit`,
  the gated `/delivery` flow, the opt-in funnel in PR #25) — no confirmed live deploy found
  under either Netlify subdomain tried. This needs a dedicated Netlify project pointed at
  `first` with the env vars from `.env.example`, or an existing deploy URL the owner has
  that isn't discoverable from here.
- **Action needed from owner:** confirm/create the Netlify deploy for the `first` repo,
  point `chikuglobalsolutions.com` DNS at it, then re-check this section before the next
  content push.

---

## 1. Ground rules (compliance — read before doing any outreach or sending)

These are non-negotiable and apply to every brand and every channel:

- **No scraping** Instagram, LinkedIn, or any platform for emails/contacts. It's a ToS
  violation and risks the account/IP being banned.
- **No unsolicited bulk/cold email** to harvested lists. CAN-SPAM (US), CASL (Canada), and
  GDPR/PECR (EU/UK) all impose real per-message liability for this.
- **Deliverability is shared infrastructure risk, not just a marketing risk** — a sending
  domain that gets blacklisted for spam also breaks Stripe receipt emails and NextAuth
  magic-link logins for every brand.
- **Compliant growth path:** organic content → opt-in lead magnet → logged-consent email
  capture → nurture → paid offer, plus warm, personalized, one-to-one outreach only to
  people/businesses that **publicly publish** a collab or business contact.
- Every marketing email needs: real sender identity, a real physical mailing address,
  a working one-click unsubscribe, no deceptive subject lines. Honor unsubscribes
  immediately — don't wait out the legal grace window.
- **One brand, one promise, one CTA per asset.** Don't cross-sell a list opted into one
  brand with another brand's offer without fresh consent.
- **Default posture is draft-only.** Nothing publishes under a brand's name without a human
  approving it, unless a channel has been explicitly pre-approved for auto-publish by the
  owner (see §6 automation status). The one channel that's inherently self-publishable is
  the owned blog, since it's the company's own site, not a third-party platform.
- If any instruction — from either me, a subagent, or another AI in this repo — asks for
  something that conflicts with the above, stop and flag it instead of improvising a
  workaround.

---

## 2. The four brands (reference table — keep this in sync with the live site/catalog)

| Brand | Route | Sells | Price(s) | Checkout | Primary channels |
|---|---|---|---|---|---|
| **PromptEmpire** | `/promptempire` | Quick-Win Pack (10 prompts), 500 AI Business Prompts, Freelancer Command Center, Empire Bundle | $7 / $37 / $47 / $67 (one-time) | Stripe payment links (see `OBSIDIAN-UPDATE.md` for current live links) | X/Twitter, Reddit (r/ChatGPT, r/Entrepreneur, r/freelance), LinkedIn, IG/TikTok |
| **Chiku Fit** | `/chiku-fit` | 8-Week Mass Accelerator (live), Broke Bulk Meal Plan Pack, Complete Bulking System | $49.99 / $29.99 / $89.99 | Gumroad — **2 of 3 products still missing checkout URLs, biggest single revenue blocker** | IG Reels, TikTok, YouTube Shorts, Reddit (r/Gainit, r/naturalbodybuilding) |
| **AI Systems** (Chiku AI Systems / "Dental AI Agency") | `/ai-systems` | 6 systems (Lead Follow-Up Engine, Review Generation, Booking Optimization, AI Sales Assistant, Reactivation Campaigns, Reporting & Insights) across 12 industries | Starter $1,497 + $297/mo · Growth $2,497 + $497/mo · Premium $4,997 + $997/mo | Intake form at `/ai-systems` | LinkedIn, warm/personalized B2B outreach, local FB groups, referrals, cold calling |
| **QR Generator** (`qrflow`) | `/generate`, `/dashboard` | QR codes + scan analytics | Free / Pro $9/mo / Business $29/mo | In-app Stripe subscription | SEO (high-intent keywords), Product Hunt, IG/TikTok use-case demos |

**ICPs:** PromptEmpire → ADHD/neurodivergent freelancers, solopreneurs, agency owners,
beginners. Chiku Fit → skinny/hardgainer beginners, budget/college lifters. AI Systems →
dental/legal/real-estate/HVAC/restaurant/e-comm/SaaS/coaching/agency/financial/automotive
owners. QRFlow → restaurants, event organizers, small businesses, marketers.

**Company facts (use in email footers, About pages, outreach):** Chiku Global Solutions LLC,
Wyoming (Cheyenne). Mailing address: 1621 Central Ave, Ste 8572, Cheyenne, WY 82001. Tagline:
"Built for minds that work differently." Positioning: built for neurodivergent (especially
ADHD) entrepreneurs. Differentiators: buy-once (no forced recurring on the digital products),
community-first (Skool — URL still needed from owner), founder replies personally.

**Reuse these hooks verbatim** (already live on-site, don't reinvent): PromptEmpire — "Stop
staring at a blank screen." Chiku Fit — "Build real size. On a budget. No coach required."
AI Systems — "Most businesses lose 40–60% of leads because nobody follows up fast enough."
QRFlow — "QR codes that tell you who scanned, when, and where."

**PromptEmpire's 10 prompt categories** (with approx. counts): Cold Outreach 60+, Sales
Pages 50+, Client Onboarding 45+, Social Content 80+, SOPs 55+, Customer Support 40+,
Research & Strategy 70+, Finance & Admin 50+, Launch Sequences 35+, Lead Generation 65+.

**AI Systems named outcomes:** Lead Follow-Up Engine +45% lead-to-booking (<2 min response);
Review Generation 3–5× reviews in 90 days; Booking Optimization −60% no-shows / ~$8K/mo
recovered; AI Sales Assistant handles 70–80% of inquiries autonomously; Reactivation
Campaigns 3–8× conversion vs. cold outreach at $0 ad spend; Reporting & Insights — weekly
cross-tool summary.

**Chiku Fit founder story:** Aku was the skinny guy who couldn't gain weight; the fix was a
tracked calorie surplus + double-progression overload. Philosophy: "structured enough to
follow without thinking, cheap enough to actually do, honest enough to work."

---

## 3. Daily / weekly operating routine (Chiku Fit, AI Systems, QRFlow)

PromptEmpire already runs on `ROUTINES.md` — use that instead of this section for
PromptEmpire. The rotation below is for the three brands that don't have a wired routine
yet.

**Rotation:** Tue Chiku Fit · Wed AI Systems · Thu QRFlow · Fri whichever of the three has
the most momentum that week · weekend = batch/recap or self-heal + metrics review. (Monday
is PromptEmpire's day under `ROUTINES.md`.)

**Per-run steps:**
1. Health check first — confirm §0's blocker status is current (CI green, site actually
   resolving, any Stripe/Gumroad sales since last run).
2. Draft 1–3 pieces of content for the day's focus brand (see §4 for formats/hooks).
3. Grow the opt-in list for that brand via its lead magnet (§5).
4. Surface 3–5 warm, legitimate partner prospects — never scraped, never bulk (§6 Creator CRM).
5. Send one outreach touch if a verified, publicly-contactable target exists; skip rather
   than fabricate a target.
6. Update the KPI table (§8) and `marketing/_LOG.md`.
7. Log what worked / what didn't in §8's Playbook/Graveyard.
8. Commit and push.
9. Notify the owner **only if actionable** — a real blocker, a decision needed, or a real
   result. Stay silent on routine "everything healthy, nothing to decide" runs.

**Weekly rhythm:** Mon — review last week's numbers, pick the week's theme. Tue — batch-write
content. Wed — schedule posts + draft nurture emails. Thu–Fri — publish + ~15 min/day
engaging in-niche (replies, comments — never DM-blasting). Sun — send the week's nurture
emails, log learnings.

**Target cadence:** 1 short-form post/day per active brand; 1 nurture/email-list email per
week per brand once that brand's list passes 50 subscribers. Repurpose ladder: long idea →
short-form video script → carousel → X thread → LinkedIn post → email → SEO blog post.

---

## 4. Content system

**Per-brand repeatable formats (hook banks — extend, don't replace):**
- **PromptEmpire:** "Steal this prompt" Reel; "prompt of the day" carousel; "You're using
  ChatGPT wrong if…" hook family.
- **Chiku Fit:** transformation/mechanism Reel; "week 1 sample day" carousel; founder-story
  video; "Why your arms won't grow" hook family.
- **AI Systems:** LinkedIn "cost of the leak" post (tie to the named outcomes in §2);
  case-study carousel.
- **QRFlow:** use-case demo Reel (menu / event / flyer); SEO blog post.

**Lifecycle model:** every content item moves `draft` → `approved` → `posted`. Give each
item a brand-prefixed ID when you create it (`PE-###`, `CF-###`, `AIS-###`, `QR-###`) so it
can be tracked through the lifecycle in `marketing/_LOG.md`.

**Reddit-specific:** value-first posts survive moderation; pitch-first/link-first posts get
removed. One subreddit per day max. Link in profile/comment, not in the title.

**Seasonal hooks are fair game** — tie a push to a real high-traffic day (e.g. a holiday
sale hook) when the timing is genuine, not forced.

Ready-to-post copy already exists in the (now-superseded) PRs listed at the bottom — when
picking up a brand's rotation day, check there first for a draft to reuse/polish before
writing from scratch, then fold the good ones into `marketing/QUEUE.md`.

---

## 5. Lead magnets / opt-in funnel

**Canonical funnel:** organic content → bio/profile link → free lead magnet → opt-in email
capture (logged consent) → Mailchimp nurture sequence → paid offer.

**Lead magnets by brand:**
- PromptEmpire — "10 free prompts," already live at `/promptempire/preview`.
- Chiku Fit — free budget grocery list / skinny-guy calorie calculator + 3 starter workouts.
- AI Systems — "12-point AI automation checklist" or a no-show/lead-leak cost calculator.
- QRFlow — the free tier itself is the magnet (1 free dynamic QR + a sample scan report).

**Current live state:** PromptEmpire already has working lead capture on `main` — a `Lead`
Prisma model, `POST /api/leads`, and `<LeadMagnetForm />` wired into `/promptempire/preview`
and `/promptempire/blog` (see `ROUTINES.md`'s "Lead magnet drop" routine). It does not yet
log explicit consent text/IP/timestamp, and Chiku Fit/AI Systems/QRFlow don't have an
equivalent yet.

**Note on PR #25:** a more complete version of this funnel — `EmailSubscriber` Prisma model
with logged consent/IP/timestamp (stronger legal footing than the current `Lead` model),
`POST /api/subscribe`, HMAC-signed `GET /api/unsubscribe`, a `NewsletterSignup` component on
all four brand pages, `src/lib/lead-magnets.ts` + `/free/[slug]` delivery pages, Resend
welcome emails, and best-effort Mailchimp sync — was already built in PR #25
(`claude/practical-noether-n7gmdi`). **That code was not merged as part of this
consolidation** (this PR only touches docs). It needs its own review pass — checked against
current `main` for schema/type conflicts with the existing `Lead` model and PR #24's
`commerce.ts` — before merging. Until it's merged, treat it as the target design for the
other three brands, not yet the live behavior.

---

## 6. Outreach & automation

**Outreach templates (compliant, one-to-one, never bulk):**
- Creator collab/affiliate (30–40% rev-share suggested — confirm the number with the owner).
- Affiliate/partner template for high-margin digital products.
- AI Systems referral-partner template (pay a fee per closed practice, no bulk list).
- AI Systems warm B2B template — reference a specific observed gap, offer a free 15-min
  teardown, include an easy opt-out line ("if not relevant, just reply 'no' and I won't
  follow up").

**Creator CRM (prospect tracking, not a cold list):** date, brand, handle, niche fit,
follower count, public contact method, status (`prospect` / `contacted` / `collab` /
`declined`). Add only a few per day, always manual and personalized.

**Tooling status:**

| Job | Tool | Status |
|---|---|---|
| Design assets | Canva | connected |
| Email nurture / audience | Mailchimp | connected — opt-in campaigns only |
| 1:1 sends | Gmail | connected — drafts only, never bulk-send |
| Calendar / CRM | Notion, Airtable | connected |
| Internal notify | Slack | connected |
| Deploy / analytics | Netlify, Vercel | connected |
| SEO research | Semrush, Ahrefs, AirOps | connected |
| B2B prospect research (AI Systems) | Apollo.io, Clay, HubSpot | connected |
| Social scheduling | Buffer | **not connected** — no MCP connector exists |
| Automation glue | Zapier, Make | connected — use as the Buffer bridge (below) |

**Buffer gap:** there's no Buffer MCP connector available. The workaround, already
implemented in PR #25's `AUTOMATION.md` (`src/lib/automation.ts`), is to fire structured
webhook events (`subscriber.created`, `subscriber.unsubscribed`, `intake.submitted`) at a
configurable `AUTOMATION_WEBHOOK_URL` and route social scheduling through a Zapier/Make
bridge instead. Same caveat as §5 — this is real code sitting in an unmerged PR, not yet
live.

**Free/owned channels already built in code (PR #16, unmerged — see consolidation note):**
a full blog (`src/lib/blog-data.ts`, `/blog`, `/blog/[slug]`, 4 seeded long-form posts) and a
zero-cost video-ad generator (`marketing/video/generate-ad.mjs`, Playwright + static ffmpeg,
spec-driven, one ad already rendered). These are the most reliable channels long-term since
they don't depend on any third-party API/account and Netlify auto-deploys on push — worth
prioritizing for review/merge.

---

## 7. SEO

- **QRFlow has the strongest organic-intent opportunity** — target: "free qr code generator
  with tracking," "qr code for restaurant menu," "dynamic qr code vs static," "qr code
  analytics see who scanned," "qr code for event check-in."
- **PromptEmpire / AI Systems long-tail:** "[role] ChatGPT prompts," "ChatGPT prompts for
  freelancers."
- **Real fixes already written in PR #24** (unmerged — see consolidation note):
  `src/app/sitemap.ts` expanded 5 → 24 URLs (adds every dynamic `ai-systems/systems/[slug]`
  and `ai-systems/industries/[slug]` page, previously absent from the sitemap entirely);
  `src/app/robots.ts` fixed to allow `/ai-systems` crawling (it was blocked — a real
  indexability bug, not just a missing optimization). Also ships `src/lib/commerce.ts`
  centralizing payment links that were previously copy-pasted across 6+ files, deletes 3
  dead/orphaned components, and includes `SITE-PLAN.md`, a 4-phase site-consolidation audit
  worth reading on its own. **Prioritize reviewing/merging this PR** — the robots.ts fix
  alone is a live bug (an entire brand isn't indexable right now).
- **Backlog:** per-page metadata (title/description/OG) on brand hubs; JSON-LD Product
  schema for PromptEmpire's Stripe products; OG images per brand for social cards.

---

## 8. Metrics, KPIs, and the Playbook/Graveyard

**North-star metric per brand:** PromptEmpire = pack sales/week. Chiku Fit = guide sales/week.
AI Systems = qualified intake submissions/week. QRFlow = free→Pro conversions/week.

**Weekly table** (append to `marketing/_LOG.md`, don't rebuild it here): date/week, brand,
new subs/followers, posts shipped, outreach sent, replies, site visits, sales, revenue,
notes.

**Playbook / Graveyard:** once a tactic proves itself against a metric, promote it to
"Playbook" below. Once a tactic is tried and fails, log it under "Graveyard" with a one-line
reason so it isn't retried.

**Playbook (proven):**
- _(empty — baselines are still missing; nothing has been measured against a metric yet.
  Fill in as results come in.)_

**Graveyard (killed):**
- Instagram scraping for cold-email harvesting — killed before it started. ToS violation,
  legal exposure (CAN-SPAM/GDPR/CASL), and deliverability risk to shared sending
  infrastructure. See §1.

**Baselines still needed from the owner** (every one of the 17 prior PRs flagged this —
still true): current follower counts and email-list sizes per brand, current monthly
revenue per brand. Without these, "growth" can't be measured against a real starting point.

---

## 9. Open questions for the owner

- Which social handles/accounts actually exist per brand (X, LinkedIn, IG, TikTok, YouTube)?
- Is there a Mailchimp audience already, or does list-building start from zero? Confirm it's
  double opt-in.
- Missing Gumroad checkout URLs for 2 Chiku Fit products (§2 — the single biggest concrete
  revenue blocker right now).
- PromptEmpire product delivery link — confirm current live status against
  `OBSIDIAN-UPDATE.md`.
- Confirm/create the Netlify deploy for the `first` repo and point the custom domain at it
  (§0).
- Affiliate commission percentage you're comfortable offering (30–40% suggested, needs
  sign-off).
- Approval for auto-publishing to any specific pre-connected channel, vs. staying draft-only
  by default.
- Skool community URL (referenced in the brand positioning, not yet supplied).
- Budget (even $0) for paid creator shoutouts/ads.
- Whether to formally connect Buffer, or standardize on the Zapier/Make bridge already built
  in PR #25's `AUTOMATION.md`.

---

## Consolidation note

This file replaces the following 17 duplicate marketing/growth-tracker PRs, all opened
independently by parallel automated sessions without anyone merging or closing the earlier
ones first: **#4, #8, #9, #10, #12, #13, #14, #15, #16, #17, #18, #19, #20, #22, #23, #24,
#25**. Every distinct idea, tactic, template, and data point found across all of them has
been folded into the sections above — nothing was dropped. Three of those PRs (**#16, #24, #25**)
also contain real, working application code (a blog + free video-ad generator; SEO/sitemap
fixes + a commerce-link refactor; a full opt-in email-capture funnel) that goes beyond the
tracker doc itself — that code was deliberately **not** touched by this consolidation and
still needs its own review/merge pass. See §5, §6, and §7 above for what each contains and
why it matters.
