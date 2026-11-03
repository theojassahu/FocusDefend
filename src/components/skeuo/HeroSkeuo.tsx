import React from 'react';
import { Download } from 'lucide-react';

export const HeroSkeuo: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-[100dvh] w-full flex items-center justify-start px-6 sm:px-12 md:px-20 pointer-events-none relative pt-24 pb-12"
    >
      <div className="z-10 max-w-2xl pointer-events-auto p-7 sm:p-10 rounded-[32px] skeuo-card border border-[#2a3854]">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full skeuo-pill text-xs font-mono uppercase tracking-widest text-indigo-300 mb-5">
          <span className="w-2 h-2 rounded-full skeuo-led-green animate-pulse" />
          LEARN → EARN → UNLOCK
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-5 text-white leading-[1.08]">
          YOUR FOCUS.
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-white bg-clip-text text-transparent">
            YOUR FUTURE.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-brand-dark-text-secondary mb-8 max-w-lg leading-relaxed">
          Technology should help students grow, not distract them from their potential. FocusDefend transforms digital habits through intelligent app restrictions, learning-based rewards, and AI-powered digital wellbeing.
        </p>
        <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
          <a
            href="/FocusDefend-Release.apk"
            download="FocusDefend-Release.apk"
            className="skeuo-btn-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base text-white inline-flex items-center gap-2.5 shadow-xl cursor-pointer"
          >
            <Download size={18} />
            Download for Android
          </a>
          <a
            href="#how-it-works"
            className="skeuo-btn-secondary px-6 sm:px-7 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base text-gray-200 inline-flex items-center gap-2 cursor-pointer"
          >
            Explore System
          </a>
        </div>
      </div>
    </section>
  );
};
