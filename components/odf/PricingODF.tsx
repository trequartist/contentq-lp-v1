"use client";

import React from "react";

export default function PricingODF(): JSX.Element {
	return (
		<section className="relative py-10 md:py-12 bg-white text-slate-900">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<h2 className="text-2xl md:text-3xl font-bold tracking-tight">Pricing</h2>
				<div className="mt-6 overflow-x-auto">
					<table className="min-w-[640px] w-full text-sm border border-zinc-200 rounded-lg overflow-hidden">
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
								<td className="p-3">Founders, Pre‑Series A, Consultants</td>
								<td className="p-3">Scaling teams, growing companies</td>
								<td className="p-3">Bigger orgs/agencies</td>
							</tr>
							<tr className="border-t">
								<td className="p-3 font-medium">Price</td>
								<td className="p-3 font-semibold">$799/mo</td>
								<td className="p-3 font-semibold">$2,999/mo</td>
								<td className="p-3 font-semibold">Custom</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
} 