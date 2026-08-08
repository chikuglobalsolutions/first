# GROWTH-OPS.md — Marketing & Growth Source of Truth

> Single source of truth for daily growth across Chiku Global Solutions' brands.
> This file is updated by the scheduled "daily business check" routine. It is **review-first**:
> the routine drafts and tracks; a human approves anything that goes out to the public or to a customer.
>
> **This file — not CLAUDE.md — is the home for marketing/growth notes.** CLAUDE.md stays a
> technical/architecture doc. Keeping them separate avoids polluting engineering context with ops.

_Last updated: 2026-08-08 (automated routine)_

---

## ⚠️ Scope & guardrails (read first)

The scheduled prompt asked for a daily **Instagram email scrape** of creators (10k+ followers, similar
niche) followed by **automated content creation and marketing** to them. That specific workflow is **not
something this routine will run**, for concrete reasons — not squeamishness:

1. **Instagram ToS** prohibits automated scraping of the platform. Doing it risks the account(s) and any
   connected tooling.
2. **Anti-spam law.** Harvesting people's emails and sending them marketing they didn't ask for is
   unsolicited commercial email — regulated by CAN-SPAM (US), CASL (Canada), and GDPR/PECR (EU/UK).
   Penalties are per-message and real. Consent + easy opt-out are legally required.
3. **Deliverability.** Cold-blasting a scraped list torches your sending domain's reputation, which then
   hurts the *legitimate* email you send (receipts, magic-links via Resend, customer replies).
4. **It doesn't actually convert.** Random 10k-follower creators are not buyers of prompt packs, fitness
   guides, or a dental AI service. Spending effort here is a poor use of the budget.

**The compliant substitutes below do the same job — reach the right people — without the legal/ToS/domain
risk.** Anything customer-facing (an email send, a public post) is drafted here and waits for your
approval before it goes out.

---

## The four businesses

| # | Brand | What it sells | Channel of record | Primary growth lever |
|---|-------|---------------|-------------------|----------------------|
| 1 | **PromptEmpire** | AI prompt packs ($37–$67) | Stripe payment links | Organic content + owned email list |
| 2 | **Chiku Fit** | Fitness guides/meal plans | Gumroad | Short-form video (Reels/Shorts/TikTok) |
| 3 | **Chiku AI Systems** | "Dental AI Agency" service ($1.5k–$5k) | Intake form on site | Targeted, opt-in-respecting B2B outreach |
| 4 | **QR Generator (qrflow)** | QR codes + scan analytics | In-app / self-serve | SEO + product-led growth |

---

## Compliant daily playbook (what the routine *can* do for you)

For each brand, the routine can **research, draft, and queue** — you approve, then it (or you) ships.

### 1. PromptEmpire
- Draft 1 organic post/day for a real audience (r/ChatGPT, r/Entrepreneur, X, LinkedIn) — value-first, soft CTA.
- Grow an **owned, opt-in** email list (lead magnet → double opt-in) instead of a scraped one. This is the asset that legally *can* be marketed to.
- SEO: draft one "best AI prompts for X" article/week targeting real search terms.

### 2. Chiku Fit
- Script 1 short-form video hook/day (the format that actually distributes fitness content).
- **Blocker to clear:** Gumroad checkout URLs are missing (see OBSIDIAN-UPDATE.md). Products can't sell without them.
- Repurpose each guide into 3–5 free value posts that funnel to the paid product.

### 3. Chiku AI Systems (the one with a real "outreach" motion)
- Legitimate B2B outreach = contacting **businesses** (dental practices) via the contact info *they publish
  on their own websites* for the purpose of being contacted — personalized, low-volume, with a clear
  opt-out. That is materially different from scraping individuals' emails off Instagram.
- Routine can build a researched shortlist (practice name, city, public contact page) and **draft** a
  personalized first-touch email per prospect. **Nothing sends without your review.**
- Route inbound to the existing intake form.

### 4. QR Generator
- Product-led: SEO pages for "free QR code generator for [use case]", each linking to `/generate`.
- Draft one comparison/how-to article/week.

---

## Daily tracker

| Date | Brand focus | Action drafted/queued | Status | Needs human |
|------|-------------|-----------------------|--------|-------------|
| 2026-08-08 | Setup | Established this source-of-truth file; declined IG-scrape workflow; laid out compliant playbook | ✅ Done | **Decision on direction (see below)** |

---

## 🔴 Open decisions for the owner

1. **Green-light the compliant plan?** Confirm you want the routine to draft organic content + a review-first
   B2B outreach queue (vs. the IG-scrape approach, which won't run).
2. **Which brand to prioritize first?** Recommend **Chiku AI Systems** — highest revenue per sale and the only
   one with a genuine outreach motion — then **PromptEmpire** (fastest to ship, links already live).
3. **Approval channel.** How do you want to approve drafts before they send/post? (e.g. routine leaves them in
   this file / a Google Doc / email drafts for you to review each morning.)
4. **Connect the tools.** For sending approved outreach and tracking a real list, connect Mailchimp (currently
   needs authorization) rather than any scraping tool.

## Cleared blockers to unblock revenue (from OBSIDIAN-UPDATE.md)
- [ ] Add Gumroad checkout URLs → Chiku Fit products (built but can't be bought without them).
- [ ] Add product delivery / Google Drive link → PromptEmpire.
- [ ] Deploy PromptEmpire site to Netlify + env vars.

---

## Changelog
- **2026-08-08** — File created by the daily routine. Documented guardrails, mapped the four brands, defined a
  compliant playbook and tracker, and surfaced open decisions for the owner.
