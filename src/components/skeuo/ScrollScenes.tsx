import React from 'react';
import { Download, RefreshCw, Smartphone, Sparkles } from 'lucide-react';
import { useFocusStore } from '../../data/focusStore';

export const ScrollScenes: React.FC = () => {
  const { setOtaModalOpen } = useFocusStore();

  return (
    <div id="how-it-works" className="w-full pointer-events-none">
      {/* Scene 01: The Digital Challenge */}
      <section
        id="scene01"
        className="min-h-[150vh] w-full flex items-center justify-start px-6 sm:px-12 md:px-24"
      >
        <div className="max-w-xl z-10 pointer-events-auto p-6 md:p-8 rounded-[28px] skeuo-card">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full skeuo-pill text-[11px] font-mono uppercase tracking-[0.2em] text-amber-300 mb-4">
            <span className="w-2 h-2 rounded-full skeuo-led-amber animate-pulse" />
            THE DIGITAL CHALLENGE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white leading-tight">
            Technology is everywhere. But is it helping students grow?
          </h2>
          <p className="text-base md:text-lg text-brand-dark-text-secondary leading-relaxed">
            Most screen-time tools treat students as adversaries by blindly shutting off devices. This leads to constant family tension without fostering responsible digital self-discipline.
          </p>
        </div>
      </section>

      {/* Scene 02: A Better Approach */}
      <section
        id="scene02"
        className="min-h-[150vh] w-full flex items-center justify-end px-6 sm:px-12 md:px-24"
      >
        <div className="max-w-xl z-10 pointer-events-auto text-right p-6 md:p-8 rounded-[28px] skeuo-card">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full skeuo-pill text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-300 mb-4 ml-auto">
            <span className="w-2 h-2 rounded-full skeuo-led-green animate-pulse" />
            A BETTER APPROACH
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white leading-tight">
            Don't just block screen time. Make it meaningful.
          </h2>
          <p className="text-base md:text-lg text-brand-dark-text-secondary leading-relaxed">
            FocusDefend bridges the divide between parental oversight and student autonomy by transforming everyday friction into constructive learning milestones.
          </p>
        </div>
      </section>

      {/* Scene 03: Core Mechanism */}
      <section
        id="scene03"
        className="min-h-[150vh] w-full flex items-center justify-start px-6 sm:px-12 md:px-24"
      >
        <div className="max-w-xl z-10 pointer-events-auto p-6 md:p-8 rounded-[28px] skeuo-card">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full skeuo-pill text-[11px] font-mono uppercase tracking-[0.2em] text-blue-300 mb-4">
            <span className="w-2 h-2 rounded-full skeuo-led-blue" />
            CORE MECHANISM
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white leading-tight">
            Learn. Earn. Unlock.
          </h2>
          <p className="text-base md:text-lg text-brand-dark-text-secondary leading-relaxed">
            Turn screen time into learning time. Students engage with educational material, complete learning activities and quizzes, earn Focus Credits, and use those credits to unlock permitted recreational screen time.
          </p>
        </div>
      </section>

      {/* Scene 04: Intelligent Restrictions */}
      <section
        id="scene04"
        className="min-h-[150vh] w-full flex items-center justify-end px-6 sm:px-12 md:px-24"
      >
        <div className="max-w-xl z-10 pointer-events-auto text-right p-6 md:p-8 rounded-[28px] skeuo-card">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full skeuo-pill text-[11px] font-mono uppercase tracking-[0.2em] text-amber-300 mb-4 ml-auto">
            <span className="w-2 h-2 rounded-full skeuo-led-amber animate-pulse" />
            INTELLIGENT RESTRICTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white leading-tight">
            Turn distraction into discipline.
          </h2>
          <p className="text-base md:text-lg text-brand-dark-text-secondary leading-relaxed">
            When a restricted app is opened during study blocks, FocusDefend natively intercepts the launch—presenting a quick curriculum challenge instead of a dead-end lock screen.
          </p>
        </div>
      </section>

      {/* Scene 05: Curriculum Challenges */}
      <section
        id="scene05"
        className="min-h-[150vh] w-full flex items-center justify-center px-6 sm:px-12 md:px-24 text-center"
      >
        <div className="max-w-2xl z-10 pointer-events-auto p-6 md:p-9 rounded-[28px] skeuo-card">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full skeuo-pill text-[11px] font-mono uppercase tracking-[0.2em] text-indigo-300 mb-4 mx-auto">
            <Sparkles size={12} className="text-indigo-400" />
            CURRICULUM CHALLENGES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white leading-tight">
            Turn friction into real learning.
          </h2>
          <p className="text-base md:text-lg text-brand-dark-text-secondary max-w-xl mx-auto leading-relaxed">
            Students practice standard NCERT chapters in Mathematics, Science, and Social Studies. Answering review questions correctly verifies real comprehension before credits are disbursed.
          </p>
        </div>
      </section>

      {/* Scene 06: Intelligence with Purpose */}
      <section
        id="scene06"
        className="min-h-[150vh] w-full flex items-center justify-start px-6 sm:px-12 md:px-24"
      >
        <div className="max-w-xl z-10 pointer-events-auto p-6 md:p-8 rounded-[28px] skeuo-card">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full skeuo-pill text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-300 mb-4">
            <span className="w-2 h-2 rounded-full skeuo-led-green animate-pulse" />
            INTELLIGENCE WITH PURPOSE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white leading-tight">
            Understand digital habits. Build better ones.
          </h2>
          <p className="text-base md:text-lg text-brand-dark-text-secondary leading-relaxed">
            FocusDefend applies privacy-preserving on-device intelligence to translate device telemetry into constructive study recommendations—without invading personal boundaries.
          </p>
        </div>
      </section>

      {/* Scene 07: Balanced Habits */}
      <section
        id="scene07"
        className="min-h-[150vh] w-full flex items-center justify-center px-6 sm:px-12 md:px-24 text-center"
      >
        <div className="max-w-2xl z-10 pointer-events-auto p-6 md:p-9 rounded-[28px] skeuo-card">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full skeuo-pill text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-300 mb-4 mx-auto">
            <span className="w-2 h-2 rounded-full skeuo-led-green" />
            BALANCED HABITS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white leading-tight">
            A smarter alternative to purely restrictive control.
          </h2>
          <p className="text-base md:text-lg text-brand-dark-text-secondary max-w-xl mx-auto leading-relaxed">
            Recreational screen time transforms from an entitlement into an earned privilege. When the earned timer expires, family restrictions automatically resume with zero friction.
          </p>
        </div>
      </section>

      {/* Scene 08: Student Wellbeing First */}
      <section
        id="scene08"
        className="min-h-[150vh] w-full flex flex-col items-center justify-center px-6 sm:px-12 md:px-24 text-center"
      >
        <div className="max-w-3xl z-10 pointer-events-auto p-8 sm:p-12 rounded-[32px] skeuo-card">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full skeuo-pill text-xs font-mono uppercase tracking-widest text-indigo-300 mb-6">
            <Smartphone size={14} className="text-indigo-400" />
            STUDENT WELLBEING FIRST
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-none">
            Build healthier digital habits that last.
          </h2>
          <p className="text-base sm:text-lg text-brand-dark-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
            FocusDefend teaches students to use technology responsibly through learning, intelligent restrictions, and meaningful rewards. Ready for students, trusted by parents.
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
