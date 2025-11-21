"use client";

import React, { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Simüle edilmiş yükleme progress'i
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Rastgele artış (daha doğal görünüm için)
        const increment = Math.random() * 12 + 3;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // %100 olunca çıkış animasyonu başlat
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsExiting(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  useEffect(() => {
    // Çıkış animasyonu bittikten sonra onComplete çağır
    if (isExiting && onComplete) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1200); // Animasyon süresi kadar bekle
      return () => clearTimeout(timer);
    }
  }, [isExiting, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] loading-screen ${
        isExiting ? "loading-screen-exit" : ""
      }`}
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="loading-pulse-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px]" />
      </div>

      {/* Center Brand Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white/90 tracking-wider">
          MERSA
        </h1>
      </div>

      {/* Bottom Right Progress */}
      <div className="absolute bottom-8 right-8 flex flex-col items-end gap-4">
        {/* Progress Text */}
        <div className="flex items-baseline gap-1">
          <span className="text-6xl md:text-8xl font-bold text-white tabular-nums">
            {Math.round(progress)}
          </span>
          <span className="text-2xl md:text-3xl font-medium text-white/70">%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-48 md:w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Text */}
        <p className="text-sm text-white/60 font-medium">
          {progress < 100 ? "Yükleniyor..." : "Hazır"}
        </p>
      </div>

      {/* Animated Lines (decorative) */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div
          className="h-full bg-white/40 transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
