# MARKETING.md — Growth Engine & Daily Tracker

> **Source of truth** for marketing the four Chiku Global Solutions brands.
> Claude updates this file as it learns what works. CLAUDE.md stays focused on the *codebase*;
> this file owns *growth*. When a tactic proves out here, add a one-line pointer in CLAUDE.md.

_Last updated: 2026-06-12 — v1 (initial engine)_

---

## 0. Operating principles (read first)

- **No scraping, no cold lists.** We do not scrape Instagram/anywhere for emails. All email
  marketing goes to people who opted in (CAN-SPAM / CASL / GDPR compliant). This protects our
  sending-domain reputation, which the app's login + Stripe emails also depend on.
- **Permission-based growth only:** content → free lead magnet → opt-in → nurture → offer.
- **One brand, one promise, one CTA per asset.** Don't blur the four brands together.
- **Measure everything.** If it's not in the KPI table below, it didn't happen.

---

## 1. The four brands at a glance

| Brand | Product | Price | Buyer | Primary channel |
|---|---|---|---|---|
| **PromptEmpire** | AI prompt packs | one-time (Stripe links) | solopreneurs, marketers, creators | IG Reels + X/LinkedIn |
| **Chiku-Fit** | Fitness programs (e.g. 8-Week Mass Accelerator) + nutrition | one-time guides | lifters, gym-goers 18–40 | IG Reels + TikTok |
| **AI Systems (Dental AI Agency)** | Lead Follow-Up Engine, Review Generation, etc. | high-ticket retainer | dental/local-service practice owners | LinkedIn + warm outreach + email |
| **QRFlow** | QR generator w/ analytics | $9 Pro / $29 Business / mo | small biz, event/restaurant owners | SEO + product-led + IG |

---

## 2. The daily engine (the "daily check" you asked for)

Run this each day. Pick **one brand per day** on a rotation so each gets deep focus weekly
(Mon=PromptEmpire, Tue=Chiku-Fit, Wed=AI Systems, Thu=QRFlow, Fri=whichever is hottest,
weekend=batch + schedule). For the brand of the day:

1. **Find 3–5 warm prospects/partners** (NOT scraped). Legit sources:
   - Creators in-niche with 10k+ followers who run **paid shoutouts / collabs** (public rate cards).
   - People who **already engaged** us (commented, DM'd, joined the list, used the free tier).
   - **Affiliate/partner** candidates — complementary, non-competing brands.
   Log them in §5 with handle, follower count, niche fit, and the *reason they're a fit*.
2. **Create 1 piece of content** for that brand (see §3) — draft caption + hook + CTA + visual brief.
3. **Schedule it** (Mailchimp for email, native scheduler / Canva for social).
4. **One outreach touch** — a *value-first* DM or email to a warm prospect/partner (template in §4).
5. **Update the KPI table (§6)** with yesterday's numbers.

> Each step here is a real action Claude can take this session via the connected tools
> (Canva = visuals, Mailchimp = email campaigns, Gmail/Notion = drafts & tracking).

---

## 3. Content engine (so Claude can create on its own)

Repeatable formats per brand — Claude fills the blanks and produces caption + visual brief:

**PromptEmpire**
- "Steal this prompt" Reel: show a before/after of a generic vs. PromptEmpire prompt output.
- Carousel: "5 prompts that replace [tool/task]." CTA → prompt pack link.
- Hook bank: "You're using ChatGPT wrong if…", "This 1 prompt = a $200 freelancer".

**Chiku-Fit**
- Transformation / mechanism Reel: one exercise cue or nutrition myth, 15s.
- Carousel: "8-Week Mass Accelerator — week 1 sample day." CTA → program page.
- Hook bank: "Bulking without getting fat — the only 3 rules", "Why your arms won't grow".

**AI Systems (Dental)**
- LinkedIn post: a real number ("practices lose 40–60% of leads to slow follow-up") + how the
  Lead Follow-Up Engine fixes it. CTA → intake form.
- Case-style carousel: problem → solution → outcome (use real metrics from ai-systems-data.ts).

**QRFlow**
- Use-case Reel: "Restaurant menu QR that tracks every scan." CTA → /generate.
- SEO blog (highest-ROI for this brand): "QR code with analytics", "dynamic QR code free", etc.

**Posting cadence target:** 1 short-form/day per active brand + 1 email/week per brand list.

---

## 4. Outreach templates (warm, value-first — never spam)

**Creator collab (paid shoutout / barter):**
> Hi [name] — love your [specific recent post]. I run [brand], [one-line value]. Your audience of
> [niche] is exactly who we serve. Do you do paid collabs or product swaps? Happy to send a free
> [pack/program] so you can try it first.

**Affiliate / partner:**
> Hey [name] — we're not competitors but we share an audience ([niche]). I'd love to set you up as
> an affiliate: you get [X]% on every sale via your link. Want me to send details?

**Dental (AI Systems) — warm, researched:**
> Hi Dr. [name] — noticed [specific: e.g. "your reviews jumped recently / your site has a contact
> form but no instant follow-up"]. We help practices respond to every lead in under 2 min, 24/7.
> Worth a 15-min look? No pitch, just show you the numbers.

---

## 5. Prospect / partner log (the "tracker")

> Append daily. These are **collab/affiliate/warm** contacts, found via public rate cards or prior
> engagement — NOT scraped lists. "Fit" = why their audience matches the brand.

| Date | Brand | Handle / Name | Followers | Niche fit | Type (collab/affiliate/warm) | Status | Next action |
|---|---|---|---|---|---|---|---|
| _e.g._ 2026-06-12 | PromptEmpire | @example | 24k | AI productivity creator | collab | not contacted | send intro DM |

---

## 6. KPI tracker (update daily)

| Date | Brand | Followers | Email subs | Site visits | Sales | Revenue | Notes / what worked |
|---|---|---|---|---|---|---|---|
| 2026-06-12 | PromptEmpire | — | — | — | — | — | baseline TBD — fill in current numbers |
| 2026-06-12 | Chiku-Fit | — | — | — | — | — | baseline TBD |
| 2026-06-12 | AI Systems | — | — | — | — | — | baseline TBD |
| 2026-06-12 | QRFlow | — | — | — | — | — | baseline TBD |

---

## 7. What works / what doesn't (Claude updates this)

- _Nothing logged yet — this section grows as campaigns run. Each entry: tactic → metric → verdict._

---

## 8. Inputs still needed from owner

- [ ] Which IG/TikTok/LinkedIn/X handles exist per brand? (so I can tailor + schedule)
- [ ] Is the Mailchimp audience set up, and roughly how many opted-in subscribers per brand?
- [ ] Monthly budget for paid creator shoutouts/ads (even $0 — changes the strategy)
- [ ] PromptEmpire & Chiku-Fit live Stripe payment links + exact prices
- [ ] OK to set affiliate program live? (changes outreach templates)
