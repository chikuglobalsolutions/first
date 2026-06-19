import { describe, it, expect } from "vitest";
import { detectDevice } from "./scan";

describe("detectDevice", () => {
  it.each([
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)",
    "Mozilla/5.0 (Linux; Android 14; Pixel 8)",
    "Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X)",
    "Some Mobile Browser",
  ])("classifies %s as mobile", (ua) => {
    expect(detectDevice(ua)).toBe("mobile");
  });

  it.each([
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    "curl/8.4.0",
  ])("classifies %s as desktop", (ua) => {
    expect(detectDevice(ua)).toBe("desktop");
  });

  it("defaults to desktop when the user-agent is missing", () => {
    expect(detectDevice(null)).toBe("desktop");
    expect(detectDevice(undefined)).toBe("desktop");
    expect(detectDevice("")).toBe("desktop");
  });
});
