"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  X,
  Shield,
  Sparkles,
  Droplets,
  Armchair,
  Bike,
  Sparkle,
} from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PRICING_DATA } from "@/data/pricing";
import { SERVICES_DATA, ServiceItem } from "@/data/services";
import { PricingAccordionGroup } from "@/components/pricing/PricingAccordion";
import { ServiceDetails } from "@/components/services/ServiceDetails";

export function PricingSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openAccordionId, setOpenAccordionId] = useState<string | null>("car-wash");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordionId((prev) => (prev === id ? null : id));
  };

  const handleViewDetails = (serviceId: string) => {
    const srv = SERVICES_DATA.find((s) => s.id === serviceId);
    if (srv) {
      setSelectedService(srv);
    }
  };

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

  // Group into clean, strictly verified categories
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

  const interiorCare = useMemo(
    () => filteredData.filter((e) => e.category === "interior-care"),
    [filteredData]
  );

  const seatCoversAndFilm = useMemo(
    () => filteredData.filter((e) => e.category === "accessories"),
    [filteredData]
  );

  const bikeWash = useMemo(
    () => filteredData.filter((e) => e.category === "bike-wash"),
    [filteredData]
  );

  return (
    <section
      id="packages"
      className="relative border-t border-[#292932] bg-[#09090D] py-16 lg:py-24"
    >
      {/* Anchor alias for #pricing to preserve existing links */}
      <span id="pricing" className="pointer-events-none absolute top-0 h-0 w-0" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Detailed Service Packages"
            title="COMPREHENSIVE TREATMENT SPECIFICATIONS."
            description="Expand any category below to inspect complete inclusions and access full size-wise pricing and warranty details."
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
                aria-label="Clear package search"
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

        {/* Expandable Accordion Groups (One open at a time) */}
        <div className="mt-8 space-y-4">
          {washPackages.length > 0 && (
            <PricingAccordionGroup
              id="car-wash"
              title="Car Wash & Cleaning"
              subtitle="Basic foam wash, executive under-chassis wash, and premium ceramic wash"
              icon={Droplets}
              entries={washPackages}
              isOpen={openAccordionId === "car-wash"}
              onToggle={() => toggleAccordion("car-wash")}
              onViewDetails={handleViewDetails}
            />
          )}

          {paintProtection.length > 0 && (
            <PricingAccordionGroup
              id="paint-protection"
              title="Paint Protection & Coatings"
              subtitle="Ceramic, Russian brand graphene, self-healing borophene, Garware PPF, and antic layer"
              icon={Shield}
              entries={paintProtection}
              isOpen={openAccordionId === "paint-protection"}
              onToggle={() => toggleAccordion("paint-protection")}
              onViewDetails={handleViewDetails}
            />
          )}

          {polishing.length > 0 && (
            <PricingAccordionGroup
              id="polishing"
              title="Polishing & Protective Treatments"
              subtitle="Single-step polishing, graphene waxing, underbody and silencer coatings, headlight restoration, and tail lamp tinting"
              icon={Sparkles}
              entries={polishing}
              isOpen={openAccordionId === "polishing"}
              onToggle={() => toggleAccordion("polishing")}
              onViewDetails={handleViewDetails}
            />
          )}

          {interiorCare.length > 0 && (
            <PricingAccordionGroup
              id="interior-care"
              title="Interior Deep Cleaning"
              subtitle="Intensive cabin interior cleaning for upholstery, carpets, and trim"
              icon={Sparkle}
              entries={interiorCare}
              isOpen={openAccordionId === "interior-care"}
              onToggle={() => toggleAccordion("interior-care")}
              onViewDetails={handleViewDetails}
            />
          )}

          {seatCoversAndFilm.length > 0 && (
            <PricingAccordionGroup
              id="seat-covers"
              title="Seat Covers & Cooling Film"
              subtitle="Custom Feno, Napa, and Porsche leather seat covers & heat-rejection cooling films"
              icon={Armchair}
              entries={seatCoversAndFilm}
              isOpen={openAccordionId === "seat-covers"}
              onToggle={() => toggleAccordion("seat-covers")}
              onViewDetails={handleViewDetails}
            />
          )}

          {bikeWash.length > 0 && (
            <PricingAccordionGroup
              id="bike-wash"
              title="Two-Wheeler Wash"
              subtitle="Basic and detailed wash with chain cleaning and spray wax for motorcycles and scooters"
              icon={Bike}
              entries={bikeWash}
              isOpen={openAccordionId === "bike-wash"}
              onToggle={() => toggleAccordion("bike-wash")}
              onViewDetails={handleViewDetails}
            />
          )}
        </div>
      </div>

      {/* Detail Modal View */}
      {selectedService && (
        <ServiceDetails
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}
