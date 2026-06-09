#!/usr/bin/env bash
# Daily push helper — sets up today's push file, validates the build, and reports
# the open PR if one already exists for the working branch.
#
# Usage (from repo root):
#   ./scripts/daily-push.sh           # bootstrap today's push file from template
#   ./scripts/daily-push.sh --check   # run lint + type-check only
#
# Claude reads ROUTINES.md → Daily push for the full routine. This script handles
# the mechanical bits so the human operator (or Claude) can focus on the angle.

set -euo pipefail

cd "$(dirname "$0")/.."

today="$(date -u +%Y-%m-%d)"
push_file="marketing/PUSH-${today}.md"
mode="${1:-bootstrap}"

case "$mode" in
  --check)
    echo "[daily-push] Running type-check..."
    npx tsc --noEmit
    echo "[daily-push] Running lint..."
    npm run lint --silent
    echo "[daily-push] Build gate OK."
    ;;

  bootstrap|"")
    if [ -f "$push_file" ]; then
      echo "[daily-push] $push_file already exists — leaving it alone."
    else
      mkdir -p marketing
      cat > "$push_file" <<EOF
# Daily marketing push — ${today}

> Run the routine in \`ROUTINES.md\` → Daily push.
> Fill the sections below as you draft the day's pushes.

## TL;DR for today

- **What shipped (code):** _<one line>_
- **What to post (today):** Reddit / X / LinkedIn — one piece each
- **What to send (today):** _<cold email batch + size>_
- **What to schedule (this week):** _<follow-up touchpoints>_

## 1) Reddit

**Sub:** _<r/sub>_
**Title:** _<title>_

**Body:**
> _<copy>_

## 2) X / Twitter thread

\`\`\`
1/ _<hook>_

...
\`\`\`

## 3) LinkedIn post

> _<copy>_

## 4) Cold email — touch 1

**Audience:** _<who>_
**Subject:** _<subject>_

**Body:**
> _<copy>_

## Tracking

Append the day's rows to \`marketing/_LOG.md\` after sending.
EOF
      echo "[daily-push] Created $push_file."
    fi

    echo "[daily-push] Today's log entry placeholder:"
    echo "  | ${today} | <channel> | <url> | <time> | - | - | - | - |"
    ;;

  *)
    echo "[daily-push] Unknown mode: $mode" >&2
    echo "Usage: $0 [--check]" >&2
    exit 2
    ;;
esac
