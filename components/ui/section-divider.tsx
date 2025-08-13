'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface SectionDividerProps {
  variant?: 'light-to-dark' | 'dark-to-light' | 'dark-to-dark';
  className?: string;
}

export function SectionDivider({ variant = 'light-to-dark', className }: SectionDividerProps): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollY, [0, 1], [0, -6]);

  const variantClass =
    variant === 'light-to-dark'
      ? 'section-divider light-to-dark'
      : variant === 'dark-to-light'
      ? 'section-divider dark-to-light'
      : 'section-divider dark-to-dark';

  return (
    <motion.div
      ref={ref}
      className={[variantClass, className || ''].join(' ').trim()}
      style={{ y }}
      initial={{ opacity: 0.7, scaleY: 0.96 }}
      whileInView={{ opacity: 1, scaleY: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 160, damping: 24, mass: 0.9 }}
      aria-hidden
    />
  );
}

export default SectionDivider; 