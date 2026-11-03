import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Clock,
  ShieldCheck,
  Check,
  X,
  Send,
  Smartphone,
  Sparkles,
  Calendar,
  Lock,
  RotateCcw,
} from 'lucide-react';

export const ParentControlsSection: React.FC = () => {
  const [demoStep, setDemoStep] = useState<number>(1);
  const [remainingTime, setRemainingTime] = useState<number>(15 * 60);

  const resetDemo = () => {
    setDemoStep(1);
    setRemainingTime(15 * 60);
  };

  const parentFeatures = [
    {
      title: 'App Restriction Management',
      desc: 'Set custom thresholds for gaming and entertainment while always whitelisting educational school tools.',
      icon: ShieldCheck,
      badge: 'Granular Gating',
    },
    {
      title: 'Flexible Study Schedules',
      desc: 'Define recurring homework hours and bedtime quiet windows that automatically activate on the student device.',
      icon: Calendar,
      badge: 'Zero Friction',
    },
    {
      title: 'Family-Defined Rules',
      desc: 'Collaboratively agree on credit reward rates and maximum allowed daily recreational screen time.',
      icon: Users,
      badge: 'Collaborative',
    },
    {
      title: 'Digital Wellbeing Reports',
      desc: 'Receive simple, readable weekly summaries focusing on study continuity rather than obsessive micromanagement.',
      icon: Clock,
      badge: 'Telemetry',
    },
  ];

  return (
    <section id="parents" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-20 border-b border-[#1c2438]">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full skeuo-pill text-xs font-mono uppercase tracking-wider text-emerald-300 mb-4">
          <span className="w-2 h-2 rounded-full skeuo-led-green animate-pulse" />
          CONTROL WITH UNDERSTANDING
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Parents stay informed. Students build responsibility.
        </h2>
        <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          A balanced relationship with technology requires cooperation, not constant policing. FocusDefend provides parents with oversight while giving students room to build genuine self-discipline.
        </p>
      </div>

      {/* 4 Feature Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {parentFeatures.map((feat, idx) => (
          <motion.div
            key={feat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.1 * idx }}
            className="skeuo-card p-6 rounded-[24px] flex flex-col justify-between border border-[#222e47] hover:border-emerald-500/40 transition-colors group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shadow-inner">
                  <feat.icon size={22} />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  {feat.badge}
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2 leading-snug">
                {feat.title}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Parent Quick Approval Simulation */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="skeuo-card rounded-[28px] p-6 sm:p-10 border border-emerald-500/30 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-[#222e47] gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-mono border border-emerald-500/30 mb-2">
              <Sparkles size={13} className="text-emerald-400" />
              <span>Interactive Demonstration</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Parent Quick Approval Workflow
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Experience how a student requests temporary access for schoolwork and how a parent approves it in seconds.
            </p>
          </div>

          <button
            onClick={resetDemo}
            className="skeuo-btn-secondary px-4 py-2 rounded-full text-xs font-mono text-gray-300 hover:text-white flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <RotateCcw size={13} />
            <span>Reset Demonstration</span>
          </button>
        </div>

        {/* Workflow Progress Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8">
          {[
            { num: 1, label: 'Student Request' },
            { num: 2, label: 'Parent Ping' },
            { num: 3, label: 'Decision' },
            { num: 4, label: 'Temporary Pass' },
            { num: 5, label: 'Auto-Resume' },
          ].map((st) => (
            <div
              key={st.num}
              onClick={() => setDemoStep(st.num)}
              className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                demoStep === st.num
                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                  : demoStep > st.num
                  ? 'bg-[#0f1424] border-[#2b3a54] text-white/90'
                  : 'bg-[#060812] border-[#182133] text-gray-500'
              }`}
            >
              <span className="text-[10px] font-mono block opacity-75">Step 0{st.num}</span>
              <span className="text-xs truncate block mt-0.5">{st.label}</span>
            </div>
          ))}
        </div>

        {/* Dual Interactive Device Panel */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch bg-[#050814] p-6 sm:p-8 rounded-[24px] border border-[#1f2b42]">
          {/* Left: Student Side Device */}
          <div className="skeuo-card p-5 rounded-2xl border border-[#2a3854] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-gray-400 pb-3 mb-4 border-b border-[#1c263b]">
                <span className="flex items-center gap-2 text-white font-bold">
                  <Smartphone size={16} className="text-sky-400" />
                  Student Device (Mayank)
                </span>
                <span className="font-mono text-[10px] bg-rose-500/20 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded-full">
                  Restricted App Screen
                </span>
              </div>

              {demoStep === 1 && (
                <div className="space-y-4">
                  <div className="skeuo-well p-3.5 rounded-xl text-xs space-y-1">
                    <span className="text-gray-400 block text-[10px] font-mono">App Gated:</span>
                    <h5 className="font-bold text-white text-sm">WhatsApp Messenger</h5>
                    <p className="text-gray-300 text-[11px] leading-relaxed">
                      "Need to ask classmate for chemistry lab experiment notes."
                    </p>
                  </div>
                  <button
                    onClick={() => setDemoStep(2)}
                    className="w-full py-3 rounded-xl skeuo-btn-primary font-bold text-xs text-white flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <Send size={14} />
                    <span>Send Request to Parent (+15m)</span>
                  </button>
                </div>
              )}

              {demoStep === 2 && (
                <div className="skeuo-well p-4 rounded-xl text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 mx-auto">
                    <Clock size={18} className="animate-pulse" />
                  </div>
                  <h5 className="font-bold text-white text-sm">Request Sent to Parent</h5>
                  <p className="text-xs text-gray-400 max-w-xs mx-auto">
                    Waiting for approval on Parent Dashboard. Target app remains securely locked until authenticated.
                  </p>
                  <button
                    onClick={() => setDemoStep(3)}
                    className="text-[11px] font-mono text-indigo-400 underline hover:text-indigo-300 cursor-pointer"
                  >
                    Advance to Parent Decision →
                  </button>
                </div>
              )}

              {(demoStep === 3 || demoStep === 4) && (
                <div className="skeuo-well p-4 rounded-xl space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Parent Pass Active
                    </span>
                    <span className="font-mono text-white font-bold">
                      {Math.floor(remainingTime / 60)}:
                      {String(remainingTime % 60).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[#02040a] rounded-full overflow-hidden border border-emerald-500/30">
                    <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full w-full" />
                  </div>
                  <p className="text-xs text-gray-300">
                    WhatsApp is temporarily unlocked for schoolwork. Knox watchdog will automatically relock when the countdown reaches 00:00.
                  </p>
                  <button
                    onClick={() => setDemoStep(5)}
                    className="w-full py-2.5 rounded-xl skeuo-btn-rose text-white text-xs font-bold cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Lock size={13} />
                    <span>Relock Device Early</span>
                  </button>
                </div>
              )}

              {demoStep === 5 && (
                <div className="skeuo-well p-4 rounded-xl text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-400 mx-auto">
                    <Lock size={18} />
                  </div>
                  <h5 className="font-bold text-white text-sm">Pass Expired & App Relocked</h5>
                  <p className="text-xs text-gray-400 max-w-xs mx-auto">
                    Full restriction automatically restored by FocusDefend without requiring parent intervention.
                  </p>
                  <button
                    onClick={resetDemo}
                    className="text-[11px] font-mono text-emerald-400 underline hover:text-emerald-300 cursor-pointer"
                  >
                    Start New Simulation ↺
                  </button>
                </div>
              )}
            </div>
            <div className="pt-3 mt-3 border-t border-[#1c263b] flex items-center justify-between text-[10px] font-mono text-gray-500">
              <span>Android 14 • UsageStats Core</span>
              <span>Sub-2% Battery</span>
            </div>
          </div>

          {/* Right: Parent Dashboard Side */}
          <div className="skeuo-card p-5 rounded-2xl border border-[#2a3854] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-gray-400 pb-3 mb-4 border-b border-[#1c263b]">
                <span className="flex items-center gap-2 text-white font-bold">
                  <Users size={16} className="text-emerald-400" />
                  Parent Companion (Priya Sharma)
                </span>
                <span className="font-mono text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  Real-Time Sync
                </span>
              </div>

              {demoStep === 1 && (
                <div className="skeuo-well p-4 rounded-xl text-center space-y-2 text-xs text-gray-400">
                  <span className="block text-gray-300 font-bold">Queue is Currently Empty</span>
                  <p>When student initiates a request from their phone, it surfaces here instantly with vibration and push alert.</p>
                  <button
                    onClick={() => setDemoStep(2)}
                    className="text-[11px] font-mono text-indigo-400 underline hover:text-indigo-300 cursor-pointer pt-2 block mx-auto"
                  >
                    Simulate Student Request →
                  </button>
                </div>
              )}

              {(demoStep === 2 || demoStep === 3) && (
                <div className="skeuo-card p-4 rounded-xl border border-amber-500/50 bg-[#0e1424] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-amber-300 uppercase flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                      Pending Quick Pass Request
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">Just Now</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Mayank Sharma</h5>
                    <p className="text-xs text-gray-300 mt-0.5">
                      "Need to ask classmate for chemistry lab experiment notes."
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => setDemoStep(4)}
                      className="flex-1 py-2 rounded-xl skeuo-btn-emerald text-xs font-bold text-white flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                    >
                      <Check size={14} strokeWidth={3} />
                      <span>Approve 15m</span>
                    </button>
                    <button
                      onClick={() => setDemoStep(4)}
                      className="py-2 px-3 rounded-xl skeuo-btn-secondary text-xs font-bold text-white cursor-pointer border border-[#2b3a54]"
                    >
                      <span>+30m</span>
                    </button>
                    <button
                      onClick={() => setDemoStep(1)}
                      className="py-2 px-3 rounded-xl skeuo-btn-rose text-xs font-bold text-rose-200 hover:text-white cursor-pointer"
                    >
                      <X size={14} />
                    </button>
                  </div>
                </div>
              )}

              {demoStep === 4 && (
                <div className="skeuo-card p-4 rounded-xl border border-emerald-500/40 bg-emerald-950/20 space-y-3">
                  <div className="flex items-center justify-between text-xs text-emerald-300 font-bold">
                    <span className="flex items-center gap-1.5">
                      <Check size={14} className="text-emerald-400" />
                      Temporary Pass Authorized
                    </span>
                    <span className="font-mono text-[10px]">15m Total</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Student has temporary access to WhatsApp. Knox security timer is enforcing the countdown and will lock upon completion.
                  </p>
                  <button
                    onClick={() => setDemoStep(5)}
                    className="w-full py-2 rounded-xl skeuo-btn-rose text-xs font-bold text-white cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Lock size={12} />
                    <span>Revoke Pass Immediately</span>
                  </button>
                </div>
              )}

              {demoStep === 5 && (
                <div className="skeuo-well p-4 rounded-xl text-center space-y-2 text-xs">
                  <h5 className="font-bold text-emerald-400">Device Re-Guarded</h5>
                  <p className="text-gray-300">
                    The scheduled study block has resumed. All restricted applications are safely locked under parental rules.
                  </p>
                </div>
              )}
            </div>
            <div className="pt-3 mt-3 border-t border-[#1c263b] flex items-center justify-between text-[10px] font-mono text-gray-500">
              <span>Parental Passphrase: Sealed</span>
              <span>Encrypted Keystore</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
