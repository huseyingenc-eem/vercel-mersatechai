'use client';

import React, { useEffect, useId } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useSectionRegistry, SectionBgColor } from '@/context/section-context';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string; // Allow custom ID
  animate?: boolean;
  delay?: number;
  sectionBg?: SectionBgColor;
}

/**
 * Animasyonlu ve otomatik geçişli Section Container
 * - Kök elementi <section> olarak değiştirildi.
 * - `nextSectionColor` prop'u kaldırıldı.
 * - `SectionContext` kullanarak bir sonraki bölümün rengini otomatik algılar.
 * - Katman sıralaması (z-index) düzeltildi: Renk -> Beams -> Gradient -> İçerik.
 */
export function Container({
  children,
  className = '',
  id: customId,
  animate = true,
  delay = 0,
  sectionBg = 'transparent',
}: ContainerProps) {
  const generatedId = useId();
  const id = customId || generatedId;

  const { register, sections } = useSectionRegistry();

  useEffect(() => {
    register({ id, bgColor: sectionBg });
  }, [id, sectionBg, register]);

  const currentIndex = sections.findIndex(s => s.id === id);
  const nextSection = currentIndex !== -1 && currentIndex < sections.length - 1
    ? sections[currentIndex + 1]
    : undefined;
  const nextSectionColor = nextSection?.bgColor;

  // Section background class
  const getSectionBgClass = () => {
    switch (sectionBg) {
      case 'white':
        return 'bg-white dark:bg-neutral-950';
      case 'slate':
        return 'bg-slate-50 dark:bg-neutral-900';
      case 'gradient':
        return 'bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/20 dark:via-neutral-950 dark:to-purple-950/20';
      default:
        return 'bg-transparent';
    }
  };

  // Gradient to next section
  const getGradientClass = () => {
    if (!nextSectionColor || nextSectionColor === sectionBg) return null;

    // From white/slate TO gradient/transparent
    if ((sectionBg === 'white' || sectionBg === 'slate') && (nextSectionColor === 'gradient' || nextSectionColor === 'transparent')) {
        return 'from-transparent via-transparent to-transparent'; // No visible gradient needed when going to transparent/gradient
    }

    // From gradient/transparent TO white/slate
    if ((sectionBg === 'gradient' || sectionBg === 'transparent') && nextSectionColor === 'white') {
        return 'from-transparent to-white dark:to-neutral-950';
    }
    if ((sectionBg === 'gradient' || sectionBg === 'transparent') && nextSectionColor === 'slate') {
        return 'from-transparent to-slate-50 dark:to-neutral-900';
    }

    // From white TO slate
    if (sectionBg === 'white' && nextSectionColor === 'slate') {
      return 'from-transparent to-slate-50 dark:from-transparent dark:to-neutral-900';
    }
    // From slate TO white
    if (sectionBg === 'slate' && nextSectionColor === 'white') {
      return 'from-transparent to-white dark:from-transparent dark:to-neutral-950';
    }

    return null;
  };


  return (
    <section className="relative w-full min-h-full overflow-hidden">
      {/* Katman 1: Düz Renk veya Gradient Arka Plan */}
      <div className={cn(
        "absolute inset-0 -z-30",
        getSectionBgClass()
      )} />


      {/* Katman 3: Bir sonraki bölüme yumuşak geçiş gradient'i */}
      {getGradientClass() && (
        <div className={cn(
          "absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b pointer-events-none -z-10",
          getGradientClass()
        )} />
      )}

      {/* Katman 4: İçerik */}
      <motion.div
        initial={animate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
        whileInView={animate ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: delay,
          ease: 'easeOut',
        }}
        viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10', className)}
      >
        {children}
      </motion.div>
    </section>
  );
}
