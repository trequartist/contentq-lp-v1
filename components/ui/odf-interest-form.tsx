"use client";

import React, { useCallback } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const ODFFormSchema = z.object({
	fullName: z.string().min(2, "Please enter your name"),
	email: z.string().email("Enter a valid email"),
	company: z.string().min(2, "Enter company or project name"),
	linkedin: z.string().url("Enter a valid URL").or(z.literal("")).optional().default(""),
	preference: z.enum(["book", "interest"], { required_error: "Please choose one" }),
	message: z.string().max(800).optional().default(""),
});

export type ODFFormValues = z.infer<typeof ODFFormSchema>;

interface ODFInterestFormProps {
	className?: string;
}

export function ODFInterestForm({ className }: ODFInterestFormProps): JSX.Element {
	const form = useForm<ODFFormValues>({
		resolver: zodResolver(ODFFormSchema),
		defaultValues: {
			fullName: "",
			email: "",
			company: "",
			linkedin: "",
			preference: "book",
			message: "",
		},
	});

	const onSubmit = useCallback((values: ODFFormValues) => {
		const { fullName, email, company, linkedin, preference, message } = values;

		const details = `ODF Founder Interest\n\nName: ${fullName}\nEmail: ${email}\nCompany: ${company}\nLinkedIn/Website: ${linkedin || "-"}\nMessage: ${message || "-"}`;

		if (preference === "book") {
			const calUrl = new URL("https://cal.com/banish/contentq-exploratory-call-with-anish");
			calUrl.searchParams.set("name", fullName);
			calUrl.searchParams.set("email", email);
			calUrl.searchParams.set("notes", `ODF Landing\n${details}`);
			window.location.href = calUrl.toString();
			return;
		}

		const to = "hello@kiwiq.ai";
		const subject = encodeURIComponent("ODF Founder Interest – KiwiQ AI");
		const body = encodeURIComponent(details);
		window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
	}, []);

	return (
		<div className={cn("w-full max-w-xl mx-auto", className)}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<FormField
						control={form.control}
						name="fullName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Full name</FormLabel>
								<FormControl>
									<Input placeholder="Ada Lovelace" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input type="email" placeholder="you@company.com" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="company"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Company / Project</FormLabel>
								<FormControl>
									<Input placeholder="KiwiQ AI" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="linkedin"
						render={({ field }) => (
							<FormItem>
								<FormLabel>LinkedIn or website (optional)</FormLabel>
								<FormControl>
									<Input placeholder="https://linkedin.com/in/yourname" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="grid grid-cols-2 gap-2">
						<label className={cn("rounded-lg border p-3 cursor-pointer text-sm", form.getValues("preference") === "book" ? "border-[#9EDD34] bg-[#B4F64A]/10" : "border-white/15 bg-white/5")}> 
							<input type="radio" value="book" className="hidden" {...form.register("preference")} />
							<span className="font-medium">Book a call now</span>
							<p className="text-xs text-white/70">Redirects to Cal.com with your details</p>
						</label>
						<label className={cn("rounded-lg border p-3 cursor-pointer text-sm", form.getValues("preference") === "interest" ? "border-[#9EDD34] bg-[#B4F64A]/10" : "border-white/15 bg-white/5")}> 
							<input type="radio" value="interest" className="hidden" {...form.register("preference")} />
							<span className="font-medium">Share interest only</span>
							<p className="text-xs text-white/70">Opens an email with a prefilled message</p>
						</label>
					</div>

					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Anything else we should know?</FormLabel>
								<FormDescription>Optional context, goals, or timelines.</FormDescription>
								<FormControl>
									<Textarea rows={4} placeholder="e.g., We’re preparing for a launch next month and want to accelerate content authority." {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<button type="submit" className="relative overflow-hidden rounded-full px-7 sm:px-9 py-3 text-base font-semibold text-slate-900 bg-gradient-to-b from-[#B4F64A] to-[#94D82D] border border-[#9EDD34] shadow-[0_10px_28px_rgba(148,216,45,0.28)] transition-all duration-300 backdrop-blur-sm hover:shadow-[0_16px_40px_rgba(148,216,45,0.38)] hover:-translate-y-px active:translate-y-0 w-full">
						Submit
					</button>
					<p className="text-center text-xs text-white/70">We’ll never share your info. For ODF founders only.</p>
				</form>
			</Form>
		</div>
	);
}

export default ODFInterestForm; 