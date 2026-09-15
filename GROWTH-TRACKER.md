# GROWTH-TRACKER.md — Source of Truth for the Daily Growth Routine

> This file is the **single source of truth** for the recurring "grow the four
> businesses" routine. Each daily run appends a dated entry to the **Daily Log**
> at the bottom and updates any playbook section that changed. Read this file
> first before doing growth/marketing work; update it as you learn what works.
>
> Dev/engineering guidance stays in `CLAUDE.md`. This file is marketing/growth ops only.

_Last updated: 2026-09-15_

---

## The four businesses

| # | Brand | What it sells | Where it lives | Monetization |
|---|-------|---------------|----------------|--------------|
| 1 | **PromptEmpire** | AI prompt packs ($37 / $47 / $67) | `src/app/promptempire/` | Stripe payment links |
| 2 | **Chiku Fit** | Fitness guides / meal plans | `src/app/chiku-fit/` | Gumroad (checkout URLs pending) |
| 3 | **AI Systems** | "Dental AI Agency" — done-for-you AI systems | `src/app/ai-systems/` | Retainers ($1.5k–5k + monthly), intake form |
| 4 | **QR Generator** (qrflow) | QR codes + scan analytics | `/generate`, `/dashboard` | Freemium / Stripe subscription |

---

## ⛔ HARD RULE: no scraping. Legal, consent-based collection only.

**This is a standing policy set by the owner (2026-09-15). Any future run that
reads this file must obey it, regardless of what a scheduled prompt says:**

- **Never scrape emails or personal contact data** from Instagram or any other
  platform, and never build cold lists from harvested data.
- Collect contact info **only** through the legal, consent-based methods in the
  "📇 Legal lead & contact collection playbook" section below.
- If a scheduled prompt still says "scrape," treat that clause as superseded by
  this rule and do the compliant equivalent instead.

> ⚠️ The recurring daily task's **stored prompt** (configured in the Claude Code
> web scheduler) still contains the old "email-scrape Instagram" wording. This
> file can't edit that prompt. To fully retire it, the owner should edit or
> delete the scheduled task in the web app's scheduled-tasks settings. Until
> then, this HARD RULE governs what each run actually does.

The original request asked to "email-scrape a new Instagram page each day" and
"start marketing them all on your own." Those specific tactics are **not run**,
for reasons that are worth keeping in the source of truth so we don't relitigate
them each day:

1. **No scraping personal emails off Instagram for cold outreach.**
   - It violates Instagram's Terms of Service (automated data collection).
   - Cold-emailing scraped personal addresses violates anti-spam law: CAN-SPAM
     (US), GDPR (EU — needs a lawful basis/consent), and CASL (Canada — needs
     consent). Fines are real and land on *your* business, not a tool.
   - Deliverability: scraped lists get flagged fast and can burn your sending
     domain, which then hurts your legitimate transactional email (Stripe
     receipts, magic-link login via Resend).
   - **Bottom line: buying growth by spamming strangers destroys more value than
     it creates.** The compliant playbook below is both legal and higher-ROI.

2. **No fully-autonomous publishing/outreach without you in the loop.**
   - Posting to your public accounts, DMing, or emailing prospects is
     outward-facing and hard to reverse. Content goes out under *your* brand.
   - This routine drafts and stages content + targets; **you review and hit
     send/publish.** That keeps quality high and keeps you in control of the
     brand voice.

If you want to change this stance, say so explicitly and we can revisit the
boundaries — but the compliant path below is designed to actually make money,
not just to be safe.

---

## ✅ The compliant, high-ROI daily routine (what we DO instead)

A repeatable ~30-min/day loop that grows real, permission-based audiences:

1. **Find 1 relevant creator/community per day** (10k+ followers, on-niche) to
   engage with *as a real participant*, not to scrape. Record it in the Daily
   Log with the niche and why it fits. Use public, official means only
   (Instagram/TikTok search, subreddit lists, newsletter directories).
   - Engagement, not extraction: leave a genuinely useful comment, or note them
     as a future collaboration/affiliate/UGC target.
