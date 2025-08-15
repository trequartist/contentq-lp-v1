"use client";

import React from "react";

export default function Sprint90(): JSX.Element {
	return (
		<section className="relative py-10 md:py-12 bg-gradient-to-b from-zinc-50 to-white text-slate-900">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<h2 className="text-2xl md:text-3xl font-bold tracking-tight">KiwiQ’s 90‑Day Authority Sprint</h2>
				<div className="mt-6 overflow-x-auto">
					<table className="min-w-[640px] w-full text-sm border border-zinc-200 rounded-lg overflow-hidden">
						<thead className="bg-zinc-50">
							<tr>
								<th className="p-3 text-left font-semibold">Month</th>
								<th className="p-3 text-left font-semibold">Deliverable</th>
								<th className="p-3 text-left font-semibold">How it works</th>
								<th className="p-3 text-left font-semibold">Outcome</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-t">
								<td className="p-3 font-semibold">Month 1</td>
								<td className="p-3">Foundation</td>
								<td className="p-3">System + strategist capture strategy and brand voice</td>
								<td className="p-3">First content live; AI learning your voice</td>
							</tr>
							<tr className="border-t">
								<td className="p-3 font-semibold">Month 2</td>
								<td className="p-3">Momentum</td>
								<td className="p-3">Coordinated campaigns across channels</td>
								<td className="p-3">20+ pieces published; rankings improving</td>
							</tr>
							<tr className="border-t">
								<td className="p-3 font-semibold">Month 3</td>
								<td className="p-3">Scale</td>
								<td className="p-3">System running; authority compounding</td>
								<td className="p-3">Autopilot; growing traffic, authority, and pipeline</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
} 