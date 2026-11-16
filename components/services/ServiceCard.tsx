"use client";

import React from "react";
import { ArrowUpRight, Eye, ShieldCheck, AlertCircle, Phone } from "lucide-react";
import { ServiceItem } from "@/data/services";
import { BUSINESS_INFO } from "@/data/business";

interface ServiceCardProps {
  service: ServiceItem;
  onViewDetails: (service: ServiceItem) => void;
}

export function ServiceCard({ service, onViewDetails }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#292932] bg-[#17171F] transition-all duration-300 hover:border-[#A020F0]/60 hover:shadow-[0_16px_40px_-14px_rgba(160,32,240,0.3)]">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111116]">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#17171F] via-[#17171F]/20 to-transparent opacity-85"
        />

        {/* Warranty Badge */}
        {service.warrantyBadge ? (
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-md border border-[#A020F0]/50 bg-[#09090D]/90 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5 text-[#E81CFF]" />
            <span>{service.warrantyBadge}</span>
          </div>
        ) : null}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[11px] font-semibold tracking-[0.18em] text-[#E81CFF] uppercase">
          {service.categoryLabel}
        </span>

        <h3 className="mt-1.5 font-display text-lg font-bold tracking-tight text-white">
          {service.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-[#A1A1AA]">
          {service.shortDescription}
        </p>

        {service.variableNote ? (
          <p className="mt-3 flex items-start gap-1.5 text-xs text-[#A1A1AA]">
            <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#A020F0]" />
            <span>{service.variableNote}</span>
          </p>
        ) : null}

        {/* Actions */}
        <div className="mt-5 grid grid-cols-2 gap-2.5 border-t border-[#292932] pt-4">
          <button
            type="button"
            onClick={() => onViewDetails(service)}
            className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-[#292932] bg-[#111116] px-3 py-2.5 text-xs font-semibold tracking-wide text-white transition-colors hover:border-[#A020F0]/60 hover:bg-[#1E1E28]"
          >
            <Eye className="h-3.5 w-3.5 text-[#E81CFF]" />
            <span>View Details</span>
          </button>

          <a
            href={BUSINESS_INFO.phoneHref}
            className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-[#B94AF7]/60 bg-[#A020F0] px-3 py-2.5 text-xs font-bold tracking-wide text-white transition-all hover:bg-[#8E18D8] hover:shadow-[0_0_20px_-4px_rgba(160,32,240,0.65)]"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </article>
  );
}
