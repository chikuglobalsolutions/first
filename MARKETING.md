# MARKETING.md — Growth Source of Truth (Chiku Global Solutions LLC)

> This is the single source of truth for daily marketing across all four brands.
> It is updated as we learn what works. When a tactic proves out, promote it from
> "Testing" to "Playbook." When it flops, move it to "Killed" with a one-line reason.
> Keep CLAUDE.md for *how the code works*; keep this file for *how we get customers*.

Last updated: 2026-07-02 (initial version)

---

## ⚠️ Ground rules (read once, then live by them)

The original brief was: "scrape a new Instagram page's email each day, filter to 10k+
follower creators in similar niches, then cold-market them." We are **not** running that,
and here is the business reason — this is about protecting your money, not red tape:

- **Instagram bans the accounts doing it.** Automated scraping violates IG's ToS. The
  accounts that get flagged are the *same brand accounts* we're trying to grow. Net loss.
- **Cold-emailing scraped lists is illegal in enough places to matter.** CAN-SPAM (US)
  requires you not to harvest addresses; GDPR (any EU creator) makes harvest-and-email a
  fineable offense. The fine lands on the sender — you.
- **It wrecks deliverability.** Blasting a cold, scraped list tanks the sending domain's
  reputation, which then sends your *real* customer emails to spam too. One bad campaign
  poisons the whole channel.

**What we do instead** (same goal — reach creators/customers in these niches — legit
mechanics that compound instead of getting banned):
1. **Organic content** on each brand's own channels (owned audience, no ban risk).
2. **Consent-based lead capture** — creators/customers opt in via lead magnets, then we
   email them through Mailchimp with a real unsubscribe. This is the list that's legal to
   market to and actually converts.
3. **Genuine creator outreach** — manual, personalized DMs/replies to a *small* number of
   aligned creators for collabs/affiliates. Relationships, not spray-and-pray.

---

## 🎯 The four brands

| Brand | What it sells | Channel | Primary funnel |
|-------|---------------|---------|----------------|
| **PromptEmpire** | AI prompt packs ($37–$67) | Stripe payment links | Content → site → Stripe |
| **Chiku Fit** | Fitness/bulking guides | Gumroad | Content → Gumroad checkout |
| **AI Systems** | Dental AI Agency (service) | Intake form on site | Content/outreach → intake form |
| **QRFlow** | QR generator (SaaS) | `/generate`, plans | Free tool → Pro/Business plan |

### Live assets (from OBSIDIAN-UPDATE.md — verify before each campaign)
- PromptEmpire Stripe: 500 Prompts $37, Freelancer Command Center $47, Empire Bundle $67
- Chiku Fit Gumroad: 3 products **built but missing checkout URLs** → ⛔ blocker, see Backlog

---

## 📅 Daily routine (what the cron actually does)

Each run, per brand, do the **legit** version of "find aligned creators + create content":

1. **Audience research (read-only, no scraping):** Use web search to identify 3–5 creators
   in each niche (AI-productivity, fitness/bulking, dental-practice-owners, small-biz/SaaS)
   who are a genuine collab/affiliate fit. Log them in the Creator CRM below as *prospects*
   — name + public handle + why they fit. **No email harvesting.** Outreach is manual and
   personalized, initiated by a human, when there's a real reason to connect.
2. **Create one piece of content per brand** (draft ready for review — see Content Engine).
3. **Update the tracker** (Daily Log + KPIs) and this file if we learned something.
4. **Surface blockers** via notification (missing Gumroad URLs, a campaign needing approval).

Guardrail: content drafts and outreach lists are **staged for your approval**, not sent
automatically. Nothing goes out in your name without a human hitting go.

---

## 🛠️ Content Engine (how content gets made, per brand)

One repeatable format per brand so it's a machine, not a scramble:

- **PromptEmpire** → "Prompt of the day" carousel: a screenshot of one killer prompt +
  the before/after result. CTA: link in bio → 500-pack. Post to X/LinkedIn/IG.
- **Chiku Fit** → "Broke-bulk tip" short: one cheap high-protein meal or one lift cue.
  CTA: free 3-day sample → Gumroad. Reels/Shorts/TikTok.
- **AI Systems** → "Dental practice growth" LinkedIn post: one problem AI solves for a
  dental office (missed calls, no-shows). CTA: book intake call. LinkedIn primary.
- **QRFlow** → "QR use-case" tip: one clever way businesses use trackable QR (menus,
  reviews). CTA: free generator → Pro plan. X/LinkedIn.

Tooling available in this workspace: **Canva** (design the carousels/reels covers),
**Mailchimp** (opt-in list campaigns), **Gmail** (drafts only, for manual replies),
**Notion** (if you want the CRM/tracker mirrored there). All drafts land for review first.

---

## 👥 Creator CRM (prospects for collab/affiliate — NOT a cold list)

Manually researched, publicly-listed creators who are a genuine fit. Outreach only when
personalized and human-initiated.

| Date | Brand | Creator (public handle) | Niche fit | Followers ~ | Status |
|------|-------|-------------------------|-----------|-------------|--------|
| _ | _ | _ | _ | _ | prospect / contacted / collab / declined |

---

## 📈 KPIs (the only numbers that mean money)

Update weekly. Vanity metrics (followers) are secondary to these.

| Brand | Metric that matters | This week | Last week |
|-------|---------------------|-----------|-----------|
| PromptEmpire | Stripe checkouts | _ | _ |
| Chiku Fit | Gumroad sales | _ | _ |
| AI Systems | Intake form submissions | _ | _ |
| QRFlow | Free→Pro conversions | _ | _ |

---

## 📝 Daily Log

### 2026-07-02
- Set up this source-of-truth tracker.
- Declined the IG scrape/cold-email automation (ban + legal + deliverability risk) and
  replaced it with an organic-content + consent-lead-gen + manual-outreach plan.
- **Open decision for owner:** confirm this direction and pick the first brand to focus
  the daily content engine on (recommend PromptEmpire — assets are live and closest to
  cash). Also need Gumroad checkout URLs to unblock Chiku Fit.

---

## 🧱 Backlog / Blockers

- ⛔ **Chiku Fit**: 3 products built, **no Gumroad checkout URLs** → cannot sell. Need URLs.
- ⬜ Decide primary social channel per brand (avoid spreading across all 6 platforms).
- ⬜ Stand up a Mailchimp opt-in list + a lead magnet per brand (legal list = real revenue).
- ⬜ Confirm which social accounts exist for each brand and who posts.

---

## ✅ Playbook (proven tactics — promote here once they convert)
_(empty — nothing proven yet)_

## 💀 Killed (tried, didn't work — with reason)
- IG email scraping + cold outreach — never run: ToS ban risk, CAN-SPAM/GDPR exposure,
  destroys sending-domain deliverability. Replaced by organic + opt-in + manual outreach.
