"use client";

import React from "react";
import ODFHero from "@/components/odf/ODFHero";
import AuthorityStats from "@/components/odf/AuthorityStats";
import IntroducingKiwiQ from "@/components/odf/IntroducingKiwiQ";
import HowItWorks from "@/components/odf/HowItWorks";
import PricingODF from "@/components/odf/PricingODF";
import PackageDetails from "@/components/odf/PackageDetails";
import Sprint90 from "@/components/odf/Sprint90";
import PilotOffer from "@/components/odf/PilotOffer";

export default function ODFPage(): JSX.Element {
	return (
		<main className="relative">
			<ODFHero />
			<AuthorityStats />
			<IntroducingKiwiQ />
			<HowItWorks />
			<PricingODF />
			<PackageDetails />
			<Sprint90 />
			<PilotOffer />
		</main>
	);
} 