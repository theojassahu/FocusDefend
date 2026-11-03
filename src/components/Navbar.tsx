import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenGetStarted: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGetStarted }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#solution' },
    { label: 'AI Insights', href: '#ai-insights' },
    { label: 'For Parents', href: '#parent-controls' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-midnight/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll-based Progress Indicator using useScroll & useSpring */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-green via-emerald-300 to-brand-mint origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="FocusDefend Home"
          >
            <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-brand-surface border border-brand-green/30 p-1 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-glow-sm">
              <img
                src="/assets/logo/focusdefend-logo.png"
                alt="FocusDefend Shield & Book Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/logo.jpg';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-brand-green transition-colors">
                FocusDefend
              </span>
              <span className="text-[10px] font-mono tracking-wider text-brand-green/80 uppercase hidden sm:block">
                Focus. Protect. Learn.
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Exact 5 Centre Links) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-brand-surface/60 border border-white/10 backdrop-blur-sm"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-brand-muted hover:text-white hover:bg-white/5 rounded-full transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenGetStarted}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-btn bg-brand-green hover:bg-brand-emerald text-brand-midnight font-bold text-xs tracking-wide transition-all duration-200 shadow-glow-sm hover:shadow-glow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenGetStarted}
              className="px-3 py-1.5 rounded-lg bg-brand-green text-brand-midnight font-bold text-xs cursor-pointer"
            >
              Get App
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-brand-surface border border-white/10 text-white hover:text-brand-green transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-brand-deep/95 border-b border-white/10 backdrop-blur-xl px-5 pt-4 pb-6 mt-3 space-y-3 transition-all animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-brand-muted hover:text-white hover:bg-brand-surface/60 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGetStarted();
              }}
              className="w-full py-2.5 rounded-btn bg-brand-green hover:bg-brand-emerald text-brand-midnight font-bold text-xs tracking-wide transition-colors flex items-center justify-center gap-2 shadow-glow-sm"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
