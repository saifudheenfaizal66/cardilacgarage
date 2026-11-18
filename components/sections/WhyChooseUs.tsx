"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Droplets,
  Sparkles,
  Car,
  Award,
  Truck,
} from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Advanced Paint Protection",
    description:
      "Multi-tier Ceramic, Graphene, Borophene coatings, and 175–195 micron PPF engineered to guard clear coat.",
  },
  {
    icon: Droplets,
    title: "Professional Cleaning",
    description:
      "Structured multi-step wash procedures covering snow foam, under-chassis rinsing, wheel arches, and interior care.",
  },
  {
    icon: Sparkles,
    title: "Premium Coating Solutions",
    description:
      "Hydrophobic, anti-yellowing formulations including Russian-brand graphene and thermal self-healing borophene.",
  },
  {
    icon: Car,
    title: "Multiple Vehicle Care Packages",
    description:
      "Dedicated packages for cars across S to XXL categories alongside Basic and Detailed two-wheeler washes.",
  },
  {
    icon: Award,
    title: "Quality Materials",
    description:
      "Trusted products including 3M, Turtle Wax, Garware PPF, and tailored Feno, Napa & Porsche leather upholstery.",
  },
  {
    icon: Truck,
    title: "Pickup & Delivery Convenience",
    description:
      "Schedule doorstep pickup and drop-off in Alappuzha so your car gets studio care without disrupting your day.",
  },
];

function useMobileReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const items = container.querySelectorAll<HTMLElement>(".reveal-on-scroll");
    if (!items.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            (entry.target as HTMLElement).classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ref]);
}

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  useMobileReveal(sectionRef);

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="w-full max-w-full overflow-hidden border-t border-[#292932] bg-[#09090D] py-14 sm:py-16 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Cardilac Standard"
          title="WHY VEHICLE OWNERS CHOOSE CARDILAC."
          description="Focused craftsmanship and trusted coating chemistry built around long-term vehicle preservation."
          align="center"
        />

        {/* Mobile: 2-col staggered reveal grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 lg:hidden">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className={`mobile-card-press reveal-on-scroll rounded-2xl border border-[#292932] bg-[#17171F] p-4
                  ${index === REASONS.length - 1 && REASONS.length % 2 !== 0 ? "col-span-2" : ""}`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#A020F0]/40 bg-[#111116]">
                  <Icon className="h-4.5 w-4.5 text-[#A020F0]" />
                </div>
                {/* Accent line */}
                <div
                  aria-hidden="true"
                  className="mt-3 h-[1px] w-8 rounded-full bg-gradient-to-r from-[#A020F0] to-[#E81CFF]"
                />
                <h3 className="mt-2.5 font-display text-sm font-bold leading-snug text-white">
                  {reason.title}
                </h3>
                <p className="mt-1.5 text-[11px] leading-relaxed text-[#71717A]">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Desktop: animated 3-col grid */}
        <div className="mt-12 hidden gap-6 lg:grid lg:grid-cols-3">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group rounded-md border border-[#292932] bg-[#17171F] p-6 transition-all duration-300 hover:border-[#A020F0]/60 hover:bg-[#1A1A23]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md border border-[#A020F0]/40 bg-[#111116] transition-colors group-hover:border-[#A020F0] group-hover:bg-[#A020F0]/15">
                  <Icon className="h-5 w-5 text-[#A020F0]" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
