"use client";

import React from "react";
import { Truck, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export function PickupDelivery() {
  return (
    <section
      id="pickup-delivery"
      className="relative overflow-hidden border-t border-[#292932] bg-[#111116] py-14 lg:py-24"
    >
      {/* Ambient purple glow */}
      <div
        aria-hidden="true"
        className="orb-animate pointer-events-none absolute top-1/2 left-1/2 h-80 w-80
          -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A020F0]/15 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-2xl border border-[#A020F0]/40
            bg-gradient-to-br from-[#17171F] via-[#111116] to-[#17171F]
            p-6 sm:p-10
            shadow-[0_24px_64px_-20px_rgba(160,32,240,0.28)]
            pulse-border"
        >
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center lg:gap-8">
            <div className="max-w-2xl">
              {/* Eyebrow pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E81CFF]/40 bg-[#09090D] px-3.5 py-1 text-[11px] font-semibold tracking-[0.2em] text-[#E81CFF] uppercase shadow-[0_0_15px_-4px_rgba(232,28,255,0.35)]">
                <Truck className="h-3.5 w-3.5 text-[#E81CFF]" />
                <span>Doorstep Convenience · Alappuzha</span>
              </div>

              <h2
                className="mt-4 font-display font-extrabold uppercase tracking-tight text-white
                  text-[clamp(1.6rem,6vw,2.4rem)] leading-[1.1]"
              >
                WE PICK UP. WE DETAIL. WE DELIVER.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-[#D4D4D8] sm:text-base">
                Enjoy premium car washing and automotive detailing without
                leaving your home or office. We offer punctual doorstep vehicle
                pickup and delivery across Alappuzha.
              </p>

              {/* Mobile quick stats */}
              <div className="mt-5 flex gap-4 lg:hidden">
                {[
                  { emoji: "🚗", text: "Same-day pickup" },
                  { emoji: "✨", text: "Studio finish" },
                  { emoji: "🏠", text: "To your door" },
                ].map((item) => (
                  <div key={item.text} className="flex flex-col items-center gap-1 text-center">
                    <span className="text-xl">{item.emoji}</span>
                    <span className="text-[10px] font-semibold text-[#A1A1AA] leading-tight">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="mobile-tap-highlight inline-flex cursor-pointer items-center justify-center gap-2.5
                  rounded-xl border border-[#B94AF7]/60 bg-[#A020F0]
                  px-6 py-3.5 text-sm font-bold tracking-wide text-white
                  shadow-[0_0_28px_-6px_rgba(160,32,240,0.65)]
                  transition-all active:scale-95 hover:bg-[#8E18D8]
                  min-h-[50px] whitespace-nowrap"
              >
                <Phone className="h-4 w-4" />
                <span>Call for Pickup &amp; Delivery</span>
              </a>
              <a
                href={BUSINESS_INFO.secondaryPhoneHref}
                className="mobile-tap-highlight inline-flex items-center justify-center gap-2
                  rounded-xl border border-[#292932] bg-[#09090D]
                  px-4 py-3 text-xs font-semibold tracking-wide text-[#E4E4E7]
                  transition-colors active:scale-95 hover:border-[#A020F0]/60 hover:text-white
                  min-h-[50px]"
              >
                <Phone className="h-3.5 w-3.5 text-[#E81CFF]" />
                <span>Call Secondary Line</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
