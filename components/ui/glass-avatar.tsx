"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface GlassAvatarProps {
  sources: string[]; // public paths to try in order
  alt: string;
  initials: string;
  size?: number; // px
  className?: string;
}

export default function GlassAvatar({ sources, alt, initials, size = 36, className }: GlassAvatarProps): JSX.Element {
  const [idx, setIdx] = useState(0);
  const hasMore = idx < sources.length;
  const dimension = { width: size, height: size } as React.CSSProperties;

  return (
    <div
      className={cn(
        "relative rounded-full border border-white/15 bg-white/10 backdrop-blur-md ring-1 ring-white/10 overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.35)]",
        className
      )}
      style={dimension}
      aria-label={alt}
    >
      <span className="absolute inset-0 flex items-center justify-center text-[#0A0A0A] font-semibold bg-gradient-to-b from-white/90 to-white/70">
        {initials}
      </span>
      {hasMore && (
        <img
          src={sources[idx]}
          alt={alt}
          className="relative h-full w-full object-cover"
          onError={() => setIdx((prev) => prev + 1)}
        />
      )}
    </div>
  );
} 