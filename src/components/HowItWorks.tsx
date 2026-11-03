import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { 
  BookOpen, 
  CheckCircle2, 
  Coins, 
  Unlock, 
  ArrowRight, 
  Sparkles, 
  ChevronRight
} from 'lucide-react';
import { howItWorksSteps } from '../data/features';

export const HowItWorks: React.FC = () => {
  const [activeStage, setActiveStage] = useState<'learn' | 'earn' | 'unlock'>('learn');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const stages = [
    {
      id: 'learn' as const,
      name: 'LEARN',
      tagline: 'Curriculum Study & NCERT Modules',
      badge: 'Step 1: Educational Focus',
      icon: BookOpen,
      desc: 'Students access educational material, including supported NCERT learning resources, interactive chapters, and subject revision blocks.',
      action: 'Engage with structured syllabus topics in a distraction-free environment.',
      demo: {
        title: 'NCERT Science · Chapter 4 Active',
        metric: '25 Min Focus Session',
        status: 'Curriculum Reading In Progress',
        credits: '+0 (Session Active)'
      }
    },
    {
      id: 'earn' as const,
      name: 'EARN',
      tagline: 'Verified Knowledge & Credit Accrual',
      badge: 'Step 2 & 3: Credit Minting',
      icon: Coins,
      desc: 'Students complete quizzes and learning activities. Verified comprehension converts study effort directly into redeemable Focus Credits.',
      action: 'Objective and conceptual challenges evaluate retention before credits are disbursed.',
      demo: {
        title: 'Quiz Comprehension: 4/4 Correct',
        metric: '+25 Focus Credits Minted',
        status: 'Academic Effort Verified',
        credits: 'Total Balance: 60 Credits'
      }
    },
    {
      id: 'unlock' as const,
      name: 'UNLOCK',
      tagline: 'Family-Permitted Screen Time',
      badge: 'Step 4: Controlled Recreation',
      icon: Unlock,
      desc: 'Eligible Focus Credits can unlock permitted recreational apps and games within family-configured schedules and guardrails.',
      action: 'When the earned time allowance expires, family restrictions automatically resume.',
      demo: {
        title: 'YouTube & WhatsApp Unlocked',
        metric: '15:00 Time Allowance Active',
        status: 'Family Rule Guardrails Active',
        credits: '-20 Credits Redeemed'
      }
    }
  ];

  const currentStageData = stages.find((s) => s.id === activeStage) || stages[0];

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
      className="py-24 md:py-32 relative bg-brand-midnight border-t border-white/5 overflow-hidden"
    >
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-green/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="CORE MECHANISM"
          title="Learn. Earn. Unlock."
          description="A transparent 4-stage progression that converts academic effort into tangible rewards, establishing lifelong digital self-control."
        />

        {/* 1. Animated Three-Stage Mechanism (LEARN → EARN → UNLOCK) */}
        <div className="mb-20 glass-panel rounded-card p-6 sm:p-10 border border-brand-green/30 relative overflow-hidden backdrop-blur-xl">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-green flex items-center gap-1.5 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                Animated 3-Stage Mechanism
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-1">
                The Habit Progression Loop
              </h3>
            </div>
            <span className="text-[11px] font-mono text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              *Illustrative Demonstration
            </span>
          </div>

          {/* Interactive Three Cards Connected by Animated Progress Line */}
          <div className="py-8 relative">
            {/* Animated Connecting Line on Desktop */}
            <div className="hidden md:block absolute top-[52px] left-16 right-16 h-1 bg-white/10 z-0 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-green via-emerald-300 to-brand-mint"
                initial={{ width: '0%' }}
                animate={{
                  width: activeStage === 'learn' ? '25%' : activeStage === 'earn' ? '65%' : '100%'
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              {stages.map((st, idx) => {
                const isSelected = activeStage === st.id;
                const Icon = st.icon;

                return (
                  <motion.button
                    key={st.id}
                    onClick={() => {
                      setActiveStage(st.id);
                      setActiveStepIndex(idx === 0 ? 0 : idx === 1 ? 2 : 3);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`text-left p-6 rounded-2xl transition-all duration-300 cursor-pointer border flex flex-col justify-between ${
                      isSelected
                        ? 'bg-brand-surfaceHover border-brand-green shadow-glow-sm'
                        : 'bg-brand-surface/70 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div>
                      {/* Top indicator & icon */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm transition-colors ${
                          isSelected
                            ? 'bg-brand-green text-brand-midnight shadow-md'
                            : 'bg-brand-midnight text-brand-muted border border-white/10'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xs font-bold text-brand-green px-2.5 py-1 rounded-full bg-brand-green/10 border border-brand-green/20">
                          STAGE 0{idx + 1}
                        </span>
                      </div>

                      <h4 className="text-xl font-extrabold text-white tracking-wide">
                        {st.name}
                      </h4>
                      <p className="text-xs font-mono text-brand-mint mt-0.5">
                        {st.tagline}
                      </p>

                      <p className="text-xs text-brand-muted leading-relaxed mt-3">
                        {st.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-brand-darkMuted">
                      <span>{isSelected ? 'Currently Selected' : 'Click to inspect'}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-brand-green' : ''}`} />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Stage Explanation & Illustrative Transition Simulator */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl bg-brand-midnight/90 border border-brand-green/30 grid md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-7 space-y-2 text-left">
                <span className="text-[11px] font-mono text-brand-green uppercase tracking-wider block font-bold">
                  {currentStageData.badge}
                </span>
                <h4 className="text-lg font-bold text-white">
                  {currentStageData.name}: {currentStageData.tagline}
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {currentStageData.action}
                </p>
              </div>

              {/* Illustrative Focus Credits & Unlocking Demonstration Card */}
              <div className="md:col-span-5 p-4 rounded-xl bg-brand-surface border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/5">
                  <span className="text-white font-semibold">Stage Simulation</span>
                  <span className="text-brand-green">{currentStageData.demo.credits}</span>
                </div>
                <p className="text-xs font-bold text-white">
                  {currentStageData.demo.title}
                </p>
                <div className="flex items-center justify-between text-[11px] text-brand-muted">
                  <span>{currentStageData.demo.metric}</span>
                  <span className="text-brand-mint font-mono">{currentStageData.demo.status}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* 2. Complete 4-Step Technical Progression Sequence (Preserving all tests & specs) */}
        <div className="hidden lg:block relative mb-16">
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {howItWorksSteps.map((step, idx) => {
              const isActive = activeStepIndex === idx;

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
                        isActive
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

        {/* Step Explorer Summary Footer */}
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
