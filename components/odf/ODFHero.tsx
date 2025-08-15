"use client";

import React, { useState } from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import PrimaryCTA from "@/components/ui/primary-cta";

export default function ODFHero(): JSX.Element {
	const [open, setOpen] = useState(false);
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-[#0B1020] via-[#070A14] to-black text-white">
			<div className="absolute inset-0 pointer-events-none" style={{
				background: `radial-gradient(700px 280px at 20% 15%, rgba(148,216,45,0.08) 0%, rgba(148,216,45,0.03) 50%, rgba(0,0,0,0) 70%), radial-gradient(600px 300px at 85% 20%, rgba(148,216,45,0.06) 0%, rgba(148,216,45,0.02) 45%, rgba(0,0,0,0) 70%)`
			}} />
			<div className="container mx-auto px-4 md:px-6 lg:px-8 pt-28 md:pt-32 lg:pt-36 pb-14">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
					{/* Left column: partnership badge + descriptive copy */}
					<div className="max-w-2xl lg:max-w-3xl">
						<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-[2px]">
							<img src="/logos/ondeck.svg" alt="On Deck Founders" className="h-5 w-auto opacity-95" />
							<span className="text-sm font-semibold tracking-tight">ODF × KiwiQ AI</span>
						</div>
						<p className="mt-6 text-white/85 text-base md:text-lg leading-relaxed">
							Exclusive KiwiQ pilot for On Deck Founders. Build compounding authority with an AI + Human system that learns your voice and gets you discovered across Google, AI assistants, and LinkedIn.
						</p>
						<p className="mt-4 text-white/85 text-base md:text-lg leading-relaxed max-w-[46rem]">
							<span className="text-[#B4F64A] font-semibold">ContentQ is your AI Teammate for B2B content authority.</span> Working with human content strategists, we build your presence across founder LinkedIn and company blog—crafting stories that <span className="text-[#B4F64A] font-semibold">get you discovered everywhere buyers look: ChatGPT, Google, and LinkedIn.</span>
						</p>
					</div>

					{/* Right column: headline, chips, CTAs, collapsible founder's note */}
					<div className="w-full max-w-xl lg:ml-auto rounded-2xl border border-white/12 bg-white/10 backdrop-blur-sm p-5 md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
						<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
							For ODF Founders & Friends
						</h1>
						<div className="mt-3 flex flex-wrap gap-2.5">
							<span className="rounded-full bg-white/10 border border-white/15 px-2.5 py-1 text-xs text-white/90">AI Citations</span>
							<span className="rounded-full bg-white/10 border border-white/15 px-2.5 py-1 text-xs text-white/90">Search Rankings</span>
							<span className="rounded-full bg-white/10 border border-white/15 px-2.5 py-1 text-xs text-white/90">Social Authority</span>
						</div>

						<div className="mt-5">
							<PrimaryCTA
								href="https://form.typeform.com/to/dub8wybg"
								label="Join the KiwiQ AI Pilot"
								caption=""
								mode="dark"
								expand
							/>
							<a
								href="https://cal.com/banish/contentq-exploratory-call-with-anish"
								target="_blank"
								rel="noopener noreferrer"
								className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 text-white px-6 py-2.5 font-semibold hover:bg-white/10"
							>
								Get In Touch
							</a>
						</div>

						<div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4 ring-1 ring-white/10">
							<Collapsible open={open} onOpenChange={setOpen}>
								<CollapsibleTrigger className="w-full text-left group">
									<div className="flex items-center justify-between gap-3">
										<p className="font-semibold text-white">AI gave everyone a voice. Now nobody can be heard.</p>
										<ChevronDown className={`h-5 w-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
									</div>
								</CollapsibleTrigger>
								<CollapsibleContent className="overflow-hidden">
									<div className="pt-3 space-y-3 text-white/85 text-[0.95rem] leading-relaxed">
										<p>Take a pause, and reflect on life post‑ChatGPT. Okay, a bit more specifically—reflect on its impact on B2B content marketing :)</p>
										<p>AI writing tools have dramatically reduced barriers to churning out "good" content. So much so, that there's been more business blog content posted on the internet after November 2022 than all business blog content prior to that. But here's the thing—we're not solving for content volume. We're solving for share of voice and share of mind. And when every blog reads like it was written by the same person, we all start blending into the background.</p>
										<p>Meanwhile, B2B buyers are increasingly using ChatGPT for recommendations and research too. So as a B2B content marketer, you now need to stand out to humans AND AI.</p>
										<p>The real question becomes: How do I tell my unique and authentic story to capture buyer mindshare, in a way that works with both human AND AI audiences?</p>
										<p>I'm Anish Bharadwaj… My cofounder Raunak Bhandari was an ML Lead at Google, closely involved in building Knowledge Graphs and Gemini. Together, we're building ContentQ to help B2B startups tell their story more effectively in this hybrid world. It's not just another AI writing tool—it's intelligence infrastructure that remembers who you are and ensures you're discoverable everywhere buyers look.</p>
										<p>We believe this is the most fascinating and high‑impact problem we can solve to help startups, and we're chomping at the bit. We are shortly releasing our first product ContentQ, and would absolutely love to learn your story and help you tell it to your buyers.</p>
										<p className="text-white/70">— Anish & Raunak (Co‑founders, KiwiQ AI)</p>
									</div>
								</CollapsibleContent>
							</Collapsible>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
} 