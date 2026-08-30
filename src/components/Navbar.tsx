'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Company', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Industries', href: '/services' },
  { name: 'Insights', href: '/about' },
  { name: 'Careers', href: '/about' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
            ? 'bg-white shadow-md border-b border-gray-100'
            : 'bg-white'
        }`}
        role="banner"
      >
        <nav className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Inspired Technology - Home">
            <div className="w-9 h-9 bg-[#6366f1] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-base">I</span>
            </div>
            <div className="flex items-baseline">
              <span className="text-lg font-bold tracking-tight text-[#171616]">INSPIRED</span>
              <span className="text-[#6366f1] text-lg font-semibold">.tech</span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1" role="menubar">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                role="menuitem"
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                  pathname === link.href
                    ? 'text-[#6366f1] bg-[rgba(99,102,241,0.06)]'
                    : 'text-[#313131] hover:text-[#6366f1] hover:bg-[rgba(99,102,241,0.04)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 bg-[#6366f1] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#5558e6] transition-all duration-200 hover:shadow-[0_4px_16px_rgba(99,102,241,0.3)] active:scale-[0.98]"
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-[#171616] p-2 rounded-lg hover:bg-gray-100 transition-colors"
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

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-white lg:hidden pt-[72px]"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col p-6 gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                >
                  <Link
                    href={link.href}
                    className={`text-lg font-semibold py-3 block transition-colors ${
                      pathname === link.href ? 'text-[#6366f1]' : 'text-[#171616] hover:text-[#6366f1]'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="mt-6"
              >
                <Link
                  href="/contact"
                  className="block text-center bg-[#6366f1] text-white px-6 py-3 rounded-full text-base font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
