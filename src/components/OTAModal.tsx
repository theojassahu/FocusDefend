import React from 'react';
import { X, Send, Cpu, AlertCircle } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestEarlyAccess?: () => void;
}

export const OTAModal: React.FC<ModalProps> = ({ isOpen, onClose, onRequestEarlyAccess }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
    >
      <div className="bg-brand-midnight border border-white/15 rounded-card max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-brand-surface">
          <div className="flex items-center gap-2.5">
            <Cpu className="w-5 h-5 text-brand-green" />
            <div>
              <h3 className="text-lg font-bold text-white">FocusDefend Android Distribution</h3>
              <p className="text-xs text-brand-muted">Architecture Specification &amp; Release Channel</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/10 text-brand-muted hover:text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-brand-muted leading-relaxed">
          <div className="p-4 rounded-xl bg-brand-deep border border-brand-green/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white">FocusDefend Android Client</span>
              <span className="text-[10px] font-mono text-brand-green bg-brand-green/10 px-2 py-0.5 rounded border border-brand-green/30">
                ARM64 · Early Access
              </span>
            </div>
            <p className="text-xs text-brand-muted">
              Built natively for Android 10-15. The client integrates the native AccessibilityService interceptor, NCERT curriculum question banks, and an encrypted local habit ledger.
            </p>
            <div className="pt-1 flex flex-col gap-2">
              <button
                onClick={() => {
                  if (onRequestEarlyAccess) {
                    onRequestEarlyAccess();
                  } else {
                    onClose();
                  }
                }}
                className="w-full py-3 rounded-btn bg-brand-green hover:bg-brand-emerald text-brand-midnight font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-glow-sm cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Request Early Access APK</span>
              </button>
            </div>
            <p className="text-[10px] font-mono text-brand-darkMuted text-center">
              Pilots are currently coordinated with registered families and partner schools.
            </p>
          </div>

          <h4 className="font-bold text-white text-sm">Required Android Permissions Architecture:</h4>
          
          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-brand-surface/60 border border-white/5 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">
                1
              </span>
              <div>
                <p className="font-bold text-white text-xs">Accessibility Service</p>
                <p className="text-[11px] text-brand-muted">
                  Used strictly to detect when a restricted app is launched so the educational challenge can be presented. Zero data logging.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-brand-surface/60 border border-white/5 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">
                2
              </span>
              <div>
                <p className="font-bold text-white text-xs">Usage Access (UsageStatsManager)</p>
                <p className="text-[11px] text-brand-muted">
                  Measures continuous study session durations and aggregate screen time summaries for habit reporting.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-brand-surface/60 border border-white/5 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">
                3
              </span>
              <div>
                <p className="font-bold text-white text-xs">Battery Optimization Whitelist</p>
                <p className="text-[11px] text-brand-muted">
                  Prevents Android OS from prematurely terminating the background focus guardian service during revision sessions.
                </p>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-brand-surface/30 border border-white/10 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
            <p className="text-[11px] text-brand-darkMuted leading-relaxed">
              Target compatibility: Android 10 (Q) through Android 15. Compatible with Samsung OneUI, Google Pixel, Xiaomi MIUI, and OnePlus OxygenOS.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
