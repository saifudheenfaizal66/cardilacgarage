"use client";

import React, { useEffect, useRef } from "react";
import { ShieldCheck, Truck, Layers, Sparkles } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    value: "Certified Protection",
    label: "Ceramic & Graphene Studio",
    note: "9H & 10H Multi-Year Paint Protection",
  },
  {
    icon: Sparkles,
    value: "Paint Correction",
    label: "Precision Machine Polishing",
    note: "Swirl removal & showroom mirror finish",
  },
  {
    icon: Truck,
    value: "Doorstep Valet",
    label: "Pickup & Delivery Available",
    note: "Prompt scheduling across Alappuzha",
  },
  {
    icon: Layers,
    value: "Tailored Packages",
    label: "Precision Detailing Scope",
    note: "Engineered for motorcycles to luxury SUVs",
  },
];

function useRevealChildren(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const items = container.querySelectorAll<HTMLElement>(".reveal-on-scroll");
    if (!items.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export function TrustHighlights() {
  const containerRef = useRef<HTMLElement>(null);
  useRevealChildren(containerRef);

  return (
    <section
      id="highlights"
      ref={containerRef}
      aria-label="Studio Highlights"
      className="border-y border-[#292932] bg-[#111116]"
    >
      {/* ── Desktop grid ── */}
      <div className="mx-auto hidden max-w-7xl px-4 py-8 sm:px-6 lg:block lg:px-8">
        <div className="grid grid-cols-4 gap-4">
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group flex items-start gap-3.5 rounded-lg border border-[#292932]
                  bg-[#17171F]/80 p-4 transition-all duration-300
                  hover:border-[#A020F0]/60 hover:shadow-[0_0_20px_-6px_rgba(160,32,240,0.35)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#A020F0]/40 bg-[#111116] shadow-[0_0_15px_-4px_rgba(160,32,240,0.4)]">
                  <Icon className="h-5 w-5 text-[#E81CFF] transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-base font-bold tracking-tight text-white sm:text-lg">
                    {item.value}
                  </div>
                  <div className="text-xs font-semibold text-[#E4E4E7]">
                    {item.label}
                  </div>
                  <div className="mt-0.5 text-[11px] text-[#A1A1AA]">
                    {item.note}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Mobile: horizontal snap scroll carousel ── */}
      <div className="lg:hidden">
        {/* Scroll hint */}
        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#A020F0]">
            Studio Standards
          </span>
          <span className="scroll-hint-pill">swipe</span>
        </div>

        <div className="mobile-snap-scroll pb-4">
          {HIGHLIGHTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="mobile-snap-item mobile-card-press reveal-on-scroll
                  w-[72vw] max-w-[260px] flex-shrink-0
                  overflow-hidden rounded-2xl border border-[#292932]
                  bg-[#17171F] p-4"
              >
                {/* Top glow strip */}
                <div
                  aria-hidden="true"
                  className="mb-4 h-[2px] w-full rounded-full bg-gradient-to-r from-[#A020F0]/60 via-[#E81CFF]/80 to-transparent"
                />
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#A020F0]/40 bg-[#111116] shadow-[0_0_14px_-4px_rgba(160,32,240,0.5)]">
                  <Icon className="h-5 w-5 text-[#E81CFF]" />
                </div>
                <div className="mt-3 font-display text-base font-bold text-white leading-snug">
                  {item.value}
                </div>
                <div className="mt-0.5 text-[11px] font-semibold text-[#D4D4D8]">
                  {item.label}
                </div>
                <div className="mt-1 text-[11px] leading-relaxed text-[#71717A]">
                  {item.note}
                </div>
              </div>
            );
          })}
          {/* Spacer at the end */}
          <div className="w-4 flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}
