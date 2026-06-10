#!/bin/bash
# SessionStart hook for Claude Code on the web.
# Installs dependencies and generates the Prisma client so that type-check,
# lint, and build work in remote sessions. Safe to run multiple times.
set -euo pipefail

# Only run in Claude Code remote (web) sessions; no-op locally.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Resolve the repo root (CLAUDE_PROJECT_DIR is set by the harness; fall back to
# two levels up from this script: .claude/hooks/ -> repo root).
PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)}"
cd "$PROJECT_DIR"

# Keep stdout clean (SessionStart stdout is injected as context); log to stderr.
echo "[session-start] Installing npm dependencies in $PROJECT_DIR ..." >&2
npm install >&2

# Generate the Prisma client; @prisma/client types don't exist until this runs,
# which would otherwise break `tsc --noEmit`, `next lint`, and `next build`.
echo "[session-start] Generating Prisma client ..." >&2
npx prisma generate >&2

# Bootstrap a local .env (idempotent) so `npm run build` / `npm run dev` work in
# the session. Values mirror the CI placeholders; .env is gitignored, so no real
# secrets are ever committed.
if [ ! -f .env ]; then
  cat > .env <<'ENV'
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="dev-session-placeholder"
STRIPE_SECRET_KEY="sk_test_placeholder"
STRIPE_WEBHOOK_SECRET="whsec_placeholder"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_placeholder"
STRIPE_PRO_PRICE_ID="price_placeholder"
STRIPE_BUSINESS_PRICE_ID="price_placeholder"
ENV
  echo "[session-start] Created .env with development placeholders." >&2
fi

echo "[session-start] Setup complete." >&2
