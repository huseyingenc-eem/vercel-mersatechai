"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, Check } from "lucide-react";
import { Button } from "@components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-20 bg-background/80 dark:bg-black/80 backdrop-blur-sm overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-blue-500 dark:text-blue-400" />
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Başlamaya Hazır mısınız?
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-foreground">İş Süreçlerinizi </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Yapay Zeka ile Güçlendirin
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Size özel otomasyon senaryosu tasarlayalım. Uzmanlarımızla ücretsiz danışmanlık alın.
          </p>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
          >
            {[
              "15 dakikalık ücretsiz analiz",
              "ROI hesaplama desteği",
              "İş süreçlerinize özel çözüm",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 justify-center sm:justify-start group">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group text-base sm:text-lg px-8 py-6 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Ücretsiz Keşif Toplantısı
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-border hover:border-blue-500/50 text-foreground hover:bg-blue-500/5 text-base sm:text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Demo Talebi
              </span>
            </Button>
          </motion.div>

          {/* Trust Badge */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground mt-8"
          >
            🔒 Verileriniz güvende • KVKK/GDPR uyumlu • 7/24 destek
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

