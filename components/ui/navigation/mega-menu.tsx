"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import type { NavItem } from "@config/site-config";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Text } from "@/components/ui/typography/text";

interface MegaMenuProps {
  items: NavItem[];
  parentCategory?: NavItem; // Header'dan gelen ana nav item (İş Süreçleri / AI Otomasyon)
  openNestedSubmenu: string | null;
  setOpenNestedSubmenu: (label: string | null) => void;
  isMobile?: boolean;
}

// Menü resimleri (label ile bire bir aynı olmalı)
const menuImages: Record<string, string[]> = {
  "İş Süreçleri": [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format",
  ],
  "AI Otomasyon": [
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format",
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format",
  ],
  default: [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format",
  ],
};

export function MegaMenu({
  items,
  parentCategory,
  openNestedSubmenu,
  setOpenNestedSubmenu,
  isMobile = false,
}: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>(
    items[0]?.label || ""
  );

  useEffect(() => {
    setOpenNestedSubmenu(null);
  }, [activeCategory, setOpenNestedSubmenu]);

  const activeItem = items.find((item) => item.label === activeCategory);
  const parentLabel = parentCategory?.label ?? "Kategoriler";
  const parentHref = parentCategory?.href ?? "#";

  const images =
    menuImages[parentCategory?.label ?? activeCategory] || menuImages.default;

  const hasChildren =
    !!activeItem?.children && activeItem.children.length > 0;

  // Açıklama: sadece alt kategorisi olmayan itemlarda gösterilecek
  const description =
    !hasChildren && (activeItem?.description || parentCategory?.description || "");

  // ================= MOBİL GÖRÜNÜM =================
  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="fixed inset-0 z-50 bg-background overflow-y-auto"
        style={{ top: "64px" }}
      >
        <div className="p-4 space-y-4">
          {/* ÜST: Ana kategori etiketi (tamamen saydam, tıklanabilir) */}
          <div className="px-2 mb-1">
            {parentCategory ? (
              <a
                href={parentHref}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary"
              >
                <span className="uppercase tracking-wider">
                  {parentLabel}
                </span>
                <ArrowRight className="w-3 h-3" />
              </a>
            ) : (
              <Text
                variant="tiny"
                theme="muted"
                className="uppercase tracking-wider"
              >
                Kategoriler
              </Text>
            )}
          </div>

          {/* SOL: Kategori listesi */}
          <div className="space-y-2">
            {items.map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveCategory(item.label)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all bg-transparent ${activeCategory === item.label
                  ? "border border-primary/70"
                  : "border border-transparent hover:border-border"
                  }`}
              >
                <div className="flex items-center justify-between">
                  <Text
                    variant="small"
                    theme={
                      activeCategory === item.label ? "primary" : "default"
                    }
                    className="font-medium"
                  >
                    {item.label}
                  </Text>
                  <ChevronRight
                    className={`w-4 h-4 ${activeCategory === item.label
                      ? "text-primary"
                      : "text-muted-foreground"
                      }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* ORTA: Alt kategoriler veya açıklama */}
          <AnimatePresence mode="wait">
            {activeItem && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="space-y-3 pt-4 border-t border-border"
              >
                {/* Başlık: her zaman link gibi dursun */}
                <a
                  href={activeItem.href}
                  className="inline-flex items-center gap-2 px-2"
                >
                  <Text
                    variant="h6"
                    theme="primary"
                    className="font-semibold"
                  >
                    {activeItem.label}
                  </Text>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </a>

                {hasChildren ? (
                  // Alt kategoriler listesi
                  <div className="space-y-2">
                    {activeItem.children!.map((child) => (
                      <div key={child.label}>
                        {child.children ? (
                          <>
                            <button
                              onClick={() =>
                                setOpenNestedSubmenu(
                                  openNestedSubmenu === child.label
                                    ? null
                                    : child.label
                                )
                              }
                              className={`w-full text-left px-4 py-2.5 rounded-lg transition-all bg-transparent ${openNestedSubmenu === child.label
                                ? "border border-primary/70"
                                : "border border-transparent hover:border-border"
                                }`}
                            >
                              <div className="flex items-center justify-between">
                                <Text
                                  variant="small"
                                  theme={
                                    openNestedSubmenu === child.label
                                      ? "primary"
                                      : "default"
                                  }
                                >
                                  {child.label}
                                </Text>
                                <div className="flex items-center gap-2">
                                  <Text
                                    variant="tiny"
                                    theme="muted"
                                    className="px-1.5 py-0.5 rounded bg-primary/5"
                                  >
                                    {child.children.length}
                                  </Text>
                                  <ChevronRight
                                    className={`w-3.5 h-3.5 transition-transform ${openNestedSubmenu === child.label
                                      ? "rotate-90 text-primary"
                                      : "text-muted-foreground"
                                      }`}
                                  />
                                </div>
                              </div>
                            </button>

                            <AnimatePresence>
                              {openNestedSubmenu === child.label && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.15 }}
                                  className="mt-1 pl-4 space-y-1"
                                >
                                  {child.children.map((deepChild) => (
                                    <a
                                      key={deepChild.label}
                                      href={deepChild.href}
                                      className="block py-2 px-3 rounded-lg bg-transparent hover:bg-primary/5 transition-all"
                                    >
                                      <Text variant="small" theme="muted">
                                        {deepChild.label}
                                      </Text>
                                    </a>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <a
                            href={child.href}
                            className="block px-4 py-2.5 rounded-lg bg-transparent border border-primary/40 hover:border-primary transition-all"
                          >
                            <Text variant="small">{child.label}</Text>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                ) : description ? (
                  // Alt kategori yoksa: sadece açıklama
                  <div className="py-4 px-2">
                    <Text
                      variant="small"
                      theme="muted"
                      className="leading-relaxed"
                    >
                      {description}
                    </Text>
                  </div>
                ) : null}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  }

  // ================= DESKTOP GÖRÜNÜM =================
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="absolute left-0 right-0 top-full w-full bg-background border-b border-border shadow-2xl"
      style={{
        marginTop: "-1px",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.16)",
        minHeight: "480px",
        maxHeight: "480px",
      }}
      onMouseLeave={() => setOpenNestedSubmenu(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* SOL: Ana kategori etiketi + kategori listesi */}
          <div
            className="lg:col-span-3 space-y-2"
            onMouseEnter={() => setOpenNestedSubmenu(null)}
          >
            <div className="px-3 mb-1">
              {parentCategory ? (
                <a
                  href={parentHref}
                  className="inline-flex items-center gap-1 font-semibold text-primary"
                >
                  <span className="uppercase tracking-wider">
                    {parentLabel}
                  </span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              ) : (
                <Text
                  variant="small"
                  theme="muted"
                  className="uppercase tracking-wider"
                >
                  Kategoriler
                </Text>
              )}
            </div>


            {items.map((item) => (
              <button
                key={item.label}
                onMouseEnter={() => setActiveCategory(item.label)}
                onClick={() => setActiveCategory(item.label)}
                className={`w-full text-left px-3 py-1 rounded-lg transition-all group bg-transparent ${activeCategory === item.label
                  ? "border border-primary/70"
                  : "border border-transparent hover:border-border"
                  }`}
              >
                <div className="flex items-center justify-between">
                  <Text
                    variant="small"
                    theme={
                      activeCategory === item.label ? "primary" : "default"
                    }
                    className="font-medium"
                  >
                    {item.label}
                  </Text>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${activeCategory === item.label
                      ? "translate-x-1 text-primary"
                      : "text-muted-foreground group-hover:translate-x-1"
                      }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* ORTA: Alt başlıklar veya açıklama */}
          <div className="lg:col-span-5 border-l border-r border-border px-6">
            <AnimatePresence mode="wait">
              {activeItem && (
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {/* Başlık: link olduğu direkt belli */}
                  <a
                    href={activeItem.href}
                    className="group inline-flex items-center gap-2"
                  >
                    <Text
                      variant="tiny"
                      theme="primary"
                      className="uppercase tracking-wider font-semibold"
                    >
                      {activeItem.label}
                    </Text>
                    <ArrowRight className="w-3 h-3 text-primary" />
                  </a>

                  {hasChildren ? (
                    <div className="space-y-1 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                      {activeItem.children!.map((child) => (
                        <div key={child.label}>
                          {child.children ? (
                            <button
                              onClick={() =>
                                setOpenNestedSubmenu(
                                  openNestedSubmenu === child.label
                                    ? null
                                    : child.label
                                )
                              }
                              onMouseEnter={() =>
                                setOpenNestedSubmenu(child.label)
                              }
                              className={`w-full text-left flex items-center justify-between py-2.5 px-3 rounded-md transition-all bg-transparent ${openNestedSubmenu === child.label
                                ? "border border-primary/70"
                                : "border border-transparent hover:border-border"
                                }`}
                            >
                              <Text
                                variant="small"
                                theme={
                                  openNestedSubmenu === child.label
                                    ? "primary"
                                    : "default"
                                }
                                className="font-medium"
                              >
                                {child.label}
                              </Text>
                              <div className="flex items-center gap-1">
                                <Text
                                  variant="tiny"
                                  theme="primary"
                                  className="px-1.5 py-0.5 rounded bg-primary/5 font-medium"
                                >
                                  {child.children.length}
                                </Text>
                                <ChevronRight
                                  className={`w-3.5 h-3.5 ${openNestedSubmenu === child.label
                                    ? "text-primary"
                                    : "text-muted-foreground"
                                    }`}
                                />
                              </div>
                            </button>
                          ) : (
                            <a
                              href={child.href}
                              className="block py-2.5 px-3 rounded-md bg-transparent border border-transparent hover:border-primary transition-all"
                            >
                              <Text variant="small">{child.label}</Text>
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : description ? (
                    // Alt menü yoksa: açıklama
                    <div className="py-6 px-2">
                      <Text
                        variant="small"
                        theme="muted"
                        className="leading-relaxed"
                      >
                        {description}
                      </Text>
                    </div>
                  ) : null}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* SAĞ: Nested alt kategoriler veya carousel */}
          <div className="lg:col-span-4 hidden lg:block">
            <AnimatePresence mode="wait">
              {openNestedSubmenu ? (
                // Alt kategorinin alt kategorileri
                <motion.div
                  key="subcategories"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <Text
                    variant="tiny"
                    theme="muted"
                    className="uppercase tracking-wider px-3"
                  >
                    {openNestedSubmenu}
                  </Text>

                  <div className="space-y-1 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {activeItem?.children
                      ?.find((c) => c.label === openNestedSubmenu)
                      ?.children?.map((deepChild) => (
                        <a
                          key={deepChild.label}
                          href={deepChild.href}
                          className="block py-2.5 px-3 rounded-lg bg-transparent hover:bg-primary/5 transition-all group"
                        >
                          <Text
                            variant="small"
                            theme="default"
                            className="group-hover:text-primary transition-colors"
                          >
                            {deepChild.label}
                          </Text>
                        </a>
                      ))}
                  </div>
                </motion.div>
              ) : (
                // Carousel + ana kategori açıklaması (varsa)
                <motion.div
                  key="carousel"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {parentCategory?.description && (
                    <div className="space-y-2 px-1">
                      <Text
                        variant="small"
                        theme="muted"
                        className="leading-relaxed"
                      >
                        {parentCategory.description}
                      </Text>
                    </div>
                  )}

                  <div className="w-full h-[320px] rounded-2xl overflow-hidden shadow-xl border border-border">
                    <Carousel autoplay autoplayDelay={4000} className="w-full h-full">
                      <CarouselContent className="h-full">
                        {images.map((image, index) => (
                          <CarouselItem key={index} className="h-full">
                            <div className="relative w-full h-full">
                              <Image
                                src={image}
                                alt={`${parentLabel} ${index + 1}`}
                                fill
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                              <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-black/20 backdrop-blur-md rounded-xl p-4 border border-white/20">
                                  <Text
                                    variant="h5"
                                    className="text-white font-bold drop-shadow-lg mb-1"
                                  >
                                    {parentLabel}
                                  </Text>
                                  <Text
                                    variant="small"
                                    className="text-white/90 drop-shadow-md"
                                  >
                                    {items.length} hizmet kategorisi
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.3);
        }
        :global(.dark) .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
        }
        :global(.dark) .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </motion.div>
  );
}
