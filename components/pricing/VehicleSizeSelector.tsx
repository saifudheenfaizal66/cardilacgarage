"use client";

import React from "react";

export type VehicleSizeHighlight = "ALL" | "S" | "M" | "L" | "XL" | "XXL";

const SIZE_OPTIONS: { id: VehicleSizeHighlight; label: string; hint: string }[] = [
  { id: "ALL", label: "All Sizes", hint: "Show full chart" },
  { id: "S", label: "S", hint: "Small / Hatch" },
  { id: "M", label: "M", hint: "Medium" },
  { id: "L", label: "L", hint: "Large / Sedan" },
  { id: "XL", label: "XL", hint: "SUV / MUV" },
  { id: "XXL", label: "XXL", hint: "Full-Size SUV" },
];

interface VehicleSizeSelectorProps {
  selectedSize: VehicleSizeHighlight;
  onChange: (size: VehicleSizeHighlight) => void;
}

export function VehicleSizeSelector({
  selectedSize,
  onChange,
}: VehicleSizeSelectorProps) {
  return (
    <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-xs font-semibold tracking-[0.16em] text-[#A1A1AA] uppercase">
        Highlight Vehicle Size:
      </span>
      <div
        role="group"
        aria-label="Highlight vehicle size pricing"
        className="flex flex-wrap gap-1.5"
      >
        {SIZE_OPTIONS.map((option) => {
          const isActive = selectedSize === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              title={option.hint}
              className={`cursor-pointer rounded-md border px-3 py-1.5 text-xs font-semibold transition-all ${
                isActive
                  ? "border-[#A020F0] bg-[#A020F0] text-white shadow-[0_0_16px_-4px_rgba(160,32,240,0.6)]"
                  : "border-[#292932] bg-[#111116] text-[#A1A1AA] hover:border-[#A020F0]/50 hover:text-white"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

