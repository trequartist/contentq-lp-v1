'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { Footer } from '@/components/ui/large-name-footer';
import { Stats } from '@/components/ui/stats-section';
import { HeroPill, StarIcon } from '@/components/ui/hero-pill';
import { HeroHeadline, SectionHeadline, Subheadline, BodyText, Caption } from '@/components/Typography';
import { staggerChildren, fadeInUp, cardEntrance } from '@/components/AnimationPrimitives';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { Testimonial } from '@/components/ui/testimonial';
import { useState, useEffect, useRef, useCallback } from 'react';
import WhatWeDoSection from '@/components/ui/what-we-do-section';
import { StatsWithText } from '@/components/ui/stats-section-with-text';
import { StatsNew } from '@/components/ui/stats-section-new';
import { HeroSection } from '@/components/ui/galaxy-interactive-hero-section';
import AuthoritySprintSection from '@/components/ui/authority-sprint';
import ResultsSection from '@/components/ui/results-section';
import WeSeeYouSection from '@/components/ui/we-see-you-section';
import { CTA } from '@/components/ui/call-to-action';
import { FounderVisionCard } from '@/components/ui/founder-vision-card';
import SectionDivider from '@/components/ui/section-divider';

// Replace legacy hero with new interactive hero section

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  // Mount detection
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Statistics data for the pulse section
  const stats = [
    { 
      value: '13', 
      statText: 'number of pieces of content consumed by B2B buyers before sales',
      source: 'Forrester B2B Buyer Journey Report, 2024'
    },
    { 
      value: '1,500', 
      statText: 'AI scrapes your content this many times for every 1 visitor it sends back',
      source: 'OpenAI traffic analysis / Web scrape-to-visit ratios, 2024'
    },
    { 
      value: '89%', 
      statText: 'B2B buyers say executive thought leadership directly influences vendor selection',
      source: 'LinkedIn–Edelman B2B Thought Leadership Study, 2024'
    }
  ] as const;

  // Refs for animation management
  const statListRef = useRef<HTMLUListElement>(null);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  // Animation functions
  const cycleStats = useCallback(() => {
    setCurrentStatIndex(prevIndex => (prevIndex + 1) % stats.length);
  }, [stats.length]);

  const startCycle = useCallback(() => {
    if (intervalIdRef.current) return; // Already running
    intervalIdRef.current = setInterval(cycleStats, 3000);
  }, [cycleStats]);

  const pauseCycle = useCallback(() => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
  }, []);

  const resumeCycle = useCallback(() => {
    startCycle();
  }, [startCycle]);

  // Set up intersection observer and hover events - client-only
  useEffect(() => {
    if (!isMounted) return;

    const section = document.querySelector('.shift-section');
    const statList = statListRef.current;
    
    if (!section || !statList) return;

    // Intersection Observer for viewport visibility
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCycle();
        } else {
          pauseCycle();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(section);

    // Hover events for pause/resume
    const handleMouseEnter = () => pauseCycle();
    const handleMouseLeave = () => resumeCycle();

    statList.addEventListener('mouseenter', handleMouseEnter);
    statList.addEventListener('mouseleave', handleMouseLeave);
    
    // Cleanup
    return () => {
      observer.unobserve(section);
      statList.removeEventListener('mouseenter', handleMouseEnter);
      statList.removeEventListener('mouseleave', handleMouseLeave);
      pauseCycle();
    };
  }, [isMounted, startCycle, pauseCycle, resumeCycle]);

  return (
    <main>
      {/* Hero Section - New Interactive version */}
      <HeroSection />

      {/* Dark → Light divider to What We Do */}
      <SectionDivider variant="dark-to-light" />

      {/* The Shift Section (restored copy, compact visuals) */}
      <Section variant="dark" className="shift-section" style={{ backgroundColor: '#001233' }}>
        <div className="space-y-6 max-w-6xl mx-auto text-center">
          <SectionHeadline>
            <span className="text-white">The shift is already here.</span>
            <div className="shift-underline"></div>
          </SectionHeadline>
          <StatsNew
            stats={stats.map((stat, index) => ({
              ...stat,
              trendDirection: (index % 2 === 0 ? 'up' : 'down') as 'up' | 'down',
              trend: index === 0 ? '+12%' : index === 1 ? '+15%' : '+8%'
            }))}
            currentStatIndex={currentStatIndex}
            colorMode="light"
            showIndicators={false}
          />
          <div className="mt-10 mb-2 text-center">
            <p className="inline-block text-lg md:text-xl tracking-tight text-white/80 bg-white/5 px-4 py-3 rounded-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm">
              <span className="text-white/90">The game has changed.</span> The companies who figure out the new rules first will own their categories for the next decade.
            </p>
          </div>
        </div>
      </Section>

      {/* Light → Dark divider to Sprint */}
      <SectionDivider variant="light-to-dark" />

      <WhatWeDoSection />

      {/* Dark → Light divider to Results */}
      <SectionDivider variant="dark-to-light" />

      {/* 90-Day Sprint Section */}
      <AuthoritySprintSection />

      {/* Light → Dark divider to We See You */}
      <SectionDivider variant="light-to-dark" />

      {/* Results That Matter Section */}
      <ResultsSection />

      {/* Light → Dark divider to We See You */}
      <SectionDivider variant="light-to-dark" />

      {/* We See You Section */}
      <WeSeeYouSection />

      {/* Dark → Dark subtle divider before bottom CTA */}
      <SectionDivider variant="dark-to-dark" />

      {/* Bottom Line Section */}
      <Section variant="dark" id="bottom-line" className="py-4 lg:py-6" style={{ backgroundColor: '#001233' }}>
        <CTA
          badge="The Future is Now"
          title="The Future of B2B Discovery is Being Written Right Now"
          subtitle="Will you define the playbook or follow it?"
          description="ContentQ helps you build authority that dominates Google, gets cited by AI, and built trust on LinkedIn."
          primaryButtonText="Get In Touch"
          primaryHref="https://cal.com/banish/contentq-exploratory-call-with-anish"
        />
        <FounderVisionCard />
      </Section>

      {/* Footer */}
      <Footer />
    </main>
  );
}