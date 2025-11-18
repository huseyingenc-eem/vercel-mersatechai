'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedOrbsProps {
  variant?: 'default' | 'subtle' | 'minimal';
  className?: string;
}

/**
 * Arka planda hareketli renkli küreler - Sadeleştirilmiş
 * @param variant - Animasyon yoğunluğu (default, subtle, minimal)
 * @param className - Ek CSS sınıfları
 */
export function AnimatedOrbs({ variant = 'subtle', className = '' }: AnimatedOrbsProps) {
  const variants = {
    default: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.5, 0.3],
      duration: 12,
    },
    subtle: {
      scale: [1, 1.05, 1],
      opacity: [0.2, 0.35, 0.2],
      duration: 15,
    },
    minimal: {
      scale: [1, 1.02, 1],
      opacity: [0.1, 0.2, 0.1],
      duration: 18,
    },
  };

  const config = variants[variant];

  return (
    <>
      {/* Sol üst orb - Mavi ton (subtle) */}
      <motion.div
        animate={{
          scale: config.scale,
          opacity: config.opacity,
        }}
        transition={{
          duration: config.duration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute -top-1/4 left-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-br from-blue-400 to-cyan-500 dark:from-blue-500 dark:to-cyan-600 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] will-change-transform ${className}`}
        style={{ transform: 'translateZ(0)' }}
      />

      {/* Sağ alt orb - Mor ton (subtle) */}
      <motion.div
        animate={{
          scale: config.scale,
          opacity: config.opacity,
        }}
        transition={{
          duration: config.duration + 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className={`absolute -bottom-1/4 right-0 w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] md:w-[900px] md:h-[900px] bg-gradient-to-tl from-purple-400 to-indigo-500 dark:from-purple-500 dark:to-indigo-600 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] will-change-transform ${className}`}
        style={{ transform: 'translateZ(0)' }}
      />
    </>
  );
}

