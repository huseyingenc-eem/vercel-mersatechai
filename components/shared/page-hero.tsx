"use client";

import React, { useEffect, useId, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button, Badge, AnimatedOrbs, Lead, Tiny, TypewriterEffect, H1 } from "@/components/ui";
import { cn } from "@/lib/utils";
import { useSectionRegistry, SectionBgColor } from "@/context/section-context";
import { useGsapStagger, useGsapFadeIn } from "@/hooks/use-gsap-animation";
import { AnimationWrapper } from "@/components/ui/animations/AnimationWrapper";

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

  const ctaRef = useGsapStagger<HTMLDivElement>(".gsap-cta-item", { delay: 2.8, y: 30 });
  const scrollIndicatorRef = useGsapFadeIn<HTMLDivElement>({ delay: 3.5, y: 20 });

  useEffect(() => {
    register({ id, bgColor: sectionBg });
  }, [id, sectionBg, register]);

  const getBackgroundElements = () => {
    if (backgroundVariant === "none") return null;
    switch (backgroundVariant) {
      case "ai":
      case "gradient":
        return <AnimatedOrbs variant="subtle" />;
      case "minimal":
        return <AnimatedOrbs variant="minimal" />;
      case "dots":
        return (
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:24px_24px]" />
        );
      default:
        return null;
    }
  };

  const titleAnimationDelay = Array.isArray(title)
    ? title.reduce((acc, word) => acc + word.text.length * 0.05, 0.5) + 0.5
    : typeof title === "string"
      ? title.split(" ").length * 0.1 + 0.5
      : 1;

  const renderTitle = () => {
    if (Array.isArray(title)) {
      return (
          <TypewriterEffect words={title} className="mb-4 sm:mb-6" cursorClassName="bg-primary" />
      );
    }
    if (typeof title === 'string') {
      const words = title.split(" ").map(text => ({ text }));
      return (
          <TypewriterEffect words={words} className="mb-4 sm:mb-6" cursorClassName="bg-primary" />
      );
    }
    return (
      <AnimationWrapper animationType="fadeIn" animationOptions={{ delay: 0.8, y: 20 }}>
        <H1 animate className="mb-4 sm:mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-hover pb-1">
          {title}
        </H1>
      </AnimationWrapper>
    );
  };

  return (
    <div className={cn("relative min-h-screen flex items-center justify-center overflow-hidden", className)}>
      {backgroundVariant !== "none" && (
        <div className="absolute inset-0 w-full h-full z-0">{getBackgroundElements()}</div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-36 md:py-40 text-center">
        {badge && (
          <AnimationWrapper animationType="fadeIn" animationOptions={{ delay: 0.2 }}>
            <div className="mb-6 sm:mb-8 flex justify-center">
                <Badge icon={badge.icon} text={badge.text} />
            </div>
          </AnimationWrapper>
        )}

        {renderTitle()}

        <AnimationWrapper animationType="fadeIn" animationOptions={{ delay: titleAnimationDelay + 0.5, y: 20 }}>
            <Lead theme="muted" className="max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
                {description}
            </Lead>
        </AnimationWrapper>

        {(primaryCta || secondaryCta) && (
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryCta && (
                <div className="gsap-cta-item">
                    <Button
                      size="lg"
                      asChild
                      className="group glow-primary transition-all duration-300 hover:scale-105"
                    >
                      <a href={primaryCta.href}>
                        <span className="relative z-10 flex items-center">
                          {primaryCta.text}
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </a>
                    </Button>
                </div>
              )}
              {secondaryCta && (
                <div className="gsap-cta-item">
                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="hover:bg-accent hover:text-accent-foreground"
                    >
                      <a href={secondaryCta.href}>{secondaryCta.text}</a>
                    </Button>
                </div>
              )}
            </div>
        )}

        {children && (
           <AnimationWrapper animationType="fadeIn" animationOptions={{ delay: titleAnimationDelay + 1, y: 30 }}>
            <div>{children}</div>
          </AnimationWrapper>
        )}
      </div>

      <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div
          className="flex flex-col items-center"
        >
          <Tiny theme="muted" className="tracking-wider uppercase mb-2 font-semibold">
            Aşağı Kaydır
          </Tiny>
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}