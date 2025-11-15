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
}

export function Card({
  icon: Icon,
  title,
  description,
  index = 0,
  className,
  children,
  variant = "default",
}: CardProps) {
  const variants = {
    default: "relative bg-card/50 dark:bg-card/30 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 h-full",
    minimal: "space-y-4",
    elevated: "relative bg-card dark:bg-card/50 backdrop-blur-lg border border-border rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 h-full",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn("group relative", className)}
    >
      {/* Glow effect */}
      {variant !== "minimal" && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none" />
      )}

      <div className={variants[variant]}>
        {/* Background Icon - Sağ üstte, küçük, yazının arkasında */}
        {Icon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            whileInView={{ opacity: 0.06, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -top-2 -right-2 sm:top-2 sm:right-2 opacity-[0.06] group-hover:opacity-[0.12] transition-all duration-500 pointer-events-none z-0"
          >
            <Icon
              className={cn(
                "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-foreground transition-all duration-500 ease-out",
                "group-hover:scale-110 group-hover:rotate-12"
              )}
            />
          </motion.div>
        )}

        {/* Content - z-index ile icon'un önünde */}
        <div className="relative z-10">
          <h3 className={cn(
            "font-bold text-foreground mb-3 leading-tight",
            variant === "minimal" ? "text-xl" : "text-xl sm:text-2xl"
          )}>
            {title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>

          {children}
        </div>
      </div>
    </motion.div>
  );
}

