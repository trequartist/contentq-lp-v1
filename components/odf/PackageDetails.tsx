"use client";

import React from "react";

export default function PackageDetails(): JSX.Element {
	return (
		<section className="relative py-10 md:py-12 bg-white text-slate-900">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<h2 className="text-2xl md:text-3xl font-bold tracking-tight">Package Details</h2>
				<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
					<div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
						<h3 className="font-semibold">Lite — $799/mo</h3>
						<ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc list-inside">
							<li>Dedicated Slack workspace</li>
							<li>Monthly strategy check-ins</li>
							<li>Optimized workflows + dashboard</li>
							<li>Track AI citations (limited)</li>
							<li>Dual-channel engine (Blog & Founder LinkedIn)</li>
							<li>Authority engine with foundational workflows</li>
							<li>Trained brand voice with AI memory</li>
						</ul>
					</div>
					<div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
						<h3 className="font-semibold">Growth — $2,999/mo</h3>
						<p className="mt-2 text-sm text-slate-600">Everything in Lite, plus:</p>
						<ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc list-inside">
							<li>Enterprise Knowledge Graph</li>
							<li>Unlimited LLM calls, frontier reasoning, deep research mode</li>
							<li>Support for up to 5 executives/voices</li>
							<li>Weekly strategic research with KiwiQ strategist</li>
							<li>YouTube content support</li>
							<li>Advanced multi‑step research workflows</li>
							<li>Weekly strategy sessions</li>
							<li>Competitive gap analysis + dynamic Authority Map</li>
							<li>Priority compute for complex generation</li>
						</ul>
					</div>
					<div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
						<h3 className="font-semibold">Scale — Custom</h3>
						<ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc list-inside">
							<li>Personalized support</li>
							<li>Custom design</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
} 