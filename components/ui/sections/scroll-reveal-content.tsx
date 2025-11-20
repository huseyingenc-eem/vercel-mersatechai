"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface ScrollRevealItem {
  title: string;
  description: string;
  content?: React.ReactNode;
  image: string;
  imageAlt?: string;
}

interface ScrollRevealContentProps {
  items: ScrollRevealItem[];
  className?: string;
  contentClassName?: string;
  imageClassName?: string;
  layout?: "left" | "right";
}

export function ScrollRevealContent({
  items,
  className,
  contentClassName,
  imageClassName,
  layout = "left",
}: ScrollRevealContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Container'ın viewport'ta ne kadar görünür olduğunu hesapla
      const scrollProgress =
        (scrollPosition - containerTop + windowHeight / 2) / containerHeight;

      // Her item için eşit bölüm oluştur
      const itemIndex = Math.floor(scrollProgress * items.length);
      const clampedIndex = Math.max(0, Math.min(items.length - 1, itemIndex));

      setActiveIndex(clampedIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // İlk yüklemede çalıştır

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items.length]);

  return (
    <div
      ref={containerRef}
      className={cn("relative min-h-screen py-20", className)}
      style={{ height: `${items.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div
            className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center",
              layout === "right" && "lg:grid-flow-dense"
            )}
          >
            {/* Content Side */}
            <div
              className={cn(
                "space-y-8",
                contentClassName,
                layout === "right" && "lg:col-start-2"
              )}
            >
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    y: activeIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    "absolute inset-0 flex flex-col justify-center",
                    activeIndex !== index && "pointer-events-none"
                  )}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    {item.title}
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground mb-6">
                    {item.description}
                  </p>
                  {item.content && (
                    <div className="text-foreground">{item.content}</div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Image Side */}
            <div
              className={cn(
                "relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden",
                imageClassName,
                layout === "right" && "lg:col-start-1 lg:row-start-1"
              )}
            >
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    scale: activeIndex === index ? 1 : 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    "absolute inset-0",
                    activeIndex !== index && "pointer-events-none"
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              ))}

              {/* Progress Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {items.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "h-1 rounded-full transition-all duration-300",
                      activeIndex === index
                        ? "w-8 bg-white"
                        : "w-1 bg-white/50"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
