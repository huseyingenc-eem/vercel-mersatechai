'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * Scroll olduğunda fade-in animasyonu yapan wrapper component'i
 * @param children - İçerik
 * @param delay - Animasyon gecikmesi (varsayılan: 0)
 * @param duration - Animasyon süresi (varsayılan: 0.6)
 * @param className - Ek CSS sınıfları
 */
export function FadeInSection({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
}: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

