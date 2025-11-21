"use client";

import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Container } from "@/components/shared";
import { cn } from "@/lib/utils";
import { Phone, MessageSquare } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsapParallax } from "@/hooks/use-gsap-animation";

gsap.registerPlugin(ScrollTrigger);

const ctaIconMap = {
  phone: Phone,
  message: MessageSquare,
} as const;

// ==================== TYPES ====================
export interface CTAButton {
  text: string;
  icon?: keyof typeof ctaIconMap;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "outline" | "ghost";
}

export interface TrustIndicator {
  text: string;
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
}

export type CTAVariant = "default" | "minimal" | "gradient" | "compact" | "footer-above";

export interface CTASectionProps {
  variant?: CTAVariant;
  heading: string;
  description: string;
  subDescription?: string;
  primaryButton?: CTAButton;
  secondaryButton?: CTAButton;
  trustIndicators?: TrustIndicator[];
  id?: string;
  className?: string;
  containerPadding?: string;
}

// ==================== VARIANT STYLES ====================
const variantStyles = {
  default: {
    container: "py-20",
    background: "bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rounded-2xl sm:rounded-3xl border border-primary/20",
    padding: "p-6 sm:p-12 md:p-16",
    titleSize: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
    descSize: "text-base sm:text-lg md:text-xl lg:text-2xl",
  },
  minimal: {
    container: "py-16",
    background: "bg-card/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-border",
    padding: "p-6 sm:p-10 md:p-12",
    titleSize: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
    descSize: "text-sm sm:text-base md:text-lg",
  },
  gradient: {
    container: "py-20",
    background: "bg-gradient-primary-warm rounded-2xl sm:rounded-3xl border-0 shadow-2xl",
    padding: "p-8 sm:p-14 md:p-20",
    titleSize: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
    descSize: "text-base sm:text-lg md:text-xl lg:text-2xl",
    textColor: "text-white",
  },
  compact: {
    container: "py-12",
    background: "bg-muted/30 rounded-xl border border-border/50",
    padding: "p-4 sm:p-6 md:p-8",
    titleSize: "text-xl sm:text-2xl md:text-3xl",
    descSize: "text-sm sm:text-base",
  },
  "footer-above": {
    container: "py-16 mb-0",
    background: "bg-gradient-to-t from-primary/5 via-background to-background rounded-t-3xl border-t border-x border-border",
    padding: "p-6 sm:p-12 md:p-16",
    titleSize: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
    descSize: "text-sm sm:text-base md:text-lg",
  },
};

// ==================== COMPONENT ====================
export function CTASection({
  variant = "default",
  heading,
  description,
  subDescription,
  primaryButton,
  secondaryButton,
  trustIndicators,
  id = "contact",
  className,
  containerPadding,
}: CTASectionProps) {
  const styles = variantStyles[variant];
  const isGradientVariant = variant === "gradient";
  const sectionRef = useGsapParallax<HTMLDivElement>({ y: -50, speed: 1.2 });
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      // Staggered Entrance Animation
      timelineRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          once: true,
        },
      });

      timelineRef.current
        .from(".gsap-cta-heading", { opacity: 0, y: 20, duration: 0.5 })
        .from(".gsap-cta-description", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
        .from(".gsap-cta-buttons", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
        .from(".gsap-cta-trust", { opacity: 0, duration: 0.5 }, "-=0.2");
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);

  const renderButton = (button: CTAButton, isPrimary: boolean) => {
    const ButtonIcon = button.icon ? ctaIconMap[button.icon] : null;
    const buttonVariant = button.variant || (isPrimary ? "default" : "outline");

    const buttonClasses = isPrimary
      ? isGradientVariant
        ? "bg-white text-primary hover:bg-white/90 group text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 w-full sm:w-auto font-semibold"
        : "bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary-dark text-white group text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 w-full sm:w-auto font-semibold"
      : isGradientVariant
        ? "border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 w-full sm:w-auto"
        : "border-border text-foreground hover:bg-accent/10 text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 w-full sm:w-auto";

    const content = (
      <>
        {ButtonIcon && <ButtonIcon className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />}
        {button.text}
        {isPrimary && <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />}
      </>
    );

    if (button.href) {
      return (
        <Button size="lg" variant={buttonVariant as any} className={buttonClasses} asChild>
          <a href={button.href}>{content}</a>
        </Button>
      );
    }

    return (
      <Button size="lg" variant={buttonVariant as any} className={buttonClasses} onClick={button.onClick}>
        {content}
      </Button>
    );
  };

  return (
    <Container id={id} sectionBg="transparent" className={cn(containerPadding || styles.container, className)} animate={false}>
      <div ref={sectionRef} className="relative">
        <div className={cn("relative overflow-hidden", styles.background, styles.padding)}>
          {isGradientVariant && (
            <>
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </>
          )}

          <div className="relative z-10 text-center space-y-8">
            <h2
              className={cn(
                "gsap-cta-heading",
                styles.titleSize,
                "font-bold",
                isGradientVariant ? "text-white" : "text-foreground"
              )}
            >
              {heading}
            </h2>

            <div
              className={cn(
                "gsap-cta-description",
                styles.descSize,
                "max-w-3xl mx-auto leading-relaxed px-4",
                isGradientVariant ? "text-white/90" : "text-foreground/80"
              )}
            >
              <p>{description}</p>
              {subDescription && (
                <>
                  <br />
                  <span className={isGradientVariant ? "text-white/70" : "text-muted-foreground"}>
                    {subDescription}
                  </span>
                </>
              )}
            </div>

            {(primaryButton || secondaryButton) && (
              <div className="gsap-cta-buttons flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                {primaryButton && renderButton(primaryButton, true)}
                {secondaryButton && renderButton(secondaryButton, false)}
              </div>
            )}

            {trustIndicators && trustIndicators.length > 0 && (
              <div className="gsap-cta-trust pt-6 sm:pt-8 flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base px-4">
                {trustIndicators.map((indicator, index) => {
                  const IndicatorIcon = indicator.icon;
                  return (
                    <div key={index} className="flex items-center gap-2">
                      {IndicatorIcon ? (
                        <IndicatorIcon className={cn("w-4 h-4", isGradientVariant ? "text-white/80" : "text-success")} />
                      ) : (
                        <div className={cn("w-2 h-2 rounded-full", isGradientVariant ? "bg-white/80" : "bg-success")} />
                      )}
                      <span className={isGradientVariant ? "text-white/80" : "text-muted-foreground"}>
                        {indicator.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
