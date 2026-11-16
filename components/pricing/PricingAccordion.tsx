"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Check,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PricingEntry } from "@/data/pricing";
import { BUSINESS_INFO } from "@/data/business";

interface PricingAccordionGroupProps {
  id?: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  entries: PricingEntry[];
  defaultOpen?: boolean;
}

export function PricingAccordionGroup({
  title,
  subtitle,
  icon: Icon,
  entries,
  defaultOpen = false,
}: PricingAccordionGroupProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [expandedFeatures, setExpandedFeatures] = useState<Record<string, boolean>>({});

  const toggleFeatures = (entryId: string) => {
    setExpandedFeatures((prev) => ({ ...prev, [entryId]: !prev[entryId] }));
  };

  return (
    <div className="overflow-hidden rounded-xl border border-[#292932] bg-[#111116] transition-all duration-300 hover:border-[#A020F0]/50">
      {/* Accordion Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between p-5 sm:p-6 text-left transition-colors hover:bg-[#17171F]/70"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#A020F0]/40 bg-[#17171F] shadow-[0_0_15px_-4px_rgba(160,32,240,0.35)]">
            <Icon className="h-6 w-6 text-[#E81CFF]" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                {title}
              </h3>
              <span className="rounded-full border border-[#292932] bg-[#17171F] px-2.5 py-0.5 text-[11px] font-semibold text-[#A1A1AA]">
                {entries.length} {entries.length === 1 ? "Option" : "Options"}
              </span>
            </div>
            <p className="mt-0.5 text-xs text-[#A1A1AA]">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#292932] bg-[#17171F] text-white transition-transform duration-300 ${
              isOpen ? "rotate-180 border-[#A020F0] text-[#E81CFF]" : ""
            }`}
          >
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </button>

      {/* Accordion Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="border-t border-[#292932] bg-[#0D0D12] p-4 sm:p-6">
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {entries.map((entry) => {
                  const isFeatured = entry.highlightBadge === "Featured Premium";
                  const isPopular = entry.highlightBadge === "Popular";
                  const showAllInclusions = expandedFeatures[entry.id];
                  const inclusionsToDisplay = showAllInclusions
                    ? entry.features
                    : entry.features.slice(0, 4);

                  return (
                    <article
                      key={entry.id}
                      className={`relative flex flex-col justify-between rounded-xl border p-5 transition-all duration-300 ${
                        isFeatured
                          ? "border-[#E81CFF]/60 bg-gradient-to-b from-[#1C1428] to-[#121218] shadow-[0_0_30px_-10px_rgba(232,28,255,0.3)]"
                          : isPopular
                          ? "border-[#A020F0]/60 bg-[#14141C] shadow-[0_0_20px_-8px_rgba(160,32,240,0.25)]"
                          : "border-[#292932] bg-[#14141C] hover:border-[#A020F0]/50"
                      }`}
                    >
                      <div>
                        {/* Header badges */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          {entry.highlightBadge ? (
                            <span
                              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase ${
                                isFeatured
                                  ? "bg-[#E81CFF] text-black"
                                  : "border border-[#A020F0]/60 bg-[#A020F0]/20 text-[#E81CFF]"
                              }`}
                            >
                              <Sparkles className="h-3 w-3" />
                              {entry.highlightBadge}
                            </span>
                          ) : (
                            <span />
                          )}

                          {entry.warrantyBadge ? (
                            <span className="inline-flex items-center gap-1 rounded-full border border-[#A020F0]/40 bg-[#111116] px-2.5 py-0.5 text-[10px] font-semibold text-white">
                              <ShieldCheck className="h-3 w-3 text-[#E81CFF]" />
                              {entry.warrantyBadge}
                            </span>
                          ) : null}
                        </div>

                        {/* Title & Description */}
                        <h4 className="mt-2.5 font-display text-lg font-bold text-white">
                          {entry.title}
                        </h4>
                        {entry.subtitle ? (
                          <p className="text-xs font-medium text-[#E81CFF]">
                            {entry.subtitle}
                          </p>
                        ) : null}

                        {entry.description ? (
                          <p className="mt-2 text-xs leading-relaxed text-[#A1A1AA]">
                            {entry.description}
                          </p>
                        ) : null}

                        {/* Inclusions Checklist */}
                        {entry.features.length > 0 ? (
                          <div className="mt-4 space-y-1.5 border-t border-[#292932]/70 pt-3">
                            <span className="text-[10px] font-semibold tracking-wider text-[#A1A1AA] uppercase">
                              Key Inclusions &amp; Scope:
                            </span>
                            <ul className="mt-2 space-y-1.5">
                              {inclusionsToDisplay.map((feat) => (
                                <li
                                  key={feat}
                                  className="flex items-start gap-2 text-xs leading-relaxed text-[#D4D4D8]"
                                >
                                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#E81CFF]" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                            {entry.features.length > 4 ? (
                              <button
                                type="button"
                                onClick={() => toggleFeatures(entry.id)}
                                className="mt-1 cursor-pointer text-[11px] font-semibold text-[#E81CFF] hover:underline"
                              >
                                {showAllInclusions
                                  ? "Show fewer inclusions"
                                  : `+ ${entry.features.length - 4} more inclusions`}
                              </button>
                            ) : null}
                          </div>
                        ) : null}
                      </div>

                      {/* Action CTA */}
                      <div className="mt-5 border-t border-[#292932] pt-4">
                        <a
                          href={BUSINESS_INFO.phoneHref}
                          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#A020F0]/50 bg-[#17171F] px-4 py-2.5 text-xs font-bold text-white transition-all hover:border-[#E81CFF] hover:bg-[#A020F0] hover:shadow-[0_0_20px_-4px_rgba(160,32,240,0.6)]"
                        >
                          <Phone className="h-4 w-4 text-[#E81CFF]" />
                          <span>Call to Book: {entry.title}</span>
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
