"use client";

import React from "react";
import {
  MapPin,
  Phone,
  Navigation,
  ExternalLink,
  Clock,
  ShieldCheck,
  Truck,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BUSINESS_INFO } from "@/data/business";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-[#292932] bg-[#09090D] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visit or Connect"
          title="CONNECT WITH OUR STUDIO IN ALAPPUZHA."
          description="Reach Cardilac Garage directly for technical consultation, service appointments, or doorstep vehicle pickup across Alappuzha."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Left Column: Studio Information & Direct Booking Desk */}
          <div className="w-full min-w-0 lg:col-span-6">
            <div className="h-full rounded-2xl border border-[#292932] bg-[#111116] p-6 sm:p-8 shadow-[0_12px_32px_rgba(0,0,0,0.5)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 border-b border-[#24242D] pb-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E81CFF]/40 bg-[#17171F] shadow-[0_0_20px_-6px_rgba(232,28,255,0.4)]">
                    <img
                      src={BUSINESS_INFO.logos.emblem}
                      alt="Cardilac Garage logo"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {BUSINESS_INFO.displayName}
                    </h3>
                    <p className="mt-0.5 text-xs font-medium text-[#A1A1AA]">
                      Detailing, Coating &amp; Protection Studio · Alappuzha
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-5 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#E81CFF]" />
                    <div>
                      <div className="text-[11px] font-semibold tracking-wider text-[#A1A1AA] uppercase">
                        Studio Address
                      </div>
                      <p className="mt-0.5 text-xs leading-relaxed text-[#D4D4D8] sm:text-sm">
                        {BUSINESS_INFO.address.full}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#E81CFF]" />
                    <div>
                      <div className="text-[11px] font-semibold tracking-wider text-[#A1A1AA] uppercase">
                        Studio Working Hours
                      </div>
                      <p className="mt-0.5 text-xs text-[#D4D4D8] sm:text-sm">
                        {BUSINESS_INFO.workingHours}
                      </p>
                    </div>
                  </div>

                  {/* Direct Booking Desk */}
                  <div className="flex items-start gap-3.5">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#E81CFF]" />
                    <div>
                      <div className="text-[11px] font-semibold tracking-wider text-[#A1A1AA] uppercase">
                        Studio Booking Desk
                      </div>
                      <div className="mt-1 flex flex-col gap-1.5 sm:flex-row sm:gap-4">
                        <a
                          href={BUSINESS_INFO.phoneHref}
                          className="font-display text-sm font-bold text-white transition-colors hover:text-[#E81CFF]"
                        >
                          {BUSINESS_INFO.phoneDisplay}{" "}
                          <span className="text-[10px] font-normal text-[#A1A1AA]">(Primary)</span>
                        </a>
                        <a
                          href={BUSINESS_INFO.secondaryPhoneHref}
                          className="font-display text-sm font-bold text-white transition-colors hover:text-[#E81CFF]"
                        >
                          {BUSINESS_INFO.secondaryPhoneDisplay}{" "}
                          <span className="text-[10px] font-normal text-[#A1A1AA]">(Secondary)</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Call & Navigation Actions */}
              <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-3 border-t border-[#24242D] pt-6">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl border border-[#A020F0]/60 bg-[#A020F0] px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-[#8E18D8] shadow-[0_0_15px_-4px_rgba(160,32,240,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E81CFF]"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call Primary</span>
                </a>

                <a
                  href={BUSINESS_INFO.secondaryPhoneHref}
                  className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl border border-[#292932] bg-[#171722] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:border-[#A020F0] hover:text-[#E81CFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E81CFF]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#E81CFF]" />
                  <span>Call Secondary</span>
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl border border-[#292932] bg-[#171722] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:border-[#A020F0] hover:text-[#E81CFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E81CFF]"
                >
                  <Navigation className="h-3.5 w-3.5 text-[#E81CFF]" />
                  <span>Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps & Studio Standards */}
          <div className="w-full min-w-0 space-y-6 lg:col-span-6">
            {/* Embedded Google Map */}
            <div className="w-full overflow-hidden rounded-2xl border border-[#292932] bg-[#111116] shadow-lg">
              <iframe
                title="Cardilac Garage Location Map"
                src={BUSINESS_INFO.googleMapsEmbedUrl}
                className="h-64 w-full border-0 grayscale contrast-125 invert-[0.9] hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-center justify-between gap-3 border-t border-[#292932] bg-[#111116] px-5 py-3 text-xs">
                <span className="truncate text-[#A1A1AA]">
                  Valanjavazhy Junction, Ambalapuzha, Alappuzha
                </span>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 font-semibold text-[#E81CFF] hover:underline"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Studio Standards Badges */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-[#292932] bg-[#111116] p-3.5 text-center">
                <ShieldCheck className="mx-auto h-5 w-5 text-[#E81CFF]" />
                <div className="mt-2 text-xs font-bold text-white">Genuine Materials</div>
                <div className="mt-0.5 text-[10px] text-[#A1A1AA]">3M &amp; Garware</div>
              </div>
              <div className="rounded-xl border border-[#292932] bg-[#111116] p-3.5 text-center">
                <Truck className="mx-auto h-5 w-5 text-[#A020F0]" />
                <div className="mt-2 text-xs font-bold text-white">Doorstep Valet</div>
                <div className="mt-0.5 text-[10px] text-[#A1A1AA]">Alappuzha Area</div>
              </div>
              <div className="rounded-xl border border-[#292932] bg-[#111116] p-3.5 text-center">
                <Sparkles className="mx-auto h-5 w-5 text-[#E81CFF]" />
                <div className="mt-2 text-xs font-bold text-white">Expert Team</div>
                <div className="mt-0.5 text-[10px] text-[#A1A1AA]">Detailing Studio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
