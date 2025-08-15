"use client";

import React from "react";

export default function AuthorityStats(): JSX.Element {
	return (
		<section className="relative py-10 md:py-12 bg-gradient-to-b from-zinc-50 to-white text-slate-900">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<h2 className="text-2xl md:text-3xl font-bold tracking-tight">Why Authority Matters Now</h2>
				<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
					<div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
						<p className="text-4xl font-extrabold">90%</p>
						<p className="mt-2 text-sm text-slate-600">of B2B buyers use AI tools like ChatGPT to research vendors</p>
					</div>
					<div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
						<p className="text-4xl font-extrabold">89%</p>
						<p className="mt-2 text-sm text-slate-600">trust executive thought leadership</p>
					</div>
					<div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
						<p className="text-2xl font-bold">Google</p>
						<p className="mt-2 text-sm text-slate-600">Traffic alone isn’t enough anymore</p>
					</div>
				</div>
				<p className="mt-4 text-xs text-slate-500">Sources: Luxid Group study (2025), Edelman B2B Thought Leadership Study (2024)</p>
			</div>
		</section>
	);
} 