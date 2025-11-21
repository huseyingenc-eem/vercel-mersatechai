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
          className="relative w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6 text-primary-foreground" />
        </button>

        <Link href="/" className="flex flex-col group">
          <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            MERSA
          </span>
          <span className="text-[10px] -mt-1 text-slate-700 font-medium tracking-wider">
            TECHNOLOGY
          </span>
        </Link>
      </div>
    );
  }

  // Normal logo modu
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 group transition-transform duration-200 hover:scale-105 active:scale-95 ${className}`}
    >
      <div className="relative w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
        <Sparkles className="w-5 h-5 text-primary-foreground" />
      </div>

      <div className="flex flex-col">
        <span className="text-xl font-bold text-foreground">
          MERSA
        </span>
        <span className="text-[10px] -mt-1 text-slate-700 font-medium tracking-wider">
          TECHNOLOGY
        </span>
      </div>
    </Link>
  );
}

