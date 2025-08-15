"use client";

import React from "react";

export default function HowItWorks(): JSX.Element {
	return (
		<section className="relative py-10 md:py-12 bg-gradient-to-b from-zinc-50 to-white text-slate-900">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<h2 className="text-2xl md:text-3xl font-bold tracking-tight">How it works</h2>
				<ol className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
					<li className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
						<p className="font-semibold">AI That Knows You</p>
						<p className="mt-2 text-sm text-slate-600">Persistent memory of your business, built by ex‑Google Gemini ML lead</p>
					</li>
					<li className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
						<p className="font-semibold">Strategic Playbooks</p>
						<p className="mt-2 text-sm text-slate-600">Not random posts, but connected campaigns that build authority</p>
					</li>
					<li className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
						<p className="font-semibold">Unified Impact Tracking</p>
						<p className="mt-2 text-sm text-slate-600">See what ChatGPT is citing, along with Google and LinkedIn performance</p>
					</li>
				</ol>
			</div>
		</section>
	);
} 