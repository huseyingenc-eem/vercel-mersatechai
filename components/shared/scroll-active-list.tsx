"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// ==================== TYPES ====================
export interface ScrollActiveItem {
  title: string;
  description?: string;
}

export interface ScrollActiveListProps {
  /** Başlık */
  heading: string;
  /** Başlıkta vurgulanacak kelime (opsiyonel) */
  headingHighlight?: string;
  /** Alt başlık */
  subheading?: string;
  /** Liste elemanları */
  items: ScrollActiveItem[];
  /** Özel ikon (varsayılan: Check) */
  icon?: LucideIcon;
  /** Layout modu */
  layout?: "single" | "two-column";
  /** Ek className */
  className?: string;
}

// ==================== COMPONENT ====================
export function ScrollActiveList({
  heading,
  headingHighlight,
  subheading,
  items,
  icon: Icon = Check,
  layout = "single",
  className,
}: ScrollActiveListProps) {
  // Başlığı highlight kelimesine göre böl
  const renderHeading = () => {
    if (!headingHighlight) {
      return <span>{heading}</span>;
    }

    const parts = heading.split(headingHighlight);
    return (
      <>
        {parts[0]}
        <span className="text-primary">{headingHighlight}</span>
        {parts[1] || ""}
      </>
    );
  };

  return (
    <div className={cn("py-16 sm:py-20", className)}>
      {/* Başlık Alanı */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
          {renderHeading()}
        </h2>
        {subheading && (
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {subheading}
          </p>
        )}
      </div>

      {/* Liste Alanı */}
      <div
        className={cn(
          "max-w-4xl mx-auto px-4",
          layout === "two-column" && "md:grid md:grid-cols-2 md:gap-x-8"
        )}
      >
        <div className={cn("flex flex-col gap-4", layout === "two-column" && "contents")}>
          {items.map((item, index) => (
            <ScrollActiveItem
              key={index}
              item={item}
              index={index}
              icon={Icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ==================== LIST ITEM COMPONENT ====================
interface ScrollActiveItemProps {
  item: ScrollActiveItem;
  index: number;
  icon: LucideIcon;
}

function ScrollActiveItem({ item, icon: Icon }: ScrollActiveItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0.4, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{
        once: false,
        margin: "-15% 0px -15% 0px",
        amount: 0.6,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
    >
      {/* Sol Taraftaki İkon */}
      <div className="relative flex-shrink-0">
        <motion.div
          initial={{
            scale: 1,
            backgroundColor: "transparent",
          }}
          whileInView={{
            scale: 1.1,
            backgroundColor: "hsl(var(--primary))",
          }}
          viewport={{
            once: false,
            margin: "-15% 0px -15% 0px",
            amount: 0.6,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border-2 border-primary/30"
        >
          <motion.div
            initial={{ color: "hsl(var(--primary))" }}
            whileInView={{ color: "white" }}
            viewport={{
              once: false,
              margin: "-15% 0px -15% 0px",
              amount: 0.6,
            }}
            transition={{ duration: 0.4 }}
          >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Metin Kısmı */}
      <div className="flex-1 min-w-0">
        {item.title && (
          <h3 className="font-semibold text-foreground text-base sm:text-lg mb-1">
            {item.title}
          </h3>
        )}
        {item.description && (
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

// ==================== SIMPLE VARIANT (only text, no title) ====================
export interface ScrollActiveSimpleListProps {
  heading: string;
  headingHighlight?: string;
  subheading?: string;
  items: string[];
  icon?: LucideIcon;
  layout?: "single" | "two-column";
  className?: string;
}

export function ScrollActiveSimpleList({
  heading,
  headingHighlight,
  subheading,
  items,
  icon = Check,
  layout = "single",
  className,
}: ScrollActiveSimpleListProps) {
  // String array'i ScrollActiveItem array'e dönüştür
  const formattedItems: ScrollActiveItem[] = items.map((item) => ({
    title: item,
  }));

  return (
    <ScrollActiveList
      heading={heading}
      headingHighlight={headingHighlight}
      subheading={subheading}
      items={formattedItems}
      icon={icon}
      layout={layout}
      className={className}
    />
  );
}
