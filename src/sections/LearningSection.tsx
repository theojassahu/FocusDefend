import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Check, X, Sparkles } from 'lucide-react';
import { comparisonData } from '../data/features';

export const LearningSection: React.FC = () => {
  return (
    <section
      id="comparison"
      aria-label="Why FocusDefend"
      className="py-20 md:py-32 relative bg-brand-midnight border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="A SMARTER ALTERNATIVE"
          title="A smarter alternative to purely restrictive screen-time management."
          description="Traditional screen-time apps focus on restriction alone. FocusDefend teaches responsible digital habits by combining learning with meaningful rewards."
        />

        {/* Desktop Comparison Table (Hidden on small mobile) */}
        <div className="hidden md:block glass-panel rounded-card overflow-hidden border border-white/10 shadow-2xl max-w-4xl mx-auto">
          {/* Table Header with Exact Required Columns */}
          <div className="grid grid-cols-2 bg-brand-surface p-6 border-b border-white/10 text-sm font-bold uppercase tracking-wider font-mono">
            <div className="text-brand-darkMuted pl-2">
              Traditional restrictive approach
            </div>
            <div className="text-brand-green flex items-center gap-2 pl-2">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>FocusDefend approach</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/5">
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-2 p-6 items-center text-sm hover:bg-white/[0.02] transition-colors"
              >
                {/* Traditional Column */}
                <div className="text-brand-muted/80 flex items-start gap-3 pr-6">
                  <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-rose-400" />
                  </div>
                  <span className="leading-relaxed">{row.traditional}</span>
                </div>

                {/* FocusDefend Column */}
                <div className="text-white font-medium flex items-start gap-3 pl-2">
                  <div className="w-5 h-5 rounded-full bg-brand-green/20 border border-brand-green/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-brand-green" />
                  </div>
                  <span className="leading-relaxed text-brand-mint font-semibold">
                    {row.focusDefend}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Comparison Cards (Optimized for 360px-768px screens) */}
        <div className="md:hidden space-y-4 max-w-lg mx-auto">
          {comparisonData.map((row, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-5 border border-white/10 space-y-3"
            >
              {/* Row Counter */}
              <div className="flex items-center justify-between text-[11px] font-mono text-brand-darkMuted pb-2 border-b border-white/5">
                <span>Comparison Point 0{idx + 1}</span>
                <span className="text-brand-green font-semibold">FocusDefend Model</span>
              </div>

              {/* Traditional */}
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-brand-surface/40 border border-white/5">
                <div className="w-5 h-5 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 text-rose-400" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-brand-darkMuted">Traditional restrictive approach</p>
                  <p className="text-xs text-brand-muted mt-0.5">{row.traditional}</p>
                </div>
              </div>

              {/* FocusDefend */}
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-brand-green/10 border border-brand-green/30">
                <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-brand-green" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-brand-green font-semibold">FocusDefend approach</p>
                  <p className="text-xs text-white font-semibold mt-0.5">{row.focusDefend}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Educational Philosophy Quote */}
        <div className="mt-14 p-6 rounded-2xl bg-brand-surface/30 border border-white/10 text-center max-w-2xl mx-auto flex items-center justify-center gap-3">
          <Sparkles className="w-5 h-5 text-brand-green shrink-0" />
          <p className="text-sm text-brand-muted italic">
            "When students learn that digital screen time is an earned reward rather than an arbitrary boundary, digital habits transform naturally."
          </p>
        </div>

      </div>
    </section>
  );
};

