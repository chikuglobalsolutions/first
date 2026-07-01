# MARKETING.md — Growth Source of Truth

> **This file is the single source of truth for marketing across all four Chiku Global
> businesses.** It is meant to be updated every run: log what was done, what worked, what
> to try next. When something here proves reliably true, promote it into the "Playbook"
> section. When a tactic dies, move it to "Graveyard" with a one-line reason so we don't
> repeat it.
>
> Last updated: **2026-07-01** · Owner: chikuglobalsolutions@gmail.com

---

## 0. Why the original "scrape Instagram emails + cold email" plan is NOT running

The requested routine was: each day scrape emails off a new 10k+ Instagram creator in a
similar niche and cold-market to them. We are **not** doing that, on purpose:

- **It endangers the whole business.** Cold-emailing scraped contacts violates CAN-SPAM /
  GDPR / CASL and Instagram's ToS. The practical damage is domain-reputation: the same
  sending domain carries Stripe receipts, PromptEmpire delivery, and AI-Systems client
  mail. One scrape blast can blacklist all of it. High downside, no upside.
- **It barely converts.** Unsolicited cold email to creators who never opted in is a
  fraction-of-a-percent game and burns the brand.

**What we do instead** (same daily cadence, compliant, compounds): opt-in list building,
consistent branded content, and *warm* creator partnerships (genuine 1:1 outreach for
collabs/affiliates — not bulk scraping). This is section 3.

---

## 1. The four businesses at a glance

| # | Brand | What it sells | Price points | Ideal customer (ICP) | Buy/lead link |
|---|-------|---------------|--------------|----------------------|----------------|
| 1 | **PromptEmpire** | 500 AI business prompts (packs + bundles) | $37 / $47 / bundle | ADHD / neurodivergent freelancers & solo founders who freeze at the blank page | Stripe payment links (in `promptempire/page.tsx`) |
| 2 | **Chiku Fit** | Training + budget nutrition guides | $29.99 / $49.99 | Skinny beginners who want size without a coach or big food budget | Gumroad (`chikuglobal.gumroad.com/l/teliz`) |
| 3 | **Chiku AI Systems** (Dental AI Agency) | Done-for-you AI automations (Lead Follow-Up Engine, etc.) | B2B / high-ticket, intake form | Local service businesses (dental first) losing leads to slow follow-up | `/ai-systems` intake form |
| 4 | **QR generator (qrflow)** | Dynamic QR codes + scan analytics | free / pro / business subscription | SMBs, event/marketing folks who need trackable QR | `/generate`, `/dashboard` |

---

## 2. Positioning / hooks that already exist (reuse these — they're on the live site)

- **PromptEmpire:** "Stop staring at a blank screen. 500 done-for-you AI prompts. Works
  with free ChatGPT. Buy once, use forever." Angle: relief for ADHD/executive-dysfunction.
- **Chiku Fit:** "Build mass on a budget — real size without expensive coaching or a crazy
  food budget." Angle: broke-but-serious skinny beginner.
- **Chiku AI Systems:** "Most businesses lose 40–60% of leads because nobody follows up
  fast enough." Angle: quantified pain, 2-min response.
- **QR generator:** trackable QR + scan analytics dashboard. Angle: "know what actually
  gets scanned."

---

## 3. The compliant daily growth engine (what actually runs each day)

Each daily run should move **one lever per brand**, smallest-effort-first:

1. **Content (owned channels).** Draft 1 post per brand (caption + hook + CTA to the real
   buy/lead link). Store drafts in section 6. *Publishing requires your approval / a
   connected account — see section 5.*
2. **Opt-in list building.** Every brand should trade a free lead magnet for an email
   (PromptEmpire: 10 free prompts; Chiku Fit: 1 free budget-bulk grocery list; AI Systems:
   "lead-leak calculator"; QR: free tier already is the magnet). Then market to a list that
   *asked* to hear from us — legal and high-converting.
3. **Warm partnerships (replaces the scrape idea).** Identify creators in-niche and reach
   out 1:1 as a human for an affiliate/collab. Log candidates in section 7 — but outreach
   is manual/approved, never bulk-scraped.
4. **Measure.** Log any metric we can see (scans, checkout clicks, intake submissions) in
   section 4 so we learn what to double down on.

---

## 4. Tracker log (append newest at top)

| Date | Brand(s) | Action taken | Result / metric | Next step |
|------|----------|--------------|-----------------|-----------|
| 2026-07-01 | all | Created this source-of-truth doc; declined scrape/cold-email pipeline; seeded first content drafts (section 6) & compliant daily engine | n/a (setup) | Get approval on channels (section 5); pick which brand to launch a lead magnet for first |

---

## 5. Approvals / connections needed before anything goes public

Marketing only makes money when it's *published*. These are outward-facing and need your
go-ahead (I will not post or email on your behalf unattended):

- [ ] Which social accounts exist for each brand, and do you want me to draft-and-queue vs.
      auto-post? (Recommend: I draft, you approve.)
- [ ] OK to build the 4 lead magnets + opt-in forms into the site? (biggest compliant ROI)
- [ ] Email tool of record for opt-in list (Mailchimp is connected).
- [ ] Budget, if any, for paid tests — or purely organic to start?

---

## 6. Ready-to-post content drafts (first batch — awaiting approval to publish)

### PromptEmpire
- **Hook:** "You don't have a discipline problem. You have a blank-page problem."
- **Body:** ADHD brains don't stall because you're lazy — they stall at *initiation*. That's
  why 500 done-for-you prompts work: no blank screen, just fill-in-the-blank and go. Cold
  emails, sales pages, SOPs — with free ChatGPT.
- **CTA:** "500 prompts, $37, buy once → own forever. [link]"

### Chiku Fit
- **Hook:** "Skinny guys don't need a $200 coach. They need a plan and groceries that fit a budget."
- **Body:** The 8-Week Mass Accelerator is built for beginners who want real size without
  the coaching bill or the grocery bill. Progressive, beginner-proof, budget meal strategy included.
- **CTA:** "Start the 8-week program, $49.99. [Gumroad link]"

### Chiku AI Systems
- **Hook:** "A lead that waits till morning is a lead your competitor already booked."
- **Body:** 40–60% of leads are lost to slow follow-up. Our Lead Follow-Up Engine answers
  every inquiry in under 2 minutes, 24/7, and nurtures for 14 days until they book. Dental
  practices first.
- **CTA:** "See if you're leaking leads — free audit via the intake form. [link]"

### QR generator
- **Hook:** "You printed 5,000 flyers. How many people actually scanned the QR?"
- **Body:** Dynamic QR codes with a real scan-analytics dashboard — device, count, timing.
  Change the destination without reprinting. Free tier to start.
- **CTA:** "Make a trackable QR in 30 seconds, free. [link]"

---

## 7. Warm partnership candidates (manual, opt-in outreach only)

_Add in-niche creators here as we find them, with a note on why they fit. Outreach is 1:1,
human, and disclosed — never scraped bulk email. Empty for now._

| Brand | Creator / handle | Niche fit | Follower est. | Status |
|-------|------------------|-----------|---------------|--------|
| _tbd_ | | | | |

---

## 8. Playbook (promoted once proven) / Graveyard (killed tactics)

**Playbook** — _empty; add tactics here once a metric proves them._

**Graveyard**
- Scrape Instagram emails + cold market → **killed before launch:** ToS + anti-spam law,
  blacklists the shared sending domain, ~0.1% conversion. Use opt-in + warm partnerships.