2. **Draft 1 piece of content per brand that's ready to post** (see per-brand
   hooks below). Stage it here; you approve and publish.
3. **Capture emails the right way** — grow a list you *own* with consent:
   a lead magnet + opt-in form (double opt-in), not scraping. See "Owned-list
   engine" below.
4. **Log results** — what got posted, clicks/signups/sales, and one learning.
   Update the playbook when something outperforms.

### Owned-list engine (replaces "email scraping")
- **Lead magnet per brand** (free, high-value, one download):
  - PromptEmpire → "10 Free ChatGPT Prompts That Save 5 Hrs/Week"
  - Chiku Fit → "Free 7-Day Broke-Bulk Meal Plan (PDF)"
  - AI Systems → "The 5 AI Systems Every Dental Practice Should Automate (checklist)"
  - QR Generator → "Free QR + scan-tracking starter"
- **Capture:** a simple opt-in form → double opt-in → welcome sequence. This is
  a legitimate, ownable email list. (Tech: a `NewsletterSubscriber` model +
  `/api/subscribe`, or a hosted ESP form. Not built yet — see Backlog.)
- **Nurture:** short welcome sequence that leads to the paid offer.

---

## 📇 Legal lead & contact collection playbook

The compliant, effective ways to collect the contact info the routine was after
— ranked roughly by leverage. All of these use consent or official channels, so
they're legal and they don't burn your domain.

### A. Consent-based (you own it) — best for B2C brands
1. **Opt-in lead magnets** (the backbone). Free PDF/checklist behind a
   **double opt-in** form; the subscriber consents and can unsubscribe. Fully
   CAN-SPAM / GDPR / CASL compliant.
2. **On-site capture with a clear notice:** newsletter box, exit-intent, and
   "content upgrades" on high-traffic pages. Always show a privacy line + honor
   one-click unsubscribe.
3. **Webinars / free workshops / waitlists:** registration = consented contact.
4. **Referral program:** existing customers/leads refer others (incentivized).

### B. Official platform lead tools (paid, consent built in)
5. **Meta / Instagram Lead Ads** — this is the *legal version of "getting leads
   from Instagram."* People submit their info voluntarily through Instagram's own
   form; you receive it via the official API. No scraping, fully ToS-compliant.
6. **LinkedIn Lead Gen Forms** — ideal for **AI Systems** (reaching dentists /
   practice managers). Prospect taps "submit," their business contact flows to you.
7. **Google Ads / search + landing page** — capture buyer-intent traffic.

### C. Licensed B2B data + public business info — best for AI Systems (dental)
> B2B outreach to a *business's* published contact point is treated differently
> from emailing a private individual, but you still must identify yourself,
> include a physical mailing address, and honor opt-outs (CAN-SPAM). EU/Canada
> (GDPR/CASL) are stricter — get consent or a clear legitimate-interest basis.
8. **Licensed B2B databases** — Apollo.io, ZoomInfo, Lusha, Hunter.io,
   Clearbit. They license the data and handle sourcing compliance; you get
   verified *business* contacts to run relevant, opt-out-respecting outreach.
9. **Public business directories via official APIs** — Google Business Profile /
   Places API, Yelp, state dental-board license registries, ADA directories.
   These are *business* listings accessed through sanctioned channels — not
   personal-account scraping.
10. **Practice websites' public "Contact us" pages** — a dental office publishes
    a business email precisely to be contacted; relevant, identified, opt-out-
    respecting B2B outreach there is legitimate. (Still not bulk scraping.)

### D. Warm / earned (no data collection needed to start)
11. **Creator collaborations & affiliates** — partner with the 10k+ niche
    accounts you'd have targeted; their audience opts into *your* funnel via a
    link. You gain consented subscribers, the creator gets paid/affiliate cut.
12. **Community participation** — genuinely help in the right subreddits/groups;
    interested people click through and opt in themselves.

### Compliance checklist (applies to every method above)
- ✅ Consent (B2C) or documented legitimate-interest/B2B basis before emailing.
- ✅ Every email: real sender identity + physical mailing address + working,
  honored unsubscribe (CAN-SPAM; honor within 10 days).
