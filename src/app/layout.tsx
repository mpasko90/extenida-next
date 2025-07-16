import "./globals.css";
import type { ReactNode } from "react";

/**
 * Root layout for all pages (Next.js App Router)
 * Includes Tailwind global styles and sets up the HTML structure.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
