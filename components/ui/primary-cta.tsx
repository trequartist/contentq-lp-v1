"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PrimaryCTAProps {
  href?: string;
  label?: string;
  caption?: string;
  mode?: "dark" | "light"; // controls caption color
  expand?: boolean; // full width when true
  className?: string;
}

export function PrimaryCTA({
  href = "https://cal.com/banish/contentq-exploratory-call-with-anish",
  label = "Get In Touch",
  caption = "Start Your 90-Day Authority Sprint",
  mode = "dark",
  expand = false,
  className,
}: PrimaryCTAProps): JSX.Element {
  const captionClass = mode === "dark" ? "text-white/70" : "text-slate-600";

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <a
        href={href}
        className={cn(
          "relative overflow-hidden rounded-full px-7 sm:px-9 py-3 text-base font-semibold text-slate-900",
          "bg-gradient-to-b from-[#B4F64A] to-[#94D82D] border border-[#9EDD34]",
          "shadow-[0_10px_28px_rgba(148,216,45,0.28)] transition-all duration-300 backdrop-blur-sm",
          "hover:shadow-[0_16px_40px_rgba(148,216,45,0.38)] hover:-translate-y-px active:translate-y-0",
          expand ? "w-full" : "w-auto"
        )}
      >
        {label}
      </a>
      {caption && caption.trim().length > 0 ? (
        <p className={cn(captionClass, "text-sm")}>{caption}</p>
      ) : null}
    </div>
  );
}

export default PrimaryCTA; 