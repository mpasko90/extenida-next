import "./globals.css";
import ClientProviders from "@/components/ClientProviders";
import type { ReactNode } from "react";

/**
 * Root layout for all pages (Next.js App Router)
 * Includes Tailwind global styles and sets up the HTML structure.
 */
export const metadata = {
  title: {
    default: 'Extendia - Professional Building Services in South West London',
    template: '%s | Extendia - Building Excellence in London'
  },
  description: 'Professional building services in South West London. Specializing in home extensions, loft conversions, and renovations in Kingston, Putney, Richmond, Surbiton, Twickenham, and Wimbledon.',
  keywords: [
    'home extensions London',
    'loft conversions London',
    'building services South West London',
    'Kingston building contractors',
    'Putney home extensions',
    'Richmond loft conversions',
    'Surbiton renovations',
    'Twickenham building services',
    'Wimbledon home improvements',
    'London building company'
  ],
  authors: [{ name: 'Extendia' }],
  creator: 'Extendia',
  publisher: 'Extendia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://extendia.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://extendia.co.uk',
    title: 'Extendia - Professional Building Services in South West London',
    description: 'Professional building services in South West London. Specializing in home extensions, loft conversions, and renovations.',
    siteName: 'Extendia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Extendia - Professional Building Services in South West London',
    description: 'Professional building services in South West London. Specializing in home extensions, loft conversions, and renovations.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="canonical" href="https://extendia.co.uk" />
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        <link rel="icon" type="image/webp" href="/extendia-logo-color.webp" />
      </head>
      <body className="bg-white text-gray-900 antialiased scroll-smooth">
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
