"use client";

import { useEffect } from "react";

/**
 * Google Reviews Widget powered by Elfsight
 * Displays customer reviews from Google Business Profile
 */
export function GoogleReviewsWidget() {
  useEffect(() => {
    // Load Elfsight platform script
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      className="elfsight-app-4e327eca-7d03-4bcc-9bdc-7841e6189e8c" 
      data-elfsight-app-lazy
    />
  );
}
