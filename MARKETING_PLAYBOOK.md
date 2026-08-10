# Marketing Playbook & Growth Tracker — Chiku Global Solutions

> **Purpose:** This is the living source of truth for marketing and growing the
> Chiku Global Solutions product lines. It is updated as we learn what works.
> It complements (does not override) `CLAUDE.md`, which governs the codebase.
>
> **Last updated:** 2026-08-10
> **Owner:** chikuglobalsolutions@gmail.com

---

## 1. The businesses we're growing

| Brand | Route | What it sells | Primary funnel |
|-------|-------|---------------|----------------|
| **PromptEmpire** | `/promptempire` | AI prompt packs | Stripe payment links |
| **Chiku-Fit** | `/chiku-fit` | Fitness guides & programs | Digital product sales |
| **Chiku AI Systems** | `/ai-systems` | "Dental AI Agency" — AI receptionist/automation for dental practices | Intake form → sales call |
| **QRFlow** | `/generate`, `/dashboard` | QR code generator + scan analytics | Freemium → Pro/Business (Stripe subscription) |

**North-star goal:** durable, compounding revenue — not one-off blasts. Each
tactic below is chosen because it keeps paying off after the work is done.

---

## 2. Guardrails (read first — these are non-negotiable)

These protect the businesses from legal, platform, and reputational risk. A
scheduled/automated run must stay inside them.

- **No email scraping.** We do not harvest emails from Instagram (or any
  platform) to send unsolicited outreach. It violates Instagram's Terms of
  Service, and mailing scraped addresses violates anti-spam law
  (US CAN-SPAM, EU GDPR, Canada CASL). Getting a domain/IP blocklisted would
  damage *all four* businesses' deliverability at once.
- **Permission-based lists only.** We grow email lists with opt-in forms, lead
  magnets, and checkout consent — people who asked to hear from us.
- **No autonomous public posting or sending.** An unattended run may *draft*
  content and *prepare* campaigns, but a human approves before anything is
  published externally or emailed. (See §6 for why.)
- **Platform-native, ToS-compliant only.** Grow on Instagram/TikTok/etc. by
  using them as intended (posting, engaging), never by automated scraping or
  bot activity that risks account bans.
- **Honest claims.** No fake reviews, follower counts, testimonials, or
  guaranteed-income claims.

> The original scheduled prompt asked for a daily Instagram email scrape and
> fully autonomous marketing. That specific mechanism is intentionally **not**
> implemented — see the guardrails above. Everything below is the compliant,
> higher-ROI alternative.

---

## 3. Legitimate growth engine (what actually compounds)

For each business the same four levers apply. Prioritize in this order:

1. **Owned SEO content** — pages/blog posts that rank and pull in buyers for
   years. Highest long-term ROI, no ad spend.
2. **Organic social** — consistent short-form content (Reels/TikTok/Shorts)
   built from the SEO content. Repurpose, don't reinvent.
3. **Opt-in email list** — a lead magnet + welcome sequence turns visitors into
   a list we *own* and can market to compliantly.
4. **Warm, consented outreach** — for AI Systems (B2B), genuine 1:1 outreach to
   businesses via their *public business contact channels* with a clear opt-out;
   done in low volume, personalized, never scraped bulk.

### Per-brand angle

- **PromptEmpire** — Target "best ChatGPT prompts for [use case]" SEO. Give away
  a free 10-prompt pack as the lead magnet; upsell the paid packs.
- **Chiku-Fit** — Target "[goal] workout plan / [diet] meal guide" SEO + before/
  after-style short-form. Free 1-week plan as lead magnet.
- **Chiku AI Systems** — B2B, so LinkedIn + a sharp niche landing page ("AI
  receptionist for dental practices") + a short demo video. Outreach is
  *personalized and consented*, targeting practices' listed business emails,
  small volume, with case-study proof.
- **QRFlow** — Product-led: SEO on "free QR code generator with tracking," a
  free tier that watermarks/limits, upgrade prompts in-dashboard.

---

## 4. Daily / weekly cadence (safe for an automated assistant to prep)

A scheduled run should **prepare drafts and a report**, then stop for human
review. Suggested rotation:

| Day | Focus | Deliverable (draft, for approval) |
|-----|-------|-----------------------------------|
| Mon | PromptEmpire | 1 SEO post outline + 2 Reel scripts |
| Tue | Chiku-Fit | 1 SEO post outline + 2 Reel scripts |
| Wed | AI Systems | 1 LinkedIn post + 3 personalized outreach drafts (public business contacts only) |
| Thu | QRFlow | 1 SEO/how-to post + in-app upsell copy |
| Fri | All | Weekly metrics review → update §7 tracker |

Content can be produced with the available skills (`seo-content`,
`blog-changelog-writer`, `onboarding-sequence`, `ui-copy`, `email-responder`)
and design tools (Canva). Nothing goes live without sign-off.

---

## 5. What I need from you to actually execute (blockers)

To move from planning to publishing, please confirm/provide:

1. **Which channels are approved** and their handles (Instagram, TikTok,
   LinkedIn, YouTube) for each brand.
2. **Analytics access** — so the tracker in §7 reflects real numbers (site
   analytics, Stripe revenue, social insights).
3. **Approval mode** — do you want to review drafts before publishing (default,
   recommended), or approve a standing content calendar?
4. **Email platform** — Mailchimp is connected but needs re-authorization before
   I can build opt-in sequences. Confirm you want to use it.
5. **Lead magnets** — OK to create the free giveaway assets (prompt pack, 1-week
   fitness plan) as the top of each funnel?

---

## 6. Why an unattended run does not publish or send on its own

Publishing to social, sending email, or contacting businesses is outward-facing
and hard to reverse. A scheduled prompt is not live consent from you, and there
is no human watching a scheduled run in real time. So automated runs stop at
*prepared drafts + a report*, and a person approves the outward step. This
protects brand reputation and keeps us clear of anti-spam / platform rules.

---

## 7. Growth tracker

Update weekly. (Baselines are placeholders until real analytics access is
granted — see §5.)

| Date | Brand | Metric | Value | Notes |
|------|-------|--------|-------|-------|
| 2026-08-10 | — | (setup) | — | Playbook created; awaiting channel + analytics access |

---

## 8. Changelog / lessons learned

Append what works and what doesn't, so this doc gets smarter over time.

- **2026-08-10** — Created playbook. Replaced the "daily Instagram email scrape"
  request with a compliant, higher-ROI growth engine (SEO + organic social +
  opt-in email + consented B2B outreach). Reason: scraping violates platform
  ToS and anti-spam law and risks blocklisting all four brands' email domains.
  Established that automated runs prepare drafts only; a human approves any
  outward action.
