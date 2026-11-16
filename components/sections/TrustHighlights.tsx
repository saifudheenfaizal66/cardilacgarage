"use client";

import React from "react";
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
    note: "Engineered from motorcycles to SUVs",
  },
];

export function TrustHighlights() {
  return (
    <section
      id="highlights"
      aria-label="Studio Highlights"
      className="border-y border-[#292932] bg-[#111116] py-6 sm:py-8"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group flex items-start gap-3.5 rounded-xl border border-[#292932] bg-[#17171F]/80 p-4 transition-all duration-300 hover:border-[#A020F0]/60 hover:shadow-[0_0_20px_-6px_rgba(160,32,240,0.35)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#A020F0]/40 bg-[#111116] shadow-[0_0_15px_-4px_rgba(160,32,240,0.4)]">
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
    </section>
  );
}
