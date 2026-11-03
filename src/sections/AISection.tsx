import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { 
  BarChart3, 
  AlertCircle, 
  Brain, 
  Sparkles, 
  TrendingUp, 
  ShieldAlert, 
  Lock, 
  Cpu,
  CheckCircle2
} from 'lucide-react';
import { aiCapabilities } from '../data/features';

export const AISection: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [activeFilter, setActiveFilter] = useState<'weekday' | 'weekend'>('weekday');

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

  // Sample data points for SVG line chart drawing
  // Coordinates representing hourly activity across the day (9am to 9pm)
  const chartPathWeekday = "M 40 160 Q 120 180, 200 130 T 360 80 T 520 170 T 680 70 T 840 140";
  const chartPathWeekend = "M 40 140 Q 120 120, 200 160 T 360 140 T 520 100 T 680 60 T 840 120";

  return (
    <section
      id="ai-insights"
      aria-label="AI Digital Wellbeing"
      className="py-24 md:py-32 relative bg-brand-midnight border-t border-white/5 overflow-hidden"
    >
      {/* Background illumination */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="INTELLIGENCE WITH PURPOSE"
          title="Understand digital habits. Build better ones."
          description="FocusDefend applies privacy-preserving on-device intelligence to translate device telemetry into constructive study recommendations—without invading personal boundaries."
        />

        {/* 1. Animated Dashboard-Style Visual Demonstration */}
        <div className="mb-16 glass-panel rounded-card p-6 md:p-10 border border-brand-green/30 relative overflow-hidden backdrop-blur-xl">
          
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
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-[11px] font-mono border border-amber-400/20 shrink-0">
                *Sample Analytics (Illustrative Preview)
              </span>
            </div>
          </div>

          {/* Interactive Usage Chart with Animated SVG Drawing */}
          <div className="py-6 border-b border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-darkMuted block">
                  Telemetry Visualization Engine
                </span>
                <h4 className="text-sm font-bold text-white">
                  Diurnal Habit Rhythm &amp; Distraction Interception
                </h4>
              </div>

              {/* Day filter selector */}
              <div className="flex items-center gap-1.5 p-1 rounded-lg bg-brand-deep border border-white/10 self-start sm:self-auto font-mono text-[11px]">
                <button
                  onClick={() => setActiveFilter('weekday')}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                    activeFilter === 'weekday'
                      ? 'bg-brand-green text-brand-midnight font-bold shadow-sm'
                      : 'text-brand-muted hover:text-white'
                  }`}
                >
                  School Weekday
                </button>
                <button
                  onClick={() => setActiveFilter('weekend')}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                    activeFilter === 'weekend'
                      ? 'bg-brand-green text-brand-midnight font-bold shadow-sm'
                      : 'text-brand-muted hover:text-white'
                  }`}
                >
                  Weekend
                </button>
              </div>
            </div>

            {/* Animated SVG Chart Canvas */}
            <div className="relative w-full h-56 sm:h-64 bg-brand-deep/80 rounded-2xl border border-white/10 p-4 overflow-hidden">
              {/* Background Chart Grid */}
              <div className="absolute inset-x-4 top-4 bottom-8 flex flex-col justify-between pointer-events-none opacity-20">
                <div className="border-b border-white/20 w-full" />
                <div className="border-b border-white/20 w-full" />
                <div className="border-b border-white/20 w-full" />
              </div>

              {/* Suggested Study Period Highlight Band (5:00 - 7:00 PM) */}
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-4 bottom-8 left-[34%] right-[44%] bg-brand-green/15 border-x border-brand-green/40 rounded-lg flex flex-col justify-start p-2 pointer-events-none"
              >
                <span className="inline-flex items-center gap-1 text-[9px] font-mono text-brand-mint font-bold uppercase tracking-wider bg-brand-midnight/90 px-1.5 py-0.5 rounded border border-brand-green/30 self-start">
                  <CheckCircle2 className="w-2.5 h-2.5 text-brand-green" />
                  Suggested Study Window (5-7 PM)
                </span>
              </motion.div>

              {/* Distraction Period Highlight Band (8:00 - 9:30 PM) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute top-4 bottom-8 left-[68%] right-[10%] bg-amber-400/15 border-x border-amber-400/40 rounded-lg flex flex-col justify-start p-2 pointer-events-none"
              >
                <span className="inline-flex items-center gap-1 text-[9px] font-mono text-amber-300 font-bold uppercase tracking-wider bg-brand-midnight/90 px-1.5 py-0.5 rounded border border-amber-400/30 self-start">
                  <AlertCircle className="w-2.5 h-2.5 text-amber-400" />
                  Distraction Spike (Gaming / Feeds)
                </span>
              </motion.div>

              {/* Animated SVG Path Line */}
              <svg className="w-full h-full overflow-visible" viewBox="0 0 880 200" preserveAspectRatio="none">
                {/* Glow shadow line */}
                <motion.path
                  d={activeFilter === 'weekday' ? chartPathWeekday : chartPathWeekend}
                  fill="none"
                  stroke="rgba(57, 217, 138, 0.3)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                />
                {/* Main animated curve */}
                <motion.path
                  d={activeFilter === 'weekday' ? chartPathWeekday : chartPathWeekend}
                  fill="none"
                  stroke="#39D98A"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                />
              </svg>

              {/* Time axis labels */}
              <div className="absolute bottom-2 inset-x-4 flex justify-between font-mono text-[10px] text-brand-darkMuted border-t border-white/10 pt-1">
                <span>08:00 AM</span>
                <span>12:00 PM</span>
                <span>03:00 PM</span>
                <span className="text-brand-green font-bold">05:00 PM (Study)</span>
                <span className="text-amber-400 font-bold">08:30 PM (Peak Loop)</span>
                <span>10:00 PM</span>
              </div>
            </div>

            {/* Explanatory Legend */}
            <div className="flex flex-wrap items-center gap-4 pt-3 text-[11px] font-mono text-brand-muted">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-green" />
                Active Focus &amp; Learning Intensity
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                Unplanned Recreation Spike
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/30 border border-brand-green" />
                AI Recommended Study Window
              </span>
            </div>
          </div>

          {/* Metric Cards (Explicitly Labelled as Illustrative) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-4 rounded-2xl bg-brand-deep border border-white/5 space-y-1"
            >
              <span className="text-[10px] font-mono uppercase text-brand-darkMuted">Sample Habit Trend (Illustrative)</span>
              <p className="text-2xl font-extrabold text-brand-green">Progressive Gain</p>
              <p className="text-xs text-brand-muted">Shifted time from passive distraction to active NCERT study</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-4 rounded-2xl bg-brand-deep border border-white/5 space-y-1"
            >
              <span className="text-[10px] font-mono uppercase text-brand-darkMuted">Prime Learning Slot (Illustrative)</span>
              <p className="text-2xl font-extrabold text-white">5:00 - 7:00 PM</p>
              <p className="text-xs text-brand-muted">Consistent study block identified before evening dinner</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-4 rounded-2xl bg-brand-deep border border-white/5 space-y-1"
            >
              <span className="text-[10px] font-mono uppercase text-brand-darkMuted">Habit Consistency (Illustrative)</span>
              <p className="text-2xl font-extrabold text-sky-400">High Stability</p>
              <p className="text-xs text-brand-muted">Bedtime quiet hours observed consistently across school week</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-4 rounded-2xl bg-brand-deep border border-white/5 space-y-1"
            >
              <span className="text-[10px] font-mono uppercase text-brand-darkMuted">Sample Credit Yield (Illustrative)</span>
              <p className="text-2xl font-extrabold text-brand-mint">Earned Daily</p>
              <p className="text-xs text-brand-muted">Directly unlocked via completed curriculum quizzes</p>
            </motion.div>
          </div>

          {/* Habit Simulator / Capability Selector */}
          <div className="pt-6 border-t border-white/10 grid lg:grid-cols-12 gap-8 items-center">
            {/* List of 5 Features */}
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-mono uppercase text-brand-green tracking-wider block mb-2 font-bold">
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

            {/* Feature Active Detail Card with Animated Appearance */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFeature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="lg:col-span-7 p-6 rounded-2xl bg-brand-surface/60 border border-brand-green/20 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-brand-green font-semibold">
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
              </motion.div>
            </AnimatePresence>
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
