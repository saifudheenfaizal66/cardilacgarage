"use client";

import React, { useRef, useState } from "react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceDetails } from "@/components/services/ServiceDetails";
import {
  SERVICE_CATEGORIES,
  SERVICES_DATA,
  ServiceCategorySlug,
  ServiceItem,
} from "@/data/services";
import { ChevronLeft, ChevronRight } from "lucide-react";

function MobileServiceCarousel({
  items,
  onViewDetails,
}: {
  items: ServiceItem[];
  onViewDetails: (s: ServiceItem) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 12
      : 240;
    el.scrollBy({ left: dir === "right" ? cardW : -cardW, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="mobile-snap-scroll"
        style={{ paddingBottom: "1rem" }}
      >
        {items.map((service) => (
          <div
            key={service.id}
            className="mobile-snap-item w-[75vw] max-w-[300px] flex-shrink-0"
          >
            <ServiceCard service={service} onViewDetails={onViewDetails} />
          </div>
        ))}
        <div className="w-4 flex-shrink-0" />
      </div>

      {/* Nav arrows — only shown if more than 2 cards */}
      {items.length > 2 && (
        <div className="mt-2 flex items-center justify-end gap-2 pr-5">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous service"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#292932] bg-[#17171F] text-white active:bg-[#A020F0] transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next service"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#292932] bg-[#17171F] text-white active:bg-[#A020F0] transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | ServiceCategorySlug
  >("all");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null
  );

  const visibleGroups =
    activeCategory === "all"
      ? SERVICE_CATEGORIES
      : SERVICE_CATEGORIES.filter((cat) => cat.slug === activeCategory);

  return (
    <section
      id="services"
      className="border-t border-[#292932] bg-[#111116] py-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Service Catalogue"
            title="PRECISION CARE ACROSS EVERY SURFACE."
            description="Explore our complete automotive and two-wheeler detailing portfolio, organized by specialized treatment category."
          />

          <div className="hidden text-xs font-medium text-[#A1A1AA] lg:block">
            Showing{" "}
            <span className="font-bold text-white">
              {activeCategory === "all"
                ? SERVICES_DATA.length
                : SERVICES_DATA.filter((s) => s.category === activeCategory)
                    .length}
            </span>{" "}
            services
          </div>
        </div>

        {/* Category Filter — mobile: horizontal snap scroll, desktop: wrap */}
        <div
          role="tablist"
          aria-label="Service categories"
          className="mt-6 lg:mt-8"
        >
          {/* Mobile pill strip */}
          <div className="mobile-snap-scroll lg:hidden">
            {[
              {
                slug: "all" as const,
                title: `All (${SERVICES_DATA.length})`,
                code: "★",
              },
              ...SERVICE_CATEGORIES.map((g) => ({
                slug: g.slug as "all" | ServiceCategorySlug,
                title: `${g.title} (${
                  SERVICES_DATA.filter((s) => s.category === g.slug).length
                })`,
                code: g.code,
              })),
            ].map((item) => {
              const isActive = activeCategory === item.slug;
              return (
                <button
                  key={item.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() =>
                    setActiveCategory(item.slug as "all" | ServiceCategorySlug)
                  }
                  className={`mobile-snap-item mobile-tap-highlight flex-shrink-0 rounded-full border px-4 py-2.5 text-xs font-bold tracking-wide transition-all whitespace-nowrap min-h-[44px]
                    ${
                      isActive
                        ? "border-[#A020F0] bg-[#A020F0] text-white shadow-[0_0_20px_-6px_rgba(160,32,240,0.65)]"
                        : "border-[#292932] bg-[#17171F] text-[#A1A1AA]"
                    }`}
                >
                  {item.title}
                </button>
              );
            })}
            <div className="w-4 flex-shrink-0" />
          </div>

          {/* Desktop wrap tabs */}
          <div className="hidden flex-wrap gap-2 border-b border-[#292932] pb-5 lg:flex">
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === "all"}
              onClick={() => setActiveCategory("all")}
              className={`cursor-pointer rounded-md border px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                activeCategory === "all"
                  ? "border-[#A020F0] bg-[#A020F0] text-white shadow-[0_0_20px_-6px_rgba(160,32,240,0.65)]"
                  : "border-[#292932] bg-[#17171F] text-[#A1A1AA] hover:border-[#A020F0]/50 hover:text-white"
              }`}
            >
              All Categories ({SERVICES_DATA.length})
            </button>

            {SERVICE_CATEGORIES.map((group) => {
              const isActive = activeCategory === group.slug;
              const count = SERVICES_DATA.filter(
                (s) => s.category === group.slug
              ).length;
              return (
                <button
                  key={group.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(group.slug)}
                  className={`cursor-pointer rounded-md border px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? "border-[#A020F0] bg-[#A020F0] text-white shadow-[0_0_20px_-6px_rgba(160,32,240,0.65)]"
                      : "border-[#292932] bg-[#17171F] text-[#A1A1AA] hover:border-[#A020F0]/50 hover:text-white"
                  }`}
                >
                  <span className="mr-1.5 text-[10px] opacity-75">{group.code}</span>
                  {group.title} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Service Groups */}
        <div className="mt-8 space-y-12 lg:mt-12 lg:space-y-14">
          {visibleGroups.map((group) => {
            const items = SERVICES_DATA.filter((s) => s.category === group.slug);
            return (
              <div key={group.slug}>
                <div className="mb-5 flex flex-col gap-2 border-l-2 border-[#A020F0] pl-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <span className="text-[11px] font-semibold tracking-[0.2em] text-[#A020F0] uppercase">
                      Category {group.code}
                    </span>
                    <h3 className="mt-0.5 font-display text-xl font-bold text-white sm:text-2xl">
                      {group.title}
                    </h3>
                  </div>
                  <p className="max-w-xl text-xs leading-relaxed text-[#A1A1AA] sm:text-sm">
                    {group.subtitle}
                  </p>
                </div>

                {/* Mobile: horizontal carousel */}
                <div className="lg:hidden">
                  <MobileServiceCarousel
                    items={items}
                    onViewDetails={setSelectedService}
                  />
                </div>

                {/* Desktop: grid */}
                <div
                  className={`hidden lg:grid gap-6 ${
                    group.slug === "two-wheeler-care"
                      ? "grid-cols-1 md:grid-cols-2 max-w-5xl"
                      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  }`}
                >
                  {items.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      onViewDetails={setSelectedService}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Details Modal */}
      <ServiceDetails
        key={selectedService?.id ?? "closed"}
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
