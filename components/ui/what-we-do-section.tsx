"use client";

import React from 'react';
import Section from '../Section';
import { SectionHeadline, BodyText } from '../Typography';
import { FeaturesSectionWithHoverEffects } from './feature-section-with-hover-effects';

const WhatWeDoSection = () => {
  return (
    <Section
      variant="white"
      id="what-we-do"
      style={{
        background: "linear-gradient(180deg, #F7F8FA 0%, #EFF1F5 100%)",
      }}
      className="py-10 md:py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <SectionHeadline className="text-slate-900 mb-4">
            What We Actually Do
          </SectionHeadline>
          <p className="text-slate-900 text-xl md:text-2xl font-semibold max-w-3xl mx-auto mb-2">
            We're your AI-powered content team that gets you cited everywhere buyers search.
          </p>
          <BodyText className="text-slate-700 max-w-3xl mx-auto text-base md:text-lg" animate={false}>
            {"We don't just write about what you know. "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b6f46b] to-[#94D82D] font-semibold">We help you know what to write about.</span>
          </BodyText>
        </div>

        <FeaturesSectionWithHoverEffects colorMode="light" />
      </div>
    </Section>
  );
};

export default WhatWeDoSection;