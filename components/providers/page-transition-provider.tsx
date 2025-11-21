"use client";

import React, { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { LoadingScreen } from "@components/ui/forms/loading-screen";
import { motion } from "framer-motion";

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const pathname = usePathname();

  // Sayfa değiştiğinde loading'i tekrar göster
  useEffect(() => {
    setIsLoading(true);
    setShowContent(false);
  }, [pathname]);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
    // Loading tamamen bittikten sonra içeriği göster
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  }, []);

  return (
    <>
      {isLoading && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      {showContent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
