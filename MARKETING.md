# MARKETING.md — Growth & Revenue Source of Truth

> This is the **single source of truth** for marketing, content, and growth across all four
> Chiku Global Solutions brands. It is maintained by the daily Claude routine. Every run reads
> this file first, executes the Daily Playbook, then updates the relevant sections and the
> Changelog at the bottom. When something better is discovered, the playbook here is updated —
> not just the run notes.
>
> **Scope discipline:** this file governs *legitimate, permission-based* marketing only. See
> [Guardrails](#guardrails). It supersedes the older `OBSIDIAN-UPDATE.md` status note.

_Last updated: 2026-07-08 · Owner: chikuglobalsolutions@gmail.com_

---

## 1. The Four Businesses

| # | Brand | Route | What it sells | Monetization | Primary channels |
|---|-------|-------|---------------|--------------|------------------|
| 1 | **PromptEmpire** | `/promptempire` | AI prompt packs for business/freelancers | Stripe payment links (one-time) | Reddit, X/Twitter, LinkedIn, email |
| 2 | **Chiku Fit** | `/chiku-fit` | Bulking/fitness programs + meal plans | Gumroad (checkout URLs pending) | Instagram, TikTok, Reddit |
| 3 | **AI Systems** (Dental AI Agency) | `/ai-systems` | Done-for-you AI automation for practices | Retainers ($1.5k–$5k + monthly) | LinkedIn, cold email (opt-in/warm), referral |
| 4 | **QRFlow** (QR generator) | `/generate` | QR code generation + scan analytics | Stripe subscription (free/pro/business) | Product-led, SEO, X/Twitter |

### Live assets & prices (verified from repo + OBSIDIAN-UPDATE.md)
**PromptEmpire — Stripe links (live):**
- 500 AI Business Prompts — $37 — https://buy.stripe.com/5kA5kFbpgcTY5Sg4gh
- Freelancer Command Center — $47 — https://buy.stripe.com/cNi5kF50Kf2a6WkbLU08g01
- Empire Bundle — $67 — https://buy.stripe.com/7sI8wR50Kf2adoI28X

**Chiku Fit — Gumroad (built, checkout URLs still MISSING — blocker):**
- 8-Week Mass Accelerator
- Broke Bulk Meal Plan Pack
- Complete Bulking System (Bundle)

**AI Systems — packages:** Starter $1,497 + $297/mo · Growth $2,497 + $497/mo · Premium $4,997 + $997/mo

**QRFlow — plans:** free / pro / business (Stripe subscription; price IDs via env).

---

## 2. Guardrails (read every run)

These protect the money, not just the rules. Do **not** deviate without the owner's explicit ok.

- ❌ **No scraping** of Instagram/any platform for emails, and **no cold-emailing scraped lists.**
  This violates CAN-SPAM/GDPR and the ToS of Mailchimp (a connected tool) — it gets the sending
  domain blocklisted, which breaks Stripe receipts and login magic-links across all brands.
- ✅ **Email** goes only to **opt-in** contacts (existing customers, list subscribers) via Mailchimp.
- ✅ **Social** posting is to the **owner's own accounts** (that's inherently permission-based).
- ✅ **Outreach** (AI Systems B2B) is **warm/1:1 and personalized** — real research on a named
  business, a relevant message, a way to opt out. Not bulk blasts. Tools: Apollo/Clay/HubSpot for
  research; send from Gmail as personal 1:1s, not automated sequences to strangers.
- ✅ Anything **outward-facing** (a public post, an email to a non-customer) is **staged for owner
  approval** unless the owner has explicitly pre-authorized that specific channel. Default = draft.

---

## 3. Toolchain (what's connected & how it's used)

| Job | Tool (connected) | Notes |
|-----|------------------|-------|
| Social scheduling | **Buffer** ← *not yet connected* | Route via **Zapier** or **Make** (both connected) until Buffer is added. See §6. |
| Design / creatives | **Canva** | Generate post images, carousels, thumbnails. |
| Email campaigns | **Mailchimp** | Opt-in lists only. Campaign planner + analytics. |
| SEO / keywords | **Semrush**, **Ahrefs**, **AirOps** | Keyword gaps, content briefs, rank tracking. |
| B2B outreach research | **Apollo.io**, **Clay**, **HubSpot** | Find + research dental practices for AI Systems. |
| Revenue truth | **Stripe** | Sales, MRR, which links convert. |
| Notes / dashboards | **Notion**, **Airtable** | Content calendar + metrics dashboard (optional mirror). |
| Send 1:1 outreach | **Gmail** | Personalized, not bulk. |
| Automation glue | **Zapier**, **Make** | Bridge to Buffer + cross-tool triggers. |
| Deploy / analytics | **Netlify**, **Vercel** | Site + traffic. |

> **Buffer status:** no Buffer MCP connector is available to install directly. Two paths:
> (a) connect Buffer at claude.ai if/when it appears, or (b) **use Zapier/Make** — create a
> "post to Buffer queue" Zap/scenario and the daily routine hands off finished posts to it.
> Until one of these is wired, social posts are produced as **ready-to-paste drafts** in
> `marketing/content-queue.md`.

---

## 4. Daily Playbook (what each run does)

Run order, every day. Keep each step cheap; stage outward actions for approval.

