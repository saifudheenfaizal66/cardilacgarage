import React from "react";
import { Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { getButtonClasses } from "./Button";

interface ContactButtonProps {
  label?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ContactButton({
  label = "Call Now",
  variant = "outline",
  size = "md",
  className = "",
}: ContactButtonProps) {
  return (
    <a
      href={BUSINESS_INFO.phoneHref}
      className={getButtonClasses({ variant, size, className })}
    >
      <Phone className="h-4 w-4 shrink-0" />
      <span>{label}</span>
    </a>
  );
}

