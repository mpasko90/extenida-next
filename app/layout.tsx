import "./globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import ClientProviders from "@/components/ClientProviders";
import { Metadata } from "next";
import HeaderOffset from "@/components/layout/HeaderOffset";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://extendia.co.uk";

export const metadata: Metadata = {
  title: {
    template: "%s | Extendia",
    default: "Extendia - House Extensions & Loft Conversions in South West London",
  },
  description:
    "Expert house extensions, loft conversions, and home improvements in South West London. Serving Kingston, Richmond, Putney, Wimbledon and surrounding areas.",
  metadataBase: new URL(siteUrl),
  keywords: ["home improvement","extensions","loft conversions","bathroom renovations","london"],
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/extendia-logo-color.webp", type: "image/webp" }
    ],
    apple: [
      { url: "/extendia-logo-color.webp" }
    ]
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

/**
 * Root layout for all pages (Next.js App Router)
 * Includes Tailwind global styles, header, footer and sets up the HTML structure.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preload" as="image" href="/extendia-logo-color.webp" />
      </head>
      <body className={`${inter.className} bg-extendia-primary text-gray-900 antialiased`}>
        <ClientProviders>
          <Header />
          <HeaderOffset />
          <div style={{ paddingTop: 'var(--header-offset, var(--header-h, 80px))' }}>
            {children}
          </div>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
