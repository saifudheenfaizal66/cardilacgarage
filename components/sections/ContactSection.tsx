"use client";

import React from "react";
import {
  MapPin,
  Phone,
  Navigation,
  ExternalLink,
  Sparkles,
  Clock,
  ShieldCheck,
  Truck,
  ArrowRight,
  Headphones,
} from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BUSINESS_INFO } from "@/data/business";

const QUICK_SERVICE_PILLS = [
  "Premium Ceramic Wash",
  "Executive Car Wash",
  "5-Year Graphene Coating",
  "Deep Interior Spa",
  "2-Step Paint Correction",
  "Two-Wheeler Ceramic Wash",
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-[#292932] bg-[#09090D] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visit or Connect"
          title="CONNECT WITH OUR STUDIO IN ALAPPUZHA."
          description="Reach Cardilac Garage directly by phone for instant consultation, service scheduling, or vehicle pickup requests."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Left Column: Studio Location & Slot Information */}
          <div className="w-full min-w-0 space-y-6 lg:col-span-5">
            <div className="w-full overflow-hidden rounded-xl border border-[#292932] bg-[#111116] p-5 sm:p-6 shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3.5 border-b border-[#24242D] pb-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#E81CFF]/40 bg-[#17171F] shadow-[0_0_20px_-6px_rgba(232,28,255,0.4)]">
                  <img
                    src={BUSINESS_INFO.logos.emblem}
                    alt="Cardilac Garage emblem"
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {BUSINESS_INFO.displayName}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-[#A1A1AA]">
                    Detailing &amp; Precision Repair Studio · Alappuzha
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#E81CFF]" />
                  <div>
                    <div className="text-[11px] font-semibold tracking-wider text-[#A1A1AA] uppercase">
                      Studio Address
                    </div>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#D4D4D8] sm:text-sm">
                      {BUSINESS_INFO.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#E81CFF]" />
                  <div>
                    <div className="text-[11px] font-semibold tracking-wider text-[#A1A1AA] uppercase">
                      Studio Working Hours
                    </div>
                    <p className="mt-0.5 text-xs text-[#D4D4D8] sm:text-sm">
                      {BUSINESS_INFO.workingHours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#E81CFF]" />
                  <div>
                    <div className="text-[11px] font-semibold tracking-wider text-[#A1A1AA] uppercase">
                      Studio Booking Desk
                    </div>
                    <div className="mt-0.5 flex flex-col gap-1">
                      <a
                        href={BUSINESS_INFO.phoneHref}
                        className="font-display text-sm font-bold text-white transition-colors hover:text-[#E81CFF]"
                      >
                        {BUSINESS_INFO.phoneDisplay} (Primary)
                      </a>
                      <a
                        href={BUSINESS_INFO.secondaryPhoneHref}
                        className="font-display text-sm font-bold text-white transition-colors hover:text-[#E81CFF]"
                      >
                        {BUSINESS_INFO.secondaryPhoneDisplay} (Secondary)
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#A020F0]/50 bg-[#17171F] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:border-[#E81CFF] hover:text-[#E81CFF]"
                >
                  <Phone className="h-4 w-4 text-[#E81CFF]" />
                  <span>Call Primary</span>
                </a>

                <a
                  href={BUSINESS_INFO.secondaryPhoneHref}
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#292932] bg-[#17171F] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:border-[#A020F0] hover:text-[#E81CFF]"
                >
                  <Phone className="h-4 w-4 text-[#E81CFF]" />
                  <span>Call Secondary</span>
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#292932] bg-[#17171F] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:border-[#A020F0] hover:text-[#E81CFF]"
                >
                  <Navigation className="h-4 w-4 text-[#E81CFF]" />
                  <span>Directions</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full overflow-hidden rounded-xl border border-[#292932] bg-[#111116]">
              <iframe
                title="Cardilac Car Wash / Cardilac Garage Location Map"
                src={BUSINESS_INFO.googleMapsEmbedUrl}
                className="h-52 w-full border-0 grayscale contrast-125 invert-[0.9] hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-center justify-between gap-3 border-t border-[#292932] bg-[#111116] px-4 py-2 text-xs">
                <span className="truncate text-[#A1A1AA]">
                  Cardilac Garage • Valappuzha, Alappuzha
                </span>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 font-semibold text-[#E81CFF] hover:underline"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Phone Contact Card */}
          <div className="w-full min-w-0 lg:col-span-7">
            <div className="flex h-full w-full flex-col justify-between overflow-hidden rounded-xl border border-[#A020F0]/50 bg-gradient-to-b from-[#15121F] via-[#101016] to-[#0D0D12] p-5 sm:p-6 lg:p-7 shadow-[0_0_35px_-8px_rgba(160,32,240,0.3)]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#E81CFF]/40 bg-[#111116] px-3.5 py-1 text-xs font-semibold text-[#E81CFF] shadow-[0_0_15px_-4px_rgba(232,28,255,0.4)]">
                  <Headphones className="h-3.5 w-3.5" />
                  <span>Direct Helpline &amp; Booking Desk</span>
                </div>

                <h3 className="mt-3.5 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                  Call Cardilac Garage Directly
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#D4D4D8]">
                  Speak directly with our expert team to schedule your service appointment,
                  enquire about custom packages, or arrange doorstep vehicle pickup across
                  the Alappuzha region.
                </p>

                {/* Benefits List */}
                <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
                  <div className="rounded-lg border border-[#292932] bg-[#111116]/80 p-3">
                    <ShieldCheck className="h-4.5 w-4.5 text-[#E81CFF]" />
                    <div className="mt-1.5 text-xs font-bold text-white">
                      Instant Confirmation
                    </div>
                    <div className="mt-0.5 text-[10px] text-[#A1A1AA]">
                      Direct voice assistance
                    </div>
                  </div>

                  <div className="rounded-lg border border-[#292932] bg-[#111116]/80 p-3">
                    <Truck className="h-4.5 w-4.5 text-[#A020F0]" />
                    <div className="mt-1.5 text-xs font-bold text-white">
                      Doorstep Pickup
                    </div>
                    <div className="mt-0.5 text-[10px] text-[#A1A1AA]">
                      Available across Alappuzha
                    </div>
                  </div>

                  <div className="rounded-lg border border-[#292932] bg-[#111116]/80 p-3">
                    <Sparkles className="h-4.5 w-4.5 text-[#E81CFF]" />
                    <div className="mt-1.5 text-xs font-bold text-white">
                      Clear Scope &amp; Quote
                    </div>
                    <div className="mt-0.5 text-[10px] text-[#A1A1AA]">
                      Direct technician guidance
                    </div>
                  </div>
                </div>

                {/* Phone Contact Blocks */}
                <div className="mt-6 space-y-3">
                  <div className="rounded-xl border border-[#292932] bg-[#111116]/90 p-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A020F0]">
                          Primary Studio Line
                        </span>
                        <div className="font-display text-lg font-bold text-white sm:text-xl">
                          {BUSINESS_INFO.phoneDisplay}
                        </div>
                        <div className="text-xs text-[#A1A1AA]">
                          For appointment scheduling &amp; general enquiries
                        </div>
                      </div>
                      <a
                        href={BUSINESS_INFO.phoneHref}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#A020F0] px-4 py-2.5 text-xs font-bold text-white shadow-[0_0_20px_-4px_rgba(160,32,240,0.6)] transition-all hover:bg-[#8E18D8]"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        <span>Call Primary</span>
                      </a>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#292932] bg-[#111116]/90 p-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E81CFF]">
                          Secondary Support Line
                        </span>
                        <div className="font-display text-lg font-bold text-white sm:text-xl">
                          {BUSINESS_INFO.secondaryPhoneDisplay}
                        </div>
                        <div className="text-xs text-[#A1A1AA]">
                          For pickup coordination &amp; urgent assistance
                        </div>
                      </div>
                      <a
                        href={BUSINESS_INFO.secondaryPhoneHref}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#A020F0]/50 bg-[#171722] px-4 py-2.5 text-xs font-bold text-white transition-all hover:border-[#E81CFF] hover:bg-[#A020F0]"
                      >
                        <Phone className="h-3.5 w-3.5 text-[#E81CFF]" />
                        <span>Call Secondary</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Popular Services list for reference */}
                <div className="mt-5">
                  <span className="text-[11px] font-semibold tracking-wider text-[#A1A1AA] uppercase">
                    Popular Services Handled:
                  </span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {QUICK_SERVICE_PILLS.map((srv) => (
                      <span
                        key={srv}
                        className="rounded-lg border border-[#292932] bg-[#17171F] px-2.5 py-1 text-xs font-medium text-[#D4D4D8]"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Primary Call to Action Button */}
              <div className="mt-6 border-t border-[#292932] pt-4">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="group flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl border border-[#E81CFF]/60 bg-[#A020F0] px-5 py-3.5 text-sm font-bold text-white shadow-[0_0_30px_-4px_rgba(160,32,240,0.7)] transition-all hover:bg-[#8E18D8] hover:shadow-[0_0_40px_-2px_rgba(232,28,255,0.75)]"
                >
                  <Phone className="h-4.5 w-4.5 text-white transition-transform group-hover:scale-110" />
                  <span>Call Studio Desk: {BUSINESS_INFO.phoneDisplay}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#A1A1AA]">
                  <span>Direct phone booking · Mon – Sun: 8:30 AM – 7:30 PM</span>
                  <a
                    href={BUSINESS_INFO.secondaryPhoneHref}
                    className="inline-flex items-center gap-1 font-semibold text-[#E81CFF] hover:underline"
                  >
                    <span>Alternate: {BUSINESS_INFO.secondaryPhoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
