"use client";

import React, { useEffect } from "react";
import { X, Check, ShieldCheck, AlertTriangle, Phone } from "lucide-react";
import { ServiceItem } from "@/data/services";
import { PRICING_DATA } from "@/data/pricing";
import { BUSINESS_INFO } from "@/data/business";

interface ServiceDetailsProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export function ServiceDetails({ service, onClose }: ServiceDetailsProps) {
  useEffect(() => {
    if (!service) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const matchedPricing = PRICING_DATA.filter((p) =>
    service.pricingIds.includes(p.id)
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-md border border-[#292932] bg-[#111116] shadow-[0_24px_64px_rgba(0,0,0,0.85)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#09090D]">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-[#111116]/30 to-transparent" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close service details"
            className="absolute top-3 right-3 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-[#292932] bg-[#09090D]/90 text-white transition-colors hover:border-[#A020F0] hover:bg-[#17171F]"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-end justify-between gap-2">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#A020F0] uppercase">
                {service.categoryLabel}
              </span>
              <h3
                id="service-modal-title"
                className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl"
              >
                {service.title}
              </h3>
            </div>
            {service.warrantyBadge ? (
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-[#A020F0]/50 bg-[#09090D]/90 px-3 py-1 text-xs font-semibold text-white">
                <ShieldCheck className="h-3.5 w-3.5 text-[#A020F0]" />
                {service.warrantyBadge}
              </span>
            ) : null}
          </div>
        </div>

        {/* Body */}
        <div className="space-y-6 p-5 sm:p-6">
          <p className="text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
            {service.shortDescription}
          </p>

          {/* Key Highlights */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] text-white uppercase">
              Key Highlights &amp; Inclusions
            </h4>
            <ul className="mt-3 space-y-2">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-[#E4E4E7]"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#A020F0]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Package Inclusions from Centralized Data */}
          {matchedPricing.map((entry) => (
            <div
              key={entry.id}
              className="rounded-md border border-[#292932] bg-[#17171F] p-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-sm font-bold text-white">{entry.title}</h4>
                {entry.warrantyBadge ? (
                  <span className="text-xs font-semibold text-[#A020F0]">
                    {entry.warrantyBadge}
                  </span>
                ) : null}
              </div>

              {entry.description ? (
                <p className="mt-1.5 text-xs text-[#A1A1AA] leading-relaxed">
                  {entry.description}
                </p>
              ) : null}

              {entry.features.length > 0 ? (
                <ul className="mt-3 grid gap-1.5 border-t border-[#292932] pt-3 sm:grid-cols-2">
                  {entry.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-xs text-[#D4D4D8]"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#A020F0]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}

          {/* Variable or Client Confirmation Notices */}
          {service.variableNote || service.confirmationNote ? (
            <div className="space-y-2 rounded-md border border-[#A020F0]/30 bg-[#A020F0]/5 p-3.5 text-xs text-[#D4D4D8]">
              {service.variableNote ? (
                <div className="flex items-start gap-2">
                  <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#A020F0]" />
                  <span>{service.variableNote}</span>
                </div>
              ) : null}
              {service.confirmationNote ? (
                <div className="flex items-start gap-2">
                  <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
                  <span className="text-amber-200/90">
                    {service.confirmationNote}
                  </span>
                </div>
              ) : null}
            </div>
          ) : null}

          {/* Footer CTA */}
          <div className="flex flex-col gap-3 border-t border-[#292932] pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-[#A1A1AA]">
              Studio appointment slots available on enquiry
            </div>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#A020F0] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_-6px_rgba(160,32,240,0.6)] transition-colors hover:bg-[#8E18D8]"
            >
              <Phone className="h-4 w-4" />
              <span>Call Studio to Book {service.title}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
