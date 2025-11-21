"use client";

import React from "react";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effects - Tema ile uyumlu hale getirildi */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sol üst: Primary (Turuncu) Glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-70" />
        
        {/* Sağ alt: Accent (Mavi/Cyan) Glow - Kontrast için */}
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-6 select-none">
          {/* Gradient metin: Primary'den Accent'e geçiş */}
          <span className="text-[120px] sm:text-[180px] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary-light to-accent drop-shadow-sm">
            404
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
          Sayfa Bulunamadı
        </h1>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
          Aradığınız sayfa taşınmış, silinmiş veya adresi değişmiş olabilir.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Ana Buton: global.css'deki warm gradient ve glow efekti */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary-warm text-white font-semibold rounded-xl hover:brightness-110 transition-all shadow-lg glow-primary active:scale-95"
          >
            <Home className="w-5 h-5" />
            Ana Sayfaya Dön
          </Link>

          {/* İkincil Buton: Border ve hover efektleri */}
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-xl hover:bg-secondary hover:text-primary transition-all active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
            Geri Git
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">
            Yardımcı olabilecek sayfalar:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/ai-otomasyon"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:underline"
            >
              AI Otomasyon
            </Link>
            <Link
              href="/hakkimizda"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:underline"
            >
              Hakkımızda
            </Link>
            <Link
              href="/iletisim"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:underline"
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}