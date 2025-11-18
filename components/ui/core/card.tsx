"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  index?: number;
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "minimal" | "elevated";
  transparent?: boolean;
  alignment?: "left" | "center" | "right";
}

export function Card({
  icon: Icon,
  title,
  description,
  index = 0,
  className,
  children,
  variant = "default",
  transparent = false,
  alignment = "center", // Varsayılan olarak ortaya hizalı
}: CardProps) {
  // Hizalama class'larını belirle
  const alignmentClasses = {
    left: "justify-start text-left",
    center: "justify-center text-center",
    right: "justify-end text-right",
  };

  const variants = {
    default: transparent
      ? "relative bg-transparent border-0 rounded-2xl p-6 hover:bg-card/80 transition-all duration-300 h-full"
      : "relative bg-card/50 dark:bg-card/30 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full",
    minimal: "space-y-4",
    elevated: "relative bg-card dark:bg-card/50 backdrop-blur-lg border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/40 hover:shadow-xl transition-all duration-300 h-full",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn("group relative", className)}
    >
      {/* Glow effect - Sadeleştirilmiş mavi ton */}
      {variant !== "minimal" && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none" />
      )}

      <div className={variants[variant]}>
        {/* Background Icon - Sağ üstte, küçük, yazının arkasında */}
        {Icon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            whileInView={{ opacity: 0.06, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -top-2 -right-2 sm:top-2 sm:right-2 opacity-[0.06] group-hover:opacity-[0.15] transition-all duration-500 pointer-events-none z-0"
          >
            <Icon
                className={cn(
                    "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-foreground transition-all duration-500 ease-out",
                    "group-hover:scale-110 group-hover:rotate-12",
                    // Hover'da renk değişimi
                    "group-hover:text-blue-500 dark:group-hover:text-blue-400"
                )}
            />
          </motion.div>
        )}

        {/* Content - z-index ile icon'un önünde, grid yapısı ile düzenli */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Başlık - Minimum yükseklik ile tüm kartlarda aynı hizalanma */}
          <h3 className={cn(
            "font-bold text-foreground mb-4 leading-tight min-h-[3.5rem] flex items-start",
            alignmentClasses[alignment],
            variant === "minimal" ? "text-xl" : "text-xl sm:text-2xl"
          )}>
            {title}
          </h3>

          {/* Açıklama - flex-1 ile kalan alanı doldurur */}
          <p className={cn(
            "text-sm text-muted-foreground leading-relaxed flex-1",
            alignment === "left" ? "text-left" : alignment === "right" ? "text-right" : "text-center"
          )}>
            {description}
          </p>

          {/* Children için alan varsa */}
          {children && <div className="mt-4">{children}</div>}
        </div>
      </div>
    </motion.div>
  );
}

