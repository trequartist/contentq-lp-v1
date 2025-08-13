"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { motion, cubicBezier } from "framer-motion";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { SectionHeadline } from "@/components/Typography";
import { Briefcase, TrendingUp, Users, ChevronDown } from "lucide-react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "green" | "red" | "orange";
}

const glowColorMap: Record<Required<GlowCardProps>["glowColor"], { base: number; spread: number }> = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
};

function GlowCard({ children, className = "", glowColor = "blue" }: GlowCardProps): JSX.Element {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handle = (e: PointerEvent) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const { clientX: x, clientY: y } = e;
        if (!cardRef.current) { ticking = false; return; }
        (cardRef.current.style as any).setProperty("--x", x.toFixed(2));
        (cardRef.current.style as any).setProperty("--xp", (x / window.innerWidth).toFixed(2));
        (cardRef.current.style as any).setProperty("--y", y.toFixed(2));
        (cardRef.current.style as any).setProperty("--yp", (y / window.innerHeight).toFixed(2));
        ticking = false;
      });
    };
    document.addEventListener("pointermove", handle, { passive: true });
    return () => document.removeEventListener("pointermove", handle as any);
  }, []);

  const { base, spread } = glowColorMap[glowColor];

  const styles: React.CSSProperties = {
    ["--base" as any]: base as any,
    ["--spread" as any]: spread as any,
    ["--radius" as any]: 16 as any,
    ["--border" as any]: 2 as any,
    ["--size" as any]: 220 as any,
    position: "relative",
    backgroundColor: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: "16px",
    backdropFilter: "blur(8px)",
    backgroundImage:
      `radial-gradient(calc(var(--size) * 1px) calc(var(--size) * 1px) at calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px), hsl(calc(var(--base) + (var(--xp, 0) * var(--spread))) 90% 65% / 0.10), transparent 60%)`,
    backgroundAttachment: "fixed",
  } as React.CSSProperties;

  const beforeAfter = `
    [data-glow]::before,
    [data-glow]::after {
      content: "";
      position: absolute;
      inset: -2px;
      border-radius: 16px;
      pointer-events: none;
    }
    [data-glow]::before {
      background: radial-gradient(calc(var(--size) * 0.6px) calc(var(--size) * 0.6px) at calc(var(--x,0) * 1px) calc(var(--y,0) * 1px), hsl(calc(var(--base) + (var(--xp, 0) * var(--spread))) 90% 60% / 0.35), transparent 70%);
      filter: blur(18px);
      opacity: 0.8;
    }
    [data-glow]::after {
      border: 1px solid rgba(255,255,255,0.12);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfter }} />
      <div ref={cardRef} data-glow style={styles} className={`p-5 h-full ${className}`}>
        {children}
      </div>
    </>
  );
}

interface PersonaCardProps {
  title: string;
  subtitle: string;
  problems: string[];
  solution: string;
  icon: ReactNode;
  glowColor: NonNullable<GlowCardProps["glowColor"]>;
  imageUrl: string;
  fallbackUrl?: string;
}

function PersonaCard({ title, subtitle, problems, solution, icon, glowColor, imageUrl, fallbackUrl }: PersonaCardProps): JSX.Element {
  const [imgSrc, setImgSrc] = useState<string>(imageUrl);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Responsive preview bullet count: 1 on mobile, 2 on md+
  const [previewCount, setPreviewCount] = useState<number>(1);
  useEffect(() => {
    const mq = typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)') : null;
    const update = () => setPreviewCount(mq && mq.matches ? 2 : 1);
    update();
    if (mq) {
      mq.addEventListener('change', update);
      return () => mq.removeEventListener('change', update);
    }
  }, []);

  const previewProblems = problems.slice(0, previewCount);

  return (
    <GlowCard glowColor={glowColor} className="rounded-2xl">
      <div className="flex flex-col h-full">
        {/* Image header */}
        <div className="relative mb-4 h-52 md:h-56 rounded-xl overflow-hidden">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover object-[50%_35%]"
            loading="lazy"
            decoding="async"
            onError={() => {
              if (fallbackUrl && imgSrc !== fallbackUrl) setImgSrc(fallbackUrl);
            }}
          />
        </div>
        {/* Title */}
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-white font-semibold text-lg">{title}</h3>
        </div>
        <p className="text-white/75 text-sm italic mb-2">{subtitle}</p>

        {/* Preview bullet(s) when collapsed */}
        {!isOpen && previewProblems.length > 0 && (
          <div className="space-y-2 mb-2">
            {previewProblems.map((p, i) => (
              <div key={`preview-${i}`} className="flex items-start text-white/80 text-sm">
                <span className="text-rose-400 mr-2 mt-0.5">❌</span>
                <span>{p}</span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto">
          {/* Collapsible details */}
          <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${isOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="space-y-2 mb-4">
              {problems.map((p, i) => (
                <div key={i} className="flex items-start text-white/80 text-sm">
                  <span className="text-rose-400 mr-2 mt-0.5">❌</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <div className="flex items-start text-white text-sm">
              <span className="text-emerald-400 mr-2 mt-0.5">✅</span>
              <span className="font-medium">{solution}</span>
            </div>
          </div>

          {/* Toggle */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="mt-3 inline-flex items-center gap-2 text-[#94D82D] font-medium text-sm hover:text-[#85C326] transition-colors"
            aria-expanded={isOpen}
          >
            {isOpen ? "Show less" : "Sounds like me. View more"}
            <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </GlowCard>
  );
}

export default function WeSeeYouSection(): JSX.Element {
  const ease = cubicBezier(0.23, 0.86, 0.39, 0.96);
  return (
    <Section
      variant="dark"
      id="we-see-you"
      className="relative py-10 lg:py-[56px] lg:px-[60px] overflow-hidden"
      style={{ backgroundColor: "#001233" }}
    >
      {/* dark classy gradient wash */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(800px 320px at 15% -10%, rgba(148,216,45,0.25), transparent 60%), radial-gradient(800px 320px at 85% 110%, rgba(0,180,150,0.18), transparent 60%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="relative z-10 space-y-10 max-w-6xl mx-auto">
        <div className="text-center">
          <SectionHeadline>
            <span className="text-white">We See You</span>
          </SectionHeadline>
          <p className="text-white/80 max-w-3xl mx-auto mt-2">
            You know content drives growth. Now get the AI intelligence to do it right—without doing it yourself.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease }}>
            <PersonaCard
              title="The B2B Founder Wearing Every Hat"
              subtitle="You're CEO, COO, and apparently Content Writer too..."
              problems={[
                "Your expertise trapped in your head, not on the internet",
                "Personal brand expectations you never signed up for",
                "Content strategy = 'maybe next quarter'",
              ]}
              solution="We handle it: Our AI learns your entire knowledge base in 2 hours. Persistent memory means you never repeat yourself. Weekly content in your voice while you focus on building. Enterprise intelligence, founder-friendly commitment."
              icon={<Briefcase className="w-5 h-5" />}
              glowColor="blue"
              imageUrl="/images/founder.png"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease }}>
            <PersonaCard
              title="The Startup Marketer vs. The Algorithm"
              subtitle="Fighting three battles at once: AI, SEO, and your boss..."
              problems={[
                "Prove content ROI or lose budget (again)",
                "Compete with 1000s of AI articles daily",
                "Balance brand building with demand gen",
              ]}
              solution="We deliver: AI intelligence that predicts what buyers search before they do. See which content drives real engagement and influences pipeline. Strategic insights you'd expect from a Fortune 500 content team, delivered weekly."
              icon={<TrendingUp className="w-5 h-5" />}
              glowColor="purple"
              imageUrl="/images/marketer.png"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease }}>
            <PersonaCard
              title="The Agency Lead Hitting Scale Limits"
              subtitle="Growth is great until you can't deliver..."
              problems={[
                "Each new client adds 20 hours you don't have",
                "Quality dropping as quantity increases",
                "Hiring writers who don't get B2B",
              ]}
              solution="We enable: Separate AI intelligence engine per client with complete memory isolation. Each client's voice, strategy, and context preserved perfectly. Scale from 1 to 10 clients without losing quality or your mind."
              icon={<Users className="w-5 h-5" />}
              glowColor="green"
              imageUrl="/images/consultant.png"
            />
          </motion.div>
        </div>

        <div className="text-center pt-2">
          <Button href="https://cal.com/banish/contentq-exploratory-call-with-anish" variant="primary" size="lg" showArrow>
            Get In Touch
          </Button>
        </div>
      </div>
    </Section>
  );
}