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
 * - Katman sıralaması (z-index) düzeltildi: Renk -> Gradient -> İçerik.
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

  const { register, sections, setCurrentSectionBgColor } = useSectionRegistry();

  useEffect(() => {
    register({ id, bgColor: sectionBg });
  }, [id, sectionBg, register]);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const navHeight = 64;
        if (rect.top <= navHeight && rect.bottom > navHeight) {
          setCurrentSectionBgColor(sectionBg);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id, sectionBg, setCurrentSectionBgColor]);

  const currentIndex = sections.findIndex((s) => s.id === id);
  const nextSection =
    currentIndex !== -1 && currentIndex < sections.length - 1
      ? sections[currentIndex + 1]
      : undefined;
  const nextSectionColor = nextSection?.bgColor;

  // Section background class – tamamen tema değişkenlerine bağlı
  const getSectionBgClass = () => {
    switch (sectionBg) {
      case 'white':
        // Light: beyaz, Dark: tema arkaplanı (lacivert ton senin global'den geliyor)
        return 'bg-background';
      case 'slate':
        // Daha açık yüzey – secondary surface
        return 'bg-secondary';
      case 'gradient':
        // Turuncu + accent ile tema uyumlu gradient
        return cn(
          'bg-gradient-to-br',
          'from-[hsl(var(--primary-light))] via-[hsl(var(--background))] to-[hsl(var(--accent))]'
        );
      default:
        return 'bg-transparent';
    }
  };

  // Bölümler arası geçiş gradient'i – yine theme değişkenleri ile
  const getGradientClass = () => {
    if (!nextSectionColor || nextSectionColor === sectionBg) return null;

    // white/slate -> gradient/transparent: zaten alttaki gradient baskın, ekstra fade gereksiz
    if (
      (sectionBg === 'white' || sectionBg === 'slate') &&
      (nextSectionColor === 'gradient' || nextSectionColor === 'transparent')
    ) {
      return null;
    }

    // gradient/transparent -> white
    if (
      (sectionBg === 'gradient' || sectionBg === 'transparent') &&
      nextSectionColor === 'white'
    ) {
      return 'from-transparent to-[hsl(var(--background))]';
    }

    // gradient/transparent -> slate (secondary yüzeye fade)
    if (
      (sectionBg === 'gradient' || sectionBg === 'transparent') &&
      nextSectionColor === 'slate'
    ) {
      return 'from-transparent to-[hsl(var(--secondary))]';
    }

    // white -> slate
    if (sectionBg === 'white' && nextSectionColor === 'slate') {
      return 'from-transparent to-[hsl(var(--secondary))]';
    }

    // slate -> white
    if (sectionBg === 'slate' && nextSectionColor === 'white') {
      return 'from-transparent to-[hsl(var(--background))]';
    }

    return null;
  };

  return (
    <section className="relative w-full min-h-full overflow-hidden" id={id}>
      {/* Katman 1: Düz Renk veya Gradient Arka Plan */}
      <div
        className={cn(
          'absolute inset-0 -z-30',
          getSectionBgClass()
        )}
      />

      {/* Katman 2: Bir sonraki bölüme yumuşak geçiş gradient'i */}
      {getGradientClass() && (
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b pointer-events-none -z-10',
            getGradientClass()
          )}
        />
      )}

      {/* Katman 3: İçerik */}
      <motion.div
        initial={animate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
        whileInView={animate ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: delay,
          ease: 'easeOut',
        }}
        viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        className={cn(
          'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10',
          className
        )}
      >
        {children}
      </motion.div>
    </section>
  );
}
