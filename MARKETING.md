# MARKETING.md — Growth Source of Truth

> Single source of truth for marketing all four Chiku Global Solutions LLC businesses.
> This file is separate from `CLAUDE.md` on purpose: `CLAUDE.md` documents the *codebase*
> for engineering; this file documents *growth, content, and revenue ops*. Update this file
> as strategy, offers, links, or results change.
>
> **Last updated:** 2026-08-27 (automated daily growth run)

---

## ⚠️ Read first: how we do outreach (and what we don't do)

The original brief asked for a daily **Instagram email scrape** of creator pages to market to.
We are **not** doing that, and this is a deliberate, permanent decision — not a limitation to
"fix later":

- **It's against Instagram's Terms of Service.** Automated scraping gets accounts and tooling banned.
- **It's cold-contacting harvested personal data.** Emailing people who never opted in violates
  CAN-SPAM (US), GDPR (EU) and CASL (Canada), which carry real per-message fines.
- **It would destroy our own email deliverability.** Spam complaints tank sender-domain
  reputation. That same domain sends our NextAuth magic-links and Stripe receipts — scraping
  would break customer login and payment emails for the businesses we're trying to grow.
- **It barely converts.** Cold-scraped lists convert far worse than warm inbound.

**What we do instead — a compliant growth engine that actually compounds:**

1. **Organic content** on channels the businesses own (see per-business content below).
2. **Permission-based email** — capture opted-in subscribers via lead magnets; send via a real
   ESP (Mailchimp is already connected once authorized). Never a scraped list.
3. **Warm, manual, 1:1 outreach** for the agency (real research on a specific practice, a real
   personalized message — not bulk).
4. **Communities** — post value in relevant subreddits / groups per their rules, not spam.

Everything below is built for that engine.

---

## The four businesses

| # | Business | What it sells | Channel(s) | Money link(s) |
|---|----------|---------------|------------|---------------|
| 1 | **PromptEmpire** | AI prompt packs | Site + Reddit/X/LinkedIn | Stripe (live, below) |
| 2 | **Chiku Fit** | Fitness guides / meal plans | Site + IG/TikTok/Reddit | Gumroad *(URLs TBD)* |
| 3 | **AI Systems / Chiku Global Solutions** | "Dental AI Agency" done-for-you | Landing page + warm outreach | Intake form → sales call |
| 4 | **QRFlow** | QR generator + scan analytics SaaS | Site + product-led/SEO | Stripe subscription (Pro/Business) |

### Live money links (verified from repo)
| Product | Price | Stripe link |
|---------|-------|-------------|
| 500 AI Business Prompts | $37 | https://buy.stripe.com/5kA5kFbpgcTY5Sg4gh |
| Freelancer Command Center | $47 | https://buy.stripe.com/cNi5kF50Kf2a6WkbLU08g01 |
| Empire Bundle | $67 | https://buy.stripe.com/7sI8wR50Kf2adoI28X |

### Open blockers (kill these to unlock revenue)
- [ ] **Chiku Fit Gumroad checkout URLs** missing — products are built but can't be bought. *Highest-leverage fix.*
- [ ] **PromptEmpire delivery page** needs the Google Drive product link added.
- [ ] **Mailchimp** connector needs authorization before any email capture/sending can run.
- [ ] Confirm which social handles exist for each brand (so content has a real destination).

---

## Daily growth routine (compliant, repeatable)

Runs each day. Produces drafts and research — **it does not auto-publish or auto-send.**
A human approves before anything goes public.

1. **Pick one business** (rotate: Mon PromptEmpire · Tue Chiku Fit · Wed AI Systems · Thu QRFlow · Fri weakest performer).
2. **Draft 1–3 pieces of content** for that business (formats below) → save under `## Content bank`.
3. **Draft any warm outreach** (AI Systems only) — a *specific* named practice, real personalization, one message. Log the target, don't send blind.
4. **Log** what was produced + any metrics the user reports → `## Daily log`.
5. **Update this file** with anything learned (a hook that worked, a broken link, a new offer).

