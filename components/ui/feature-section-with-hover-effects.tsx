import { cn } from "@/lib/utils";

type PillVariant = "default" | "linkedin" | "blog";

export function FeaturesSectionWithHoverEffects({ colorMode = "dark" }: { colorMode?: "light" | "dark" }) {
  const isLight = colorMode === "light";
  const cardBase = isLight
    ? "border-slate-200 bg-gradient-to-b from-white to-slate-50 ring-1 ring-black/5"
    : "border-white/10 bg-white/[0.03]";
  const titleColor = isLight ? "text-slate-900" : "text-white";
  const bodyColor = isLight ? "text-slate-700" : "text-white/70";

  const features = [
    {
      title: "🔮 Predictive Intelligence",
      description:
        "Forecast what buyers will search and what AI will cite next—so you ship the right stories first.",
    },
    {
      title: "✍️ Strategic Storytelling",
      description:
        "Original research and founder POVs that get cited, remembered, and shared.",
    },
    {
      title: "🚀 Dual‑Channel Execution",
      description:
        "Founder voice + company authority—running in parallel from one system.",
      emphasize: true,
      pills: [
        { label: "Founder LinkedIn", variant: "linkedin" as PillVariant },
        { label: "Company Blogs", variant: "blog" as PillVariant },
      ],
    },
    {
      title: "📈 Visibility Tracking",
      description:
        "See what's actually resonating—across AI answers, search, and social.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 relative z-10 py-6 max-w-7xl mx-auto gap-4">
      {features.map((feature, index) => (
        <Feature
          key={feature.title}
          {...feature}
          index={index}
          cardBase={cardBase}
          titleColor={titleColor}
          bodyColor={bodyColor}
        />
      ))}
    </div>
  );
}

type PillProps = { label: string; variant?: PillVariant } | string;

function Pill({ children, variant = "default" }: { children: React.ReactNode; variant?: PillVariant }) {
  const base = "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium shadow-[0_4px_12px_rgba(0,0,0,0.18)] backdrop-blur-[1.5px] tracking-wide";
  const styles: Record<PillVariant, string> = {
    default: "border border-white/12 bg-white/6 text-white/85",
    linkedin: "border border-[#0A66C2]/30 bg-[#0A66C2]/80 text-white",
    blog: "border border-white/10 text-white bg-[linear-gradient(135deg,rgba(139,92,246,0.78)_0%,rgba(236,72,153,0.78)_100%)]",
  };
  return <span className={cn(base, styles[variant])}>{children}</span>;
}

const Feature = ({
  title,
  description,
  index,
  emphasize,
  pills,
  cardBase,
  titleColor,
  bodyColor,
}: {
  title: string;
  description: string;
  index: number;
  emphasize?: boolean;
  pills?: Array<PillProps>;
  cardBase: string;
  titleColor: string;
  bodyColor: string;
}) => {
  const base = `flex flex-col py-8 relative group/feature border rounded-2xl transition-transform duration-150 ${cardBase}`;
  const onLight = cardBase.includes("bg-gradient-to-b");
  const emphasis = emphasize
    ? onLight
      ? "shadow-[0_12px_40px_rgba(15,23,42,0.08)]"
      : "bg-white/[0.03] shadow-[0_16px_50px_rgba(148,216,45,0.08)]"
    : "";
  const hoverText = onLight ? "group-hover/feature:text-slate-900" : "group-hover/feature:text-white/90";
  const accentBase = onLight ? "bg-slate-200" : "bg-white/20";

  return (
    <div className={cn(base, emphasis, "hover:-translate-y-[2px] hover:shadow-[0_18px_60px_rgba(0,0,0,0.10)]")}> 
      {index < 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#94D82D]/5 to-transparent pointer-events-none" />
      )}
      {index >= 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#94D82D]/5 to-transparent pointer-events-none" />
      )}

      <div className="text-lg font-bold mb-2 relative z-10 px-6 sm:px-8 lg:px-10">
        <div className={cn("absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full transition-all duration-200 origin-center", accentBase, "group-hover/feature:bg-[#94D82D]")} />
        <span className={cn("inline-block leading-tight align-middle", titleColor)}>{title}</span>
      </div>
      <p className={cn("text-sm max-w-xs relative z-10 px-6 sm:px-8 lg:px-10 mb-3 transition-colors duration-200", bodyColor, hoverText)}>
        {description}
      </p>

      {pills && pills.length > 0 && (
        <div className="px-6 sm:px-8 lg:px-10 mt-2 flex items-center gap-2">
          {pills.map((p: PillProps) => (
            typeof p === "string" ? (
              <Pill key={p}>{p}</Pill>
            ) : (
              <Pill key={(p as any).label} variant={(p as any).variant}>{(p as any).label}</Pill>
            )
          ))}
        </div>
      )}
    </div>
  );
};