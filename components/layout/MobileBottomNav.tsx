"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Home,
  Layers,
  Tag,
  MessageCircle,
  Phone,
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

const NAV_ITEMS = [
  { id: "home", label: "Home", href: "#home", Icon: Home },
  { id: "services", label: "Services", href: "#services", Icon: Layers },
  { id: "pricing", label: "Packages", href: "#pricing", Icon: Tag },
  { id: "contact", label: "Contact", href: "#contact", Icon: MessageCircle },
];

export function MobileBottomNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Active section tracking
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((i) => i.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.3, 0.5] }
    );
    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastScrollY.current || y < 60);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className={`mobile-bottom-nav fixed inset-x-0 bottom-0 z-50 lg:hidden
        transition-transform duration-300 ease-out
        ${visible ? "translate-y-0" : "translate-y-full"}
      `}
    >
      {/* Frosted glass bar */}
      <div className="relative mx-3 mb-3 overflow-hidden rounded-2xl border border-[#292932] bg-[#09090D]/85 shadow-[0_-8px_40px_rgba(0,0,0,0.65),0_0_0_1px_rgba(160,32,240,0.08)] backdrop-blur-2xl">
        {/* Purple ambient glow strip */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#A020F0]/60 to-transparent"
        />

        <div className="flex items-center justify-around px-1 py-2">
          {NAV_ITEMS.map(({ id, label, href, Icon }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={href}
                aria-label={label}
                className={`mobile-nav-item group relative flex min-h-[48px] min-w-[48px] flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-1.5 text-center transition-all duration-200 active:scale-90
                  ${
                    isActive
                      ? "text-white"
                      : "text-[#71717A] hover:text-[#D4D4D8]"
                  }`}
              >
                {/* Active pill background */}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-xl bg-[#A020F0]/15 shadow-[0_0_16px_-4px_rgba(160,32,240,0.5)]"
                  />
                )}

                <span className="relative">
                  <Icon
                    className={`h-5 w-5 transition-all duration-200 ${
                      isActive
                        ? "text-[#E81CFF] drop-shadow-[0_0_8px_rgba(232,28,255,0.65)]"
                        : "group-hover:text-white"
                    }`}
                    strokeWidth={isActive ? 2 : 1.75}
                  />
                </span>
                <span
                  className={`relative text-[10px] font-semibold tracking-wide transition-all duration-200 ${
                    isActive ? "text-white" : ""
                  }`}
                >
                  {label}
                </span>
              </a>
            );
          })}

          {/* Call CTA */}
          <a
            href={BUSINESS_INFO.phoneHref}
            aria-label="Call Cardilac Garage"
            className="group relative flex min-h-[48px] min-w-[48px] flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-1.5 transition-all duration-200 active:scale-90"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#A020F0] shadow-[0_0_20px_-4px_rgba(160,32,240,0.8)] transition-all duration-200 group-active:bg-[#8E18D8]">
              <Phone className="h-4.5 w-4.5 text-white" strokeWidth={2} />
            </span>
            <span className="text-[10px] font-bold tracking-wide text-[#E81CFF]">
              Call
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

