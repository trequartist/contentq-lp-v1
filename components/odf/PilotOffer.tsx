"use client";

import React from "react";

export default function PilotOffer(): JSX.Element {
	return (
		<section className="relative py-10 md:py-12 bg-white text-slate-900" id="apply">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<h2 className="text-2xl md:text-3xl font-bold tracking-tight">Special On Deck Offer: 30‑Day Pilot</h2>
				<p className="mt-2 text-slate-700"><span className="font-semibold">$499 (EarlyBird offer)</span> — Get the full <span className="font-semibold">Lite</span> package (normally $799/mo) at a founder‑friendly pilot price. Go from strategy → live content in 4 weeks.</p>

				<div className="mt-6 overflow-x-auto">
					<table className="min-w-[640px] w-full text-sm border border-zinc-200 rounded-lg overflow-hidden">
						<thead className="bg-zinc-50">
							<tr>
								<th className="p-3 text-left font-semibold">Week</th>
								<th className="p-3 text-left font-semibold">Deliverable</th>
								<th className="p-3 text-left font-semibold">How it works</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-t">
								<td className="p-3 font-semibold">Week 1</td>
								<td className="p-3">Your Authority Model</td>
								<td className="p-3">90‑min workshop to unpack POV & content edge</td>
							</tr>
							<tr className="border-t">
								<td className="p-3 font-semibold">Week 2‑3</td>
								<td className="p-3">Foundational Content Pack</td>
								<td className="p-3">4 pillar articles + 8 LinkedIn posts, optimized for Google & AI search</td>
							</tr>
							<tr className="border-t">
								<td className="p-3 font-semibold">Week 4</td>
								<td className="p-3">90‑Day Authority Roadmap</td>
								<td className="p-3">Personalized growth plan for authority & pipeline</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="mt-6 flex flex-wrap items-center gap-3">
					<a href="https://form.typeform.com/to/dub8wybg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#9EDD34] bg-gradient-to-b from-[#B4F64A] to-[#94D82D] text-slate-900 px-6 py-3 font-semibold shadow-[0_10px_28px_rgba(148,216,45,0.28)] hover:shadow-[0_16px_40px_rgba(148,216,45,0.38)] transition-all">
						📩 Apply now (Typeform)
					</a>
					<a href="https://cal.com/banish/contentq-exploratory-call-with-anish" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white text-slate-900 px-6 py-3 font-semibold hover:bg-zinc-50">
						Or schedule a call
					</a>
				</div>
			</div>
		</section>
	);
} 