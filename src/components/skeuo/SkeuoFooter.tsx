import React from 'react';
import { Download, RefreshCw } from 'lucide-react';
import { useFocusStore } from '../../data/focusStore';

export const SkeuoFooter: React.FC = () => {
  const { setOtaModalOpen } = useFocusStore();

  return (
    <footer className="w-full bg-[#050814] border-t border-[#222e47] pt-16 pb-12 px-6 text-white z-20 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="md:w-5/12 space-y-4">
          <div className="flex items-center gap-2.5 font-bold text-xl tracking-tight">
            <div className="relative w-8 h-8 rounded-full overflow-hidden p-[1.5px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-emerald-400 shadow-[0_0_12px_rgba(79,70,229,0.5)]">
              <img src="/logo.jpg" alt="FocusDefend Logo" className="w-full h-full rounded-full object-cover" />
            </div>
            <span>FocusDefend</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Where Learning Unlocks Freedom. The ultimate AI-powered parental control and habit transformation system engineered natively for Android.
          </p>
          <div className="skeuo-well p-3 rounded-2xl flex items-center justify-between max-w-xs border border-[#182133]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full skeuo-led-green animate-pulse" />
              <span className="text-xs font-mono text-gray-300">OTA Server: v1.2.4 Online</span>
            </div>
            <button
              onClick={() => setOtaModalOpen(true)}
              className="text-[11px] font-mono text-indigo-400 hover:text-indigo-300 underline cursor-pointer"
            >
              Open OTA Hub
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-12 sm:gap-20">
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-1">
              Product
            </h4>
            <a href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
              Pricing & Plans
            </a>
            <a href="#faq" className="text-sm text-gray-300 hover:text-white transition-colors">
              System FAQ
            </a>
            <button
              onClick={() => setOtaModalOpen(true)}
              className="text-left text-sm text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <RefreshCw size={13} />
              <span>OTA Update Center</span>
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-1">
              Downloads
            </h4>
            <a
              href="/FocusDefend.apk"
              download="FocusDefend.apk"
              className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
            >
              <Download size={13} />
              <span>Download FocusDefend.apk</span>
            </a>
            <a
              href="https://focusdefend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Production Web App
            </a>
            <span className="text-xs font-mono text-gray-500">Target: Android 10-15 (ARM64)</span>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-1">
              Project
            </h4>
            <span className="text-xs text-gray-400">BIC 2.0 Presentation</span>
            <span className="text-xs text-gray-400">Team: Aviral, Ojas, Jisan</span>
            <span className="text-xs text-gray-400">Mentor: Naveen Verma</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-14 pt-6 border-t border-[#222e47] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-500">
        <p>© {new Date().getFullYear()} FocusDefend. All rights reserved.</p>
        <p className="flex items-center gap-2">
          <span>Engineered for Android users worldwide</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
        </p>
      </div>
    </footer>
  );
};
