'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Custom hook that scrolls to top whenever the route changes
 */
export function useScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
}
