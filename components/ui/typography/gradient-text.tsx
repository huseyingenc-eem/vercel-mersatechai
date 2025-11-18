'use client';

import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

/**
 * Gradient renk efekti olan metin component'i
 * @param children - Metin içeriği
 * @param className - Ek CSS sınıfları
 * @param animate - Animasyon efekti ekle (varsayılan: false)
 */
export function GradientText({
  children,
  className = '',
  animate = false,
}: GradientTextProps) {
  return (
    <span
      className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ${
        animate ? 'animate-gradient' : ''
      } ${className}`}
    >
      {children}
    </span>
  );
}

