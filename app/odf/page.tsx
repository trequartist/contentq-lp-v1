"use client";

import React from "react";
import ODFInterestForm from "@/components/ui/odf-interest-form";
import { cn } from "@/lib/utils";

export default function ODFPage(): JSX.Element {
	return (
		<main className="relative">
			<section className="relative overflow-hidden bg-gradient-to-b from-[#0B1020] via-[#070A14] to-black text-white">
				<div className="absolute inset-0 pointer-events-none" style={{
					background: `radial-gradient(700px 280px at 20% 15%, rgba(148,216,45,0.08) 0%, rgba(148,216,45,0.03) 50%, rgba(0,0,0,0) 70%), radial-gradient(600px 300px at 85% 20%, rgba(148,216,45,0.06) 0%, rgba(148,216,45,0.02) 45%, rgba(0,0,0,0) 70%)`
				}} />
				<div className="container mx-auto px-4 md:px-6 lg:px-8 pt-24 md:pt-28 lg:pt-32 pb-10">
					<div className="max-w-3xl">
						<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-[2px]">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
								<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
								<path d="M10 7C12.8 7 15 9.2 15 12C15 14.8 12.8 17 10 17V7Z" fill="currentColor"/>
							</svg>
							<span className="text-sm font-semibold tracking-tight">ODF × KiwiQ AI</span>
						</div>
						<h1 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
							Build B2B Content Authority with an AI Teammate
						</h1>
						<p className="mt-3 text-white/80 text-base md:text-lg max-w-2xl">
							Exclusive offer for On Deck Founders: strategy + AI systems that learn your voice and amplify your story across LinkedIn, Google, and AI assistants.
						</p>
						<div className="mt-6">
							<a href="#odf-form" className="inline-flex items-center gap-2 rounded-full border border-[#9EDD34] bg-gradient-to-b from-[#B4F64A] to-[#94D82D] text-slate-900 px-6 py-3 font-semibold shadow-[0_10px_28px_rgba(148,216,45,0.28)] hover:shadow-[0_16px_40px_rgba(148,216,45,0.38)] transition-all">
								Apply in 60 seconds
							</a>
							<a href="https://cal.com/banish/contentq-exploratory-call-with-anish" target="_blank" rel="noopener noreferrer" className="ml-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 text-white px-6 py-3 font-semibold hover:bg-white/12">
								Book your ODF call
							</a>
						</div>
					</div>
				</div>
			</section>

			<section id="odf-form" className="relative py-10 md:py-12 bg-white text-slate-900">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="max-w-2xl">
						<h2 className="text-2xl md:text-3xl font-bold tracking-tight">Tell us about you</h2>
						<p className="mt-2 text-slate-600">ODF founders get priority onboarding and an exclusive offer.</p>
					</div>
					<div className="mt-6">
						<ODFInterestForm />
					</div>
				</div>
			</section>
		</main>
	);
} 