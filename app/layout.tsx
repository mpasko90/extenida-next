import "./globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import ClientProviders from "@/components/ClientProviders";
import { Metadata } from "next";
import HeaderOffset from "@/components/layout/HeaderOffset";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { GoogleAnalytics } from "@/components/providers/GoogleAnalytics";
import { Suspense } from "react";
import { WebsiteSchema } from "@/components/structured-data/WebsiteSchema";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://extendia.co.uk";
// Normalize GSC token: allow either the raw token or the full "google-site-verification=TOKEN" string
const rawGsc = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
const gscToken = rawGsc ? rawGsc.replace(/^google-site-verification=/i, "").trim() : undefined; // optional token for meta verification
// Only enable GA when a GA4 Measurement ID (G-XXXXXXXXXX) is provided
const rawGaId = process.env.NEXT_PUBLIC_GA_ID;
const gaId = rawGaId && /^G-[A-Z0-9]+$/i.test(rawGaId) ? rawGaId : undefined; // optional Google Analytics ID (G-XXXXXXXXXX)

export const metadata: Metadata = {
  title: {
    template: "%s | Extendia",
    default: "Extendia - House Extensions & Loft Conversions in South West London",
  },
  description:
    "Expert house extensions, loft conversions, and home improvements in South West London. Serving Kingston, Richmond, Putney, Wimbledon and surrounding areas.",
  metadataBase: new URL(siteUrl),
  keywords: ["home improvement","extensions","loft conversions","bathroom renovations","london"],
  authors: [
    {
      name: 'Michał Paśko',
      url: 'https://paskomichal.pl'
    }
  ],
  creator: 'Michał Paśko',
  publisher: 'Michał Paśko',
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "any" },
    ],
    apple: '/apple-touch-icon.png',
  },
  verification: gscToken ? { google: gscToken } : undefined,
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
        {/* Fallback SEO tags (development only) to satisfy Lighthouse if Metadata API tags aren't visible in dev */}
        {process.env.NODE_ENV !== 'production' ? (
          <>
            <title>Extendia - House Extensions & Loft Conversions in South West London</title>
            <meta
              name="description"
              content="Expert house extensions, loft conversions, and home improvements in South West London. Serving Kingston, Richmond, Putney, Wimbledon and surrounding areas."
            />
          </>
        ) : null}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/extendia-logo-color.webp" />
        {process.env.NODE_ENV !== 'production' && gscToken ? (
          // In production the meta tag is emitted via the Metadata `verification` field.
          // Keep this only in development to avoid duplicate tags.
          <meta name="google-site-verification" content={gscToken} />
        ) : null}
        {/* Google Analytics */}
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { anonymize_ip: true });
              `}
            </Script>
          </>
        ) : (
          // In development, surface a gentle hint if GA ID format looks wrong
          process.env.NODE_ENV !== 'production' && rawGaId ? (
            <Script id="ga-warn" strategy="afterInteractive">
              {`console.warn('[GA] NEXT_PUBLIC_GA_ID is set to "${rawGaId}", but it does not look like a GA4 Measurement ID (expected format: G-XXXXXXXXXX). Google Analytics will not be loaded.');`}
            </Script>
          ) : null
        )}
      </head>
      <body className={`${inter.className} bg-extendia-primary text-gray-900 antialiased`}>
        <WebsiteSchema />
        <ClientProviders>
          <Header />
          <HeaderOffset />
          <div className="header-offset">
            {children}
          </div>
          <Footer />
        </ClientProviders>
        {gaId ? (
          <Suspense fallback={null}>
            <GoogleAnalytics />
          </Suspense>
        ) : null}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
