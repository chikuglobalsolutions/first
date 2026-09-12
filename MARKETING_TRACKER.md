# Marketing Tracker — Chiku Global Solutions

> **Source of truth for the daily marketing routine across all four brands.**
> This file is maintained by the scheduled "daily business check" task. It is
> intentionally **separate** from `CLAUDE.md` — that file is the engineering/build
> source of truth and merging marketing notes into it would corrupt the CI/dev
> docs. Treat *this* file as the marketing source of truth; the two link to each
> other but stay separate.

---

## 0. Scope & guardrails (read first)

The stored daily prompt asks to "email-scrape a new Instagram page each day" and
auto-market from the harvested contacts. **The routine does not and will not do
that**, for two reasons:

1. **Capability** — this automation runs in an isolated cloud container scoped to
   two GitHub repos. It has no Instagram login, no Instagram Graph API access, and
   no browser session for instagram.com. It literally cannot read follower counts
   or bio emails.
2. **Compliance/risk** — scraping creators' contact emails to send unsolicited
   marketing violates Instagram's Terms of Service and anti-spam law
   (US CAN-SPAM, Canada CASL, EU/UK GDPR require a lawful basis + opt-out). A
   scraped-list cold-email blast is the fastest way to get the sending domain
   blacklisted, which would also poison the legitimate transactional email
   (magic-link login + receipts) this app depends on via Resend. Protecting
   `chikuglobalsolutions.com`'s sending reputation is worth more than any cold list.

**What the routine does instead** (all of this *is* legitimate growth work):
- Generates ready-to-post organic content for each brand (below).
- Maintains a compliant, opt-in growth playbook per brand.
- Tracks funnel health / what to improve on the actual storefronts.
- Surfaces one concrete money-moving action per brand per day.

If you *do* want creator outreach, the compliant version is: **manual, personalized
DM/collab outreach that you (a human) send**, or a paid partnership — not a scraped
blast. This routine can draft those DMs for you to send yourself. See §5.

---

## 1. The four businesses

| # | Brand | What it sells | Monetization | Primary funnel |
|---|-------|---------------|--------------|----------------|
| 1 | **PromptEmpire** | AI prompt packs | Stripe payment links (one-time) | Traffic → `/promptempire` → buy link |
| 2 | **Chiku-Fit** | Fitness guides / programs | Digital product | Traffic → `/chiku-fit` → checkout |
| 3 | **AI Systems** (Dental AI Agency) | Done-for-you AI systems for dental practices | High-ticket service + intake form | Traffic → `/ai-systems` → intake form → sales call |
| 4 | **QRFlow** | QR code generator + scan analytics | SaaS subscription (free / pro / business via Stripe) | Signup → `/dashboard` → upgrade |

Highest expected $/hour of effort right now: **#3 AI Systems** (high ticket, one
client can be worth thousands) and **#4 QRFlow** (recurring revenue). #1 and #2 are
volume plays that live and die on content + SEO.

---

## 2. Ready-to-post content (generated this cycle — 2026-09-12)

Copy/paste these. Rotate one per brand per day. Keep the brand voice: direct,
outcome-first, no hype-emojis-per-word.

### PromptEmpire (X/LinkedIn/IG caption)
- **Hook:** "You don't have a ChatGPT problem. You have a prompt problem."
- **Body:** Most people type a wish and hope. Operators use a *structure*: role →
  context → constraints → output format → examples. Our packs are that structure,
  pre-built for one job (cold email, ad copy, SOPs, code review). Stop rewriting the
  same prompt 9 times.
- **CTA:** "Grab the pack that matches your job → [link]"

### Chiku-Fit
- **Hook:** "The program isn't the hard part. The first 14 days are."
- **Body:** Motivation is a terrible operating system. Chiku-Fit gives you a
  day-by-day plan so you never have to *decide* — you just open the guide and do
  today. That's the whole trick.
- **CTA:** "Start day 1 today → [link]"

### AI Systems (LinkedIn — this audience is dental practice owners/office managers)
- **Hook:** "A lead that waits until morning is a lead your competitor already
  called."
