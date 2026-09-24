# GROWTH TRACKER — Chiku Global Solutions

> **Source of truth** for the daily growth/marketing routine across all Chiku brands.
> This file is updated by the scheduled Claude routine each run. When something here
> gets refined or a better method is found, update this file first, then reflect
> durable facts into `CLAUDE.md`.

_Last updated: 2026-09-24_

---

## 1. The businesses (from this codebase)

| Brand | What it sells | Live surface | Monetization |
|-------|---------------|--------------|--------------|
| **PromptEmpire** | AI prompt packs / digital products (500 AI Business Prompts, 30-Day Content Machine, Email Empire Swipe File, Freelancer Command Center) | `promptempire/` + `promptempire-chiku` repo (index.html, delivery.html, PDFs) | Stripe payment links |
| **Chiku-Fit** | Fitness guides & programs | `chiku-fit/` route group | Digital product sales |
| **AI Systems** ("Dental AI Agency") | Done-for-you AI systems for local businesses (Lead Follow-Up Engine, Review Generation, etc.) + intake form + Revenue Leak Calculator | `ai-systems/` route group; content in `src/lib/ai-systems-data.ts` | High-ticket B2B services / retainers |
| **QRFlow** | QR code generator + scan analytics (the app's origin) | `/generate`, `/dashboard`, scan-tracking route | SaaS plans: free / pro / business (Stripe subscriptions) |

Shared stack: single Next.js 14 app, dark theme, Prisma, NextAuth magic-link, Stripe. Deploys to Netlify.

---

## 2. Decision log — what this routine will and will NOT do

### ❌ NOT doing: daily Instagram email scraping → cold outreach
The original brief asked to "email scrape a new Instagram page each day" and blast marketing
to those contacts. **I am not building this**, because it would actively hurt the business:

- **Platform ban risk** — scraping contact data violates Instagram/Meta's Terms; accounts and
  tools doing it get killed.
- **Privacy law exposure** — harvesting people's emails without consent to market to them is a
  GDPR/CCPA/PECR violation with real fines. These are personal data of non-customers.
- **Spam law + deliverability suicide** — unsolicited bulk email to scraped addresses breaks
  CAN-SPAM/CASL, and it destroys the sending reputation of `chikuglobalsolutions@gmail.com` and
  any business domain. One scraped-list blast can get the Google Workspace account suspended.
  That kills the magic-link auth and Stripe receipt email for the *actual* products.

**Net: the scraped-cold-outreach path risks the whole operation to chase low-quality leads.**

### ✅ Doing instead: a compliant growth engine that actually compounds
Same goal ("make money out of the businesses"), sustainable mechanics:

1. **Owned-audience content** — publish consistently on the brand's own channels (IG, X,
   LinkedIn, email list of people who *opted in*). Content drafted daily below.
2. **Lead magnets → opt-in list** — the AI Systems site already has the *Revenue Leak
   Calculator*; funnel that + a free prompt sample into an email list people join willingly.
   Then market to that list all day long — it's yours and it's legal.
3. **Warm, permission-based partner outreach** — reaching out to creators/agencies to
   collaborate is fine when it's a genuine 1:1 pitch to a public business inbox, not a scraped
   blast. Kept to a hand-curated, low-volume, personalized cadence.
4. **Product-led** — QRFlow free tier and PromptEmpire tripwire products bring people in; upsell.

---

## 3. Daily routine log

### 2026-09-24 — Run 1 (setup)
- Established this tracker as source of truth.
- Recorded the decision above (no scraping/cold-blast; compliant engine instead).
- Drafted first content batch for all four brands (Section 5).
- **Blocked / needs owner input** (Section 4) before automated publishing or list-building can run.

> Future runs append a dated entry here: what was published, what converted, what to try next.

---

## 4. Blockers — what I need from the owner to actually execute

To move from "drafting" to "publishing + selling on autopilot", I need one or more of:

- [ ] **Which channels are live?** IG / X / LinkedIn / TikTok handles per brand, and whether
      you want me to draft-only or (where a connector exists) schedule posts.
- [ ] **Email list platform** — Mailchimp is connected but **not yet authorized** (needs OAuth
      in an interactive session / connector settings). Once authorized I can build opt-in
      campaigns to *your own* subscribers. No list = no compliant email marketing.
- [ ] **Approval to publish** vs. draft-for-review. Default is draft-for-review.
- [ ] **Analytics access** (Stripe dashboard numbers, site traffic) so daily entries can track
      real revenue/conversion instead of guessing.
- [ ] Confirm you're OK with the compliant strategy replacing the scraping plan.

Until these are answered, each run will keep producing ready-to-post content and refining the
plan, but won't send anything on your behalf.

---

## 5. Content batch — 2026-09-24 (ready to post, owned channels)

### PromptEmpire (AI prompt packs)
**Hook post (IG/X):**
> You don't have a productivity problem. You have a "blank prompt box" problem.
> The 500 AI Business Prompts pack turns "I don't know what to ask ChatGPT" into
> copy-paste workflows for sales emails, offers, content, and ops. Link in bio.

**Carousel idea (5 slides):** 1) "5 prompts that replace a $2k/mo VA" → 2–5 one prompt each with
a before/after. CTA slide → the pack.

**Email to opted-in list:** subject "The prompt I use before every sales call" — give one real
prompt free, then link the full pack.

### Chiku-Fit (fitness)
**Hook post:** "Most 'fat loss' plans fail in week 2 because they're built for someone with 2
free hours a day. This one's built for people with a job. [Guide]"
**Reel script (15s):** 3 quick wins (protein anchor, 8k steps, 1 lift/day) → "full 30-day plan in
bio."

### AI Systems (Dental AI Agency — high ticket)
**LinkedIn post (owner voice):**
> Dental practices lose 40–60% of new patient leads to slow follow-up. Not because the team is
> bad — because leads come in at 8pm and get answered at 10am. We build an AI Lead Follow-Up
> Engine that replies in 2 minutes, 24/7, and books straight to the calendar. Free Revenue Leak
> Calculator (no email wall): [link]. See what slow follow-up costs you this month.

**Cold-*warm* partner note (1:1, to a public business inbox, hand-picked — NOT bulk):** short,
references their actual practice/agency, offers the calculator, asks one question. Max a handful
a day, personalized.

### QRFlow (QR SaaS)
**Feature post:** "Every QR code you make should tell you who scanned it, when, and on what
device. Ours does — free tier included. [/generate]"
**Use-case thread:** restaurants, events, real-estate signs, product packaging — one QR + live
scan analytics.

---

## 6. Compliant growth playbook (the repeatable method)

1. **Pick 1 brand-of-the-day** rotation: Mon PromptEmpire, Tue AI Systems, Wed Chiku-Fit,
   Thu QRFlow, Fri whichever converted best that week.
2. **One lead magnet per brand** driving to an opt-in list (Revenue Leak Calculator already
   exists for AI Systems — replicate the pattern).
3. **Publish 1 short-form + 1 long-form per brand per week**, repurpose across channels.
4. **Email the owned list 2–3×/week** with value-first, one CTA.
5. **Measure**: track opt-ins, click-throughs, Stripe checkouts. Double down on the winner.
6. **Partner outreach**: hand-curated, personalized, low volume, public business inboxes only.

_This is the source of truth. Update it here first when the plan improves._
