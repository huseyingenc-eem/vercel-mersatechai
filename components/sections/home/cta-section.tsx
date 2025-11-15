"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@components/ui/button";
import { ArrowRight, MessageSquare, Phone } from "lucide-react";

export function CTASection() {
  return (
    <div data-section="cta" className="relative w-full py-20 bg-gradient-to-b from-background to-secondary dark:from-black dark:to-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl sm:rounded-3xl border border-blue-500/20 p-6 sm:p-12 md:p-16 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10 text-center space-y-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
              >
                Projenizi Konuşalım
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-foreground/80 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed px-4"
              >
                İhtiyacınızı anlayalım ve size en uygun AI çözümünü birlikte belirleyelim.
                <br />
                <span className="text-muted-foreground">İlk görüşme tamamen ücretsizdir.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 w-full sm:w-auto"
                >
                  <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  İletişime Geç
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-accent text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 w-full sm:w-auto"
                >
                  <MessageSquare className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  WhatsApp
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="pt-6 sm:pt-8 flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base text-muted-foreground px-4"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Ücretsiz Görüşme</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>24 Saat İçinde Dönüş</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Teklif Zorunluluğu Yok</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
