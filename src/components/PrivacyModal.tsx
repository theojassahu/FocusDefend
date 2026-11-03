import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
            <ShieldCheck className="w-5 h-5 text-brand-green" />
            <div>
              <h3 className="text-lg font-bold text-white">FocusDefend Privacy Policy</h3>
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
          <div className="p-3 rounded-xl bg-brand-surface border border-brand-green/20 text-white text-xs">
            <strong>Notice:</strong> This is a draft privacy policy framework outlining FocusDefend's technical data minimization principles. It requires formal legal review before commercial publication.
          </div>

          <h4 className="font-bold text-white text-sm pt-2">1. On-Device Telemetry &amp; Data Minimization</h4>
          <p>
            FocusDefend operates primarily on-device. Application blocking and quiz assessments are executed locally within the Android runtime. We collect only high-level foreground usage statistics (such as app bundle identifiers and foreground duration timestamps) necessary to evaluate focus sessions.
          </p>

          <h4 className="font-bold text-white text-sm pt-2">2. What We Strictly Do NOT Collect</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>We do not access or read text messages, WhatsApp conversations, or emails.</li>
            <li>We do not record screen contents, screenshots, or webcam video.</li>
            <li>We do not record keystrokes or search queries.</li>
            <li>We do not sell student data or use it for targeted advertising.</li>
          </ul>

          <h4 className="font-bold text-white text-sm pt-2">3. Parental Supervision Transparency</h4>
          <p>
            Any telemetry shared with parents (such as total study time and earned Focus Credits) is fully visible to the student within their app dashboard. There are no covert tracking features.
          </p>

          <h4 className="font-bold text-white text-sm pt-2">4. AI Architecture &amp; Data Safety</h4>
          <p>
            AI recommendations are computed on aggregated usage patterns. No personally identifiable student records are shared with third-party generative model training providers.
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-brand-surface flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-btn bg-brand-green text-brand-midnight font-bold text-xs transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
