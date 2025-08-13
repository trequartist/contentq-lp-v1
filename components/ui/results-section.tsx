import React from 'react';
import Section from '@/components/Section';
import { SectionHeadline, BodyText } from '@/components/Typography';
import PrimaryCTA from '@/components/ui/primary-cta';

export default function ResultsSection() {
  const HIGHLIGHTS = [
    { emoji: '🔍', title: 'Your Keywords, Page 1', body: 'Break through for the terms that matter' },
    { emoji: '🤖', title: 'ChatGPT Recommends You', body: 'From invisible to cited in buyer conversations' },
    { emoji: '💼', title: 'Content That Qualifies Leads', body: 'When your content becomes your sales team' },
    { emoji: '🎯', title: 'Invisible Expert → Quoted Authority', body: 'Founders become the face of their category' },
  ];

  return (
    <Section
      variant="white"
      id="results"
      className="relative py-10 lg:py-14 overflow-hidden bg-gradient-to-b from-zinc-50 to-white sm-scroll-offset"
    >
      <div className="space-y-10 max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <SectionHeadline>
            Results That Matter
          </SectionHeadline>
          <BodyText className="text-xl max-w-3xl mx-auto text-slate-700">
            Real transformations from real companies
          </BodyText>
        </div>

        {/* Modern highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {HIGHLIGHTS.map((h) => (
            <div key={h.title} className="group/card relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 ring-1 ring-slate-900/[0.03] backdrop-blur-[2px] shadow-[0_6px_24px_rgba(2,6,23,0.06)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_10px_40px_rgba(2,6,23,0.10)]">
              <div className="absolute left-0 inset-y-0 w-[2px] bg-[#94D82D]/40 group-hover/card:bg-[#94D82D] transition-colors" />
              <div className="absolute inset-0 pointer-events-none opacity-60" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.45), rgba(255,255,255,0))' }} />
              <div className="relative p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#94D82D]/15 border border-[#94D82D]/30 text-base select-none">
                    {h.emoji}
                  </span>
                  <div className="text-lg font-semibold text-slate-900 tracking-tight">
                    {h.title}
                  </div>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {h.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <PrimaryCTA mode="light" />
        </div>

        <p className="text-center text-slate-600 max-w-3xl mx-auto">
          Your starting point is just that—a starting point. We accelerate what comes next.
        </p>
      </div>
    </Section>
  );
}