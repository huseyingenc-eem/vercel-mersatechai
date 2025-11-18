"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ChevronLeft } from "lucide-react";

interface LogoProps {
  className?: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
}

export function Logo({ className = "", showBackButton = false, onBackClick }: LogoProps) {
  // Geri butonu modunda
  if (showBackButton && onBackClick) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <button
          onClick={onBackClick}
          className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <div className="flex flex-col">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 dark:from-blue-400 dark:via-purple-400 dark:to-blue-500">
            MERSA
          </span>
          <span className="text-[10px] -mt-1 text-neutral-500 dark:text-neutral-400 font-medium tracking-wider">
            TECHNOLOGY
          </span>
        </div>
      </div>
    );
  }

  // Normal logo modu
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 group transition-transform duration-200 hover:scale-105 active:scale-95 ${className}`}
    >
      <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
        <Sparkles className="w-5 h-5 text-white" />
      </div>

      <div className="flex flex-col">
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 dark:from-blue-400 dark:via-purple-400 dark:to-blue-500">
          MERSA
        </span>
        <span className="text-[10px] -mt-1 text-neutral-500 dark:text-neutral-400 font-medium tracking-wider">
          TECHNOLOGY
        </span>
      </div>
    </Link>
  );
}

