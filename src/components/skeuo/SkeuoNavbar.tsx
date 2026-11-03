import React, { useState, useEffect } from 'react';
import { Download, Sun, Moon } from 'lucide-react';
import { useFocusStore, useTheme } from '../../data/focusStore';

export const SkeuoNavbar: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { setOtaModalOpen, hasOtaNotification, otaVersion } = useFocusStore();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 md:p-5 pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center justify-between px-4 md:px-6 py-2.5 md:py-3 w-full max-w-5xl rounded-full transition-all duration-300 ${
          scrolled
            ? "skeuo-card bg-[#0c101d] border border-[#27324d] shadow-[0_16px_36px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.8)]"
            : "bg-[#0a0e1a] border border-[#1e273d] shadow-[0_10px_24px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.08)]"
        }`}
      >
        <a href="#" className="flex items-center gap-2.5 font-bold text-base md:text-lg tracking-tight shrink-0 text-white group">
          <div className="relative w-8 h-8 rounded-full overflow-hidden p-[1.5px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-emerald-400 shadow-[0_0_12px_rgba(79,70,229,0.5)]">
            <img src="/logo.jpg" alt="FocusDefend Logo" className="w-full h-full rounded-full object-cover" />
          </div>
          <span className="hidden sm:inline bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            FocusDefend
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#parents" className="hover:text-white transition-colors">Parents</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={() => setOtaModalOpen(true)}
            className={`skeuo-pill px-3 py-1.5 rounded-full text-xs font-semibold text-gray-200 hover:text-white flex items-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95 group ${
              hasOtaNotification ? "border-emerald-500/50 shadow-[0_0_12px_rgba(16,185,129,0.3)]" : ""
            }`}
            title="Open FocusDefend OTA System Update Center"
          >
            <span
              className={`w-2 h-2 rounded-full ${
                hasOtaNotification ? "skeuo-led-green animate-ping" : "skeuo-led-green animate-pulse"
              }`}
            />
            <span className="hidden sm:inline text-[11px] font-mono">OTA {otaVersion}</span>
            <span
              className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full border ${
                hasOtaNotification
                  ? "bg-emerald-500/30 text-emerald-300 border-emerald-400 font-bold animate-pulse"
                  : "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
              }`}
            >
              {hasOtaNotification ? "Update Ready" : "Current"}
            </span>
          </button>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-8 h-8 rounded-full flex items-center justify-center skeuo-btn-secondary text-gray-300 hover:text-white transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          )}

          <a
            href="/FocusDefend.apk"
            download="FocusDefend.apk"
            className="skeuo-btn-primary px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs md:text-sm font-semibold text-white inline-flex items-center gap-2 shrink-0 cursor-pointer shadow-lg"
          >
            <Download size={14} className="shrink-0" />
            <span className="hidden sm:inline">Download APK</span>
            <span className="sm:hidden font-mono">APK</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
