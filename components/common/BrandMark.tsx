import React from "react";
import { BUSINESS_INFO } from "@/data/business";

interface BrandMarkProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon" | "wordmark";
}

const SIZE_MAP = {
  sm: {
    iconWrap: "h-8 w-8",
    iconImg: "h-6 w-6",
    titleText: "text-xs sm:text-sm",
    subText: "text-[9px]",
    gap: "gap-2",
  },
  md: {
    iconWrap: "h-10 w-10",
    iconImg: "h-7 w-7",
    titleText: "text-xs sm:text-base",
    subText: "text-[10px]",
    gap: "gap-2 sm:gap-2.5",
  },
  lg: {
    iconWrap: "h-12 w-12",
    iconImg: "h-8 w-8",
    titleText: "text-sm sm:text-lg",
    subText: "text-[11px]",
    gap: "gap-2.5 sm:gap-3",
  },
};

/**
 * Official Cardilac Premium Car Wash brand lockup combining the emblem
 * with prominent operating identification.
 */
export function BrandMark({
  className = "",
  showTagline = false,
  size = "md",
  variant = "full",
}: BrandMarkProps) {
  const styles = SIZE_MAP[size];

  return (
    <div className={`inline-flex items-center select-none ${styles.gap} ${className}`}>
      {variant !== "wordmark" ? (
        <div
          className={`relative flex shrink-0 items-center justify-center rounded-lg border border-[#E81CFF]/40 bg-[#111116] shadow-[0_0_24px_-6px_rgba(232,28,255,0.4)] ${styles.iconWrap}`}
        >
          <img
            src={BUSINESS_INFO.logos.emblem}
            alt="Cardilac Premium Car Wash logo"
            className={`object-contain ${styles.iconImg}`}
          />
        </div>
      ) : null}

      {variant !== "icon" ? (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span className={`font-display font-extrabold tracking-tight text-white whitespace-nowrap ${styles.titleText}`}>
              CARDILAC <span className="text-[#E81CFF]">PREMIUM CAR WASH</span>
            </span>
          </div>
          {showTagline ? (
            <span className={`font-medium tracking-wide text-[#A1A1AA] ${styles.subText}`}>
              Premium Car Wash &amp; Accessories Studio
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
