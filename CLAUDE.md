# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start the dev server (http://localhost:3000)
npm run build        # prisma generate && next build (requires env vars, see below)
npm start            # Serve the production build
npm run lint         # next lint (config in .eslintrc.json)
npx tsc --noEmit     # Type-check — this is the CI gate; there is NO test runner
npm run db:push      # prisma db push — sync schema.prisma to the DB (no migrations)
npm run db:studio    # Open Prisma Studio
```

First-time / fresh-checkout setup: `npm install && npx prisma generate`, then create a
`.env` from `.env.example`. `npx prisma generate` is mandatory before type-check, lint, or
build — `@prisma/client` types do not exist until it runs. In Claude Code web sessions this
is handled automatically by `.claude/hooks/session-start.sh`.

There is no test framework configured. CI (`.github/workflows/ci.yml`, runs on push to
`main`/`claude/**` and PRs to `main`) is: `npm ci` → `npx prisma generate` →
`npx tsc --noEmit` → `npm run build`. Treat a clean type-check + build as the merge gate.

## Architecture

This is a single Next.js 14 App Router application that serves as a **multi-brand storefront
for Chiku Global Solutions LLC**. Several independent product lines live in one codebase,
separated by route group under `src/app/`:

- `promptempire/` — AI prompt packs (sold via Stripe payment links)
- `chiku-fit/` — fitness guides/programs
- `ai-systems/` — "Dental AI Agency" marketing site, including an intake form
- QR code generator — the app's origin (the package is still named `qrflow`); see
  `QRGenerator`, `/generate`, `/dashboard`, and the scan-tracking route

All brands share one root layout (`src/app/layout.tsx`, dark theme) and the subsystems below.
Path alias `@/*` maps to `src/*`. Pages are React Server Components by default.

### Data layer (Prisma)
`src/lib/prisma.ts` exports a singleton `PrismaClient` (cached on `globalThis` outside
production to survive hot reloads). Schema is `prisma/schema.prisma`. The project uses
`prisma db push` (not migrations — `prisma/migrations/` is gitignored). Dev uses SQLite
(`file:./dev.db`); for production the datasource `provider` is swapped to Postgres.
Models split into three groups: NextAuth tables (`User`, `Account`, `Session`,
`VerificationToken`), QR analytics (`QRCode`, `ScanLog`), and `IntakeSubmission` (agency form).

### Auth (NextAuth v4)
`src/lib/auth.ts` defines `authOptions`: email magic-link provider (Resend SMTP) with the
Prisma adapter. The `session` callback copies `user.id` and `user.plan` onto the session, so
server code reads the plan via `getServerSession(authOptions)`. Custom pages: `/login`,
`/verify`. Handler lives at `src/app/api/auth/[...nextauth]/route.ts`.

### Payments (Stripe)
`src/lib/stripe.ts` exports the `stripe` client (API version pinned to `2025-02-24.acacia`)
and the `PLANS` config (`free`/`pro`/`business`, with `priceId`s from env). Subscription flow:
- `GET /api/stripe/checkout?plan=…` — requires a session, lazily creates a Stripe customer
  (persists `stripeCustomerId`), opens a subscription Checkout session, redirects to it.
- `POST /api/stripe/webhook` (`force-dynamic`) — verifies the signature against the **raw**
  request body (`req.text()`), then syncs `user.plan` / `stripeSubscriptionId` on
  `checkout.session.completed` and `customer.subscription.updated|deleted`.
- `/api/admin/seed-stripe` seeds the Stripe catalog.

When changing webhook handling, preserve the raw-body read — parsing the body first breaks
signature verification.

### QR scan tracking
`GET /api/scan/[shortCode]` looks up the `QRCode`, then in a single `prisma.$transaction`
increments `scans` and writes a `ScanLog` (device inferred from the user agent) before
redirecting to the target URL.

### AI Systems content
`src/lib/ai-systems-data.ts` is the content source of truth for the `ai-systems` brand
(`SYSTEMS` and `INDUSTRIES` arrays). The dynamic routes `ai-systems/systems/[slug]` and
`ai-systems/industries/[slug]` render from these arrays — add entries there rather than
creating per-page files.

## Environment & deploy

Required env vars (see `.env.example`): `DATABASE_URL`, `NEXTAUTH_URL`, `NEXTAUTH_SECRET`,
`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`,
`STRIPE_PRO_PRICE_ID`, `STRIPE_BUSINESS_PRICE_ID`, and `EMAIL_SERVER_*`. `build` and runtime
need these; `tsc`/`lint` do not. Deploys to Netlify (`netlify.toml`, `@netlify/plugin-nextjs`,
Node 20); `/health` redirects to `/api/health`.
