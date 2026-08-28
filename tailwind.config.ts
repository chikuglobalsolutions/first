import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Chiku Global parent palette (cyan/navy). Used across the app
        // surface (Navbar, Hero, Dashboard, QRGenerator, login/verify,
        // pricing, etc.). The QR-generator pages used to ship purple
        // brand-* tokens that didn't match any marketing surface — these
        // values now align with promptempire-chiku and the pe-* tokens
        // below. Also fills in the 50/100/900 shades the existing code
        // already references (they were silently undefined before).
        brand: {
          50: "#ECFBFE",
          100: "#D0F1F9",
          400: "#38BCE0",
          500: "#00B4D8",
          600: "#0091B0",
          700: "#1B3A6B",
          900: "#122A52",
        },
        gold: {
          400: "#fbbf24",
          500: "#f59e0b",
        },
        // PromptEmpire brand palette — mirrors the static promptempire-chiku
        // tokens so /delivery and any other PromptEmpire surface speak the
        // exact brand color, not a Tailwind near-match.
        pe: {
          cyan: "#00B4D8",
          navy: "#1B3A6B",
          navyDeep: "#122A52",
          ink: "#1A1A2E",
          slate: "#4A5E7A",
          mist: "#D0F1F9",
          cloud: "#CCDDEE",
          softBg: "#F5F7FA",
        },
      },
    },
  },
  plugins: [],
};

export default config;
