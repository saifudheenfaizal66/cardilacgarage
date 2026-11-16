import React from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass =
    align === "center"
      ? "mx-auto text-center items-center"
      : "text-left items-start";

  return (
    <div className={`flex w-full max-w-full min-w-0 flex-col ${alignClass} ${className}`}>
      <div className="mb-3 inline-flex items-center gap-2.5">
        <span className="h-px w-6 bg-[#A020F0]" aria-hidden="true" />
        <span className="text-xs font-semibold tracking-[0.24em] text-[#A020F0] uppercase">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-[clamp(1.5rem,4.2vw,2.65rem)] font-bold tracking-tight text-white leading-[1.22] sm:leading-[1.2] lg:leading-[1.14] break-words">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-sm leading-relaxed text-[#A1A1AA] sm:text-base ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

