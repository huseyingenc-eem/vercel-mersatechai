"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@components/ui/core/card";
import { useCasesData } from "./data"; // path'i projene göre ayarla

const AUTO_PLAY_INTERVAL = 7000; // 7 saniye - daha yavaş döner

export function UseCasesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = useCasesData.length;
  const active = useCasesData[activeIndex];

  // Otomatik geçiş
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(id);
  }, [total]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative py-20 bg-secondary/50 dark:bg-blue-950/30 backdrop-blur-sm overflow-hidden">
      {/* Hafif background blur ve gradientler istersen buraya ekstra divler koyabilirsin */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Gerçek İş Senaryoları
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Başarılı AI otomasyon örnekleri ve somut sonuçlar
          </p>
        </motion.div>

        {/* Ana kart (desktop + tablet + mobil aynı yapıyı kullanıyor) */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.35 }}
            >
              <Card
                icon={active.icon}
                title={active.title}
                description={active.description}
                index={activeIndex}
                variant="elevated"
              >
                {/* Detay metni */}
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {active.details}
                </p>

                {/* Stat alanı */}
                <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between gap-4">
                  <span className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
                    {active.stats.label}
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-gradient">
                    {active.stats.value}
                  </span>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Pagination - Desktop / Tablet: 1 2 3 4 5 butonları */}
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="hidden sm:flex items-center justify-center gap-2">
              {useCasesData.map((_, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSelect(index)}
                    className={[
                      "w-9 h-9 rounded-full text-xs font-semibold flex items-center justify-center transition-all",
                      "border border-primary/60 bg-transparent text-primary",
                      "hover:bg-primary hover:text-primary-foreground",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "opacity-70",
                    ].join(" ")}
                    aria-label={`Senaryo ${index + 1}`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>

            {/* Mobil: "Senaryo 1 / 5" + küçük dotlar */}
            <div className="sm:hidden flex flex-col items-center gap-2 text-xs text-muted-foreground">
              <span>
                Senaryo{" "}
                <span className="font-semibold text-foreground">
                  {activeIndex + 1}
                </span>{" "}
                / {total}
              </span>
              <div className="flex items-center gap-1.5">
                {useCasesData.map((_, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleSelect(index)}
                      className={[
                        "h-1.5 rounded-full transition-all",
                        isActive
                          ? "w-5 bg-primary"
                          : "w-2 bg-border/70",
                      ].join(" ")}
                      aria-label={`Senaryo ${index + 1}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
