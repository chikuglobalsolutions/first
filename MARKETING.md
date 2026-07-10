# MARKETING.md — Chiku Global Solutions: Growth Source of Truth

> **This file is the single source of truth for how we market and grow the four
> Chiku Global brands.** It is the legit, sustainable playbook: build audiences,
> capture opt-in email, publish organic content, convert to paid. Update it as we
> learn what works. When something here materially changes how the codebase should
> behave, reflect it in `CLAUDE.md` too.
>
> Last updated: 2026-07-10 · Owner: Chiku Global Solutions LLC

---

## 0. Ground rules (read first)

These exist because breaking them gets accounts banned and can be illegal —
either of which kills the business faster than slow growth ever would.

- **No scraping.** We do not scrape emails, followers, or contact info from
  Instagram or anywhere else. It violates platform ToS and privacy law
  (GDPR/CCPA) and gets accounts terminated.
- **Opt-in only.** We only email people who affirmatively signed up on our site
  (the `EmailSubscriber` table records `consent`, `consentText`, `ip`, and
  timestamp as proof). No purchased or harvested lists — ever.
- **Every email has an unsubscribe link** and a physical mailing address
  (CAN-SPAM). Honor unsubscribes within 10 days (we do it immediately).
- **One brand voice per list.** People signed up for a specific brand; don't
  cross-blast them into an unrelated one without a clear opt-in.
- **Engage where the audience is, don't spam it.** Commenting, DMing after a real
  interaction, and collaborating with creators is fine. Mass unsolicited DMs are
  not — they're the fast track to a shadowban.

If a task ever asks us to break one of these, stop and flag it.

---

## 1. The brands & their niches

| Brand | What it sells | Core audience | Primary platforms |
|---|---|---|---|
| **PromptEmpire** | 500 AI business prompt packs (one-time, Stripe) | Neurodivergent (ADHD) freelancers & solopreneurs, AI-curious beginners | X/Twitter, LinkedIn, Reddit, IG Reels, TikTok |
| **Chiku Fit** | Budget training + nutrition guides ($29–$50) | Skinny/beginner lifters on a budget, students, "hardgainers" | IG Reels, TikTok, YouTube Shorts, Reddit |
| **Chiku AI Systems** | Done-for-you AI automation retainers ($297–$997/mo) | Owners of local service businesses (dental, legal, home services, real estate) | LinkedIn, X, cold-warm outbound, local FB groups |
| **QR / QRFlow** | QR generator + scan analytics (freemium → Stripe plans) | Small biz owners, event organizers, restaurants, marketers | Product-led SEO, IG, TikTok, Pinterest |

**Niche discipline:** grow each brand alongside *adjacent* creators/communities in
the same niche (e.g. Chiku Fit near budget-fitness and beginner-lifting creators),
not random big accounts. Relevance > follower count.

---

## 2. The growth engine (how the money actually gets made)

```
Organic content  →  Profile/link in bio  →  Free lead magnet  →  Opt-in email list  →  Nurture  →  Paid product
   (attention)        (traffic)              (/  signup form)      (owned audience)     (trust)     (revenue)
```

The site now has the middle of this funnel built in:

- **Signup forms** live on every brand page (`NewsletterSignup` component).
- **`POST /api/subscribe`** records the opt-in with consent proof into the
  `EmailSubscriber` Prisma model.
- **Lead magnets** are promised per brand (free 10 prompts, budget grocery list,
  AI automation checklist). ⚠️ *These deliverables still need to be produced and
  the fulfillment email wired up — see Open Loops.*

### Where sends happen
Mailchimp is connected (Intuit-Mailchimp MCP). Flow once a subscriber exists:
1. `EmailSubscriber` row created on signup (done, in-app).
2. Sync subscribers → Mailchimp audience (per-brand tag/segment). *(to build)*
3. Welcome automation delivers the lead magnet. *(to build)*
4. Weekly-ish broadcast per brand from the content calendar below.

---

## 3. Content system

**Cadence (sustainable, not spray-and-pray):**
- 3–5 short-form posts/week per active brand (Reels/Shorts/TikTok + repurpose to X/LinkedIn).
- 1 email/week per brand once each list has >50 subscribers.
- Batch-produce weekly; schedule; engage daily for 15 min in-niche.

**Repurpose ladder (make once, post everywhere):**
`Long idea → short-form video script → carousel → X thread → LinkedIn post → email → blog/SEO page`

Initial content drafts live in **`/content/<brand>/`** (see task output). Treat those
as the starting bank; log what performs in the tracker below and make more of it.

