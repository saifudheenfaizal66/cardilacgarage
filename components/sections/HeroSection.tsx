"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

// Lightweight scroll-parallax only on desktop/tablet
function useParallax(ref: React.RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  return y;
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxY = useParallax(sectionRef);

  // Scroll-reveal for mobile stats ticker
  const statsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("is-visible");
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#09090D]
        pt-24 pb-28
        mobile-hero-fullscreen
        sm:pt-28 sm:pb-20 lg:min-h-[92vh]"
    >
      {/* ── Background Image with Parallax (desktop) ── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: parallaxY }}
        aria-hidden="true"
      >
        <img
          src="/images/hero-studio.jpg"
          alt=""
          className="h-[115%] w-full object-cover object-center"
          style={{ opacity: 0.72 }}
          fetchPriority="high"
        />
      </motion.div>

      {/* ── Layered Obsidian Gradients ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0
          bg-gradient-to-r from-[#09090D] via-[#09090D]/88 to-[#09090D]/35
          lg:to-[#09090D]/40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0
          bg-gradient-to-t from-[#09090D] via-transparent to-[#09090D]/80"
      />

      {/* ── Mobile: extra bottom fade for bottom nav clearance ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40
          bg-gradient-to-t from-[#09090D] to-transparent lg:hidden"
      />

      {/* ── Ambient Purple Orb ── */}
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

      {/* ── Main Content ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* ── Eyebrow ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-4 inline-flex items-center gap-2.5"
          >
            <span className="h-px w-8 bg-gradient-to-r from-[#A020F0] to-[#E81CFF]" aria-hidden="true" />
            <span className="text-[11px] font-bold tracking-[0.3em] text-[#A020F0] uppercase sm:text-xs">
              Cardilac Garage &mdash; Alappuzha
            </span>
          </motion.div>

          {/* ── Headline / Evocative Slogan ── */}
          <h1
            className="font-display font-extrabold tracking-tight text-white
              text-[clamp(1.65rem,6.5vw,3.75rem)] leading-[1.1] sm:leading-[1.08] break-words"
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

          {/* ── Supporting Copy — concise, no redundancy ── */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-5 max-w-xl text-[clamp(0.875rem,3vw,1.0625rem)] leading-relaxed text-[#C4C4CC]"
          >
            From ceramic coatings and paint protection film to hand-stitched leather interiors — every service is engineered for those who demand more.
          </motion.p>

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            {/* Primary Action */}
            <a
              href="#services"
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
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#A020F0]/50 bg-[#171724]/90 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#20202F] hover:border-[#E81CFF] min-h-[52px]"
            >
              <Phone className="h-4 w-4 text-[#E81CFF]" />
              <span>Call Now</span>
            </a>
          </motion.div>

          {/* Visible Direct Phone Desk strip right in hero */}
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-[#24242D] bg-[#12121A]/85 p-3.5 text-xs text-[#A1A1AA] backdrop-blur-sm shadow-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-[#E81CFF]" />
              <span className="text-[#71717A] uppercase text-[10px] font-semibold">Phone 1:</span>
              <a href={BUSINESS_INFO.phoneHref} className="font-bold text-white hover:text-[#E81CFF] transition-colors">
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
            <span className="text-[#3F3F46]">|</span>
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-[#E81CFF]" />
              <span className="text-[#71717A] uppercase text-[10px] font-semibold">Phone 2:</span>
              <a href={BUSINESS_INFO.secondaryPhoneHref} className="font-bold text-white hover:text-[#E81CFF] transition-colors">
                {BUSINESS_INFO.secondaryPhoneDisplay}
              </a>
            </div>
            <span className="text-[#3F3F46] hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="text-[#71717A] uppercase text-[10px] font-semibold">Location:</span>
              <span className="text-[#D4D4D8] font-medium">{BUSINESS_INFO.locationShort}</span>
            </div>
          </div>

          {/* ── Mobile Quick Stats strip ── */}
          <div
            ref={statsRef}
            className="reveal-on-scroll mt-10 grid grid-cols-3 gap-2 sm:hidden"
          >
            {[
              { value: "9H+", label: "Ceramic Grade" },
              { value: "PPF", label: "Paint Film" },
              { value: "P&D", label: "Pickup & Delivery" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-surface flex flex-col items-center rounded-xl border border-[#292932]
                  px-2 py-3 text-center"
              >
                <span className="font-display text-lg font-extrabold text-[#E81CFF]">
                  {stat.value}
                </span>
                <span className="mt-0.5 text-[10px] font-medium text-[#A1A1AA]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* ── Mobile Scroll Hint ── */}
          <div className="mt-7 flex justify-center sm:hidden" aria-hidden="true">
            <a href="#highlights" className="flex flex-col items-center gap-1.5 group">
              <span className="text-[10px] font-semibold tracking-[0.2em] text-[#71717A] uppercase group-hover:text-[#A1A1AA] transition-colors">
                Scroll
              </span>
              <ChevronDown
                className="h-4 w-4 text-[#71717A] group-hover:text-[#A020F0] transition-colors"
                style={{ animation: "hint-bounce 1.6s ease-in-out infinite" }}
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
