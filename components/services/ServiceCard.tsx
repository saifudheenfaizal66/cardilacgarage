"use client";

import React from "react";
import { Eye } from "lucide-react";
import { ServiceItem } from "@/data/services";

interface ServiceCardProps {
  service: ServiceItem;
  onViewDetails: (service: ServiceItem) => void;
}

export function ServiceCard({ service, onViewDetails }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col justify-between overflow-hidden rounded-xl border border-[#292932] bg-[#17171F] transition-all duration-300 hover:border-[#A020F0]/60 hover:shadow-[0_16px_40px_-14px_rgba(160,32,240,0.3)]">
      {/* Visual Header */}
      <div>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111116]">
          <img
            src={service.image}
            alt={service.imageAlt || service.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#17171F] via-[#17171F]/20 to-transparent opacity-85"
          />
        </div>

        {/* Card Content */}
        <div className="p-5">
          <span className="text-[11px] font-semibold tracking-[0.18em] text-[#E81CFF] uppercase">
            {service.categoryLabel}
          </span>

          <h3 className="mt-1.5 font-display text-lg font-bold tracking-tight text-white group-hover:text-[#E81CFF] transition-colors">
            {service.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA] line-clamp-3">
            {service.shortDescription}
          </p>
        </div>
      </div>

      {/* Card Footer: View Details CTA (NO price, starting price, or variable notes on card) */}
      <div className="p-5 pt-0">
        <div className="border-t border-[#292932] pt-4">
          <button
            type="button"
            onClick={() => onViewDetails(service)}
            className="flex min-h-[44px] w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#A020F0]/50 bg-[#14141E] px-4 py-2.5 text-xs font-bold tracking-wide text-white transition-all hover:border-[#E81CFF] hover:bg-[#A020F0] hover:shadow-[0_0_20px_-4px_rgba(160,32,240,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E81CFF]"
          >
            <Eye className="h-3.5 w-3.5 text-[#E81CFF] group-hover:text-white" />
            <span>View Details</span>
          </button>
        </div>
      </div>
    </article>
  );
}
