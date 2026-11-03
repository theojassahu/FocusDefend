import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  ShieldAlert,
  ShieldCheck,
  Pencil,
  BarChart3,
  Settings,
  User,
  Star,
  Play,
  Lock,
  Clock,
  CheckCircle2,
  ArrowRight,
  Flame,
  Zap,
  Sliders,
  TriangleAlert,
  Terminal,
  RefreshCw,
  Key,
  CloudDownload,
  X,
  Send,
  Check,
  LogOut,
  Moon,
  Sun,
  Sparkles,
} from 'lucide-react';
import { InstagramIcon, YouTubeIcon } from './Icons';
import { useFocusStore, useTheme } from '../../data/focusStore';

// Bottom Floating Dock
export const PhoneDock: React.FC<{ active: string; onNavigate: (screen: string) => void }> = ({
  active,
  onNavigate,
}) => (
  <div className="absolute bottom-3.5 left-3.5 right-3.5 h-[58px] rounded-[24px] skeuo-floating-dock flex justify-between items-center px-1.5 z-40 pointer-events-auto">
    <button
      onClick={() => onNavigate("dashboard")}
      className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-2xl cursor-pointer transition-all duration-200 ${
        active === "dashboard"
          ? "skeuo-dock-tab-active text-indigo-400 font-bold scale-105"
          : "text-gray-400 hover:text-gray-200"
      }`}
    >
      <Home
        size={16}
        className={active === "dashboard" ? "fill-indigo-400/20 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" : ""}
      />
      <span className="text-[8.5px] mt-0.5 tracking-tight">Home</span>
    </button>
    <button
      onClick={() => onNavigate("intercept")}
      className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-2xl cursor-pointer transition-all duration-200 ${
        active === "intercept"
          ? "skeuo-dock-tab-active text-rose-400 font-bold scale-105"
          : "text-gray-400 hover:text-gray-200"
      }`}
    >
      <ShieldAlert
        size={16}
        className={active === "intercept" ? "fill-rose-400/20 drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" : ""}
      />
      <span className="text-[8.5px] mt-0.5 tracking-tight">Shield</span>
    </button>
    <button
      onClick={() => onNavigate("quiz")}
      className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-2xl cursor-pointer transition-all duration-200 ${
        active === "quiz"
          ? "skeuo-dock-tab-active text-emerald-400 font-bold scale-105"
          : "text-gray-400 hover:text-gray-200"
      }`}
    >
      <Pencil
        size={16}
        className={active === "quiz" ? "fill-emerald-400/20 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" : ""}
      />
      <span className="text-[8.5px] mt-0.5 tracking-tight">Quiz</span>
    </button>
    <button
      onClick={() => onNavigate("progress")}
      className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-2xl cursor-pointer transition-all duration-200 ${
        active === "progress"
          ? "skeuo-dock-tab-active text-purple-400 font-bold scale-105"
          : "text-gray-400 hover:text-gray-200"
      }`}
    >
      <BarChart3
        size={16}
        className={active === "progress" ? "fill-purple-400/20 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : ""}
      />
      <span className="text-[8.5px] mt-0.5 tracking-tight">Progress</span>
    </button>
    <button
      onClick={() => onNavigate("settings")}
      className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-2xl cursor-pointer transition-all duration-200 ${
        active === "settings"
          ? "skeuo-dock-tab-active text-amber-400 font-bold scale-105"
          : "text-gray-400 hover:text-gray-200"
      }`}
    >
      <Settings
        size={16}
        className={active === "settings" ? "fill-amber-400/20 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" : ""}
      />
      <span className="text-[8.5px] mt-0.5 tracking-tight">Settings</span>
    </button>
  </div>
);

// 1. Dashboard Screen (mp)
export const DashboardScreen: React.FC<{
  onNavigate: (s: string) => void;
  credits?: number;
}> = ({ onNavigate, credits = 5 }) => {
  const { hasOtaNotification, setOtaModalOpen } = useFocusStore();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="absolute inset-0 flex flex-col pt-16 px-5 pb-24 text-white bg-[#070a14] overflow-y-auto"
    >
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400">
            FocusDefend Mobile
          </span>
          <h2 className="text-[19px] font-extrabold text-white">Student Dashboard</h2>
        </div>
        <button
          onClick={() => onNavigate("settings")}
          className="w-8 h-8 rounded-full skeuo-btn-secondary flex items-center justify-center text-gray-300 hover:text-white cursor-pointer transition-transform active:scale-95"
          title="Student Profile & Settings"
        >
          <User size={16} />
        </button>
      </div>

      {hasOtaNotification && (
        <div
          onClick={() => setOtaModalOpen(true)}
          className="p-3 rounded-2xl skeuo-card border border-emerald-500/40 bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-indigo-950/30 mb-3.5 flex items-center justify-between cursor-pointer hover:border-emerald-400/60 transition-all shadow-md group"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <CloudDownload size={15} className="animate-pulse" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
                v2.3.0 Core Available
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <div className="text-[9.5px] text-gray-300">
                Play Protect Certified • Floating Dock
              </div>
            </div>
          </div>
          <span className="text-[9px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full group-hover:bg-emerald-500/30">
            Install
          </span>
        </div>
      )}

      <div className="skeuo-card rounded-[24px] p-4 mb-3.5 relative overflow-hidden border border-[#2a3854] shadow-[0_16px_36px_rgba(0,0,0,0.7)]">
        <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300">
              Active Shield
            </span>
          </div>
          <span className="text-[9px] font-mono text-gray-400">UsageStats API</span>
        </div>
        <h3 className="text-[20px] font-extrabold text-white mb-0.5">Mayank Sharma</h3>
        <p className="text-[10.5px] text-gray-400 mb-3">Grade 10 • Daily Goal: 45m</p>
        <div className="inline-flex items-center gap-2 skeuo-well px-3 py-1 rounded-full border border-[#222e47]">
          <Star size={12} className="text-[#fbbf24] fill-[#fbbf24]" />
          <span className="text-xs font-bold text-amber-200">
            {credits} Focus Credits Earned
          </span>
        </div>
      </div>

      <button
        onClick={() => onNavigate("quiz")}
        className="w-full skeuo-btn-emerald text-white rounded-full py-3 font-bold flex items-center justify-center gap-2 mb-3 cursor-pointer text-xs sm:text-sm shadow-lg"
      >
        <Play size={14} className="fill-white" />
        <span>Start Study Mode</span>
      </button>

      <div
        onClick={() => onNavigate("youtube")}
        className="p-3 rounded-2xl skeuo-card border border-indigo-500/30 bg-indigo-950/20 mb-3 flex items-center justify-between cursor-pointer hover:border-indigo-500/50 transition-all"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-600 flex items-center justify-center text-white shadow-md shrink-0">
            <ShieldCheck size={16} className="text-white" />
          </div>
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              Smart App Guardian{" "}
              <span className="text-[8.5px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-1.5 py-0.2 rounded-full">
                Play Protect Pass
              </span>
            </div>
            <div className="text-[10px] text-gray-400">
              Android UsageStats • Zero A11y / Popups
            </div>
          </div>
        </div>
        <span className="text-[9.5px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full">
          Guarded
        </span>
      </div>

      <div
        onClick={() => onNavigate("intercept")}
        className="p-3 rounded-2xl skeuo-card border border-rose-500/30 bg-rose-950/20 mb-3.5 flex items-center justify-between cursor-pointer hover:border-rose-500/50 transition-all"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-600 via-pink-600 to-amber-500 flex items-center justify-center text-white shadow-md shrink-0">
            <InstagramIcon size={16} />
          </div>
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              Instagram <Lock size={11} className="text-rose-400" />
            </div>
            <div className="text-[10px] text-gray-400">
              Foreground Focus Lockout • UsageStats API
            </div>
          </div>
        </div>
        <span className="text-[9.5px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/40 px-2 py-0.5 rounded-full">
          Blocked
        </span>
      </div>

      <div className="skeuo-well p-3 rounded-2xl border border-[#182133]">
        <div className="flex items-center justify-between mb-1.5">
          <h4 className="text-[10.5px] font-bold text-gray-300">Weekly Study Minutes</h4>
          <span className="text-[9px] font-mono text-emerald-400">Target: 300m</span>
        </div>
        <div className="flex justify-between items-end h-14 pb-1 relative">
          {[20, 45, 10, 60, 30, 0, 0].map((val, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1 z-10 flex-1">
              <div
                className="w-2 rounded-full bg-gradient-to-t from-indigo-600 to-indigo-400 shadow-[0_0_8px_rgba(79,70,229,0.5)] transition-all"
                style={{ height: `${Math.max(val, 6)}px` }}
              />
              <span className="text-[9px] font-mono text-gray-400">
                {["M", "T", "W", "T", "F", "S", "S"][idx]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// 2. Intercept Screen (mm)
export const InterceptScreen: React.FC<{
  onNavigate: (s: string) => void;
  mode?: string;
  onModeChange?: (m: string) => void;
}> = ({ onNavigate, mode = "instagram", onModeChange }) => {
  const [currentMode, setCurrentMode] = useState(mode);
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [minutes, setMinutes] = useState(15);
  const [reason, setReason] = useState("Need to check physics class project group notes with classmate");
  const [sentSuccess, setSentSuccess] = useState(false);
  const { activeGrants, requestParentAccess, revokeGrant } = useFocusStore();

  useEffect(() => {
    setCurrentMode(mode);
  }, [mode]);

  const selectMode = (m: string) => {
    setCurrentMode(m);
    onModeChange?.(m);
  };

  const appName = currentMode === "instagram" ? "Instagram" : currentMode === "shorts" ? "YouTube Shorts" : "YouTube";
  const appIcon = currentMode === "instagram" ? "instagram" : "youtube";
  const activeGrant = activeGrants.find(
    (g) =>
      g.status === "active" &&
      ((currentMode === "instagram" && g.appName.toLowerCase().includes("instagram")) ||
        ((currentMode === "shorts" || currentMode === "channel") && g.appName.toLowerCase().includes("youtube")))
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="absolute inset-0 flex flex-col pt-16 px-4 pb-24 text-white bg-gradient-to-b from-[#140608] via-[#090b14] to-[#060810] overflow-y-auto"
    >
      <div className="flex flex-col items-center gap-1 mb-3 text-center">
        <div className="flex items-center gap-1.5 text-[9.5px] font-mono uppercase tracking-widest text-emerald-300 skeuo-pill px-3 py-1 rounded-full border-emerald-500/40">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Google Play Protect Certified • Focus Guard
        </div>
        <span className="text-[9px] font-mono text-gray-400">
          Zero Accessibility • Zero Background Popups • UsageStats API
        </span>
      </div>

      <div className="flex items-center gap-1 p-1 rounded-xl bg-[#04060d] border border-[#182133] mb-3 text-[9px] font-mono">
        <button
          onClick={() => selectMode("instagram")}
          className={`flex-1 py-1 rounded-lg text-center font-bold cursor-pointer transition-all ${
            currentMode === "instagram" ? "bg-rose-600 text-white shadow-md" : "text-gray-400 hover:text-white"
          }`}
        >
          Instagram
        </button>
        <button
          onClick={() => selectMode("shorts")}
          className={`flex-1 py-1 rounded-lg text-center font-bold cursor-pointer transition-all ${
            currentMode === "shorts" ? "bg-red-600 text-white shadow-md" : "text-gray-400 hover:text-white"
          }`}
        >
          YT Shorts
        </button>
        <button
          onClick={() => selectMode("channel")}
          className={`flex-1 py-1 rounded-lg text-center font-bold cursor-pointer transition-all ${
            currentMode === "channel" ? "bg-amber-600 text-white shadow-md" : "text-gray-400 hover:text-white"
          }`}
        >
          YT Channel
        </button>
      </div>

      {activeGrant ? (
        <div className="flex-1 flex flex-col items-center justify-center py-1">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-indigo-600 p-0.5 shadow-[0_12px_30px_rgba(16,185,129,0.4)] flex items-center justify-center mb-3 relative">
            <div className="w-full h-full rounded-2xl bg-[#040912] flex items-center justify-center">
              {currentMode === "instagram" ? (
                <InstagramIcon size={34} className="text-emerald-400" />
              ) : (
                <YouTubeIcon size={34} className="text-emerald-400 fill-emerald-400" />
              )}
            </div>
            <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-emerald-500 border-2 border-[#090b14] flex items-center justify-center text-white shadow-lg">
              <Check size={12} strokeWidth={3} />
            </div>
          </div>
          <span className="text-[9.5px] font-mono uppercase tracking-widest text-emerald-400 font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-1">
            Parent Pass Active
          </span>
          <h2 className="text-[18px] font-extrabold text-white mb-1">
            {activeGrant.appName} is Unlocked
          </h2>
          <p className="text-[10.5px] text-gray-300 text-center max-w-xs mb-3">
            Secure, time-limited pass approved by Parent Dashboard. FocusDefend automatically restores the restriction when time expires.
          </p>
          <div className="w-full skeuo-card p-3.5 rounded-2xl border border-emerald-500/40 bg-gradient-to-b from-emerald-950/30 to-[#071318] text-center mb-3 shadow-[0_16px_36px_rgba(0,0,0,0.8)]">
            <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-300">
              Grant Expires In
            </span>
            <div className="text-[36px] font-mono font-extrabold text-white tracking-tight my-0.5">
              {Math.floor(activeGrant.remainingSeconds / 60)}:
              {String(activeGrant.remainingSeconds % 60).padStart(2, "0")}
            </div>
            <div className="w-full h-1.5 bg-[#02070c] rounded-full overflow-hidden border border-[#163028] mt-2 mb-1">
              <div
                className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full transition-all duration-1000"
                style={{
                  width: `${Math.min(100, Math.max(0, (activeGrant.remainingSeconds / (60 * activeGrant.durationMinutes)) * 100))}%`,
                }}
              />
            </div>
            <div className="flex justify-between items-center text-[8.5px] font-mono text-gray-400 mt-1">
              <span>Authorized: {activeGrant.durationMinutes}m Pass</span>
              <span className="text-emerald-400">Knox Monitored</span>
            </div>
          </div>
          <div className="w-full space-y-2 mt-auto">
            <button
              onClick={() =>
                alert(`Launching ${activeGrant.appName}. FocusDefend will automatically re-lock at 00:00.`)
              }
              className="w-full py-2.5 rounded-full skeuo-btn-primary font-bold text-xs text-white flex items-center justify-center gap-2 cursor-pointer shadow-xl"
            >
              <Play size={14} className="fill-white" />
              <span>Launch {activeGrant.appName}</span>
            </button>
            <button
              onClick={() => revokeGrant(activeGrant.id)}
              className="w-full py-2 rounded-full skeuo-btn-rose font-semibold text-[11px] text-rose-200 hover:text-white flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Lock size={12} />
              <span>Relock & Restore Restriction Early</span>
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="relative mx-auto mb-2">
            {currentMode === "instagram" && (
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#f97316] via-[#ec4899] to-[#8b5cf6] p-0.5 shadow-[0_12px_30px_rgba(244,63,94,0.35)] flex items-center justify-center">
                <div className="w-full h-full rounded-2xl bg-[#05070e] flex items-center justify-center">
                  <InstagramIcon size={34} className="text-white" />
                </div>
              </div>
            )}
            {currentMode === "shorts" && (
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-red-600 via-rose-600 to-red-800 p-0.5 shadow-[0_12px_30px_rgba(239,68,68,0.35)] flex items-center justify-center">
                <div className="w-full h-full rounded-2xl bg-[#05070e] flex items-center justify-center">
                  <YouTubeIcon size={34} className="text-white fill-white" />
                </div>
              </div>
            )}
            {currentMode === "channel" && (
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-600 via-red-600 to-rose-700 p-0.5 shadow-[0_12px_30px_rgba(245,158,11,0.35)] flex items-center justify-center">
                <div className="w-full h-full rounded-2xl bg-[#05070e] flex items-center justify-center">
                  <YouTubeIcon size={34} className="text-white fill-white" />
                </div>
              </div>
            )}
            <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-rose-600 border-2 border-[#090b14] flex items-center justify-center text-white shadow-lg">
              <Lock size={12} />
            </div>
          </div>

          <div className="text-center mb-3">
            <h2 className="text-[18px] font-extrabold text-white mb-0.5">
              {currentMode === "instagram" && "Instagram is Paused"}
              {currentMode === "shorts" && "YouTube Shorts is Paused"}
              {currentMode === "channel" && "Distracting Channel Gated"}
            </h2>
            <p className="text-[11px] text-gray-400 max-w-xs mx-auto leading-relaxed">
              {currentMode === "instagram" &&
                "Study session active. Distracting social app paused via Google Play-compliant UsageStats monitoring. Zero background popups."}
              {currentMode === "shorts" &&
                "Infinite short-form feed gated to protect retention. Whitelisted educational YouTube channels remain accessible."}
              {currentMode === "channel" &&
                "Entertainment channel is restricted during study hours. Khan Academy, MIT OCW, and NCERT channels are whitelisted."}
            </p>
          </div>

          <div className="skeuo-card p-3 rounded-2xl border border-indigo-500/40 bg-indigo-950/20 mb-3 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-1 text-indigo-300 font-bold text-xs">
              <Sparkles size={14} className="text-indigo-400" />
              Turn Friction into Learning
            </div>
            <p className="text-[10.5px] text-gray-300 leading-relaxed mb-2">
              Answer 1 curriculum challenge correctly to earn{" "}
              <strong className="text-white">15 minutes</strong> of unrestricted leisure access.
            </p>
            <div className="flex items-center gap-3 text-[9.5px] font-mono text-gray-400">
              <span className="flex items-center gap-1">
                <Clock size={11} className="text-emerald-400" /> 15m Screen Time
              </span>
              <span className="flex items-center gap-1">
                <Star size={11} className="text-amber-400" /> +1 Focus Credit
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <button
              onClick={() => onNavigate("quiz")}
              className="w-full py-2.5 rounded-full skeuo-btn-primary font-bold text-xs text-white flex items-center justify-center gap-2 cursor-pointer shadow-xl"
            >
              <Sparkles size={14} />
              <span>Solve Challenge to Unlock (+15m)</span>
            </button>
            <button
              onClick={() => setRequestModalOpen(true)}
              className="w-full py-2.5 rounded-full skeuo-btn-indigo font-bold text-xs text-indigo-200 hover:text-white flex items-center justify-center gap-2 cursor-pointer border border-indigo-500/40 bg-indigo-950/40 shadow-md"
            >
              <Key size={13} className="text-indigo-300" />
              <span>Ask Parent for Quick Pass</span>
            </button>
            <button
              onClick={() => onNavigate("dashboard")}
              className="w-full py-2 rounded-full skeuo-btn-secondary font-semibold text-xs text-gray-400 hover:text-white flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Back to Student Home</span>
            </button>
          </div>
        </>
      )}

      <AnimatePresence>
        {requestModalOpen && (
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 120 }}
            className="absolute inset-x-3 bottom-3 p-4 rounded-3xl skeuo-card border border-indigo-500/50 bg-[#090e1c] shadow-[0_24px_50px_rgba(0,0,0,0.95)] z-50 text-white"
          >
            <div className="flex justify-between items-center mb-2.5">
              <div className="flex items-center gap-1.5 text-indigo-300 font-bold text-xs">
                <Send size={13} className="text-indigo-400" />
                <span>Request Parent Quick Pass</span>
              </div>
              <button
                onClick={() => setRequestModalOpen(false)}
                className="text-gray-400 hover:text-white p-1 cursor-pointer"
              >
                <X size={14} />
              </button>
            </div>

            {sentSuccess ? (
              <div className="text-center py-4 space-y-2">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 mx-auto flex items-center justify-center text-emerald-400">
                  <Check size={20} />
                </div>
                <h4 className="text-sm font-bold text-white">Alert Sent to Parent!</h4>
                <p className="text-[10px] text-gray-300 max-w-xs mx-auto">
                  Notification delivered to Parent Dashboard. Switch to the <strong>Parent</strong> screen above to approve.
                </p>
              </div>
            ) : (
              <>
                <p className="text-[10px] text-gray-300 mb-2.5">
                  Request temporary access to <strong className="text-white">{appName}</strong>. Parent will receive an instant approval prompt.
                </p>
                <div className="mb-2.5">
                  <span className="text-[9px] font-mono text-gray-400 block mb-1">
                    Select Time Window:
                  </span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[15, 30, 45].map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setMinutes(m)}
                        className={`py-1.5 rounded-xl text-[10px] font-bold font-mono transition-all cursor-pointer ${
                          minutes === m
                            ? "bg-indigo-600 text-white shadow-md border border-indigo-400/50"
                            : "bg-[#060812] text-gray-400 border border-[#1b253b] hover:text-white"
                        }`}
                      >
                        +{m} min
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-3">
                  <span className="text-[9px] font-mono text-gray-400 block mb-1">
                    Reason for Access:
                  </span>
                  <input
                    type="text"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-xl bg-[#050711] border border-[#1f2b45] text-white text-[10.5px] focus:outline-none focus:border-indigo-400"
                    placeholder="E.g., Need physics project notes with classmate"
                  />
                  <div className="flex gap-1 mt-1.5 flex-wrap">
                    {["Physics notes", "Homework doubt", "Class announcement"].map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        onClick={() =>
                          setReason(
                            chip === "Physics notes"
                              ? "Need to check physics class project group notes with classmate"
                              : chip === "Homework doubt"
                              ? "Clarifying NCERT math exercise question with teacher"
                              : "Reading urgent school class club announcement"
                          )
                        }
                        className="text-[8.5px] font-mono px-2 py-0.5 rounded-md bg-[#101728] text-gray-400 hover:text-indigo-300 border border-[#18233a] cursor-pointer"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      requestParentAccess(appName, appIcon, minutes, reason);
                      setSentSuccess(true);
                      setTimeout(() => {
                        setRequestModalOpen(false);
                        setSentSuccess(false);
                      }, 2000);
                    }}
                    className="flex-1 py-2.5 rounded-xl skeuo-btn-primary font-bold text-xs text-white flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <Send size={12} />
                    <span>Send Request to Parent</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRequestModalOpen(false)}
                    className="py-2.5 px-3 rounded-xl skeuo-btn-secondary text-gray-400 hover:text-white text-xs cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// 3. YouTube & Smart App Guardian Screen (mf)
export const YouTubeScreen: React.FC<{
  onNavigate: (s: string) => void;
  onSelectInterceptMode?: (m: string) => void;
}> = ({ onNavigate, onSelectInterceptMode }) => {
  const [apps, setApps] = useState([
    { id: "instagram", name: "Instagram", category: "Social Media", timeUsed: "42m / 30m", blocked: true, color: "from-pink-600 to-rose-600" },
    { id: "youtube", name: "YouTube", category: "Video & Shorts", timeUsed: "54m / 30m", blocked: true, color: "from-red-600 to-rose-700" },
    { id: "shorts", name: "TikTok", category: "Short Video", timeUsed: "35m / 20m", blocked: true, color: "from-purple-600 to-pink-600" },
    { id: "channel", name: "Snapchat", category: "Instant Messaging", timeUsed: "28m / 15m", blocked: true, color: "from-amber-500 to-yellow-600" },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="absolute inset-0 flex flex-col pt-16 px-4 pb-24 text-white bg-gradient-to-b from-[#090e1c] via-[#080b15] to-[#04060e] overflow-y-auto"
    >
      <div className="flex justify-between items-center mb-3">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={13} className="text-emerald-400" />
            Play Protect Certified
          </span>
          <h2 className="text-[18px] font-extrabold text-white">Smart App Guardian</h2>
        </div>
        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
          Clean Pass
        </span>
      </div>

      <div className="skeuo-card rounded-2xl p-3 border border-emerald-500/30 bg-emerald-950/20 mb-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-mono font-bold text-emerald-300 uppercase flex items-center gap-1">
            <ShieldCheck size={12} className="text-emerald-400" />
            Official Android UsageStats API
          </span>
          <span className="text-[9px] font-mono text-emerald-400 font-bold">100% Compliant</span>
        </div>
        <p className="text-[10.5px] text-gray-300 leading-snug">
          Zero Accessibility Service • Zero Background Popups (<code className="text-emerald-400">SYSTEM_ALERT_WINDOW</code> purged). Uses Google Play approved <strong>App Usage Access</strong> for screen time monitoring and clean activity gating.
        </p>
      </div>

      <div className="skeuo-card rounded-2xl p-3 border border-red-500/30 bg-gradient-to-br from-red-950/20 to-[#0e1222] mb-3 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-red-600 flex items-center justify-center text-white">
              <YouTubeIcon size={14} className="fill-white" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white leading-none">YouTube Channel Shield</h4>
              <span className="text-[8.5px] text-gray-400">Curriculum Channel Whitelist</span>
            </div>
          </div>
          <span className="text-[8px] font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-1.5 py-0.5 rounded-full">
            ACTIVE
          </span>
        </div>

        <div className="skeuo-well p-2 rounded-xl border border-[#182133] space-y-1 text-[9.5px]">
          <div className="flex justify-between items-center text-emerald-300 font-bold">
            <span className="flex items-center gap-1">
              <CheckCircle2 size={11} className="text-emerald-400" /> Whitelisted Study Channels:
            </span>
            <span className="text-[8px] font-mono text-emerald-400">UNLIMITED</span>
          </div>
          <p className="text-[8.5px] text-gray-400 leading-snug">
            Khan Academy, MIT OCW, CrashCourse, 3Blue1Brown, NCERT Solutions.
          </p>
          <div className="pt-1 border-t border-[#182133] flex justify-between items-center text-rose-300 font-bold">
            <span className="flex items-center gap-1">
              <Lock size={11} className="text-rose-400" /> Distracting Channels & Shorts:
            </span>
            <span className="text-[8px] font-mono text-rose-400">QUIZ GATED</span>
          </div>
          <p className="text-[8.5px] text-gray-400 leading-snug">
            Gaming, entertainment, and infinite Shorts feeds are auto-intercepted.
          </p>
        </div>
      </div>

      <div className="space-y-2 mb-3">
        <div className="flex justify-between items-center px-1">
          <h4 className="text-xs font-bold text-gray-300">Guarded Apps & Limits</h4>
          <span className="text-[9px] font-mono text-indigo-400">4 Active Locks</span>
        </div>
        {apps.map((app) => (
          <div
            key={app.id}
            className="skeuo-card p-3 rounded-2xl border border-[#222e47] flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <div
                className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${app.color} flex items-center justify-center text-white shadow-sm shrink-0`}
              >
                <Lock size={14} />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1">
                  {app.name}
                  {app.blocked && <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />}
                </div>
                <div className="text-[9.5px] text-gray-400">
                  {app.category} • {app.timeUsed}
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setApps(apps.map((a) => (a.id === app.id ? { ...a, blocked: !a.blocked } : a)));
              }}
              className={`px-2.5 py-1 rounded-full text-[9px] font-mono font-bold transition-all cursor-pointer ${
                app.blocked
                  ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                  : "bg-gray-800 text-gray-400 border border-[#222e47]"
              }`}
            >
              {app.blocked ? "GUARDED" : "ALLOWED"}
            </button>
          </div>
        ))}
      </div>

      <div className="skeuo-well p-3 rounded-2xl border border-[#182133] space-y-2">
        <div className="flex items-center justify-between text-[11px] font-bold text-white">
          <span>Test Native Activity Intercept</span>
          <span className="text-[9px] font-mono text-emerald-400">0ms Overhead</span>
        </div>
        <p className="text-[10px] text-gray-400 leading-snug">
          Simulate a student opening a restricted app or distracting YouTube channel. FocusDefend brings the quiz challenge directly to the foreground without any overlay popups.
        </p>
        <div className="grid grid-cols-2 gap-1.5">
          <button
            onClick={() => {
              onSelectInterceptMode?.("instagram");
              onNavigate("intercept");
            }}
            className="py-2 rounded-xl skeuo-btn-primary text-[10px] font-bold text-white flex items-center justify-center gap-1 cursor-pointer shadow-md"
          >
            <Play size={11} className="fill-white" />
            Instagram Test
          </button>
          <button
            onClick={() => {
              onSelectInterceptMode?.("channel");
              onNavigate("intercept");
            }}
            className="py-2 rounded-xl skeuo-btn-rose text-[10px] font-bold text-white flex items-center justify-center gap-1 cursor-pointer shadow-md"
          >
            <YouTubeIcon size={12} className="fill-white" />
            YT Channel Test
          </button>
        </div>
      </div>

      <button
        onClick={() => onNavigate("dashboard")}
        className="w-full skeuo-btn-secondary text-gray-300 hover:text-white rounded-full py-2.5 font-semibold text-xs cursor-pointer mt-auto"
      >
        Return to Dashboard
      </button>
    </motion.div>
  );
};

