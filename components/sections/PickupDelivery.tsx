"use client";

import React from "react";
import { Truck, Phone, Car, Sparkles, Home } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export function PickupDelivery() {
  return (
    <section
      id="pickup-delivery"
      className="relative overflow-hidden border-t border-[#292932] bg-[#111116] py-14 lg:py-20"
    >
      {/* Ambient purple glow */}
      <div
        aria-hidden="true"
        className="orb-animate pointer-events-none absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A020F0]/15 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#A020F0]/40 bg-gradient-to-br from-[#17171F] via-[#111116] to-[#17171F] p-6 sm:p-10 shadow-[0_24px_64px_-20px_rgba(160,32,240,0.28)]">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center lg:gap-8">
            <div className="max-w-2xl">
              {/* Eyebrow pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E81CFF]/40 bg-[#09090D] px-3.5 py-1 text-[11px] font-semibold tracking-[0.2em] text-[#E81CFF] uppercase shadow-[0_0_15px_-4px_rgba(232,28,255,0.35)]">
                <Truck className="h-3.5 w-3.5 text-[#E81CFF]" />
                <span>Doorstep Convenience · Alappuzha</span>
              </div>

              <h2 className="mt-4 font-display font-extrabold uppercase tracking-tight text-white text-[clamp(1.6rem,5vw,2.4rem)] leading-[1.1]">
                WE PICK UP. WE DETAIL. WE DELIVER.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-[#D4D4D8] sm:text-base">
                Enjoy premium car washing, detailing, and paint protection without leaving your home or office. We offer punctual doorstep vehicle pickup and delivery across Alappuzha.
              </p>

              {/* Quick stats with Lucide SVG icons (no emojis) */}
              <div className="mt-6 flex flex-wrap gap-6">
                {[
                  { icon: Car, text: "Same-day pickup" },
                  { icon: Sparkles, text: "Studio finish" },
                  { icon: Home, text: "To your door" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#A020F0]/40 bg-[#09090D] text-[#E81CFF]">
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-[#D4D4D8]">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2.5 rounded-xl border border-[#B94AF7]/60 bg-[#A020F0] px-6 py-3.5 text-sm font-bold tracking-wide text-white shadow-[0_0_28px_-6px_rgba(160,32,240,0.65)] transition-all hover:bg-[#8E18D8] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E81CFF] whitespace-nowrap"
              >
                <Phone className="h-4 w-4" />
                <span>Call for Pickup &amp; Delivery</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
