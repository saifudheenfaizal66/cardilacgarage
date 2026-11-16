"use client";

import React from "react";
import {
  Eye,
  ShieldCheck,
  AlertCircle,
  Cpu,
  Disc,
  Snowflake,
  Cog,
  Zap,
  Wrench,
} from "lucide-react";
import { ServiceItem } from "@/data/services";

interface ServiceCardProps {
  service: ServiceItem;
  onViewDetails: (service: ServiceItem) => void;
}

function RepairIconHeader({ icon }: { icon?: ServiceItem["repairIcon"] }) {
  const IconComponent =
    icon === "cpu"
      ? Cpu
      : icon === "disc"
      ? Disc
      : icon === "snowflake"
      ? Snowflake
      : icon === "cog"
      ? Cog
      : icon === "zap"
      ? Zap
      : Wrench;

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#1C1428] via-[#111116] to-[#0A0A0E] flex flex-col items-center justify-center p-6 border-b border-[#292932]">
      {/* Background blueprint decorative pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-15 bg-[radial-gradient(#A020F0_1px,transparent_1px)] [background-size:16px_16px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 h-28 w-28 rounded-full bg-[#A020F0]/25 blur-2xl"
      />

      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#A020F0]/50 bg-[#171724] shadow-[0_0_24px_-4px_rgba(160,32,240,0.5)] transition-transform duration-300 group-hover:scale-110">
        <IconComponent className="h-8 w-8 text-[#E81CFF]" />
      </div>

      <span className="relative mt-3 text-[11px] font-bold tracking-[0.2em] text-[#C4C4CC] uppercase">
        Workshop Precision Care
      </span>
    </div>
  );
}

export function ServiceCard({ service, onViewDetails }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col justify-between overflow-hidden rounded-xl border border-[#292932] bg-[#17171F] transition-all duration-300 hover:border-[#A020F0]/60 hover:shadow-[0_16px_40px_-14px_rgba(160,32,240,0.3)]">
      {/* Visual Header */}
      <div>
        {service.isNeutralRepairCard || !service.image ? (
          <RepairIconHeader icon={service.repairIcon} />
        ) : (
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
        )}

        {/* Warranty Badge (if applicable) */}
        {service.warrantyBadge ? (
          <div className="px-5 pt-3">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-[#A020F0]/50 bg-[#09090D]/90 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white">
              <ShieldCheck className="h-3.5 w-3.5 text-[#E81CFF]" />
              <span>{service.warrantyBadge}</span>
            </span>
          </div>
        ) : null}

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

      {/* Card Footer: Consistent Price Slot + View Details CTA */}
      <div className="p-5 pt-0">
        <div className="min-h-[32px] flex items-center justify-between border-t border-[#292932] pt-3">
          {service.startingPriceLabel ? (
            <div className="text-xs text-[#A1A1AA]">
              <span>Starting </span>
              <span className="font-bold text-white">
                {service.startingPriceLabel.replace("From ", "from ")}
              </span>
            </div>
          ) : service.variableNote ? (
            <div className="flex items-center gap-1.5 text-[11px] text-[#A1A1AA] line-clamp-1">
              <AlertCircle className="h-3 w-3 shrink-0 text-[#A020F0]" />
              <span>{service.variableNote}</span>
            </div>
          ) : (
            <span className="inline-flex items-center rounded-md border border-[#292932] bg-[#111116] px-2 py-0.5 text-[11px] font-semibold text-[#A1A1AA]">
              Price on enquiry
            </span>
          )}
        </div>

        <div className="mt-3">
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
