"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollContainerProps {
  children: React.ReactNode;
  className?: string;
  onScrollUpdate?: (progress: number) => void;
}

export function HorizontalScrollContainer({
  children,
  className,
  onScrollUpdate,
}: HorizontalScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // gsap.context, seçicileri (selectors) bu component'e özel kılar.
    // Böylece sayfada birden fazla container olsa bile çakışmazlar.
    const ctx = gsap.context((self) => {
      if (!contentRef.current || !containerRef.current) return;

      const contentWidth = contentRef.current.scrollWidth;
      const containerWidth = window.innerWidth; // Container genellikle viewport genişliğindedir
      const scrollAmount = -(contentWidth - containerWidth);

      // Eğer içerik ekrandan kısaysa kaydırmaya gerek yok
      if (contentWidth <= containerWidth) return;

      gsap.to(contentRef.current, {
        x: scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${contentWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true, // Ekran boyutu değişirse hesabı yenile
          onUpdate: (trigger) => {
            onScrollUpdate?.(trigger.progress);
          },
        },
      });
    }, containerRef); // Scope'u containerRef olarak belirledik

    // Component unmount olduğunda her şeyi temizle (Memory leak ve çakışma önleyici)
    return () => ctx.revert();
  }, [onScrollUpdate, children]);

  return (
    <div ref={containerRef} className={cn("relative h-screen overflow-hidden", className)}>
      <div
        ref={contentRef}
        className="flex flex-nowrap h-full w-max items-center px-4 md:px-10"
      >
        {children}
      </div>
    </div>
  );
}