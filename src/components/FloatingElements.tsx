import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Coins, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

// 1. Floating Green Shield Symbol
export const FloatingShield: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [0, -10, 0],
      rotate: [0, 1.5, 0]
    }}
    transition={{
      y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
      rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
      opacity: { duration: 0.8 }
    }}
    className={`pointer-events-none select-none inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-surface/90 border border-brand-green/40 shadow-glow-sm backdrop-blur-md ${className}`}
  >
    <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
      <Shield className="w-3.5 h-3.5" />
    </div>
    <span className="font-mono text-xs font-bold text-white tracking-wide">
      FocusDefend Shield
    </span>
    <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
  </motion.div>
);

// 2. Floating Locked Application Symbols (inspired by supplied imagery icons)
export const FloatingLockedApps: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ 
      opacity: 1, 
      x: 0,
      y: [0, -8, 0],
    }}
    transition={{
      y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
      duration: 0.9
    }}
    className={`pointer-events-none select-none flex flex-col gap-2 p-2.5 rounded-2xl bg-brand-midnight/90 border border-white/10 shadow-2xl backdrop-blur-lg ${className}`}
  >
    <div className="text-[10px] font-mono text-brand-darkMuted uppercase px-1 pb-1 border-b border-white/5 flex items-center justify-between gap-3">
      <span>Restricted Queue</span>
      <Lock className="w-3 h-3 text-brand-green" />
    </div>
    <div className="flex items-center gap-2">
      {/* App Icons with Padlocks */}
      {[
        { name: 'Instagram', bg: 'bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600', icon: 'IG' },
        { name: 'YouTube', bg: 'bg-red-600', icon: 'YT' },
        { name: 'WhatsApp', bg: 'bg-emerald-600', icon: 'WA' },
        { name: 'Games', bg: 'bg-indigo-600', icon: '🎮' }
      ].map((app) => (
        <div key={app.name} className="relative group" title={`${app.name} (Credit Locked)`}>
          <div className={`w-8 h-8 rounded-xl ${app.bg} flex items-center justify-center text-[10px] font-bold text-white shadow-inner`}>
            {app.icon}
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-midnight border border-brand-green/60 flex items-center justify-center text-brand-green">
            <Lock className="w-2.5 h-2.5 stroke-[2.5]" />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

// 3. Floating Study Progress Indicator
export const FloatingProgress: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [0, -9, 0]
    }}
    transition={{
      y: { duration: 6.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
      duration: 0.8
    }}
    className={`pointer-events-none select-none flex items-center gap-3 p-3 rounded-2xl bg-brand-surface/90 border border-brand-green/30 shadow-glow-sm backdrop-blur-md ${className}`}
  >
    <div className="relative w-9 h-9">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
        <path
          className="text-white/10"
          strokeWidth="3.5"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="text-brand-green"
          strokeDasharray="75, 100"
          strokeWidth="3.5"
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-mono text-[9px] font-bold text-white">
        75%
      </span>
    </div>
    <div className="text-left">
      <p className="text-[10px] font-mono uppercase text-brand-darkMuted">NCERT Study Goal</p>
      <p className="text-xs font-bold text-white">Science Chapter 4</p>
    </div>
  </motion.div>
);

// 4. Floating Focus Credits Card
export const FloatingCreditsCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ 
      opacity: 1, 
      y: [0, -11, 0]
    }}
    transition={{
      y: { duration: 5.1, repeat: Infinity, ease: 'easeInOut', delay: 1 },
      duration: 0.7
    }}
    className={`pointer-events-none select-none flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-gradient-to-r from-brand-surface to-brand-deep border border-brand-green/40 shadow-glow-sm backdrop-blur-md ${className}`}
  >
    <div className="w-8 h-8 rounded-xl bg-brand-green/20 border border-brand-green/40 flex items-center justify-center text-brand-green shadow-inner">
      <Coins className="w-4 h-4" />
    </div>
    <div>
      <div className="flex items-center gap-1.5">
        <span className="font-mono text-xs font-extrabold text-brand-green">+25 Credits</span>
        <CheckCircle2 className="w-3 h-3 text-brand-green" />
      </div>
      <p className="text-[10px] text-brand-muted">Quiz Comprehension Passed</p>
    </div>
  </motion.div>
);

// 5. Floating AI Insight Notification
export const FloatingAIInsight: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [0, -7, 0]
    }}
    transition={{
      y: { duration: 6.8, repeat: Infinity, ease: 'easeInOut', delay: 1.4 },
      duration: 0.8
    }}
    className={`pointer-events-none select-none flex items-start gap-2.5 p-3 rounded-2xl bg-brand-surface/90 border border-emerald-400/30 shadow-lg backdrop-blur-md max-w-[240px] ${className}`}
  >
    <div className="w-6 h-6 rounded-lg bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
      <Sparkles className="w-3.5 h-3.5" />
    </div>
    <div>
      <span className="text-[9px] font-mono uppercase text-emerald-300 font-bold block">
        AI Wellbeing Insight
      </span>
      <p className="text-[11px] text-brand-muted leading-tight mt-0.5">
        Optimal 45-min study slot identified at 5:00 PM.
      </p>
    </div>
  </motion.div>
);

// 6. Floating Study Session Status
export const FloatingSessionStatus: React.FC<{ className?: string }> = ({ className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ 
      opacity: 1, 
      y: [0, -8, 0]
    }}
    transition={{
      y: { duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 },
      duration: 0.7
    }}
    className={`pointer-events-none select-none inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-midnight/90 border border-white/15 shadow-xl backdrop-blur-md ${className}`}
  >
    <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
    <Clock className="w-3.5 h-3.5 text-brand-green" />
    <span className="text-xs font-mono font-semibold text-white">Focus Session: Active</span>
    <span className="text-[10px] font-mono text-brand-darkMuted pl-1 border-l border-white/10">0 Switches</span>
  </motion.div>
);
