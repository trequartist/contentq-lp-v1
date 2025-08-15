"use client";

import React from "react";
import PrimaryCTA from "@/components/ui/primary-cta";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

export default function OdfHeroFresh(): JSX.Element {
	return (
		<section className="relative overflow-hidden text-white">
			{/* Ambient dark space with faint green aura like main hero */}
			<div className="absolute inset-0" style={{
				background: `radial-gradient(900px_360px_at_24%_20%,rgba(148,216,45,0.08),transparent_60%),
					linear-gradient(180deg,rgba(4,6,10,1)_0%,rgba(3,5,10,0.96)_50%,rgba(3,4,8,0.94)_100%)`
			}} />

			<div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 pt-28 md:pt-32 lg:pt-36 pb-12">
				<div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_520px] items-start gap-10 lg:gap-16">
					{/* Left: replicate main kiwiq hero vibe */}
					<div className="text-left">
						<p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.28em] text-white/75">Exclusive KiwiQ pilot</p>
						<h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-light leading-[1.06] tracking-tight drop-shadow-[0_10px_44px_rgba(0,0,0,0.45)]">
							For On Deck Founders.
							<br className="hidden md:block" /> Build compounding <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b6f46b] to-[#94D82D]">authority</span>.
						</h1>
						<h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-light text-white/85 drop-shadow-[0_8px_36px_rgba(0,0,0,0.45)]">
							AI + Human system that learns your voice and gets you discovered across Google, AI assistants, and LinkedIn.
						</h2>

						{/* Introducing KiwiQ card */}
						<div className="mt-7 relative max-w-[560px] rounded-2xl border border-white/20 bg-gradient-to-b from-neutral-900/60 to-neutral-900/40 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.6)]">
							<div className="absolute -top-[1px] left-5 right-5 h-[2px] bg-gradient-to-r from-transparent via-[#94D82D] to-transparent opacity-90"></div>
							<div className="absolute left-4 top-6 bottom-6 w-px bg-gradient-to-b from-[#94D82D33] via-[#94D82D66] to-[#94D82D33]" />
							<div className="p-6">
								<div className="mb-2 inline-flex items-center gap-2">
									<span className="inline-block h-1.5 w-1.5 rounded-full bg-[#94D82D] shadow-[0_0_10px_2px_rgba(148,216,45,0.25)]"></span>
									<span className="px-2 py-1 rounded-md border border-white/10 bg-white/5 backdrop-blur-sm text-[11px] tracking-[0.14em] uppercase text-zinc-200">Introducing KiwiQ</span>
								</div>
								<p className="text-[15px] md:text-[16px] leading-[1.75] text-transparent bg-clip-text bg-gradient-to-b from-zinc-50 via-zinc-200 to-zinc-300 antialiased">
									KiwiQ is a unique <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b6f46b] to-[#94D82D]">AI + Human content system</span> — powered by our proprietary AI and strategic playbooks — to create compounding authority for founders, leaders, and B2B companies. We help you get found on Google, AI search, and Socials as the go‑to brand.
								</p>
							</div>
						</div>
					</div>

					{/* Right: cream gradient backplate panel */}
					<div className="relative w-full max-w-[520px] lg:ml-auto">
						<div className="pointer-events-none absolute -inset-8 rounded-[28px] bg-[radial-gradient(520px_260px_at_85%_18%,rgba(148,216,45,0.1),transparent_60%)]" />
						<div className="relative rounded-2xl border border-black/5 bg-[linear-gradient(180deg,#F8F5EE, #F3EFE6)] text-slate-900 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
							<h3 className="text-2xl md:text-3xl font-bold tracking-tight">For ODF Founders & Friends: Ready to prioritize content?</h3>
							<div className="mt-3 flex flex-wrap gap-2">
								<span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs">AI Citations</span>
								<span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs">Search Rankings</span>
								<span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs">Social Authority</span>
							</div>
							<div className="mt-5">
								<PrimaryCTA href="https://form.typeform.com/to/dub8wybg" label="Join the KiwiQ AI Pilot" caption="" mode="light" expand />
								<a href="https://cal.com/banish/contentq-exploratory-call-with-anish" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-black/10 bg-black/5 text-slate-900 px-6 py-2.5 font-semibold hover:bg-black/10">Get In Touch</a>
							</div>

							{/* Collapsed founder's note header that opens full-screen dialog */}
							<Dialog>
								<DialogTrigger asChild>
									<button className="mt-5 w-full text-left rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm hover:bg-white/85 transition-colors shadow-sm">
										<span className="font-semibold">AI gave everyone a voice. Now nobody can be heard.</span>
										<span className="block text-slate-700/80">Take a pause, and reflect on life post‑ChatGPT…</span>
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
												<p>AI gave everyone a voice. Now nobody can be heard.</p>
												<p>Take a pause, and reflect on life post‑ChatGPT. Okay, a bit more specifically—reflect on its impact on B2B content marketing :)</p>
												<p>AI writing tools have dramatically reduced barriers to churning out "good" content. So much so, that there's been more business blog content posted on the internet after November 2022 than all business blog content prior to that. But here's the thing—we're not solving for content volume. We're solving for share of voice and share of mind. And when every blog reads like it was written by the same person, we all start blending into the background.</p>
												<p>Meanwhile, B2B buyers are increasingly using ChatGPT for recommendations and research too. So as a B2B content marketer, you now need to stand out to humans AND AI.</p>
												<p>The real question becomes: How do I tell my unique and authentic story to capture buyer mindshare, in a way that works with both human AND AI audiences?</p>
												<p>I'm Anish Bharadwaj, and before I built products for marketers at Amazon and startups, I worked as an election strategist. I'm passionate about storytelling and making your story win. My cofounder Raunak Bhandari was an ML Lead at Google, closely involved in building Knowledge Graphs and Gemini. He eats complex architecture diagrams for breakfast.</p>
												<p>Together, we're building ContentQ to help B2B startups tell their story more effectively in this hybrid world. It's not just another AI writing tool — it's intelligence infrastructure that actually remembers who you are and ensures you're discoverable everywhere buyers look.</p>
												<p>We believe this is the most fascinating and high‑impact problem we can solve to help startups, and we're chomping at the bit. We are shortly releasing our first product ContentQ, and would absolutely love to learn your story and help you tell it to your buyers.</p>
												<p className="text-zinc-600">— Anish and Raunak (Co‑founders, KiwiQ AI)</p>
										</div>
									</div>
								</div>
								</DialogContent>
							</Dialog>
						</div>
					</div>
				</div>
		</section>
	);
} 