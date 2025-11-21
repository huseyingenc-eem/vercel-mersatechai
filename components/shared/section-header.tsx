"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// ==================== TYPES ====================
export interface SectionHeaderProps {
  /** Badge metni (opsiyonel) */
  badge?: string;
  /** Badge ikonu (varsayılan: Sparkles) */
  badgeIcon?: LucideIcon;
  /** Ana başlık */
  heading: string;
  /** Başlıkta vurgulanacak kelime (primary renkte gösterilir) */
  headingHighlight?: string;
  /** Alt başlık */
  subheading?: string;
  /** Hizalama */
  align?: "left" | "center" | "right";
  /** Animasyon kullanılsın mı */
  animated?: boolean;
  /** Ek className */
  className?: string;
  /** Heading className */
  headingClassName?: string;
  /** Subheading className */
  subheadingClassName?: string;
}

// ==================== COMPONENT ====================
export function SectionHeader({
  badge,
  badgeIcon: BadgeIcon = Sparkles,
  heading,
  headingHighlight,
  subheading,
  align = "center",
  animated = true,
  className,
  headingClassName,
  subheadingClassName,
}: SectionHeaderProps) {
  // Başlığı highlight kelimesine göre böl
  const renderHeading = () => {
    if (!headingHighlight) {
      return heading;
    }

    const parts = heading.split(headingHighlight);
    if (parts.length === 1) {
      // Highlight kelimesi bulunamadı
      return heading;
    }

    return (
      <>
        {parts[0]}
        <span className="text-primary">{headingHighlight}</span>
        {parts[1] || ""}
      </>
    );
  };

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const content = (
    <div className={cn(alignClasses[align], className)}>
      {/* Badge */}
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6",
            align === "center" && "mx-auto"
          )}
        >
          <BadgeIcon className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">{badge}</span>
        </div>
      )}

      {/* Heading */}
      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4",
          headingClassName
        )}
      >
        {renderHeading()}
      </h2>

      {/* Subheading */}
      {subheading && (
        <p
          className={cn(
            "text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed",
            align === "center" && "mx-auto",
            align === "right" && "ml-auto",
            subheadingClassName
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}