// 4. Quiz Screen (mx)
export const QuizScreen: React.FC<{
  onNavigate: (s: string) => void;
  credits?: number;
  onEarnCredits?: (earned: number) => void;
}> = ({ onNavigate, credits = 5, onEarnCredits }) => {
  const [selected, setSelected] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [currentCredits, setCurrentCredits] = useState(credits);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 flex flex-col pt-16 px-5 pb-24 text-white bg-[#070a14] overflow-y-auto animate-quiz-start"
    >
      <div className="flex justify-between items-center mb-3 text-[10px] font-mono text-gray-300">
        <span className="px-2.5 py-1 rounded-full skeuo-pill text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5 shadow-inner">
          <span className="w-1.5 h-1.5 rounded-full skeuo-led-green animate-pulse" />
          CBSE Class 10 PYQ
        </span>
        <span className="font-semibold text-emerald-400 flex items-center gap-1 skeuo-well px-2.5 py-1 rounded-md border border-emerald-500/30">
          <Clock size={11} className="text-emerald-400" /> 00:48s
        </span>
      </div>

      <div className="mb-3.5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400">
            Challenge 1 of 1
          </span>
          <span className="text-[10px] font-mono text-amber-300 font-bold">
            +1 Credit Reward
          </span>
        </div>
        <h2 className="text-[16px] font-bold leading-snug text-gray-100 mt-1">
          What is the tone of the story about the doctor, the snake, and the mirror?
        </h2>
      </div>

      <div className="flex flex-col gap-2 relative mb-3">
        {[
          "Serious and frightening",
          "Humorous and lighthearted",
          "Sad and melancholic",
          "Angry and aggressive",
        ].map((opt, idx) => {
          const isSelected = selected === idx;
          return (
            <div
              key={idx}
              onClick={() => !submitted && setSelected(idx)}
              className={`p-3 rounded-xl skeuo-card flex items-center justify-between cursor-pointer transition-all ${
                isSelected
                  ? "border-emerald-500/80 bg-[#0e1f18] shadow-[0_4px_16px_rgba(16,185,129,0.3)] translate-y-[1px]"
                  : "border-[#222e47] hover:border-[#334466] active:translate-y-[1px]"
              }`}
            >
              <span className={`text-[12.5px] font-medium ${isSelected ? "text-emerald-300 font-bold" : "text-gray-200"}`}>
                {opt}
              </span>
              <span className={`w-3.5 h-3.5 rounded-full ${isSelected ? "skeuo-led-green" : "border border-[#334466]"}`} />
            </div>
          );
        })}
      </div>

      {submitted ? (
        <div className="p-4 rounded-2xl skeuo-card border border-amber-500/50 bg-[#12111d] text-center animate-quiz-start relative overflow-hidden mt-auto">
          <div className="relative mb-2.5 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full skeuo-coin flex items-center justify-center animate-coin-stamp text-amber-950 font-black text-xl shadow-2xl">
              <Star size={24} className="text-amber-950 fill-amber-950 drop-shadow" />
            </div>
            <div className="absolute inset-0 rounded-full animate-credit-ring pointer-events-none" />
          </div>
          <div className="text-sm font-extrabold text-amber-300 font-mono tracking-wider mb-0.5 animate-ticker">
            +1 FOCUS CREDIT MINTED!
          </div>
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-400 mb-2">
            <CheckCircle2 size={14} /> Correct Answer! +15 Mins Unlocked
          </div>
          <div className="skeuo-well px-3 py-1.5 rounded-full text-[10.5px] font-mono text-gray-300 mb-3 border border-[#222e47] inline-flex items-center gap-2">
            <span>New Balance:</span>
            <span className="text-amber-300 font-bold font-mono">{currentCredits} Credits</span>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-1">
            <button
              onClick={() => onNavigate("dashboard")}
              className="py-2.5 rounded-full skeuo-btn-emerald font-bold text-xs text-white flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Dashboard</span>
              <ArrowRight size={13} />
            </button>
            <button
              onClick={() => onNavigate("wallet")}
              className="py-2.5 rounded-full skeuo-btn-secondary font-bold text-xs text-amber-300 hover:text-white flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>View Wallet</span>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => {
            setSubmitted(true);
            setCurrentCredits((c) => c + 1);
            onEarnCredits?.(1);
          }}
          className="w-full py-3.5 rounded-full skeuo-btn-emerald font-bold text-xs sm:text-sm text-white flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-auto active:translate-y-[2px]"
        >
          <span>Submit & Claim Screen Time</span>
          <ArrowRight size={15} />
        </button>
      )}

      <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] font-mono text-gray-400">
        <Sparkles size={11} className="text-indigo-400" />
        Evaluated in Real-Time by FocusDefend AI
      </div>
    </motion.div>
  );
};

