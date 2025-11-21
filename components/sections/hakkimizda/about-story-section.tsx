"use client";

import React from "react";
import { motion } from "framer-motion";
import { H2, Text } from "@components/ui";

export function AboutStorySection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Arka plan için opsiyonel hafif bir gradient veya grid eklenebilir, şimdilik temiz bıraktım */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left - Biz Kimiz */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="relative group h-full">
              {/* Global CSS Primary (Orange) Rengi ile Glow Efekti */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 pointer-events-none opacity-70" />

              <div className="relative h-full bg-card/80 dark:bg-card/60 backdrop-blur-xl border border-border rounded-3xl p-8 md:p-10 card-shadow flex flex-col justify-center">
                <H2 className="mb-6 text-foreground">
                  Biz Kimiz?
                </H2>
                
                <Text theme="muted" className="text-base md:text-lg">
                  MERSA Technology, işletmelerin yapay zekâyı karmaşık bir teknoloji olarak değil,{" "}
                  <span className="text-foreground font-semibold text-gradient">
                    gerçek iş sonuçları üreten bir araç
                  </span>{" "}
                  olarak kullanmasını sağlamak için kuruldu. Biz teknik jargonu azaltan, süreçleri
                  sadeleştiren ve işletmeler için kullanılabilir, ölçeklenebilir, sonuç odaklı AI çözümleri
                  üreten bir ekibiz.
                </Text>
              </div>
            </div>
          </motion.div>

          {/* Right - Bizim Hikayemiz */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }} // Hafif gecikme eklendi
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="relative group h-full">
              {/* Global CSS Accent (Blue-Cyan) Rengi ile Glow Efekti */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-chart-1/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 pointer-events-none opacity-70" />

              <div className="relative h-full bg-card/80 dark:bg-card/60 backdrop-blur-xl border border-border rounded-3xl p-8 md:p-10 card-shadow flex flex-col justify-center">
                <H2 className="mb-6 text-foreground">
                  Bizim Hikâyemiz
                </H2>
                
                <Text theme="muted" className="text-base md:text-lg">
                  MERSA Technology, teknolojiye merakla başlayan bir yolculuğun işletmelere gerçek değer
                  sunan bir AI şirketine dönüşmesidir. Kurucumuz{" "}
                  <span className="text-foreground font-semibold text-gradient">
                    Hüseyin Genç&apos;in
                  </span>{" "}
                  mühendislik ve yazılım disiplinini birleştiren bakış açısı, MERSA&apos;nın DNA&apos;sını
                  oluşturuyor: sade, ölçeklenebilir ve etkili AI otomasyon çözümleri.
                </Text>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}