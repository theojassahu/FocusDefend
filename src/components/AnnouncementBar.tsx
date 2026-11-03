import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AnnouncementBarProps {
  onOpenOTA?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenOTA }) => {
  return (
    <aside aria-label="Announcement" className="relative z-50 bg-[#0B1B32]/90 border-b border-white/10 backdrop-blur-md px-4 py-2 text-xs text-brand-muted">
      <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center gap-3 text-center">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand-green/20 text-brand-green font-mono text-[11px] font-semibold border border-brand-green/30">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            Android Native
          </span>
          <span className="hidden sm:inline text-white/90 font-medium">
            FocusDefend Architecture: Native Habit Transformation &amp; NCERT Learning Gating
          </span>
          <span className="sm:hidden text-white/90 font-medium">
            FocusDefend for Android
          </span>
        </div>
        
        {onOpenOTA && (
          <button
            onClick={onOpenOTA}
            className="inline-flex items-center gap-1 text-[11px] font-mono text-brand-green hover:text-brand-mint transition-colors ml-2 cursor-pointer font-semibold"
          >
            <span>Architecture Specs</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        )}
      </div>
    </aside>
  );
};
