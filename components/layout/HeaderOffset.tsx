"use client";
import { useEffect } from 'react';

// Tunable reduction (space left above first section). Adjust here if needed.
const REDUCTION_PX = 8;

/**
 * Measures #site-header height (ResizeObserver + reflow on orientation/resize)
 * Sets CSS vars:
 *  --header-h: raw header height
 *  --header-offset: header height minus REDUCTION_PX (clamped >=0)
 */
export function HeaderOffset() {
  useEffect(() => {
    const header = document.getElementById('site-header');
    if (!header) return;

    const set = () => {
      const h = header.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--header-h', h + 'px');
      const reduced = Math.max(0, h - REDUCTION_PX);
      document.documentElement.style.setProperty('--header-offset', reduced + 'px');
    };
    set();

    const ro = new ResizeObserver(set);
    ro.observe(header);
    window.addEventListener('resize', set, { passive: true });
    window.addEventListener('orientationchange', set, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', set);
      window.removeEventListener('orientationchange', set);
    };
  }, []);
  return null;
}

export default HeaderOffset;
