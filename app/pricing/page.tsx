"use client";

import React from "react";
import Section from "@/components/Section";
import { Footer } from "@/components/ui/large-name-footer";
import { ArrowRight, Check, Crown, Rocket, Zap } from "lucide-react";
import Button from "@/components/Button";

function cn(...classes: (string | undefined | null | false)[]): string {
	return classes.filter(Boolean).join(" ");
}

type PricingTier = {
	name: string;
	subtitle: string;
	priceLabel: string; // e.g., "$799/month" or "Custom Pricing"
	description: string;
	icon: React.ComponentType<{ className?: string }>;
	features: string[];
	highlight?: boolean;
	badge?: string | null;
	ctaText: string;
	href: string;
	commitment?: string;
	bestFor?: string;
	callout?: string;
};

const TIERS: PricingTier[] = [
	{
		name: "Starter",
		subtitle: "Perfect for founders and early-stage startups",
		priceLabel: "$799/month",
		description: "Efficient content engine with essential intelligence.",
		icon: Zap,
		features: [
			"Trained brand voice with AI memory",
			"Essential Authority Engine with foundational workflows",
			"Upto 5000 LLM API calls",
			"Brand & Voice Onboarding (2‑hour deep dive)",
			"Content across 2 channels (Blog + Founder LinkedIn)",
			"Monthly strategy check‑ins (30 minutes)",
			"AI Citation Tracking for 10 key queries",
			"Performance dashboard with core metrics",
			"Battle‑tested workflows optimized for efficiency",
			"Dedicated Slack workspace for real‑time collaboration",
		],
		highlight: false,
		badge: null,
		ctaText: "Start 30‑Day Pilot",
		href: "https://cal.com/banish/contentq-exploratory-call-with-anish",
		commitment: "Your Commitment: 2 hours upfront, 30 min/week",
		bestFor: "Best For: Pre‑Series A Founders who need consistent publishing without complexity",
		callout: "Efficient content engine with essential intelligence. Perfect for consistent publishing with standard research depth.",
	},
	{
		name: "Growth",
		subtitle: "For growing companies ready to dominate",
		priceLabel: "$2,499/month",
		description: "Deep strategic intelligence with comprehensive research.",
		icon: Crown,
		features: [
			"Everything in Starter, plus:",
			"Enterprise Knowledge Graph in Month 1 (expertise, POV, competitive positioning)",
			"Unlimited LLM API calls, Frontier reasoning models, Deep Research mode",
			"Support for up to 5 executives with distinct voices",
			"Weekly Strategic Research — human‑led opportunity spotting",
			"YouTube video content support (starting Month 2)",
			"Advanced research workflows with multi‑step intelligence",
			"Weekly strategy sessions with senior strategist",
			"Competitive gap analysis + dynamic Authority Map",
			"Priority compute for complex content generation",
		],
		highlight: true,
		badge: null,
		ctaText: "Book Strategy Call",
		href: "https://cal.com/banish/contentq-exploratory-call-with-anish",
		commitment: "Your Commitment: 1 hour/week initially, then 30 min/week",
		bestFor: "Best For: Marketing teams and founders (Series A‑B) serious about category ownership",
		callout: "Deep strategic intelligence with comprehensive research. Your strategist spends more time uncovering opportunities, building sophisticated content strategies, and ensuring every piece serves a strategic purpose.",
	},
	{
		name: "Custom",
		subtitle: "For companies and agencies needing scale",
		priceLabel: "Custom Pricing",
		description: "Unlimited strategic bandwidth with a dedicated team.",
		icon: Rocket,
		features: [
			"Everything in Growth, plus:",
			"Unlimited, coordinated employee voices",
			"Dedicated Senior Content Strategist (8+ hours/week)",
			"Custom AI model training on your proprietary data",
			"No workflow limitations — full research depth",
			"Advanced attribution with CRM integration",
			"White‑label options for agencies",
			"API access for workflow automation",
			"Monthly executive and team workshops",
			"Custom SLAs with guaranteed turnaround",
			"Multi‑brand support with isolated workspaces",
		],
		highlight: false,
		badge: null,
		ctaText: "Talk to Sales",
		href: "https://cal.com/banish/contentq-exploratory-call-with-anish",
		commitment: "Your Commitment: Fully managed to your needs",
		bestFor: "Best For: Agencies, fractional CMOs, enterprise teams",
		callout: "Unlimited strategic bandwidth. Your dedicated team handles everything from research to distribution.",
	},
];

