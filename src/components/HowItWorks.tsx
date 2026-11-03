import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { BookOpen, CheckCircle2, Coins, Unlock, ArrowRight } from 'lucide-react';
import { howItWorksSteps } from '../data/features';

export const HowItWorks: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5" />;
      case 'Coins':
        return <Coins className="w-5 h-5" />;
      case 'Unlock':
        return <Unlock className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="how-it-works"
      aria-label="How It Works"
      className="py-24 md:py-32 relative bg-brand-midnight border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CORE MECHANISM"
          title="Learn. Earn. Unlock."
          description="A transparent 4-stage progression that converts academic effort into tangible rewards, establishing lifelong digital self-control."
        />

        {/* Desktop Horizontal Workflow */}
        <div className="hidden lg:block relative mb-16">
          {/* Connecting Progress Line */}
          <div className="absolute top-1/2 left-12 right-12 -translate-y-8 h-0.5 bg-white/10 z-0">
            <div
              className="h-full bg-gradient-to-r from-brand-green to-emerald-400 transition-all duration-500"
              style={{ width: `${(activeStepIndex / 3) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {howItWorksSteps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const isPast = activeStepIndex > idx;

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`glass-panel rounded-card p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? 'border-brand-green/60 shadow-glow-sm bg-brand-surfaceHover scale-105'
                      : 'hover:border-white/20'
                  }`}
                >
                  <div>
                    {/* Header with Step Number & Status Indicator */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold border transition-colors ${
                        isActive || isPast
                          ? 'bg-brand-green text-brand-midnight border-brand-green'
                          : 'bg-brand-surface text-brand-muted border-white/10'
                      }`}>
                        {step.step}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-brand-green/90 bg-brand-green/10 px-2 py-0.5 rounded border border-brand-green/20">
                        {step.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs text-brand-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-brand-darkMuted">
                    {getStepIcon(step.icon)}
                    <span className="text-[11px] truncate">{step.detail}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-6 relative">
          <div className="absolute top-6 bottom-6 left-6 w-0.5 bg-brand-green/20" />

          {howItWorksSteps.map((step, idx) => (
            <div
              key={step.step}
              className="relative pl-14"
            >
              <div className="absolute left-3 top-4 -translate-x-1/2 w-7 h-7 rounded-full bg-brand-midnight border-2 border-brand-green text-brand-green flex items-center justify-center text-xs font-mono font-bold shadow-sm">
                {idx + 1}
              </div>

              <div className="glass-panel rounded-2xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase text-brand-green">
                    Stage {step.step} · {step.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed mb-3">
                  {step.description}
                </p>
                <div className="p-2.5 rounded-lg bg-brand-deep text-[11px] text-brand-muted border border-white/5 flex items-center gap-2">
                  {getStepIcon(step.icon)}
                  <span>{step.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Step Explorer Card */}
        <div className="mt-12 glass-panel rounded-card p-6 sm:p-8 border border-brand-green/20 bg-brand-surface/40">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-brand-green">
                Stage {howItWorksSteps[activeStepIndex].step} Deep Dive
              </span>
              <h4 className="text-xl font-bold text-white mt-1">
                {howItWorksSteps[activeStepIndex].title}: {howItWorksSteps[activeStepIndex].badge}
              </h4>
              <p className="text-sm text-brand-muted mt-1 max-w-2xl">
                {howItWorksSteps[activeStepIndex].detail}
              </p>
            </div>
            
            <button
              onClick={() => setActiveStepIndex((prev) => (prev < 3 ? prev + 1 : 0))}
              className="px-4 py-2.5 rounded-btn bg-brand-surface hover:bg-brand-surfaceHover border border-white/10 text-xs font-semibold text-white flex items-center gap-2 transition-colors cursor-pointer shrink-0"
            >
              <span>{activeStepIndex < 3 ? 'Inspect Next Stage' : 'Loop to Stage 1'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-green" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
