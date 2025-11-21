"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button, MegaMenu, Text } from "@/components/ui";
import { Menu, X, ChevronDown, Phone, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useIsMobile } from "@/hooks/use-mobile";
import { siteConfig, NavItem } from "@/config/site-config";
import { Logo } from "./logo";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import Link from "next/link";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuRendered, setIsMobileMenuRendered] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [isDesktopMenuRendered, setIsDesktopMenuRendered] = useState(false);
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState<string | null>(
    null
  );
  // Mobile menu navigation state
  const [mobileMenuStack, setMobileMenuStack] = useState<{ items: NavItem[]; parent: NavItem | null }[]>([]);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();
  const { y } = useScrollPosition();
  const isScrolled = y > 10;

  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuContentRef = useRef<HTMLDivElement>(null);
  const mobileMenuItemsRef = useRef<HTMLDivElement>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // GSAP animation for scroll and menu-open behavior
  useEffect(() => {
    const navElement = navRef.current;
    if (!navElement) return;

    const shouldBeOpaque = isScrolled || isOpen || !!openSubmenu;

    // Use a variable for background color to handle dark mode correctly if needed
    const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background').trim();
    
    gsap.to(navElement, {
      backgroundColor: shouldBeOpaque ? `hsla(${backgroundColor}, 0.8)` : 'transparent',
      backdropFilter: shouldBeOpaque ? 'blur(12px)' : 'none',
      duration: 0.3,
    });
    
    const borderColor = getComputedStyle(document.documentElement).getPropertyValue('--border').trim();

    gsap.to(navElement, {
      borderBottomColor: shouldBeOpaque ? `hsl(${borderColor})` : 'transparent',
      duration: 0.3,
    });

  }, [isScrolled, isOpen, openSubmenu]);

  // Outside click handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile) return;
      const target = event.target as HTMLElement;
      if (target.closest("nav") || target.closest("[data-menu]")) {
        return;
      }
      setOpenSubmenu(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  // GSAP for Mobile Menu Presence
  useEffect(() => {
    if (isOpen) {
      setIsMobileMenuRendered(true);
    } else {
      gsap.to(mobileMenuRef.current, {
        autoAlpha: 0,
        y: -20,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => setIsMobileMenuRendered(false),
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if(isMobileMenuRendered) {
        gsap.fromTo(mobileMenuRef.current, {
            autoAlpha: 0,
            y: -20,
        },{
            autoAlpha: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
        });
    }
  }, [isMobileMenuRendered]);

  // GSAP for Desktop MegaMenu Presence
  useEffect(() => {
    if (openSubmenu) {
      setIsDesktopMenuRendered(true);
    } else {
      gsap.to(desktopMenuRef.current, {
        autoAlpha: 0,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => setIsDesktopMenuRendered(false),
      });
    }
  }, [openSubmenu]);

  useEffect(()=> {
    if(isDesktopMenuRendered) {
        gsap.fromTo(desktopMenuRef.current, {
            autoAlpha: 0,
        }, {
            autoAlpha: 1,
            duration: 0.3,
            ease: 'power2.out',
        });
    }
  }, [isDesktopMenuRendered]);


  const closeMobileMenu = () => {
    setIsOpen(false);
    setTimeout(() => {
      setMobileMenuStack([]);
    }, 300);
  };
  const handleLinkClick = () => setTimeout(closeMobileMenu, 150);

  const selectedCategory = siteConfig.nav.main.find(item => item.label === openSubmenu);

  // Mobile menu navigation functions
  const navigateToSubmenu = (item: NavItem) => {
    if (!item.children || item.children.length === 0) return;

    const itemsContainer = mobileMenuItemsRef.current;
    if (!itemsContainer) {
      setMobileMenuStack(prev => [...prev, { items: item.children!, parent: item }]);
      return;
    }

    // Soft slide animasyonu
    const tl = gsap.timeline();
    tl.to(itemsContainer, {
      x: -20,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
    })
    .add(() => {
      setMobileMenuStack(prev => [...prev, { items: item.children!, parent: item }]);
    })
    .fromTo(itemsContainer,
      { x: 20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.25, ease: "power2.out" }
    );
  };

  const navigateBack = () => {
    const itemsContainer = mobileMenuItemsRef.current;
    if (!itemsContainer) {
      setMobileMenuStack(prev => prev.slice(0, -1));
      return;
    }

    const tl = gsap.timeline();
    tl.to(itemsContainer, {
      x: 20,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
    })
    .add(() => {
      setMobileMenuStack(prev => prev.slice(0, -1));
    })
    .fromTo(itemsContainer,
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.25, ease: "power2.out" }
    );
  };

  // Get current menu data
  const getCurrentMenuData = () => {
    if (mobileMenuStack.length === 0) {
      return { items: siteConfig.nav.main, parent: null };
    }
    return mobileMenuStack[mobileMenuStack.length - 1];
  };

  // Animate menu items on mount
  useEffect(() => {
    if (isMobileMenuRendered && mobileMenuItemsRef.current) {
      const items = mobileMenuItemsRef.current.querySelectorAll('.mobile-menu-item');
      gsap.fromTo(items,
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.04,
          ease: "power2.out",
          delay: 0.05,
        }
      );
    }
  }, [isMobileMenuRendered, mobileMenuStack]);

  const renderMobileMenu = () => {
    if (!isMobileMenuRendered) return null;

    const { items: currentItems, parent } = getCurrentMenuData();

    return (
      <div
        ref={mobileMenuRef}
        data-menu
        className="fixed inset-0 z-40 bg-background flex flex-col overflow-hidden pt-4"
        style={{ top: '64px' }}
      >
        <div ref={mobileMenuContentRef} className="flex-1 overflow-y-auto pb-40">
          {/* Menu Items */}
          <div ref={mobileMenuItemsRef} className="py-2 px-4 space-y-1">
            {/* Parent link - alt kategorideyken ana kategoriyi göster */}
            {parent && (
              <div className="mobile-menu-item" style={{ opacity: 0 }}>
                <Link
                  href={parent.href}
                  onClick={handleLinkClick}
                  className="flex items-center justify-between py-3 px-2 border-b border-border/30"
                >
                  <Text variant="small" className="font-semibold text-primary">
                    {parent.label}
                  </Text>
                  <ChevronRight className="w-4 h-4 text-primary" />
                </Link>
              </div>
            )}

            {currentItems.map((item: NavItem) => {
              const hasChildren = item.children && item.children.length > 0;

              return (
                <div
                  key={item.label}
                  className="mobile-menu-item"
                  style={{ opacity: 0 }}
                >
                  {hasChildren ? (
                    <button
                      onClick={() => navigateToSubmenu(item)}
                      className="w-full flex items-center justify-between py-3 px-2 transition-colors duration-200"
                    >
                      <Text variant="small" className="font-medium text-foreground">
                        {item.label}
                      </Text>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          {item.children?.length}
                        </span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      className="flex items-center justify-between py-3 px-2 transition-colors duration-200"
                    >
                      <Text variant="small" className="font-medium text-muted-foreground">
                        {item.label}
                      </Text>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="absolute bottom-0 left-0 right-0 bg-background border-t border-border/50 p-4">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <Text variant="small" theme="default" className="font-semibold">Hemen İletişime Geçin</Text>
              <Text variant="tiny" theme="muted">Size özel çözümler sunalım</Text>
            </div>
          </div>
          <Link href="/iletisim" onClick={handleLinkClick}>
            <Button size="sm" className="w-full">
              Demo İsteyin
            </Button>
          </Link>
        </div>
      </div>
    );
  };
  
  return (
    <>
      <nav ref={navRef} className={cn("fixed top-0 left-0 right-0 z-50 py-2 border-b border-transparent")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Logo
                showBackButton={isMobile && isOpen && mobileMenuStack.length > 0}
                onBackClick={navigateBack}
              />
            </div>

            {!isMobile && (
              <div className="hidden md:flex items-center gap-8">
                {siteConfig.nav.main.map((item) => (
                  <div key={item.label} className="relative flex items-center">
                     <Link
                        href={item.href || '#'}
                        onClick={(e) => {
                            if (item.children) {
                                e.preventDefault();
                                setOpenSubmenu(openSubmenu === item.label ? null : item.label);
                            }
                        }}
                        className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium flex items-center gap-1 cursor-pointer"
                      >
                        {item.label}
                        {item.children && <ChevronDown className={cn("w-4 h-4 transition-transform", openSubmenu === item.label && "rotate-180")} />}
                      </Link>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <Button asChild size="sm">
                    <Link href="/iletisim">Demo İsteyin</Link>
                </Button>
              </div>
              {isMobile && (
                <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground/80 relative z-50" aria-label="Menu">
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              )}
            </div>
          </div>
        </div>

        {isDesktopMenuRendered && selectedCategory?.children && (
             <MegaMenu
                ref={desktopMenuRef}
                key={selectedCategory.label}
                items={selectedCategory.children}
                openNestedSubmenu={openNestedSubmenu}
                setOpenNestedSubmenu={setOpenNestedSubmenu}
                isMobile={false}
                parentCategory={selectedCategory}
              />
        )}
      </nav>
      
      {renderMobileMenu()}
    </>
  );
}