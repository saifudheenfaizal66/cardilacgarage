"use client";

import React from "react";
import {
  Phone,
  Navigation,
  Clock,
  MapPin,
  ChevronUp,
  Mail,
} from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { smoothScrollTo } from "@/components/common/scrollHelper";

const FOOTER_NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const STUDIO_SERVICES = [
  "Ceramic & Graphene Coating",
  "Garware PPF Wrapping",
  "Car Polishing (single step)",
  "Executive & Ceramic Wash",
  "Interior Deep Cleaning",
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#24242D] bg-[#09090D] text-[#A1A1AA]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Consolidated High-End Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand & Studio Summary */}
          <div className="space-y-4 lg:col-span-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("home", 90);
              }}
              className="inline-flex items-center gap-3 group focus-visible:outline-none"
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E81CFF]/45 bg-[#111116] shadow-[0_0_20px_-4px_rgba(232,28,255,0.4)] transition-transform duration-200 group-hover:scale-105">
                <img
                  src={BUSINESS_INFO.logos.emblem}
                  alt="Cardilac Garage logo"
                  className="h-7 w-7 object-contain"
                />
              </div>
              <img
                src={BUSINESS_INFO.logos.wordmarkLight}
                alt="Cardilac Garage logo"
                className="h-9 w-auto object-contain transition-all duration-200 group-hover:brightness-110 drop-shadow-[0_2px_10px_rgba(232,28,255,0.2)]"
              />
            </a>

            <p className="text-xs leading-relaxed text-[#71717A] max-w-sm">
              Premier car detailing, coating and protection studio in Alappuzha, specializing in ceramic and graphene coatings, Garware PPF, and precision vehicle detailing.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
              <MapPin className="h-3.5 w-3.5 text-[#E81CFF] shrink-0" />
              <span>Valanjavazhy, Vandanam, Alappuzha, Kerala</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 lg:col-span-2 lg:pl-4">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              {FOOTER_NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        smoothScrollTo(link.href.replace("#", ""), 90);
                      }
                    }}
                    className="transition-colors hover:text-[#E81CFF]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3 lg:col-span-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Studio Services
            </div>
            <ul className="space-y-2 text-xs text-[#71717A]">
              {STUDIO_SERVICES.map((srv) => (
                <li key={srv} className="hover:text-[#D4D4D8] transition-colors">
                  {srv}
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Desk & Direct Connect */}
          <div className="space-y-3 lg:col-span-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Studio Desk
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#D4D4D8]">
                <Clock className="h-3.5 w-3.5 text-[#A020F0] shrink-0" />
                <span>Mon – Sun: 8:30 AM – 7:30 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-[#E81CFF] shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="font-bold text-white hover:text-[#E81CFF] transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[#E81CFF] shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-[11px] text-[#A1A1AA] hover:text-[#E81CFF] transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[#A020F0]/60 bg-[#12121A] px-3 text-xs font-semibold text-white transition-colors hover:border-[#E81CFF] hover:bg-[#A020F0]/20"
              >
                <Phone className="h-3.5 w-3.5 text-[#E81CFF]" />
                <span>Call Primary</span>
              </a>

              <a
                href={BUSINESS_INFO.secondaryPhoneHref}
                className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[#24242D] bg-[#12121A] px-3 text-xs font-semibold text-white transition-colors hover:border-[#A020F0] hover:text-[#E81CFF]"
              >
                <Phone className="h-3.5 w-3.5 text-[#E81CFF]" />
                <span>Call Secondary</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-[#24242D] bg-[#12121A] px-3 text-xs font-semibold text-white transition-colors hover:border-[#A020F0] hover:text-[#E81CFF]"
              >
                <Navigation className="h-3.5 w-3.5 text-[#E81CFF]" />
                <span>Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Consolidated Bottom Copyright Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#24242D] pt-6 text-[11px] text-[#71717A] sm:flex-row">
          <p>
            © {new Date().getFullYear()} Cardilac Garage. Operated under registered business Cardilac. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[#52525B]">
              {BUSINESS_INFO.domain}
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ChevronUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
