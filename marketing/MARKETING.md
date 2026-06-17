# MARKETING.md — Source of Truth

> **This file is the authoritative source of truth for all marketing across Chiku Global
> Solutions LLC.** The daily marketing routine reads this file at the start of every run and
> updates it as it learns. If anything here conflicts with another doc, this file wins.
> `CLAUDE.md` points here.

- **Company:** Chiku Global Solutions LLC (Wyoming LLC, Cheyenne, WY · est. 2025)
- **Founder:** Akujuobi "Aku" Nwabeke
- **Site:** https://chikuglobalsolutions.com · **Email:** chikuglobalsolutions@gmail.com · **Phone:** (781) 375-9585
- **Company tagline:** *"Built for minds that work differently."*
- **Positioning:** Digital products, AI systems, and communities that help neurodivergent
  entrepreneurs — especially those with ADHD — build businesses that actually stick.
- **Differentiators:** ADHD-aware · buy-once (no recurring on digital products) · community-first
  (Skool) · founder replies personally.

---

## 1. The four brands (at a glance)

| Brand | Offer(s) | Price | Buy link | Profile |
|---|---|---|---|---|
| **PromptEmpire** | 500 AI Business Prompts · Freelancer Command Center · Empire Bundle | $37 / $47 / $67 (one-time) | Stripe payment links | `brands/promptempire.md` |
| **Chiku Fit** | 8-Week Mass Accelerator (LIVE) · Broke Bulk Meal Plan (soon) · Complete Bulking System (soon) | $49.99 / $29.99 / $89.99 | Gumroad: https://chikuglobal.gumroad.com | `brands/chiku-fit.md` |
| **Chiku AI Systems** | 6 done-for-you AI systems × 12 industries | From $1,497 setup | Intake form on `/ai-systems` | `brands/ai-systems.md` |
| **qrflow** | QR codes + scan analytics | Free / Pro $9/mo / Business $29/mo | Stripe subscription | `brands/qrflow.md` |

> **Prices and links are verified against the codebase** (`src/lib/stripe.ts`,
> `src/lib/ai-systems-data.ts`, `src/app/promptempire/page.tsx`, `src/app/chiku-fit/page.tsx`,
> `src/app/page.tsx`). Re-verify before changing any number in published content.

---

## 2. Channel map

| Channel | Status | Notes |
|---|---|---|
| Organic social (X/Threads, LinkedIn, Instagram, TikTok) | **Draft-only** | No posting integration or accounts referenced in codebase yet. Engine writes copy-paste-ready posts. **ACTION NEEDED from user:** which accounts exist? |
| Email / newsletter | **Mailchimp (MCP connected)** | Opt-in lists ONLY. Never scraped or cold lists. |
| Visuals | **Canva (MCP connected)** | Generated on request once cadence is approved. |
| Owned site | `chikuglobalsolutions.com` | Landing pages already live; lead-magnet opt-in forms TBD. |
| Community | Skool | Referenced as community-first; confirm URL. |

### Hard rules (compliance)
- **No scraping** of Instagram or any platform for contacts.
- **No cold email** to non-opted-in people (CAN-SPAM / GDPR / CASL).
- Email only to people who opted in via a lead magnet or signup.
- Every email has a real unsubscribe + physical address (1621 Central Ave, Ste 8572, Cheyenne, WY 82001).

---

## 3. KPIs (fill in as data arrives)

| Metric | Baseline | Target | Notes |
|---|---|---|---|
| Email list size | TBD | — | per brand |
| Social followers | TBD | — | per platform |
| Landing page conversion | TBD | — | from Stripe/Gumroad |
| Sales / revenue per brand | TBD | — | weekly |
| Content pieces published / week | 0 | rotate 4 brands | |

---

## 4. Daily runbook (what each scheduled run does)

1. **Read state** — this file + `tracker.md` (what's been done) + `playbook.md` (what's working).
2. **Pick focus** — rotate the 4 brands (see rotation below) or produce one asset per brand.
3. **Produce** today's batch into a new `content/<YYYY-MM-DD>/` folder:
   - 3–5 ready-to-post social posts per targeted brand (platform-tagged, hook+body+CTA+hashtags)
   - 1 opt-in email/newsletter draft
   - 1 lead-magnet concept (if not already shipped)
   - All grounded in real prices/links from §1.
4. **Log** the batch in `tracker.md`.
5. **Learn** — record any new tactic/insight in `playbook.md`. If it changes how the engine
   operates, update this file (and the `CLAUDE.md` pointer if the structure changes).
6. **Ship** — commit, push to `claude/practical-noether-zg7p7v`, update the draft PR.
7. **Notify** the user ONLY if a decision is needed or a meaningful result lands. Otherwise stay quiet.

### Brand rotation (default)
- **Mon** PromptEmpire · **Tue** Chiku Fit · **Wed** Chiku AI Systems · **Thu** qrflow ·
  **Fri** highest-momentum brand · weekends light/recap. (Adjust as data shows what converts.)

---

## 5. Open decisions / questions for the user
- [ ] Which social accounts actually exist (handles for X, LinkedIn, IG, TikTok)?
- [ ] Is there a Mailchimp audience set up, or do we start the list from zero?
- [ ] Skool community URL?
- [ ] Confirm PromptEmpire Stripe payment-link URLs (not in codebase as raw links).
- [ ] Want auto-publish later (Buffer/native APIs), or keep draft-only?

---

## 6. Learnings log (most recent first)
- _2026-06-17_ — Engine initialized. Day-1 content batch produced for all four brands. No
  performance data yet; all tactics are hypotheses until measured. See `playbook.md`.

---

## 7. Changelog
- **2026-06-17** — Marketing engine created: source-of-truth, brand profiles, playbook, tracker,
  and Day-1 content batch. `CLAUDE.md` pointer added.
