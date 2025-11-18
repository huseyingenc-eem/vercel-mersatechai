"use client";

import React from "react";
import { motion } from "framer-motion";

export function AboutStorySection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Biz Kimiz */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 pointer-events-none" />

              <div className="relative bg-card/80 dark:bg-card/50 backdrop-blur-xl border border-border rounded-3xl p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Biz Kimiz?
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  MERSA Technology, işletmelerin yapay zekâyı karmaşık bir teknoloji olarak değil,
                  <span className="text-foreground font-semibold"> gerçek iş sonuçları üreten bir araç </span>
                  olarak kullanmasını sağlamak için kuruldu. Biz teknik jargonu azaltan, süreçleri
                  sadeleştiren ve işletmeler için kullanılabilir, ölçeklenebilir, sonuç odaklı AI çözümleri
                  üreten bir ekibiz.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Bizim Hikayemiz */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 pointer-events-none" />

              <div className="relative bg-card/80 dark:bg-card/50 backdrop-blur-xl border border-border rounded-3xl p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Bizim Hikâyemiz
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  MERSA Technology, teknolojiye merakla başlayan bir yolculuğun işletmelere gerçek değer
                  sunan bir AI şirketine dönüşmesidir. Kurucumuz
                  <span className="text-foreground font-semibold"> Hüseyin Genç&apos;in </span>
                  mühendislik ve yazılım disiplinini birleştiren bakış açısı, MERSA&apos;nın DNA&apos;sını
                  oluşturuyor: sade, ölçeklenebilir ve etkili AI otomasyon çözümleri.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

