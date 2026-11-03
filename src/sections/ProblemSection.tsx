import React from 'react';
import { motion } from 'framer-motion';
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
      className="py-24 md:py-32 relative bg-brand-midnight border-t border-white/5 overflow-hidden"
    >
      {/* Background illumination */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="THE DIGITAL CHALLENGE"
          title="Technology is everywhere. But is it helping students grow?"
          description="Most screen-time tools treat students as adversaries by blindly shutting off devices. This leads to constant family tension without fostering responsible digital self-discipline."
        />

        {/* Cinematic Scroll Storytelling: Independent Visual Assets (Image 4 & Image 2) */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Story Asset 1: Image 4 (Student using phone with distracting social app icons) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-card bg-brand-surface border border-white/10 overflow-hidden shadow-2xl flex flex-col justify-between"
          >
            {/* 16:9 Aspect Ratio Container preserving authentic art */}
            <div className="relative w-full aspect-video overflow-hidden bg-brand-deep">
              <img
                src="/assets/cinematic/image-4-too-many-distractions.jpg"
                alt="FocusDefend Problem Storytelling — Student overwhelmed by continuous social feeds and notifications"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-black/20" />
              
              {/* Context Pill */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-midnight/80 border border-white/15 text-[11px] font-mono text-amber-300 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>Story Insight · The Distraction Trap</span>
              </div>
            </div>

            {/* Context Narrative Card */}
            <div className="p-6">
              <h4 className="text-base font-bold text-white mb-1.5">
                The Friction of Constant Notification Alerts
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Passive algorithmic loops pull student focus away from homework blocks, transforming planned study windows into hours of fragmented attention.
              </p>
            </div>
          </motion.div>

          {/* Story Asset 2: Image 2 (Student distracted by smartphone with FocusDefend branding) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-card bg-brand-surface border border-white/10 overflow-hidden shadow-2xl flex flex-col justify-between"
          >
            {/* 16:9 Aspect Ratio Container preserving authentic art */}
            <div className="relative w-full aspect-video overflow-hidden bg-brand-deep">
              <img
                src="/assets/cinematic/image-2-distraction-branding.jpg"
                alt="FocusDefend Digital Distraction — Student facing social app temptation and needing constructive focus guidance"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-black/20" />

              {/* Context Pill */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-midnight/80 border border-brand-green/30 text-[11px] font-mono text-brand-green backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                <span>Story Insight · Building Real Focus</span>
              </div>
            </div>

            {/* Context Narrative Card */}
            <div className="p-6">
              <h4 className="text-base font-bold text-white mb-1.5">
                From Reactive Scrolling to Intentional Control
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                When students are met with intelligent boundaries rather than blunt lockouts, they learn to navigate temptations and rebuild self-discipline.
              </p>
            </div>
          </motion.div>

        </div>

        {/* 3 Core Problem Cards with Staggered Motion */}
        <div className="grid md:grid-cols-3 gap-8">
          {problemData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
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
            </motion.div>
          ))}
        </div>

        {/* Transitional Reflection Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 max-w-4xl mx-auto p-6 rounded-2xl bg-brand-surface/40 border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md"
        >
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
        </motion.div>
      </div>
    </section>
  );
};
