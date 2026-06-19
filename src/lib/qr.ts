/** QR code domain helpers shared by the generate API route. */

/** Free-plan ceiling on the number of saved QR codes. */
export const FREE_QR_LIMIT = 5;

/** True when a string parses as a valid absolute URL. */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/** True when a free-plan user has hit (or exceeded) the QR limit. */
export function freeLimitReached(count: number): boolean {
  return count >= FREE_QR_LIMIT;
}

/**
 * Resolves the foreground/background colors for a QR code.
 * Custom colors are a Pro-only feature; free users always get black on white.
 */
export function resolveQrColors(
  isPro: boolean,
  color: string,
  bgColor: string
): { dark: string; light: string } {
  return {
    dark: isPro ? color : "#000000",
    light: isPro ? bgColor : "#ffffff",
  };
}
