'use client';

import { motion } from 'framer-motion';

interface ProjectVisualProps {
  gradient: string;
  icon: string;
  title: string;
  index: number;
}

const patternStyles = [
  'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.08) 0%, transparent 50%)',
  'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.08) 0%, transparent 50%)',
  'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 40%)',
  'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)',
];

export default function ProjectVisual({ gradient, icon, title, index }: ProjectVisualProps) {
  const pattern = patternStyles[index % patternStyles.length];

  return (
    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden group">
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />

      {/* Pattern overlay */}
      <div className="absolute inset-0" style={{ background: pattern }} />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-6 right-6 w-20 h-20 border border-white/10 rounded-xl"
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-8 left-8 w-12 h-12 border border-white/10 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Central icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-6xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {icon}
        </motion.div>
      </div>

      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
        <p className="text-white/80 text-sm font-medium tracking-wide">{title}</p>
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)',
          backgroundSize: '200% 100%',
          animation: 'shine 2s ease-in-out infinite',
        }}
      />
    </div>
  );
}