// 5. Progress Screen (mg)
export const ProgressScreen: React.FC<{ onNavigate: (s: string) => void }> = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.98 }}
    transition={{ duration: 0.25 }}
    className="absolute inset-0 flex flex-col pt-16 px-5 pb-24 text-white bg-[#070a14] overflow-y-auto"
  >
    <div className="flex justify-between items-center mb-5">
      <div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400">
          Telemetry & Analytics
        </span>
        <h2 className="text-[19px] font-extrabold text-white">Study Progress</h2>
      </div>
      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full skeuo-pill text-[10px] font-mono text-amber-300 border-amber-500/30">
        <Flame size={12} className="text-amber-400 fill-amber-400" /> 7 Days Streak
      </div>
    </div>

    <div className="grid grid-cols-2 gap-2.5 mb-4">
      <div className="skeuo-well p-3.5 rounded-2xl">
        <span className="text-[9.5px] font-mono text-gray-400 uppercase">Focus Time</span>
        <div className="text-[18px] font-extrabold text-white mt-0.5">18h 40m</div>
        <span className="text-[9px] text-emerald-400 font-mono">+24% vs last week</span>
      </div>
      <div className="skeuo-well p-3.5 rounded-2xl">
        <span className="text-[9.5px] font-mono text-gray-400 uppercase">Distractions Gated</span>
        <div className="text-[18px] font-extrabold text-rose-400 mt-0.5">38 Apps</div>
        <span className="text-[9px] text-gray-400 font-mono">2h 45m saved</span>
      </div>
    </div>

    <div className="skeuo-card p-4 rounded-2xl border border-[#222e47] mb-4 space-y-3">
      <div className="flex justify-between items-center">
        <h4 className="text-xs font-bold text-gray-200">Subject Mastery Accuracy</h4>
        <span className="text-[10px] font-mono text-indigo-400">Class 10 CBSE</span>
      </div>
      <div className="space-y-2 text-xs">
        <div>
          <div className="flex justify-between text-[11px] mb-1">
            <span className="text-gray-300">Science (Physics & Bio)</span>
            <span className="font-mono text-emerald-400 font-bold">94%</span>
          </div>
          <div className="w-full h-1.5 bg-[#03050a] rounded-full overflow-hidden border border-[#182133]">
            <div className="h-full bg-emerald-400 rounded-full" style={{ width: "94%" }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[11px] mb-1">
            <span className="text-gray-300">Mathematics</span>
            <span className="font-mono text-indigo-400 font-bold">88%</span>
          </div>
          <div className="w-full h-1.5 bg-[#03050a] rounded-full overflow-hidden border border-[#182133]">
            <div className="h-full bg-indigo-500 rounded-full" style={{ width: "88%" }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[11px] mb-1">
            <span className="text-gray-300">English Literature</span>
            <span className="font-mono text-purple-400 font-bold">82%</span>
          </div>
          <div className="w-full h-1.5 bg-[#03050a] rounded-full overflow-hidden border border-[#182133]">
            <div className="h-full bg-purple-500 rounded-full" style={{ width: "82%" }} />
          </div>
        </div>
      </div>
    </div>

    <div className="skeuo-well p-3.5 rounded-2xl border border-[#182133]">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-[11px] font-bold text-gray-300">Recent Interceptions</h4>
        <span className="text-[9px] font-mono text-gray-400">Today</span>
      </div>
      <div className="space-y-2 text-[11px]">
        <div className="flex items-center justify-between text-gray-300">
          <span className="flex items-center gap-1.5">
            <InstagramIcon size={13} className="text-pink-400" /> Instagram
          </span>
          <span className="text-emerald-400 font-mono">+15m earned</span>
        </div>
        <div className="flex items-center justify-between text-gray-300">
          <span className="flex items-center gap-1.5">
            <Lock size={13} className="text-rose-400" /> YouTube Shorts
          </span>
          <span className="text-gray-400 font-mono">Blocked</span>
        </div>
      </div>
    </div>
  </motion.div>
);

// 6. Study Screen (mv)
export const StudyScreen: React.FC<{ onNavigate: (s: string) => void }> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'session' | 'optimizer'>("session");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [startTime, setStartTime] = useState("06:30 AM");
  const [endTime, setEndTime] = useState("08:00 AM");
  const [subjectText, setSubjectText] = useState("Physics (Light NCERT)");
  const {
    studySuggestions,
    activeSchedule,
    acceptStudySuggestion,
    editStudySuggestion,
    dismissStudySuggestion,
    resetStudySuggestions,
  } = useFocusStore();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="absolute inset-0 flex flex-col pt-16 px-4 pb-24 text-white bg-gradient-to-b from-[#081512] via-[#060b14] to-[#04060e] overflow-y-auto"
    >
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full skeuo-pill text-[9.5px] font-mono text-emerald-300 border-emerald-500/30">
          <span className="w-1.5 h-1.5 rounded-full skeuo-led-green animate-pulse" />
          STUDY ENGINE
        </div>
        <span className="text-[9.5px] font-mono text-gray-400">Class 10 CBSE</span>
      </div>

      <div className="flex items-center gap-1 p-1 rounded-xl bg-[#040810] border border-[#182635] mb-3 text-[9.5px] font-mono">
        <button
          type="button"
          onClick={() => setActiveTab("session")}
          className={`flex-1 py-1 rounded-lg text-center font-bold cursor-pointer transition-all ${
            activeTab === "session" ? "bg-teal-600 text-white shadow-md" : "text-gray-400 hover:text-white"
          }`}
        >
          Active Focus Session
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("optimizer")}
          className={`flex-1 py-1 rounded-lg text-center font-bold cursor-pointer transition-all flex items-center justify-center gap-1 ${
            activeTab === "optimizer" ? "bg-indigo-600 text-white shadow-md" : "text-gray-400 hover:text-white"
          }`}
        >
          <Zap size={11} className={activeTab === "optimizer" ? "text-amber-300" : ""} />
          <span>AI Scheduler</span>
          <span className="w-3.5 h-3.5 rounded-full bg-amber-500/30 text-amber-300 text-[8px] flex items-center justify-center">
            {studySuggestions.filter((s) => s.status === "pending").length}
          </span>
        </button>
      </div>

      {activeTab === "session" ? (
        <>
          <div className="skeuo-card rounded-[24px] p-4 mb-3 text-center relative overflow-hidden border border-emerald-500/20 shadow-[0_16px_36px_rgba(0,0,0,0.7)]">
            <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-400">
              Deep Focus Timer
            </span>
            <div className="text-[34px] font-extrabold text-white my-0.5 font-mono tracking-tight">
              32:45
            </div>
            <p className="text-[10px] text-gray-400">Target Session: 45 Minutes</p>
            <div className="w-full h-1.5 bg-[#020307] rounded-full mt-2.5 overflow-hidden border border-[#182133]">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                style={{ width: "72%" }}
              />
            </div>
          </div>

          <div className="skeuo-well p-3 rounded-2xl mb-3 border border-[#182133]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] font-mono uppercase text-gray-400">Current Focus</span>
              <span className="text-[8.5px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">
                Physics
              </span>
            </div>
            <h3 className="text-xs font-bold text-white">Light: Reflection & Refraction</h3>
            <p className="text-[10px] text-gray-400 mt-0.5">NCERT Chapter 10 • 3 PYQs Completed</p>
          </div>

          <div className="p-2.5 rounded-2xl skeuo-card border border-[#222e47] bg-[#0e1322] flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck size={14} />
              </div>
              <div>
                <div className="text-[11px] font-bold text-white">38 Distractions Gated</div>
                <div className="text-[8.5px] text-gray-400">Instagram, Shorts, WhatsApp silenced</div>
              </div>
            </div>
            <span className="text-[8.5px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full border border-emerald-500/20">
              Knox Guard
            </span>
          </div>

          <div className="skeuo-card p-2.5 rounded-2xl border border-[#1b263b] mb-3">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-[9px] font-mono uppercase tracking-wider text-gray-400">
                Today's FocusDefend Blocks
              </span>
              <span className="text-[8.5px] font-mono text-emerald-400">Enforced</span>
            </div>
            <div className="space-y-1.5">
              {activeSchedule.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center text-[9.5px] bg-[#050813] p-1.5 rounded-xl border border-[#172236]"
                >
                  <div>
                    <span className="font-bold text-white block truncate">{item.subject}</span>
                    <span className="text-[8.5px] font-mono text-gray-400">{item.timeSlot}</span>
                  </div>
                  <span
                    className={`text-[8px] font-mono px-1.5 py-0.5 rounded ${
                      item.status === "active"
                        ? "bg-teal-500/20 text-teal-300 border border-teal-500/30 animate-pulse"
                        : item.status === "optimized"
                        ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                        : "bg-gray-800 text-gray-400"
                    }`}
                  >
                    {item.status === "active"
                      ? "ACTIVE"
                      : item.status === "optimized"
                      ? "AI SYNCED"
                      : "SCHEDULED"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onNavigate("dashboard")}
            className="w-full skeuo-btn-secondary text-gray-300 hover:text-white rounded-full py-2.5 font-semibold text-xs cursor-pointer mt-auto"
          >
            Pause / End Study Session
          </button>
        </>
      ) : (
        <div className="space-y-3">
          <div className="skeuo-card p-3 rounded-2xl border border-rose-500/40 bg-gradient-to-br from-rose-950/25 to-[#0d0711] relative overflow-hidden">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] font-mono text-rose-300 font-bold uppercase flex items-center gap-1">
                <TriangleAlert size={11} className="text-rose-400" /> Repeated Usage Identified
              </span>
              <span className="text-[8px] font-mono text-gray-400">UsageStats Log</span>
            </div>
            <h4 className="text-[11.5px] font-bold text-white mb-0.5">
              18 Instagram Launches During 3:00 PM – 4:30 PM Study Period
            </h4>
            <p className="text-[9.5px] text-gray-300 leading-tight mb-2">
              Repeated distraction attempts detected during afternoon scheduled block. Focus ratio plummeted to 42% with heavy willpower friction.
            </p>
            <div className="grid grid-cols-2 gap-1.5 text-[9px] font-mono">
              <div className="bg-[#04060d] p-1.5 rounded-lg border border-rose-900/30">
                <span className="text-gray-400 block text-[8px]">Afternoon Session Retention</span>
                <span className="text-rose-400 font-bold text-[11px]">42% Completed</span>
              </div>
              <div className="bg-[#04060d] p-1.5 rounded-lg border border-emerald-900/30">
                <span className="text-gray-400 block text-[8px]">Morning Session Retention</span>
                <span className="text-emerald-400 font-bold text-[11px]">94% Completed</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center px-0.5">
            <h4 className="text-xs font-bold text-white flex items-center gap-1">
              <Sparkles size={12} className="text-indigo-400" />
              <span>Optimized Schedule Suggestions</span>
            </h4>
            <button
              onClick={resetStudySuggestions}
              className="text-[8.5px] font-mono text-gray-400 hover:text-white underline cursor-pointer"
            >
              Reset
            </button>
          </div>

          {studySuggestions.map((sug) => (
            <div
              key={sug.id}
              className={`p-3 rounded-2xl skeuo-card border transition-all ${
                sug.status === "accepted"
                  ? "border-emerald-500/50 bg-emerald-950/20"
                  : sug.status === "edited"
                  ? "border-indigo-500/50 bg-indigo-950/20"
                  : sug.status === "dismissed"
                  ? "border-gray-800 bg-[#060812] opacity-50"
                  : "border-[#24314c] bg-[#0c1220]"
              }`}
            >
              <div className="flex justify-between items-start gap-2 mb-1.5">
                <div>
                  <h5 className="text-[11px] font-bold text-white leading-tight">{sug.title}</h5>
                  <span className="text-[8.5px] font-mono text-indigo-300 block mt-0.5">
                    {sug.suggestedSlot}
                  </span>
                </div>
                {sug.status === "accepted" && (
                  <span className="text-[8px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full shrink-0">
                    ✓ Applied
                  </span>
                )}
                {sug.status === "edited" && (
                  <span className="text-[8px] font-mono text-indigo-300 bg-indigo-950/60 border border-indigo-500/30 px-2 py-0.5 rounded-full shrink-0">
                    ✓ Custom
                  </span>
                )}
                {sug.status === "dismissed" && (
                  <span className="text-[8px] font-mono text-gray-500 bg-gray-900 border border-gray-800 px-2 py-0.5 rounded-full shrink-0">
                    Dismissed
                  </span>
                )}
              </div>
              <p className="text-[9.5px] text-gray-300 leading-tight mb-2">{sug.rationale}</p>
              <div className="grid grid-cols-3 gap-1 bg-[#050812] p-1.5 rounded-xl border border-[#162035] mb-2.5 text-[8.5px] font-mono">
                <div className="text-center">
                  <span className="text-gray-400 block text-[7.5px]">Completion</span>
                  <span className="text-emerald-400 font-bold">{sug.statistics.completionRate}</span>
                </div>
                <div className="text-center border-x border-[#162035]">
                  <span className="text-gray-400 block text-[7.5px]">Distraction Drop</span>
                  <span className="text-indigo-300 font-bold">{sug.statistics.distractionDrop}</span>
                </div>
                <div className="text-center">
                  <span className="text-gray-400 block text-[7.5px]">Quiz Gain</span>
                  <span className="text-amber-400 font-bold">{sug.statistics.quizAccuracy}</span>
                </div>
              </div>

              {sug.status === "pending" && (
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => acceptStudySuggestion(sug.id)}
                    className="flex-1 py-1.5 rounded-xl skeuo-btn-primary font-bold text-[10px] text-white flex items-center justify-center gap-1 shadow-md cursor-pointer"
                  >
                    <Check size={11} strokeWidth={3} />
                    <span>Accept Schedule</span>
                  </button>
                  <button
                    onClick={() => {
                      setEditingId(sug.id);
                      setSubjectText(sug.subject);
                    }}
                    className="py-1.5 px-2.5 rounded-xl skeuo-btn-secondary text-gray-300 hover:text-white font-mono text-[9.5px] flex items-center gap-1 cursor-pointer border border-[#23314d]"
                  >
                    <Sliders size={11} />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => dismissStudySuggestion(sug.id)}
                    className="py-1.5 px-2 rounded-xl text-gray-500 hover:text-gray-300 text-[9.5px] cursor-pointer"
                    title="Dismiss suggestion"
                  >
                    <X size={12} />
                  </button>
                </div>
              )}

              {editingId === sug.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 p-2.5 rounded-xl bg-[#070b16] border border-indigo-500/40 text-[9.5px]"
                >
                  <span className="text-[9px] font-mono text-indigo-300 font-bold block mb-1">
                    Customize Time & Subject:
                  </span>
                  <div className="grid grid-cols-2 gap-1 mb-1.5">
                    <div>
                      <span className="text-gray-400 text-[8px] block">Start:</span>
                      <input
                        type="text"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="w-full px-1.5 py-0.5 rounded bg-[#03050c] border border-[#1b263b] text-white font-mono text-[9px]"
                      />
                    </div>
                    <div>
                      <span className="text-gray-400 text-[8px] block">End:</span>
                      <input
                        type="text"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="w-full px-1.5 py-0.5 rounded bg-[#03050c] border border-[#1b263b] text-white font-mono text-[9px]"
                      />
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => {
                        editStudySuggestion(sug.id, startTime, endTime, subjectText);
                        setEditingId(null);
                      }}
                      className="flex-1 py-1 rounded-lg skeuo-btn-primary font-bold text-[9px] text-white cursor-pointer"
                    >
                      Save & Apply Restriction
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="py-1 px-2 rounded-lg skeuo-btn-secondary text-gray-400 text-[9px] cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          ))}

          <div className="p-2.5 rounded-xl bg-[#04060d] border border-[#182133] text-[8.5px] text-gray-400 leading-tight">
            <span className="font-bold text-gray-300 block mb-0.5">
              Existing Authorized Settings Guarantee:
            </span>
            Schedule adaptations sync exclusively through pre-authorized FocusDefend Knox / UsageStats settings. Zero overlay popups or invasive permissions.
          </div>
        </div>
      )}
    </motion.div>
  );
};

// 7. Wallet Screen (my)
export const WalletScreen: React.FC<{
  onNavigate: (s: string) => void;
  credits?: number;
}> = ({ onNavigate, credits = 5 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.98 }}
    transition={{ duration: 0.25 }}
    className="absolute inset-0 flex flex-col pt-16 px-5 pb-24 text-white bg-gradient-to-b from-[#141006] via-[#0b0c16] to-[#04060e] overflow-y-auto"
  >
    <div className="flex justify-between items-center mb-4">
      <div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
          Ledger & Vault
        </span>
        <h2 className="text-[19px] font-extrabold text-white">Rewards Wallet</h2>
      </div>
      <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
        Sync Active
      </span>
    </div>

    <div className="skeuo-card rounded-[26px] p-5 mb-4 relative overflow-hidden border border-amber-500/30 shadow-[0_16px_36px_rgba(0,0,0,0.7)] bg-gradient-to-br from-amber-950/20 to-transparent">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300">
          Available Balance
        </span>
        <Star size={16} className="text-amber-400 fill-amber-400" />
      </div>
      <div className="text-[32px] font-extrabold text-white font-mono tracking-tight">
        {credits} <span className="text-sm font-sans font-normal text-amber-200">Focus Credits</span>
      </div>
      <p className="text-[10px] text-gray-400 mt-1">1 Credit = 15 Minutes Unrestricted Access</p>
      <div className="mt-4 pt-3 border-t border-[#222e47] flex justify-between items-center text-[10px]">
        <span className="text-gray-400">Screen Time Pool</span>
        <span className="text-emerald-400 font-bold font-mono">15m Active Right Now</span>
      </div>
    </div>

    <div className="skeuo-well p-3.5 rounded-2xl mb-4 border border-[#182133] space-y-2.5">
      <div className="flex justify-between items-center">
        <h4 className="text-xs font-bold text-gray-200">Transaction History</h4>
        <span className="text-[9px] font-mono text-gray-400">CBSE Term 1</span>
      </div>
      <div className="space-y-2 text-[10.5px]">
        <div className="flex items-center justify-between text-gray-300">
          <div>
            <div className="font-semibold text-white">Science PYQ Completed</div>
            <div className="text-[9px] text-gray-500">Today, 12:40 PM</div>
          </div>
          <span className="text-emerald-400 font-mono font-bold">+1 Credit</span>
        </div>
        <div className="flex items-center justify-between text-gray-300">
          <div>
            <div className="font-semibold text-white">English Literature Challenge</div>
            <div className="text-[9px] text-gray-500">Today, 11:15 AM</div>
          </div>
          <span className="text-emerald-400 font-mono font-bold">+1 Credit</span>
        </div>
        <div className="flex items-center justify-between text-gray-300">
          <div>
            <div className="font-semibold text-white">Instagram Leisure Unlock</div>
            <div className="text-[9px] text-gray-500">Yesterday, 07:30 PM</div>
          </div>
          <span className="text-rose-400 font-mono font-bold">-1 Credit</span>
        </div>
      </div>
    </div>

    <button
      onClick={() => onNavigate("quiz")}
      className="w-full skeuo-btn-emerald text-white rounded-full py-3.5 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-auto"
    >
      <Sparkles size={14} />
      <span>Solve PYQ to Earn More Credits</span>
    </button>
  </motion.div>
);

