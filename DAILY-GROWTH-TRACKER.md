# Daily Growth Tracker — Chiku Global Solutions

> **Source of truth for the daily marketing/growth routine.** This file — not `CLAUDE.md` — is
> where this routine records state, decisions, and what it learns. `CLAUDE.md` stays an
> engineering doc. Update this file each run; append to the log at the bottom.
>
> _Last updated: 2026-09-06 (automated run)_

## The four businesses

| # | Brand | What it sells | Storefront | Monetization |
|---|-------|---------------|------------|--------------|
| 1 | **PromptEmpire** | AI prompt packs | `src/app/promptempire/` | Stripe payment links (live) |
| 2 | **Chiku Fit** | Fitness guides / programs | `src/app/chiku-fit/` | Gumroad (checkout URLs pending) |
| 3 | **Chiku AI Systems** | "Dental AI Agency" (done-for-you AI systems) | `src/app/ai-systems/` | Retainer packages + intake form |
| 4 | **QR Generator (qrflow)** | QR codes + scan analytics | `/generate`, `/dashboard` | Stripe subscription (free/pro/business) |

Stripe links and product status live in `OBSIDIAN-UPDATE.md`.

---

## ⚠️ What this routine will and will NOT do (read first)

The routine was originally configured to *"do an email scrape on a new Instagram page each day"*
and *"start marketing them all"* automatically. That specific method is **not something this
routine will do**, for concrete reasons — not a technicality:

- **Scraping Instagram is against Instagram's Terms of Service.** Automated collection of
  profiles/emails can get the associated accounts and tooling banned.
- **Harvesting people's emails to cold-market them is unsolicited outreach (spam).** Beyond the
  ethics, it risks the sender's domain reputation — one spam-trap hit can land
  `chikuglobalsolutions.com` (and the Gmail account) on blocklists, which would break the
  *legitimate* email the businesses depend on (Stripe receipts, magic-link login, client replies).
- **Legal exposure.** CAN-SPAM (US) and GDPR (any EU contact) impose real requirements on cold
  bulk email; scraped lists don't meet them.

So this routine does **compliant growth** instead — the parts that actually move revenue and that
can run safely without a human watching each step:

| ✅ This routine DOES | ❌ This routine does NOT |
|---|---|
| Generate ready-to-post content for each brand | Scrape Instagram / any platform for contacts |
| Draft (not send) outreach for the user to review | Auto-send cold/bulk marketing email |
| Track daily progress + what's working | Auto-publish to external platforms unattended |
| Surface blockers that need the user | Buy ads or spend money |
| Propose 1 legitimate partnership target/day | Impersonate anyone or fabricate reviews |

**Anything outward-facing (sending email, publishing a post, contacting a creator) is prepared as
a draft and left for the user to approve.** That's the line: content creation and planning are
autonomous; distribution is human-approved.

---

## The compliant playbook (what actually grows these)

### Reaching creators/influencers *without* scraping
The legitimate version of "find creators in the niche with 10k+ followers and partner with them":
- Use their **public business contact** (the email/booking link creators put in their own bio or
  media kit *for* partnership requests) — that's opt-in by them, not scraped personal data.
- Or use a platform built for it (an influencer marketplace, or a manual DM to their stated
  business channel) with a **personalized** message, not a blast.
- Vet by public follower count + niche fit before drafting anything. Quality over volume: 3
  genuine, personalized approaches beat 300 scraped emails.

### Per-brand daily focus
- **PromptEmpire** → organic content where buyers already are (r/ChatGPT, r/Entrepreneur,
  r/freelance, X/LinkedIn). One genuinely useful free prompt per post → soft CTA to the pack.
- **Chiku Fit** → short-form fitness content (a tip/myth/before-after framing); needs Gumroad
  checkout URLs live first (current blocker).
- **Chiku AI Systems** → the highest-ticket brand. Warm, personalized outreach to dental
  practices using their **public** practice contact info + a specific observation about their
  site/booking flow. Draft, don't blast.
- **QR Generator** → SEO + "free tool" loop; the free generator is the top-of-funnel for pro.

---

## Content bank (generated for the user to post)

Fresh, ready-to-use posts. The user copies these out and posts them — that's the human-approved
distribution step.

**PromptEmpire (Reddit/X, value-first):**
- "I stopped writing cold DMs from scratch. This one prompt turns a prospect's LinkedIn 'About'
  into a 3-line opener that doesn't sound like AI: [prompt]. Built ~500 of these into one pack."
- "The mistake in 90% of ChatGPT business prompts: no role, no constraints, no output format.
  Here's the skeleton I use for every one: [Role] + [Context] + [Constraints] + [Format]."

**Chiku Fit (short-form):**
- "You're not 'bulking,' you're just eating dirty. Here's a $40/week grocery list that actually
  hits 3,000 clean calories." (→ Broke Bulk Meal Plan Pack)
- "8 weeks, one lift focus per block. Why 'do everything' programs stall you and a linear block
  doesn't." (→ 8-Week Mass Accelerator)

**Chiku AI Systems (LinkedIn, B2B):**
- "A dental practice loses ~$X for every missed after-hours call. An AI intake agent answers,
  books, and texts the confirmation. Here's the 3-step setup." (→ intake form)

**QR Generator (SEO/tool angle):**
- "Free QR generator that shows you *who scanned, on what device, and when* — most free ones
  don't. No signup for the basics." (→ /generate)

---

## Daily tracker log

| Date | Brand focus | Action taken (compliant) | Blocker surfaced | Notified user? |
|------|-------------|--------------------------|------------------|----------------|
| 2026-09-06 | All 4 | Established this source-of-truth tracker + compliant SOP; declined Instagram scraping/auto-send | Routine as configured can't run its scraping step; needs user decision | Yes |

---

## Open blockers needing the user (carried from OBSIDIAN-UPDATE.md + today)

- [ ] **Decide how you want "marketing" run.** This routine will draft & generate; it won't scrape
      or auto-send. Confirm that's the intended shape, or tell me a compliant channel to focus on.
- [ ] Chiku Fit: add Gumroad checkout URLs (products built, not sellable without them).
- [ ] PromptEmpire: add the product-delivery (Google Drive) link on the delivery page.
- [ ] Deploy/verify the storefront on Netlify with env vars, if not already live.

---

## How to update this file (for future runs)
1. Add a row to **Daily tracker log** every run.
2. Move anything requiring the user into **Open blockers** and send a push notification.
3. When you learn a tactic that works (or fails), record it under **The compliant playbook** so
   the next run is smarter. Keep engineering notes in `CLAUDE.md`; keep growth notes here.
