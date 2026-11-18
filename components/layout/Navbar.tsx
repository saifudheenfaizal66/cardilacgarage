"use client";

import React, { useEffect, useState, useRef } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { smoothScrollTo } from "@/components/common/scrollHelper";

const NAV_LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "services", label: "Services", href: "#services" },
  { id: "packages", label: "Packages", href: "#packages" },
  { id: "about", label: "About Us", href: "#about" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  // Track scroll position for backdrop blur styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy with IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Drawer focus trap & scroll lock & escape key
  useEffect(() => {
    if (!drawerOpen) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDrawerOpen(false);
        toggleBtnRef.current?.focus();
      }

      if (e.key === "Tab" && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [drawerOpen]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      if (drawerOpen) {
        setDrawerOpen(false);
        setTimeout(() => {
          smoothScrollTo(targetId, 90);
        }, 120);
      } else {
        smoothScrollTo(targetId, 90);
      }
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#24242D] bg-[#09090D]/95 shadow-[0_12px_32px_rgba(0,0,0,0.7)] backdrop-blur-md"
          : "border-b border-[#24242D]/60 bg-[#09090D]/85 backdrop-blur-sm"
      }`}
      style={{ WebkitBackdropFilter: "blur(12px)" }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Emblem + Brand Title lockup */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          aria-label="Cardilac — Detailing · Coating · Protection"
          className="group flex shrink-0 items-center gap-2.5 sm:gap-3.5 rounded-lg py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0]"
        >
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E81CFF]/45 bg-[#111116] shadow-[0_0_24px_-4px_rgba(232,28,255,0.45)] transition-transform duration-200 group-hover:scale-105 sm:h-12 sm:w-12">
            <img
              src={BUSINESS_INFO.logos.emblem}
              alt="Cardilac logo"
              className="h-7 w-7 object-contain sm:h-8 sm:w-8"
            />
          </div>
          <img
            src={BUSINESS_INFO.logos.wordmarkLight}
            alt="Cardilac logo"
            className="h-10 w-auto object-contain transition-all duration-200 group-hover:brightness-110 drop-shadow-[0_2px_12px_rgba(232,28,255,0.22)] sm:h-12 md:h-13"
          />
        </a>

        {/* Middle: Desktop Nav Links */}
        <nav aria-label="Primary Navigation" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-3.5 py-2 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E81CFF] rounded-lg ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-[#A1A1AA] hover:text-white"
                }`}
              >
                {link.label}
                {isActive ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3.5 bottom-0 h-[2px] bg-gradient-to-r from-[#A020F0] to-[#E81CFF] shadow-[0_0_10px_#A020F0]"
                  />
                ) : null}
              </a>
            );
          })}
        </nav>

        {/* Right: Header Call button + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={BUSINESS_INFO.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-[#A020F0]/60 bg-[#A020F0]/15 hover:bg-[#A020F0] text-white px-3.5 py-2 text-xs font-bold transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E81CFF]"
          >
            <Phone className="h-3.5 w-3.5 text-[#E81CFF]" />
            <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <button
            ref={toggleBtnRef}
            type="button"
            onClick={() => setDrawerOpen((prev) => !prev)}
            aria-expanded={drawerOpen}
            aria-label={drawerOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#24242D] bg-[#12121A] text-white transition-colors hover:border-[#A020F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E81CFF] md:hidden"
          >
            {drawerOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="border-t border-[#24242D] bg-[#09090D]/98 px-5 pb-6 pt-4 backdrop-blur-xl md:hidden"
        >
          <nav aria-label="Mobile Navigation Menu" className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`flex min-h-[44px] items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive
                      ? "border border-[#A020F0]/50 bg-[#171724] text-white"
                      : "text-[#A1A1AA] hover:bg-[#12121A] hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive ? (
                    <span className="h-2 w-2 rounded-full bg-[#E81CFF] shadow-[0_0_8px_#E81CFF]" />
                  ) : null}
                </a>
              );
            })}

            <div className="pt-3 mt-1 border-t border-[#24242D]">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-[#A020F0] px-4 py-3 text-sm font-bold text-white shadow-[0_0_20px_-4px_rgba(160,32,240,0.6)] hover:bg-[#8E18D8]"
              >
                <Phone className="h-4 w-4" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
