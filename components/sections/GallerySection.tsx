"use client";

import React, { useEffect, useRef, useState } from "react";
import { Expand, X, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  GalleryCategory,
} from "@/data/gallery";

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const visibleItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Keyboard nav + scroll lock for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % visibleItems.length
        );
      if (e.key === "ArrowLeft")
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + visibleItems.length) % visibleItems.length
        );
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, visibleItems.length]);

  // Touch swipe for lightbox
  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStartX(e.touches[0].clientX);

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX;
    setTouchStartX(null);
    if (Math.abs(delta) < 40) return;
    if (delta < 0) {
      setLightboxIndex((prev) =>
        prev === null ? null : (prev + 1) % visibleItems.length
      );
    } else {
      setLightboxIndex((prev) =>
        prev === null
          ? null
          : (prev - 1 + visibleItems.length) % visibleItems.length
      );
    }
  };

  const activeLightboxItem =
    lightboxIndex !== null ? visibleItems[lightboxIndex] ?? null : null;

  return (
    <section
      id="gallery"
      className="border-t border-[#292932] bg-[#111116] py-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Detailing Showcase"
            title="THE CARDILAC FINISH."
            description="Inspect the gloss depth, hydrophobic beading, film precision, and interior care standards across our service categories."
          />

          <div className="hidden items-center gap-2 rounded-md border border-[#292932] bg-[#17171F] px-3.5 py-2 text-xs text-[#A1A1AA] lg:inline-flex">
            <Info className="h-3.5 w-3.5 shrink-0 text-[#A020F0]" />
            <span>Studio reference visuals</span>
          </div>
        </div>

        {/* Category Filter */}
        <div
          ref={filterRef}
          role="tablist"
          aria-label="Gallery categories"
          className="mt-6 lg:mt-8"
        >
          {/* Mobile: horizontal scroll strip */}
          <div className="mobile-snap-scroll lg:hidden">
            {GALLERY_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`mobile-snap-item mobile-tap-highlight flex-shrink-0 rounded-full border px-4 py-2.5 text-xs font-bold tracking-wide transition-all whitespace-nowrap min-h-[44px]
                    ${
                      isActive
                        ? "border-[#A020F0] bg-[#A020F0] text-white shadow-[0_0_18px_-5px_rgba(160,32,240,0.65)]"
                        : "border-[#292932] bg-[#17171F] text-[#A1A1AA]"
                    }`}
                >
                  {category}
                </button>
              );
            })}
            <div className="w-4 flex-shrink-0" />
          </div>

          {/* Desktop: wrap */}
          <div className="hidden flex-wrap gap-2 lg:flex">
            {GALLERY_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`cursor-pointer rounded-md border px-3.5 py-2 text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? "border-[#A020F0] bg-[#A020F0] text-white shadow-[0_0_18px_-5px_rgba(160,32,240,0.65)]"
                      : "border-[#292932] bg-[#17171F] text-[#A1A1AA] hover:border-[#A020F0]/50 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid — mobile 2-col staggered, desktop 3-col */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-8 lg:grid-cols-3">
          {visibleItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxIndex(idx)}
              className="mobile-card-press group relative cursor-pointer overflow-hidden rounded-xl border border-[#292932] bg-[#17171F] text-left
                transition-all duration-300
                hover:border-[#A020F0]/70 hover:shadow-[0_18px_40px_-14px_rgba(160,32,240,0.3)]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0]"
            >
              <div className="relative overflow-hidden bg-[#09090D]"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#09090D]/90 via-[#09090D]/20 to-transparent"
                />

                {/* Category badge */}
                <div className="absolute top-2 left-2 right-2 flex items-center justify-between gap-1.5">
                  <span className="rounded-sm border border-[#292932] bg-[#09090D]/85 px-2 py-0.5 text-[9px] font-semibold tracking-[0.14em] text-[#D896FF] uppercase backdrop-blur-sm truncate">
                    {item.category}
                  </span>
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#292932] bg-[#09090D]/85 text-white opacity-80 transition-all group-hover:border-[#A020F0] group-hover:bg-[#A020F0] group-hover:opacity-100">
                    <Expand className="h-3 w-3" />
                  </span>
                </div>

                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 p-3 lg:p-4">
                  <h3 className="font-display text-sm font-bold text-white leading-snug lg:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 hidden text-xs text-[#A1A1AA] sm:block">
                    {item.caption}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Lightbox Modal with touch swipe ── */}
      {activeLightboxItem ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 backdrop-blur-md sm:p-4"
          onClick={() => setLightboxIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-[#292932] bg-[#111116]
              shadow-[0_32px_80px_rgba(0,0,0,0.9),0_0_0_1px_rgba(160,32,240,0.15)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#292932] px-4 py-3">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.18em] text-[#A020F0] uppercase">
                  {activeLightboxItem.category}
                </span>
                <h4 className="font-display text-sm font-bold text-white sm:text-base">
                  {activeLightboxItem.title}
                </h4>
              </div>
              <div className="flex items-center gap-2">
                {/* Counter pill */}
                <span className="rounded-full bg-[#17171F] border border-[#292932] px-2.5 py-1 text-[10px] font-bold text-[#A1A1AA]">
                  {lightboxIndex !== null ? lightboxIndex + 1 : 0} / {visibleItems.length}
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  aria-label="Close lightbox"
                  className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-[#292932] bg-[#17171F] text-white hover:border-[#A020F0] transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative bg-[#09090D]">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.alt}
                className="max-h-[72vh] w-full object-contain"
              />

              {/* Swipe hint (mobile) */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 sm:hidden">
                <span className="rounded-full bg-[#09090D]/80 backdrop-blur-sm border border-[#292932] px-3 py-1 text-[10px] font-semibold tracking-wide text-[#71717A]">
                  Swipe to navigate
                </span>
              </div>

              {/* Arrow buttons (desktop) */}
              {visibleItems.length > 1 ? (
                <>
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={() =>
                      setLightboxIndex((prev) =>
                        prev === null
                          ? 0
                          : (prev - 1 + visibleItems.length) % visibleItems.length
                      )
                    }
                    className="absolute top-1/2 left-3 -translate-y-1/2 hidden cursor-pointer rounded-xl border border-[#292932] bg-[#09090D]/85 p-2.5 text-white hover:border-[#A020F0] transition-colors sm:block"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={() =>
                      setLightboxIndex((prev) =>
                        prev === null ? 0 : (prev + 1) % visibleItems.length
                      )
                    }
                    className="absolute top-1/2 right-3 -translate-y-1/2 hidden cursor-pointer rounded-xl border border-[#292932] bg-[#09090D]/85 p-2.5 text-white hover:border-[#A020F0] transition-colors sm:block"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              ) : null}
            </div>

            <div className="border-t border-[#292932] px-4 py-3 text-xs text-[#A1A1AA]">
              {activeLightboxItem.caption}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
