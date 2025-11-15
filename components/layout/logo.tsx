"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 group ${className}`}>
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />

        {/* Logo Icon Container */}
        <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
          <Sparkles className="w-5 h-5 text-white animate-pulse" />
        </div>
      </motion.div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <motion.span
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 dark:from-blue-400 dark:via-purple-400 dark:to-blue-500"
          whileHover={{ scale: 1.02 }}
        >
          MERSA
        </motion.span>
        <span className="text-[10px] -mt-1 text-neutral-500 dark:text-neutral-400 font-medium tracking-wider">
          TECHNOLOGY
        </span>
      </div>
    </Link>
  );
}

