'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BadgeProps {
  icon?: React.ReactNode;
  text: string;
  className?: string;
}

/**
 * Başlıklarda kullanılan mavi rozet component'i
 * @param icon - Lucide icon bileşeni (opsiyonel)
 * @param text - Badge'in metni
 * @param className - Ek CSS sınıfları
 */
export function Badge({ icon, text, className = '' }: BadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 dark:bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8 ${className}`}
    >
      {icon}
      <span className="text-sm font-medium text-primary">
        {text}
      </span>
    </div>
  );
}

