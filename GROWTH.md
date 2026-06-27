# GROWTH.md — Marketing & Revenue Source of Truth

> Single source of truth for marketing the Chiku Global Solutions LLC brands.
> Updated by Claude on each daily run. Append to the **Daily Log** at the bottom; revise
> sections above when you learn something that works better. Companion to `CLAUDE.md`
> (which stays the engineering source of truth — do not put marketing tactics there).

Parent brand: **Chiku Global Solutions LLC** — built for neurodivergent / ADHD entrepreneurs.
Brand voice: direct, anti-fluff, "no $X/mo gatekeeper required," practical, slightly irreverent.

---

## ⚠️ What this routine will NOT do (and why)

The original ask was a daily routine that **scrapes emails off new Instagram pages and
cold-markets to those creators**. That is intentionally *not* implemented, because it would
hurt the businesses, not help them:

- **Instagram ToS** prohibits automated scraping → account bans, and the available tooling
  (Gmail/Mailchimp) is built for *owned-audience* marketing, not cold blasts.
- **CAN-SPAM / GDPR / CASL**: emailing harvested contacts without consent is unlawful in most
  jurisdictions and carries per-message fines.
- **Deliverability suicide**: unsolicited bulk mail tanks the sending domain's reputation —
  which would push your *legitimate* Stripe receipts and customer emails into spam too.
- **It doesn't convert.** Cold scraped lists underperform inbound/owned channels by an order
  of magnitude for products like these.

✅ Instead, this routine grows the brands through channels that compound and stay compliant:
SEO/content, owned email list (opt-in via Mailchimp), organic social you *post* (not scrape),
and conversion-rate improvements to the sites that already get traffic.

If you ever want outbound, the compliant version is: a real opt-in lead magnet → double
opt-in list → nurture sequence. Ask and I'll build that.

---

## The four businesses

| # | Brand | What it sells | Price | Route | Monetization |
|---|-------|---------------|-------|-------|--------------|
| 1 | **PromptEmpire** | 500 AI prompt packs (cold email, sales pages, SOPs, content) | from $37 | `/promptempire` | Stripe payment links |
| 2 | **Chiku Fit** | Training + nutrition guides for skinny-beginner / budget lifters | from $29.99 | `/chiku-fit` | Stripe / digital download |
| 3 | **AI Systems** | Done-for-you AI automation (Dental AI Agency: lead follow-up, review gen, etc.) | high-ticket / intake | `/ai-systems` | Intake form → sales call |
| 4 | **QRFlow** | QR code generator SaaS w/ analytics | Free / $9 Pro / $29 Business | `/generate`, `/dashboard` | Stripe subscription |

### Per-brand positioning & best channel

- **PromptEmpire** — buyer: solopreneurs/agencies who hate blank-page paralysis. Best channels:
  SEO ("chatgpt prompts for cold email", "sales page prompts"), Reddit (r/Entrepreneur,
  r/SaaS, r/copywriting — give value, don't spam), X/LinkedIn carousels showing 1 prompt +
  its output. Lead magnet: 10 free prompts → email list → upsell the $37 pack.
- **Chiku Fit** — buyer: skinny beginners, budget-conscious, often ADHD-friendly structure.
  Best channels: short-form video (form tips, "cheap high-protein meals"), Pinterest (meal
  plans pin extremely well), SEO ("how to bulk on a budget"). Lead magnet: free grocery list
  PDF → list → guide.
- **AI Systems** — buyer: local service businesses (dental first). High-ticket, needs trust.
  Best channels: case-study content, LinkedIn, local SEO, *targeted* (opt-in/inbound) demos.
  This one converts on credibility, not volume. Lead magnet: free "lead-response audit."
- **QRFlow** — buyer: SMBs, event organizers, restaurants. Best channels: SEO (huge intent on
  "free qr code generator"), product-led free tier → Pro upgrade, AppSumo-style listings.
  Growth lever: make the free tool genuinely great + watermark/upsell path.

---

## Weekly content engine (legit, repeatable)

Per brand, per week — Claude can draft all of this:
1. **1 SEO article** targeting a real search query (publish to the site / blog).
2. **3 organic social posts** (you post them — drafts ready in the Daily Log).
3. **1 email** to the opt-in list (via Mailchimp — owned audience only).
4. **1 conversion tweak** to the relevant landing page (copy, CTA, social proof).

Tools available this session: Mailchimp (campaigns/analytics), Canva (graphics), Gmail
(drafts only — never bulk cold send), Notion/Slack (tracking), the repo itself (site/SEO).

---

## Daily run checklist (what Claude does each day)

1. Pull latest on the marketing branch; read this file.
2. Pick **one** highest-leverage task from the Weekly engine for **one** brand (rotate brands).
3. Produce the actual asset (article draft, post copy, email draft, or code/CTA change).
4. Log it in the Daily Log with status + next step.
5. Commit to the marketing branch; open/update the draft PR.
6. Notify the owner **only if** something needs a decision or a real result landed
   (new asset shipped, metric moved, blocker). Otherwise stay silent.

Rotation: Mon=PromptEmpire, Tue=Chiku Fit, Wed=AI Systems, Thu=QRFlow, Fri=whatever's behind.

---

## Metrics to watch (fill in once analytics are connected)

| Brand | North-star metric | Source | Current | Target |
|-------|-------------------|--------|---------|--------|
| PromptEmpire | pack sales / wk | Stripe | TBD | — |
| Chiku Fit | guide sales / wk | Stripe | TBD | — |
| AI Systems | qualified intakes / wk | `IntakeSubmission` | TBD | — |
| QRFlow | free→Pro conversions / wk | Stripe | TBD | — |

---

## Daily Log

> Newest at top. Format: `### YYYY-MM-DD — Brand — what shipped` then bullets.

### 2026-06-27 — Setup — established GROWTH.md as marketing source of truth
- Created this file as the marketing/revenue source of truth (separate from `CLAUDE.md`).
- Declined the Instagram email-scraping + cold-outreach routine (ToS/legal/deliverability
  reasons above); replaced it with a compliant, compounding growth engine.
- Next step (awaiting owner go-ahead): pick the first brand task — recommended start is
  **PromptEmpire free 10-prompt lead magnet** (fastest path to an owned email list), or
  **QRFlow SEO page** (highest organic intent). Reply with which to run first.
