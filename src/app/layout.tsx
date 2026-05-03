import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QRFlow – Smart QR Codes That Work For You",
  description:
    "Generate, track, and manage QR codes with real-time analytics. Start free, upgrade when you grow.",
  keywords: ["QR code generator", "QR analytics", "dynamic QR codes", "free QR code"],
  openGraph: {
    title: "QRFlow – Smart QR Codes That Work For You",
    description: "Generate trackable QR codes with analytics. Free plan available.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>{children}</body>
    </html>
  );
}
