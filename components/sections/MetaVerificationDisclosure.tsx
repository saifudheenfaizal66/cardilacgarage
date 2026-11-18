"use client";

import React from "react";
import {
  ShieldCheck,
  Building2,
  Wrench,
  Globe,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ExternalLink,
  Car,
  FileCheck,
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export function MetaVerificationDisclosure() {
  return (
    <section
      id="verification"
      className="relative border-b border-[#292932] bg-[#0C0C12] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Verification Header Tag */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E81CFF]/40 bg-[#17171F] px-4 py-1.5 shadow-[0_0_20px_-6px_rgba(232,28,255,0.4)]">
            <ShieldCheck className="h-4 w-4 text-[#E81CFF]" />
            <span className="text-xs font-bold tracking-widest text-[#E81CFF] uppercase">
              Official Meta Business Verification Disclosure
            </span>
          </div>

          <h2 className="mt-4 font-display text-2xl font-black uppercase tracking-tight text-white sm:text-3xl lg:text-4xl">
            BUSINESS IDENTITY &amp; REGISTRATION PROFILE
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[#A1A1AA] leading-relaxed">
            This official public disclosure confirms the legal registration, operating trade name,
            registered studio location, and contact details for Meta Business Verification reviewers.
          </p>
        </div>

        {/* ── PRIMARY DISCLOSURE HERO BOX ── */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#A020F0]/50 bg-gradient-to-b from-[#14141E] to-[#0E0E14] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
          {/* Explicit Legal Connection Notice */}
          <div className="rounded-xl border border-[#A020F0]/30 bg-[#171724]/90 p-5 sm:p-6 backdrop-blur-md">
            <div className="flex items-start gap-3.5">
              <FileCheck className="mt-1 h-6 w-6 shrink-0 text-[#E81CFF]" />
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#E81CFF]">
                  Official Legal Relationship Disclosure
                </h3>
                <p className="mt-2 text-base sm:text-lg font-medium leading-relaxed text-white">
                  &ldquo;<span className="font-bold text-[#E81CFF]">Cardilac Garage</span> is operated under our registered business <span className="font-bold text-white underline decoration-[#A020F0]">Cardilac</span>.&rdquo;
                </p>
                <p className="mt-2 text-xs text-[#A1A1AA]">
                  {BUSINESS_INFO.metaVerificationNotice}
                </p>
              </div>
            </div>
          </div>

          {/* 4-Column Key Verification Specifications Grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* 1. Official Registered Business Name */}
            <div className="flex flex-col rounded-xl border border-[#292932] bg-[#111116] p-5 transition-all hover:border-[#A020F0]/50">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
                <Building2 className="h-4 w-4 text-[#A020F0]" />
                <span>Registered Business Name</span>
              </div>
              <div className="mt-2 text-xl font-black text-white">
                {BUSINESS_INFO.legalRegisteredName}
              </div>
              <p className="mt-1.5 text-xs text-[#71717A] leading-relaxed">
                Official legal registered entity name appearing on all corporate and governmental registrations.
              </p>
            </div>

            {/* 2. Operating Brand / Garage Name (Highlighted) */}
            <div className="flex flex-col rounded-xl border border-[#E81CFF]/60 bg-[#16131F] p-5 shadow-[0_0_24px_-8px_rgba(232,28,255,0.3)]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E81CFF]">
                <Wrench className="h-4 w-4 text-[#E81CFF]" />
                <span>Operating Brand Name</span>
              </div>
              <div className="mt-2 text-xl font-black text-[#E81CFF]">
                {BUSINESS_INFO.operatingBrandName}
              </div>
              <p className="mt-1.5 text-xs text-[#C4C4CC] leading-relaxed">
                Primary customer-facing brand, studio facility name, and commercial operating trade name.
              </p>
            </div>

            {/* 3. Official Domain & Website */}
            <div className="flex flex-col rounded-xl border border-[#292932] bg-[#111116] p-5 transition-all hover:border-[#A020F0]/50">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
                <Globe className="h-4 w-4 text-[#A020F0]" />
                <span>Official Domain Name</span>
              </div>
              <a
                href={BUSINESS_INFO.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-xl font-black text-white hover:text-[#E81CFF] transition-colors"
              >
                <span>{BUSINESS_INFO.domain}</span>
                <ExternalLink className="h-4 w-4 text-[#E81CFF]" />
              </a>
              <p className="mt-1.5 text-xs text-[#71717A] leading-relaxed">
                Official web portal and digital presence owned and operated by Cardilac.
              </p>
            </div>

            {/* 4. Verification Contact Phone Lines */}
            <div className="flex flex-col rounded-xl border border-[#292932] bg-[#111116] p-5 transition-all hover:border-[#A020F0]/50">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
                <Phone className="h-4 w-4 text-[#A020F0]" />
                <span>Primary Contact Phones</span>
              </div>
              <div className="mt-2 space-y-1">
                <div>
                  <span className="text-[11px] text-[#A1A1AA]">Phone 1: </span>
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="text-sm font-bold text-white hover:text-[#E81CFF] transition-colors"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
                <div>
                  <span className="text-[11px] text-[#A1A1AA]">Phone 2: </span>
                  <a
                    href={BUSINESS_INFO.secondaryPhoneHref}
                    className="text-sm font-bold text-white hover:text-[#E81CFF] transition-colors"
                  >
                    {BUSINESS_INFO.secondaryPhoneDisplay}
                  </a>
                </div>
                <div className="pt-0.5">
                  <span className="text-[11px] text-[#A1A1AA]">Email: </span>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-xs font-bold text-[#E81CFF] hover:underline transition-colors"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>
              <p className="mt-1 text-xs text-[#71717A]">
                Direct studio lines for official reviewer checks and customer desk.
              </p>
            </div>
          </div>

          {/* ── ADDRESS & OPERATIONS BANNER ── */}
          <div className="mt-8 grid gap-6 border-t border-[#292932] pt-6 lg:grid-cols-12 lg:items-center">
            {/* Studio Address */}
            <div className="lg:col-span-7">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#E81CFF]" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA]">
                    Official Studio / Registered Business Address
                  </div>
                  <p className="mt-1 text-sm font-semibold text-white leading-relaxed">
                    {BUSINESS_INFO.address.full}
                  </p>
                  <p className="mt-0.5 text-xs text-[#71717A]">
                    Landmark: Ambalapuzha, Vandanam, Alappuzha District, Kerala 688005, India
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours & Quick Link */}
            <div className="flex flex-wrap items-center justify-start gap-4 lg:col-span-5 lg:justify-end">
              <div className="flex items-center gap-2 text-xs text-[#D4D4D8]">
                <Clock className="h-4 w-4 text-[#A020F0]" />
                <span>{BUSINESS_INFO.workingHours}</span>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#292932] bg-[#17171F] px-3.5 py-2 text-xs font-bold text-white hover:border-[#E81CFF] hover:text-[#E81CFF] transition-colors"
              >
                <span>Google Maps Location</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* ── SCOPE OF PROFESSIONAL GARAGE & DETAILING SERVICES ── */}
          <div className="mt-8 rounded-xl border border-[#292932] bg-[#0E0E14] p-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E81CFF]">
              <Car className="h-4 w-4" />
              <span>Registered Business Services &amp; Studio Capabilities</span>
            </div>
            <p className="mt-1.5 text-xs text-[#A1A1AA]">
              Cardilac Garage operates as a professional car detailing, coating and protection studio providing:
            </p>

            <div className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 text-xs text-[#D4D4D8]">
              {[
                "Ceramic, Graphene & Borophene Paint Coatings",
                "Precision Garware Paint Protection Film (PPF) Installation",
                "Antic Protective Layer Application",
                "Single-Step Car Machine Polishing",
                "Ceramic Polishing with Graphene Waxing",
                "3M & Turtle Wax Underbody & Silencer Coatings",
                "Professional Snow Foam & Ceramic Car Washes",
                "Two-Wheeler Basic & Detailed Washes",
                "Custom Feno, Napa & Porsche Leather Seat Covers",
              ].map((service) => (
                <div key={service} className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#E81CFF]" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
