"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  MessageCircle,
  Truck,
  Car,
  Calendar,
  Sparkles,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useWhatsAppEnquiry, EnquiryOptions } from "./WhatsAppEnquiryContext";
import { BUSINESS_INFO } from "@/data/business";

interface ModalFormContentProps {
  options: EnquiryOptions;
  onClose: () => void;
}

function ModalFormContent({ options, onClose }: ModalFormContentProps) {
  const [service, setService] = useState(options.service || "Premium Ceramic Wash");
  const [vehicleModel, setVehicleModel] = useState(options.vehicleModel || "");
  const [preferredDate, setPreferredDate] = useState(options.preferredDate || "");
  const [customerName, setCustomerName] = useState("");
  const [isPickupDelivery, setIsPickupDelivery] = useState(Boolean(options.isPickupDelivery));
  const [customNotes] = useState(options.notes || "");

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Build formatted text message
  const constructWhatsAppUrl = () => {
    const lines: string[] = ["Hello Cardilac,", ""];

    if (customerName.trim()) {
      lines.push(`My Name: ${customerName.trim()}`);
    }

    lines.push("I would like to enquire / book an appointment slot:");
    lines.push("");

    if (service) {
      lines.push(`• Service: ${service}`);
    }
    if (vehicleModel.trim()) {
      lines.push(`• Vehicle: ${vehicleModel.trim()}`);
    }
    if (preferredDate) {
      lines.push(`• Preferred Date: ${preferredDate}`);
    }
    if (isPickupDelivery) {
      lines.push(`• Doorstep Pickup & Delivery: Requested in Alappuzha`);
    }
    if (customNotes.trim()) {
      lines.push(`• Notes: ${customNotes.trim()}`);
    }

    lines.push("");
    lines.push("Please let me know the available time slots.");
    lines.push("");
    lines.push("Thank you!");

    const encoded = encodeURIComponent(lines.join("\n"));
    return `${BUSINESS_INFO.whatsappBaseUrl}?text=${encoded}`;
  };

  const handleDispatchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = constructWhatsAppUrl();
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  const setQuickDate = (type: "today" | "tomorrow" | "weekend") => {
    const now = new Date();
    if (type === "today") {
      setPreferredDate(now.toISOString().split("T")[0]);
    } else if (type === "tomorrow") {
      const tomorrow = new Date(now);
      tomorrow.setDate(now.getDate() + 1);
      setPreferredDate(tomorrow.toISOString().split("T")[0]);
    } else if (type === "weekend") {
      const nextSat = new Date(now);
      const day = now.getDay();
      const diff = (6 - day + 7) % 7 || 7;
      nextSat.setDate(now.getDate() + diff);
      setPreferredDate(nextSat.toISOString().split("T")[0]);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#09090D]/85 backdrop-blur-md"
      />

      {/* Modal Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-[#A020F0]/50 bg-[#0D0D12] p-5 sm:p-7 shadow-[0_0_60px_-10px_rgba(160,32,240,0.45)] text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[#292932] pb-5">
          <div className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#E81CFF]/50 bg-[#111116] shadow-[0_0_20px_-4px_rgba(232,28,255,0.4)]">
              <img
                src={BUSINESS_INFO.logos.emblem}
                alt="Cardilac logo"
                className="h-7 w-7 object-contain"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.2em] text-[#E81CFF] uppercase">
                <Sparkles className="h-3 w-3" />
                <span>Cardilac Detailing Studio</span>
              </div>
              <h2
                id="enquiry-modal-title"
                className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl"
              >
                WhatsApp Booking Builder
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking modal"
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#292932] bg-[#111116] text-[#A1A1AA] transition-colors hover:border-[#A020F0] hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleDispatchWhatsApp} className="mt-6 space-y-5">
          {/* 1. Service Selection */}
          <div>
            <label className="mb-2 block text-xs font-semibold tracking-wider text-[#D4D4D8] uppercase">
              Select Service Package <span className="text-[#E81CFF]">*</span>
            </label>
            <div className="relative">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full appearance-none rounded-lg border border-[#292932] bg-[#111116] px-4 py-3 pr-10 text-sm font-medium text-white focus:border-[#A020F0] focus:ring-1 focus:ring-[#A020F0] focus:outline-none"
              >
                <optgroup label="Car Wash Packages">
                  <option value="Basic Car Wash">Basic Wash</option>
                  <option value="Executive Car Wash">Executive Wash</option>
                  <option value="Premium Ceramic Wash">Premium / Ceramic Wash</option>
                </optgroup>
                <optgroup label="Paint Protection & Coatings">
                  <option value="Ceramic Coating">Ceramic Coating</option>
                  <option value="Graphene Coating">Graphene Coating (Russian Brand)</option>
                  <option value="Borophene Coating">Borophene Coating (Self Healing)</option>
                  <option value="PPF Paint Protection Film">PPF (Garware)</option>
                  <option value="Antic Layer">Antic Layer</option>
                </optgroup>
                <optgroup label="Polishing & Protective Treatments">
                  <option value="Car Polishing (single step)">Car Polishing (single step)</option>
                  <option value="Ceramic Polishing with Graphene Waxing">Ceramic Polishing with Graphene Waxing</option>
                  <option value="Underbody Coating">Underbody Coating (3M / Turtle Wax)</option>
                  <option value="Silencer Coating">Silencer Coating (Turtle Wax)</option>
                  <option value="Headlight Restoration">Headlight Restoration</option>
                  <option value="Tail Lamp Tinting">Tail Lamp Tinting</option>
                  <option value="Engine Bay Deep Cleaning">Engine Bay Deep Cleaning</option>
                </optgroup>
                <optgroup label="Interior & Seat Covers">
                  <option value="Interior Deep Cleaning">Interior Deep Cleaning</option>
                  <option value="Feno Leather Seat Covers">Feno Leather Seat Covers</option>
                  <option value="Napa Leather Seat Covers">Napa Leather Seat Covers</option>
                  <option value="Porsche Leather Seat Covers">Porsche Leather Seat Covers</option>
                  <option value="Cooling Film">Cooling Film (50% / 35%)</option>
                </optgroup>
                <optgroup label="Two-Wheeler Services">
                  <option value="Basic Bike Wash">Basic Bike Wash</option>
                  <option value="Detailed Bike Wash">Detailed Bike Wash</option>
                </optgroup>
                <option value="General Studio Consultation">General Studio Consultation / Custom Quote</option>
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-[#A1A1AA]" />
            </div>
          </div>

          {/* 2. Vehicle Make & Model */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-semibold tracking-wider text-[#D4D4D8] uppercase">
                Vehicle Model
              </label>
              <div className="relative">
                <Car className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#A1A1AA]" />
                <input
                  type="text"
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                  placeholder="e.g. Creta, Fortuner, Swift, BMW 3"
                  className="w-full rounded-lg border border-[#292932] bg-[#111116] py-3 pr-4 pl-10 text-sm text-white placeholder-[#71717A] focus:border-[#A020F0] focus:ring-1 focus:ring-[#A020F0] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold tracking-wider text-[#D4D4D8] uppercase">
                Your Name (Optional)
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your name"
                className="w-full rounded-lg border border-[#292932] bg-[#111116] px-4 py-3 text-sm text-white placeholder-[#71717A] focus:border-[#A020F0] focus:ring-1 focus:ring-[#A020F0] focus:outline-none"
              />
            </div>
          </div>

          {/* 3. Preferred Date */}
          <div>
            <div className="mb-2 flex flex-wrap items-center justify-between gap-1">
              <label className="text-xs font-semibold tracking-wider text-[#D4D4D8] uppercase">
                Preferred Appointment Date
              </label>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setQuickDate("today")}
                  className="cursor-pointer rounded border border-[#292932] bg-[#17171F] px-2 py-0.5 text-[10px] text-[#D4D4D8] hover:border-[#A020F0] hover:text-white"
                >
                  Today
                </button>
                <button
                  type="button"
                  onClick={() => setQuickDate("tomorrow")}
                  className="cursor-pointer rounded border border-[#292932] bg-[#17171F] px-2 py-0.5 text-[10px] text-[#D4D4D8] hover:border-[#A020F0] hover:text-white"
                >
                  Tomorrow
                </button>
                <button
                  type="button"
                  onClick={() => setQuickDate("weekend")}
                  className="cursor-pointer rounded border border-[#292932] bg-[#17171F] px-2 py-0.5 text-[10px] text-[#D4D4D8] hover:border-[#A020F0] hover:text-white"
                >
                  This Weekend
                </button>
              </div>
            </div>
            <div className="relative">
              <Calendar className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#A1A1AA]" />
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full rounded-lg border border-[#292932] bg-[#111116] py-3 pr-4 pl-10 text-sm text-white focus:border-[#A020F0] focus:ring-1 focus:ring-[#A020F0] focus:outline-none"
              />
            </div>
          </div>

          {/* 5. Pickup & Delivery Option */}
          <div
            onClick={() => setIsPickupDelivery(!isPickupDelivery)}
            className={`flex cursor-pointer items-center justify-between rounded-lg border p-3.5 transition-all ${
              isPickupDelivery
                ? "border-[#A020F0] bg-[#A020F0]/15 shadow-[0_0_20px_-6px_rgba(160,32,240,0.35)]"
                : "border-[#292932] bg-[#111116] hover:border-[#292932]/80"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border ${
                  isPickupDelivery
                    ? "border-[#E81CFF]/60 bg-[#A020F0]/30 text-[#E81CFF]"
                    : "border-[#292932] bg-[#17171F] text-[#A1A1AA]"
                }`}
              >
                <Truck className="h-4.5 w-4.5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">
                  Doorstep Pickup &amp; Delivery
                </div>
                <div className="text-[11px] text-[#A1A1AA]">
                  Available across Valanjavazhy &amp; Alappuzha region
                </div>
              </div>
            </div>
            <input
              type="checkbox"
              checked={isPickupDelivery}
              onChange={() => {}}
              aria-label="Toggle pickup and delivery"
              className="h-4 w-4 accent-[#A020F0]"
            />
          </div>

          {/* 6. Live WhatsApp Message Preview */}
          <div className="rounded-lg border border-[#292932] bg-[#09090D] p-3.5">
            <div className="mb-1.5 flex items-center justify-between text-[11px] font-semibold text-[#A1A1AA]">
              <span className="flex items-center gap-1.5">
                <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
                <span>Formatted WhatsApp Message Preview:</span>
              </span>
              <span className="text-[10px] text-[#71717A]">Direct to {BUSINESS_INFO.phoneDisplay} / {BUSINESS_INFO.secondaryPhoneDisplay}</span>
            </div>
            <div className="rounded-md border border-[#1F2937]/50 bg-[#111827]/40 p-3 text-xs leading-relaxed text-[#D1D5DB]">
              <p className="text-white font-medium">Hello Cardilac,</p>
              {customerName.trim() ? <p>My Name: {customerName.trim()}</p> : null}
              <p className="mt-1 text-[#E5E7EB]">
                I would like to enquire / book an appointment slot:
              </p>
              <div className="mt-1 space-y-0.5 text-[#93C5FD]">
                <p>• Service: <span className="text-white font-medium">{service}</span></p>
                {vehicleModel.trim() ? <p>• Vehicle: <span className="text-white">{vehicleModel.trim()}</span></p> : null}
                {preferredDate ? <p>• Preferred Date: <span className="text-white">{preferredDate}</span></p> : null}
                {isPickupDelivery ? <p className="text-[#34D399]">• Pickup &amp; Delivery: Requested</p> : null}
              </div>
              <p className="mt-1.5 text-[11px] text-[#9CA3AF]">
                Please let me know the available time slots. Thank you!
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="group relative flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-lg border border-[#E81CFF]/60 bg-[#A020F0] px-6 py-4 text-sm font-bold tracking-wide text-white shadow-[0_0_35px_-4px_rgba(160,32,240,0.7)] transition-all hover:bg-[#8E18D8] hover:shadow-[0_0_45px_-2px_rgba(232,28,255,0.75)]"
            >
              <MessageCircle className="h-5 w-5 fill-white text-[#A020F0] transition-transform group-hover:scale-110" />
              <span>Send Booking Request via WhatsApp</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="mt-2 text-center text-[11px] text-[#71717A]">
              Dispatches immediately to Cardilac via WhatsApp. No login or signup required.
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export function WhatsAppEnquiryModal() {
  const { isOpen, closeEnquiryModal, options } = useWhatsAppEnquiry();

  return (
    <AnimatePresence>
      {isOpen ? (
        <ModalFormContent options={options} onClose={closeEnquiryModal} />
      ) : null}
    </AnimatePresence>
  );
}
