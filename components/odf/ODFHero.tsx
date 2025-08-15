"use client";

import React from "react";
import PrimaryCTA from "@/components/ui/primary-cta";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

export default function ODFHero(): JSX.Element {
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-[#0B1020] via-[#070A14] to-black text-white">
			<div className="absolute inset-0 pointer-events-none" style={{
				background: `radial-gradient(700px 280px at 20% 15%, rgba(148,216,45,0.08) 0%, rgba(148,216,45,0.03) 50%, rgba(0,0,0,0) 70%), radial-gradient(600px 300px at 85% 20%, rgba(148,216,45,0.06) 0%, rgba(148,216,45,0.02) 45%, rgba(0,0,0,0) 70%)`
			}} />
			<div className="container relative mx-auto px-4 md:px-6 lg:px-8 pt-28 md:pt-32 lg:pt-36 pb-16">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
					{/* Left column: partnership badge + descriptive copy */}
					<div className="max-w-2xl lg:max-w-3xl">
						<div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md ring-1 ring-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
							<img src="/logos/ondeck.svg" alt="On Deck Founders" className="h-6 w-auto opacity-95" />
							<span className="text-[15px] md:text-base font-semibold tracking-tight">ODF × KiwiQ AI</span>
						</div>
						<p className="mt-6 text-white/85 text-base md:text-lg leading-relaxed">
							Exclusive KiwiQ pilot for On Deck Founders. Build compounding authority with an AI + Human system that learns your voice and gets you discovered across Google, AI assistants, and LinkedIn.
						</p>
						<div className="mt-5 relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-b from-neutral-900/60 to-neutral-900/40 backdrop-blur-md shadow-[0_16px_60px_rgba(0,0,0,0.55)]">
							<div className="absolute -top-[1px] left-5 right-5 h-[2px] bg-gradient-to-r from-transparent via-[#94D82D] to-transparent opacity-90"></div>
							<div className="absolute left-4 top-6 bottom-6 w-px bg-gradient-to-b from-[#94D82D33] via-[#94D82D66] to-[#94D82D33]" />
							<div className="p-5 md:p-6">
								<p className="text-[15px] md:text-[16px] leading-[1.75] antialiased">
									<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-300">ContentQ is your </span>
									<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b6f46b] to-[#94D82D]">AI Teammate for B2B content authority</span>
									<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-300">. Working with human content strategists, we build your presence across founder LinkedIn and company blog—crafting stories that </span>
									<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b6f46b] to-[#94D82D]">get you discovered everywhere buyers look: ChatGPT, Google, and LinkedIn.</span>
								</p>
							</div>
						</div>
					</div>

					{/* Right column: headline, chips, CTAs */}
					<div className="relative w-full max-w-xl lg:ml-auto">
						<div className="pointer-events-none absolute -inset-6 rounded-[28px] bg-[radial-gradient(520px_260px_at_85%_18%,rgba(148,216,45,0.12),transparent_60%)]" />
						<div className="relative rounded-2xl border border-white/12 bg-white/10 backdrop-blur-sm p-5 md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
							<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">For ODF Founders & Friends</h1>
							<div className="mt-3 flex flex-wrap gap-2.5">
								<span className="rounded-full bg-white/10 border border-white/15 px-2.5 py-1 text-xs text-white/90">AI Citations</span>
								<span className="rounded-full bg-white/10 border border-white/15 px-2.5 py-1 text-xs text-white/90">Search Rankings</span>
								<span className="rounded-full bg-white/10 border border-white/15 px-2.5 py-1 text-xs text-white/90">Social Authority</span>
							</div>
							<div className="mt-5">
								<PrimaryCTA href="https://form.typeform.com/to/dub8wybg" label="Join the KiwiQ AI Pilot" caption="" mode="dark" expand />
								<a href="https://cal.com/banish/contentq-exploratory-call-with-anish" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 text-white px-6 py-2.5 font-semibold hover:bg-white/10">Get In Touch</a>
							</div>
						</div>
					</div>
				</div>

				{/* Dangling Founder’s Note trigger + full-screen takeover */}
				<Dialog>
					<DialogTrigger asChild>
						<button className="absolute right-4 md:right-8 bottom-4 md:bottom-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md ring-1 ring-white/15 hover:bg-white/12 transition-all motion-safe:animate-pulse hover:animate-none">
							<span className="inline-block h-2 w-2 rounded-full bg-[#94D82D] shadow-[0_0_8px_2px_rgba(148,216,45,0.35)]"></span>
							Founder’s Note
						</button>
					</DialogTrigger>
					<DialogContent className="fixed inset-0 left-0 top-0 z-50 w-full h-full max-w-none translate-x-0 translate-y-0 transform-none border-0 p-0 sm:rounded-none bg-gradient-to-b from-zinc-50 to-white text-slate-900 overflow-y-auto">
						<div className="min-h-screen">
							<div className="sticky top-0 z-10 flex items-center justify-between px-4 md:px-8 py-4 border-b border-zinc-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
								<div className="text-sm font-semibold tracking-tight text-zinc-700">Founder’s Note</div>
								<a href="#" className="rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-700 hover:bg-zinc-50" onClick={(e) => { e.preventDefault(); const closeBtn = document.querySelector('[data-radix-dialog-close]') as HTMLElement | null; closeBtn?.click(); }}>Close</a>
							</div>
							<div className="px-4 md:px-8 py-8">
								<div className="mx-auto max-w-3xl space-y-5 text-[1.05rem] leading-[1.9] text-zinc-800">
									<p>Take a pause, and reflect on life post‑ChatGPT. Okay, a bit more specifically—reflect on its impact on B2B content marketing :)</p>
									<p>AI writing tools have dramatically reduced barriers to churning out "good" content. There’s likely been more business blog content posted after Nov 2022 than all years prior. But none of us are solving for volume—we’re solving for share of voice and share of mind. When every blog reads the same, everyone blends into the background.</p>
									<p>Meanwhile, B2B buyers increasingly use ChatGPT for recommendations and research. You now need to stand out to humans and AI.</p>
									<p className="font-medium text-zinc-900">“How do I tell my unique and authentic story to capture buyer mindshare, in a way that works with both human and AI audiences?”</p>
									<p>I’m Anish Bharadwaj, and before building products for marketers at Amazon and startups, I worked as an election strategist. I’m obsessed with storytelling that makes your story win. My cofounder, Raunak Bhandari, was an ML Lead at Google, closely involved in Knowledge Graphs and Gemini.</p>
									<p>Together, we’re building KiwiQ AI to help B2B startups tell their story more effectively in this hybrid world. It’s not another AI writing tool—it’s intelligence infrastructure that remembers who you are and ensures you’re discoverable everywhere buyers look.</p>
									<p>We believe this is a high‑impact problem worth solving. Next week, we’re launching our first product—ContentQ—and would love to learn your story.</p>
									<p className="text-zinc-600">— Anish & Raunak (Co‑founders, KiwiQ AI)</p>
								</div>
							</div>
						</div>
					</DialogContent>
				</Dialog>
			</div>
		</section>
	);
} 