"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  X,
  Car,
  Shield,
  Sparkles,
  Droplets,
  Armchair,
  Bike,
} from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PRICING_DATA } from "@/data/pricing";
import { PricingAccordionGroup } from "@/components/pricing/PricingAccordion";

export function PricingSection() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter entries based on search
  const filteredData = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return PRICING_DATA;
    return PRICING_DATA.filter(
      (entry) =>
        entry.title.toLowerCase().includes(q) ||
        (entry.description?.toLowerCase().includes(q) ?? false) ||
        (entry.subtitle?.toLowerCase().includes(q) ?? false) ||
        entry.features.some((f) => f.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  // Group into clean categories
  const washPackages = useMemo(
    () => filteredData.filter((e) => e.category === "car-wash"),
    [filteredData]
  );

  const paintProtection = useMemo(
    () => filteredData.filter((e) => e.category === "paint-protection"),
    [filteredData]
  );

  const polishing = useMemo(
    () => filteredData.filter((e) => e.category === "polishing"),
    [filteredData]
  );

  const interiorAndSpecialty = useMemo(
    () => filteredData.filter((e) => e.category === "interior-care"),
    [filteredData]
  );

  const accessories = useMemo(
    () => filteredData.filter((e) => e.category === "accessories"),
    [filteredData]
  );

  const bikeWash = useMemo(
    () => filteredData.filter((e) => e.category === "bike-wash"),
    [filteredData]
  );

  return (
    <section
      id="pricing"
      className="border-t border-[#292932] bg-[#09090D] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Detailed Service Packages"
            title="COMPREHENSIVE TREATMENT SPECIFICATIONS."
            description="Expand any category below to inspect complete stage-by-stage inclusions, surface protection standards, and certified multi-year warranties."
          />

          {/* Search Box */}
          <div className="relative w-full sm:w-72 shrink-0">
            <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#A1A1AA]" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search package or coating..."
              aria-label="Search service packages"
              className="w-full rounded-lg border border-[#292932] bg-[#111116] py-2.5 pr-9 pl-9 text-xs font-medium text-white placeholder-[#71717A] focus:border-[#A020F0] focus:outline-none"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer text-[#A1A1AA] hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            ) : null}
          </div>
        </div>

        {/* Empty State */}
        {filteredData.length === 0 ? (
          <div className="mt-10 rounded-xl border border-[#292932] bg-[#111116] p-10 text-center">
            <p className="text-base font-bold text-white">
              No packages matched &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="mt-1 text-xs text-[#A1A1AA]">
              Try searching for &quot;wash&quot;, &quot;graphene&quot;, or &quot;interior&quot;.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="mt-4 cursor-pointer rounded-lg bg-[#A020F0] px-4 py-2 text-xs font-semibold text-white"
            >
              Clear Search
            </button>
          </div>
        ) : null}

        {/* Expandable Accordion Groups */}
        <div className="mt-8 space-y-4">
          {washPackages.length > 0 ? (
            <PricingAccordionGroup
              id="car-wash"
              title="Car Wash &amp; Hydrophobic Care"
              subtitle="Basic foam wash, underbody rinse &amp; SiO2 ceramic wash tiers"
              icon={Droplets}
              entries={washPackages}
              defaultOpen={true}
            />
          ) : null}

          {paintProtection.length > 0 ? (
            <PricingAccordionGroup
              id="paint-protection"
              title="Ceramic, Graphene &amp; Borophene Coatings"
              subtitle="Certified 9H &amp; 10H long-term paint protection with multi-year warranty"
              icon={Shield}
              entries={paintProtection}
              defaultOpen={false}
            />
          ) : null}

          {polishing.length > 0 ? (
            <PricingAccordionGroup
              id="polishing"
              title="Paint Correction &amp; Machine Polishing"
              subtitle="Swirl removal, single step glaze &amp; 2-step compound rubbing"
              icon={Sparkles}
              entries={polishing}
              defaultOpen={false}
            />
          ) : null}

          {interiorAndSpecialty.length > 0 ? (
            <PricingAccordionGroup
              id="interior-care"
              title="Interior Spa &amp; Underbody Treatments"
              subtitle="Deep interior steam wash, engine bay dressing &amp; anti-rust coats"
              icon={Car}
              entries={interiorAndSpecialty}
              defaultOpen={false}
            />
          ) : null}

          {accessories.length > 0 ? (
            <PricingAccordionGroup
              id="accessories"
              title="Seat Covers, Cooling Film &amp; Floor Mats"
              subtitle="Custom Feno, Napa, Porsche upholstery &amp; heat-rejection films"
              icon={Armchair}
              entries={accessories}
              defaultOpen={false}
            />
          ) : null}

          {bikeWash.length > 0 ? (
            <PricingAccordionGroup
              id="bike-wash"
              title="Two-Wheeler Detailing &amp; Wash"
              subtitle="Superbike foam wash, ceramic hydrophobic wash &amp; Teflon glaze"
              icon={Bike}
              entries={bikeWash}
              defaultOpen={false}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
