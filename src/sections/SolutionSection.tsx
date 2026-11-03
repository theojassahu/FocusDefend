import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { 
  ShieldCheck, 
  Coins, 
  HelpCircle, 
  BookOpen, 
  Users, 
  BrainCircuit, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Intelligent Restrictions',
      description: 'App launches during dedicated focus blocks are natively paused without battery-draining continuous polls.',
    },
    {
      icon: BookOpen,
      title: 'Learning-Based Rewards',
      description: 'Educational modules incentivize progress by turning study completion into earned recreational allowances.',
    },
    {
      icon: HelpCircle,
      title: 'Educational Quizzes',
      description: 'Standardized curriculum quizzes (including NCERT) verify that students truly grasp the material before unlocking screen time.',
    },
    {
      icon: Coins,
      title: 'Focus Credits',
      description: 'A transparent digital currency earned through study sessions and redeemed for family-approved screen time.',
    },
    {
      icon: Users,
      title: 'Parental Supervision',
      description: 'Clear visibility into daily learning habits and effortless one-tap Quick Approvals for school project exceptions.',
    },
    {
      icon: BrainCircuit,
      title: 'AI Wellbeing Insights',
      description: 'On-device telemetry spots fatigue and peak distraction patterns to recommend balanced study schedules.',
    },
  ];

  return (
    <section
      id="solution"
      aria-label="Introducing FocusDefend"
      className="py-24 md:py-32 relative bg-brand-deep/60 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="A BETTER APPROACH"
          title="Don't just block screen time. Make it meaningful."
          description="FocusDefend bridges the divide between parental oversight and student autonomy by transforming everyday friction into constructive learning milestones."
        />

        {/* Central Core Architecture Visual Showcase */}
        <div className="mb-20 glass-panel rounded-card p-8 md:p-12 border border-white/10 relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* High-Impact Product Visual Showcase with Genuine Brand Emblem */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-[32px] bg-brand-surface/90 p-6 border border-white/15 shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
                
                {/* Glow backdrop */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-3xl bg-brand-green/20 pointer-events-none" />

                {/* Authentic FocusDefend Emblem */}
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-brand-midnight/90 border border-brand-green/40 p-4 shadow-glow-md relative mb-5 transition-transform hover:scale-105 duration-300">
                  <img
                    src="/assets/logo/focusdefend-logo.png"
                    alt="FocusDefend Shield & Learning Book Emblem"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/logo.jpg';
                    }}
                  />
                </div>

                <div className="space-y-1.5 relative z-10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-green bg-brand-green/10 px-2.5 py-1 rounded-full border border-brand-green/30">
                    LEARN → EARN → UNLOCK
                  </span>
                  <h4 className="text-lg font-bold text-white pt-1">
                    The Habit Transformation Engine
                  </h4>
                  <p className="text-xs text-brand-muted max-w-xs leading-relaxed">
                    Turns everyday app resistance into structured curriculum learning and earned screen-time rewards.
                  </p>
                </div>

                {/* Workflow summary pill */}
                <div className="mt-5 w-full grid grid-cols-3 gap-2 pt-4 border-t border-white/10 text-center font-mono text-[10px]">
                  <div className="p-2 rounded-lg bg-brand-deep border border-white/5">
                    <span className="text-brand-darkMuted block">1. LEARN</span>
                    <span className="text-white font-semibold">NCERT Topics</span>
                  </div>
                  <div className="p-2 rounded-lg bg-brand-deep border border-white/5">
                    <span className="text-brand-darkMuted block">2. EARN</span>
                    <span className="text-brand-green font-semibold">Focus Credits</span>
                  </div>
                  <div className="p-2 rounded-lg bg-brand-deep border border-white/5">
                    <span className="text-brand-darkMuted block">3. UNLOCK</span>
                    <span className="text-brand-mint font-semibold">Screen Time</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Narrative Explanation */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-mono border border-brand-green/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Habit Loop</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Turning App Resistance Into Academic Curiosity
              </h3>

              <p className="text-brand-muted leading-relaxed">
                When students attempt to open distracting apps during designated revision hours, FocusDefend intercepts the launch. Instead of a dead-end blocker, it offers an immediate, bite-sized curriculum opportunity.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm text-brand-muted">
                    <strong className="text-white">Active Participation:</strong> Students feel in control of their earned time rather than restricted by force.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm text-brand-muted">
                    <strong className="text-white">Continuous Revision:</strong> Bite-sized quizzes reinforce school concepts throughout the day.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm text-brand-muted">
                    <strong className="text-white">Equitable Balance:</strong> Recreational screen time is rewarded after genuine academic effort.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="glass-panel glass-panel-hover rounded-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-green mb-4">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
