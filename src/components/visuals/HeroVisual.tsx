'use client';

import { motion } from 'framer-motion';

interface HeroVisualProps {
  variant?: 'default' | 'services' | 'portfolio' | 'about' | 'contact';
}

export default function HeroVisual({ variant = 'default' }: HeroVisualProps) {
  const gradients: Record<string, string[]> = {
    default: ['#00E87B', '#00A3E0', '#7C4DFF'],
    services: ['#00A3E0', '#7C4DFF', '#E91E7D'],
    portfolio: ['#E91E7D', '#7C4DFF', '#00E87B'],
    about: ['#7C4DFF', '#00E87B', '#00A3E0'],
    contact: ['#00E87B', '#E91E7D', '#7C4DFF'],
  };

  const colors = gradients[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large gradient orb */}
      <motion.div
        className="absolute -top-1/4 -right-1/4 w-[700px] h-[700px] rounded-full opacity-15"
        style={{
          background: `radial-gradient(circle, ${colors[0]}30 0%, ${colors[1]}15 40%, transparent 70%)`,
        }}
        animate={{
          x: [0, 25, -15, 0],
          y: [0, -15, 25, 0],
          scale: [1, 1.03, 0.97, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Medium gradient orb */}
      <motion.div
        className="absolute top-1/3 -left-1/4 w-[500px] h-[500px] rounded-full opacity-12"
        style={{
          background: `radial-gradient(circle, ${colors[1]}30 0%, ${colors[2]}15 40%, transparent 70%)`,
        }}
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 15, -25, 0],
          scale: [1, 0.97, 1.03, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Small accent orb */}
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] rounded-full opacity-20"
        style={{
          background: `radial-gradient(circle, ${colors[2]}40 0%, transparent 60%)`,
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${colors[0]}15 1px, transparent 1px), linear-gradient(90deg, ${colors[0]}15 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-14 h-14 border border-[rgba(0,232,123,0.12)] rounded-lg"
        animate={{ rotate: 360, y: [0, -8, 0] }}
        transition={{ rotate: { duration: 35, repeat: Infinity, ease: 'linear' }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
      />
      <motion.div
        className="absolute top-1/2 left-16 w-9 h-9 border border-[rgba(0,163,224,0.12)] rounded-full"
        animate={{ rotate: -360, x: [0, 8, 0] }}
        transition={{ rotate: { duration: 30, repeat: Infinity, ease: 'linear' }, x: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
      />
      <motion.div
        className="absolute bottom-32 left-1/3 w-7 h-7 border border-[rgba(124,77,255,0.12)]"
        style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
        animate={{ rotate: 180, y: [0, -12, 0] }}
        transition={{ rotate: { duration: 25, repeat: Infinity, ease: 'linear' }, y: { duration: 7, repeat: Infinity, ease: 'easeInOut' } }}
      />
    </div>
  );
}
