import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-[#A020F0] text-white border border-[#B94AF7]/60 hover:bg-[#8E18D8] shadow-[0_0_24px_-6px_rgba(160,32,240,0.55)] hover:shadow-[0_0_28px_-4px_rgba(160,32,240,0.75)]",
  secondary:
    "bg-[#17171F] text-white border border-[#292932] hover:border-[#A020F0]/60 hover:bg-[#1E1E28]",
  outline:
    "bg-transparent text-white border border-[#292932] hover:border-[#A020F0] hover:bg-[#A020F0]/10",
  ghost:
    "bg-transparent text-[#A1A1AA] border border-transparent hover:text-white hover:bg-[#17171F]",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-3.5 py-2 text-xs tracking-wider",
  md: "px-5 py-2.5 text-sm tracking-wide",
  lg: "px-6 py-3.5 text-sm sm:text-base tracking-wide",
};

interface CommonStyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export function getButtonClasses({
  variant = "primary",
  size = "md",
  className = "",
}: CommonStyleProps) {
  return `inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A020F0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090D] disabled:opacity-50 disabled:pointer-events-none cursor-pointer ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    CommonStyleProps {}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={getButtonClasses({ variant, size, className })}
      {...props}
    >
      {children}
    </button>
  );
}

