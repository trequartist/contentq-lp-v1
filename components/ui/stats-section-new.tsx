import { MoveDownLeft, MoveUpRight } from "lucide-react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

interface StatItem {
  value: string;
  statText: string;
  source: string;
  trendDirection: 'up' | 'down';
  trend: string;
}

interface StatsProps {
  stats: StatItem[];
  currentStatIndex?: number;
  colorMode?: 'light' | 'dark';
  showIndicators?: boolean;
}

function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionVal = useMotionValue(0);
  const [display, setDisplay] = useState<string>(value);

  const { target, suffix } = useMemo(() => {
    const match = value.match(/([0-9.,]+)(.*)/);
    const numPart = match?.[1] ?? value;
    const suffixPart = match?.[2] ?? "";
    const numericTarget = Number((numPart || "0").replace(/,/g, ""));
    return { target: isFinite(numericTarget) ? numericTarget : 0, suffix: suffixPart };
  }, [value]);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionVal, target, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (latest) => {
        const formatted = new Intl.NumberFormat().format(Math.round(latest as number));
        setDisplay(`${formatted}${suffix}`);
      },
    });
    return () => controls.stop();
  }, [isInView, motionVal, suffix, target]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

function StatsNew({ stats, currentStatIndex = 0, colorMode = 'dark', showIndicators = true }: StatsProps) {
  const textColor = colorMode === 'light' ? 'text-white' : 'text-slate-900';
  const mutedColor = colorMode === 'light' ? 'text-white/70' : 'text-slate-600';
  const borderColor = colorMode === 'light' ? 'border-white/20' : 'border-slate-200';
  
  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        <div className="grid text-left grid-cols-1 lg:grid-cols-3 w-full gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className={`flex gap-0 flex-col justify-between p-6 border rounded-lg transition-all duration-300 ${borderColor} ${
                currentStatIndex === index ? 'ring-2 ring-[#94D82D]/30 bg-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.25)]' : ''
              }`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ translateY: -2 }}
              transition={{ duration: 0.45 }}
            >
              {showIndicators && (
                stat.trendDirection === 'up' ? (
                  <MoveUpRight className="w-4 h-4 mb-6 text-[#94D82D]" />
                ) : (
                  <MoveDownLeft className="w-4 h-4 mb-6 text-orange-500" />
                )
              )}
              
              <motion.h2
                className={`text-4xl lg:text-5xl tracking-tighter font-bold flex flex-row gap-3 items-end mb-3 ${textColor}`}
                animate={{ scale: currentStatIndex === index ? 1.04 : 1 }}
                transition={{ type: 'spring', stiffness: 220, damping: 14 }}
              >
                <CountUp value={stat.value} />
                {showIndicators && (
                  <span className={`text-sm tracking-normal ${mutedColor}`}>
                    {stat.trend}
                  </span>
                )}
              </motion.h2>
              
              <p className={`text-base leading-relaxed tracking-tight mb-4 ${mutedColor}`}>
                {stat.statText}
              </p>
              
              <p className={`text-xs tracking-tight ${mutedColor} opacity-75`}>
                {stat.source}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { StatsNew };