1. **Pull the numbers.** Stripe sales since last run (per brand), Netlify/Vercel traffic,
   Mailchimp campaign stats. Update §7 Metrics.
2. **Draft content (A).** 1 post per active brand for the day into `marketing/content-queue.md`,
   matched to each brand's channel + voice (see §5). Generate any needed image via Canva.
3. **Stage/schedule.** If Buffer (via Zapier/Make) is wired → push approved posts to the queue.
   Else → leave as drafts marked `[NEEDS APPROVAL]`.
4. **Warm outreach research (B).** Find **3–5** new *legitimate* prospects/partners in-niche
   (AI Systems: dental practices w/ weak online booking; PromptEmpire/Chiku Fit: creators for
   affiliate/collab). Log to §8 with a personalized angle. Do **not** mass-send.
5. **One SEO/conversion task (C).** Ship one concrete site improvement (sitemap, meta tags,
   copy, page speed, internal links) or log it to §9 backlog if it needs owner input.
6. **Update this file.** Metrics, pipelines, backlog, and the Changelog. Commit + push.
7. **Notify** the owner only if there's something worth their attention (a sale, a blocker, a
   decision needed, an approval requested). Otherwise stay silent.

---

## 5. Brand voice & content angles

- **PromptEmpire** — practical, results-first, "steal my prompt" energy. Hooks: before/after of a
  prompt, "I automated X in 5 min", freelancer time-savers. CTA → Stripe link. Best on Reddit
  (r/ChatGPT, r/Entrepreneur, r/freelance — value-first, no spam), X threads, LinkedIn.
- **Chiku Fit** — motivational + no-BS budget bulking. Hooks: cheap high-protein meals, beginner
  mass mistakes, progress framing. CTA → Gumroad (pending URLs). Best on IG Reels, TikTok, Reddit
  (r/naturalbodybuilding, r/gainit).
- **AI Systems** — authority + ROI for practice owners. Hooks: "dental practices lose $X to missed
  calls", review-generation, reactivation. CTA → book intake call. Best on LinkedIn + warm email.
- **QRFlow** — utility + analytics angle. Hooks: dynamic QR + scan tracking use-cases. CTA → /generate.
  Best via SEO + X. 

---

## 6. Automation status

| Piece | Status | Next action |
|-------|--------|-------------|
| Daily routine (this run) | 🟢 Active (scheduled Claude routine) | Follows §4 each day. |
| Content queue file | 🟢 Created | `marketing/content-queue.md`. |
| Buffer social posting | 🔴 Not wired | Connect Buffer OR build Zapier/Make → Buffer handoff. **Owner decision needed.** |
| Mailchimp opt-in campaigns | 🟡 Available, unused | Confirm which list(s) are opt-in, then draft first newsletter. |
| Metrics auto-pull | 🟡 Manual this run | Wire Stripe/Netlify pulls into the daily step. |

---

## 7. Metrics (updated each run)

| Date | Brand | Sales $ | Orders | Site visits | Email sent/opens | Notes |
|------|-------|---------|--------|-------------|------------------|-------|
| 2026-07-08 | — | _baseline not yet pulled_ | — | — | — | First infra run; metrics pull wired next run. |

---

## 8. Warm outreach / partnership pipeline (B)

| Date added | Brand | Prospect/Partner | Why a fit | Personalized angle | Status |
|------------|-------|------------------|-----------|--------------------|--------|
| — | — | _seeded next run_ | — | — | — |

Rule: every row is a *specific named* business/creator with a real reason. No lists, no blasts.

---

## 9. SEO / conversion backlog (C)

| Priority | Brand | Task | Status |
|----------|-------|------|--------|
| ✅ done | All | Expand `sitemap.ts` from 5 → 24 URLs (all hubs + 18 dynamic AI-Systems pages) | Shipped 2026-07-08 |
| ✅ done | AI Systems | Add `/ai-systems` to `robots.ts` allow list | Shipped 2026-07-08 |
| High | All | Add per-page `metadata` (title/description/OG) to brand hub pages | Backlog |
| High | Chiku Fit | Add Gumroad checkout URLs (revenue blocker) | Needs owner |
| Med | PromptEmpire | Add JSON-LD Product schema for the 3 Stripe products | Backlog |
| Med | All | OG images per brand (Canva) for social share cards | Backlog |
| Low | QRFlow | Landing-page keyword targeting ("dynamic qr code with analytics") | Backlog |

---

## 10. Open blockers / owner decisions

1. **Buffer**: connect it, or approve routing through Zapier/Make? (blocks auto social posting)
2. **Chiku Fit Gumroad URLs**: missing → those products can't be bought. (revenue blocker)
3. **Mailchimp**: which audience/list is genuinely opt-in, so we can start newsletters?
4. **Pre-approval**: which channels (if any) may auto-post without per-post approval?

---

## Changelog

- **2026-07-08** — Created MARKETING.md source of truth. Consolidated brand/price data from
  `OBSIDIAN-UPDATE.md`. Shipped SEO fix: sitemap 5→24 URLs incl. 18 dynamic AI-Systems pages +
  robots allow-list. Created `marketing/content-queue.md` with first content batch for all 4
  brands. Documented Buffer gap (route via Zapier/Make). Established §2 guardrails (no scraping /
  opt-in only). Wired the Daily Playbook (§4).
