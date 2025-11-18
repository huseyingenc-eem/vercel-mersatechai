"use client";

import React, { useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, PanInfo } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardStackProps<T> {
  items: T[];
  renderItem: (item: T, index: number, isActive: boolean) => React.ReactNode;
  cardWidth?: number;
  cardHeight?: number;
  className?: string;
}

const springConfig = {
  stiffness: 300,
  damping: 50,
  mass: 1,
};

export function InteractiveCardStack<T>({
  items,
  renderItem,
  cardWidth = 320,
  cardHeight = 420,
  className,
}: CardStackProps<T>) {
  const [activeIndex, setActiveIndex] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotate = useTransform(x, [-cardWidth / 2, cardWidth / 2], [-10, 10]);

  const handlePan = (_: any, info: PanInfo) => {
    x.set(info.offset.x);
    y.set(info.offset.y);
  };

  const handlePanEnd = (_: any, info: PanInfo) => {
    const yOffset = info.offset.y;
    const yVelocity = info.velocity.y;

    if (yOffset < -cardHeight / 4 || yVelocity < -500) {
      // Swipe Up
      setActiveIndex((prev) => (prev + 1));
    } else if (yOffset > cardHeight / 4 || yVelocity > 500) {
      // Swipe Down
      setActiveIndex((prev) => (prev - 1));
    }

    x.set(0);
    y.set(0);
  };

  const getSafeIndex = useCallback((index: number) => {
    return Math.max(0, Math.min(items.length - 1, index));
  }, [items.length]);

  const currentIndex = getSafeIndex(activeIndex);

  return (
    <div
      className={cn("relative flex items-center justify-center", className)}
      style={{ height: cardHeight + 80 }}
    >
      {items.map((item, index) => {
        const canDrag = index === currentIndex;
        const distance = Math.abs(index - currentIndex);

        if (distance > 2) return null;

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              width: cardWidth,
              height: cardHeight,
              x: canDrag ? xSpring : 0,
              y: canDrag ? ySpring : 0,
              rotate: canDrag ? rotate : 0,
              transformOrigin: "bottom center",
            }}
            animate={{
              y: -distance * 40,
              scale: 1 - distance * 0.05,
              rotate: distance * (index < currentIndex ? -1 : 1) * 3,
              zIndex: items.length - distance,
              opacity: distance > 1 ? 0 : 1,
            }}
            transition={{ duration: 0.5, type: "spring" }}
            drag={canDrag}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onPan={handlePan}
            onPanEnd={handlePanEnd}
          >
            {renderItem(item, index, canDrag)}
          </motion.div>
        );
      })}
    </div>
  );
}