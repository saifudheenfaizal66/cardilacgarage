"use client";

import React, { useRef, useState, useEffect } from "react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceDetails } from "@/components/services/ServiceDetails";
import {
  SERVICE_CATEGORIES,
  SERVICES_DATA,
  ServiceCategorySlug,
  ServiceItem,
} from "@/data/services";
import { ChevronDown } from "lucide-react";

type CategoryFilter = "all" | ServiceCategorySlug;

interface CategoryTabConfig {
  slug: CategoryFilter;
  label: string;
}

const CATEGORY_TABS: CategoryTabConfig[] = [
  { slug: "all", label: "All" },
  { slug: "paint-protection", label: "Paint Protection" },
  { slug: "car-wash-cleaning", label: "Car Wash" },
  { slug: "polishing-protection", label: "Polishing" },
  { slug: "interior-accessories", label: "Interior" },
  { slug: "two-wheeler-care", label: "Two-Wheeler" },
];

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const tabListRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement | null>(null);

  // Scroll active tab into view in mobile horizontal bar
  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeCategory]);

  const getCount = (slug: CategoryFilter): number => {
    if (slug === "all") return SERVICES_DATA.length;
    return SERVICES_DATA.filter((s) => s.category === slug).length;
  };

  const filteredServices =
    activeCategory === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const activeCategoryInfo =
    activeCategory === "all"
      ? null
      : SERVICE_CATEGORIES.find((cat) => cat.slug === activeCategory);

  // Keyboard navigation for tablist
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex = index;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      newIndex = (index + 1) % CATEGORY_TABS.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      newIndex = (index - 1 + CATEGORY_TABS.length) % CATEGORY_TABS.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      newIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      newIndex = CATEGORY_TABS.length - 1;
    } else {
      return;
    }

    const nextTab = CATEGORY_TABS[newIndex];
    setActiveCategory(nextTab.slug);
    const buttons = tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    buttons?.[newIndex]?.focus();
  };

  return (
    <section
      id="services"
      className="border-t border-[#292932] bg-[#111116] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header row with count and mobile dropdown */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Service Catalogue"
            title="PRECISION CARE ACROSS EVERY SURFACE."
            description="Explore our complete automotive and two-wheeler detailing portfolio, organized by specialized treatment category."
          />

          <div className="flex items-center justify-between gap-4">
            {/* Live Count */}
            <div className="text-xs font-medium text-[#A1A1AA]">
              Showing{" "}
              <span className="font-bold text-white">
                {filteredServices.length}
              </span>{" "}
              services
            </div>

            {/* Mobile Dropdown (stays 100% in sync with desktop chips) */}
            <div className="relative sm:hidden">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value as CategoryFilter)}
                aria-label="Filter services by category"
                className="appearance-none rounded-lg border border-[#A020F0]/50 bg-[#171724] py-2 pl-3 pr-8 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#E81CFF]"
              >
                {CATEGORY_TABS.map((tab) => (
                  <option key={tab.slug} value={tab.slug} className="bg-[#111116] text-white">
                    {tab.label} ({getCount(tab.slug)})
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#E81CFF]" />
            </div>
          </div>
        </div>

        {/* Tablist for desktop and horizontal scroll on mobile */}
        <div
          ref={tabListRef}
          role="tablist"
          aria-label="Service categories"
          className="mt-8 flex overflow-x-auto pb-2 scrollbar-none gap-2 border-b border-[#292932]"
        >
          {CATEGORY_TABS.map((tab, idx) => {
            const isActive = activeCategory === tab.slug;
            const count = getCount(tab.slug);
            return (
              <button
                key={tab.slug}
                ref={isActive ? activeTabRef : null}
                id={`tab-${tab.slug}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="services-grid"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveCategory(tab.slug)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className={`flex-shrink-0 cursor-pointer min-h-[44px] items-center rounded-xl border px-4 py-2.5 text-xs font-bold tracking-wide transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E81CFF] ${
                  isActive
                    ? "border-[#A020F0] bg-[#A020F0] text-white shadow-[0_0_20px_-6px_rgba(160,32,240,0.65)]"
                    : "border-[#292932] bg-[#17171F] text-[#A1A1AA] hover:border-[#A020F0]/50 hover:text-white"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`ml-1.5 text-[10px] rounded-full px-1.5 py-0.5 ${
                    isActive ? "bg-white/20 text-white" : "bg-[#111116] text-[#71717A]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Intro Header (Only shown when a specific category is filtered) */}
        {activeCategoryInfo && (
          <div className="mt-8 flex flex-col gap-2 border-l-2 border-[#A020F0] pl-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#A020F0] uppercase">
                Category {activeCategoryInfo.code}
              </span>
              <h3 className="mt-0.5 font-display text-xl font-bold text-white sm:text-2xl">
                {activeCategoryInfo.title}
              </h3>
            </div>
            <p className="max-w-xl text-xs leading-relaxed text-[#A1A1AA] sm:text-sm">
              {activeCategoryInfo.subtitle}
            </p>
          </div>
        )}

        {/* Unified Responsive Grid (Rendered once, no duplicate cards anywhere in DOM) */}
        <div
          id="services-grid"
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory}`}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onViewDetails={setSelectedService}
            />
          ))}
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
