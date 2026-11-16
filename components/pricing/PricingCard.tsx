"use client";

import React, { useState } from "react";
import {
  Check,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  AlertCircle,
  AlertTriangle,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";
import { PricingEntry, formatINR } from "@/data/pricing";
import { BUSINESS_INFO } from "@/data/business";
import { VehicleSizeHighlight } from "./VehicleSizeSelector";

interface PricingCardProps {
  entry: PricingEntry;
  highlightedSize: VehicleSizeHighlight;
  featuredStyle?: boolean;
}

export function PricingCard({
  entry,
  highlightedSize,
  featuredStyle = false,
}: PricingCardProps) {
  const [expanded, setExpanded] = useState(false);

  const hasLongFeatures = entry.features.length > 5;
  const visibleFeatures =
    hasLongFeatures && !expanded ? entry.features.slice(0, 5) : entry.features;

  const isFeaturedPremium = entry.highlightBadge === "Featured Premium";
  const isPopular = entry.highlightBadge === "Popular";

  const borderClass = isFeaturedPremium
    ? "border-[#A020F0] bg-gradient-to-b from-[#1A1423] to-[#17171F] shadow-[0_0_40px_-10px_rgba(160,32,240,0.35)]"
    : isPopular
    ? "border-[#A020F0]/60 bg-[#17171F] shadow-[0_0_24px_-12px_rgba(160,32,240,0.28)]"
    : "border-[#292932] bg-[#17171F] hover:border-[#A020F0]/45";

  return (
    <article
      className={`flex h-full flex-col rounded-md border p-5 transition-all duration-300 sm:p-6 ${borderClass}`}
    >
      {/* Top Badges */}
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          {entry.highlightBadge ? (
            <span
              className={`mb-2 inline-flex items-center gap-1.5 rounded-sm px-2.5 py-1 text-[11px] font-bold tracking-[0.14em] uppercase ${
                isFeaturedPremium
                  ? "bg-[#A020F0] text-white"
                  : "border border-[#A020F0]/50 bg-[#A020F0]/15 text-[#D896FF]"
              }`}
            >
              {isFeaturedPremium ? (
                <Sparkles className="h-3 w-3" />
              ) : (
                <Star className="h-3 w-3" />
              )}
              {entry.highlightBadge}
            </span>
          ) : null}

          <h3 className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">
            {entry.title}
          </h3>
          {entry.subtitle ? (
            <p className="mt-0.5 text-xs font-medium text-[#A020F0]">
              {entry.subtitle}
            </p>
          ) : null}
        </div>

        {entry.warrantyBadge ? (
          <span className="inline-flex items-center gap-1 rounded-sm border border-[#A020F0]/40 bg-[#111116] px-2.5 py-1 text-[11px] font-semibold text-white">
            <ShieldCheck className="h-3.5 w-3.5 text-[#A020F0]" />
            {entry.warrantyBadge}
          </span>
        ) : null}
      </div>

      {entry.description ? (
        <p className="mt-2.5 text-sm leading-relaxed text-[#A1A1AA]">
          {entry.description}
        </p>
      ) : null}

      {/* Pricing Display */}
      <div className="mt-5">
        {entry.pricingType === "tiers" && entry.tiers ? (
          <div
            className={`grid gap-2 ${
              entry.tiers.length === 3
                ? "grid-cols-3"
                : entry.tiers.length === 4
                ? "grid-cols-2 sm:grid-cols-4"
                : "grid-cols-3 sm:grid-cols-5"
            }`}
          >
            {entry.tiers.map((tier) => {
              const isMatch =
                highlightedSize !== "ALL" &&
                tier.size.toUpperCase() === highlightedSize;
              return (
                <div
                  key={tier.size}
                  className={`rounded-md border px-2.5 py-2 text-center transition-all ${
                    isMatch
                      ? "border-[#A020F0] bg-[#A020F0]/20 shadow-[0_0_16px_-4px_rgba(160,32,240,0.45)]"
                      : "border-[#292932] bg-[#111116]"
                  }`}
                >
                  <div className="text-[10px] font-semibold tracking-wider text-[#A1A1AA] uppercase">
                    {tier.size}
                  </div>
                  <div className="mt-0.5 text-xs font-bold text-white sm:text-sm">
                    {formatINR(tier.price)}
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}

        {entry.pricingType === "flat" && entry.flatPriceLabel ? (
          <div className="rounded-md border border-[#292932] bg-[#111116] px-4 py-3">
            <span className="text-xs font-medium tracking-wider text-[#A1A1AA] uppercase">
              Service Rate
            </span>
            <p className="mt-0.5 text-lg font-bold text-white">
              {entry.flatPriceLabel}
            </p>
          </div>
        ) : null}

        {entry.pricingType === "range" &&
        entry.rangeMin !== undefined &&
        entry.rangeMax !== undefined ? (
          <div className="rounded-md border border-[#292932] bg-[#111116] px-4 py-3">
            <span className="text-xs font-medium tracking-wider text-[#A1A1AA] uppercase">
              Starting Price Range
            </span>
            <p className="mt-0.5 text-lg font-bold text-white">
              {formatINR(entry.rangeMin)} – {formatINR(entry.rangeMax)}
            </p>
          </div>
        ) : null}

        {entry.pricingType === "consultation" ? (
          <div className="rounded-md border border-[#292932] bg-[#111116] px-4 py-3">
            <span className="text-xs font-medium tracking-wider text-[#A1A1AA] uppercase">
              Pricing
            </span>
            <p className="mt-0.5 text-sm font-semibold text-white">
              Quote based on vehicle &amp; accessory selection
            </p>
          </div>
        ) : null}
      </div>

      {/* Features List with Collapsible Toggle for Long Lists */}
      {entry.features.length > 0 ? (
        <div className="mt-5 flex-1 border-t border-[#292932] pt-4">
          <ul className="space-y-2">
            {visibleFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-xs leading-relaxed text-[#D4D4D8] sm:text-sm"
              >
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#A020F0]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {hasLongFeatures ? (
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-3 inline-flex cursor-pointer items-center gap-1 text-xs font-semibold text-[#A020F0] hover:underline"
            >
              {expanded ? (
                <>
                  <span>Show fewer inclusions</span>
                  <ChevronUp className="h-3.5 w-3.5" />
                </>
              ) : (
                <>
                  <span>
                    Show all {entry.features.length} inclusions
                  </span>
                  <ChevronDown className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          ) : null}
        </div>
      ) : null}

      {/* Variable & Confirmation Notices */}
      {entry.variablePricingNote || entry.clientConfirmationNote ? (
        <div className="mt-4 space-y-1.5 rounded-md border border-[#292932] bg-[#111116] p-3 text-xs">
          {entry.variablePricingNote ? (
            <div className="flex items-start gap-2 text-[#A1A1AA]">
              <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#A020F0]" />
              <span>{entry.variablePricingNote}</span>
            </div>
          ) : null}
          {entry.clientConfirmationNote ? (
            <div className="flex items-start gap-2 text-amber-200/90">
              <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
              <span>{entry.clientConfirmationNote}</span>
            </div>
          ) : null}
        </div>
      ) : null}

      {/* Call CTA */}
      <div className="mt-5 pt-2">
        <a
          href={BUSINESS_INFO.phoneHref}
          className={`inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-xs font-semibold tracking-wide transition-all ${
            featuredStyle || isFeaturedPremium
              ? "bg-[#A020F0] text-white shadow-[0_0_24px_-6px_rgba(160,32,240,0.6)] hover:bg-[#8E18D8]"
              : "border border-[#292932] bg-[#111116] text-white hover:border-[#A020F0] hover:bg-[#A020F0]"
          }`}
        >
          <Phone className="h-3.5 w-3.5" />
          <span>Call to Book Service</span>
        </a>
      </div>
    </article>
  );
}
