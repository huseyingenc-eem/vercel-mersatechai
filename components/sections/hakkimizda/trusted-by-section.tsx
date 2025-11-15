"use client";

import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@components/ui";

const technologies = [
  { name: "OpenAI", logo: "🤖" },
  { name: "Google Gemini", logo: "✨" },
  { name: "Telegram", logo: "✈️" },
  { name: "WhatsApp", logo: "💬" },
  { name: "Supabase", logo: "⚡" },
  { name: "Next.js", logo: "▲" },
];

export function TrustedBySection() {
  // Duplicate the array for seamless loop
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="relative w-full py-16 overflow-hidden bg-secondary/20">
      <BackgroundBeams className="absolute inset-0 z-0 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Teknoloji & İş Ortakları
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Güçlü Teknolojiler, Güvenilir Partnerler
          </h2>
        </motion.div>
      </div>

      {/* Infinite Scroll Container - Full Width */}
      <div className="relative w-full">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Content */}
        <div className="overflow-hidden py-8">
          <motion.div
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex gap-8"
          >
            {duplicatedTechs.map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none" />

                  <div className="relative w-40 h-24 bg-card/50 dark:bg-card/30 backdrop-blur-xl border border-border rounded-2xl hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center justify-center gap-2 p-4">
                    <span className="text-3xl">{tech.logo}</span>
                    <span className="text-sm font-semibold text-foreground text-center">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          En güncel AI teknolojileri ve güvenilir platformlarla çalışıyoruz
        </motion.p>
      </div>
    </section>
  );
}

