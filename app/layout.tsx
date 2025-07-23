import "./globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import ClientProviders from "@/components/ClientProviders";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Extenida",
    default: "Extenida - House Extensions & Loft Conversions in South West London",
  },
  description:
    "Expert house extensions, loft conversions, and home improvements in South West London. Serving Kingston, Richmond, Putney, Wimbledon and surrounding areas.",
};

/**
 * Root layout for all pages (Next.js App Router)
 * Includes Tailwind global styles, header, footer and sets up the HTML structure.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-extendia-primary text-gray-900 antialiased`}>
        <ClientProviders>
          <Header />
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
