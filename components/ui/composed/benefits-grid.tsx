'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface BenefitsGridProps {
  benefits: string[];
  columns?: 1 | 2 | 3;
  className?: string;
}

/**
 * Avantaj/Özellik listesi - Check icon'lu grid formatında
 * @param benefits - Avantajları içeren string array'i
 * @param columns - Grid sütun sayısı (1, 2 veya 3)
 * @param className - Ek CSS sınıfları
 */
export function BenefitsGrid({
  benefits,
  columns = 3,
  className = '',
}: BenefitsGridProps) {
  const gridClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-3',
  };

  return (
    <div
      className={`grid ${gridClass[columns]} gap-6 mb-12 max-w-3xl mx-auto ${className}`}
    >
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-center gap-3 justify-center sm:justify-start group">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
            <Check className="w-3 h-3 text-white" />
          </div>
          <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
            {benefit}
          </span>
        </div>
      ))}
    </div>
  );
}

