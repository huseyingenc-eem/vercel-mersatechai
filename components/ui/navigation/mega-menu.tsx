"use client";

import React, { useState, useEffect, useRef, forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import type { NavItem } from "@config/site-config";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Text } from "@/components/ui/typography/text";
import gsap from "gsap";

interface MegaMenuProps {
  items: NavItem[];
  parentCategory?: NavItem;
  openNestedSubmenu: string | null;
  setOpenNestedSubmenu: (label: string | null) => void;
  isMobile?: boolean;
}

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

export const MegaMenu = forwardRef<HTMLDivElement, MegaMenuProps>(({
  items,
  parentCategory,
  openNestedSubmenu,
  setOpenNestedSubmenu,
  isMobile = false,
}, ref) => {
  const [activeCategory, setActiveCategory] = useState<string>(items[0]?.label || "");
  const middleColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpenNestedSubmenu(null);
  }, [activeCategory, setOpenNestedSubmenu]);
  
  useEffect(() => {
    if(middleColumnRef.current) {
        gsap.fromTo(middleColumnRef.current, {opacity: 0, x: -20}, {opacity: 1, x: 0, duration: 0.3, ease: "power2.out"});
    }
  }, [activeCategory]);
  
  useEffect(() => {
    if(rightColumnRef.current) {
        gsap.fromTo(rightColumnRef.current, {opacity: 0, x: 20}, {opacity: 1, x: 0, duration: 0.3, ease: "power2.out"});
    }
  }, [openNestedSubmenu, activeCategory]);


  const activeItem = items.find((item) => item.label === activeCategory);
  const parentLabel = parentCategory?.label ?? "Kategoriler";
  const parentHref = parentCategory?.href ?? "#";
  const images = menuImages[parentCategory?.label ?? activeCategory] || menuImages.default;
  const hasChildren = !!activeItem?.children && activeItem.children.length > 0;
  const description = !hasChildren && (activeItem?.description || parentCategory?.description || "");

  if (isMobile) {
    // Mobile implementation remains the same for now, as requested focus is on desktop
    // A full conversion would require replicating the mobile-specific animations too.
    return <div>Mobile MegaMenu not implemented with GSAP yet.</div>
  }

  return (
    <div
      ref={ref}
      className="absolute left-0 right-0 top-full w-full bg-background border-b border-border shadow-2xl opacity-0 invisible"
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
          <div className="lg:col-span-3 space-y-2" onMouseEnter={() => setOpenNestedSubmenu(null)}>
            <div className="px-3 mb-1">
              {parentCategory ? (
                <Link href={parentHref} className="inline-flex items-center gap-1 font-semibold text-primary">
                  <span className="uppercase tracking-wider">{parentLabel}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              ) : (
                <Text variant="small" theme="muted" className="uppercase tracking-wider">Kategoriler</Text>
              )}
            </div>
            {items.map((item) => (
              <button
                key={item.label}
                onMouseEnter={() => setActiveCategory(item.label)}
                onClick={() => setActiveCategory(item.label)}
                className={`w-full text-left px-3 py-1 rounded-lg transition-all group ${activeCategory === item.label ? "border border-primary/70" : "border border-transparent hover:border-border"}`}
              >
                <div className="flex items-center justify-between">
                  <Text variant="small" theme={activeCategory === item.label ? "primary" : "default"} className="font-medium">{item.label}</Text>
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeCategory === item.label ? "translate-x-1 text-primary" : "text-muted-foreground group-hover:translate-x-1"}`} />
                </div>
              </button>
            ))}
          </div>

          <div ref={middleColumnRef} className="lg:col-span-5 border-l border-r border-border px-6">
            {activeItem && (
              <div className="space-y-4">
                <Link href={activeItem.href || '#'} className="group inline-flex items-center gap-2">
                  <Text variant="tiny" theme="primary" className="uppercase tracking-wider font-semibold">{activeItem.label}</Text>
                  <ArrowRight className="w-3 h-3 text-primary" />
                </Link>
                {hasChildren ? (
                  <div className="space-y-1 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {activeItem.children!.map((child) => (
                      <div key={child.label}>
                        {child.children ? (
                          <button
                            onClick={() => setOpenNestedSubmenu(openNestedSubmenu === child.label ? null : child.label)}
                            onMouseEnter={() => setOpenNestedSubmenu(child.label)}
                            className={`w-full text-left flex items-center justify-between py-2.5 px-3 rounded-md transition-all ${openNestedSubmenu === child.label ? "border border-primary/70" : "border border-transparent hover:border-border"}`}
                          >
                            <Text variant="small" theme={openNestedSubmenu === child.label ? "primary" : "default"} className="font-medium">{child.label}</Text>
                            <div className="flex items-center gap-1">
                              <Text variant="tiny" theme="primary" className="px-1.5 py-0.5 rounded bg-primary/5 font-medium">{child.children.length}</Text>
                              <ChevronRight className={`w-3.5 h-3.5 ${openNestedSubmenu === child.label ? "text-primary" : "text-muted-foreground"}`} />
                            </div>
                          </button>
                        ) : (
                          <Link href={child.href || '#'} className="group flex items-center justify-between py-2.5 px-3 rounded-md border border-transparent hover:border-primary/70 transition-all">
                            <Text variant="small">{child.label}</Text>
                             <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                ) : description ? (
                  <div className="py-6 px-2">
                    <Text variant="small" theme="muted" className="leading-relaxed">{description}</Text>
                  </div>
                ) : null}
              </div>
            )}
          </div>

          <div ref={rightColumnRef} className="lg:col-span-4 hidden lg:block">
            {openNestedSubmenu ? (
              <div className="space-y-3">
                <Text variant="tiny" theme="muted" className="uppercase tracking-wider px-3">{openNestedSubmenu}</Text>
                <div className="space-y-1 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {activeItem?.children?.find((c) => c.label === openNestedSubmenu)?.children?.map((deepChild) => (
                    <Link key={deepChild.label} href={deepChild.href || '#'} className="group flex items-center justify-between py-2.5 px-3 rounded-lg transition-all">
                      <Text variant="small" theme="default" className="group-hover:text-primary transition-colors">{deepChild.label}</Text>
                       <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {parentCategory?.description && (
                  <div className="space-y-2 px-1">
                    <Text variant="small" theme="muted" className="leading-relaxed">{parentCategory.description}</Text>
                  </div>
                )}
                <div className="w-full h-[320px] rounded-2xl overflow-hidden shadow-xl border border-border">
                  <Carousel autoplay autoplayDelay={4000} className="w-full h-full">
                    <CarouselContent className="h-full">
                      {images.map((image, index) => (
                        <CarouselItem key={index} className="h-full">
                          <div className="relative w-full h-full">
                            <Image src={image} alt={`${parentLabel} ${index + 1}`} fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                              <div className="bg-black/20 backdrop-blur-md rounded-xl p-4 border border-white/20">
                                <Text variant="h5" className="text-white font-bold drop-shadow-lg mb-1">{parentLabel}</Text>
                                <Text variant="small" className="text-white/90 drop-shadow-md">{items.length} hizmet kategorisi</Text>
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

MegaMenu.displayName = "MegaMenu";