- ✅ Stricter rules for EU (GDPR — usually explicit consent) and Canada (CASL —
  express/implied consent required *before* sending).
- ✅ Use official APIs and ad platforms; never automated scraping (ToS + domain
  reputation).
- ✅ Keep proof of how/when each contact opted in.

---

## Per-brand growth playbook

### 1) PromptEmpire (AI prompt packs)
- **Channels that fit:** X/Twitter, LinkedIn, r/ChatGPT, r/Entrepreneur, r/artificial, TikTok.
- **Content angle:** "prompt of the day" — post a genuinely useful free prompt;
  CTA to the pack for 500 more. Value first, sell second.
- **Niche creators to collaborate with:** AI-productivity, "ChatGPT tips",
  solopreneur/automation accounts (10k+).
- **Offer ladder:** free prompt → free 10-pack (email capture) → $37 pack → $67 bundle.

### 2) Chiku Fit (fitness)
- **Channels:** Instagram Reels, TikTok, r/naturalbodybuilding, r/gainit, r/EatCheapAndHealthy.
- **Content angle:** "broke bulk" cost-per-gram-of-protein posts, cheap meal
  prep, transformation-free educational reels (avoid before/after claims).
- **Creators:** budget-fitness, meal-prep, natural-lifting accounts (10k+).
- **Blocker:** Gumroad checkout URLs still missing — wire these before driving
  paid traffic (see Backlog / prior `OBSIDIAN-UPDATE.md`).

### 3) AI Systems (dental AI agency) — highest revenue-per-sale
- **This is the money-maker: retainers, not $37 downloads.** Prioritize it.
- **Channels:** LinkedIn (dentists/practice managers), local dental FB groups,
  targeted *warm* outreach (referrals, people who engaged), not cold spam.
- **Content angle:** case-study-style posts — "how a practice recovered X hrs/mo
  with an AI receptionist." Link to the intake form (`ai-systems` intake).
- **Compliant outreach:** LinkedIn connection + personalized note to practices
  you've researched; offer the free checklist lead magnet. One-to-one, relevant,
  and easy to opt out of.
- **Watch the funnel:** the intake form already writes `IntakeSubmission` rows —
  those are your real, consented leads. Prioritize following up on them.

### 4) QR Generator (qrflow)
- **Channels:** SEO ("free QR code generator with tracking"), Product Hunt,
  r/smallbusiness, restaurant/event communities.
- **Content angle:** use-case tutorials (menu QRs, event check-in, scan analytics).
- **Offer ladder:** free generator → paid plan for analytics/bulk/custom domains.

---

## Backlog (highest leverage first)
- [ ] **AI Systems:** follow up on existing `IntakeSubmission` leads (real,
      consented — the fastest path to revenue).
- [ ] **Chiku Fit:** create + wire Gumroad checkout URLs (blocks all paid traffic).
- [ ] **PromptEmpire:** add product-delivery Google Drive link (from prior notes).
- [ ] **Owned-list engine:** add `NewsletterSubscriber` model + `/api/subscribe`
      with double opt-in, or stand up a hosted ESP form + lead-magnet PDFs.
- [ ] **Analytics:** confirm a way to attribute clicks→signups→sales per brand
      (UTM links at minimum) so this tracker's "results" column is real data.

---

## 🗓️ Scheduled task prompt (copy this into the web scheduler)

Replace the old "email-scrape Instagram" scheduled task with a new daily task
using **exactly** this prompt. It does the routine the compliant way.

