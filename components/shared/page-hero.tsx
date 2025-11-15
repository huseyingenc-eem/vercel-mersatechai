"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";

interface PageHeroProps {
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
  backgroundVariant?: "default" | "ai" | "gradient" | "dots";
  className?: string;
}

export function PageHero({
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  backgroundVariant = "default",
  className = "",
}: PageHeroProps) {
  const getBackgroundElements = () => {
    switch (backgroundVariant) {
      case "ai":
        return (
          <>
            {/* Background Beams Effect */}
            <BackgroundBeams className="absolute inset-0" />

            {/* Animated Orbs - GPU Accelerated */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-[100px] will-change-transform"
              style={{ transform: 'translateZ(0)' }}
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-cyan-500 via-blue-500 to-indigo-500 rounded-full blur-[120px] will-change-transform"
              style={{ transform: 'translateZ(0)' }}
            />

            {/* Floating Particles - Reduced for performance */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full will-change-transform"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: 'translateZ(0)',
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </>
        );

      case "gradient":
        return (
          <>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-[120px] opacity-30 will-change-transform"
              style={{ transform: 'translateZ(0)' }}
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-purple-500 to-pink-500 rounded-full blur-[120px] opacity-30 will-change-transform"
              style={{ transform: 'translateZ(0)' }}
            />
          </>
        );

      case "dots":
        return (
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        );

      default:
        return null;
    }
  };

  return (
    <section className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20 dark:from-black dark:via-black dark:to-blue-950/10 ${className}`}>
      {getBackgroundElements()}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 backdrop-blur-sm mb-8"
            >
              {badge.icon}
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                {badge.text}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            {typeof title === "string" ? (
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/80">
                {title}
              </span>
            ) : (
              title
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            {description}
          </motion.p>

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
                  className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group text-base sm:text-lg px-8 py-6 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
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
                  className="border-2 border-border hover:border-blue-500/50 text-foreground hover:bg-blue-500/5 text-base sm:text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300"
                >
                  <a href={secondaryCta.href}>
                    {secondaryCta.text}
                  </a>
                </Button>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background dark:from-black to-transparent" />
    </section>
  );
}

