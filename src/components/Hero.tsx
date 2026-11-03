import React, { useState } from 'react';
import { ArrowRight, ChevronDown, BookOpen, Award, Smartphone } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  // 3-step continuous narrative state
  const [activeFrame, setActiveFrame] = useState<number>(0);

  const narrativeFrames = [
    {
      stage: 'Stage 1 · Opening',
      badge: 'Digital Distraction',
      badgeColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
      title: 'Student experiencing digital distraction',
      description: 'Social feeds and gaming alerts compete for attention, fragmenting focus during critical study blocks.',
      visualIcon: Smartphone,
      accentColor: '#F59E0B',
      indicator: 'Continuous distraction loop',
      previewCard: {
        header: 'Recreational Apps Intercepted',
        status: 'Unplanned Launch Detected',
        stateLabel: 'Attention Fragmented',
        sub: 'Recreational alerts pull attention during study windows'
      }
    },
    {
      stage: 'Stage 2 · Middle',
      badge: 'FocusDefend Intervention',
      badgeColor: 'text-brand-green bg-brand-green/10 border-brand-green/30',
      title: 'FocusDefend intervenes & encourages learning',
      description: 'Instead of an adversarial roadblock, FocusDefend presents a constructive NCERT curriculum challenge.',
      visualIcon: BookOpen,
      accentColor: '#39D98A',
      indicator: 'Screen time redirected to study',
      previewCard: {
        header: 'NCERT Curriculum Module',
        status: 'Knowledge Check Challenge',
        stateLabel: 'Earn Focus Credits',
        sub: 'Complete educational challenge to unlock recreational screen time'
      }
    },
    {
      stage: 'Stage 3 · Ending',
      badge: 'Healthier Habits',
      badgeColor: 'text-emerald-300 bg-emerald-400/10 border-emerald-400/30',
      title: 'Student studying with healthier digital habits',
      description: 'Curriculum questions completed. Focus Credits earned. Recreational screen time enjoyed with balanced peace of mind.',
      visualIcon: Award,
      accentColor: '#20B978',
      indicator: 'Intrinsic digital discipline formed',
      previewCard: {
        header: 'Knowledge Verified',
        status: 'Permitted Screen Time Unlocked',
        stateLabel: 'Balanced Habits',
        sub: 'Configured family restrictions resume automatically upon expiry'
      }
    }
  ];

  const current = narrativeFrames[activeFrame];

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-[100dvh] pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden"
    >
      {/* Background illumination & grid effect */}
      <div className="absolute inset-0 radial-glow-hero pointer-events-none" />
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none opacity-20 bg-brand-green/20"
        aria-hidden="true"
      />
      <div 
        className="absolute -top-32 right-10 w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none opacity-15 bg-emerald-500/15"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Mission & Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* System Philosophy Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-surface border border-white/10 text-xs font-mono tracking-widest uppercase text-brand-mint shadow-surface-inner">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>LEARN → EARN → UNLOCK</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              YOUR FOCUS.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-emerald-300 to-white">
                YOUR FUTURE.
              </span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-xl sm:text-2xl font-semibold text-white/90 leading-snug">
              Technology should help students grow, not distract them from their potential.
            </p>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-xl">
              FocusDefend transforms digital habits through intelligent app restrictions, learning-based rewards, and AI-powered digital wellbeing.
            </p>

            {/* Call To Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExplore}
                className="px-7 py-4 rounded-btn bg-brand-green hover:bg-brand-emerald text-brand-midnight font-extrabold text-sm sm:text-base tracking-wide transition-all duration-200 shadow-glow-sm hover:shadow-glow-md hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2.5 cursor-pointer"
              >
                <span>Explore FocusDefend</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              <a
                href="#how-it-works"
                className="px-6 py-4 rounded-btn bg-brand-surface hover:bg-brand-surfaceHover text-white font-semibold text-sm sm:text-base border border-white/10 transition-all duration-200 inline-flex items-center gap-2 hover:border-brand-green/30"
              >
                <span>Discover How It Works</span>
              </a>
            </div>

            {/* Value Trust Points */}
            <div className="pt-6 grid grid-cols-3 gap-3 border-t border-white/10 max-w-lg">
              <div>
                <p className="text-xs text-brand-darkMuted font-mono uppercase">Architecture</p>
                <p className="text-sm font-bold text-white mt-0.5">Native Android</p>
              </div>
              <div>
                <p className="text-xs text-brand-darkMuted font-mono uppercase">Curriculum</p>
                <p className="text-sm font-bold text-white mt-0.5">NCERT Ready</p>
              </div>
              <div>
                <p className="text-xs text-brand-darkMuted font-mono uppercase">Data Privacy</p>
                <p className="text-sm font-bold text-brand-green mt-0.5">On-Device Local</p>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic 3-Frame Narrative Interactive Card */}
          <div className="lg:col-span-5">
            <div className="relative glass-panel rounded-card p-6 sm:p-8 border border-white/15 shadow-2xl overflow-hidden">
              {/* Subtle card glow overlay */}
              <div 
                className="absolute top-0 right-0 w-44 h-44 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: current.accentColor }}
              />

              {/* Header with Stage Selection Tabs */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-brand-muted block">
                    Cinematic Product Journey
                  </span>
                  <span className="text-xs font-semibold text-white">
                    {current.stage}
                  </span>
                </div>
                
                {/* 3 Step Pill Buttons */}
                <div className="flex gap-1.5 p-1 bg-brand-deep rounded-full border border-white/10">
                  {narrativeFrames.map((frame, index) => (
                    <button
                      key={frame.stage}
                      onClick={() => setActiveFrame(index)}
                      className={`px-2.5 py-1 text-[11px] font-mono rounded-full transition-all cursor-pointer ${
                        activeFrame === index
                          ? 'bg-brand-green text-brand-midnight font-bold shadow-sm'
                          : 'text-brand-muted hover:text-white'
                      }`}
                      aria-label={`Show ${frame.stage}`}
                    >
                      0{index + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Narrative Frame Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${current.badgeColor}`}>
                    <current.visualIcon className="w-3.5 h-3.5" />
                    {current.badge}
                  </span>
                  <span className="text-xs text-brand-darkMuted font-mono">
                    {current.indicator}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight leading-snug">
                  {current.title}
                </h3>

                <p className="text-sm text-brand-muted leading-relaxed">
                  {current.description}
                </p>

                {/* Simulated Android Event Card */}
                <div className="mt-5 p-4 rounded-xl bg-brand-deep/90 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-brand-darkMuted uppercase text-[10px]">
                      {current.previewCard.header}
                    </span>
                    <span 
                      className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full"
                      style={{ 
                        backgroundColor: `${current.accentColor}20`,
                        color: current.accentColor,
                        border: `1px solid ${current.accentColor}40`
                      }}
                    >
                      {current.previewCard.stateLabel}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-white">
                    {current.previewCard.status}
                  </p>
                  <p className="text-xs text-brand-muted">
                    {current.previewCard.sub}
                  </p>
                </div>
              </div>

              {/* Step Navigation Dots & Narrative Controls */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-brand-muted">
                <span className="font-mono text-[11px]">
                  Frame {activeFrame + 1} of 3
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveFrame((prev) => (prev > 0 ? prev - 1 : 2))}
                    className="px-2.5 py-1 rounded bg-brand-surface border border-white/10 hover:text-white transition-colors cursor-pointer"
                  >
                    Prev
                  </button>
                  <button
                    onClick={() => setActiveFrame((prev) => (prev < 2 ? prev + 1 : 0))}
                    className="px-2.5 py-1 rounded bg-brand-green/20 text-brand-green border border-brand-green/30 hover:bg-brand-green/30 transition-colors cursor-pointer font-semibold"
                  >
                    Next Frame →
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center pt-8 text-brand-muted/70 hover:text-brand-green transition-colors">
        <a
          href="#problem"
          className="flex flex-col items-center gap-1.5 focus:outline-none group cursor-pointer"
          aria-label="Scroll to Problem Section"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">The Digital Challenge</span>
          <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-brand-green" />
        </a>
      </div>
    </section>
  );
};
