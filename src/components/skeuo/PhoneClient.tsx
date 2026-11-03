import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Key,
  Check,
  Lock,
  Clock,
  X,
  CloudDownload,
} from 'lucide-react';
import {
  PhoneDock,
  DashboardScreen,
  InterceptScreen,
  YouTubeScreen,
  QuizScreen,
  ProgressScreen,
  StudyScreen,
  WalletScreen,
  ProtectionScreen,
  ParentScreen,
  SettingsScreen,
} from './PhoneScreens';
import { useFocusStore } from '../../data/focusStore';

export const PhoneClient: React.FC = () => {
  const [screen, setScreen] = useState("dashboard");
  const [interceptMode, setInterceptMode] = useState("instagram");
  const [credits, setCredits] = useState(5);
  const [mounted, setMounted] = useState(false);

  const {
    hasOtaNotification,
    dismissOtaNotification,
    setOtaModalOpen,
    inAppNotification,
    dismissInAppToast,
    tickGrants,
    parentRequests,
    activeGrants,
  } = useFocusStore();

  useEffect(() => {
    const timer = setInterval(() => {
      tickGrants();
    }, 1000);
    return () => clearInterval(timer);
  }, [tickGrants]);

  useEffect(() => {
    setMounted(true);
    const screens = [
      "dashboard",
      "intercept",
      "youtube",
      "quiz",
      "progress",
      "study",
      "wallet",
      "protection",
      "parent",
      "settings",
    ];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % screens.length;
      setScreen(screens[idx]);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="relative w-[320px] h-[670px] md:w-[370px] md:h-[770px] mx-auto opacity-0" />
    );
  }

  return (
    <div className="relative w-[320px] h-[670px] md:w-[370px] md:h-[770px] mx-auto pointer-events-auto">
      {/* Hardware Buttons */}
      <div className="absolute -left-[14px] top-28 w-[4px] h-12 bg-[#2c3242] rounded-l-md shadow-inner" />
      <div className="absolute -left-[14px] top-44 w-[4px] h-12 bg-[#2c3242] rounded-l-md shadow-inner" />
      <div className="absolute -right-[14px] top-32 w-[4px] h-16 bg-[#2c3242] rounded-r-md shadow-inner" />

      {/* Screen Selection Pills on Top */}
      <div className="absolute -top-11 left-1/2 -translate-x-1/2 flex items-center gap-1 z-50 bg-[#0c101d] p-1.5 rounded-full border border-[#27324d] shadow-[0_12px_28px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.12)] text-[9px] font-mono flex-wrap justify-center max-w-[400px]">
        <button
          onClick={() => setScreen("dashboard")}
          className={`px-2 py-0.5 rounded-full cursor-pointer transition-all ${
            screen === "dashboard" ? "bg-indigo-600 text-white font-bold" : "text-gray-400 hover:text-white"
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setScreen("intercept")}
          className={`px-2 py-0.5 rounded-full cursor-pointer transition-all flex items-center gap-1 ${
            screen === "intercept" ? "bg-rose-600 text-white font-bold" : "text-gray-400 hover:text-white"
          }`}
        >
          <span>Intercept</span>
          {activeGrants.some((g) => g.status === "active") && (
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          )}
        </button>
        <button
          onClick={() => setScreen("youtube")}
          className={`px-2 py-0.5 rounded-full cursor-pointer transition-all ${
            screen === "youtube" ? "bg-indigo-600 text-white font-bold" : "text-gray-400 hover:text-white"
          }`}
        >
          YouTube
        </button>
        <button
          onClick={() => setScreen("quiz")}
          className={`px-2 py-0.5 rounded-full cursor-pointer transition-all ${
            screen === "quiz" ? "bg-emerald-600 text-white font-bold" : "text-gray-400 hover:text-white"
          }`}
        >
          Quiz
        </button>
        <button
          onClick={() => setScreen("progress")}
          className={`px-2 py-0.5 rounded-full cursor-pointer transition-all ${
            screen === "progress" ? "bg-purple-600 text-white font-bold" : "text-gray-400 hover:text-white"
          }`}
        >
          Progress
        </button>
        <button
          onClick={() => setScreen("study")}
          className={`px-2 py-0.5 rounded-full cursor-pointer transition-all ${
            screen === "study" ? "bg-teal-600 text-white font-bold" : "text-gray-400 hover:text-white"
          }`}
        >
          Study
        </button>
        <button
          onClick={() => setScreen("wallet")}
          className={`px-2 py-0.5 rounded-full cursor-pointer transition-all ${
            screen === "wallet" ? "bg-amber-600 text-white font-bold" : "text-gray-400 hover:text-white"
          }`}
        >
          Wallet
        </button>
        <button
          onClick={() => setScreen("protection")}
          className={`px-2 py-0.5 rounded-full cursor-pointer transition-all ${
            screen === "protection" ? "bg-blue-600 text-white font-bold" : "text-gray-400 hover:text-white"
          }`}
        >
          Guard
        </button>
        <button
          onClick={() => setScreen("parent")}
          className={`px-2 py-0.5 rounded-full cursor-pointer transition-all flex items-center gap-1 ${
            screen === "parent" ? "bg-cyan-600 text-white font-bold" : "text-gray-400 hover:text-white"
          }`}
        >
          <span>Parent</span>
          {parentRequests.some((r) => r.status === "pending") && (
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
          )}
        </button>
        <button
          onClick={() => setScreen("settings")}
          className={`px-2 py-0.5 rounded-full cursor-pointer transition-all ${
            screen === "settings" ? "bg-amber-600 text-white font-bold" : "text-gray-400 hover:text-white"
          }`}
        >
          Settings
        </button>
      </div>

      {/* Phone Chassis */}
      <div className="w-full h-full relative">
        <div className="absolute inset-0 rounded-[46px] border-[10px] border-[#181d2c] bg-[#070a14] shadow-[0_30px_90px_rgba(0,0,0,0.9),inset_0_0_0_1px_rgba(255,255,255,0.2)] overflow-hidden flex flex-col ring-1 ring-white/10">
          {/* Front Camera Notch */}
          <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-50 shadow-[inset_0_0_3px_rgba(255,255,255,0.3)]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-900/50 rounded-full" />
          </div>

          {/* Status Bar */}
          <div className="absolute top-4 left-7 z-50 text-[11px] font-mono font-bold text-white/90">
            13:05
          </div>
          <div className="absolute top-4 right-7 z-50 flex gap-2 items-center">
            <div className="flex items-end gap-[2px] h-2.5">
              <div className="w-0.5 h-1 bg-white/90 rounded-full" />
              <div className="w-0.5 h-1.5 bg-white/90 rounded-full" />
              <div className="w-0.5 h-2 bg-white/90 rounded-full" />
              <div className="w-0.5 h-2.5 bg-white/90 rounded-full" />
            </div>
            <div className="w-5 h-2.5 rounded-[3px] border-[1.5px] border-white/90 p-[1px] relative">
              <div className="w-3.5 h-full bg-emerald-400 rounded-[1px]" />
              <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-1 bg-white/90 rounded-r-sm" />
            </div>
          </div>

          {/* In-App Notifications Toast */}
          <AnimatePresence>
            {inAppNotification && (
              <motion.div
                key={inAppNotification.id}
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -80, opacity: 0 }}
                transition={{ type: "spring", stiffness: 380, damping: 26 }}
                onClick={() => {
                  if (inAppNotification.targetScreen) setScreen(inAppNotification.targetScreen);
                  dismissInAppToast();
                }}
                className={`absolute top-10 left-3 right-3 z-50 p-2.5 rounded-2xl skeuo-card border shadow-[0_16px_36px_rgba(0,0,0,0.9)] cursor-pointer transition-all group ${
                  inAppNotification.type === "parent_request"
                    ? "border-amber-500/70 bg-[#161108]/95 hover:border-amber-400"
                    : inAppNotification.type === "grant_approved"
                    ? "border-emerald-500/70 bg-[#071510]/95 hover:border-emerald-400"
                    : inAppNotification.type === "grant_expired"
                    ? "border-rose-500/70 bg-[#19090b]/95 hover:border-rose-400"
                    : "border-indigo-500/70 bg-[#091124]/95 hover:border-indigo-400"
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center text-white shrink-0 shadow-md ${
                      inAppNotification.type === "parent_request"
                        ? "bg-gradient-to-tr from-amber-500 to-yellow-400"
                        : inAppNotification.type === "grant_approved"
                        ? "bg-gradient-to-tr from-emerald-500 to-teal-400"
                        : inAppNotification.type === "grant_expired"
                        ? "bg-gradient-to-tr from-rose-600 to-red-500"
                        : "bg-gradient-to-tr from-indigo-600 to-purple-500"
                    }`}
                  >
                    {inAppNotification.type === "parent_request" && <Key size={14} className="animate-pulse" />}
                    {inAppNotification.type === "grant_approved" && <Check size={14} />}
                    {inAppNotification.type === "grant_expired" && <Lock size={14} />}
                    {inAppNotification.type === "schedule_updated" && <Clock size={14} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[9px] font-mono font-bold flex items-center gap-1 ${
                          inAppNotification.type === "parent_request"
                            ? "text-amber-300"
                            : inAppNotification.type === "grant_approved"
                            ? "text-emerald-300"
                            : inAppNotification.type === "grant_expired"
                            ? "text-rose-300"
                            : "text-indigo-300"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
                        {inAppNotification.type === "parent_request"
                          ? "Parent Action Required"
                          : inAppNotification.type === "grant_approved"
                          ? "Access Approved"
                          : inAppNotification.type === "grant_expired"
                          ? "Restriction Restored"
                          : "Focus Schedule"}
                      </span>
                      <span className="text-[8px] font-mono text-gray-400">
                        {inAppNotification.timestamp}
                      </span>
                    </div>
                    <h5 className="text-[11px] font-bold text-white truncate">
                      {inAppNotification.title}
                    </h5>
                    <p className="text-[9px] text-gray-300 leading-tight">
                      {inAppNotification.message}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      dismissInAppToast();
                    }}
                    className="text-gray-400 hover:text-white p-1 cursor-pointer transition-colors"
                    title="Dismiss notification"
                  >
                    <X size={12} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* OTA Push Notification Toast */}
          <AnimatePresence>
            {hasOtaNotification && !inAppNotification && (
              <motion.div
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -80, opacity: 0 }}
                transition={{ type: "spring", stiffness: 380, damping: 26 }}
                onClick={() => setOtaModalOpen(true)}
                className="absolute top-10 left-3 right-3 z-50 p-2.5 rounded-2xl skeuo-card border border-emerald-500/50 bg-[#091122]/95 shadow-[0_16px_36px_rgba(0,0,0,0.9)] cursor-pointer hover:border-emerald-400/80 transition-all group"
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shrink-0 shadow-md">
                    <CloudDownload size={14} className="animate-bounce" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[9.5px] font-mono font-bold text-emerald-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        FocusDefend System OTA
                      </span>
                      <span className="text-[8.5px] font-mono text-gray-400">Just now</span>
                    </div>
                    <h5 className="text-[11px] font-bold text-white truncate">
                      v2.3.0 Ready: Play Protect Certified
                    </h5>
                    <p className="text-[9px] text-gray-300 leading-tight">
                      Floating nav dock & UsageStats core • Tap to review
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      dismissOtaNotification();
                    }}
                    className="text-gray-400 hover:text-white p-1 cursor-pointer transition-colors"
                    title="Dismiss notification"
                  >
                    <X size={12} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Screen Content Container */}
          <div className="flex-1 w-full h-full relative">
            <AnimatePresence mode="wait">
              {screen === "dashboard" && (
                <DashboardScreen key="dashboard" onNavigate={setScreen} credits={credits} />
              )}
              {screen === "intercept" && (
                <InterceptScreen
                  key="intercept"
                  onNavigate={setScreen}
                  mode={interceptMode}
                  onModeChange={setInterceptMode}
                />
              )}
              {screen === "youtube" && (
                <YouTubeScreen
                  key="youtube"
                  onNavigate={setScreen}
                  onSelectInterceptMode={(m) => {
                    setInterceptMode(m);
                    setScreen("intercept");
                  }}
                />
              )}
              {screen === "quiz" && (
                <QuizScreen
                  key="quiz"
                  onNavigate={setScreen}
                  credits={credits}
                  onEarnCredits={(e) => setCredits((c) => c + e)}
                />
              )}
              {screen === "progress" && <ProgressScreen key="progress" onNavigate={setScreen} />}
              {screen === "study" && <StudyScreen key="study" onNavigate={setScreen} />}
              {screen === "wallet" && (
                <WalletScreen key="wallet" onNavigate={setScreen} credits={credits} />
              )}
              {screen === "protection" && <ProtectionScreen key="protection" onNavigate={setScreen} />}
              {screen === "parent" && <ParentScreen key="parent" onNavigate={setScreen} />}
              {screen === "settings" && <SettingsScreen key="settings" onNavigate={setScreen} />}
            </AnimatePresence>
          </div>

          {/* Bottom Dock Navigation */}
          <PhoneDock active={screen} onNavigate={setScreen} />

          {/* Screen Light Reflection */}
          <div className="absolute top-0 right-0 w-32 h-64 bg-gradient-to-bl from-white/10 to-transparent pointer-events-none z-50 rounded-tr-[36px]" />
        </div>
      </div>
    </div>
  );
};
