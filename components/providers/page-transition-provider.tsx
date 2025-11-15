"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { AnimatePresence, motion } from "framer-motion";

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);

    // Sayfanın tüm içeriği yüklenene kadar bekle
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750); // Minimum loading süresi

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