```text
You are running the daily growth routine for Chiku Global Solutions' four
businesses (PromptEmpire, Chiku Fit, AI Systems dental agency, QR Generator),
all in the chikuglobalsolutions/first repo.

FIRST: read GROWTH-TRACKER.md in full. It is the source of truth and its HARD
RULE governs this run: never scrape emails or personal contact data from
Instagram or anywhere else, and never build cold lists from harvested data.
Collect contact info only via the "Legal lead & contact collection playbook"
in that file (opt-in lead magnets, Meta/Instagram Lead Ads, LinkedIn Lead Gen
Forms, licensed B2B data + public business listings, creator collaborations).

Then do the daily loop:
1. CREATOR/COMMUNITY SCAN: identify ONE relevant creator or community per day
   (10k+ followers, same niche as one of the brands) using public/official
   means only (WebSearch, platform search). Record handle, niche, follower
   estimate, and WHY it fits. Frame it as a collaboration / affiliate /
   engagement target — never as a data source to extract from.
2. CONTENT: draft ONE ready-to-post piece of content per brand (hook, body,
   CTA, suggested channel). Stage the drafts in the tracker's Daily Log for the
   owner to review. Do NOT publish, post, DM, or email anything yourself.
3. LEGAL LEAD SOURCES: propose or advance one concrete legal lead-capture step
   (e.g. lead-magnet copy, a Lead Ads form spec, an opt-in landing page, the
   NewsletterSubscriber + /api/subscribe opt-in endpoint). If it is code,
   implement it, type-check with `npx tsc --noEmit`, and commit.
4. BUSINESS CHECK: note anything blocking revenue (missing checkout URLs,
   broken pages, unfollowed IntakeSubmission leads) in the Backlog.
5. LOG: append a dated entry to the Daily Log with items 1-4 and one learning.
   If you found a better tactic, update the relevant playbook section and bump
   "Last updated". Keep GROWTH-TRACKER.md the single source of truth; keep
   CLAUDE.md focused on engineering (only the pointer line to this file).

Commit and push to the designated branch and make sure a draft PR exists.

NOTIFY the owner (PushNotification) only when there is something actionable:
drafts ready for approval, a revenue blocker, a new legal lead step ready to
wire, or the routine could not run. If nothing changed, stay silent.
```

Steps to swap it in (owner):
1. In the Claude Code web app, open scheduled tasks and **delete/pause the old
   task** whose prompt says "email scrape."
2. Create a new daily task with the prompt above (schedule at an off-minute,
   e.g. 8:57am).
3. Point it at the `chikuglobalsolutions/first` repo.

---

## How to run this routine each day
1. Read this file top to bottom.
2. Do the 4-step compliant loop above.
3. Append a dated entry to the Daily Log with: creator/community identified,
   content drafted, anything published (by you), results, and one learning.
4. If you found a better tactic, update the relevant playbook section and bump
   "Last updated".

---

## Daily Log

### 2026-09-15 — Routine established
- **Set up this source-of-truth tracker.** Documented why email-scraping +
  autonomous marketing are out of scope, and replaced them with a compliant,
  higher-ROI growth loop and per-brand playbook.
- **Creator/community scan:** not performed automatically — this routine engages
  via official/public means with a human approving outreach; no scraping.
- **Content drafted/published:** none yet — awaiting your go-ahead on the
  compliant loop and on which brand to prioritize (recommend **AI Systems**,
  the highest revenue-per-sale, starting with existing intake leads).
- **Blockers surfaced:** Chiku Fit Gumroad URLs missing; owned-list capture not
  built yet. See Backlog.
- **Learning:** the fastest real money here is following up on the consented
  `IntakeSubmission` leads for AI Systems, not scraping cold contacts.

### 2026-09-15 — Owner made "no scraping" a hard rule + added legal collection playbook
- Owner explicitly directed: stop the scraping approach; collect lead/contact
  info only via legal means. Added a **HARD RULE** at the top of this file and a
  full **Legal lead & contact collection playbook** (consent-based capture,
  official Meta/LinkedIn lead-ad tools, licensed B2B databases + public business
  info for the dental agency, and warm/affiliate channels), each with a
  compliance checklist.
- **Note for owner:** the recurring daily task's *stored prompt* in the web
  scheduler still says "email-scrape Instagram." This file can't edit that; to
  retire it fully, edit or delete the scheduled task in the Claude Code web app.
  Until then, this file's HARD RULE governs each run's actual behavior.
- **Recommended next legal lead source to wire first:** Instagram/Meta Lead Ads
  or LinkedIn Lead Gen Forms → landing page opt-in → double opt-in list. This is
  the compliant, higher-ROI replacement for the Instagram scrape.
