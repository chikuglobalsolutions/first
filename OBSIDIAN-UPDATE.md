# Chiku Global Solutions — Business Status & Source of Truth

*Last updated: 2026-06-19 by the daily routine. This file is the single source of truth — read it first, update it, don't create new parallel trackers.*

## ⛔ The one thing blocking all revenue right now

**The storefront is not deployed to a working public URL.** As of 2026-06-19:
- `chikuglobalsolutions.com` → connection refused (does not resolve).
- `promptempire-chiku.netlify.app` and its routes → **HTTP 403** (not serving the Next.js app).

Until the `first` repo is deployed to a live URL, **nothing converts** — every product page, the gated `/delivery` download flow, the blog, lead capture, and all Stripe links lead to a dead site. No amount of marketing or content can make money against a site that won't load. **This is the #1 priority and only the owner can do it.**

## 🧱 Why the daily routine keeps stalling (read before generating more content)

This routine has run many times and produced **four near-duplicate marketing PRs** — #4, #8, #9, #10 — each creating a `MARKETING.md`, declining the Instagram email-scrape, and asking the *same* unanswered questions. None are merged. Plus substantive PRs #6 (revenue/security), #7 (docs), #11 (tests) sit open as drafts.

**The bottleneck is not content. It is owner decisions + deploy.** Generating a 5th content batch adds noise, not money. Future runs: do NOT open another marketing doc PR. Update *this* file and notify the owner instead.

## ✅ What only the owner can do (in priority order)

1. **Deploy the `first` repo to Netlify** and confirm a live URL (env vars: `NEXTAUTH_SECRET`, Stripe keys, `DATABASE_URL` for Postgres, `EMAIL_SERVER_*`). Run `npm run db:push` once against prod.
2. **Triage the PR backlog** — merge or close. My recommendation:
   - Review/merge **#6** (security hardening + `/delivery` revenue gate) and **#11** (test suite) — real value.
   - **Close #4, #8, #9, #10** — they are duplicates of each other; their useful content is summarized here.
   - Merge **#7** (CLAUDE.md docs) or close.
3. **Add the 2 missing Gumroad checkout URLs** (Chiku Fit "Broke Bulk Meal Plan Pack" + "Complete Bulking System") so those offers stop showing "coming soon."
4. **Update PromptEmpire Stripe payment-link redirects** to point at the live `/delivery?session_id={CHECKOUT_SESSION_ID}` once the domain resolves.
5. **Answer the marketing inputs** below so the routine can do real, compliant promotion.

## 💰 The four businesses (offers as last verified — re-check Stripe/Gumroad dashboards)

| Brand | Offers / Price | Notes |
|-------|----------------|-------|
| **PromptEmpire** (AI prompt packs) | $7 Quick-Win tripwire · $37 · $47 · $67 bundle | Stripe payment links live; redirects point at a dead domain. |
| **Chiku Fit** (fitness) | 8-Week Mass Accelerator $49.99 (Gumroad, live) · 2 more built but **missing Gumroad URLs** | |
| **Chiku AI Systems** (Dental AI agency) | Starter $1,497+$297/mo · Growth $2,497+$497/mo · Premium $4,997+$997/mo | Intake form exists; needs leads, not content. |
| **qrflow** (QR generator) | $9/mo · $29/mo (Pro) | The app's origin; plan gating is in code. |

## 📣 Marketing approach (and what was declined)

**Declined every run, on purpose:** scraping emails from Instagram pages to cold-market them. It violates Instagram/Meta ToS, harvests personal data without consent, is unsolicited bulk email under CAN-SPAM/GDPR, and would get the company's sending domain blacklisted — which would also break the app's own Stripe receipts and NextAuth magic-link logins. There is also no Instagram access in this environment. This is not a tooling gap to work around; it's the wrong play.

**The legitimate engine instead** (runs once the site is live + inputs provided):
- Organic, draft-only content per brand (owner posts it — no auto-publish; no social accounts are connected).
- Opt-in email only, to existing Mailchimp audiences (drafts, not sends, without approval).
- 1:1 partnership/affiliate outreach to creators who *publicly list* a collab/business email.

## ❓ Inputs needed from owner (blocking real marketing)
- Real social handles per brand (X / LinkedIn / IG / TikTok)?
- Is there a Mailchimp audience, or start from zero?
- OK to draft (not send) Mailchimp campaigns to opted-in lists?
- Keep content draft-only, or wire up an approved auto-publish path later?

## 📅 Changelog
- **2026-06-19** — Confirmed storefront returns 403 / domain refused; consolidated 4 duplicate marketing PRs into this file; reframed the real blocker as deploy + owner decisions, not content.
- **May 2026** — Initial status (PromptEmpire live PR, Stripe links, Chiku Fit Gumroad).
