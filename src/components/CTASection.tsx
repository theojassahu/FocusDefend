import React from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onExplore: () => void;
  onGetInTouch: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onExplore, onGetInTouch }) => {
  return (
    <section
      id="cta"
      aria-label="Call To Action"
      className="py-24 md:py-36 relative bg-brand-deep/90 border-t border-white/5 overflow-hidden"
    >
      {/* Background radial green glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none opacity-25 bg-brand-green/20"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Supplied Logo in Hero Badge */}
        <div className="inline-flex items-center justify-center mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-brand-surface border border-brand-green/40 p-2 shadow-glow-md transition-transform hover:scale-105 duration-300">
            <img
              src="/assets/logo/focusdefend-logo.png"
              alt="FocusDefend Logo Shield & Open Book"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/logo.jpg';
              }}
            />
          </div>
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-white/10 text-xs font-mono uppercase tracking-widest text-brand-green mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>START TODAY</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
          Your time is valuable.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-emerald-300 to-white">
            Make every minute count.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Build healthier digital habits and turn learning into a more rewarding experience with FocusDefend.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onExplore}
            className="px-8 py-4 rounded-btn bg-brand-green hover:bg-brand-emerald text-brand-midnight font-extrabold text-base tracking-wide transition-all duration-200 shadow-glow-sm hover:shadow-glow-md hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2.5 cursor-pointer"
          >
            <span>Explore FocusDefend</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          <button
            onClick={onGetInTouch}
            className="px-7 py-4 rounded-btn bg-brand-surface hover:bg-brand-surfaceHover text-white font-semibold text-base border border-white/10 transition-all duration-200 inline-flex items-center gap-2.5 hover:border-brand-green/30 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-brand-green" />
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Release Pill Footnote */}
        <div className="mt-12 text-xs font-mono text-brand-darkMuted flex items-center justify-center gap-4">
          <span>Target Platform: Android 10-15</span>
          <span>•</span>
          <span>NCERT Curriculum Ready</span>
          <span>•</span>
          <span>On-Device Privacy</span>
        </div>
      </div>
    </section>
  );
};
