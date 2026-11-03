import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { PhoneOff, ShieldAlert, Target, AlertTriangle } from 'lucide-react';
import { problemData } from '../data/features';

export const ProblemSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'SmartphoneOff':
      case 'PhoneOff':
        return <PhoneOff className="w-6 h-6 text-amber-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-rose-400" />;
      case 'Target':
        return <Target className="w-6 h-6 text-sky-400" />;
      default:
        return <AlertTriangle className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section
      id="problem"
      aria-label="The Digital Challenge"
      className="py-24 md:py-32 relative bg-brand-midnight border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="THE DIGITAL CHALLENGE"
          title="Technology is everywhere. But is it helping students grow?"
          description="Most screen-time tools treat students as adversaries by blindly shutting off devices. This leads to constant family tension without fostering responsible digital self-discipline."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {problemData.map((item, index) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover rounded-card p-8 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Card Accent Number */}
              <div className="absolute top-6 right-6 font-mono text-xs text-white/20 font-bold">
                0{index + 1}
              </div>

              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-brand-muted leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-xs font-mono uppercase tracking-wider text-brand-darkMuted mb-1">
                  Observed Consequence
                </p>
                <p className="text-xs text-brand-muted/90 italic">
                  "{item.impact}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transitional Reflection Banner */}
        <div className="mt-14 max-w-4xl mx-auto p-6 rounded-2xl bg-brand-surface/40 border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">
              The Fundamental Core Issue
            </h4>
            <p className="text-xs text-brand-muted mt-0.5">
              Locking screens teaches students how to wait for timers—not how to prioritize focus.
            </p>
          </div>
          <a
            href="#solution"
            className="px-4 py-2 rounded-btn bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-brand-green whitespace-nowrap transition-colors"
          >
            See Our Solution →
          </a>
        </div>
      </div>
    </section>
  );
};
