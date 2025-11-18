'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

// Text variant tipleri
type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'lead'
  | 'small'
  | 'tiny';

// Text renk temaları - Yeni renk paleti
type TextTheme =
  | 'default'     // Normal text rengi
  | 'muted'       // Soluk text
  | 'primary'     // Ana mavi renk
  | 'accent'      // Vurgu rengi (cyan)
  | 'gradient'    // Gradient efekt
  | 'success'     // Yeşil (başarı)
  | 'warning'     // Turuncu (uyarı)
  | 'error';      // Kırmızı (hata)

// Responsive boyutlar
type ResponsiveSize = {
  mobile?: string;
  tablet?: string;
  desktop?: string;
};

interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  theme?: TextTheme;
  className?: string;
  animate?: boolean;
  animationDelay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  responsive?: ResponsiveSize;
}

/**
 * Standart Text Component
 * Responsive, themed, animasyonlu text component'i
 */
export function Text({
  children,
  variant = 'p',
  theme = 'default',
  className = '',
  animate = false,
  animationDelay = 0,
  as,
  responsive,
}: TextProps) {
  // Variant'a göre default tag
  const getDefaultTag = (): keyof JSX.IntrinsicElements => {
    if (as) return as;
    if (variant.startsWith('h')) return variant as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    return 'p';
  };

  // Variant styling - Sadeleştirilmiş, profesyonel
  const getVariantClasses = (): string => {
    const baseClasses = {
      // Başlıklar - Responsive ve balanced
      h1: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight',
      h2: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight',
      h3: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
      h4: 'text-xl sm:text-2xl md:text-3xl font-semibold leading-snug',
      h5: 'text-lg sm:text-xl md:text-2xl font-semibold leading-snug',
      h6: 'text-base sm:text-lg md:text-xl font-semibold leading-snug',

      // Paragraflar
      p: 'text-base sm:text-lg leading-relaxed',
      lead: 'text-lg sm:text-xl md:text-2xl leading-relaxed font-normal',
      small: 'text-sm sm:text-base leading-normal',
      tiny: 'text-xs sm:text-sm leading-normal',
    };

    return baseClasses[variant];
  };

  // Tema renkleri - Yeni minimalist palet
  const getThemeClasses = (): string => {
    const themes = {
      default: 'text-foreground',
      muted: 'text-muted-foreground',
      primary: 'text-primary',
      accent: 'text-accent',
      gradient: 'bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary-hover',
      success: 'text-success',
      warning: 'text-warning',
      error: 'text-destructive',
    };

    return themes[theme];
  };

  // Responsive custom sizing
  const getResponsiveClasses = (): string => {
    if (!responsive) return '';

    const classes = [];
    if (responsive.mobile) classes.push(`text-${responsive.mobile}`);
    if (responsive.tablet) classes.push(`sm:text-${responsive.tablet}`);
    if (responsive.desktop) classes.push(`md:text-${responsive.desktop}`);

    return classes.join(' ');
  };

  const Component = getDefaultTag();
  const combinedClasses = cn(
    getVariantClasses(),
    getThemeClasses(),
    getResponsiveClasses(),
    className
  );

  // Animasyonlu versiyon
  if (animate) {
    const MotionComponent = motion[Component as keyof typeof motion] as React.ComponentType<HTMLMotionProps<any>>;

    return (
      <MotionComponent
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: animationDelay,
          ease: 'easeOut',
        }}
        className={combinedClasses}
      >
        {children}
      </MotionComponent>
    );
  }

  // Animasyonsuz versiyon
  return React.createElement(Component, { className: combinedClasses }, children);
}

// Convenience exports - Kolay kullanım için
export const H1 = (props: Omit<TextProps, 'variant'>) => <Text variant="h1" {...props} />;
export const H2 = (props: Omit<TextProps, 'variant'>) => <Text variant="h2" {...props} />;
export const H3 = (props: Omit<TextProps, 'variant'>) => <Text variant="h3" {...props} />;
export const H4 = (props: Omit<TextProps, 'variant'>) => <Text variant="h4" {...props} />;
export const H5 = (props: Omit<TextProps, 'variant'>) => <Text variant="h5" {...props} />;
export const H6 = (props: Omit<TextProps, 'variant'>) => <Text variant="h6" {...props} />;
export const Lead = (props: Omit<TextProps, 'variant'>) => <Text variant="lead" {...props} />;
export const Small = (props: Omit<TextProps, 'variant'>) => <Text variant="small" {...props} />;
export const Tiny = (props: Omit<TextProps, 'variant'>) => <Text variant="tiny" {...props} />;

