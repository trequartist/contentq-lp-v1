"use client";

import React from "react";

export default function ODFHero(): JSX.Element {
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-[#0B1020] via-[#070A14] to-black text-white">
			<div className="absolute inset-0 pointer-events-none" style={{
				background: `radial-gradient(700px 280px at 20% 15%, rgba(148,216,45,0.08) 0%, rgba(148,216,45,0.03) 50%, rgba(0,0,0,0) 70%), radial-gradient(600px 300px at 85% 20%, rgba(148,216,45,0.06) 0%, rgba(148,216,45,0.02) 45%, rgba(0,0,0,0) 70%)`
			}} />
			<div className="container mx-auto px-4 md:px-6 lg:px-8 pt-24 md:pt-28 lg:pt-32 pb-10">
				<div className="max-w-3xl">
					<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-[2px]">
						<img src="/logos/ondeck.svg" alt="On Deck Founders" className="h-5 w-auto opacity-95" />
						<span className="text-sm font-semibold tracking-tight">ODF × KiwiQ AI</span>
					</div>
					<h1 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
						AI gave everyone a voice. Now nobody can be heard.
					</h1>
					<p className="mt-3 text-white/80 text-base md:text-lg max-w-2xl">
						Exclusive KiwiQ pilot for On Deck Founders. Build compounding authority with an AI + Human system that learns your voice and gets you discovered across Google, AI assistants, and LinkedIn.
					</p>
					<div className="mt-6">
						<a href="#apply" className="inline-flex items-center gap-2 rounded-full border border-[#9EDD34] bg-gradient-to-b from-[#B4F64A] to-[#94D82D] text-slate-900 px-6 py-3 font-semibold shadow-[0_10px_28px_rgba(148,216,45,0.28)] hover:shadow-[0_16px_40px_rgba(148,216,45,0.38)] transition-all">
							📩 Apply for the KiwiQ Pilot Program
						</a>
						<a href="https://cal.com/banish/contentq-exploratory-call-with-anish" target="_blank" rel="noopener noreferrer" className="ml-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 text-white px-6 py-3 font-semibold hover:bg-white/12">
							Schedule a call
						</a>
					</div>
				</div>
			</div>
		</section>
	);
} 