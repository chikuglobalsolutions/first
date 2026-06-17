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
        brand: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
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
