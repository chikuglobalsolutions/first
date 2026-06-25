#!/usr/bin/env node
/**
 * Free, autonomous video-ad generator.
 *
 * No paid API. Renders an animated HTML ad in the pre-installed Chromium via
 * Playwright, records it to webm, then transcodes to mp4 with Playwright's
 * bundled ffmpeg. Output is a vertical 1080x1920 clip (Reels / TikTok / Shorts).
 *
 * Usage:  node marketing/video/generate-ad.mjs <spec.json>
 * Spec shape: see marketing/video/specs/*.json
 *   { "slug", "brand", "accent" (hex), "scenes": [{ "kicker", "headline", "sub" }], "cta", "secondsPerScene" }
 *
 * Each daily run can add a spec and produce a new ad with zero human input.
 */
import { chromium } from "playwright";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, renameSync, rmSync, readdirSync, chmodSync as fsChmod } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
// Full static ffmpeg (libx264/mp4). The Playwright-bundled ffmpeg only muxes webm.
const FFMPEG = ffmpegInstaller.path;
try { fsChmod(FFMPEG, 0o755); } catch {}
const CHROMIUM = process.env.PW_CHROMIUM || "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
const W = 1080;
const H = 1920;

function buildHtml(spec) {
  const accent = spec.accent || "#a78bfa";
  const per = spec.secondsPerScene || 2.5;
  const scenes = spec.scenes;
  const total = per * scenes.length;

  // Each scene fades/slides in then out, sequenced by animation-delay.
  const sceneEls = scenes
    .map((s, i) => {
      const delay = i * per;
      return `
      <div class="scene" style="animation-delay:${delay}s">
        ${s.kicker ? `<p class="kicker">${esc(s.kicker)}</p>` : ""}
        <h1 class="headline">${esc(s.headline)}</h1>
        ${s.sub ? `<p class="sub">${esc(s.sub)}</p>` : ""}
      </div>`;
    })
    .join("");

  const ctaDelay = total; // CTA appears after all scenes
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    * { margin:0; padding:0; box-sizing:border-box; }
    @font-face { font-family:'Deja'; src:local('DejaVu Sans'); }
    body { width:${W}px; height:${H}px; overflow:hidden;
      background: radial-gradient(circle at 50% 30%, #1f2937 0%, #030712 70%);
      font-family:'DejaVu Sans','Helvetica Neue',Arial,sans-serif; color:#fff; }
    .stage { position:relative; width:100%; height:100%; }
    .brand { position:absolute; top:90px; left:0; right:0; text-align:center;
      font-size:34px; font-weight:800; letter-spacing:6px; text-transform:uppercase;
      color:${accent}; }
    .scene { position:absolute; top:0; left:0; right:0; bottom:0;
      display:flex; flex-direction:column; align-items:center; justify-content:center;
      padding:0 90px; text-align:center; opacity:0;
      animation: pop ${spec.secondsPerScene || 2.5}s ease-in-out forwards; }
    .kicker { font-size:34px; font-weight:700; letter-spacing:3px; text-transform:uppercase;
      color:${accent}; margin-bottom:34px; }
    .headline { font-size:92px; font-weight:800; line-height:1.08; }
    .sub { font-size:44px; color:#cbd5e1; margin-top:40px; line-height:1.3; font-weight:500; }
    .cta { position:absolute; left:0; right:0; bottom:200px; text-align:center; opacity:0;
      animation: fadein 0.6s ease-out forwards; animation-delay:${ctaDelay}s; }
    .cta .btn { display:inline-block; background:#fff; color:#030712; font-size:46px;
      font-weight:800; padding:34px 64px; border-radius:24px; }
    @keyframes pop {
      0% { opacity:0; transform:translateY(40px) scale(0.96); }
      12% { opacity:1; transform:translateY(0) scale(1); }
      85% { opacity:1; transform:translateY(0) scale(1); }
      100% { opacity:0; transform:translateY(-30px) scale(1.02); }
    }
    @keyframes fadein { to { opacity:1; } }
  </style></head><body><div class="stage">
    <div class="brand">${esc(spec.brand)}</div>
    ${sceneEls}
    <div class="cta"><span class="btn">${esc(spec.cta)}</span></div>
  </div></body></html>`;
}

function esc(s) {
  return String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
}

async function main() {
  const specPath = process.argv[2];
  if (!specPath) {
    console.error("usage: node generate-ad.mjs <spec.json>");
    process.exit(1);
  }
  const spec = JSON.parse(readFileSync(resolve(specPath), "utf8"));
  const per = spec.secondsPerScene || 2.5;
  const durationMs = (per * spec.scenes.length + 2.8) * 1000; // + CTA hold

  const outDir = resolve(__dirname, "out");
  mkdirSync(outDir, { recursive: true });
  const tmpDir = join(outDir, `.tmp-${spec.slug}`);
  rmSync(tmpDir, { recursive: true, force: true });
  mkdirSync(tmpDir, { recursive: true });

  const browser = await chromium.launch({
    executablePath: CHROMIUM,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });
  const context = await browser.newContext({
    viewport: { width: W, height: H },
    recordVideo: { dir: tmpDir, size: { width: W, height: H } },
  });
  const page = await context.newPage();
  await page.setContent(buildHtml(spec), { waitUntil: "load" });
  await page.waitForTimeout(durationMs);
  await context.close(); // flushes the video
  await browser.close();

  // Move the recorded webm to a stable name
  const webm = readdirSync(tmpDir).find((f) => f.endsWith(".webm"));
  const webmPath = join(outDir, `${spec.slug}.webm`);
  renameSync(join(tmpDir, webm), webmPath);
  rmSync(tmpDir, { recursive: true, force: true });

  // Transcode to mp4 (H.264 + yuv420p for max platform compatibility)
  const mp4Path = join(outDir, `${spec.slug}.mp4`);
  try {
    execFileSync(
      FFMPEG,
      ["-y", "-i", webmPath, "-c:v", "libx264", "-pix_fmt", "yuv420p", "-movflags", "+faststart", mp4Path],
      { stdio: "ignore" }
    );
    rmSync(webmPath, { force: true }); // mp4 is canonical; drop the webm working copy
    // Publish into the Next.js public dir so the site can serve it on an owned channel.
    const pubDir = resolve(__dirname, "../../public/ads");
    mkdirSync(pubDir, { recursive: true });
    const published = join(pubDir, `${spec.slug}.mp4`);
    renameSync(mp4Path, published);
    console.log(`✅ published: public/ads/${spec.slug}.mp4`);
  } catch (e) {
    console.log(`⚠️  mp4 transcode failed, webm kept: ${webmPath}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
