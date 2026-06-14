# MARKETING.md — Source of Truth for Daily Marketing

> This file is the **single source of truth** for the daily marketing routine across all
> Chiku Global Solutions brands. It is maintained by the scheduled "daily check" routine.
> When something new is learned (a channel that converts, an offer that lands, a tool that
> works), record it here and, if it changes how the codebase/marketing should be run, mirror
> the relevant bit into `CLAUDE.md`. Treat this file as authoritative over scattered notes.
>
> Last updated: 2026-06-14 (initial setup)

---

## ⚠️ Scope & guardrails (read first)

The original ask included **"do an email scrape on a new Instagram page each day."** That
specific mechanism is **not being done**, for concrete reasons:

1. **No Instagram access** exists in this environment — there is no Instagram tool/API wired up.
2. **Automated scraping violates Instagram's Terms of Service** and can get accounts banned.
3. **Harvesting personal emails for cold marketing** runs into anti-spam law (US CAN-SPAM,
   EU/UK GDPR & PECR). Unsolicited bulk email to scraped addresses is the definition of spam
   and creates real legal/deliverability risk (domain blacklisting kills *all* your email).

**The legitimate version of that goal is supported** and is the better play anyway:
influencer/partner prospecting — finding creators (10k+ followers) in adjacent niches who
**publicly list a business/collab email**, and sending them a *personalized, opt-out-respecting*
partnership pitch (affiliate, UGC, shoutout-for-shoutout). That is normal influencer marketing,
not scraping. See **Partner Outreach** below. No personal data is harvested in bulk; outreach
is one-to-one and consent-friendly.

**What runs automatically each day vs. what waits for your OK:**
- ✅ Auto: draft content, update this tracker, surface ideas, research public info.
- 🔐 Needs your sign-off before firing: anything that sends/publishes from your accounts
  (Mailchimp campaigns, Gmail sends, social posts, Canva exports pushed live).

---

## The four businesses

| # | Brand | What it sells | Offer / price | Live links |
|---|-------|---------------|---------------|------------|
| 1 | **PromptEmpire** | AI prompt packs | 500 AI Business Prompts $37 · Freelancer Command Center $47 · Empire Bundle $67 | Stripe links live (see OBSIDIAN-UPDATE.md) |
| 2 | **Chiku Fit** | Fitness guides/programs | 8-Week Mass Accelerator · Broke Bulk Meal Plan · Complete Bulking System | Built — **Gumroad URLs still missing** |
| 3 | **AI Systems / Chiku Global Solutions** (Dental AI agency) | Done-for-you AI automation for local businesses | Starter $1,497+$297/mo · Growth $2,497+$497/mo · Premium $4,997+$997/mo | Landing page + intake form |
| 4 | **QR Generator** (`qrflow`) | QR code generation + scan analytics SaaS | free / pro / business plans (Stripe) | `/generate`, `/dashboard` |

### Niche map (for partner prospecting — who to approach for each)
- **PromptEmpire** → AI/ChatGPT educators, solopreneur & "build in public" creators, freelancing/agency coaches.
- **Chiku Fit** → budget bodybuilding, "bulking on a budget", natural lifting, college-fitness creators.
- **AI Systems** → dental practice consultants, local-business marketing creators, MedSpa/clinic operators.
- **QR Generator** → small-biz/restaurant ops, event organizers, Etsy/print-on-demand sellers.

---

## Daily marketing routine (the actual workflow)

Run order each day:

1. **Status check** — review each brand's open blockers (table below). Note any that newly clear.
2. **Pick today's focus brand** — rotate: Mon PromptEmpire · Tue Chiku Fit · Wed AI Systems ·
   Thu QR Generator · Fri = whichever has the most momentum / nearest revenue.
3. **Draft content** — produce 1–3 ready-to-post pieces for the focus brand (see Content Library
   format). Save them under today's date in the Tracker.
4. **Partner prospecting (legitimate)** — surface 3–5 candidate creators/partners in the focus
   brand's niche *that have public collab contact info*, with a personalized pitch angle. Do **not**
   contact anyone without sign-off.
5. **Log + learn** — append a dated row to the Tracker. If anything converted or flopped, write
   the lesson in "Learnings".
6. **Notify** only if there's something worth the user's attention (a blocker, a decision needed,
   a result). Otherwise stay silent.

### Tools available to execute (already connected)
- **Canva** — design social graphics / carousels / ad creative.
- **Mailchimp** — build & schedule email campaigns to *existing opt-in lists* (not scraped lists).
- **Gmail** — draft outreach/partner emails (drafts only until approved).
- **Notion** — longer-form content calendar if preferred over this file.
- **Slack** — internal notifications.
- **Netlify / Vercel** — deploy the storefront.

