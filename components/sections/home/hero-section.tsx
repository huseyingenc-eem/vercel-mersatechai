"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button, Spotlight, Card} from "@components/ui";
import { ArrowRight, Sparkles, Zap, Users } from "lucide-react";

export function HeroSection() {
  return (
    <div
      data-section="hero"
      className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-background via-background to-secondary/20 dark:from-black dark:via-black dark:to-blue-950/10 overflow-hidden"
    >
      {/* Spotlight effects */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />

      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Animated gradient orbs - Optimized for performance */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-1/4 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] opacity-20 will-change-transform"
        style={{ transform: 'translateZ(0)' }}
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 -right-1/4 w-[250px] h-[250px] sm:w-[450px] sm:h-[450px] md:w-[700px] md:h-[700px] bg-gradient-to-l from-purple-500 to-pink-500 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] opacity-20 will-change-transform"
        style={{ transform: 'translateZ(0)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-500 dark:text-blue-400" />
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              AI-Powered Customer Engagement
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">Müşteri İletişimini</span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
                Geleceğe Taşıyın
              </span>

            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Yapay zeka destekli chatbot&apos;larımızla müşteri memnuniyetini artırın,
            maliyetleri düşürün ve satışlarınızı{" "}
            <span className="text-blue-500 dark:text-blue-400 font-semibold">3x büyütün</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group text-base sm:text-lg px-8 py-6 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Ücretsiz Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-border hover:border-blue-500/50 text-foreground hover:bg-blue-500/5 text-base sm:text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300"
            >
              <span className="flex items-center">
                Projelerimizi İnceleyin
              </span>
            </Button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                icon: Zap,
                value: "7/24",
                label: "Kesintisiz Destek",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: Users,
                value: "%80",
                label: "Maliyet Azaltma",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Sparkles,
                value: "3x",
                label: "Daha Hızlı Yanıt",
                color: "from-blue-500 to-purple-500",
              },
            ].map((stat, index) => (
              <div key={index} className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-xl sm:group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-card/50 dark:bg-card/30 backdrop-blur-xl border border-border/50 rounded-xl sm:rounded-2xl p-3 sm:p-6 hover:border-blue-500/50 transition-all duration-300">
                    <div className={`inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.color} mb-2 sm:mb-4`}>
                      <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="text-2xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70 mb-1 sm:mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-sm text-muted-foreground font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background dark:from-black to-transparent" />
    </div>
  );
}

