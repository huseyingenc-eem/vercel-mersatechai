"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimationWrapper } from "../animations/AnimationWrapper";
import { useGsapHover } from "@/hooks/use-gsap-animation";

type AnimationType = 'fadeIn' | 'reveal' | 'clipReveal' | 'scale';

interface CardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  index?: number;
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "minimal" | "elevated" | "flat";
  transparent?: boolean;
  alignment?: "left" | "center" | "right";
  animate?: boolean;
  animationType?: AnimationType;
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
  alignment = "center",
  animate = false,
  animationType = 'clipReveal',
}: CardProps) {
  const alignmentClasses = {
    left: "justify-start text-left",
    center: "justify-center text-center",
    right: "justify-end text-right",
  };

  const iconRef = useGsapHover<HTMLDivElement>({ scale: 1.2 });

  const variants = {
    default: transparent
      ? "relative bg-transparent border-0 rounded-2xl p-6 hover:bg-card/80 transition-all duration-300 h-full"
      : "relative bg-card/50 dark:bg-card/30 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 h-full card-shadow",
    
    minimal: "space-y-4",
    
    elevated: "relative bg-card dark:bg-card/50 backdrop-blur-lg border border-border rounded-2xl p-6 sm:p-8 shadow-lg hover:border-primary/40 hover:shadow-xl transition-all duration-300 h-full card-shadow-lg",
    
    flat: "relative bg-card dark:bg-card/50 backdrop-blur-lg border border-border rounded-2xl p-6 sm:p-8 h-full",
  };

  const cardContent = (
    <div className={cn("group relative", className)}>
      {variant === "elevated" && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none" />
      )}

      <div className={variants[variant]}>
        {Icon && (
          <div ref={iconRef} className="absolute -top-2 -right-2 sm:top-2 sm:right-2 opacity-[0.06] transition-all duration-500 pointer-events-none z-0">
            <Icon
              className={cn(
                "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-foreground transition-all duration-500 ease-out",
                "group-hover:scale-110 group-hover:rotate-12",
                "group-hover:text-primary dark:group-hover:text-primary"
              )}
            />
          </div>
        )}

        <div className="relative z-10 flex flex-col h-full">
          <h3 className={cn(
            "font-bold text-foreground mb-4 leading-tight min-h-[3.5rem] flex items-start",
            alignmentClasses[alignment],
            variant === "minimal" ? "text-xl" : "text-xl sm:text-2xl"
          )}>
            {title}
          </h3>

          <p className={cn(
            "text-sm text-muted-foreground leading-relaxed",
            alignment === "left" ? "text-left" : alignment === "right" ? "text-right" : "text-center"
          )}>
            {description}
          </p>

          {children && <div className="mt-4 flex-grow flex flex-col">{children}</div>}
        </div>
      </div>
    </div>
  );

  if (animate) {
    return (
      <AnimationWrapper animationType={animationType} animationOptions={{ delay: index * 0.1 }}>
        {cardContent}
      </AnimationWrapper>
    );
  }

  return cardContent;
}