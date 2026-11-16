"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Phone, MapPin, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { smoothScrollTo } from "@/components/common/scrollHelper";

// Lightweight scroll-parallax on desktop/tablet
function useParallax(ref: React.RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  return useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxY = useParallax(sectionRef);

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo("services", 84);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#09090D] min-h-[92vh] flex flex-col justify-between"
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
          style={{ opacity: 0.6 }}
          fetchPriority="high"
        />
      </motion.div>

      {/* ── Layered Gradients ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#09090D] via-[#09090D]/90 to-[#09090D]/45"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-[#09090D] via-[#09090D]/50 to-[#09090D]/80"
      />

      {/* ── Ambient Purple Orbs ── */}
      <div
        aria-hidden="true"
        className="orb-animate pointer-events-none absolute -left-24 top-1/4 z-0 h-72 w-72 rounded-full bg-[#A020F0]/18 blur-[120px] sm:h-96 sm:w-96 sm:-left-16"
      />
      <div
        aria-hidden="true"
        className="orb-animate pointer-events-none absolute right-0 top-1/3 z-0 h-48 w-48 rounded-full bg-[#E81CFF]/08 blur-[100px] sm:h-64 sm:w-64"
        style={{ animationDelay: "3s" }}
      />

      {/* ── Main Hero Content ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pt-28 pb-12 sm:px-6 sm:pt-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#A020F0]/30 bg-[#12121A]/80 px-3.5 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E81CFF] shadow-[0_0_8px_#E81CFF]" aria-hidden="true" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#E81CFF] uppercase sm:text-xs">
              Cardilac Garage &bull; Detailing &middot; Coating &middot; Protection
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-extrabold tracking-tight text-white text-[clamp(2rem,6vw,4.25rem)] leading-[1.08] sm:leading-[1.05] break-words">
            Elevate Your Drive:
            <br />
            <span className="shimmer-gradient">Bespoke Care &amp; Precision</span>{" "}
            <span className="text-[#C4C4CC] font-bold">for Your Ride.</span>
          </h1>

          {/* One-Line Subcopy */}
          <p className="mt-4 max-w-2xl text-[clamp(0.95rem,2.5vw,1.125rem)] leading-relaxed text-[#C4C4CC]">
            Professional car detailing, coating and protection studio in Alappuzha.
          </p>

          {/* 2 Primary CTAs */}
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            {/* CTA 1: Explore Services */}
            <a
              href="#services"
              onClick={handleScrollToServices}
              className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#A020F0] via-[#B94AF7] to-[#E81CFF] p-[1px] shadow-[0_0_28px_-4px_rgba(160,32,240,0.65)] transition-all duration-300 hover:shadow-[0_0_40px_-2px_rgba(232,28,255,0.75)] active:scale-95 min-h-[50px]"
            >
              <span className="inline-flex h-full w-full items-center justify-center gap-2 rounded-[11px] bg-[#09090D]/90 px-6 py-3 text-sm font-bold tracking-wide text-white backdrop-blur-sm transition-all group-hover:bg-[#09090D]/75">
                <span>Explore Services</span>
                <ArrowRight className="h-4 w-4 text-[#E81CFF] transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>

            {/* CTA 2: Call Now */}
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#A020F0]/50 bg-[#171724]/90 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#20202F] hover:border-[#E81CFF] min-h-[50px] shadow-[0_0_20px_-6px_rgba(160,32,240,0.3)] active:scale-95"
            >
              <Phone className="h-4 w-4 text-[#E81CFF]" />
              <span>Call Now</span>
            </a>
          </div>

          {/* One Compact Info Row: Hours & Location (No phone numbers) */}
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-[#A1A1AA]">
            <div className="inline-flex items-center gap-2 rounded-lg border border-[#292932] bg-[#12121A]/85 px-3 py-1.5 backdrop-blur-sm">
              <Clock className="h-3.5 w-3.5 text-[#E81CFF]" />
              <span className="text-[#E4E4E7] font-medium">{BUSINESS_INFO.workingHours}</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg border border-[#292932] bg-[#12121A]/85 px-3 py-1.5 backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 text-[#E81CFF]" />
              <span className="text-[#E4E4E7] font-medium">{BUSINESS_INFO.locationShort}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll to Explore Cue (Scrolls to #services) ── */}
      <div className="relative z-10 flex justify-center pb-6">
        <a
          href="#services"
          onClick={handleScrollToServices}
          className="group flex flex-col items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E81CFF] rounded-lg p-1"
          aria-label="Scroll to services catalogue"
        >
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#A1A1AA] uppercase transition-colors group-hover:text-white">
            Scroll to explore
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#292932] bg-[#12121A]/80 backdrop-blur-md transition-all duration-300 group-hover:border-[#A020F0] group-hover:bg-[#171722] group-hover:shadow-[0_0_15px_-2px_rgba(160,32,240,0.6)]">
            <ChevronDown
              className="h-4 w-4 text-[#E81CFF] transition-transform duration-300 group-hover:translate-y-0.5"
              style={{ animation: "hint-bounce 1.6s ease-in-out infinite" }}
            />
          </div>
        </a>
      </div>
    </section>
  );
}
