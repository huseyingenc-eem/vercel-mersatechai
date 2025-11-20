"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MousePointerClick, X } from "lucide-react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

// --- INLINE HOOK: useOutsideClick (Bağımlılık hatasını önlemek için) ---
function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  callback: Function
) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
}

type Card = {
  title: string;
  description: string;
  src: string;
  content: () => React.ReactNode;
};

// --- ANIMATION CONFIG ---
// Daha yumuşak (soft) bir geçiş için spring ayarları
const softTransition = {
  type: "spring",
  damping: 24,
  stiffness: 140,
  mass: 0.8
};

export function ExpandableCardGrid({ cards }: { cards: Card[] }) {
  const [active, setActive] = useState<Card | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  // Modal İçeriği
  const modalContent = (
    <AnimatePresence>
      {active && (
        <>
          {/* Overlay - Backdrop Blur ile daha modern */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm h-full w-full z-[9998]"
          />

          {/* Modal Wrapper */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              transition={softTransition}
              className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-card border border-border sm:rounded-3xl overflow-hidden shadow-2xl pointer-events-auto relative"
            >
              {/* Kapatma Butonu */}
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="absolute top-4 right-4 flex items-center justify-center bg-secondary text-secondary-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors rounded-full h-8 w-8 z-50 shadow-sm cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setActive(null);
                }}
              >
                <X className="w-4 h-4" />
              </motion.button>

              {/* Görsel */}
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-64 sm:h-80 sm:rounded-t-3xl object-cover object-center"
                />
              </motion.div>

              {/* İçerik Alanı */}
              <div className="flex-grow overflow-y-auto custom-scrollbar bg-card">
                <div className="flex justify-between  p-6 pb-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-2xl text-card-foreground"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-base text-muted-foreground mt-2"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="relative px-6 pb-8">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }} // İçerik geçişi biraz daha yavaş olabilir
                    className="text-sm text-muted-foreground leading-relaxed flex flex-col gap-4"
                  >
                    {active.content()}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {mounted ? createPortal(modalContent, document.body) : null}

      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6">
        {cards.map((card) => (
          <motion.li
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            transition={softTransition}
            className={cn(
              "group relative flex flex-col p-4 rounded-2xl cursor-pointer overflow-hidden",
              "bg-card border border-border hover:border-primary/50 shadow-sm hover:shadow-md",
              "transition-colors duration-300 h-full"
            )}
          >
            <div className="flex gap-4 flex-col w-full h-full">
              {/* Kart Görseli */}
              <motion.div layoutId={`image-${card.title}-${id}`} className="w-full">
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-52 w-full rounded-xl object-cover object-center shadow-sm"
                />
              </motion.div>

              {/* Kart Metinleri */}
              <div className="flex flex-col mt-2 mb-8"> {/* mb-8 buton için yer açar */}
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-semibold text-card-foreground text-lg group-hover:text-primary transition-colors"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-muted-foreground text-sm mt-1 line-clamp-2"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>

            {/* Tıklama İkonu - Her zaman görünür ve Global CSS (secondary) uyumlu */}
            <div className="absolute bottom-4 right-4">
               <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50 text-secondary-foreground text-xs font-medium border border-transparant group-hover:bg-primary group-hover:text-primary-foreground">
                  <MousePointerClick className="w-4 h-4" />
               </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}