export default function PricingPage(): JSX.Element {
	return (
		<main className="relative overflow-x-hidden">
			{/* Single compact section (light) */}
			<Section
				variant="white"
				className="py-12"
				id="tiers"
				style={{
					background:
						"linear-gradient(180deg, #001233 0%, #0B1B34 14%, #0A1530 22%, #0E172A 32%, #F7F8FA 60%, #EFF1F5 100%)",
				}}
			>
				<div className="max-w-6xl mx-auto">
					{/* Header */}
					<div className="text-center mb-8">
						<h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight drop-shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
							Build Authority That Compounds. Pick Your Starting Point.
						</h1>
						<p className="text-white mt-3 max-w-3xl mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)]">
							Every plan includes AI intelligence, human strategists, and the persistent memory that makes ContentQ different. No setup fees. Cancel anytime.
						</p>
					</div>

					{/* Tier cards */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{TIERS.map((plan) => (
							<div
								key={plan.name}
								className={cn(
									"relative rounded-2xl border overflow-hidden transition-all duration-200 bg-gradient-to-b from-white to-slate-50 border-slate-200/70 ring-1 ring-slate-900/5",
									plan.highlight ? "shadow-[0_16px_60px_rgba(148,216,45,0.18)] ring-1 ring-[#94D82D]/30" : "shadow-sm"
								)}
							>
								<div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#94D82D] to-transparent" />
								<div className="p-6 flex flex-col h-[520px] md:h-[560px]">
									<div className="flex items-center gap-3 mb-3">
										<div className="w-10 h-10 rounded-xl bg-[#94D82D]/15 border border-[#94D82D]/30 ring-1 ring-[#94D82D]/20 flex items-center justify-center">
											<plan.icon className="w-5 h-5 text-[#94D82D]" />
										</div>
										<div>
											<div className="text-lg font-semibold text-slate-900">{plan.name}</div>
											<div className="text-slate-600 text-sm">{plan.subtitle}</div>
										</div>
									</div>
									{/* Scrollable body */}
									<div className="relative flex-1 min-h-0 overflow-y-auto pr-1 card-scroll">
										<p className="text-slate-700 text-sm mb-4 leading-relaxed">{plan.description}</p>
										<div className="mb-3 text-2xl font-bold text-slate-900">{plan.priceLabel}</div>
										<ul className="space-y-2 mb-4">
											{plan.features.map((f) => (
												<li key={f} className="flex items-start gap-2 text-slate-700 text-sm leading-relaxed">
													<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#94D82D]/15 border border-[#94D82D]/30 ring-1 ring-[#94D82D]/20">
														<Check className="w-3.5 h-3.5 text-[#86BC25]" />
													</span>
													<span>{f}</span>
												</li>
											))}
										</ul>
										{plan.commitment && (
											<p className="text-slate-600 text-xs mb-1 leading-relaxed">{plan.commitment}</p>
										)}
										{plan.bestFor && (
											<p className="text-slate-600 text-xs mb-2 leading-relaxed">{plan.bestFor}</p>
										)}
										{/* Bottom fade hint for scroll */}
										<div className="pointer-events-none absolute left-0 right-0 bottom-0 h-8 bg-gradient-to-t from-slate-50 to-transparent" />
									</div>
									<a href={plan.href} className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-slate-900 bg-gradient-to-b from-[#B4F64A] to-[#94D82D] border border-[#9EDD34] shadow-[0_8px_24px_rgba(148,216,45,0.25)] hover:shadow-[0_12px_32px_rgba(148,216,45,0.35)]">
										{plan.ctaText}
										<ArrowRight className="w-4 h-4" />
									</a>
								</div>
							</div>
						))}
					</div>

					{/* Tier callouts directly below cards */}
					<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
						{TIERS.map((plan) => (
							<div key={plan.name} className="rounded-xl border border-slate-200/70 ring-1 ring-slate-900/5 bg-gradient-to-b from-white to-slate-50 p-4 shadow-sm flex items-start gap-2">
								<span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[#94D82D]" />
								<div>
									<div className="text-slate-900 font-semibold text-sm mb-1">{plan.name}</div>
									<p className="text-slate-700 text-sm leading-relaxed">{plan.callout}</p>
								</div>
							</div>
						))}
					</div>

					{/* All plans include */}
					<div className="mt-10 rounded-2xl border border-slate-200/70 ring-1 ring-slate-900/5 bg-gradient-to-b from-white to-slate-50 p-6">
						<h2 className="text-xl font-semibold text-slate-900 mb-3">All Plans Include</h2>
						<p className="text-slate-800 font-medium mb-3">The ContentQ Foundation</p>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
							{[
								"Persistent AI Memory — Never repeat yourself, ever",
								"Human strategists who know B2B inside out",
								"GEO optimization for AI visibility",
								"Multi‑LLM engine (OpenAI, Claude, Gemini)",
								"Content that compounds — each piece strengthens the whole",
								"No contracts — Month‑to‑month, cancel anytime",
								"Keep all content — It's yours, always",
							].map((item) => (
								<li key={item} className="flex items-start gap-2 text-slate-700 text-sm">
									<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#94D82D]/15 border border-[#94D82D]/30 ring-1 ring-[#94D82D]/20"><Check className="w-3.5 h-3.5 text-[#86BC25]"/></span>
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Section>

			<Footer />
		</main>
	);
} 