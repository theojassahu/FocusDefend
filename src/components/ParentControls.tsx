import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { 
  Users, 
  Clock, 
  ShieldCheck, 
  Check, 
  X, 
  Send, 
  Smartphone, 
  Sparkles,
  Calendar
} from 'lucide-react';

export const ParentControls: React.FC = () => {
  // Interactive 5-step Quick Approval Demo State
  const [demoStep, setDemoStep] = useState<number>(1);

  const handleApprove = () => {
    setDemoStep(4);
  };

  const handleReject = () => {
    setDemoStep(3);
  };

  const resetDemo = () => {
    setDemoStep(1);
  };

  const parentFeatures = [
    {
      title: 'App Restriction Management',
      desc: 'Set custom thresholds for gaming and entertainment while always whitelisting educational school tools.',
      icon: ShieldCheck
    },
    {
      title: 'Flexible Study Schedules',
      desc: 'Define recurring homework hours and bedtime quiet windows that automatically activate on the student device.',
      icon: Calendar
    },
    {
      title: 'Family-Defined Rules',
      desc: 'Collaboratively agree on credit reward rates and maximum allowed daily recreational screen time.',
      icon: Users
    },
    {
      title: 'Digital Wellbeing Reports',
      desc: 'Receive simple, readable weekly summaries focusing on study continuity rather than obsessive micromanagement.',
      icon: Clock
    }
  ];

  return (
    <section
      id="parent-controls"
      aria-label="Parent Controls"
      className="py-24 md:py-32 relative bg-brand-deep/70 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CONTROL WITH UNDERSTANDING"
          title="Parents stay informed. Students build responsibility."
          description="A balanced relationship with technology requires cooperation, not constant policing. FocusDefend provides parents with oversight while giving students room to build self-discipline."
        />

        {/* 4 Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {parentFeatures.map((feat) => (
            <div
              key={feat.title}
              className="glass-panel glass-panel-hover rounded-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-green mb-4">
                  <feat.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {feat.title}
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Parent Quick Approval Simulation */}
        <div className="glass-panel rounded-card p-6 md:p-10 border border-brand-green/30 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-white/10 gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-mono border border-brand-green/20 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Demonstration</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Parent Quick Approval Workflow
              </h3>
              <p className="text-xs text-brand-muted mt-1">
                Experience how a student requests emergency access for schoolwork and how a parent approves it in 5 seconds.
              </p>
            </div>

            <button
              onClick={resetDemo}
              className="px-3.5 py-1.5 rounded-lg bg-brand-surface hover:bg-brand-surfaceHover border border-white/10 text-xs font-mono text-brand-muted hover:text-white transition-colors cursor-pointer shrink-0"
            >
              Reset Demonstration
            </button>
          </div>

          {/* Workflow Progress Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
            {[
              { num: 1, label: 'Student Request' },
              { num: 2, label: 'Parent Ping' },
              { num: 3, label: 'Decision' },
              { num: 4, label: 'Temporary Pass' },
              { num: 5, label: 'Auto-Resume' }
            ].map((st) => (
              <div
                key={st.num}
                className={`p-2.5 rounded-xl border text-center transition-all ${
                  demoStep === st.num
                    ? 'bg-brand-green/20 border-brand-green text-brand-green font-bold'
                    : demoStep > st.num
                    ? 'bg-brand-surface border-white/10 text-white/80'
                    : 'bg-brand-deep/50 border-white/5 text-brand-darkMuted'
                }`}
              >
                <span className="text-[10px] font-mono block">Step 0{st.num}</span>
                <span className="text-xs truncate block">{st.label}</span>
              </div>
            ))}
          </div>

          {/* Interactive Dual View: Student Phone & Parent Notification */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-brand-midnight/90 p-6 md:p-8 rounded-2xl border border-white/10">
            
            {/* Student Side Experience */}
            <div className="p-5 rounded-2xl bg-brand-surface border border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs text-brand-muted pb-2 border-b border-white/5">
                <span className="flex items-center gap-1.5 text-white font-semibold">
                  <Smartphone className="w-3.5 h-3.5 text-sky-400" />
                  Student Device
                </span>
                <span className="font-mono text-[10px]">Restricted App Screen</span>
              </div>

              {demoStep === 1 && (
                <div className="space-y-3">
                  <p className="text-xs text-white font-medium">
                    "Group project discussion required on WhatsApp for 20 minutes."
                  </p>
                  <button
                    onClick={() => setDemoStep(2)}
                    className="w-full py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Quick Approval Request to Parent</span>
                  </button>
                </div>
              )}

              {demoStep === 2 && (
                <div className="py-4 text-center space-y-2">
                  <div className="w-8 h-8 rounded-full bg-amber-400/20 text-amber-300 mx-auto flex items-center justify-center animate-pulse">
                    <Clock className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-bold text-white">Request Dispatched to Parent Phone</p>
                  <p className="text-[11px] text-brand-muted">Awaiting decision on 20-minute temporary pass...</p>
                </div>
              )}

              {demoStep === 3 && (
                <div className="py-4 text-center space-y-2">
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 text-rose-400 mx-auto flex items-center justify-center">
                    <X className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-bold text-rose-300">Request Declined by Parent</p>
                  <p className="text-[11px] text-brand-muted">Regular study hours remain in effect.</p>
                </div>
              )}

              {(demoStep === 4 || demoStep === 5) && (
                <div className="py-3 space-y-2">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-brand-green/20 border border-brand-green/40 text-brand-green text-xs font-bold">
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4" />
                      Temporary 20m Pass Active
                    </span>
                    <span className="font-mono text-[10px] bg-brand-midnight px-2 py-0.5 rounded">
                      {demoStep === 4 ? '19:42 left' : '00:00 (Expired)'}
                    </span>
                  </div>
                  <p className="text-[11px] text-brand-muted">
                    {demoStep === 4
                      ? 'WhatsApp is temporarily unlocked for schoolwork collaboration.'
                      : 'Time limit elapsed. Automatic native restriction resumed.'}
                  </p>
                </div>
              )}
            </div>

            {/* Parent Side Experience */}
            <div className="p-5 rounded-2xl bg-brand-surface border border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs text-brand-muted pb-2 border-b border-white/5">
                <span className="flex items-center gap-1.5 text-white font-semibold">
                  <Users className="w-3.5 h-3.5 text-brand-green" />
                  Parent Device (Quick Action)
                </span>
                <span className="font-mono text-[10px]">Supervisor Hub</span>
              </div>

              {demoStep === 1 && (
                <div className="py-6 text-center text-xs text-brand-muted">
                  No active requests. System monitoring normally according to family schedule.
                </div>
              )}

              {demoStep === 2 && (
                <div className="space-y-3 p-3 rounded-xl bg-brand-deep border border-brand-green/30">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Ojas (Student)</span>
                    <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded">
                      Just now
                    </span>
                  </div>
                  <p className="text-xs text-brand-muted">
                    "Needs WhatsApp for 20m for biology project discussion."
                  </p>
                  <div className="flex gap-2 pt-1">
                    <button
                      onClick={handleApprove}
                      className="flex-1 py-2 rounded-lg bg-brand-green hover:bg-brand-emerald text-brand-midnight text-xs font-bold transition-colors cursor-pointer"
                    >
                      Approve 20m
                    </button>
                    <button
                      onClick={handleReject}
                      className="flex-1 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              )}

              {demoStep === 3 && (
                <div className="py-4 text-center text-xs text-brand-muted">
                  Request rejected. Notification sent back to student device.
                </div>
              )}

              {demoStep === 4 && (
                <div className="space-y-3">
                  <p className="text-xs text-brand-muted">
                    Exception granted. Policy timer running. Click below to simulate time expiry:
                  </p>
                  <button
                    onClick={() => setDemoStep(5)}
                    className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Simulate 20 Minutes Expiry →
                  </button>
                </div>
              )}

              {demoStep === 5 && (
                <div className="py-3 text-center space-y-1">
                  <p className="text-xs font-bold text-brand-green">Auto-Resumed Restrictions</p>
                  <p className="text-[11px] text-brand-muted">
                    No action needed. Shield automatically locked the app when timer hit zero.
                  </p>
                </div>
              )}
            </div>

          </div>

          <div className="mt-4 text-center">
            <p className="text-[11px] font-mono text-brand-darkMuted">
              Note: This workflow is an interactive UI simulation of FocusDefend’s parent-student synchronization protocol.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
