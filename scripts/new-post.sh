#!/usr/bin/env bash
# new-post.sh — bootstrap a new PromptEmpire blog post.
#
# Usage:
#   ./scripts/new-post.sh "<slug>" "<title>" "<category>"
#
# Example:
#   ./scripts/new-post.sh chatgpt-prompts-for-sales-pages \
#     "ChatGPT prompts for sales pages that convert" \
#     "Sales Pages"
#
# Appends a stub entry to src/lib/promptempire-posts.ts so you can start writing.
# Reminder: the blog index and the [slug] route are data-driven, so the new post
# auto-appears in the nav, sitemap, and related-posts grid as soon as it's saved.

set -euo pipefail

cd "$(dirname "$0")/.."

slug="${1:-}"
title="${2:-}"
category="${3:-Tools}"

if [ -z "$slug" ] || [ -z "$title" ]; then
  cat >&2 <<EOF
Usage: $0 "<slug>" "<title>" "<category>"
Example: $0 chatgpt-prompts-for-sales-pages "ChatGPT prompts for sales pages that convert" "Sales Pages"
EOF
  exit 1
fi

today="$(date -u +%Y-%m-%d)"
target="src/lib/promptempire-posts.ts"

if [ ! -f "$target" ]; then
  echo "[new-post] $target not found." >&2
  exit 1
fi

if grep -q "slug: \"$slug\"" "$target"; then
  echo "[new-post] A post with slug \"$slug\" already exists in $target. Aborting." >&2
  exit 1
fi

# Build the stub block.
stub=$(cat <<EOF
  {
    slug: "$slug",
    title: "$title",
    description:
      "TODO: 150-180 character meta description that names the buying-intent query this post targets.",
    date: "$today",
    category: "$category",
    body: [
      {
        type: "p",
        text: "TODO: opening hook that names the problem and promises the outcome.",
      },
      { type: "h2", text: "TODO: section 1 — name the failure mode" },
      { type: "p", text: "TODO." },
      { type: "h2", text: "TODO: section 2 — the prompt(s)" },
      {
        type: "code",
        label: "Paste into ChatGPT",
        text: \`TODO: prompt body. Use bracketed placeholders so the reader fills in the specifics.\`,
      },
      { type: "h2", text: "TODO: section 3 — how to actually run it" },
      {
        type: "ol",
        items: [
          "TODO step 1",
          "TODO step 2",
          "TODO step 3",
        ],
      },
      { type: "h2", text: "What's in the full pack" },
      {
        type: "p",
        text: "TODO: 2-3 sentence wrap-up connecting this post's angle to the full 500-pack.",
      },
      { type: "cta", text: "Get the 500-pack" },
    ],
    faq: [
      { q: "TODO question 1", a: "TODO answer." },
      { q: "TODO question 2", a: "TODO answer." },
    ],
  },
EOF
)

# Insert before the closing "];" of POSTS array.
tmp=$(mktemp)
awk -v stub="$stub" '
  BEGIN { inserted = 0 }
  /^\];/ && !inserted {
    print stub
    inserted = 1
  }
  { print }
' "$target" > "$tmp"
mv "$tmp" "$target"

echo "[new-post] Stub appended to $target."
echo "[new-post] Slug:     $slug"
echo "[new-post] Title:    $title"
echo "[new-post] Category: $category"
echo "[new-post] Next: open $target, replace the TODOs, type-check, commit, push."
