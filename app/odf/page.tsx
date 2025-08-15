"use client";

import React from "react";
import OdfHeroFresh from "@/components/odf/OdfHeroFresh";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function ODFPage(): JSX.Element {
	return (
		<main>
			<OdfHeroFresh />

			{/* Notion-like content area */}
			<section className="bg-white text-slate-900 py-10 md:py-12">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<h2 className="text-2xl md:text-3xl font-bold tracking-tight">How Does it Work?</h2>
					<div className="mt-4 space-y-3 text-[15px] leading-7">
						<p>We leverage our <span className="font-medium">team of AI Agents</span> — and strategic B2B playbooks (created by expert marketers at Hubspot and several B2B unicorns) to create:</p>
						<ul className="list-disc pl-5">
							<li><span className="font-medium">AI That Knows You</span>: Persistent memory of your business, built by ex‑Google Gemini ML lead</li>
							<li><span className="font-medium">Strategic Playbooks</span>: Not random posts, but connected campaigns that build authority</li>
							<li><span className="font-medium">Unified Impact Tracking</span>: See what ChatGPT is citing, along with Google and LinkedIn</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="bg-white text-slate-900 py-10 md:py-12 border-t">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<h2 className="text-2xl md:text-3xl font-bold tracking-tight">Pricing</h2>
					<div className="mt-4 overflow-x-auto">
						<table className="min-w-[680px] w-full text-sm border border-zinc-200 rounded-lg overflow-hidden">
							<thead className="bg-zinc-50">
								<tr>
									<th className="p-3 text-left font-semibold">Tier</th>
									<th className="p-3 text-left font-semibold">Lite</th>
									<th className="p-3 text-left font-semibold">Growth</th>
									<th className="p-3 text-left font-semibold">Custom</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-t">
									<td className="p-3 font-medium">Ideal For</td>
									<td className="p-3">Founders, Pre‑Series A Startups, Consultants</td>
									<td className="p-3">Scaling Marketing Teams / Growing companies</td>
									<td className="p-3">Bigger Orgs/Agencies</td>
								</tr>
								<tr className="border-t">
									<td className="p-3 font-medium">Price</td>
									<td className="p-3 font-semibold">$799 / month</td>
									<td className="p-3 font-semibold">$2,999 / month</td>
									<td className="p-3 font-semibold">Custom Pricing</td>
								</tr>
							</tbody>
						</table>
					</div>

					<Accordion type="single" collapsible className="mt-6 border rounded-lg">
						<AccordionItem value="details" className="border-0">
							<AccordionTrigger className="px-4">View Package details</AccordionTrigger>
							<AccordionContent className="px-4">
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
									<div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
										<h3 className="font-semibold">Lite — $799/m</h3>
										<ul className="mt-3 space-y-2 text-sm list-disc list-inside">
											<li>Dedicated Slack workspace for real‑time collaboration</li>
											<li>Monthly strategy check-ins</li>
											<li>Optimized workflows</li>
											<li>Performance dashboard</li>
											<li>Track AI Citation (limited)</li>
											<li>Dual-channel Engine (Blog & Founder LinkedIn)</li>
											<li>Authority engine with foundational workflows</li>
											<li>Trained brand voice with AI memory</li>
										</ul>
									</div>
									<div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
										<h3 className="font-semibold">Growth — $2,999/m</h3>
										<p className="mt-2 text-sm">Everything in Lite plus:</p>
										<ul className="mt-2 space-y-2 text-sm list-disc list-inside">
											<li>Enterprise Knowledge Graph</li>
											<li>Unlimited LLM API calls, Frontier reasoning models, deep research mode</li>
											<li>Support for up to 5 executives with distinct voices</li>
											<li>Support for up to 5 distinct voices</li>
											<li>Weekly strategic research with KiwiQ strategist</li>
											<li>YouTube video content support</li>
											<li>Advanced research workflows with multi‑step intelligence</li>
											<li>Weekly strategy sessions with senior strategist</li>
											<li>Competitive gap analysis + dynamic Authority Map</li>
											<li>Priority compute for complex content generation</li>
										</ul>
									</div>
									<div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
										<h3 className="font-semibold">Scale — Custom Pricing</h3>
										<ul className="mt-3 space-y-2 text-sm list-disc list-inside">
											<li>Personalised Support</li>
											<li>Custom Design</li>
										</ul>
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</section>

			<section className="bg-white text-slate-900 py-10 md:py-12 border-t">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<h2 className="text-2xl md:text-3xl font-bold tracking-tight">KiwiQ’s 90‑Day Authority Sprint</h2>
					<div className="mt-6 overflow-x-auto">
						<table className="min-w-[640px] w-full text-sm border border-zinc-200 rounded-lg overflow-hidden">
							<thead className="bg-zinc-50">
								<tr>
									<th className="p-3 text-left font-semibold">Month</th>
									<th className="p-3 text-left font-semibold">Deliverable</th>
									<th className="p-3 text-left font-semibold">How it works</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-t">
									<td className="p-3 font-semibold">Month 1</td>
									<td className="p-3">Foundation</td>
									<td className="p-3">Our system and strategist work on capturing your strategy + brand voice</td>
								</tr>
								<tr className="border-t">
									<td className="p-3 font-semibold">Month 2</td>
									<td className="p-3">Momentum</td>
									<td className="p-3">Coordinated campaigns across channels</td>
								</tr>
								<tr className="border-t">
									<td className="p-3 font-semibold">Month 3</td>
									<td className="p-3">Scale</td>
									<td className="p-3">System running; authority compounding</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="mt-8 rounded-xl border border-zinc-200 bg-zinc-50 p-5">
						<h3 className="font-semibold">→ Special On Deck Offer</h3>
						<p className="mt-2 text-sm">30‑Day Pilot: <span className="font-semibold">$499 (EarlyBird offer)</span></p>
						<ul className="mt-2 list-disc pl-5 text-sm">
							<li>Get the full Lite package (normally $799/mo) at a founder-friendly pilot price.</li>
							<li>Go from strategy → live content in 4 weeks.</li>
						</ul>
						<div className="mt-4 overflow-x-auto">
							<table className="min-w-[540px] w-full text-sm border border-zinc-200 rounded-lg overflow-hidden">
								<thead className="bg-zinc-50">
									<tr>
										<th className="p-3 text-left font-semibold">Week</th>
										<th className="p-3 text-left font-semibold">Deliverable</th>
										<th className="p-3 text-left font-semibold">How it works</th>
									</tr>
								</thead>
								<tbody>
									<tr className="border-t">
										<td className="p-3 font-semibold">1</td>
										<td className="p-3">Your Authority Model</td>
										<td className="p-3">90‑min workshop to unpack POV & content edge</td>
									</tr>
									<tr className="border-t">
										<td className="p-3 font-semibold">2–3</td>
										<td className="p-3">Foundational Content Pack</td>
										<td className="p-3">4 pillar articles + 8 LinkedIn posts, optimized for Google & AI search</td>
									</tr>
									<tr className="border-t">
										<td className="p-3 font-semibold">4</td>
										<td className="p-3">90‑Day Authority Roadmap</td>
										<td className="p-3">Personalized growth plan for authority & pipeline</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="mt-6">
							<a href="https://form.typeform.com/to/dub8wybg" className="inline-flex items-center rounded-full bg-gradient-to-b from-[#B4F64A] to-[#94D82D] border border-[#9EDD34] px-6 py-3 font-semibold text-slate-900 shadow-[0_10px_28px_rgba(148,216,45,0.28)] hover:shadow-[0_16px_40px_rgba(148,216,45,0.38)]">📩 Join the KiwiQ AI Pilot</a>
							<p className="mt-2 text-sm text-slate-600">kiwiq.ai | anish@kiwiq.ai | <a className="underline" href="https://cal.com/banish/contentq-exploratory-call-with-anish" target="_blank" rel="noopener noreferrer">Schedule A Call</a></p>
							<p className="mt-1 text-xs text-slate-500">Trusted by YC founders and VC-backed pioneers</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
} 