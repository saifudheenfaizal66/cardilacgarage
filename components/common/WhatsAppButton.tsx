"use client";

import React from "react";
import { Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export function FloatingCallButton() {
  return (
    <div className="fixed right-4 bottom-4 z-40 hidden lg:block sm:right-6 sm:bottom-6">
      <a
        href={BUSINESS_INFO.phoneHref}
        aria-label="Call Cardilac Garage"
        className="group flex items-center gap-2.5 rounded-full border border-[#A020F0]/60 bg-[#111116]/95 px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.65),0_0_24px_-4px_rgba(160,32,240,0.5)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E81CFF] hover:bg-[#A020F0]"
      >
        <Phone className="h-5 w-5 text-[#E81CFF] transition-colors group-hover:text-white" />
        <span className="font-semibold tracking-wide">Call Now</span>
      </a>
    </div>
  );
}

