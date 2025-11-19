"use client";

import { cn } from "@lib/utils";
import React, { useEffect, useState, useRef } from "react";

export const InfiniteMovingCards = ({
                                      items,
                                      direction = "left",
                                      speed = "fast",
                                      pauseOnHover = true,
                                      className,
                                    }: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Daha önce kopyalandıysa tekrar kopyalama (Duplicate kontrolü)
      if (scrollerRef.current.getAttribute("data-animated") === "true") {
        setStart(true);
        return;
      }

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
      scrollerRef.current.setAttribute("data-animated", "true");
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
            "--animation-direction",
            "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
            "--animation-direction",
            "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      }
    }
  };

  return (
      <div
          ref={containerRef}
          className={cn(
              // Mobilde maskeleme (kenarları silik yapma) daha dar olabilir, scroller sınıfı eklendi
              "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
              className
          )}
      >
        <ul
            ref={scrollerRef}
            className={cn(
                "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
                start && "animate-scroll", // animate-scroll sınıfı burada tetikleniyor
                pauseOnHover && "hover:[animation-play-state:paused]"
            )}
        >
          {items.map((item, idx) => (
              <li
                  // Mobilde genişlik ayarı: w-[300px] (mobil) -> md:w-[450px] (desktop)
                  className="w-[300px] md:w-[450px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-zinc-200 bg-gradient-to-b from-zinc-50 to-zinc-100 px-8 py-6 dark:border-zinc-700 dark:from-zinc-900 dark:to-zinc-950"
                  key={`${item.name}-${idx}`}
              >
                <blockquote>
                  <div
                      aria-hidden="true"
                      className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                  ></div>
                  <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                {item.quote}
              </span>
                  <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-semibold text-primary">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.title}
                  </span>
                </span>
                  </div>
                </blockquote>
              </li>
          ))}
        </ul>
      </div>
  );
};