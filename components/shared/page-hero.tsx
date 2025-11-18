"use client";

import React, { useEffect, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button, Badge, AnimatedOrbs, Spotlight, Lead, Tiny, TypewriterEffect, H1 } from "@/components/ui";
import { cn } from "@/lib/utils";
import { useSectionRegistry, SectionBgColor } from "@/context/section-context";

interface PageHeroProps {
  id?: string;
  sectionBg?: SectionBgColor;
  badge?: {
    icon?: React.ReactNode;
    text: string;
  };
  title: string | React.ReactNode | { text: string; className?: string }[];
  description: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundVariant?: "default" | "ai" | "gradient" | "dots" | "minimal" | "none";
  className?: string;
  children?: React.ReactNode;
}

export function PageHero({
  id: customId,
  sectionBg = "transparent",
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  backgroundVariant = "default",
  className = "",
  children,
}: PageHeroProps) {
  const generatedId = useId();
  const id = customId || generatedId;
  const { register } = useSectionRegistry();

  useEffect(() => {
    register({ id, bgColor: sectionBg });
  }, [id, sectionBg, register]);

  const getBackgroundElements = () => {
    if (backgroundVariant === "none") return null;
    switch (backgroundVariant) {
      case "ai":
      case "gradient":
        return (
          <>
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="blue" />
            <AnimatedOrbs variant="subtle" />
          </>
        );
      case "minimal":
        return (
          <>
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <AnimatedOrbs variant="minimal" />
          </>
        );
      case "dots":
        return (
          <>
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:24px_24px]" />
          </>
        );
      default:
        return <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />;
    }
  };

  const renderTitle = () => {
    if (Array.isArray(title)) {
      return <TypewriterEffect words={title} className="mb-4 sm:mb-6" />;
    }
    if (typeof title === 'string') {
      const words = title.split(" ").map(text => ({ text }));
      return <TypewriterEffect words={words} className="mb-4 sm:mb-6" />;
    }
    return (
      <H1 animate className="mb-4 sm:mb-6">
        {title}
      </H1>
    );
  };

  const titleAnimationDelay = Array.isArray(title)
    ? title.reduce((acc, word) => acc + word.text.length * 0.05, 0) + 0.5
    : 2.5;

  return (
    <div className={cn("relative min-h-screen flex items-center justify-center overflow-hidden", className)}>
      {backgroundVariant !== "none" && (
        <div className="absolute inset-0 w-full h-full z-0">{getBackgroundElements()}</div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-36 md:py-40 text-center">
        <AnimatePresence>
          {badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 sm:mb-8 flex justify-center"
            >
              <Badge icon={badge.icon} text={badge.text} />
            </motion.div>
          )}
        </AnimatePresence>

        {renderTitle()}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: titleAnimationDelay }}
        >
          <Lead theme="muted" className="max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
            {description}
          </Lead>

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryCta && (
                <Button
                  size="lg"
                  asChild
                  className="group"
                >
                  <a href={primaryCta.href}>
                    <span className="relative z-10 flex items-center">
                      {primaryCta.text}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </Button>
              )}
              {secondaryCta && (
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                >
                  <a href={secondaryCta.href}>{secondaryCta.text}</a>
                </Button>
              )}
            </div>
          )}
        </motion.div>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: titleAnimationDelay + 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: titleAnimationDelay + 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="flex flex-col items-center"
        >
          <Tiny theme="muted" className="tracking-wider uppercase mb-2 font-semibold">
            Aşağı Kaydır
          </Tiny>
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </div>
  );
}