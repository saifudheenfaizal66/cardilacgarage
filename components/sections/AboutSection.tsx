"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Droplets,
  SearchCheck,
  Truck,
  Wrench,
  Cpu,
  Sparkles,
  Activity,
  Layers,
  Gauge,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BUSINESS_INFO } from "@/data/business";

const ABOUT_PILLARS = [
  {
    icon: Wrench,
    title: "Automotive Repair & Maintenance",
    text: "Mechanical repairs, computerized OBD-II diagnostics, scheduled maintenance, and brake/suspension overhauls.",
  },
  {
    icon: Shield,
    title: "Advanced Paint Protection",
    text: "Ceramic, Graphene, Borophene coatings, and PPF wrapping for enduring gloss and surface resilience.",
  },
  {
    icon: Droplets,
    title: "Premium Cleaning & Detailing",
    text: "pH-balanced snow foams, iron & tar decontamination, steam sanitization, and interior restoration.",
  },
  {
    icon: SearchCheck,
    title: "Rigorous Multi-Point Inspections",
    text: "Thorough multi-point safety checks across electricals, fluids, chassis components, and underbody.",
  },
  {
    icon: Truck,
    title: "Convenient Pickup & Delivery",
    text: "Hassle-free doorstep pickup and drop-off available on enquiry across Alappuzha and nearby areas.",
  },
];

const TELEMETRY_METRICS = [
  {
    label: "OBD-II",
    sub: "Computerized Scan",
    desc: "Diagnostic ECU & Mechanical Calibration",
    icon: Cpu,
  },
  {
    label: "9H / 10H",
    sub: "Ceramic & Graphene",
    desc: "Chemical & UV Shielding Matrix",
    icon: Shield,
  },
  {
    label: "195µm",
    sub: "Self-Healing PPF",
    desc: "High-Gloss Thermoplastic Urethane",
    icon: Layers,
  },
  {
    label: "100%",
    sub: "Spotless Water",
    desc: "De-ionized 0-PPM Hydro Rinsing",
    icon: Droplets,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="w-full max-w-full overflow-hidden bg-[#09090D] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Copy & Pillars — full width now that image panel is removed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="w-full min-w-0 lg:col-span-12"
          >
            <SectionHeading
              eyebrow="About Cardilac Garage"
              title="PRECISION AUTOMOTIVE REPAIR, MAINTENANCE & DETAILING."
              description="Cardilac Garage is a premier automotive workshop and detailing center in Alappuzha, delivering certified mechanical repair, computerized diagnostics, scheduled servicing, and high-performance paint protection."
            />

            {/* Pillars */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {ABOUT_PILLARS.map((pillar, index) => {
                const Icon = pillar.icon;
                const isLast = index === ABOUT_PILLARS.length - 1;
                return (
                  <div
                    key={pillar.title}
                    className={`flex items-start gap-3 rounded-xl border border-[#24242D] bg-[#12121A]/70 p-3.5 transition-colors hover:border-[#A020F0]/50 ${
                      isLast ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#A020F0]/35 bg-[#171722]">
                      <Icon className="h-4 w-4 text-[#E81CFF]" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-white leading-snug">{pillar.title}</h3>
                      <p className="mt-1 text-[11px] leading-relaxed text-[#A1A1AA]">
                        {pillar.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
