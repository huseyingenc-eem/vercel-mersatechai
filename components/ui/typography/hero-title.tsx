'use client';

import React from 'react';

interface HeroTitleProps {
  normalText?: string;
  gradientText: string;
  endText?: string;
  className?: string;
}

/**
 * Hero başlıkları için component - Normal + Gradient metin kombinasyonu
 * @param normalText - Normal renkle gösterilecek metin
 * @param gradientText - Gradient efektli metin
 * @param endText - Sonundaki normal metin
 * @param className - Ek CSS sınıfları
 */
export function HeroTitle({
  normalText = '',
  gradientText,
  endText = '',
  className = '',
}: HeroTitleProps) {
  return (
    <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight ${className}`}>
      {normalText && <span className="text-foreground">{normalText}</span>}
      {normalText && <br />}
      <span className="relative inline-block mt-2">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          {gradientText}
        </span>
      </span>
      {endText && (
        <>
          <br />
          <span className="text-foreground">{endText}</span>
        </>
      )}
    </h1>
  );
}

