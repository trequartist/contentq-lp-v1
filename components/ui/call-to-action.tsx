import { MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import PrimaryCTA from "@/components/ui/primary-cta";

interface CTAProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description: string;
  primaryButtonText: string;
  onPrimaryClick?: () => void;
  primaryHref?: string;
}

function CTA({
  badge,
  title,
  subtitle,
  description,
  primaryButtonText,
  onPrimaryClick,
  primaryHref = "https://cal.com/banish/contentq-exploratory-call-with-anish",
}: CTAProps) {
  return (
    <div className="w-full py-4 lg:py-6">
      <div className="container mx-auto">
        <div className="flex relative overflow-hidden text-center rounded-2xl p-5 lg:p-7 gap-5 items-center ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] night-sky flex-col">
          {badge && (
            <div>
              <Badge className="bg-[#94D82D] text-black hover:bg-[#94D82D]/90">
                {badge}
              </Badge>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-4xl font-regular text-white">
              {title}
            </h3>
            {subtitle && (
              <h4 className="text-xl md:text-2xl tracking-tight max-w-3xl text-white/80 font-medium">
                {subtitle}
              </h4>
            )}
            <p className="text-lg leading-relaxed tracking-tight text-white/70 max-w-3xl">
              {description}
            </p>
          </div>
          <PrimaryCTA
            href={primaryHref}
            label={primaryButtonText}
            mode="dark"
          />
          <div className="bottom-fade" />
        </div>
      </div>
    </div>
  );
}

export { CTA };