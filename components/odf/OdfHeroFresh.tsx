"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import PrimaryCTA from "@/components/ui/primary-cta";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import LogoKiwiQ from "@/components/LogoKiwiQ";

function track(event: string, data?: Record<string, unknown>) {
  // Lightweight analytics shim; integrates with gtag if present
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", event, data || {});
  } else {
    // eslint-disable-next-line no-console
    console.debug("analytics", event, data || {});
  }
}

export default function OdfHeroFresh(): JSX.Element {
  const [noteOpen, setNoteOpen] = useState(false);

  useEffect(() => {
    track("odf_hero_view");
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://form.typeform.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cal.com" crossOrigin="anonymous" />
      </Head>

      <section
        className="relative overflow-hidden text-white"
        style={{ background: "#0A0A0A" }}
      >
        <div className="container mx-auto max-w-[1440px] px-4 md:px-6 lg:px-8 min-h-[600px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch py-16 md:py-20">
            {/* LEFT PANEL */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-4 md:gap-5 rounded-full border border-white/15 bg-white/10 px-5 md:px-6 py-2.5 md:py-3 backdrop-blur-md ring-1 ring-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <img src="/logos/ondeck.svg" alt="On Deck Founders" className="h-8 md:h-10 w-auto opacity-95" />
                <span className="text-[14px] md:text-[15px] text-white/90 tracking-tight">On Deck</span>
                <span className="text-white/70">+</span>
                <LogoKiwiQ className="h-8 md:h-10 w-8 md:w-10" title="KiwiQ.AI" />
                <span className="text-[14px] md:text-[15px] text-white/90 tracking-tight">KiwiQ AI</span>
              </div>

              <h1 className="mt-5 text-3xl sm:text-4xl md:text-[40px] font-semibold leading-[1.2]">
                <span className="text-white">The new B2B Content reality</span>
              </h1>
              <ul className="mt-4 space-y-2 text-[17px] md:text-[18px] text-white/85">
                <li className="flex items-start gap-3"><span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-[#8FD14F]"></span>Everyone can create content</li>
                <li className="flex items-start gap-3"><span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-[#8FD14F]"></span>Nobody can be heard</li>
                <li className="flex items-start gap-3"><span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-[#8FD14F]"></span>Buyers trust what AI has to say</li>
              </ul>

              <p className="mt-6 text-[18px] md:text-[19px] text-white/90">Your move?</p>

              <div className="mt-7 relative max-w-[560px] rounded-2xl border border-white/20 bg-gradient-to-b from-neutral-900/60 to-neutral-900/40 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.6)]">
                <div className="absolute -top-[1px] left-5 right-5 h-[2px] bg-gradient-to-r from-transparent via-[#94D82D] to-transparent opacity-90"></div>
                <div className="absolute left-4 top-6 bottom-6 w-px bg-gradient-to-b from-[#94D82D33] via-[#94D82D66] to-[#94D82D33]"></div>
                <div className="p-6">
                  <p className="text-[15px] md:text-[16px] leading-[1.75] text-transparent bg-clip-text bg-gradient-to-b from-zinc-50 via-zinc-200 to-zinc-300 antialiased">
                    ContentQ combines AI teammates with human strategists to build your authority where modern buyers actually look: ChatGPT answers, Google results, LinkedIn feeds.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/85 backdrop-blur">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#8FD14F]"></span>
                  AI Citations
                </span>
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/85 backdrop-blur">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#8FD14F]"></span>
                  Search Rankings
                </span>
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/85 backdrop-blur">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#8FD14F]"></span>
                  Social Authority
                </span>
              </div>
            </div>

            {/* RIGHT PANEL (Collapsed card) */}
            <div className="flex flex-col justify-center">
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 min-h-[380px] md:min-h-[440px] flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white">Why we are building KiwiQ AI?</h3>
                <div className="mt-4">
                  <button
                    aria-label="Read a Note from the Founders"
                    onClick={() => setNoteOpen(true)}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/8 px-4 py-2.5 text-sm md:text-[15px] text-white/90 hover:text-white transition-all hover:shadow-[0_0_0_2px_rgba(255,255,255,0.08)]"
                  >
                    Read a Note from the Founders
                    <span className="inline-block">→</span>
                  </button>
                </div>

                <div className="mt-5 rounded-lg border border-white/10 bg-white/5 p-3 text-[13px] text-white/85">
                  🚀 Special: <span className="font-semibold text-white">10 Pilot slots</span>, $499 for 30 days
                </div>

                <div className="mt-auto pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <PrimaryCTA
                    href="https://form.typeform.com/to/dub8wybg"
                    label="Submit Interest"
                    caption=""
                    mode="dark"
                    expand
                  />
                  <a
                    href="https://cal.com/banish/contentq-exploratory-call-with-anish"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("odf_cta_quick_chat")}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/12"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>

              {/* Founder’s Note full-screen takeover */}
              <Dialog open={noteOpen} onOpenChange={(o) => { setNoteOpen(o); if (o) track("odf_founder_note_open"); }}>
                <DialogTrigger asChild>
                  <span className="hidden" />
                </DialogTrigger>
                <DialogContent className="fixed inset-0 z-50 w-screen h-screen max-w-none left-0 top-0 translate-x-0 translate-y-0 border-0 p-0 rounded-none bg-black/70 data-[state=open]:animate-in data-[state=open]:fade-in-0">
                  <div className="absolute inset-0" onClick={() => setNoteOpen(false)} />
                  <div className="absolute inset-x-0 bottom-0 h-[85vh] md:h-[80vh] bg-gradient-to-b from-zinc-50 to-white text-slate-900 rounded-t-2xl shadow-[0_-20px_60px_rgba(0,0,0,0.5)] data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom-4 overflow-y-auto focus:outline-none">
                    <div className="sticky top-0 z-10 flex items-center justify-between px-4 md:px-8 py-4 border-b border-zinc-200 bg-white/85 backdrop-blur">
                      <div className="text-sm md:text-base font-semibold tracking-tight text-zinc-700">Founder’s Note</div>
                      <button
                        aria-label="Close"
                        onClick={() => setNoteOpen(false)}
                        className="rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-700 hover:bg-zinc-50 shadow-sm"
                      >
                        Close
                      </button>
                    </div>
                    <div className="px-4 md:px-8 py-10">
                      <div className="mx-auto max-w-3xl space-y-6 text-[1.08rem] leading-[1.95] text-zinc-800">
                        <p>AI gave everyone a voice. Now nobody can be heard.</p>
                        <p>
                          Take a pause, and reflect on life post‑ChatGPT. Okay, a bit more specifically—reflect on its impact on B2B content marketing :)
                        </p>
                        <p>
                          AI writing tools have dramatically reduced barriers to churning out "good" content. So much so, that there&apos;s been more business blog content posted on the internet after November 2022 than all business blog content prior to that. But here&apos;s the thing—we&apos;re not solving for content volume. We&apos;re solving for share of voice and share of mind. And when every blog reads like it was written by the same person, we all start blending into the background.
                        </p>
                        <p>
                          Meanwhile, B2B buyers are increasingly using ChatGPT for recommendations and research too. So as a B2B content marketer, you now need to stand out to humans AND AI.
                        </p>
                        <p>
                          The real question becomes: How do I tell my unique and authentic story to capture buyer mindshare, in a way that works with both human AND AI audiences?
                        </p>
                        <p>
                          I&apos;m Anish Bharadwaj, and before I built products for marketers at Amazon and startups, I worked as an election strategist. I&apos;m passionate about storytelling and making your story win. My cofounder Raunak Bhandari was an ML Lead at Google, closely involved in building Knowledge Graphs and Gemini. He eats complex architecture diagrams for breakfast.
                        </p>
                        <p>
                          Together, we&apos;re building ContentQ to help B2B startups tell their story more effectively in this hybrid world. It&apos;s not just another AI writing tool — it&apos;s intelligence infrastructure that actually remembers who you are and ensures you&apos;re discoverable everywhere buyers look.
                        </p>
                        <p>
                          We believe this is the most fascinating and high‑impact problem we can solve to help startups, and we&apos;re chomping at the bit. We are shortly releasing our first product ContentQ, and would absolutely love to learn your story and help you tell it to your buyers.
                        </p>
                        <p className="text-zinc-600">— Anish and Raunak (Co‑founders, KiwiQ AI)</p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 