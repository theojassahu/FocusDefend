import React from 'react';
import { Download, RefreshCw, Smartphone, Sparkles } from 'lucide-react';
import { useFocusStore } from '../../data/focusStore';

export const ScrollScenes: React.FC = () => {
  const { setOtaModalOpen } = useFocusStore();

  return (
    <div id="how-it-works" className="w-full pointer-events-none">
      {/* Scene 01 */}
      <section
        id="scene01"
        className="min-h-[150vh] w-full flex items-center justify-start px-6 sm:px-12 md:px-24"
      >
        <div className="max-w-xl z-10 pointer-events-auto p-6 md:p-8 rounded-[28px] skeuo-card">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full skeuo-pill text-[11px] font-mono uppercase tracking-[0.2em] text-indigo-300 mb-4">
            <span className="w-2 h-2 rounded-full skeuo-led-amber animate-pulse" />
            The Reality
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white leading-tight">
            Digital distractions never sleep.
          </h2>
          <p className="text-base md:text-lg text-brand-dark-text-secondary leading-relaxed">
            Our children are bombarded with endless notifications, creating a chaotic environment that shatters their focus.
          </p>
        </div>
      </section>

      {/* Scene 02 */}
      <section
        id="scene02"
        className="min-h-[150vh] w-full flex items-center justify-end px-6 sm:px-12 md:px-24"
      >
        <div className="max-w-xl z-10 pointer-events-auto text-right p-6 md:p-8 rounded-[28px] skeuo-card">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full skeuo-pill text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-300 mb-4 ml-auto">
            <span className="w-2 h-2 rounded-full skeuo-led-green animate-pulse" />
            The Breakthrough
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white leading-tight">
            There is a better way.
          </h2>
          <p className="text-base md:text-lg text-brand-dark-text-secondary leading-relaxed">
            Meet FocusDefend. A revolutionary approach that replaces digital battles with positive reinforcement and structured learning.
          </p>
        </div>
      </section>

      {/* Scene 03 */}
      <section
        id="scene03"
        className="min-h-[150vh] w-full flex items-center justify-start px-6 sm:px-12 md:px-24"
      >
        <div className="max-w-xl z-10 pointer-events-auto p-6 md:p-8 rounded-[28px] skeuo-card">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full skeuo-pill text-[11px] font-mono uppercase tracking-[0.2em] text-blue-300 mb-4">
            <span className="w-2 h-2 rounded-full skeuo-led-blue" />
            Control
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white leading-tight">
            Set healthy boundaries.
          </h2>
          <p className="text-base md:text-lg text-brand-dark-text-secondary leading-relaxed">
            Configure restrictions for distracting apps and define custom educational schedules effortlessly from the Parent Dashboard.
          </p>
        </div>
      </section>

      {/* Scene 04 */}
      <section
        id="scene04"
        className="min-h-[150vh] w-full flex items-center justify-end px-6 sm:px-12 md:px-24"
      >
        <div className="max-w-xl z-10 pointer-events-auto text-right p-6 md:p-8 rounded-[28px] skeuo-card">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full skeuo-pill text-[11px] font-mono uppercase tracking-[0.2em] text-amber-300 mb-4 ml-auto">
            <span className="w-2 h-2 rounded-full skeuo-led-amber animate-pulse" />
            Native Shield
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white leading-tight">
            Intercept distractions.
          </h2>
          <p className="text-base md:text-lg text-brand-dark-text-secondary leading-relaxed">
            When a blocked app is opened, FocusDefend natively intercepts the launch, pausing the distraction instantly with sub-2% battery drain.
          </p>
        </div>
      </section>

      {/* Scene 05 */}
      <section
        id="scene05"
        className="min-h-[150vh] w-full flex items-center justify-center px-6 sm:px-12 md:px-24 text-center"
      >
        <div className="max-w-2xl z-10 pointer-events-auto p-6 md:p-9 rounded-[28px] skeuo-card">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full skeuo-pill text-[11px] font-mono uppercase tracking-[0.2em] text-indigo-300 mb-4 mx-auto">
            <Sparkles size={12} className="text-indigo-400" />
            Adaptive Gating
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white leading-tight">
            Turn friction into learning.
          </h2>
          <p className="text-base md:text-lg text-brand-dark-text-secondary max-w-xl mx-auto leading-relaxed">
            Instead of an adversarial "Blocked" screen, students are presented with an opportunity: complete a brief educational challenge to earn Focus Credits.
          </p>
        </div>
      </section>

      {/* Scene 06 */}
      <section
        id="scene06"
        className="min-h-[150vh] w-full flex items-center justify-start px-6 sm:px-12 md:px-24"
      >
        <div className="max-w-xl z-10 pointer-events-auto p-6 md:p-8 rounded-[28px] skeuo-card">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full skeuo-pill text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-300 mb-4">
            <span className="w-2 h-2 rounded-full skeuo-led-green animate-pulse" />
            AI Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white leading-tight">
            Reward genuine effort.
          </h2>
          <p className="text-base md:text-lg text-brand-dark-text-secondary leading-relaxed">
            Our AI engine evaluates answers in real-time. Correct answers immediately reward the student with screen time, building disciplined digital habits.
          </p>
        </div>
      </section>

      {/* Scene 07 */}
      <section
        id="scene07"
        className="min-h-[150vh] w-full flex items-center justify-center px-6 sm:px-12 md:px-24 text-center"
      >
        <div className="max-w-2xl z-10 pointer-events-auto p-6 md:p-9 rounded-[28px] skeuo-card">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full skeuo-pill text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-300 mb-4 mx-auto">
            <span className="w-2 h-2 rounded-full skeuo-led-green" />
            Earned Freedom
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white leading-tight">
            A balanced digital life.
          </h2>
          <p className="text-base md:text-lg text-brand-dark-text-secondary max-w-xl mx-auto leading-relaxed">
            The target app unlocks seamlessly. Screen time is transformed from an entitlement into an earned privilege that builds daily knowledge.
          </p>
        </div>
      </section>

      {/* Scene 08 */}
      <section
        id="scene08"
        className="min-h-[150vh] w-full flex flex-col items-center justify-center px-6 sm:px-12 md:px-24 text-center"
      >
        <div className="max-w-3xl z-10 pointer-events-auto p-8 sm:p-12 rounded-[32px] skeuo-card">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full skeuo-pill text-xs font-mono uppercase tracking-widest text-indigo-300 mb-6">
            <Smartphone size={14} className="text-indigo-400" />
            Production Release v1.2.4
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-none">
            Insights that empower families.
          </h2>
          <p className="text-base sm:text-lg text-brand-dark-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
            Review your child's progress, study retention, and digital discipline with real-time hardware telemetry directly from your phone.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/FocusDefend.apk"
              download="FocusDefend.apk"
              className="skeuo-btn-primary px-8 py-4 rounded-full font-bold text-base sm:text-lg text-white inline-flex items-center gap-3 cursor-pointer shadow-xl"
            >
              <Download size={20} />
              Download FocusDefend APK
            </a>
            <button
              onClick={() => setOtaModalOpen(true)}
              className="skeuo-btn-secondary px-6 py-4 rounded-full font-semibold text-sm sm:text-base text-gray-200 inline-flex items-center gap-2.5 cursor-pointer"
            >
              <RefreshCw size={17} className="text-emerald-400" />
              OTA Update Center
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