**What we know converts (update as we learn):**
- _TBD — no data yet. First 30 days is learning which hooks land._

---

## 4. Weekly operating rhythm

| Day | Action |
|---|---|
| Mon | Review last week's numbers → update §6 tracker. Pick this week's theme. |
| Tue | Batch-write content for all active brands (from `/content` bank). |
| Wed | Schedule posts. Draft the week's emails in Mailchimp. |
| Thu–Fri | Publish + engage in-niche 15 min/day. |
| Sun | Send weekly emails. Note what worked in §7 Learnings. |

---

## 5. Tech / infra status

| Piece | Status | Notes |
|---|---|---|
| `EmailSubscriber` model | ✅ built | consent + source + ip + timestamp stored |
| `/api/subscribe` route | ✅ built | validates, dedupes (upsert), non-fatal notify |
| `NewsletterSignup` component | ✅ built | on all 4 brand pages, per-brand theming |
| Lead magnets (3) | ✅ built | `src/lib/lead-magnets.ts` → `/free/<slug>` pages |
| Welcome/delivery email | ✅ built | `src/lib/email.ts`, sent on subscribe, links the magnet |
| Mailchimp audience sync | ✅ built | `src/lib/mailchimp.ts`, tags by brand; skipped if unconfigured |
| Unsubscribe handling | ✅ built | `/api/unsubscribe` (HMAC token) → status flip + Mailchimp + `/unsubscribed` |
| Welcome automation (Mailchimp-native) | 🟡 optional | app already sends the welcome; a Mailchimp journey can layer on the brand tag |
| Content bank | 🟡 seeded | `/content/*` — expand weekly |

**Config for sends (see `.env.example`):** `RESEND_API_KEY` + `MARKETING_FROM_EMAIL`
power the welcome email; `COMPANY_MAILING_ADDRESS` fills the CAN-SPAM footer;
`MAILCHIMP_API_KEY` / `MAILCHIMP_AUDIENCE_ID` / `MAILCHIMP_SERVER_PREFIX` enable
audience sync (all optional — signup still works if unset). Unsubscribe links are
signed with `NEXTAUTH_SECRET`.

**The lead magnets** (`src/lib/lead-magnets.ts`) are the single source of truth for
both the delivery page and the email, so they never drift:
- PromptEmpire → `promptempire-starter-10` (10 free prompts)
- Chiku Fit → `broke-bulk-grocery-list` (budget high-protein grocery list)
- Chiku AI Systems → `ai-automation-checklist` (12-point checklist)

---

## 6. Results tracker

Update every Monday. Keep it honest — real numbers only.

| Week of | Brand | New subs | Posts | Best post (reach) | Revenue | Notes |
|---|---|---|---|---|---|---|
| 2026-07-10 | — | 0 | 0 | — | — | Funnel infra shipped; baseline = 0. |

**Totals to date:** subscribers 0 · paying customers 0 · MRR $0 (AI Systems) · one-time rev $0.

---

## 7. Learnings log (append-only)

- **2026-07-10** — Kicked off the legit growth stack. Replaced the original
  "scrape IG emails and cold-blast them" idea (ToS + spam-law + account-ban risk)
  with an opt-in funnel: on-site capture → consent-tracked list → Mailchimp nurture.
  Slower to start, but it compounds and can't get the accounts banned.
- **2026-07-10 (pt 2)** — Completed the full loop in code: 3 real lead magnets
  served at `/free/<slug>`, a per-brand welcome email that delivers them, Mailchimp
  audience sync tagged by brand, and a signed one-click unsubscribe. Everything is
  best-effort/non-fatal so a third-party outage never breaks signup. Now it's just
  env config + turning on the content cadence.

---

## 8. Open loops / next best actions (ranked)

The capture → deliver → nurture → unsubscribe loop is now built end-to-end in code.
Remaining work is operational + config:

1. **Set the production env vars** so emails actually send: `RESEND_API_KEY`,
   `MARKETING_FROM_EMAIL` (a verified domain in Resend), `COMPANY_MAILING_ADDRESS`
   (real address for the CAN-SPAM footer), and the `MAILCHIMP_*` trio.
2. **Verify a sending domain in Resend** and send yourself a test signup to confirm
   the welcome email + lead-magnet link + unsubscribe link all work.
3. **Ship the content bank to a scheduler** and start posting 3×/week per brand.
4. **(Optional) Add a Mailchimp welcome journey** triggered by the brand tag if you
   want Mailchimp-native automation on top of the app's welcome email.
5. **Instrument conversion** (UTM on bio links → signup → purchase) so §6 has real data.
