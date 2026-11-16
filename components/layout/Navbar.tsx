"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

const NAV_LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "services", label: "Services", href: "#services" },
  { id: "pricing", label: "Packages", href: "#pricing" },
  { id: "about", label: "About Us", href: "#about" },
  { id: "contact", label: "Book Slot", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  useEffect(() => {
    if (!drawerOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [drawerOpen]);

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
        {/* Left: Emblem Icon + Scaled Light Text Logo lockup */}
        <a
          href="#home"
          aria-label="Cardilac Garage - The Premium Car Wash"
          className="group flex shrink-0 items-center gap-2.5 sm:gap-3.5 rounded-lg py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0]"
        >
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E81CFF]/45 bg-[#111116] shadow-[0_0_24px_-4px_rgba(232,28,255,0.45)] transition-transform duration-200 group-hover:scale-105 sm:h-12 sm:w-12 md:h-13 md:w-13">
            <img
              src={BUSINESS_INFO.logos.emblem}
              alt="Cardilac Cadillac icon"
              className="h-7 w-7 object-contain sm:h-8 sm:w-8 md:h-9 md:w-9"
            />
          </div>
          <img
            src={BUSINESS_INFO.logos.wordmarkLight}
            alt="Cardilac Garage - The Premium Car Wash"
            className="h-10 w-auto object-contain transition-all duration-200 group-hover:brightness-110 drop-shadow-[0_2px_12px_rgba(232,28,255,0.22)] sm:h-12 md:h-13 lg:h-14"
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
                className={`relative px-3.5 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
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

        {/* Right: Mobile Menu Trigger only */}
        <button
          type="button"
          onClick={() => setDrawerOpen((prev) => !prev)}
          aria-expanded={drawerOpen}
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#24242D] bg-[#12121A] text-white transition-colors hover:border-[#A020F0] md:hidden"
        >
          {drawerOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {drawerOpen ? (
        <div className="border-t border-[#24242D] bg-[#09090D]/98 px-5 pb-6 pt-4 backdrop-blur-xl md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "border border-[#A020F0]/40 bg-[#171722] text-white"
                      : "text-[#A1A1AA] hover:bg-[#12121A] hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E81CFF]" />
                  ) : null}
                </a>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
