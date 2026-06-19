/** Scan-tracking helpers shared by the scan redirect route. */

/** Infers a coarse device class from a User-Agent header. */
export function detectDevice(userAgent: string | null | undefined): "mobile" | "desktop" {
  return /mobile|android|iphone|ipad/i.test(userAgent || "") ? "mobile" : "desktop";
}
