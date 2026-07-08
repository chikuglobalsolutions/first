# SITE-PLAN.md — Consolidating four brands into one cohesive site

> Companion to `MARKETING.md`. This is the engineering plan to turn the current set of ~24
> loosely-linked pages (each brand an island, lots of copy-paste) into **one cohesive
> multi-brand website** with shared navigation, a real design system, and a single source of
> truth per product catalog — without losing each brand's identity, and without looking
> "AI-gimmicky." Based on a full page-by-page audit (2026-07-08).

---

## The problem, in one paragraph

The root layout ships **no global chrome** — every page rolls its own nav and footer. Three
half-adopted brand nav/footer components exist but the *landing pages* hand-inline their own
instead. The QR generator and the legacy auth surface (`/login`, `/dashboard`, `/delivery`) are
**light-theme islands** using the old "QRFlow" name, visually severed from the dark Chiku system.
Product data is **duplicated and drifting**: the AI-Systems landing hardcodes its own copy of the
6 systems + 12 industries while `src/lib/ai-systems-data.ts` holds the canonical set; the 10
PromptEmpire categories exist as two unsynced copies; payment links are copy-pasted across 6+
files. The founder story is retold on **four separate About pages**, and FAQ/pain/stats/pricing
markup is re-inlined per brand because there are no shared UI primitives.

## Duplication map (what to kill)

| Duplication | Where | Fix |
|-------------|-------|-----|
| Founder story ×4 | `about`, `promptempire/about`, `chiku-fit/about`, `ai-systems/about` | One company `/about` with 3 brand-story sections; thin per-brand stubs or 301s |
| FAQ inline **and** dedicated page | `promptempire/page.tsx` + `/promptempire/faq`; same for chiku-fit | Keep dedicated `/faq`, source from data, drop inline arrays |
| 10 PE categories ×2 (unsynced) | `promptempire/page.tsx`, `promptempire/categories/page.tsx` | New `src/lib/promptempire-data.ts` |
| 6 systems + 12 industries ×2 (drifting) | `ai-systems/page.tsx` inline vs `ai-systems-data.ts` | Landing imports canonical data; cards link to detail pages |
| Payment links ×6+ | PE pages + navs; chiku-fit pages | ✅ `src/lib/commerce.ts` (this PR) |
| 3 hand-rolled pricing tables | PE, chiku-fit, ai-systems | Shared `<PricingCard>` primitive |
| Nav/footer inline vs component | 3 landing pages + 3 root pages | One `SiteHeader`/`SiteFooter` via route-group layout |
| Dead components | `components/{Hero,Features,Pricing}.tsx` (imported nowhere) | ✅ Deleted (this PR) |

## Target information architecture

```
Chiku Global Solutions  — global header: Products ▾ · About · Contact · [context CTA]
├─ /                 Corporate home — portfolio of 4 offerings
├─ /about            ONE company story (+ #promptempire #chiku-fit #ai-systems sections)
├─ /contact          Unified contact
├─ PromptEmpire  /promptempire   → preview · categories · faq              (accent: violet)
├─ Chiku Fit     /chiku-fit      → program · nutrition · faq               (accent: emerald)
├─ AI Systems    /ai-systems     → systems[·slug] · industries[·slug] · process  (accent: sky)
└─ QR Generator  /generate       free tool that funnels into the brands    (accent: brand)
   └─ auth: /login · /dashboard   reskinned to dark theme, still gated
```

One global nav + a per-brand sub-nav (the tab bar stays, so storefronts keep their identity).

## Phased execution

**Phase 1 — Foundation (this PR, safe + build-verified):**
- ✅ `src/lib/commerce.ts` — single source of truth for all Stripe/Gumroad links.
- ✅ Delete orphaned `Hero.tsx`, `Features.tsx`, `Pricing.tsx`.
- ✅ SEO: full sitemap (24 URLs) + robots (already shipped in this branch).
- ✅ This plan + `MARKETING.md` backlog rows.

**Phase 2 — Shared chrome (needs visual QA before it hits the live storefront):**
- New `src/components/ui/` primitives: `Section`, `Eyebrow`, `Card`, `StatBar`, `PricingCard`,
  `FAQAccordion`, `PainGrid`, `CTASection`, `Hero` — each takes an `accent` prop.
- `SiteHeader` (Products ▾ dropdown incl. QR Generator) + `SiteFooter`, applied via
  `src/app/(marketing)/layout.tsx` route group wrapping `/`, `/about`, `/contact`, and the three
  brands. Retire the 3 half-used `*Nav` components and all inline navs/footers.

**Phase 3 — Data unification & page merges:**
- `promptempire-data.ts` + `chiku-fit-data.ts` (mirror `ai-systems-data.ts`).
- Fix `ai-systems/page.tsx` to import canonical `SYSTEMS`/`INDUSTRIES`; link landing cards to
  `/ai-systems/systems/[slug]` + `/industries/[slug]`.
- Merge the four About pages into one; drop inline FAQ arrays.

**Phase 4 — De-gimmick + bring islands home:**
- Replace emoji-as-icons with a real inline-SVG icon set (start with the B2B AI Systems brand and
  the founder portrait). Reserve the gradient-word headline for the corporate home only; vary hero
  treatments per brand.
- Reskin `/login`, `/dashboard`, `/generate`, `/delivery`, `not-found.tsx`, `Navbar.tsx` onto the
  dark theme; retire the "QRFlow" name / `brand-*`-only palette; add QR Generator to global nav.

## Why Phase 2+ is staged, not shipped blind

Phases 2–4 move/rewrite ~15 live storefront pages whose correctness is **visual**, and this
environment can compile (`npm run build`) but not see the rendered result. Shipping a nav/About
rewrite unreviewed risks pushing broken-looking pages to a live money-making site. So Phase 1 lands
the safe, compile-verified foundation now; Phases 2–4 execute next with the owner able to review a
preview (Netlify deploy preview on the PR) before merge.

## Verification gate (every phase)
`npx prisma generate && npx tsc --noEmit && npm run build` must pass. Prefer a Netlify deploy
preview for visual sign-off on Phase 2+.
