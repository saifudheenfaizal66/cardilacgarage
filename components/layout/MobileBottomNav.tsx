"use client";

import React, { useEffect, useRef, useState } from "react";
import { Phone, MessageCircle, Navigation } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export function MobileBottomNav() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

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

  const waUrl = "https://wa.me/917479797965?text=Hi%20Cardilac%20Garage%2C%20I%27d%20like%20to%20enquire%20about%20your%20services";

  return (
    <div
      aria-label="Quick Contact Bar"
      className={`fixed inset-x-0 bottom-0 z-50 md:hidden transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-3 mb-3 overflow-hidden rounded-2xl border border-[#292932] bg-[#09090D]/95 p-2 shadow-[0_-8px_32px_rgba(0,0,0,0.8),0_0_20px_-6px_rgba(160,32,240,0.4)] backdrop-blur-xl">
        <div className="grid grid-cols-3 gap-2">
          {/* Call CTA */}
          <a
            href={BUSINESS_INFO.phoneHref}
            className="flex min-h-[48px] flex-col items-center justify-center gap-1 rounded-xl bg-[#A020F0] text-white shadow-[0_0_15px_-4px_rgba(160,32,240,0.6)] active:scale-95 transition-all"
          >
            <Phone className="h-4 w-4" />
            <span className="text-[11px] font-bold tracking-wide">Call Now</span>
          </a>

          {/* WhatsApp CTA */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[48px] flex-col items-center justify-center gap-1 rounded-xl border border-[#25D366]/40 bg-[#25D366]/15 text-[#25D366] active:scale-95 transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="text-[11px] font-bold tracking-wide">WhatsApp</span>
          </a>

          {/* Directions CTA */}
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[48px] flex-col items-center justify-center gap-1 rounded-xl border border-[#292932] bg-[#14141E] text-[#E4E4E7] active:scale-95 transition-all"
          >
            <Navigation className="h-4 w-4 text-[#E81CFF]" />
            <span className="text-[11px] font-semibold tracking-wide">Directions</span>
          </a>
        </div>
      </div>
    </div>
  );
}
