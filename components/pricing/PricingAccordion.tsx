"use client";

import React from "react";
import {
  ChevronDown,
  Eye,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PricingEntry } from "@/data/pricing";

interface PricingAccordionGroupProps {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  entries: PricingEntry[];
  isOpen: boolean;
  onToggle: () => void;
  onViewDetails?: (serviceId: string) => void;
}

export function PricingAccordionGroup({
  id,
  title,
  subtitle,
  icon: Icon,
  entries,
  isOpen,
  onToggle,
  onViewDetails,
}: PricingAccordionGroupProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#292932] bg-[#111116] transition-all duration-300 hover:border-[#A020F0]/50">
      {/* Accordion Header */}
      <button
        id={`accordion-header-${id}`}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        className="flex w-full cursor-pointer items-center justify-between p-5 sm:p-6 text-left transition-colors hover:bg-[#17171F]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E81CFF]"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#A020F0]/40 bg-[#17171F] shadow-[0_0_15px_-4px_rgba(160,32,240,0.35)]">
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

      {/* Accordion Content with animated height */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-content-${id}`}
            role="region"
            aria-labelledby={`accordion-header-${id}`}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="border-t border-[#292932] bg-[#0D0D12] p-4 sm:p-6">
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {entries.map((entry) => {
                  const waMessage = `Hi Cardilac Garage, I'd like to enquire about ${entry.title}`;
                  const waUrl = `https://wa.me/917479797965?text=${encodeURIComponent(waMessage)}`;

                  return (
                    <article
                      key={entry.id}
                      className="relative flex flex-col justify-between rounded-xl border border-[#292932] bg-[#14141C] p-5 transition-all duration-300 hover:border-[#A020F0]/50"
                    >
                      <div>
                        {/* Title & Description */}
                        <h4 className="font-display text-lg font-bold text-white">
                          {entry.title}
                        </h4>
                        {entry.subtitle ? (
                          <p className="mt-1 text-xs font-medium text-[#E81CFF]">
                            {entry.subtitle}
                          </p>
                        ) : null}

                        {entry.description ? (
                          <p className="mt-2 text-xs leading-relaxed text-[#A1A1AA]">
                            {entry.description}
                          </p>
                        ) : null}
                      </div>

                      {/* Action CTAs: View Details + Enquire on WhatsApp (NO prices shown on card) */}
                      <div className="mt-5 space-y-2 border-t border-[#292932] pt-4">
                        {onViewDetails ? (
                          <button
                            type="button"
                            onClick={() => onViewDetails(entry.serviceId)}
                            className="flex min-h-[42px] w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#A020F0]/50 bg-[#14141E] px-4 py-2 text-xs font-bold text-white transition-all hover:border-[#E81CFF] hover:bg-[#A020F0] hover:shadow-[0_0_20px_-4px_rgba(160,32,240,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E81CFF]"
                          >
                            <Eye className="h-3.5 w-3.5 text-[#E81CFF] group-hover:text-white" />
                            <span>View Details &amp; Pricing</span>
                          </button>
                        ) : null}

                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex min-h-[42px] w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#25D366]/40 bg-[#17171F] px-4 py-2 text-xs font-bold text-white transition-all hover:border-[#25D366] hover:bg-[#25D366]/20 hover:text-[#25D366] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E81CFF]"
                        >
                          <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
                          <span>Enquire on WhatsApp</span>
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
