'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-[#222]/60'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between" aria-label="Main navigation">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Inspired Technology - Home">
            <div className="w-9 h-9 bg-[#6366f1] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-base">I</span>
            </div>
            <div className="flex items-baseline">
              <span className="text-base font-bold tracking-tight text-white">INSPIRED</span>
              <span className="text-[#6366f1] text-base font-semibold">.tech</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5" role="menubar">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                role="menuitem"
                className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-[#6366f1] bg-[rgba(99,102,241,0.1)]'
                    : 'text-[#a0a0a0] hover:text-white hover:bg-[#1a1a1a]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 bg-[#6366f1] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#5558e6] transition-all duration-200 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] active:scale-[0.98]"
            >
              Get Started
            </Link>
          </div>

          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-[#1a1a1a] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                >
                  <Link
                    href={link.href}
                    className={`text-2xl font-semibold transition-colors block py-3 ${
                      pathname === link.href
                        ? 'text-[#6366f1]'
                        : 'text-white hover:text-[#6366f1]'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              >
                <Link
                  href="/contact"
                  className="mt-8 bg-[#6366f1] text-white px-8 py-3.5 rounded-full text-lg font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
