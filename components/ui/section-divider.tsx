'use client';

import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'light-to-dark' | 'dark-to-light' | 'dark-to-dark';
  className?: string;
}

export function SectionDivider({ variant = 'light-to-dark', className }: SectionDividerProps): JSX.Element {
  const variantClass =
    variant === 'light-to-dark'
      ? 'section-divider light-to-dark'
      : variant === 'dark-to-light'
      ? 'section-divider dark-to-light'
      : 'section-divider dark-to-dark';

  return (
    <motion.div
      className={[variantClass, className || ''].join(' ').trim()}
      initial={{ opacity: 0.6, scaleY: 0.9 }}
      whileInView={{ opacity: 1, scaleY: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 180, damping: 22, mass: 0.8 }}
      aria-hidden
    />
  );
}

export default SectionDivider; 