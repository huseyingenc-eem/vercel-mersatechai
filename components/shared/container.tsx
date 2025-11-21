'use client';

import React, { useEffect, useId } from 'react';
import { cn } from '@/lib/utils';
import { useSectionRegistry } from '@/context/section-context';
import type { SectionBgColor } from '@/context/section-context';
import { useGsapFadeIn } from '@/hooks/use-gsap-animation';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
  delay?: number;
  sectionBg?: SectionBgColor;
}

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
  const animationRef = useGsapFadeIn<HTMLDivElement>({ delay, y: 30, once: true, start: "top 90%" });

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

  const getSectionBgClass = () => {
    switch (sectionBg) {
      case 'white':
        return 'bg-background';
      case 'slate':
        return 'bg-secondary';
      case 'gradient':
        return cn(
          'bg-gradient-to-br',
          'from-[hsl(var(--primary-light))] via-[hsl(var(--background))] to-[hsl(var(--accent))]'
        );
      default:
        return 'bg-transparent';
    }
  };

  const getGradientClass = () => {
    if (!nextSectionColor || nextSectionColor === sectionBg) return null;

    if (
      (sectionBg === 'white' || sectionBg === 'slate') &&
      (nextSectionColor === 'gradient' || nextSectionColor === 'transparent')
    ) {
      return null;
    }

    if (
      (sectionBg === 'gradient' || sectionBg === 'transparent') &&
      nextSectionColor === 'white'
    ) {
      return 'from-transparent to-[hsl(var(--background))]';
    }

    if (
      (sectionBg === 'gradient' || sectionBg === 'transparent') &&
      nextSectionColor === 'slate'
    ) {
      return 'from-transparent to-[hsl(var(--secondary))]';
    }

    if (sectionBg === 'white' && nextSectionColor === 'slate') {
      return 'from-transparent to-[hsl(var(--secondary))]';
    }

    if (sectionBg === 'slate' && nextSectionColor === 'white') {
      return 'from-transparent to-[hsl(var(--background))]';
    }

    return null;
  };

  return (
    <section className="relative w-full min-h-full overflow-hidden" id={id}>
      <div
        className={cn(
          'absolute inset-0 -z-30',
          getSectionBgClass()
        )}
      />

      {getGradientClass() && (
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b pointer-events-none -z-10',
            getGradientClass()
          )}
        />
      )}

      <div
        ref={animate ? animationRef : undefined}
        className={cn(
          'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10',
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}
