import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { 
  BarChart3, 
  AlertCircle, 
  Brain, 
  Sparkles, 
  TrendingUp, 
  ShieldAlert, 
  Lock, 
  Cpu 
} from 'lucide-react';
import { aiCapabilities } from '../data/features';

export const AISection: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5" />;
      case 'AlertCircle':
        return <AlertCircle className="w-5 h-5" />;
      case 'Brain':
        return <Brain className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="ai-insights"
      aria-label="AI Digital Wellbeing"
      className="py-24 md:py-32 relative bg-brand-midnight border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="INTELLIGENCE WITH PURPOSE"
          title="Understand digital habits. Build better ones."
          description="FocusDefend applies privacy-preserving on-device intelligence to translate device telemetry into constructive study recommendations—without invading personal boundaries."
        />

        {/* Interactive AI Telemetry Dashboard Preview */}
        <div className="mb-16 glass-panel rounded-card p-6 md:p-10 border border-white/10 relative overflow-hidden">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
                <h3 className="text-xl font-bold text-white tracking-tight">
                  FocusDefend On-Device Habit Intelligence
                </h3>
              </div>
              <p className="text-xs text-brand-muted mt-0.5">
                Local telemetry stream analyzing foreground duration &amp; retention continuity
              </p>
            </div>

            {/* Illustrative Label Requirement */}
            <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-[11px] font-mono border border-amber-400/20 shrink-0">
              *Sample Analytics (Illustrative Preview)
            </span>
          </div>

          {/* Interactive Metric Cards (Explicitly Labelled as Illustrative) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
            <div className="p-4 rounded-2xl bg-brand-deep border border-white/5 space-y-1">
              <span className="text-[10px] font-mono uppercase text-brand-darkMuted">Sample Habit Trend (Illustrative)</span>
              <p className="text-2xl font-extrabold text-brand-green">Progressive Gain</p>
              <p className="text-xs text-brand-muted">Shifted time from passive distraction to active NCERT study</p>
            </div>

            <div className="p-4 rounded-2xl bg-brand-deep border border-white/5 space-y-1">
              <span className="text-[10px] font-mono uppercase text-brand-darkMuted">Prime Learning Slot (Illustrative)</span>
              <p className="text-2xl font-extrabold text-white">5:00 - 7:00 PM</p>
              <p className="text-xs text-brand-muted">Consistent study block identified before evening dinner</p>
            </div>

            <div className="p-4 rounded-2xl bg-brand-deep border border-white/5 space-y-1">
              <span className="text-[10px] font-mono uppercase text-brand-darkMuted">Habit Consistency (Illustrative)</span>
              <p className="text-2xl font-extrabold text-sky-400">High Stability</p>
              <p className="text-xs text-brand-muted">Bedtime quiet hours observed consistently across school week</p>
            </div>

            <div className="p-4 rounded-2xl bg-brand-deep border border-white/5 space-y-1">
              <span className="text-[10px] font-mono uppercase text-brand-darkMuted">Sample Credit Yield (Illustrative)</span>
              <p className="text-2xl font-extrabold text-brand-mint">Earned Daily</p>
              <p className="text-xs text-brand-muted">Directly unlocked via completed curriculum quizzes</p>
            </div>
          </div>

          {/* Habit Simulator / Capability Selector */}
          <div className="pt-6 border-t border-white/10 grid lg:grid-cols-12 gap-8 items-center">
            {/* List of 5 Features */}
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-mono uppercase text-brand-green tracking-wider block mb-2">
                Core AI Capabilities
              </span>
              {aiCapabilities.map((cap, i) => (
                <button
                  key={cap.id}
                  onClick={() => setSelectedFeature(i)}
                  className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer flex items-center justify-between border ${
                    selectedFeature === i
                      ? 'bg-brand-surface border-brand-green/40 shadow-sm text-white font-bold'
                      : 'bg-transparent border-transparent text-brand-muted hover:bg-brand-surface/40 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={selectedFeature === i ? 'text-brand-green' : 'text-brand-darkMuted'}>
                      {getIcon(cap.icon)}
                    </span>
                    <span className="text-xs sm:text-sm">{cap.title}</span>
                  </div>
                  <span className="text-[10px] font-mono text-brand-darkMuted">0{i + 1}</span>
                </button>
              ))}
            </div>

            {/* Feature Active Detail */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-brand-surface/60 border border-brand-green/20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-brand-green">
                  {aiCapabilities[selectedFeature].tagline}
                </span>
                <span className="text-xs font-mono text-brand-mint bg-brand-green/10 px-2 py-0.5 rounded border border-brand-green/20">
                  {aiCapabilities[selectedFeature].metricLabel}: {aiCapabilities[selectedFeature].metricValue}
                </span>
              </div>

              <h4 className="text-2xl font-bold text-white">
                {aiCapabilities[selectedFeature].title}
              </h4>

              <p className="text-sm text-brand-muted leading-relaxed">
                {aiCapabilities[selectedFeature].description}
              </p>

              <div className="p-3 rounded-xl bg-brand-midnight/90 border border-white/10 text-xs font-mono text-brand-muted flex items-center gap-2">
                <Lock className="w-4 h-4 text-brand-green shrink-0" />
                <span>Zero Private Content Scanning · Local Usage Statistics Only</span>
              </div>
            </div>
          </div>
        </div>

        {/* Explicit Privacy & Responsible AI Safeguard Note */}
        <div className="p-6 rounded-2xl bg-brand-surface/30 border border-white/10 max-w-4xl mx-auto flex items-start gap-4">
          <ShieldAlert className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">
              Ethical AI &amp; Transparent Safety Boundary
            </h4>
            <p className="text-xs text-brand-muted leading-relaxed">
              FocusDefend is engineered with strict ethical guardrails. Our AI models analyze foreground timestamps and study continuity only. FocusDefend <strong className="text-white">does NOT</strong> read private WhatsApp/SMS messages, inspect in-app chat contents, capture browser keystrokes, or diagnose clinical behavioral disorders.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
