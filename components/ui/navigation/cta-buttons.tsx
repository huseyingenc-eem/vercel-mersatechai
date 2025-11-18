'use client';

import React from 'react';
import { Button } from '../core/button';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

interface CTAButtonsProps {
  primaryText?: string;
  secondaryText?: string;
  primaryHref?: string;
  secondaryHref?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
}

/**
 * CTA (Call To Action) butonları - Ücretsiz Danışmanlık + Demo Talebi
 * @param primaryText - Birincil buton metni
 * @param secondaryText - İkincil buton metni
 * @param primaryHref - Birincil buton linki
 * @param secondaryHref - İkincil buton linki
 * @param onPrimaryClick - Birincil buton tıklama event'i
 * @param onSecondaryClick - İkincil buton tıklama event'i
 * @param className - Ek CSS sınıfları
 */
export function CTAButtons({
  primaryText = 'Ücretsiz Keşif Toplantısı',
  secondaryText = 'Demo Talebi',
  primaryHref = '/iletisim',
  secondaryHref = '#demo',
  onPrimaryClick,
  onSecondaryClick,
  className = '',
}: CTAButtonsProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${className}`}>
      {/* Birincil Buton */}
      <Button
        size="lg"
        className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group text-base sm:text-lg px-8 py-6 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 w-full sm:w-auto"
        onClick={onPrimaryClick}
        asChild={!onPrimaryClick}
      >
        {onPrimaryClick ? (
          <span className="relative z-10 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            {primaryText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        ) : (
          <a href={primaryHref} className="relative z-10 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            {primaryText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        )}
      </Button>

      {/* İkincil Buton */}
      <Button
        size="lg"
        variant="outline"
        className="border-2 border-border hover:border-blue-500/50 text-foreground hover:bg-blue-500/5 text-base sm:text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
        onClick={onSecondaryClick}
        asChild={!onSecondaryClick}
      >
        {onSecondaryClick ? (
          <span className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            {secondaryText}
          </span>
        ) : (
          <a href={secondaryHref} className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            {secondaryText}
          </a>
        )}
      </Button>
    </div>
  );
}