// 8. Protection / Guard Screen (mb)
export const ProtectionScreen: React.FC<{ onNavigate: (s: string) => void }> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'shields' | 'audit' | 'curfew'>("shields");
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditStep, setAuditStep] = useState(0);
  const [auditDone, setAuditDone] = useState(false);

  const vectors = [
    { id: "V01", name: "PlayProtectComplianceEngine", severity: "CRITICAL", vector: "Play Protect Malware Flags & A11y Risks", patch: "AccessibilityService and SYSTEM_ALERT_WINDOW removed. Replaced with official Android UsageStatsManager + Foreground Guardian. 100% Play Protect clean pass.", status: "HARDENED" },
    { id: "V02", name: "SplitScreenInterceptor", severity: "HIGH", vector: "Multi-Window Snapping Race", patch: "Auto-collapses unauthorized split-screen to Home", status: "PATCHED" },
    { id: "V03", name: "Knox DeviceOwner Core", severity: "HIGH", vector: "Safe Mode Boot Bypass", patch: "DISALLOW_SAFE_BOOT hardware lock enforcement", status: "PATCHED" },
    { id: "V04", name: "PiP MediaSession Meter", severity: "MEDIUM", vector: "Background PiP Video Leak", patch: "AudioTrack & MediaSession hardware usage meter", status: "PATCHED" },
    { id: "V05", name: "SQLCipher + Keystore", severity: "MEDIUM", vector: "Root Database Tampering", patch: "AES-256 DB encryption sealed in hardware Keystore", status: "PATCHED" },
    { id: "V06", name: "TrueTime Monotonic Clock", severity: "MEDIUM", vector: "Clock Rollback Glitch", patch: "SystemClock.elapsedRealtime() + signed NTP", status: "PATCHED" },
    { id: "V07", name: "Sticky Foreground Watchdog", severity: "MEDIUM", vector: "OEM Battery Killer Drops", patch: "SPECIAL_USE foreground daemon + auto whitelist", status: "PATCHED" },
    { id: "V08", name: "HMAC Nonce Verifier", severity: "LOW", vector: "Quick-Pass Token Replay", patch: "Cryptographic one-time nonces per unlock session", status: "PATCHED" },
    { id: "V09", name: "Multi-User Profile Shield", severity: "LOW", vector: "Guest Space Sandbox Escape", patch: "DISALLOW_ADD_USER locks guest switching", status: "PATCHED" },
    { id: "V10", name: "Kernel UID UsageStats Hook", severity: "LOW", vector: "Launcher Tile Deep Link Leak", patch: "Low-level process UID poller catches raw intents", status: "PATCHED" },
    { id: "V11", name: "UsageStatsAppGuardian", severity: "HIGH", vector: "Screen Time Bypass & App Cloaking", patch: "System-level screen time limits and study lockout via UsageStats API; zero overlay popups; sub-0.5% battery draw.", status: "PATCHED" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="absolute inset-0 flex flex-col pt-16 px-4 pb-24 text-white bg-gradient-to-b from-[#0e0714] via-[#090b14] to-[#04060e] overflow-y-auto"
    >
      <div className="flex justify-between items-center mb-3">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
            Hardened Security Core
          </span>
          <h2 className="text-[18px] font-extrabold text-white">Special Access & Shield Hub</h2>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] font-mono font-bold">
          <span className="w-1.5 h-1.5 rounded-full skeuo-led-green animate-pulse" />
          v1.3.0 CORE
        </div>
      </div>

      <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#04060d] border border-[#182133] mb-3 text-[10px] font-mono">
        <button
          onClick={() => setActiveTab("shields")}
          className={`flex-1 py-1 rounded-lg text-center font-bold cursor-pointer transition-all ${
            activeTab === "shields" ? "bg-indigo-600 text-white shadow-md" : "text-gray-400 hover:text-white"
          }`}
        >
          Shield Architecture
        </button>
        <button
          onClick={() => setActiveTab("audit")}
          className={`flex-1 py-1 rounded-lg text-center font-bold cursor-pointer transition-all ${
            activeTab === "audit" ? "bg-emerald-600 text-white shadow-md" : "text-gray-400 hover:text-white"
          }`}
        >
          Live Penetration Test
        </button>
        <button
          onClick={() => setActiveTab("curfew")}
          className={`flex-1 py-1 rounded-lg text-center font-bold cursor-pointer transition-all ${
            activeTab === "curfew" ? "bg-purple-600 text-white shadow-md" : "text-gray-400 hover:text-white"
          }`}
        >
          Curfew / Apps
        </button>
      </div>

      {activeTab === "shields" && (
        <div className="space-y-2.5">
          <div className="skeuo-card rounded-2xl p-3.5 border border-emerald-500/30 bg-emerald-950/15">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase text-emerald-300 font-bold flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-400" />
                Play Protect Certified: 100% Clean Pass
              </span>
              <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/40">
                11/11 Hardened
              </span>
            </div>
            <p className="text-[10.5px] text-gray-300 leading-snug">
              AccessibilityService and background popup overlays (<code className="text-emerald-400">SYSTEM_ALERT_WINDOW</code>) are completely eliminated. Uses official Android <strong>UsageStatsManager</strong> + Foreground Activity Guardian. Play Protect passes with zero malware flags.
            </p>
          </div>

          <div className="skeuo-well p-3 rounded-2xl border border-[#182133] space-y-2 max-h-[300px] overflow-y-auto">
            {vectors.map((item) => (
              <div
                key={item.id}
                className="p-2.5 rounded-xl bg-[#04060d] border border-[#182133] flex flex-col gap-1"
              >
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <span className="font-mono text-[9px] text-gray-400">[{item.id}]</span>
                    {item.name}
                  </span>
                  <span
                    className={`text-[8.5px] font-mono px-1.5 py-0.2 rounded-full border font-bold ${
                      item.severity === "HIGH"
                        ? "bg-rose-500/20 text-rose-300 border-rose-500/40"
                        : item.severity === "MEDIUM"
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                        : "bg-blue-500/20 text-blue-300 border-blue-500/40"
                    }`}
                  >
                    {item.severity}
                  </span>
                </div>
                <div className="text-[10px] text-gray-400 font-mono">Threat: {item.vector}</div>
                <div className="text-[10px] text-emerald-300 font-semibold flex items-center gap-1">
                  <CheckCircle2 size={11} className="text-emerald-400 shrink-0" />
                  {item.patch}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "audit" && (
        <div className="space-y-3">
          <div className="skeuo-card rounded-2xl p-4 border border-indigo-500/30 bg-indigo-950/20 text-center">
            <div className="w-10 h-10 rounded-full mx-auto skeuo-btn-secondary flex items-center justify-center mb-2 text-indigo-400">
              <Terminal size={20} />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">Automated OS Loophole Verification</h4>
            <p className="text-[10px] text-gray-400 mb-3 max-w-[240px] mx-auto">
              Simulates real-world student bypass vectors to verify zero-leakage defense.
            </p>
            <button
              onClick={() => {
                setIsAuditing(true);
                setAuditDone(false);
                setAuditStep(0);
                let count = 0;
                const interval = setInterval(() => {
                  count++;
                  setAuditStep(count);
                  if (count >= vectors.length) {
                    clearInterval(interval);
                    setTimeout(() => {
                      setIsAuditing(false);
                      setAuditDone(true);
                    }, 500);
                  }
                }, 300);
              }}
              disabled={isAuditing}
              className={`w-full py-2.5 rounded-full text-xs font-bold cursor-pointer transition-all flex items-center justify-center gap-2 ${
                isAuditing ? "bg-gray-700 text-gray-300 cursor-not-allowed" : "skeuo-btn-emerald text-white shadow-lg"
              }`}
            >
              <RefreshCw size={13} className={isAuditing ? "animate-spin" : ""} />
              {isAuditing ? `Verifying Vector ${auditStep}/${vectors.length}...` : "Run Live Penetration Test"}
            </button>
          </div>

          <div className="skeuo-well p-3 rounded-2xl border border-[#182133] space-y-1.5 font-mono text-[10px] max-h-[240px] overflow-y-auto">
            <div className="text-gray-400 text-[9px] pb-1 border-b border-[#182133] flex justify-between items-center">
              <span>Security Terminal Log</span>
              <span>Kernel API 35</span>
            </div>
            {vectors.map((vec, idx) => {
              const isPassed = auditDone || auditStep > idx;
              const isTesting = isAuditing && auditStep === idx;
              return (
                <div key={vec.id} className="flex items-center justify-between py-0.5">
                  <span className={isPassed ? "text-gray-300" : isTesting ? "text-amber-300 font-bold" : "text-gray-600"}>
                    {vec.id}: {vec.name}
                  </span>
                  {isPassed && (
                    <span className="text-emerald-400 font-bold flex items-center gap-1 text-[9px]">
                      [BLOCKED] PASS
                    </span>
                  )}
                  {isTesting && (
                    <span className="text-amber-400 animate-pulse text-[9px]">TESTING...</span>
                  )}
                  {!isPassed && !isTesting && (
                    <span className="text-gray-600 text-[9px]">PENDING</span>
                  )}
                </div>
              );
            })}
            {auditDone && (
              <div className="mt-2 pt-2 border-t border-emerald-500/30 text-emerald-400 font-bold text-center text-[10.5px]">
                ✓ 11/11 EXPLOITS NEUTRALIZED • ZERO VULNERABILITIES DETECTED
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === "curfew" && (
        <div className="space-y-3">
          <div className="skeuo-well p-3.5 rounded-2xl border border-[#182133]">
            <div className="flex justify-between items-center mb-1.5">
              <h4 className="text-xs font-bold text-gray-200">Family Agreement Curfew</h4>
              <span className="text-[9px] font-mono text-amber-400">Night Lock</span>
            </div>
            <p className="text-[10px] text-gray-400 mb-2">
              Device curfew automatically enforces study / sleep block.
            </p>
            <div className="flex justify-between items-center bg-[#04060d] p-2 rounded-xl text-[10px] font-mono">
              <span className="text-gray-300">Curfew Window:</span>
              <span className="text-white font-bold">21:30 — 06:00</span>
            </div>
          </div>

          <div className="skeuo-well p-3.5 rounded-2xl border border-[#182133] space-y-2">
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-xs font-bold text-gray-200">Guarded Apps</h4>
              <span className="text-[9px] font-mono text-gray-400">38 Guarded</span>
            </div>
            <div className="flex justify-between items-center text-[10.5px]">
              <span className="flex items-center gap-1.5">
                <InstagramIcon size={12} className="text-pink-400" /> Instagram
              </span>
              <span className="text-[9px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded-full">
                Guarded
              </span>
            </div>
            <div className="flex justify-between items-center text-[10.5px]">
              <span className="flex items-center gap-1.5">
                <Lock size={12} className="text-rose-400" /> TikTok / Reels
              </span>
              <span className="text-[9px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded-full">
                Always Blocked
              </span>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => onNavigate("dashboard")}
        className="w-full skeuo-btn-secondary text-gray-300 hover:text-white rounded-full py-2.5 font-semibold text-xs cursor-pointer mt-auto"
      >
        Return to Dashboard
      </button>
    </motion.div>
  );
};

// 9. Parent Dashboard Screen (mw)
export const ParentScreen: React.FC<{ onNavigate: (s: string) => void }> = ({ onNavigate }) => {
  const {
    parentRequests,
    activeGrants,
    approveParentRequest,
    rejectParentRequest,
    revokeGrant,
    requestParentAccess,
  } = useFocusStore();

  const pendingRequests = parentRequests.filter((r) => r.status === "pending");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="absolute inset-0 flex flex-col pt-16 px-4 pb-24 text-white bg-[#070a14] overflow-y-auto"
    >
      <div className="flex justify-between items-center mb-2.5">
        <div>
          <span className="text-[9.5px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
            FocusDefend Guardian
          </span>
          <h2 className="text-[18px] font-extrabold text-white">Parent Dashboard</h2>
        </div>
        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] font-mono font-bold">
          <span className="w-1.5 h-1.5 rounded-full skeuo-led-green animate-pulse" />
          LIVE SYNC
        </div>
      </div>

      <div className="mb-3">
        <div className="flex justify-between items-center mb-1 px-0.5">
          <div className="flex items-center gap-1.5">
            <Key size={12} className="text-amber-400" />
            <h4 className="text-xs font-bold text-white">Quick Approval Queue</h4>
          </div>
          {pendingRequests.length > 0 ? (
            <span className="text-[8.5px] font-mono text-amber-300 bg-amber-500/20 border border-amber-500/30 px-1.5 py-0.2 rounded-full animate-pulse">
              {pendingRequests.length} Pending
            </span>
          ) : (
            <span className="text-[8.5px] font-mono text-gray-400">All Clear</span>
          )}
        </div>

        {pendingRequests.length > 0 ? (
          <div className="space-y-2">
            {pendingRequests.map((req) => (
              <div
                key={req.id}
                className="skeuo-card p-3 rounded-2xl border border-amber-500/40 bg-gradient-to-br from-amber-950/20 to-[#0e1220] shadow-[0_12px_28px_rgba(0,0,0,0.8)]"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center font-bold text-amber-300 text-[10px]">
                      MS
                    </div>
                    <div>
                      <h5 className="text-[11px] font-bold text-white">{req.studentName}</h5>
                      <span className="text-[8.5px] text-gray-400 font-mono">
                        Requests +{req.requestedMinutes}m on {req.appName}
                      </span>
                    </div>
                  </div>
                  <span className="text-[8px] font-mono text-gray-400">{req.timestamp}</span>
                </div>
                <div className="bg-[#050711] p-2 rounded-xl border border-[#1b253b] mb-2 text-[9.5px]">
                  <span className="text-gray-400 block text-[8px] font-mono">Student Note:</span>
                  <p className="text-gray-200 italic mt-0.5">“{req.reason}”</p>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    onClick={() => approveParentRequest(req.id, 15)}
                    className="py-1.5 rounded-xl skeuo-btn-primary font-bold text-[9.5px] text-white flex items-center justify-center gap-1 shadow-md cursor-pointer"
                  >
                    <Check size={11} strokeWidth={3} />
                    <span>Approve 15m</span>
                  </button>
                  <button
                    onClick={() => approveParentRequest(req.id, 30)}
                    className="py-1.5 rounded-xl skeuo-btn-indigo font-bold text-[9.5px] text-white flex items-center justify-center gap-1 shadow-md cursor-pointer border border-indigo-500/40"
                  >
                    <span>+30m Pass</span>
                  </button>
                  <button
                    onClick={() => rejectParentRequest(req.id)}
                    className="py-1.5 rounded-xl skeuo-btn-rose font-bold text-[9.5px] text-rose-200 hover:text-white flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <X size={11} />
                    <span>Decline</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="skeuo-well p-2.5 rounded-xl border border-[#162132] text-center">
            <span className="text-[9.5px] text-gray-400 block mb-1">
              Zero pending requests. Ward device is strictly protected.
            </span>
            <button
              onClick={() =>
                requestParentAccess(
                  "Instagram",
                  "instagram",
                  15,
                  "Need to check physics class project group notes with classmate"
                )
              }
              className="text-[8.5px] font-mono text-indigo-400 hover:text-indigo-300 underline cursor-pointer"
            >
              + Simulate Student Request (+15m Instagram)
            </button>
          </div>
        )}
      </div>

      {activeGrants.length > 0 && (
        <div className="mb-3">
          <div className="flex justify-between items-center mb-1 px-0.5">
            <div className="flex items-center gap-1.5">
              <Clock size={12} className="text-emerald-400" />
              <h4 className="text-xs font-bold text-white">Active Time-Limited Grants</h4>
            </div>
            <span className="text-[8.5px] font-mono text-emerald-400 bg-emerald-500/20 px-1.5 py-0.2 rounded-full border border-emerald-500/30">
              Live
            </span>
          </div>
          <div className="space-y-1.5">
            {activeGrants.map((grant) => (
              <div
                key={grant.id}
                className="skeuo-card p-2.5 rounded-2xl border border-emerald-500/40 bg-[#071317] flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[11px] font-bold text-white">{grant.appName}</span>
                    <span className="text-[8.5px] font-mono text-gray-400">
                      • Granted {grant.durationMinutes}m
                    </span>
                  </div>
                  <div className="text-[14px] font-mono font-extrabold text-emerald-300 mt-0.5">
                    {Math.floor(grant.remainingSeconds / 60)}:
                    {String(grant.remainingSeconds % 60).padStart(2, "0")} remaining
                  </div>
                  <span className="text-[8px] font-mono text-gray-400">
                    Restores restriction automatically at 00:00
                  </span>
                </div>
                <button
                  onClick={() => revokeGrant(grant.id)}
                  className="py-1 px-2.5 rounded-xl skeuo-btn-rose font-bold text-[9px] text-rose-200 hover:text-white cursor-pointer"
                >
                  Revoke Now
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="skeuo-card rounded-[20px] p-3 mb-2.5 border border-indigo-500/20 bg-gradient-to-br from-indigo-950/30 to-[#0e1222]">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center font-bold text-indigo-300 text-[10px]">
              MS
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-white">Mayank Sharma</h4>
              <span className="text-[9px] text-gray-400 font-mono">Galaxy M34 • Grade 10</span>
            </div>
          </div>
          <span className="text-[8px] font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-1.5 py-0.5 rounded-full">
            Knox Active
          </span>
        </div>
        <div className="skeuo-well p-2 rounded-xl border border-[#182133] mt-1">
          <div className="flex justify-between text-[9px] font-mono mb-1">
            <span className="text-indigo-300 font-bold">Focus: 45m</span>
            <span className="text-rose-300">Leisure: 15m / 60m</span>
          </div>
          <div className="w-full h-1.5 bg-gray-800/80 rounded-full overflow-hidden flex border border-[#182133]">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-l-full"
              style={{ width: "75%" }}
            />
            <div className="h-full bg-rose-500/80" style={{ width: "25%" }} />
          </div>
          <div className="flex justify-between text-[8px] text-gray-400 font-mono mt-1">
            <span>75% Productive Ratio</span>
            <span className="text-emerald-400 font-semibold">+5 Credits Earned</span>
          </div>
        </div>
      </div>

      <div className="skeuo-well p-2.5 rounded-2xl mb-2.5 border border-[#182133] space-y-1">
        <div className="flex justify-between items-center mb-0.5">
          <h4 className="text-[11px] font-bold text-gray-200">Real-Time Guardian Audit</h4>
          <span className="text-[8.5px] font-mono text-gray-400">Today</span>
        </div>
        <div className="flex items-center justify-between text-[9px] bg-[#060812] p-1.5 rounded-xl border border-[#182133]">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <div>
              <div className="font-bold text-white">Parent Pass Issued</div>
              <div className="text-[8px] text-gray-400">Time-limited grant • Auto-restore active</div>
            </div>
          </div>
          <span className="text-[8px] font-mono text-emerald-400 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-500/20">
            Authorized
          </span>
        </div>
        <div className="flex items-center justify-between text-[9px] bg-[#060812] p-1.5 rounded-xl border border-[#182133]">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <div>
              <div className="font-bold text-white">Instagram Gate Intercept</div>
              <div className="text-[8px] text-gray-400">12:42 PM • UsageStats Intercept</div>
            </div>
          </div>
          <span className="text-[8px] font-mono text-rose-400 bg-rose-950/40 px-1.5 py-0.5 rounded border border-rose-500/20">
            Gated
          </span>
        </div>
      </div>

      <button
        onClick={() => onNavigate("dashboard")}
        className="w-full skeuo-btn-secondary text-gray-300 hover:text-white rounded-full py-2 font-semibold text-xs cursor-pointer mt-auto"
      >
        Return to Dashboard
      </button>
    </motion.div>
  );
};

// 10. Settings Screen (mj)
export const SettingsScreen: React.FC<{ onNavigate: (s: string) => void }> = ({ onNavigate }) => {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [showSignoutConfirm, setShowSignoutConfirm] = useState(false);
  const [signedOut, setSignedOut] = useState(false);
  const { setOtaModalOpen } = useFocusStore();

  useEffect(() => {
    if (theme === "light" || theme === "dark") {
      setCurrentTheme(theme);
    }
  }, [theme]);

  const changeTheme = (t: 'dark' | 'light') => {
    setCurrentTheme(t);
    setTheme(t);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className={`absolute inset-0 flex flex-col pt-16 px-4 pb-24 overflow-y-auto transition-colors duration-200 ${
        currentTheme === "light" ? "bg-[#eef2f8] text-gray-900" : "bg-[#070a14] text-white"
      }`}
    >
      <div className="flex justify-between items-center mb-3">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center gap-1.5">
            <Settings size={12} className="text-amber-400" />
            Device & Account
          </span>
          <h2 className={`text-[18px] font-extrabold ${currentTheme === "light" ? "text-gray-900" : "text-white"}`}>
            Profile & Settings
          </h2>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] font-mono font-bold">
          <span className="w-1.5 h-1.5 rounded-full skeuo-led-green animate-pulse" />
          KNOX ACTIVE
        </div>
      </div>

      {signedOut ? (
        <div className="my-auto text-center p-5 rounded-2xl skeuo-card border border-rose-500/40 bg-rose-950/20 space-y-3">
          <div className="w-14 h-14 mx-auto rounded-full bg-rose-600/20 border-2 border-rose-500/50 flex items-center justify-center text-rose-400 shadow-lg">
            <Lock size={26} />
          </div>
          <h3 className="text-base font-extrabold text-white">Student Account Signed Out</h3>
          <p className="text-xs text-gray-300 leading-relaxed max-w-xs mx-auto">
            Device session terminated. All entertainment apps and background popups are frozen under Guardian Safe Mode.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setSignedOut(false)}
              className="w-full py-2.5 rounded-xl skeuo-btn-primary text-xs font-bold text-white flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <User size={14} />
              Sign In as Mayank Sharma
            </button>
          </div>
        </div>
      ) : (
        <>
          <div
            className={`p-3.5 rounded-2xl border mb-3 shadow-md ${
              currentTheme === "light" ? "bg-white border-gray-300 shadow-gray-200" : "skeuo-card border-[#222e47]"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-amber-500 flex items-center justify-center text-white font-extrabold text-sm shadow-md">
                    MS
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#070a14] flex items-center justify-center">
                    <CheckCircle2 size={8} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className={`text-sm font-extrabold ${currentTheme === "light" ? "text-gray-900" : "text-white"}`}>
                    Mayank Sharma
                  </h3>
                  <div className="text-[10px] text-gray-400 font-mono">Grade 10 • CBSE Board</div>
                </div>
              </div>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                PRO TIER
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-[#222e47] text-[9.5px]">
              <div className={`p-2 rounded-xl ${currentTheme === "light" ? "bg-gray-100" : "bg-[#060812]"}`}>
                <span className="text-gray-400 block text-[8px] uppercase font-mono">Device Hardware</span>
                <span className={`font-semibold truncate block ${currentTheme === "light" ? "text-gray-800" : "text-gray-200"}`}>
                  Samsung M34 (#FD-9942)
                </span>
              </div>
              <div className={`p-2 rounded-xl ${currentTheme === "light" ? "bg-gray-100" : "bg-[#060812]"}`}>
                <span className="text-gray-400 block text-[8px] uppercase font-mono">Guardian Sync</span>
                <span className={`font-semibold truncate block ${currentTheme === "light" ? "text-gray-800" : "text-emerald-400"}`}>
                  Priya Sharma (Parent)
                </span>
              </div>
            </div>
          </div>

          <div
            className={`p-3 rounded-2xl border mb-3 ${
              currentTheme === "light" ? "bg-white border-gray-300" : "skeuo-card border-[#222e47]"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`text-xs font-bold flex items-center gap-1.5 ${currentTheme === "light" ? "text-gray-900" : "text-white"}`}>
                <Sparkles size={12} className="text-amber-400" />
                Theme & Display Appearance
              </span>
              <span className="text-[9px] font-mono text-gray-400">
                {currentTheme === "dark" ? "Dark Mode" : "Light Mode"}
              </span>
            </div>
            <div className="skeuo-well p-1 rounded-xl flex items-center gap-1 border border-[#182133]">
              <button
                onClick={() => changeTheme("dark")}
                className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                  currentTheme === "dark"
                    ? "bg-gradient-to-b from-[#2a344d] to-[#141b2c] text-white shadow-[0_3px_8px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.2)] border border-[#3b4c6e]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Moon size={12} className={currentTheme === "dark" ? "text-indigo-400 fill-indigo-400/30" : ""} />
                Dark Mode
              </button>
              <button
                onClick={() => changeTheme("light")}
                className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                  currentTheme === "light"
                    ? "bg-gradient-to-b from-white to-gray-200 text-gray-900 shadow-[0_3px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.9)] border border-gray-300"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Sun size={12} className={currentTheme === "light" ? "text-amber-500 fill-amber-500/30" : ""} />
                Light Mode
              </button>
            </div>
          </div>

          <div
            className={`p-2.5 rounded-2xl border mb-3 space-y-1.5 text-[9.5px] ${
              currentTheme === "light" ? "bg-white border-gray-300" : "skeuo-well border-[#182133]"
            }`}
          >
            <div className="flex items-center justify-between font-bold">
              <span className={currentTheme === "light" ? "text-gray-800" : "text-gray-300"}>
                Restriction Engine
              </span>
              <span className="text-emerald-400 font-mono">UsageStats API</span>
            </div>
            <div className="flex items-center justify-between text-gray-400">
              <span>Google Play Protect</span>
              <span className="text-emerald-400 font-mono">100% Certified Clean</span>
            </div>
            <div className="flex items-center justify-between text-gray-400">
              <span>Background Popups</span>
              <span className="text-gray-400 font-mono">0 (No Overlay Windows)</span>
            </div>
            <div className="flex items-center justify-between text-gray-400 pt-1 border-t border-[#182133]">
              <span>Firmware Version</span>
              <button
                onClick={() => setOtaModalOpen(true)}
                className="text-emerald-400 font-mono font-bold hover:underline cursor-pointer"
              >
                v2.3.0-PROD (Check OTA)
              </button>
            </div>
          </div>

          <div className="mt-auto pt-1 space-y-2">
            {showSignoutConfirm ? (
              <div className="p-3 rounded-2xl skeuo-card border border-rose-500/50 bg-rose-950/30 space-y-2">
                <div className="text-[10.5px] font-bold text-white flex items-center gap-1.5">
                  <TriangleAlert size={13} className="text-rose-400" />
                  Confirm Profile Sign Out?
                </div>
                <p className="text-[9px] text-gray-300 leading-snug">
                  Signing out terminates session and locks restricted apps until guardian PIN is entered.
                </p>
                <div className="flex items-center gap-2 pt-0.5">
                  <button
                    onClick={() => setShowSignoutConfirm(false)}
                    className="flex-1 py-1.5 rounded-xl skeuo-btn-secondary text-[9.5px] font-semibold text-gray-300 hover:text-white cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setSignedOut(true);
                      setShowSignoutConfirm(false);
                    }}
                    className="flex-1 py-1.5 rounded-xl skeuo-btn-rose text-[9.5px] font-bold text-white shadow-md cursor-pointer flex items-center justify-center gap-1"
                  >
                    <LogOut size={11} />
                    Sign Out & Lock
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowSignoutConfirm(true)}
                className="w-full py-2.5 rounded-2xl skeuo-btn-rose text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:brightness-110 active:scale-98 transition-all"
              >
                <LogOut size={13} />
                <span>Sign Out of Account</span>
              </button>
            )}
            <button
              onClick={() => onNavigate("dashboard")}
              className="w-full skeuo-btn-secondary text-gray-400 hover:text-white rounded-full py-2 font-medium text-[11px] cursor-pointer"
            >
              Return to Home
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};
