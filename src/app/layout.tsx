import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PromptEmpire — 500 AI Business Prompts That Work While You Sleep",
  description:
    "Stop staring at a blank screen. 500 battle-tested AI prompts for freelancers, entrepreneurs, and side hustlers. Buy once, use forever.",
  keywords: ["AI prompts", "ChatGPT prompts", "freelancer tools", "passive income", "AI business"],
  openGraph: {
    title: "PromptEmpire — 500 AI Business Prompts",
    description: "Stop staring at a blank screen. 500 battle-tested AI prompts — buy once, use forever.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white antialiased`}>{children}</body>
    </html>
  );
}