---

## Content Library

Format for each piece: **Brand · Channel · Hook · Body · CTA**. These are ready to post/adapt.

### PromptEmpire
- **X/LinkedIn · Hook:** "I replaced a $2k/mo VA with 500 ChatGPT prompts. Here are the 5 that paid for themselves in week one 🧵"
  **Body:** thread walking through 5 high-leverage prompts (cold email, proposal, content repurposing, client onboarding, pricing). **CTA:** "Full pack (500 prompts) → $37 link."
- **Reddit (r/Entrepreneur, r/ChatGPT) · Hook:** "Made a prompt library for running a solo business — sharing my 3 favorites free."
  **Body:** give 3 genuinely useful prompts in the post, mention the paid pack at the end. **CTA:** soft link.
- **Short-form video script · Hook:** "Stop typing 'write me a…' Do this instead." 30-sec demo of a structured prompt vs lazy prompt, side-by-side output. **CTA:** "500 of these → link in bio."

### Chiku Fit  *(blocked on Gumroad URLs — content can be drafted, links pending)*
- **IG/TikTok · Hook:** "Bulking on $40/week. Full grocery haul + macros." **Body:** broke-bulk meal plan teaser. **CTA:** "Full 8-week plan → (Gumroad)."
- **Reddit (r/naturalbodybuilding, r/gainit) · Hook:** "I wrote a free sample week of a budget mass plan — feedback welcome." **CTA:** link to lead magnet, upsell to full system.

### AI Systems (Dental AI agency)
- **LinkedIn/cold-friendly · Hook:** "Dental practices lose 40–60% of leads because nobody follows up fast enough. Here's the 2-minute fix." **Body:** explain the Lead Follow-Up Engine outcome (+45% lead-to-booking, 24/7). **CTA:** "Book a teardown of your intake → intake form."
- **Case-study post · Hook:** "Review Generation System: how to 3–5× your Google reviews in 90 days." **CTA:** intake form.

### QR Generator (qrflow)
- **Small-biz angle · Hook:** "Your restaurant menu QR code is costing you data. Here's what trackable QR codes show you." **Body:** scan analytics value prop. **CTA:** "Free QR + analytics → /generate."

---

## Partner Outreach (legitimate influencer/affiliate prospecting)

Process — strictly opt-in friendly, one-to-one, no bulk scraping:
1. Identify creators 10k+ in the relevant niche (above) who **publicly publish a collab/business email**.
2. Draft a personalized pitch: reference their actual content, propose a specific deal
   (affiliate % on the Stripe/Gumroad product, free product for honest review, or shoutout swap).
3. Keep a clear opt-out and never re-contact a "no". Hold all sends for sign-off.

**Outreach email template (fill the brackets):**
> Subject: [their handle] × [brand] collab?
> Hi [name] — loved your [specific recent post]. I run [brand], [one-line value]. I'd love to
> set you up with [free product / X% affiliate / shoutout swap] — no obligation. Worth a quick look?
> If not your thing, no worries at all and I won't follow up. — [you]

---

## Tracker (daily log)

| Date | Focus brand | Content drafted | Partners surfaced | Sent/published? | Result / note |
|------|-------------|-----------------|-------------------|-----------------|---------------|
| 2026-06-14 | Setup | Initial content library (all 4 brands) seeded above | — | No | Routine initialized. Declined Instagram email-scraping mechanism; legitimate partner-outreach path defined. **Awaiting user direction** on channels + send authorization. |

---

## Open blockers (rolls up from OBSIDIAN-UPDATE.md)
- **Chiku Fit:** Gumroad checkout URLs missing — content can't link to a buy page yet.
- **PromptEmpire:** product delivery (Google Drive link) needs confirming on the post-purchase page.
- **AI Systems:** needs a steady top-of-funnel (the offer/landing exists; traffic does not).
- **All:** no confirmed organic audience yet — early posts go to cold channels (Reddit/X) until owned lists grow.

## Learnings (append-only)
- *(none yet — fill as data comes in)*

## Decisions needed from owner
1. Which channels do you actually want to post on? (X, LinkedIn, Reddit, IG, TikTok — pick the 2–3 you'll maintain.)
2. Do you have/want me to use the connected Mailchimp lists, and may I draft (not send) campaigns?
3. Provide the missing Gumroad URLs for Chiku Fit so its content can convert.
4. Confirm you want partner outreach done the legitimate way described above (vs. the original scrape ask, which I've declined).
