"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  AlertCircle,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Phone,
} from "lucide-react";
import { PricingEntry, formatINR } from "@/data/pricing";
import { BUSINESS_INFO } from "@/data/business";
import { VehicleSizeHighlight } from "./VehicleSizeSelector";

interface PricingTableProps {
  entries: PricingEntry[];
  highlightedSize: VehicleSizeHighlight;
}

const STANDARD_COLUMNS = ["S", "M", "L", "XL", "XXL"];

/**
 * Desktop-optimized comparison pricing table for services sharing the S–XXL matrix.
 * Services with custom size columns (Seat Covers, Bike Wash, Cooling Film, Flat/Range)
 * are rendered cleanly alongside in responsive PricingCards.
 */
export function PricingTable({
  entries,
  highlightedSize,
}: PricingTableProps) {
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});

  if (entries.length === 0) return null;

  const toggleRow = (id: string) => {
    setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="hidden overflow-hidden rounded-md border border-[#292932] bg-[#17171F] lg:block">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-[#292932] bg-[#111116]">
              <th className="px-6 py-4 text-xs font-semibold tracking-[0.18em] text-[#A1A1AA] uppercase">
                Service &amp; Details
              </th>
              {STANDARD_COLUMNS.map((col) => {
                const isColHighlighted = highlightedSize === col;
                return (
                  <th
                    key={col}
                    className={`px-4 py-4 text-right text-xs font-bold tracking-[0.16em] uppercase transition-colors ${
                      isColHighlighted
                        ? "bg-[#A020F0]/20 text-white"
                        : "text-[#A1A1AA]"
                    }`}
                  >
                    {col}
                  </th>
                );
              })}
              <th className="px-6 py-4 text-right text-xs font-semibold tracking-[0.18em] text-[#A1A1AA] uppercase">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#292932]">
            {entries.map((entry) => {
              const tierMap = new Map(
                (entry.tiers ?? []).map((t) => [t.size.toUpperCase(), t.price])
              );
              const isExpanded = Boolean(expandedRows[entry.id]);

              return (
                <tr
                  key={entry.id}
                  className="transition-colors hover:bg-[#1E1E28]/60"
                >
                  <td className="max-w-md px-6 py-5 align-top">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-base font-bold text-white">
                        {entry.title}
                      </span>
                      {entry.warrantyBadge ? (
                        <span className="inline-flex items-center gap-1 rounded-sm border border-[#A020F0]/45 bg-[#111116] px-2 py-0.5 text-[11px] font-semibold text-white">
                          <ShieldCheck className="h-3 w-3 text-[#A020F0]" />
                          {entry.warrantyBadge}
                        </span>
                      ) : null}
                      {entry.highlightBadge ? (
                        <span className="rounded-sm bg-[#A020F0]/20 px-2 py-0.5 text-[11px] font-semibold text-[#D896FF]">
                          {entry.highlightBadge}
                        </span>
                      ) : null}
                    </div>

                    {entry.description ? (
                      <p className="mt-1 text-xs leading-relaxed text-[#A1A1AA]">
                        {entry.description}
                      </p>
                    ) : null}

                    {entry.features.length > 0 ? (
                      <div className="mt-2">
                        <button
                          type="button"
                          onClick={() => toggleRow(entry.id)}
                          className="inline-flex cursor-pointer items-center gap-1 text-xs font-semibold text-[#A020F0] hover:underline"
                        >
                          {isExpanded ? (
                            <>
                              <span>Hide inclusions</span>
                              <ChevronUp className="h-3.5 w-3.5" />
                            </>
                          ) : (
                            <>
                              <span>
                                View {entry.features.length} features &amp; inclusions
                              </span>
                              <ChevronDown className="h-3.5 w-3.5" />
                            </>
                          )}
                        </button>
                        {isExpanded ? (
                          <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-[#D4D4D8]">
                            {entry.features.map((feat) => (
                              <li key={feat} className="flex items-start gap-1.5">
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#A020F0]" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ) : null}

                    {entry.variablePricingNote ? (
                      <p className="mt-2 flex items-start gap-1.5 text-[11px] text-[#A1A1AA]">
                        <AlertCircle className="mt-0.5 h-3 w-3 shrink-0 text-[#A020F0]" />
                        <span>{entry.variablePricingNote}</span>
                      </p>
                    ) : null}

                    {entry.clientConfirmationNote ? (
                      <p className="mt-1.5 flex items-start gap-1.5 text-[11px] text-amber-200/90">
                        <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0 text-amber-400" />
                        <span>{entry.clientConfirmationNote}</span>
                      </p>
                    ) : null}
                  </td>

                  {STANDARD_COLUMNS.map((col) => {
                    const price = tierMap.get(col);
                    const isColHighlighted = highlightedSize === col;
                    return (
                      <td
                        key={col}
                        className={`px-4 py-5 text-right align-top text-sm font-semibold whitespace-nowrap ${
                          isColHighlighted
                            ? "bg-[#A020F0]/15 text-white"
                            : "text-[#E4E4E7]"
                        }`}
                      >
                        {price !== undefined ? formatINR(price) : "—"}
                      </td>
                    );
                  })}

                  <td className="px-6 py-5 text-right align-top whitespace-nowrap">
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="inline-flex items-center gap-1.5 rounded-md bg-[#A020F0] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#8E18D8]"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      <span>Call to Book</span>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

