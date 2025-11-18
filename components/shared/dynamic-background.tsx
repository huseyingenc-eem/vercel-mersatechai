"use client";

import { usePathname } from "next/navigation";
import { BackgroundBeams } from "@/components/ui";
import { useEffect, useState } from "react";

export function DynamicBackground() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.1);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  // Base grid için opacity (arka plan çizgileri - opak olacak)
  const gridOpacity = isHomePage && !isScrolled ? 0.3 : 0.1;

  // Akan yıldızlar için opacity (her zaman aktif)
  const beamsOpacity = isHomePage && !isScrolled ? 1 : 0.6;

  return (
    <>
      {/* Base grid layer - opak arka plan */}
      <div
        className="fixed top-0 left-0 -z-10 h-full w-full transition-opacity duration-1000 pointer-events-none"
        style={{ opacity: gridOpacity }}
      >
        <BackgroundBeams className="absolute inset-0 [&_path[class*='opacity']]:!opacity-0" />
      </div>

      {/* Animated beams layer - her zaman görünür akan yıldızlar */}
      <div
        className="fixed top-0 left-0 -z-10 h-full w-full transition-opacity duration-1000 pointer-events-none"
        style={{ opacity: beamsOpacity }}
      >
        <BackgroundBeams className="absolute inset-0 [&_path[stroke*='paint0']]:!opacity-0" />
      </div>
    </>
  );
}
