'use client';

import { useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

/**
 * Sayfa kaydırma konumunu takip eden hook
 * @returns {ScrollPosition} x ve y koordinatlarıyla mevcut kaydırma konumu
 */
export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX || window.pageXOffset,
        y: window.scrollY || window.pageYOffset,
      });
    };

    // Scroll olayı dinleyicisini ekle
    window.addEventListener('scroll', handleScroll);

    // Mount olduğunda başlangıç konumunu al
    handleScroll();

    // Temizlik
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}

