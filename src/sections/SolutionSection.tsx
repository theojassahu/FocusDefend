import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { 
  ShieldCheck, 
  Coins, 
  HelpCircle, 
  BookOpen, 
  Users, 
  BrainCircuit, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
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
      className="py-24 md:py-32 relative bg-brand-deep/60 border-t border-white/5 overflow-hidden"
    >
      {/* Background illumination */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="A BETTER APPROACH"
          title="Don't just block screen time. Make it meaningful."
          description="FocusDefend bridges the divide between parental oversight and student autonomy by transforming everyday friction into constructive learning milestones."
        />

        {/* Cinematic Transformation Storytelling: Image 3 (Turn Distraction into Discipline) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 glass-panel rounded-card overflow-hidden border border-brand-green/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative"
        >
          {/* Subtle emerald glow wrapper */}
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-brand-green/20 blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
            {/* Left 7 Columns: Independent 16:9 Responsive Image Container */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-brand-midnight border border-white/10 shadow-2xl group">
                <img
                  src="/assets/cinematic/image-3-turn-distraction-discipline.jpg"
                  alt="FocusDefend Positive Transformation — Student studying with locked apps arc and disciplined learning mindset"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

                {/* Discrete Story Pill */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-midnight/85 border border-brand-green/40 text-[11px] font-mono text-brand-green backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                  <span>The Transformation Phase</span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Narrative Transformation Walkthrough */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-mono border border-brand-green/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Habit Loop</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Turning App Resistance Into Academic Curiosity
              </h3>

              <p className="text-sm text-brand-muted leading-relaxed">
                When students attempt to open recreational apps during designated study blocks, FocusDefend intercepts the launch. Instead of a dead-end blocker, it offers an immediate, bite-sized curriculum opportunity.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-brand-muted">
                    <strong className="text-white">Active Participation:</strong> Students earn their recreational privileges through proven effort.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-brand-muted">
                    <strong className="text-white">Continuous Revision:</strong> Bite-sized quizzes reinforce NCERT concepts throughout the day.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-brand-muted">
                    <strong className="text-white">Equitable Balance:</strong> Screen time is enjoyed with peace of mind after goals are achieved.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-green hover:text-brand-mint transition-colors"
                >
                  <span>Explore Learn-Earn-Unlock Mechanism</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 6 Key Pillars Grid with Staggered Motion */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
