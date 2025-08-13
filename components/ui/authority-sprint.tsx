"use client";

import React, { useState } from "react";
import Section from "@/components/Section";
import { cn } from "@/lib/utils";
import { Cpu, Users, ChevronDown } from "lucide-react";
import PrimaryCTA from "@/components/ui/primary-cta";

interface MonthPlan {
  title: string; // Foundation, Momentum, Scale
  time: string; // e.g., 2 hours total
  focus: string;
  outcome: string;
  details: string[];
}

const MONTHS: MonthPlan[] = [
  {
    title: "Foundation",
    time: "2 hours total",
    focus: "Strategy & voice capture",
    outcome: "First content live, AI learning your voice",
    details: [
      "Deep-dive strategy session to capture your perspective",
      "AI learns your unique POV and expertise",
      "First authority assets go live",
      "Foundation for sustained growth established",
    ],
  },
  {
    title: "Momentum",
    time: "1 hour per week",
    focus: "Coordinated campaigns across channels",
    outcome: "20+ pieces published, rankings improving",
    details: [
      "Strategic content published across your key channels",
      "Every piece structured for maximum discoverability",
      "Build recognized expertise in your core topics",
      "Momentum building across all channels",
    ],
  },
  {
    title: "Scale",
    time: "30 minutes per week",
    focus: "System running, authority compounding",
    outcome: "Full system on autopilot, leads coming in",
    details: [
      "System running with minimal input",
      "Authority compounding week over week",
      "Track growing visibility across platforms",
      "Scale what's working, optimize what isn't",
    ],
  },
];

export function AuthoritySprintSection(): JSX.Element {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setExpandedIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <Section
      variant="dark"
      id="sprint"
      className="py-8 lg:py-12 lg:px-[40px] relative overflow-hidden sm-scroll-offset"
      style={{ backgroundColor: "#001233" }}
    >
      <div className="relative z-10 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-4xl font-semibold text-white">
            Your 90-Day Authority Sprint
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            From strategy to system in one quarter—with just minutes of your time weekly
          </p>
        </div>

        {/* AI + Human system bar */}
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative overflow-hidden rounded-2xl border border-white/20 ring-1 ring-white/20 shadow-[0_10px_60px_rgba(0,0,0,0.45)] backdrop-blur-sm p-4 lg:p-5 bg-[radial-gradient(900px_200px_at_20%_0%,rgba(148,216,45,0.22),transparent),linear-gradient(90deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))]">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex h-6 px-2.5 items-center rounded-full text-[11px] font-semibold tracking-wide bg-white/10 text-white/90 border border-white/25">
                Technology Foundation
              </span>
              <span className="hidden md:inline-flex items-center gap-1.5 text-white/85 text-xs">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#94D82D] shadow-[0_0_10px_rgba(148,216,45,0.8)]" />
                AI + Human system
              </span>
            </div>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#94D82D]/18 text-[#B4F64A] ring-1 ring-[#94D82D]/40 shadow-[0_6px_20px_rgba(148,216,45,0.18)]">
                  <Cpu size={18} />
                </span>
                <div className="text-white/85 text-[13px] leading-relaxed">
                  <div className="font-semibold text-white">AI Intelligence</div>
                  Multi-agent system with persistent memory of your business
                </div>
              </div>
              <div className="flex items-start gap-3 md:border-l md:border-white/12 md:pl-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/12 text-white ring-1 ring-white/25">
                  <Users size={18} />
                </span>
                <div className="text-white/85 text-[13px] leading-relaxed">
                  <div className="font-semibold text-white">Human Experts</div>
                  Dedicated strategists who add nuance and strategic thinking
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          </div>
        </div>

        {/* Timeline single row */}
        <div className="mx-auto max-w-6xl px-4">
          {/* Line */}
          <div className="relative mb-5">
            <div className="h-[2px] w-full bg-white/10 rounded" />
            <div className="absolute inset-0 flex justify-between">
              {[0, 1, 2].map((i) => (
                <div key={i} className="-translate-y-1/2 top-1/2 relative">
                  <div className="w-2 h-2 rounded-full bg-[#94D82D]/70 shadow-[0_0_12px_rgba(148,216,45,0.7)]" />
                </div>
              ))}
            </div>
            <div className="mt-2 grid grid-cols-3 text-[12px] text-white/70">
              <div className="text-left">Month 1</div>
              <div className="text-center">Month 2</div>
              <div className="text-right">Month 3</div>
            </div>
          </div>

          {/* Cards row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
            {MONTHS.map((m, idx) => {
              const expanded = expandedIdx === idx;
              return (
                <div
                  key={m.title}
                  className={cn(
                    "month-card rounded-xl border border-white/12 ring-1 ring-white/5 bg-white/[0.03] [background:linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] p-4 lg:p-5 transition-all duration-300 hover:bg-white/[0.05] hover:-translate-y-[2px] hover:shadow-[0_16px_60px_rgba(0,0,0,0.35)]",
                    expanded && "bg-white/[0.05] ring-[#94D82D]/30"
                  )}
                >
                  <button
                    className="w-full text-left focus:outline-none group"
                    onClick={() => toggle(idx)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggle(idx);
                      }
                    }}
                    aria-expanded={expanded}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="text-white font-semibold leading-tight">
                          {m.title}
                        </div>
                        <div className="text-white/75 text-[13px] leading-snug">
                          <span className="text-white/90">Focus:</span> {m.focus}
                        </div>
                        <div className="text-white/75 text-[13px] leading-snug">
                          <span className="text-white/90">Outcome:</span> {m.outcome}
                        </div>
                      </div>
                      <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/8 px-2.5 py-1 text-[11px] font-medium text-white/85">
                        {m.time}
                        <ChevronDown
                          className={cn(
                            "w-3.5 h-3.5 text-white/85 transition-transform duration-200",
                            expanded ? "rotate-180" : "rotate-0"
                          )}
                        />
                      </span>
                    </div>
                    {/* subtle micro-hint under header */}
                    <div className="mt-2 opacity-80">
                      <span className="inline-flex items-center gap-1 text-[11px] text-white/60 group-hover:text-white/80 transition-colors">
                        <span className="inline-block h-1 w-1 rounded-full bg-[#94D82D] animate-pulse" />
                        <span>Tap to {expanded ? "collapse" : "expand"}</span>
                      </span>
                    </div>
                  </button>

                  {/* Expandable details */}
                  <div
                    className={cn(
                      "overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
                      expanded ? "max-h-64 opacity-100 mt-3" : "max-h-0 opacity-0"
                    )}
                  >
                    <ul className="list-disc ml-4 space-y-1.5 text-white/80 text-[13px]">
                      {m.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-6">
            <PrimaryCTA mode="dark" />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AuthoritySprintSection; 