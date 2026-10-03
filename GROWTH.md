# GROWTH.md — Marketing & Revenue Source of Truth

> **Purpose.** Single source of truth for growing the four Chiku Global Solutions brands
> and turning them into revenue. This file is meant to be updated as we learn what works.
> It is deliberately **separate from `CLAUDE.md`** — that file is engineering guidance for
> the codebase; this one is the business/marketing playbook. Do not merge marketing data
> into `CLAUDE.md`.

_Last updated: 2026-10-03_

---

## 0. Decision log — what this automation will and won't do

The original scheduled brief asked to "email scrape a new Instagram page each day… then
start marketing them all." That specific mechanism is **not implemented, on purpose**,
because it would damage the businesses it's meant to grow:

| Requested step | Status | Why |
|---|---|---|
| Daily scrape of emails from Instagram pages | ❌ Not done | Violates Instagram ToS; IG is login-walled (can't be done reliably/compliantly from here); harvested-email outreach is the #1 cause of domain blacklisting. |
| Auto cold-email scraped creators to market | ❌ Not done | Unsolicited commercial email to scraped addresses violates CAN-SPAM (US), CASL (CA), GDPR/PECR (EU/UK). It also poisons sender reputation, so Stripe receipts & NextAuth magic-links (both used by the `first` app) start landing in spam. |
| "Make money from the businesses" | ✅ In progress (this doc) | Replaced with a compliant growth engine below that a human approves before anything goes out. |

**Guardrail:** no outbound message (email, DM, post) is sent to anyone without the owner's
explicit go-ahead on the specific content and audience. Drafts are fine; sends need a human.

---

## 1. The four brands at a glance

All four live in the one Next.js app (`src/app/`). Grow them with content that points back
to these routes.

| # | Brand | Route(s) | Offer / how it makes money | Primary audience |
|---|---|---|---|---|
| 1 | **PromptEmpire** | `/promptempire` | AI prompt packs (Stripe payment links) | Marketers, founders, creators who use ChatGPT/Claude |
| 2 | **Chiku Fit** | `/chiku-fit` | Fitness guides / programs | People starting or restarting fitness |
| 3 | **AI Systems** (Dental AI Agency) | `/ai-systems`, intake form | Done-for-you AI systems for dental practices; has a Revenue Leak Calculator lead magnet | Dental practice owners / office managers |
| 4 | **QRFlow** (QR generator) | `/generate`, `/dashboard`, scan tracking | QR code generation + scan analytics (free/pro/business plans via Stripe) | SMBs, event organizers, restaurants |

---

## 2. Compliant growth engine (the real "make money" plan)

Three channels, in priority order. All are permission-based and don't risk the domain.

### A. Organic content → owned audience (lowest risk, compounding)
Create content on the brands' **own** social accounts and an **opt-in** email list.
- Post daily/weekly value content per brand (see §3 for ready drafts).
- Every post drives to a brand route + an opt-in capture (newsletter / lead magnet).
- Build the email list from people who opt in — then marketing email to them is 100% legal
  and lands in the inbox.

### B. Lead magnets → email capture (already partly built)
- **AI Systems** already has a *Revenue Leak Calculator* (`cf3a2ec`). Gate the full result
  behind an email opt-in → that's a consented lead you can follow up with.
- Add equivalent magnets for the others: PromptEmpire = free 10-prompt starter pack;
  Chiku Fit = free 7-day plan; QRFlow = free dynamic QR + basic analytics.

### C. Warm, manual outreach (NOT scraping)
If you want creator/partner outreach, do it the legal way:
- You (a human) pick creators whose **bio publicly invites business contact** ("for
  collabs: email…") — that's an invitation, not scraping.
- One personalized message at a time, a real partnership offer (affiliate %, cross-promo),
  not a blast. I can draft each one; you approve and send from your own account.
- Track replies in §5. Never automate the send.

---

## 3. Ready-to-use content drafts (approve, then post)

> These are starting drafts. Nothing is posted automatically. Pick, tweak, publish.

### PromptEmpire
- "5 ChatGPT prompts that write a week of marketing emails in 10 minutes. #3 is the one
  agencies charge $500 for. Full pack → [link]"
- "Stop typing 'make it better.' Here's the prompt structure that actually improves output
  every time: [role] + [context] + [constraints] + [format]. 40 more in the pack → [link]"

### Chiku Fit
- "You don't need 2 hours a day. Here's the 20-minute full-body routine for people who
  restart every January. Free 7-day version → [link]"
- "The #1 reason diets fail isn't willpower — it's planning. Here's a grocery list that
  makes the first week automatic. → [link]"

### AI Systems (Dental)
- "Your front desk misses ~30% of after-hours calls. Each missed new-patient call ≈ $1,200
  in lifetime value. See what it's costing your practice → Revenue Leak Calculator [link]"
- "An AI receptionist that books, reminds, and never calls in sick. Here's a 90-second demo
  of how it handles a new-patient call → [link]"

### QRFlow
- "Printed a QR code and the link changed? With dynamic QR you edit the destination without
  reprinting — plus see every scan. Free to start → [link]"
- "Restaurant owners: one QR on the table = menu + reviews + scan analytics. Set it up in
  2 minutes → [link]"

---

## 4. Daily routine (what this scheduled run should actually do)

Each day, instead of scraping, do the compliant loop:
1. **Check** each brand for new signups / sales (Stripe, DB `IntakeSubmission`, QR `scans`).
2. **Draft** 1 piece of content per brand that needs attention (from §3 patterns).
3. **Log** metrics in §5 and note what moved.
4. **Surface** to the owner anything that needs a decision or a send-approval.
5. **Never** send outbound to non-opted-in people.

> Metric sources are in-app (Stripe webhooks already sync `user.plan`; QR scans logged via
> `/api/scan/[shortCode]`; agency leads in `IntakeSubmission`). A future step can wire a
> read-only metrics pull once the owner confirms which store to read.

---

## 5. Tracker

### Revenue / funnel metrics (fill in from Stripe + DB)
| Date | Brand | Signups | Paid | MRR | Notes |
|---|---|---|---|---|---|
| 2026-10-03 | — | — | — | — | Baseline not yet pulled; needs owner OK on which store to read. |

### Content published
| Date | Brand | Platform | Post | Link | Result |
|---|---|---|---|---|---|
| — | — | — | — | — | — |

### Warm outreach (manual, approved sends only)
| Date | Brand | Prospect (public biz contact) | Offer | Status |
|---|---|---|---|---|
| — | — | — | — | — |

---

## 6. Open decisions for the owner

1. **Approve the compliant plan** above and tell me to proceed (or say which parts to change).
2. **Pick the email tool.** Mailchimp connector is **not authorized yet** — authorize it in
   claude.ai connector settings if you want list-based email. Until then, no sends.
3. **Confirm the metrics source** I may read (Stripe keys / the app DB) so §5 can auto-fill.
4. **Social accounts:** do the four brands have their own IG/X/LinkedIn handles? Growing
   *owned* accounts is the engine; tell me the handles (or let me draft a plan to create them).

---

_This file is updated as we learn what converts. It is the business source of truth;
`CLAUDE.md` stays engineering-only._
