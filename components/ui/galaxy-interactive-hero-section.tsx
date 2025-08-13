"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { TrustedByStrip } from '@/components/ui/trusted-by-strip';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { url?: string };
    }
  }
}

function HeroSplineBackground(): JSX.Element {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const deviceMemory = (navigator as any).deviceMemory || 4; // assume mid-tier if unknown
    if (deviceMemory < 6) return; // skip heavy 3D on low-memory devices

    const load = () => {
      if ((window as any).SplineViewerDefined) {
        setReady(true);
        return;
      }
      if (!document.getElementById('spline-viewer-script')) {
        const script = document.createElement('script');
        script.id = 'spline-viewer-script';
        script.src = 'https://unpkg.com/@splinetool/viewer@latest/build/spline-viewer.js';
        script.async = true;
        script.onload = () => {
          (window as any).SplineViewerDefined = true;
          setReady(true);
        };
        document.head.appendChild(script);
      } else {
        setReady(true);
      }
    };

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(load);
    } else {
      setTimeout(load, 200);
    }
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100dvh', pointerEvents: 'auto', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, filter: 'brightness(0.55) contrast(1.05) saturate(0.9)' }}>
        {ready ? (
          <spline-viewer url="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode" style={{ width: '100%', height: '100dvh' }} />
        ) : (
          <div className="w-full h-[100svh] bg-gradient-to-br from-slate-900 via-black to-slate-800" />
        )}
      </div>
      <div
        style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100dvh',
          background: `
            radial-gradient(900px 360px at 38% 35%, rgba(148,216,45,0.08) 0%, rgba(148,216,45,0.03) 45%, rgba(0,0,0,0) 60%),
            linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.32) 30%, rgba(0,0,0,0.32) 70%, rgba(0,0,0,0.78) 100%),
            linear-gradient(180deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.8) 55%, rgba(0,0,0,0.86) 100%)
          `,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

function LeftCopy(): JSX.Element {
  return (
    <div className="text-left text-white px-6 sm:px-8 max-w-5xl">
      <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.28em] text-white/70">One system . Everywhere buyers look.</p>
      <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.05] tracking-tight drop-shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
        Your Buyers Just <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#b6f46b] to-[#94D82D]">Changed</span> How They
        <br className="hidden sm:block" /> Buy.
      </h1>
      <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/85 drop-shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
        Time to Change How You're <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#b6f46b] to-[#94D82D]">Found</span>.
      </h2>

      <div className="mt-6 flex flex-wrap gap-3">
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/85 backdrop-blur">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#94D82D]"></span>
          AI Citations
        </span>
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/85 backdrop-blur">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#94D82D]"></span>
          Search Rankings
        </span>
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/85 backdrop-blur">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#94D82D]"></span>
          Social Authority
        </span>
      </div>

      <div className="mt-7 pointer-events-auto flex flex-col items-start gap-2">
        <a href="https://cal.com/banish/contentq-exploratory-call-with-anish" className="magnetic-cta relative overflow-hidden rounded-full px-7 sm:px-9 py-3 text-base font-semibold text-slate-900 bg-gradient-to-b from-[#B4F64A] to-[#94D82D] border border-[#9EDD34] shadow-[0_10px_28px_rgba(148,216,45,0.28)] transition-all duration-300 w-full sm:w-auto backdrop-blur-sm hover:shadow-[0_16px_40px_rgba(148,216,45,0.38)] hover:translate-y-[-1px] active:translate-y-0">
          <span className="relative z-[2]">Get In Touch</span>
          <span className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(100px_40px_at_var(--mx,50%)_-20%,rgba(255,255,255,0.35),transparent_60%)] transition-[background-position] duration-300" />
        </a>
        <p className="text-white/70 text-sm">Start Your 90-Day Authority Sprint</p>
      </div>
    </div>
  );
}

function RightIntroCard(): JSX.Element {
  return (
    <div className="hidden lg:block px-6 sm:px-0 self-center lg:translate-y-4 xl:translate-y-8">
      <div className="pointer-events-auto relative max-w-[460px] rounded-2xl border border-white/20 bg-gradient-to-b from-neutral-900/60 to-neutral-900/40 backdrop-blur-md shadow-[0_16px_60px_rgba(0,0,0,0.55)]">
        <div className="absolute -top-[1px] left-5 right-5 h-[2px] bg-gradient-to-r from-transparent via-[#94D82D] to-transparent opacity-90"></div>
        <div className="absolute left-4 top-6 bottom-6 w-px bg-gradient-to-b from-[#94D82D33] via-[#94D82D66] to-[#94D82D33]" />
        <div className="p-7 relative">
          <div className="absolute -bottom-2 left-7 right-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="mb-1.5 inline-flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#94D82D] shadow-[0_0_10px_2px_rgba(148,216,45,0.25)]"></span>
            <span className="px-2 py-1 rounded-md border border-white/10 bg-white/5 backdrop-blur-sm text-[11px] md:text-[12px] tracking-[0.14em] uppercase text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">Introducing ContentQ</span>
            <span className="text-[12px] md:text-[13px] tracking-[0.02em] text-zinc-300">· For B2B Teams</span>
          </div>
          <p className="text-[16px] lg:text-[17px] leading-[1.75] bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-300 bg-clip-text text-transparent drop-shadow-[0_8px_32px_rgba(0,0,0,0.45)] antialiased">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-300">ContentQ is your </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b6f46b] to-[#94D82D]">AI Teammate for B2B content authority</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-300">. Working with human content strategists, we build your presence across founder LinkedIn and company blog—crafting stories that </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b6f46b] to-[#94D82D]">get you discovered everywhere buyers look: ChatGPT, Google, and LinkedIn.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function HeroContent(): JSX.Element {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_460px] items-start lg:items-center gap-8 lg:gap-12">
      <LeftCopy />
      <RightIntroCard />
    </div>
  );
}

export function HeroSection(): JSX.Element {
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const maxScroll = 400;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.pageYOffset;
        if (heroContentRef.current) {
          const opacity = 1 - Math.min(y / maxScroll, 1);
          heroContentRef.current.style.opacity = String(opacity);
          heroContentRef.current.style.transform = `translateY(${Math.min(y * 0.1, 24)}px)`;
          heroContentRef.current.style.willChange = 'transform, opacity';
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const btn = document.querySelector('.magnetic-cta') as HTMLElement | null;
    if (!btn) return;
    let ticking = false;
    const onMove = (e: MouseEvent) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = btn.getBoundingClientRect();
        const mx = ((e.clientX - rect.left) / rect.width) * 100;
        btn.style.setProperty('--mx', `${mx}%`);
        ticking = false;
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove as any);
  }, []);

  return (
    <section className="relative min-h-[100svh]">
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <HeroSplineBackground />
      </div>
      <div className="relative z-10 flex min-h-[100svh] items-center pt-24 md:pt-28 lg:pt-32 pb-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div ref={heroContentRef} className="pointer-events-none">
            <HeroContent />
            <div className="mt-4 md:mt-6 lg:mt-8 pointer-events-auto">
              <TrustedByStrip />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 