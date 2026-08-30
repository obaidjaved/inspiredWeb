'use client';

import { motion } from 'framer-motion';

interface HeroVisualProps {
  variant?: 'default' | 'services' | 'portfolio' | 'about' | 'contact';
}

export default function HeroVisual({ variant = 'default' }: HeroVisualProps) {
  const gradients: Record<string, string[]> = {
    default: ['#00FF88', '#00B4FF', '#8B5CF6'],
    services: ['#00B4FF', '#8B5CF6', '#FF0080'],
    portfolio: ['#FF0080', '#8B5CF6', '#00FF88'],
    about: ['#8B5CF6', '#00FF88', '#00B4FF'],
    contact: ['#00FF88', '#FF0080', '#8B5CF6'],
  };

  const colors = gradients[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large gradient orb */}
      <motion.div
        className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: `radial-gradient(circle, ${colors[0]}40 0%, ${colors[1]}20 40%, transparent 70%)`,
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Medium gradient orb */}
      <motion.div
        className="absolute top-1/3 -left-1/4 w-[600px] h-[600px] rounded-full opacity-15"
        style={{
          background: `radial-gradient(circle, ${colors[1]}40 0%, ${colors[2]}20 40%, transparent 70%)`,
        }}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 20, -30, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Small accent orb */}
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full opacity-25"
        style={{
          background: `radial-gradient(circle, ${colors[2]}50 0%, transparent 60%)`,
        }}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 40, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(${colors[0]}20 1px, transparent 1px), linear-gradient(90deg, ${colors[0]}20 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 border border-accent/20 rounded-lg"
        animate={{ rotate: 360, y: [0, -10, 0] }}
        transition={{ rotate: { duration: 30, repeat: Infinity, ease: 'linear' }, y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
      />
      <motion.div
        className="absolute top-1/2 left-16 w-10 h-10 border border-accent-blue/20 rounded-full"
        animate={{ rotate: -360, x: [0, 10, 0] }}
        transition={{ rotate: { duration: 25, repeat: Infinity, ease: 'linear' }, x: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
      />
      <motion.div
        className="absolute bottom-32 left-1/3 w-8 h-8 border border-accent-purple/20"
        style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
        animate={{ rotate: 180, y: [0, -15, 0] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: 'linear' }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
      />
    </div>
  );
}
