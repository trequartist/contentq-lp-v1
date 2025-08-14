'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface FounderVisionCardProps {
  className?: string;
}

export function FounderVisionCard({ className }: FounderVisionCardProps) {
  const [expandedFounder, setExpandedFounder] = useState(false);

  return (
    <>
      {expandedFounder && (
        <div className="fixed inset-0 z-[60] bg-black/30 transition-opacity duration-300"></div>
      )}

      <motion.div
        className={cn(
          "relative max-w-4xl mx-auto mt-8 rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur-md p-8",
          expandedFounder ? "z-[70]" : "z-10",
          className
        )}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0.9 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ type: 'spring', stiffness: 220, damping: 16 }}
          className="absolute -top-3 right-4"
        >
          <Badge 
            variant="secondary" 
            className="badge-shimmer rounded-full bg-[#B4F64A] text-slate-900 hover:bg-[#A7E84F] border border-[#9EDD34] ring-1 ring-[#94D82D]/40 shadow-[0_6px_16px_rgba(148,216,45,0.35)] px-3 py-1 text-[12px] md:text-[13px] font-semibold"
          >
            Founder's Vision
          </Badge>
        </motion.div>
        
        <div className="space-y-4 text-slate-800">
          <p className="text-lg font-medium">💭 Why We Are Building KiwiQ AI</p>
          
          <p className="text-base leading-relaxed">"We're building AI that actually knows you."</p>

          {!expandedFounder && (
            <button
              onClick={() => setExpandedFounder(true)}
              className="group inline-flex items-center gap-2 text-[#0EA5E9] font-semibold hover:text-[#38BDF8] transition-colors"
            >
              Read our Vision
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          )}

          <div className={cn(
            "transition-all duration-300 ease-linear overflow-hidden",
            expandedFounder ? "opacity-100 max-h-[2000px]" : "opacity-0 max-h-0"
          )}>
            <div className="space-y-4 pt-2">
              <p className="text-base leading-relaxed">
                Most people don't realize what's possible yet. AI can be so much more than a writing assistant.
              </p>
              <p className="text-base leading-relaxed">
                We're building systems with actual memory — that learn your voice, carry your context, and get smarter about your business every single day. Raunak led ML at Google Gemini. I've been obsessed with storytelling for years.
              </p>
              <p className="text-base leading-relaxed">
                Here's what we realized: Telling your story effectively takes massive expertise and bandwidth. You need to understand every platform's language, every algorithm's preference, every audience's context. Few have the bandwidth to do this, and fewer still have the multi-platform expertise to do it right. That's where real AI intelligence changes everything — it becomes the bridge between what you know and what gets heard.
              </p>
              <p className="text-base leading-relaxed">
                ContentQ is teammate #1. It builds your knowledge graph and uses that intelligence to tell your story authentically across every channel that matters. But we're just getting started. We're building AI that doesn't just execute tasks — it thinks with you, sees patterns you miss, and helps you articulate things you couldn't quite put into words.
              </p>
              <p className="text-base leading-relaxed">
                The future belongs to companies that truly understand their customers and can tell stories that move them. We're building the AI to make that happen. Ready?
              </p>
              <button
                onClick={() => setExpandedFounder(false)}
                className="mt-2 inline-flex items-center gap-2 text-[#0EA5E9] font-semibold hover:text-[#38BDF8] transition-colors"
              >
                Show less
                <span className="transition-transform duration-300">↑</span>
              </button>
            </div>
          </div>

          <p className="text-slate-600 text-base">— Anish & Raunak (Co‑founders, KiwiQ AI)</p>
        </div>
      </motion.div>
    </>
  );
}