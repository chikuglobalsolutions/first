import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chiku Global Solutions LLC — Digital Products & AI Services",
  description:
    "Multi-brand digital business. PromptEmpire (AI prompts), Chiku Fit (fitness guides), and Dental AI Agency — all under Chiku Global Solutions LLC.",
  keywords: ["Chiku Global Solutions", "AI prompts", "digital products", "fitness guides", "dental AI agency"],
  openGraph: {
    title: "Chiku Global Solutions LLC",
    description: "Digital products and AI services. PromptEmpire · Chiku Fit · Dental AI Agency.",
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
