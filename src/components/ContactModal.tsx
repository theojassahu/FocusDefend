import React, { useState } from 'react';
import { X, Send, CheckCircle2, Mail } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [role, setRole] = useState<'Parent' | 'Student' | 'School' | 'Partner'>('Parent');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
    >
      <div className="bg-brand-midnight border border-white/15 rounded-card max-w-lg w-full flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-brand-surface">
          <div className="flex items-center gap-2.5">
            <Mail className="w-5 h-5 text-brand-green" />
            <div>
              <h3 className="text-lg font-bold text-white">Get in Touch with FocusDefend</h3>
              <p className="text-xs text-brand-muted">For families, schools, and educational partners</p>
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
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-brand-green/20 text-brand-green mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Inquiry Received</h4>
              <p className="text-xs text-brand-muted max-w-sm mx-auto leading-relaxed">
                Thank you, {name || 'visitor'}. Your note has been registered for the FocusDefend team review (Aviral, Ojas, Jisan).
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-5 py-2 rounded-btn bg-brand-green text-brand-midnight font-bold text-xs cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-brand-muted mb-1.5">
                  I am a:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {(['Parent', 'Student', 'School', 'Partner'] as const).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`py-1.5 px-2 rounded-lg text-xs font-semibold text-center border cursor-pointer transition-all ${
                        role === r
                          ? 'bg-brand-green text-brand-midnight border-brand-green font-bold'
                          : 'bg-brand-surface text-brand-muted border-white/10 hover:text-white'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-brand-muted mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-brand-surface border border-white/10 text-white text-xs sm:text-sm focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-brand-muted mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-brand-surface border border-white/10 text-white text-xs sm:text-sm focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-brand-muted mb-1">
                  Message / Pilot Interest
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us about your learning goals or institutional requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-brand-surface border border-white/10 text-white text-xs sm:text-sm focus:border-brand-green focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-btn bg-brand-green hover:bg-brand-emerald text-brand-midnight font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-glow-sm cursor-pointer transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
