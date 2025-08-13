import Image from 'next/image';

export interface TrustedByStripProps {
  className?: string;
}

export function TrustedByStrip({ className = "" }: TrustedByStripProps): JSX.Element {
  return (
    <div className={`pointer-events-auto ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4">
        <div className="uppercase tracking-[0.18em] text-[10px] sm:text-xs text-white/70">
          Trusted by Pioneers, backed by:
        </div>
        <div className="flex items-center gap-5 sm:gap-7 opacity-95">
          <Image
            src="/logos/yc.svg"
            alt="Y Combinator"
            width={36}
            height={36}
            className="h-[30px] w-auto brightness-110 contrast-125 saturate-[0.9] drop-shadow-[0_1px_1px_rgba(255,255,255,0.25)] [filter:drop-shadow(0_6px_16px_rgba(0,0,0,0.35))]"
            priority
          />
          <Image
            src="/logos/ondeck.svg"
            alt="On Deck"
            width={180}
            height={32}
            className="h-[28px] w-auto brightness-110 contrast-125 saturate-[0.9] drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)] [filter:drop-shadow(0_6px_16px_rgba(0,0,0,0.35))]"
          />
          <Image
            src="/logos/antler.svg"
            alt="Antler"
            width={180}
            height={32}
            className="h-[28px] w-auto brightness-110 contrast-125 saturate-[0.9] drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)] [filter:drop-shadow(0_6px_16px_rgba(0,0,0,0.35))]"
          />
        </div>
      </div>
    </div>
  );
} 