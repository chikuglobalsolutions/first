# MARKETING.md — Growth Source of Truth (Chiku Global Solutions LLC)

> This file is the **single source of truth** for marketing and growth across all four
> brands. The daily routine updates the log at the bottom and refines the playbooks as it
> learns what works. CLAUDE.md points here for anything growth/marketing related.
>
> **Last updated:** 2026-06-23

---

## ⚖️ Operating rules (read first)

These exist so we *make* money instead of losing it to bans, blacklists, and legal exposure.

1. **No scraping personal contact data.** We do **not** scrape emails/DMs off Instagram,
   LinkedIn, etc. to cold-message people. It violates platform ToS and anti-spam law
   (US CAN-SPAM, CA CASL, EU GDPR) and tanks domain sender reputation. Growth here is
   **permission-based**: people opt in, or we reach them on channels where outreach is allowed.
2. **Publish nothing externally without owner sign-off.** Drafts live in this repo
   (`content/`). A human approves before anything posts under the brand's name.
3. **One source of truth.** Numbers, links, and status live here — not scattered in DMs.
4. **Measure before scaling.** No paid spend on a channel until an organic version of the
   message has shown it converts.

---

## 🏢 The four businesses

| # | Brand | What it sells | Monetization | Primary channel(s) |
|---|-------|---------------|--------------|--------------------|
| 1 | **PromptEmpire** | AI prompt packs | Stripe payment links | Reddit, X/Twitter, SEO |
| 2 | **Chiku Fit** | Fitness/bulking guides | Gumroad | Reddit (fitness), short-form video, IG |
| 3 | **AI Systems / Chiku Global Solutions** | Done-for-you AI automation (agency) | Retainers ($1.5k–5k + monthly) | Warm outreach, referrals, LinkedIn |
| 4 | **QR Generator (qrflow)** | QR codes + scan analytics | Freemium → Pro/Business (Stripe) | SEO, product-led, ProductHunt |

### Stripe links (PromptEmpire — live)
| Product | Price | Link |
|---------|-------|------|
| 500 AI Business Prompts | $37 | https://buy.stripe.com/5kA5kFbpgcTY5Sg4gh |
| Freelancer Command Center | $47 | https://buy.stripe.com/cNi5kF50Kf2a6WkbLU08g01 |
| Empire Bundle | $67 | https://buy.stripe.com/7sI8wR50Kf2adoI28X |

### Known blockers (carried from OBSIDIAN-UPDATE.md)
- [ ] Chiku Fit Gumroad checkout URLs missing — add to storefront once created.
- [ ] PromptEmpire delivery page needs the Google Drive product link.
- [ ] Agency landing page deploy + first outreach sequence.

---

## ✅ Daily routine checklist

The scheduled run works this list top to bottom. It **only notifies the owner** when there's
something to act on (a blocker, a number moving, an approval needed) — a clean "all healthy"
run stays silent.

1. **Health check** — is the site building/deploying? (CI green on `main`, Netlify up,
   `/api/health` 200.) Flag regressions.
2. **Sales check** — any new Stripe/Gumroad sales since yesterday? Log them.
3. **Content** — make sure each brand has ≥3 approved drafts queued in `content/`. Top up
   the brand that's lowest.
4. **Channel engagement** — note where last batch landed (Reddit upvotes, post saves) so we
   double down on what worked.
5. **Update this file** — append to the log, refine playbooks with anything learned.
6. **Notify only if actionable.**

---

## 📣 Compliant growth playbooks (per brand)

### 1. PromptEmpire
- **Reddit (primary):** value-first posts in r/ChatGPT, r/Entrepreneur, r/freelance,
  r/SideProject. Give away a genuinely useful prompt in the post; link the pack in a comment
  or profile, not the title. One subreddit/day to avoid spam filters.
- **X/Twitter:** thread = "10 prompts that do X." Last tweet links the pack.
- **SEO:** programmatic landing pages per use-case (already have categories). Target
  "[role] ChatGPT prompts" long-tail.

### 2. Chiku Fit
- **Short-form video (TikTok/Reels/Shorts):** one tip per clip, repurpose 1 idea → 3 clips.
- **Reddit:** r/Fitness, r/naturalbodybuilding, r/Gainit — answer real questions, link the
  free lead magnet, not the paid product, in early touches.
- **Lead magnet → email:** free "starter day of bulking meals" PDF → opt-in list → sell the
  full pack to subscribers (this is the compliant version of "email marketing").

### 3. AI Systems / Chiku Global Solutions (agency — highest revenue per sale)
- **Warm > cold.** Best ROI: referrals, past contacts, and businesses you have a real
  connection to. For new prospects, use **compliant** channels: replying to public RFPs,
  LinkedIn connection + conversation (not bulk DMs), local business networking.
- **Proof content:** publish 1 case study / mini-teardown per week showing one of the SYSTEMS
  (lead follow-up, review gen, etc.) solving a real problem. This is the lead engine.
- **Targeting:** dental + the other industries already defined in `src/lib/ai-systems-data.ts`.

### 4. QR Generator (qrflow)
- **Product-led + SEO:** the free generator *is* the marketing. Rank for "free QR code
  generator with analytics." Watermark/footer drives Pro upgrades.
- **ProductHunt / directory launches** for a spike, then SEO compounds.

---

## 🎯 Content engine (how we create on our own)

For each brand we keep a backlog in `content/<brand>.md` of approved, ready-to-post drafts.
Format per item: hook, body, CTA, target channel, status (`draft` → `approved` → `posted`).
The daily run tops up whichever brand has the fewest `approved` items. Nothing posts
externally without the owner moving it to `approved` and a human publishing it.

See `content/` for the current backlog.

---

## 📒 Run log

Newest first. Each entry: date · what was checked · what changed · what needs the owner.

### 2026-06-23 — Tracker created
- Stood up this file as the marketing source of truth + the daily checklist.
- **Declined** the Instagram email-scraping / cold-outreach request (ToS + anti-spam/legal
  risk + sender-reputation damage). Replaced it with permission-based playbooks above.
- Seeded initial content backlog in `content/` for all four brands.
- **Needs owner:** (1) confirm you want the permission-based approach so the daily routine
  can keep filling content; (2) clear the three carried-over blockers (Gumroad URLs, Drive
  delivery link, agency landing deploy) — these are what's actually capping revenue today.
