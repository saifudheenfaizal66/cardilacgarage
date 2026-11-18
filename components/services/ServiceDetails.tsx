"use client";

import React, { useEffect, useRef } from "react";
import {
  X,
  Check,
  ShieldCheck,
  AlertTriangle,
  Phone,
  MessageCircle,
} from "lucide-react";
import { ServiceItem } from "@/data/services";
import { PRICING_DATA } from "@/data/pricing";
import { BUSINESS_INFO } from "@/data/business";

interface ServiceDetailsProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export function ServiceDetails({ service, onClose }: ServiceDetailsProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!service) return;

    const previousActiveElement = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      previousActiveElement?.focus();
    };
  }, [service, onClose]);

  if (!service) return null;

  const matchedPricing = PRICING_DATA.filter((p) =>
    service.pricingIds.includes(p.id)
  );

  const whatsappMessage = `Hi Cardilac, I'd like to enquire about ${service.title}`;
  const whatsappUrl = `https://wa.me/917479797965?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#292932] bg-[#111116] shadow-[0_24px_64px_rgba(0,0,0,0.85)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Visual */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#09090D]">
          <img
            src={service.image}
            alt={service.imageAlt || service.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-[#111116]/40 to-transparent" />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close service details"
            className="absolute top-4 right-4 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-[#292932] bg-[#09090D]/90 text-white transition-colors hover:border-[#A020F0] hover:bg-[#17171F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E81CFF]"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-end justify-between gap-2">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#E81CFF] uppercase">
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
              <span className="inline-flex items-center gap-1.5 rounded-md border border-[#A020F0]/50 bg-[#09090D]/90 px-3 py-1 text-xs font-semibold text-white">
                <ShieldCheck className="h-3.5 w-3.5 text-[#E81CFF]" />
                {service.warrantyBadge}
              </span>
            ) : null}
          </div>
        </div>

        {/* Modal Body */}
        <div className="space-y-6 p-5 sm:p-6">
          <p className="text-sm leading-relaxed text-[#D4D4D8] sm:text-base">
            {service.shortDescription}
          </p>

          {/* Key Inclusions & Scope */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] text-white uppercase">
              Key Inclusions &amp; Features
            </h4>
            <ul className="mt-3 space-y-2">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-[#E4E4E7]"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#E81CFF]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing & Tier Details */}
          {matchedPricing.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-semibold tracking-[0.18em] text-white uppercase">
                Package Scope &amp; Rates
              </h4>
              {matchedPricing.map((entry) => (
                <div
                  key={entry.id}
                  className="rounded-xl border border-[#292932] bg-[#17171F] p-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h5 className="text-sm font-bold text-white">{entry.title}</h5>
                      {entry.subtitle ? (
                        <p className="text-xs text-[#E81CFF]">{entry.subtitle}</p>
                      ) : null}
                    </div>
                    {entry.warrantyBadge ? (
                      <span className="text-xs font-semibold text-[#E81CFF]">
                        {entry.warrantyBadge}
                      </span>
                    ) : null}
                  </div>

                  {entry.description ? (
                    <p className="mt-1.5 text-xs text-[#A1A1AA] leading-relaxed">
                      {entry.description}
                    </p>
                  ) : null}

                  {entry.pricingType === "tiers" && entry.tiers ? (
                    <div className="mt-3 grid grid-cols-2 sm:grid-cols-5 gap-2 border-t border-[#292932] pt-3">
                      {entry.tiers.map((t) => (
                        <div
                          key={t.size}
                          className="rounded-lg border border-[#292932] bg-[#111116] p-2 text-center"
                        >
                          <div className="text-[10px] font-semibold text-[#A1A1AA] uppercase">
                            {t.size}
                          </div>
                          <div className="mt-0.5 text-xs font-bold text-white">
                            ₹{t.price.toLocaleString("en-IN")}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : entry.flatPriceLabel ? (
                    <div className="mt-2 text-xs font-bold text-[#E81CFF]">
                      {entry.flatPriceLabel}
                    </div>
                  ) : entry.rangeMin && entry.rangeMax ? (
                    <div className="mt-2 text-xs font-bold text-[#E81CFF]">
                      ₹{entry.rangeMin.toLocaleString("en-IN")} – ₹{entry.rangeMax.toLocaleString("en-IN")}
                    </div>
                  ) : null}

                  {entry.variablePricingNote ? (
                    <div className="mt-2 flex items-start gap-1.5 text-xs text-[#A1A1AA]">
                      <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#A020F0]" />
                      <span>{entry.variablePricingNote}</span>
                    </div>
                  ) : null}

                  {entry.clientConfirmationNote ? (
                    <div className="mt-2 flex items-start gap-1.5 text-xs text-amber-200/90">
                      <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
                      <span>{entry.clientConfirmationNote}</span>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          )}

          {/* Price Notes / Disclosures on Service level */}
          {(service.variableNote || service.confirmationNote) && (
            <div className="space-y-2 rounded-xl border border-[#A020F0]/30 bg-[#A020F0]/5 p-4 text-xs text-[#D4D4D8]">
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
          )}

          {/* Action CTAs: Call + WhatsApp */}
          <div className="border-t border-[#292932] pt-5">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#25D366]/50 bg-[#25D366]/15 px-4 py-3 text-xs font-bold tracking-wide text-[#25D366] transition-all hover:bg-[#25D366] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#B94AF7]/60 bg-[#A020F0] px-4 py-3 text-xs font-bold tracking-wide text-white transition-all hover:bg-[#8E18D8] shadow-[0_0_24px_-6px_rgba(160,32,240,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E81CFF]"
              >
                <Phone className="h-4 w-4" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
