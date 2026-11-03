import React from 'react';
import { X, FileText } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
    >
      <div className="bg-brand-midnight border border-white/15 rounded-card max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-brand-surface">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-brand-green" />
            <div>
              <h3 className="text-lg font-bold text-white">FocusDefend Terms of Service</h3>
              <span className="text-[10px] font-mono uppercase text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                Draft Documentation · For Review
              </span>
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
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-brand-muted leading-relaxed">
          <h4 className="font-bold text-white text-sm">1. Acceptance of Terms</h4>
          <p>
            By testing, installing, or evaluating FocusDefend application packages and web interfaces, you agree to these operational guidelines designed for student habit improvement.
          </p>

          <h4 className="font-bold text-white text-sm pt-2">2. Educational Curriculum Usage</h4>
          <p>
            FocusDefend integrates study prompts aligned with NCERT public academic standards for revision purposes. FocusDefend is an independent habit-coaching tool and is not an official branch of government educational boards.
          </p>

          <h4 className="font-bold text-white text-sm pt-2">3. Hardware &amp; Battery Safety</h4>
          <p>
            FocusDefend uses native Android system hooks (AccessibilityService and UsageStatsManager) designed to operate under strict power envelopes (sub-2% battery impact). Users retain full authority to grant or revoke system permissions via Android OS Settings at any time.
          </p>

          <h4 className="font-bold text-white text-sm pt-2">4. Disclaimers</h4>
          <p>
            FocusDefend provides digital habit coaching and time-management incentives. It does not replace medical or psychological counseling for severe gaming or behavioral disorders.
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-brand-surface flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-btn bg-brand-green text-brand-midnight font-bold text-xs transition-colors cursor-pointer"
          >
            Acknowledge Terms
          </button>
        </div>

      </div>
    </div>
  );
};
