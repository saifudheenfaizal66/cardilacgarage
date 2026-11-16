"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Phone, MapPin, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { smoothScrollTo } from "@/components/common/scrollHelper";

// Lightweight scroll-parallax only on desktop/tablet
function useParallax(ref: React.RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  return y;
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxY = useParallax(sectionRef);

  const handleScrollToActions = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo("hero-actions", 84);
  };

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo("services", 84);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#09090D]"
    >
      {/* ── Background Image with Parallax (desktop) ── */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        style={{ y: parallaxY }}
        aria-hidden="true"
      >
        <img
          src="/images/hero-studio.jpg"
          alt=""
          className="h-[120%] w-full object-cover object-center"
          style={{ opacity: 0.65 }}
          fetchPriority="high"
        />
      </motion.div>

      {/* ── Layered Obsidian Gradients ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0
          bg-gradient-to-r from-[#09090D] via-[#09090D]/90 to-[#09090D]/40
          lg:to-[#09090D]/45"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0
          bg-gradient-to-t from-[#09090D] via-[#09090D]/50 to-[#09090D]/85"
      />

      {/* ── Ambient Purple Orbs ── */}
      <div
        aria-hidden="true"
        className="orb-animate pointer-events-none absolute -left-24 top-1/4 z-0
          h-72 w-72 rounded-full bg-[#A020F0]/18 blur-[120px]
          sm:h-96 sm:w-96 sm:-left-16"
      />
      <div
        aria-hidden="true"
        className="orb-animate pointer-events-none absolute right-0 top-1/3 z-0
          h-48 w-48 rounded-full bg-[#E81CFF]/08 blur-[100px]
          sm:h-64 sm:w-64"
        style={{ animationDelay: "3s" }}
      />

      {/* ─────────────────────────────────────────────────────────────────
          1. MINIMAL HERO TOP SECTION (INITIAL VIEW)
          Pure focus on branding, evocative slogan, and clean imagery.
          Action buttons and phone numbers are hidden from this initial view.
         ───────────────────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-between px-5 pt-28 pb-8 sm:px-6 sm:pt-32 sm:pb-12 lg:min-h-[92vh] lg:px-8">
        {/* Empty top spacer for flex balance */}
        <div aria-hidden="true" className="hidden sm:block sm:h-4" />

        {/* Center Content: Branding & Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="my-auto max-w-3xl"
        >
          {/* Eyebrow / Brand Lockup */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#A020F0]/30 bg-[#12121A]/80 px-3.5 py-1.5 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#E81CFF] shadow-[0_0_8px_#E81CFF]" aria-hidden="true" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#E81CFF] uppercase sm:text-xs">
              Cardilac Garage &mdash; Alappuzha
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1
            className="font-display font-extrabold tracking-tight text-white
              text-[clamp(1.85rem,6.8vw,4.25rem)] leading-[1.08] sm:leading-[1.05] break-words"
          >
            Elevate Your Drive:
            <br />
            <span className="shimmer-gradient">
              Bespoke Care &amp; Precision
            </span>
            <br className="hidden sm:block" />
            <span className="shimmer-gradient"> Accessories</span>
            {" "}
            <span className="text-[#C4C4CC] font-bold">
              for Your Ride.
            </span>
          </h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-5 max-w-xl text-[clamp(0.925rem,3.2vw,1.125rem)] leading-relaxed text-[#C4C4CC]"
          >
            From ceramic coatings and paint protection film to hand-stitched leather interiors — every service is engineered for those who demand more.
          </motion.p>
        </motion.div>

        {/* Bottom of Initial View: Minimalist Scroll-to-Explore Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex justify-center pt-6 pb-2"
        >
          <a
            href="#hero-actions"
            onClick={handleScrollToActions}
            className="group flex flex-col items-center gap-2 focus-visible:outline-none"
            aria-label="Scroll down to explore services and contact details"
          >
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#A1A1AA] uppercase transition-colors group-hover:text-white">
              Scroll to explore
            </span>
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#292932] bg-[#12121A]/80 backdrop-blur-md transition-all duration-300 group-hover:border-[#A020F0] group-hover:bg-[#171722] group-hover:shadow-[0_0_18px_-2px_rgba(160,32,240,0.6)]">
              <ChevronDown
                className="h-4 w-4 text-[#E81CFF] transition-transform duration-300 group-hover:translate-y-0.5"
                style={{ animation: "hint-bounce 1.6s ease-in-out infinite" }}
              />
            </div>
          </a>
        </motion.div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────
          2. REVEALED ON SCROLL: ACTIONS, CONTACT NUMBERS & STATS
          Naturally revealed as the user scrolls down past the initial viewport.
         ───────────────────────────────────────────────────────────────── */}
      <div
        id="hero-actions"
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-4 pb-20 sm:px-6 sm:pt-6 sm:pb-24 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* Quick Header */}
          <div className="mb-6 flex items-center justify-between border-b border-[#24242D] pb-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#E81CFF] shadow-[0_0_8px_#E81CFF]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-white uppercase sm:text-xs">
                Direct Studio Access &amp; Booking
              </span>
            </div>
            <span className="text-[11px] font-semibold text-[#A020F0] sm:text-xs">
              Alappuzha Studio
            </span>
          </div>

          {/* ── Primary Action Buttons ── */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Primary Action */}
            <a
              href="#services"
              onClick={handleScrollToServices}
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#A020F0] via-[#B94AF7] to-[#E81CFF] p-[1px] shadow-[0_0_32px_-4px_rgba(160,32,240,0.65)] transition-all duration-300 hover:shadow-[0_0_45px_-2px_rgba(232,28,255,0.75)] active:scale-95 min-h-[52px]"
            >
              <span className="inline-flex h-full w-full items-center justify-center gap-2.5 rounded-[11px] bg-[#09090D]/90 px-7 py-3.5 text-sm font-bold tracking-wide text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-[#09090D]/75">
                <span className="bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent">
                  Explore Services &amp; Packages
                </span>
                <ArrowRight className="h-4 w-4 text-[#E81CFF] transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>

            {/* Book Appointment → Call Now */}
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#A020F0]/50 bg-[#171724]/90 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#20202F] hover:border-[#E81CFF] min-h-[52px] shadow-[0_0_20px_-6px_rgba(160,32,240,0.3)] active:scale-95"
            >
              <Phone className="h-4 w-4 text-[#E81CFF]" />
              <span>Call Now</span>
            </a>
          </div>

          {/* ── Direct Phone Desk & Studio strip ── */}
          <div className="mt-6 rounded-2xl border border-[#24242D] bg-[#12121A]/90 p-4 sm:p-5 text-xs text-[#A1A1AA] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#A020F0]/20 text-[#E81CFF]">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-[10px] font-semibold uppercase text-[#71717A]">Phone 1 (Direct)</span>
                    <a href={BUSINESS_INFO.phoneHref} className="text-sm font-bold text-white transition-colors hover:text-[#E81CFF]">
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="hidden h-8 w-px bg-[#24242D] sm:block" />

                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#A020F0]/20 text-[#E81CFF]">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-[10px] font-semibold uppercase text-[#71717A]">Phone 2 (Direct)</span>
                    <a href={BUSINESS_INFO.secondaryPhoneHref} className="text-sm font-bold text-white transition-colors hover:text-[#E81CFF]">
                      {BUSINESS_INFO.secondaryPhoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="hidden h-8 w-px bg-[#24242D] sm:block" />

                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#A020F0]/20 text-[#E81CFF]">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-[10px] font-semibold uppercase text-[#71717A]">Location</span>
                    <span className="text-xs font-semibold text-white">
                      {BUSINESS_INFO.locationShort}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-1 sm:pt-0">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#292932] bg-[#171722] px-3 py-1 text-[11px] font-medium text-[#C4C4CC]">
                  <Clock className="h-3 w-3 text-[#E81CFF]" />
                  {BUSINESS_INFO.workingHours}
                </span>
              </div>
            </div>
          </div>

          {/* ── Quick Stats Grid ── */}
          <div className="mt-6 grid grid-cols-3 gap-2.5 sm:gap-4">
            {[
              { value: "9H+", label: "Ceramic Grade", sub: "Multi-Year Shield" },
              { value: "PPF", label: "Paint Film", sub: "Self-Healing TPU" },
              { value: "P&D", label: "Valet Service", sub: "Pickup & Delivery" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-surface flex flex-col items-center rounded-xl border border-[#292932] p-3 text-center transition-all duration-200 hover:border-[#A020F0]/50"
              >
                <span className="font-display text-lg font-extrabold text-[#E81CFF] sm:text-xl">
                  {stat.value}
                </span>
                <span className="mt-0.5 text-[11px] font-semibold text-white sm:text-xs">
                  {stat.label}
                </span>
                <span className="text-[10px] text-[#71717A] hidden sm:block">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
