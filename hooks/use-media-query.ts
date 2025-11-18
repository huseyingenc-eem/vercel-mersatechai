'use client';

import { useState, useEffect } from 'react';

/**
 * Media query sorgusu yapan hook
 * @param {string} query - CSS media query sorgusu (örn: "(max-width: 768px)")
 * @returns {boolean} Media query eşleşip eşleşmediğini gösteren boolean değer
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Media query listesini oluştur
    const mediaQuery = window.matchMedia(query);

    // İlk değeri ayarla
    setMatches(mediaQuery.matches);

    // Değişiklikleri dinle
    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // Event listener'ı ekle
    mediaQuery.addEventListener('change', handleChange);

    // Temizlik
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}

