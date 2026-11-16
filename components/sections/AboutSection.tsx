"use client";

import React from "react";
import {
  Wrench,
  ShieldCheck,
  Droplets,
  Layers,
  Award,
  Truck,
  Cpu,
  Shield,
} from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";

const PILLARS = [
  {
    icon: Wrench,
    title: "Mechanical Repair & Diagnostics",
    description:
      "Certified automotive mechanical repair, computerized OBD-II scanning, oil & fluid servicing, and brake/suspension overhauls.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Paint Protection",
    description:
      "Multi-tier 9H Ceramic, Graphene, Borophene coatings, and 175–195 micron self-healing PPF engineered to shield clear coat.",
  },
  {
    icon: Droplets,
    title: "Professional Detailing & Cleaning",
    description:
      "Structured multi-step wash procedures covering snow foam, under-chassis rinsing, wheel arches, iron decontamination, and interior steam care.",
  },
  {
    icon: Layers,
    title: "Tailored Vehicle Care Packages",
    description:
      "Engineered treatment packages calibrated for cars across S to XXL categories alongside specialized two-wheeler washes.",
  },
  {
    icon: Award,
    title: "Certified Materials & Craftsmanship",
    description:
      "Authentic products including 3M, Turtle Wax, Gareware PPF, and custom-tailored Feno, Napa & Porsche leather seat upholstery.",
  },
  {
    icon: Truck,
    title: "Doorstep Valet Pickup & Delivery",
    description:
      "Punctual doorstep vehicle pickup and drop-off available across Alappuzha so your vehicle gets studio care without interrupting your schedule.",
  },
];

const METRICS = [
  {
    label: "OBD-II",
    sub: "Computerized Scan",
    desc: "Diagnostic ECU & sensor telemetry calibration",
    icon: Cpu,
  },
  {
    label: "9H / 10H",
    sub: "Ceramic & Graphene",
    desc: "Chemical, UV & scratch-resistant matrix",
    icon: Shield,
  },
  {
    label: "195µm",
    sub: "Self-Healing PPF",
    desc: "High-gloss thermoplastic urethane barrier",
    icon: Layers,
  },
  {
    label: "100%",
    sub: "Spotless Rinsing",
    desc: "De-ionized water for streak-free paint finish",
    icon: Droplets,
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 w-full overflow-hidden border-t border-[#292932] bg-[#09090D] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Cardilac Standard"
          title="WHY VEHICLE OWNERS CHOOSE CARDILAC GARAGE."
          description="Cardilac Garage is Alappuzha's premier automotive workshop and detailing center, combining certified mechanical engineering with state-of-the-art paint protection and bespoke craftsmanship."
        />

        {/* 6 Unified Pillars in Responsive Grid (Rendered once, no duplicate DOM nodes) */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group flex flex-col justify-between rounded-xl border border-[#292932] bg-[#14141C] p-6 transition-all duration-300 hover:border-[#A020F0]/60 hover:bg-[#181822] hover:shadow-[0_12px_32px_-10px_rgba(160,32,240,0.25)]"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#A020F0]/40 bg-[#111116] transition-colors group-hover:border-[#A020F0] group-hover:bg-[#A020F0]/15">
                    <Icon className="h-6 w-6 text-[#E81CFF]" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white group-hover:text-[#E81CFF] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Benchmarks Strip */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 border-t border-[#24242D] pt-8">
          {METRICS.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="rounded-xl border border-[#24242D] bg-[#111116]/80 p-4 transition-colors hover:border-[#A020F0]/40"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-black text-white sm:text-2xl">
                    {metric.label}
                  </span>
                  <Icon className="h-4 w-4 text-[#A020F0]" />
                </div>
                <div className="mt-1 text-xs font-semibold text-[#E81CFF]">
                  {metric.sub}
                </div>
                <p className="mt-1 text-[11px] leading-tight text-[#71717A]">
                  {metric.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
