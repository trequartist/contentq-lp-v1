'use client';

import { ReactNode, useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import LogoKiwiQ from './LogoKiwiQ';
import { ArrowUpRight, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface LayoutWrapperProps {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [isMounted, setIsMounted] = useState(false);
  const particleIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => { setIsMounted(true); }, []);

  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handleSmoothScroll, { passive: false });
    return () => document.removeEventListener('click', handleSmoothScroll as any);
  }, []);

  useEffect(() => {
    const headerEl = document.getElementById('app-header');
    if (!headerEl) return;
    const onScroll = () => {
      const scrolled = window.scrollY > 12;
      if (scrolled) headerEl.setAttribute('data-scrolled', '');
      else headerEl.removeAttribute('data-scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return; // skip particles entirely

    const isMobile = typeof navigator !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent);

    let active = true;
    const createParticle = () => {
      if (!active) return;
      const container = document.querySelector('.floating-particles');
      if (!container) return;
      const particle = document.createElement('div');
      const sizes = ['particle-small', 'particle-medium', 'particle-large'];
      const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
      particle.className = `particle ${randomSize}`;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = (10 + Math.random() * 6) + 's';
      particle.style.setProperty('--delay', Math.random() * 4 + 's');
      requestAnimationFrame(() => container.appendChild(particle));
      setTimeout(() => { if (particle.parentNode) { (particle.parentNode as HTMLElement).removeChild(particle); } }, 14000);
    };

    const intervalMs = isMobile ? 900 : 600;
    particleIntervalRef.current = setInterval(createParticle, intervalMs);

    const onVisibility = () => { active = !document.hidden; };
    document.addEventListener('visibilitychange', onVisibility);

    const onScrollDistance = () => {
      const y = window.scrollY;
      active = y < 1400; // pause when far down the page
    };
    window.addEventListener('scroll', onScrollDistance, { passive: true });

    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('scroll', onScrollDistance);
      if (particleIntervalRef.current) clearInterval(particleIntervalRef.current);
    };
  }, [isMounted]);

  // Build nav links depending on route
  const defaultLinks = [
    { href: '#what-we-do', label: 'How It Works', type: 'section' as const },
    { href: '#sprint', label: '90-Day Plan', type: 'section' as const },
    { href: '#results', label: 'Impact', type: 'section' as const },
    { href: '#we-see-you', label: 'Who We Help', type: 'section' as const },
    { href: '/pricing', label: 'Pricing', type: 'page' as const },
    { href: 'https://cal.com/banish/contentq-exploratory-call-with-anish', label: 'Book a call', type: 'page' as const, external: true },
  ];

  const pricingLinks = [
    { href: 'https://cal.com/banish/contentq-exploratory-call-with-anish', label: 'Book a call', type: 'page' as const, external: true },
  ];

  const navLinks = pathname === '/pricing' ? pricingLinks : defaultLinks;

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
        <div id="app-header" className="container mx-auto px-4 md:px-6 lg:px-8 pointer-events-auto transition-all duration-300 rounded-b-xl bg-transparent backdrop-blur-0 data-[scrolled]:bg-black/25 data-[scrolled]:backdrop-blur-[6px] data-[scrolled]:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_0_rgba(255,255,255,0.03)]">
          <div className="flex items-center justify-between py-3.5">
            <a href="/" className="inline-flex items-center gap-3 group">
              <LogoKiwiQ className="h-8 w-8 sm:h-9 sm:w-9 transition-transform duration-200 ease-out group-hover:scale-[1.035] group-hover:-rotate-[0.5deg]" />
              <span className="hidden sm:inline text-white/90 group-hover:text-white transition-colors tracking-tight">KiwiQ.AI</span>
            </a>
            <style>{`.group:hover svg { filter: drop-shadow(0 0 6px rgba(148,216,45,0.35)); }`}</style>
            <div className="hidden md:flex items-center gap-4">
              {navLinks.map((l) => (
                l.type === 'section' ? (
                  <a key={l.href} href={l.href} className="relative text-sm text-zinc-300 hover:text-white transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-white/30 after:transition-all after:duration-200 hover:after:w-full">
                    {l.label}
                  </a>
                ) : (
                  <a
                    key={l.href}
                    href={l.href}
                    target={l.external ? '_blank' : undefined}
                    rel={l.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-sm text-white/95 bg-white/12 border border-white/20 rounded-full px-3 py-1 backdrop-blur-[2px] shadow-[0_2px_10px_rgba(0,0,0,0.25)] ring-1 ring-white/15 hover:bg-white/16 hover:text-white transition-colors"
                  >
                    {l.label}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-90" />
                  </a>
                )
              ))}
            </div>
            {/* Mobile menu trigger */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button aria-label="Open menu" className="inline-flex items-center justify-center rounded-lg bg-white/10 border border-white/15 text-white p-2">
                    <Menu className="w-5 h-5" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-[#0B0F18] text-white border-l border-white/10 w-[85%] max-w-sm">
                  <nav className="mt-6 flex flex-col gap-3">
                    {navLinks.map((l) => (
                      <a key={l.href} href={l.href} className="px-3 py-2 rounded-md hover:bg-white/5 active:bg-white/10 text-base">
                        {l.label}
                      </a>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      <div className="grain-overlay" />
      <div className="floating-particles fixed inset-0 pointer-events-none z-0" />
      <div className="relative">{children}</div>
    </>
  );
}