---

## Content bank (ready to post — pending human approval)

> These are drafts. Nothing here has been published. Copy/paste, tweak voice, post from the brand account.

### PromptEmpire

**Reddit value post (r/ChatGPT, r/Entrepreneur — post as help, link only if rules allow)**
> Title: I turned my 6 most-used ChatGPT business prompts into a repeatable system — here's the framework
>
> Body: After a few hundred hours in ChatGPT for real client work, the prompts that actually
> move the needle all share the same 4 parts: role, context, constraints, output format. Example
> for cold-email rewriting: *"Act as a direct-response copywriter. Here's my draft [X]. Rewrite
> for a [audience] who cares about [outcome]. Keep it under 90 words, one CTA, no fluff."*
> Happy to share the other 5 patterns in the comments.

**X/LinkedIn hook**
> Most people use ChatGPT like a search bar. The 3% who get 10x results treat every prompt like
> a brief: role → context → constraints → format. Swipe the 500-prompt library that already does
> this → [link]

### Chiku Fit *(blocked on Gumroad URLs — post once buyable)*

**IG/TikTok caption — "broke bulk"**
> You don't need $400/mo of supplements to grow. You need progressive overload and ~300 surplus
> calories from real food. Here's a $4/day bulking day that hits 3,200 cals and 180g protein 👇
> Full 8-week plan in bio.

**Reddit (r/gainit, r/Fitness — value first)**
> Cheap high-protein grocery list I use for bulking on a budget (per-gram protein cost breakdown)

### AI Systems (Dental AI Agency) — warm outreach template

> Fill the brackets with **real** research per practice. One practice at a time. Never bulk-send.
>
> Subject: quick idea for [Practice Name]'s front desk
>
> Hi Dr. [Last name] — I looked at [Practice Name] and noticed [specific, true observation:
> e.g. "your reviews mention long hold times"]. We build AI front-desk systems for dental
> practices that [book appointments / answer after-hours / cut no-shows]. Practices like yours
> see [specific outcome]. Worth a 15-min look? Here's exactly what it'd do for you: [intake link].

**Packages:** Starter $1,497 + $297/mo · Growth $2,497 + $497/mo · Premium $4,997 + $997/mo

### QRFlow

**Product-led / SEO angle (blog + landing)**
> "Free QR code generator that tracks scans" — target the search intent. Free tier generates,
> paid tier unlocks scan analytics/dashboard. Lead magnet: "QR campaign tracking template."

**X hook**
> A QR code you can't measure is a billboard with the lights off. QRFlow shows you every scan —
> device, time, location trend. Generate free → [link]

---

## Metrics tracker

| Date | Business | Action taken (by human) | Result (clicks/sales/subs) |
|------|----------|-------------------------|----------------------------|
| _add rows as results come in_ | | | |

---

## Daily log

### 2026-08-27
- Set up this source-of-truth tracker covering all four businesses.
- **Declined** the Instagram email-scrape mechanic (ToS + anti-spam law + deliverability risk); replaced with the compliant growth engine above.
- Drafted a first content bank for all four brands (unpublished — awaiting approval).
- Surfaced the real revenue blockers (Chiku Fit Gumroad URLs is #1).
- **Need from owner:** confirm brand social handles; authorize Mailchimp; add Gumroad URLs; approve which drafts to post.

---

## What "making money" actually depends on (priority order)
1. **Unblock checkout** — Chiku Fit Gumroad URLs (products exist, can't be bought = $0).
2. **Ship one channel consistently** — pick 1 platform per business, post the content bank, measure.
3. **Capture emails** — add a lead magnet + Mailchimp signup so traffic becomes an owned audience.
4. **Warm agency outreach** — 5 genuinely-researched dental practices/week beats 500 cold scrapes.
5. **Double down on what converts** — update the metrics tracker, kill what doesn't.
