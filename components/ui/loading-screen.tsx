"use client";

import React from "react";
import { motion } from "framer-motion";
import { Loader2, Brain } from "lucide-react";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background dark:bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-[120px]"
        />
      </div>

      {/* Loading Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Animated Logo/Icon */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl">
            <Brain className="w-10 h-10 text-white" />
          </div>

          {/* Outer ring */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full border-4 border-blue-500"
          />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-2"
        >
          <h3 className="text-xl font-bold text-foreground">Yükleniyor...</h3>
          <p className="text-sm text-muted-foreground">İçerik hazırlanıyor</p>
        </motion.div>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-1/2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