- **Body:** 40–60% of dental inquiries are lost to slow follow-up. Our Lead
  Follow-Up Engine answers every new lead in ~2 minutes, 24/7, and nurtures for 14
  days until they book — no extra front-desk staff. Live in 2 weeks.
- **CTA:** "See if it fits your practice → [intake form link]"

### QRFlow
- **Hook:** "A QR code you can't measure is a billboard with the lights off."
- **Body:** QRFlow tracks every scan — count, device, time — so you know which
  flyer, table tent, or campaign actually worked. Free to start; upgrade when you
  need more codes and history.
- **CTA:** "Make a tracked QR in 30 seconds → [/generate]"

---

## 3. Compliant growth playbook (per brand)

Order of leverage, cheapest/durable first:

1. **On-site SEO** — the app already ships `sitemap.ts` + `robots.ts`. Each
   `ai-systems/systems/[slug]` and `industries/[slug]` page is an SEO asset. Add
   more `SYSTEMS`/`INDUSTRIES` entries in `src/lib/ai-systems-data.ts` (per the
   CLAUDE.md convention) → more indexable long-tail pages → free traffic.
2. **Organic content cadence** — 1 post/brand/business-day from §2, repurposed
   across X + LinkedIn + IG. Consistency > virality.
3. **Opt-in list building** — a lead magnet + email capture (free prompt sample,
   free workout week, free "dental lead audit," free QR pack). Legal, warms the
   list, and reuses the existing Resend email infra.
4. **Manual creator collabs** (§5) — human-sent, personalized, opt-in.
5. **Paid** — only after 1–3 convert organically; otherwise you're renting traffic
   to a leaky funnel.

---

## 4. Funnel / product to-do backlog (money-moving, ranked)

- [ ] **AI Systems:** confirm the intake form actually notifies you on submit (email
      alert) — a missed high-ticket lead is the most expensive bug here.
- [ ] **QRFlow:** make the free→pro upgrade prompt visible on the dashboard when a
      user hits a limit (classic SaaS conversion lever).
- [ ] **PromptEmpire/Chiku-Fit:** add an email-capture on exit / on the product page
      so non-buyers become a re-marketable opt-in list.
- [ ] **All brands:** add OpenGraph/social preview images so shared links don't look
      broken (kills click-through when missing).
- [ ] **SEO:** add 3–5 new `industries` entries to widen the long-tail net.

(Each of these can become its own reviewed PR — this routine can draft them.)

---

## 5. Creator outreach — the compliant version

Instead of scraping, when you want to approach a 10k+ creator in-niche:
1. You (human) identify the creator and confirm they're relevant.
2. This routine drafts a **personalized** DM/collab pitch referencing their actual
   content — no template blast.
3. You send it from your own account. Opt-in, ToS-safe, and far higher reply rate
   than a scraped cold email.

Niche map for "similar niches":
- PromptEmpire → AI/productivity/"build-in-public"/SaaS founders.
- Chiku-Fit → fitness coaches, home-workout, wellness.
- AI Systems → dental practice owners, DSOs, practice-management consultants.
- QRFlow → small-biz marketing, restaurants, event organizers, print/signage.

---

## 6. Daily run log

Newest first. Each entry: date · what ran · what was found · one recommended action.

### 2026-09-12 — first run
- **Ran:** grounded the routine in the actual repo; established this tracker as the
  marketing source of truth; generated one content post per brand (§2); wrote the
  compliant growth playbook (§3) and money-moving backlog (§4).
- **Found:** the requested Instagram email-scrape is neither possible from this
  environment nor compliant to run — replaced with the opt-in playbook above and
  flagged to the owner.
- **Recommended next action (highest $):** wire up an email/Slack alert on AI
  Systems intake-form submissions so no high-ticket lead is missed. Second: add the
  free→pro upsell trigger in the QRFlow dashboard.

<!-- Append future runs above this line. Keep §2 content fresh each cycle;
     promote durable learnings into §3/§4 rather than letting the log sprawl. -->
