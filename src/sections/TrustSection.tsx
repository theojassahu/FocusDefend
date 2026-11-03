import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { 
  ShieldCheck, 
  Users, 
  FileText, 
  Cpu, 
  Award, 
  Lock, 
  ExternalLink,
  Info
} from 'lucide-react';
import { trustPrinciples } from '../data/features';

interface TrustSectionProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const getPrincipleIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Award':
        return <Award className="w-5 h-5" />;
      default:
        return <Lock className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="trust"
      aria-label="Trust and Privacy"
      className="py-24 md:py-32 relative bg-brand-deep/75 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TRANSPARENCY & ETHICS"
          title="Student wellbeing comes first."
          description="Technology built for families must hold itself to uncompromising standards of transparency, dignity, and local data minimization."
        />

        {/* 5 Principles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {trustPrinciples.map((principle) => (
            <div
              key={principle.title}
              className="glass-panel glass-panel-hover rounded-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-green">
                    {getPrincipleIcon(principle.icon)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-green/90 bg-brand-green/10 px-2 py-0.5 rounded border border-brand-green/20">
                    {principle.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {principle.title}
                </h3>

                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}

          {/* Verification Statement Card */}
          <div className="glass-panel rounded-card p-6 flex flex-col justify-between border-brand-green/30 bg-brand-surface/40">
            <div>
              <div className="w-10 h-10 rounded-xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-green mb-4">
                <Info className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Draft Legal Documentation
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Our complete privacy framework and acceptable usage policies are available for family and school administrator review.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 flex flex-wrap gap-3">
              <button
                onClick={onOpenPrivacy}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-green hover:underline cursor-pointer"
              >
                <span>Review Draft Privacy Policy</span>
                <ExternalLink className="w-3 h-3" />
              </button>
              <button
                onClick={onOpenTerms}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-muted hover:text-white hover:underline cursor-pointer"
              >
                <span>Terms of Service</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Clear Notice Banner */}
        <div className="max-w-3xl mx-auto p-4 rounded-xl bg-brand-midnight/90 border border-white/10 text-center">
          <p className="text-xs text-brand-darkMuted leading-relaxed">
            Legal notice: FocusDefend does not claim third-party certifications not verified in the software repository. Policies presented are draft operational standards subject to legal review before commercial publication.
          </p>
        </div>

      </div>
    </section>
  );
};
