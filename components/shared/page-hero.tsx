"use client";

import React, { useEffect, useId } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button, Badge, Text, AnimatedOrbs, Spotlight } from "@/components/ui";
import { cn } from "@/lib/utils";
import { useSectionRegistry, SectionBgColor } from "@/context/section-context";

interface PageHeroProps {
  id?: string;
  sectionBg?: SectionBgColor;
  badge?: {
    icon?: React.ReactNode;
    text: string;
  };
  title: string | React.ReactNode;
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
  nextSectionBg?: string;
  className?: string;
  children?: React.ReactNode; // Stats grid vs. için
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

  const { register, sections } = useSectionRegistry();

  useEffect(() => {
    register({ id, bgColor: sectionBg });
  }, [id, sectionBg, register]);
  const getBackgroundElements = () => {
    // Background'u tamamen kapat
    if (backgroundVariant === "none") {
      return null;
    }

    switch (backgroundVariant) {
      case "ai":
      case "gradient":
        return (
          <>
            {/* BackgroundBeams ve Spotlight Container'dan gelecek */}
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
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          </>
        );

      default:
        return (
          <>
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
          </>
        );
    }
  };

  return (
    <div
      className={cn(
        `relative min-h-screen flex items-center justify-center overflow-hidden`,
        className
      )}
    >
      {/* Arka plan efektleri - Container'daki Beams'in üzerinde olmalı (z-0) */}
      {backgroundVariant !== "none" && (
        <div className="absolute inset-0 w-full h-full z-0">
          {getBackgroundElements()}
        </div>
      )}

      {/* İçerik - z-10 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-36 md:py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
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

          {/* Title */}
          {typeof title === "string" ? (
            <Text
              variant="h1"
              theme="default"
              animate
              animationDelay={0.3}
              className="mb-4 sm:mb-6"
            >
              {title}
            </Text>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-4 sm:mb-6"
            >
              {title}
            </motion.div>
          )}

          {/* Description */}
          <Text
            variant="lead"
            theme="muted"
            animate
            animationDelay={0.5}
            className="max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12"
          >
            {description}
          </Text>

          {/* CTA Buttons */}
          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {primaryCta && (
                <Button
                  size="lg"
                  asChild
                  className="relative overflow-hidden bg-gradient-primary hover:opacity-90 text-primary-foreground group text-base sm:text-lg px-8 py-6 glow-primary transition-all duration-300"
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
                  className="border-2 border-border hover:border-primary/40 text-foreground hover:bg-primary/5 text-base sm:text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300"
                >
                  <a href={secondaryCta.href}>{secondaryCta.text}</a>
                </Button>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Children - Stats grid vs. için - CTA butonlarının altında */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>
  );
}

