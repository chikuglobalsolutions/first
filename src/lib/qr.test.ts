import { describe, it, expect } from "vitest";
import { isValidUrl, freeLimitReached, resolveQrColors, FREE_QR_LIMIT } from "./qr";

describe("isValidUrl", () => {
  it.each([
    "https://example.com",
    "http://example.com/path?q=1",
    "https://sub.example.co.uk/a/b",
  ])("accepts %s", (url) => {
    expect(isValidUrl(url)).toBe(true);
  });

  it.each([
    "",
    "not a url",
    "example.com", // no protocol
    "//missing-scheme.com",
  ])("rejects %s", (url) => {
    expect(isValidUrl(url)).toBe(false);
  });
});

describe("freeLimitReached", () => {
  it("is false below the limit", () => {
    expect(freeLimitReached(0)).toBe(false);
    expect(freeLimitReached(FREE_QR_LIMIT - 1)).toBe(false);
  });

  it("is true at or above the limit", () => {
    expect(freeLimitReached(FREE_QR_LIMIT)).toBe(true);
    expect(freeLimitReached(FREE_QR_LIMIT + 10)).toBe(true);
  });
});

describe("resolveQrColors", () => {
  it("honors custom colors for Pro users", () => {
    expect(resolveQrColors(true, "#ff0000", "#00ff00")).toEqual({
      dark: "#ff0000",
      light: "#00ff00",
    });
  });

  it("forces black-on-white for non-Pro users regardless of input", () => {
    expect(resolveQrColors(false, "#ff0000", "#00ff00")).toEqual({
      dark: "#000000",
      light: "#ffffff",
    });
  });
});
