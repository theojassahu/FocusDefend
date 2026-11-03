import React from 'react';
import { ArrowUp, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenOTA: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenOTA,
  onOpenContact
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050C17] border-t border-white/10 pt-16 pb-12 text-brand-muted text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-surface border border-brand-green/30 p-1 flex items-center justify-center">
                <img
                  src="/assets/logo/focusdefend-logo.png"
                  alt="FocusDefend Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/logo.jpg';
                  }}
                />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                FocusDefend
              </span>
            </div>

            <p className="text-sm text-brand-muted leading-relaxed max-w-sm">
              Where Learning Unlocks Freedom. An AI-powered digital wellbeing and learning habit transformation platform engineered natively for student success.
            </p>

            <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-brand-surface/60 border border-white/10 font-mono text-[11px] text-brand-muted">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>Native Android Architecture · On-Device Privacy</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-brand-green transition-colors">Home</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-brand-green transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#solution" className="hover:text-brand-green transition-colors">Core Pillars</a>
              </li>
              <li>
                <a href="#product-showcase" className="hover:text-brand-green transition-colors">App Architecture</a>
              </li>
              <li>
                <a href="#ai-insights" className="hover:text-brand-green transition-colors">AI Insights</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-green transition-colors">System FAQ</a>
              </li>
            </ul>
          </div>

          {/* Platform & Product Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold">
              Product &amp; Systems
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#parent-controls" className="hover:text-brand-green transition-colors">
                  Parent Quick Approval
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-brand-green transition-colors">
                  System Comparison
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenOTA}
                  className="hover:text-brand-green transition-colors text-left cursor-pointer"
                >
                  OTA Release Specs
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenContact}
                  className="hover:text-brand-green transition-colors text-left cursor-pointer"
                >
                  Contact Team
                </button>
              </li>
              <li>
                <a 
                  href="https://focusdefend.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-brand-green transition-colors inline-flex items-center gap-1"
                >
                  <span>Production Live Link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Project & Verified Team Info */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold">
              Project Context
            </h4>
            <p className="text-xs text-brand-muted leading-relaxed">
              Engineered for the BIC 2.0 Innovation Presentation.
            </p>
            <div className="space-y-1 text-xs font-mono text-brand-darkMuted">
              <p><span className="text-brand-muted font-sans">Engineering Team:</span> Aviral, Ojas, Jisan</p>
              <p><span className="text-brand-muted font-sans">Project Mentor:</span> Naveen Verma</p>
            </div>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-surface hover:bg-brand-surfaceHover border border-white/10 text-white text-xs transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5 text-brand-green" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Rights Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-brand-darkMuted">
          <p>© 2026 FocusDefend. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Draft Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Draft Terms of Service
            </button>
            <a
              href="https://focusdefend.vercel.app/"
              className="text-brand-green hover:underline"
            >
              focusdefend.vercel.app
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
