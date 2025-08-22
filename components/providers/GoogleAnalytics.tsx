"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * Google Analytics page-view tracker for App Router.
 * Requires NEXT_PUBLIC_GA_ID (e.g., G-XXXXXXXXXX).
 */
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track on route changes
  useEffect(() => {
    if (!gaId) return; // no-op if not configured
    // @ts-expect-error gtag is injected by the GA script in layout
    if (typeof window.gtag !== "function") return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    // @ts-ignore - window.gtag provided by gtag.js
    window.gtag("event", "page_view", {
      page_path: url,
    });
  }, [gaId, pathname, searchParams]);

  return null;
}
