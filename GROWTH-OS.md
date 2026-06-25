# GROWTH-OS.md — Daily Marketing Source of Truth

> **This file is the single source of truth for the daily growth routine across all four
> Chiku Global businesses.** It is updated every run with new info, results, and better
> tactics. `CLAUDE.md` covers the *codebase*; this file covers *making money from it*.
> Status snapshots also live in `OBSIDIAN-UPDATE.md` (kept for history).

_Last updated: 2026-06-25 (Run #1 — routine bootstrapped)_

---

## 0. The four businesses

| # | Business | What it sells | Niche | Price points | Sell via |
|---|----------|---------------|-------|--------------|----------|
| 1 | **PromptEmpire** | AI prompt packs for business/freelancers | AI productivity, solopreneurs, ChatGPT | $37 / $47 / $67 | Stripe payment links |
| 2 | **Chiku Fit** | Bulking/training + budget meal guides | Fitness, bodybuilding, budget nutrition | $29.99 / $49.99 / $89.99 | Gumroad (URLs pending) |
| 3 | **AI Systems** (Chiku Global Solutions) | AI automation agency (lead follow-up, reviews, booking, reactivation) | Local-business owners, esp. dental/medical | $1,497+$297/mo → $4,997+$997/mo | Direct sales / intake form |
| 4 | **QR Generator** (qrflow) | QR codes with scan analytics | Small biz, restaurants, events, marketers | Free → Pro/Business plans | Stripe subscription |

Adjacent IG niches to target for each (for partnerships/affiliates — see §2):
- **PromptEmpire:** AI-tool review pages, productivity/"build in public" creators, freelance-coach accounts, ChatGPT tip pages.
- **Chiku Fit:** natural-bodybuilding/bulking creators, budget-nutrition pages, "skinny-to-strong" transformation accounts, college-gym pages.
- **AI Systems:** dental-practice-growth coaches, practice-management consultants, dental office accounts, healthcare-marketing pages.
- **QR Generator:** restaurant/café owners, small-business-marketing pages, event planners, menu-design accounts.

---

## 1. ⚠️ Outreach policy (read before contacting anyone)

The original ask was "scrape an Instagram page's email each day and market to them." Here's the
honest version that actually works and won't get domains blacklisted or accounts banned:

**What we DON'T do** (high risk / blocked / counterproductive):
- ❌ Automated scraping of Instagram (violates IG ToS, gets IP/account blocked, and is not
  technically possible from this environment — no IG API access or login).
- ❌ Bulk/unsolicited cold email to harvested personal addresses (CAN-SPAM / GDPR / CASL exposure;
  tanks sender reputation; near-zero conversion).
- ❌ Inventing creator names, follower counts, or emails. If we don't have a verified contact,
  we say so — we never fabricate a target.

**What we DO** (compliant, and what real influencer/affiliate marketing looks like):
- ✅ Target creators **≥10k followers** in the adjacent niches above who **publicly publish a
  business/contact email** (the "Email" button on IG Business profiles exists precisely so brands
  can reach them). Using that published business contact for a relevant, personalized pitch is
  normal B2B outreach.
- ✅ **One creator at a time, personalized** — reference their actual content, propose a specific
  collab/affiliate deal. No templated blasts.
- ✅ Outreach is drafted for human review (Gmail drafts), **not auto-sent**, until the user
  approves the cadence and the from-address/domain warm-up is set up.
- ✅ Prefer affiliate/collab partnerships (creator promotes → we pay per sale) over pure cold ads.

**How a target gets sourced (since auto-scrape isn't available):**
1. User supplies a handle, OR
2. We use an approved influencer-discovery source / the IG Graph API on the user's *own* connected
   Business account, OR
3. We work from creators the user already follows/knows.
We then verify ≥10k followers and a published business email **before** drafting anything.

> **DECISION NEEDED FROM USER** (see Run Log): pick the sourcing method (1/2/3) and confirm the
> from-address for outreach. Until then, the routine ships content + warm-lead drafts, not sends.

---

## 2. The daily routine (what each run does)

1. **Pull state** from this file + `OBSIDIAN-UPDATE.md`.
2. **Content** — ship at least one ready-to-post piece for one business (rotate daily, §4 calendar).
   Save to `marketing/content/<business>.md`.
3. **Partnership pipeline** — IF a verified target exists (per §1), draft a personalized outreach
   email as a Gmail *draft* and log it in §5. IF NOT, log "no verified target — awaiting sourcing."
4. **Update tracker** (§5) + **Learnings** (§6) + bump the "Last updated" date.
5. **Notify** the user only if there's something to act on (a draft to approve, a blocker, a result).

---

## 3. Channels & tools available

- **Gmail** (drafts) · **Mailchimp** (campaigns/analytics) · **Slack** · **Notion** · **Canva**
  (graphics) · **Netlify/Vercel** (deploy). All connected via MCP this session.
- Organic posting (Reddit, IG, TikTok) is done by the user from the content we ship — we can't
  post to social accounts directly without connected APIs.

---

## 4. Content calendar (rotation)

| Day | Business | Format |
|-----|----------|--------|
| Mon | PromptEmpire | IG carousel + caption |
| Tue | Chiku Fit | Reel hook + caption |
| Wed | AI Systems | LinkedIn/IG value post |
| Thu | QR Generator | Use-case tip post |
| Fri | PromptEmpire | Reddit value thread |
| Sat | Chiku Fit | Transformation/CTA post |
| Sun | (rest / review week's metrics) | — |

Today (2026-06-25, Thu) → seeded content for **all four** to bootstrap. See `marketing/content/`.

---

## 5. Tracker

### Outreach log
| Date | Business | Target (handle) | Followers | Email verified? | Action | Status |
|------|----------|-----------------|-----------|-----------------|--------|--------|
| 2026-06-25 | — | _none — awaiting sourcing method (§1)_ | — | — | none | ⏸ blocked |

### Content shipped
| Date | Business | Piece | File | Posted? |
|------|----------|-------|------|---------|
| 2026-06-25 | PromptEmpire | "5 prompts that replace a $2k VA" carousel | marketing/content/promptempire.md | ☐ |
| 2026-06-25 | Chiku Fit | "Bulk on $7/day" reel hook | marketing/content/chiku-fit.md | ☐ |
| 2026-06-25 | AI Systems | "Your front desk misses 38% of calls" post | marketing/content/ai-systems.md | ☐ |
| 2026-06-25 | QR Generator | "QR menu that tells you what sells" tip | marketing/content/qr-generator.md | ☐ |

### Revenue / signals (fill as data comes in)
| Date | Business | Metric | Value |
|------|----------|--------|-------|
| — | — | — | — |

---

## 6. Learnings & changelog (newest first)

- **2026-06-25 — Run #1:** Bootstrapped GROWTH-OS as source of truth. Reframed "IG email scrape"
  into a compliant, technically-feasible influencer/affiliate workflow (auto-scrape is blocked +
  high-risk). Seeded one content piece per business. Surfaced the one decision blocking outreach
  (sourcing method + from-address). Key insight: outreach can't start until a *verified* target
  exists — content shipping is the unblocked engine, so it leads.

---

## 7. Open blockers (carried until resolved)

- [ ] Choose target-sourcing method (§1) + confirm outreach from-address → unblocks daily outreach.
- [ ] Gumroad checkout URLs for Chiku Fit products (from OBSIDIAN-UPDATE.md).
- [ ] PromptEmpire product-delivery Google Drive link.
- [ ] Connect IG/TikTok APIs if direct auto-posting is wanted (else user posts our content manually).
