import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, BookOpen, Award, Smartphone } from 'lucide-react';
import { 
  FloatingShield, 
  FloatingLockedApps, 
  FloatingProgress, 
  FloatingCreditsCard,
  FloatingSessionStatus
} from './FloatingElements';

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

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-[100dvh] pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden bg-brand-midnight"
    >
      {/* 1. Cinematic Full-Width Background Visual (Image 1: Student Studying with Green Shield) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Slow background zoom from 1.05 to 1.0 with smooth opacity reveal */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.55 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full relative"
        >
          <img
            src="/assets/cinematic/image-1-hero-study-shield.jpg"
            alt="FocusDefend Cinematic Hero — Student studying under protective green shield"
            className="w-full h-full object-cover object-[70%_center] lg:object-center"
          />
        </motion.div>

        {/* Sophisticated Dark Gradient Vignette for pristine text readability without obscuring the art */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-midnight via-brand-midnight/90 to-brand-midnight/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-transparent to-brand-midnight/70" />
        
        {/* Subtle Emerald Radial Illumination */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none opacity-25 bg-brand-green/20" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full blur-[130px] pointer-events-none opacity-20 bg-emerald-400/15" />
      </div>

      {/* Floating Decorative Elements Inspired by Imagery (Pointer-events-none, non-obtrusive) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 hidden xl:block">
        <FloatingShield className="absolute top-36 right-[38%]" />
        <FloatingLockedApps className="absolute bottom-32 right-12" />
        <FloatingProgress className="absolute top-44 left-10" />
        <FloatingCreditsCard className="absolute bottom-28 left-[45%]" />
        <FloatingSessionStatus className="absolute top-28 right-16" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Mission & Core Value Proposition */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* System Philosophy Pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-surface/90 border border-brand-green/30 text-xs font-mono tracking-widest uppercase text-brand-mint shadow-surface-inner backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>LEARN → EARN → UNLOCK</span>
            </motion.div>

            {/* Logo Fade & Scale Entrance */}
            <motion.div variants={logoVariants} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-green/40 p-1.5 flex items-center justify-center shadow-glow-sm">
                <img
                  src="/assets/logo/focusdefend-logo.png"
                  alt="FocusDefend Shield & Learning Book Emblem"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/logo.jpg';
                  }}
                />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-sans">
                FocusDefend
              </span>
              <span className="text-[11px] font-mono uppercase text-brand-green bg-brand-green/10 px-2 py-0.5 rounded border border-brand-green/20">
                Digital Wellbeing
              </span>
            </motion.div>

            {/* Staggered Main Headline */}
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
            >
              YOUR FOCUS.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-emerald-300 to-white">
                YOUR FUTURE.
              </span>
            </motion.h1>

            {/* Supporting Headline Slide-up */}
            <motion.p 
              variants={itemVariants} 
              className="text-xl sm:text-2xl font-semibold text-white/90 leading-snug"
            >
              Technology should help students grow, not distract them from their potential.
            </motion.p>

            {/* Supporting Description Slide-up */}
            <motion.p 
              variants={itemVariants} 
              className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-xl"
            >
              FocusDefend transforms digital habits through intelligent app restrictions, learning-based rewards, and AI-powered digital wellbeing.
            </motion.p>

            {/* CTA Buttons with slight stagger */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExplore}
                className="px-7 py-4 rounded-btn bg-brand-green hover:bg-brand-emerald text-brand-midnight font-extrabold text-sm sm:text-base tracking-wide transition-all duration-200 shadow-glow-sm hover:shadow-glow-md hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2.5 cursor-pointer"
              >
                <span>Explore FocusDefend</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              <a
                href="#how-it-works"
                className="px-6 py-4 rounded-btn bg-brand-surface/90 hover:bg-brand-surfaceHover text-white font-semibold text-sm sm:text-base border border-white/10 transition-all duration-200 inline-flex items-center gap-2 hover:border-brand-green/30 backdrop-blur-md"
              >
                <span>Discover How It Works</span>
              </a>
            </motion.div>

            {/* Value Trust Points */}
            <motion.div variants={itemVariants} className="pt-6 grid grid-cols-3 gap-3 border-t border-white/10 max-w-lg">
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
            </motion.div>
          </motion.div>

          {/* Right Column: Cinematic 3-Frame Narrative Interactive Card */}
          <motion.div 
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative glass-panel rounded-card p-6 sm:p-8 border border-white/15 shadow-2xl overflow-hidden backdrop-blur-xl">
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
          </motion.div>

        </div>
      </div>

      {/* Subtle Scroll Indicator with smooth motion */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-20 w-full flex flex-col items-center justify-center pt-8 text-brand-muted/70 hover:text-brand-green transition-colors"
      >
        <a
          href="#problem"
          className="flex flex-col items-center gap-1.5 focus:outline-none group cursor-pointer"
          aria-label="Scroll to Problem Section"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">The Digital Challenge</span>
          <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-brand-green" />
        </a>
      </motion.div>
    </section>
  );
};
