# Free autonomous video-ad generator

Generates vertical (1080×1920) mp4 video ads for Reels / TikTok / Shorts / on-site embedding,
with **no paid service**. Renders an animated HTML ad in the pre-installed Chromium via Playwright,
records it, and transcodes to H.264 mp4 with a static ffmpeg.

## Generate an ad
```bash
node marketing/video/generate-ad.mjs marketing/video/specs/<slug>.json
# → publishes public/ads/<slug>.mp4 (served by the Next.js site)
```

## Spec format (`specs/*.json`)
```json
{
  "slug": "chiku-fit-bulk-7-day",
  "brand": "Chiku Fit",
  "accent": "#34d399",
  "secondsPerScene": 2.5,
  "scenes": [
    { "kicker": "optional eyebrow", "headline": "Big line", "sub": "supporting line" }
  ],
  "cta": "Link in bio → Chiku Fit"
}
```

## How it embeds on the site
Set a blog post's `videoSrc` (in `src/lib/blog-data.ts`) to `/ads/<slug>.mp4` and it renders as an
autoplaying muted loop on that post.

## Dependencies
- `playwright` (uses the pre-installed Chromium at `/opt/pw-browsers/chromium-1194`; override with
  `PW_CHROMIUM`).
- `@ffmpeg-installer/ffmpeg` — full static ffmpeg with libx264 (the Playwright-bundled ffmpeg only
  muxes webm).

Working output goes to `marketing/video/out/` (gitignored); the final mp4 is moved to `public/ads/`.
