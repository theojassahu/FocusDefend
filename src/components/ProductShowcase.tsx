import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { 
  ShieldCheck, 
  BookOpen, 
  Coins, 
  Users, 
  Clock, 
  CheckCircle2, 
  Lock, 
  Activity,
  AlertCircle,
  Terminal,
  FileImage,
  Layers
} from 'lucide-react';

interface AppScreenSpec {
  id: string;
  name: string;
  badge: string;
  icon: any;
  purpose: string;
  nativeActivity: string;
  screenshotFile: string;
  architectureComponents: string[];
  wireframeBlueprint: {
    sectionTitle: string;
    keyElements: string[];
    intendedOutput: string;
  };
}

export const ProductShowcase: React.FC = () => {
  const screens: AppScreenSpec[] = [
    {
      id: 'dashboard',
      name: 'Home Dashboard',
      badge: 'Main Hub',
      icon: Activity,
      purpose: 'Central student dashboard displaying today’s earned Focus Credits balance, study session progress, and active restriction status.',
      nativeActivity: 'MainActivity.kt',
      screenshotFile: 'dashboard.webp',
      architectureComponents: [
        'Today’s Focus Credit Balance Ledger',
        'Study Target Session Countdown',
        'Active Restrictions Status Monitor',
        'NCERT Learning Quiz Launchpad'
      ],
      wireframeBlueprint: {
        sectionTitle: 'Daily Activity Overview',
        keyElements: [
          'BalanceCard (Earned Credits & Redeemable Screen Time)',
          'Circular Session Progress Indicator',
          'Active Schedule Banner (Homework / Curfew Gating)',
          'Quick Navigation to Subject Quiz Modules'
        ],
        intendedOutput: 'Real-time overview of earned privileges and academic status'
      }
    },
    {
      id: 'app-restrictions',
      name: 'App Restriction Interface',
      badge: 'Accessibility Shield',
      icon: Lock,
      purpose: 'Configures application categories into Whitelisted (Always Free), Restricted (Credit Gated), and Curfew Blocked.',
      nativeActivity: 'AppGatingActivity.kt',
      screenshotFile: 'focus-mode.webp',
      architectureComponents: [
        'Native AccessibilityService Window Interceptor',
        'Application Categorization Rules Engine',
        'Scheduled Family Curfew Definitions',
        'System Bypass Prevention Safeguard'
      ],
      wireframeBlueprint: {
        sectionTitle: 'Application Rule Management',
        keyElements: [
          'App Category Segmented Controller (Games, Social, Tools)',
          'Per-App Credit Threshold Assignment',
          'Curfew Schedule Grid (School / Night Hours)',
          'Accessibility Service Operational Status Indicator'
        ],
        intendedOutput: 'Deterministic application interception during designated study blocks'
      }
    },
    {
      id: 'study-sessions',
      name: 'Study Sessions',
      badge: 'Focus Engine',
      icon: Clock,
      purpose: 'Dedicated study timer that records uninterrupted learning blocks and verifies continuous educational app usage.',
      nativeActivity: 'FocusTimerActivity.kt',
      screenshotFile: 'focus-credits.webp',
      architectureComponents: [
        'Foreground Stopwatch Service',
        'Android UsageStats Foreground Detector',
        'Optional Do Not Disturb Hardware Hook',
        'Interruption & App-Switch Counter'
      ],
      wireframeBlueprint: {
        sectionTitle: 'Active Focus Session',
        keyElements: [
          'Large Precision Elapsed & Remaining Timer',
          'Subject Module Tag (e.g., NCERT Science)',
          'Session Continuity Telemetry (0 app switches)',
          'Pending Credit Yield Upon Verification'
        ],
        intendedOutput: 'Uninterrupted study tracking with automatic credit crediting'
      }
    },
    {
      id: 'learning-quiz',
      name: 'Learning & Quiz Interface',
      badge: 'NCERT Bank',
      icon: BookOpen,
      purpose: 'Curriculum-aligned practice challenges that verify student comprehension before granting screen-time credits.',
      nativeActivity: 'QuizEvaluatorActivity.kt',
      screenshotFile: 'learning.webp',
      architectureComponents: [
        'NCERT Curriculum Question Bank Engine',
        'Objective Assessment Evaluation Runtime',
        'Immediate Conceptual Feedback Display',
        'On-Device Result Verification'
      ],
      wireframeBlueprint: {
        sectionTitle: 'Curriculum Assessment Engine',
        keyElements: [
          'Question Prompt Header with Grade & Subject Tag',
          'Multiple Choice / Conceptual Challenge Cards',
          'Immediate Answer Validation with Explanations',
          'Credit Award Animation on Verified Success'
        ],
        intendedOutput: 'Verified comprehension requirement before credit disbursement'
      }
    },
    {
      id: 'focus-credits',
      name: 'Focus Credits Ledger',
      badge: 'Credit Ledger',
      icon: Coins,
      purpose: 'Encrypted transaction record tracking earned credits from academic effort and redeemed credits for recreational time.',
      nativeActivity: 'CreditsLedgerActivity.kt',
      screenshotFile: 'parent-dashboard.webp',
      architectureComponents: [
        'Encrypted Local SQLite Database (Room)',
        'Timestamped Transaction Audit Trail',
        'Credit Redemption & Time-Bank Engine',
        'Expiration & Daily Quota Guardrails'
      ],
      wireframeBlueprint: {
        sectionTitle: 'Transaction Ledger & History',
        keyElements: [
          'Total Available Balance Display',
          'Recent Ledger Entries (+Credits from Quizzes, -Time Unlocks)',
          'Family-Configured Exchange Rate Summary',
          'Redemption Action Trigger'
        ],
        intendedOutput: 'Transparent, immutable record of study earnings and unlocked time'
      }
    },
    {
      id: 'parent-dashboard',
      name: 'Parent Dashboard',
      badge: 'Family Supervisor',
      icon: Users,
      purpose: 'Authorized family oversight hub for reviewing daily study hours, setting curfew policies, and approving quick exceptions.',
      nativeActivity: 'ParentControlActivity.kt',
      screenshotFile: 'parent-dashboard.webp',
      architectureComponents: [
        'PIN-Protected Parental Authentication',
        'Daily Study & Recreation Summary Stream',
        'Parent Quick Approval Notification Channel',
        'Emergency Family Override Switch'
      ],
      wireframeBlueprint: {
        sectionTitle: 'Parental Oversight & Approval',
        keyElements: [
          'Weekly Study-to-Recreation Ratio Chart',
          'Pending Student Quick Approval Notification Queue',
          'Family Schedule & Rule Customization Panel',
          'Emergency Master Bypass Control'
        ],
        intendedOutput: 'Constructive parental oversight without invasive surveillance'
      }
    }
  ];

  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [showAdbGuide, setShowAdbGuide] = useState<boolean>(false);

  const currentScreen = screens.find((s) => s.id === activeTab) || screens[0];
  const hasImageFailed = imageErrors[currentScreen.id];

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="product-showcase"
      aria-label="Actual App Showcase"
      className="py-20 md:py-32 relative bg-brand-deep/80 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ANDROID APPLICATION SHOWCASE"
          title="Meet your new digital wellbeing companion."
          description="Engineered natively for Android. Explore the core application modules that power FocusDefend's intelligent app restriction, curriculum learning, and family-guided wellbeing."
        />

        {/* Tab Selection Navigation */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {screens.map((screen) => {
            const isSelected = activeTab === screen.id;
            const Icon = screen.icon;

            return (
              <button
                key={screen.id}
                onClick={() => setActiveTab(screen.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 border cursor-pointer ${
                  isSelected
                    ? 'bg-brand-green text-brand-midnight border-brand-green shadow-glow-sm font-bold'
                    : 'bg-brand-surface text-brand-muted border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{screen.name}</span>
              </button>
            );
          })}
        </div>

        {/* Two-Column Device Showcase & Architecture Inspection */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Authentic Device Frame with Genuine Screenshot or Explicit Architectural Placeholder */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[340px] rounded-[48px] bg-[#070E1A] p-3.5 border-4 border-slate-700/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] relative ring-1 ring-white/10">
              
              {/* Android Phone Speaker / Camera Notch */}
              <div className="w-28 h-4 bg-slate-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
              </div>

              {/* Native Screen Bezel Container (19.5:9 Aspect Ratio) */}
              <div className="rounded-[38px] bg-brand-midnight border border-white/10 flex flex-col justify-between overflow-hidden min-h-[560px] relative">
                
                {/* Attempt to load genuine screenshot from repository */}
                {!hasImageFailed ? (
                  <img
                    src={`/assets/screenshots/${currentScreen.screenshotFile}`}
                    alt={`Actual FocusDefend ${currentScreen.name} Screenshot`}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(currentScreen.id)}
                  />
                ) : (
                  /* Compliant Architectural Placeholder when genuine screenshot file is pending */
                  <div className="p-5 flex flex-col justify-between h-full bg-gradient-to-b from-brand-surface/90 via-brand-midnight to-brand-midnight text-left">
                    
                    {/* Top Device Hardware Status */}
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-brand-muted/70 pb-3 border-b border-white/10">
                        <span>09:41 AM</span>
                        <span className="text-brand-green font-semibold">Native Android</span>
                        <span>100% ⚡</span>
                      </div>

                      {/* Explicit Placeholder Notice Stamp */}
                      <div className="mt-4 p-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300">
                        <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold tracking-wider">
                          <FileImage className="w-3.5 h-3.5" />
                          <span>Genuine Screenshot Required</span>
                        </div>
                        <p className="text-[11px] text-brand-muted mt-1 leading-snug">
                          Simulated mockups prohibited per project guidelines. Awaiting authentic production screen capture.
                        </p>
                      </div>

                      {/* Screen Identity & Target Activity */}
                      <div className="mt-5 space-y-1">
                        <span className="text-[10px] font-mono text-brand-green uppercase tracking-wider block">
                          Module Activity
                        </span>
                        <h4 className="text-lg font-bold text-white tracking-tight">
                          {currentScreen.name}
                        </h4>
                        <p className="text-[11px] font-mono text-brand-muted">
                          com.focusdefend.app.{currentScreen.nativeActivity}
                        </p>
                      </div>

                      {/* Architectural Blueprint Wireframe */}
                      <div className="mt-4 p-3.5 rounded-2xl bg-brand-deep/80 border border-brand-green/20 space-y-2.5 relative overflow-hidden">
                        <div className="flex items-center justify-between text-[10px] font-mono text-brand-darkMuted uppercase">
                          <span className="flex items-center gap-1 text-brand-mint font-semibold">
                            <Layers className="w-3 h-3" />
                            {currentScreen.wireframeBlueprint.sectionTitle}
                          </span>
                          <span>Schematic</span>
                        </div>

                        <ul className="space-y-1.5 pt-1">
                          {currentScreen.wireframeBlueprint.keyElements.map((elem, i) => (
                            <li key={i} className="text-[10px] text-brand-muted flex items-start gap-1.5 leading-snug">
                              <span className="w-1 h-1 rounded-full bg-brand-green mt-1.5 shrink-0" />
                              <span>{elem}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Subtle Background Watermark of Genuine Logo */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-10 pointer-events-none">
                          <img
                            src="/assets/logo/focusdefend-logo.png"
                            alt="FocusDefend Watermark"
                            className="w-full h-full object-contain"
                            onError={(e) => { (e.target as HTMLImageElement).src = '/logo.jpg'; }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Screenshot Spec & ADB Instructions Toggle */}
                    <div className="pt-4 border-t border-white/10 space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-mono text-brand-darkMuted">
                        <span>Target: 1080 × 2400 WebP</span>
                        <span className="text-brand-green font-semibold">{currentScreen.screenshotFile}</span>
                      </div>
                      <button
                        onClick={() => setShowAdbGuide(!showAdbGuide)}
                        className="w-full py-2 rounded-xl bg-brand-surface hover:bg-brand-surfaceHover border border-white/10 text-white font-mono text-[11px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Terminal className="w-3.5 h-3.5 text-brand-green" />
                        <span>{showAdbGuide ? 'Hide ADB Capture Command' : 'Show ADB Capture Command'}</span>
                      </button>
                    </div>

                  </div>
                )}

              </div>

              {/* Bottom Phone Gesture Bar */}
              <div className="w-28 h-1 bg-white/20 rounded-full mx-auto mt-3" />

              {/* Activity Verification Tag */}
              <div className="mt-3 text-center">
                <span className="text-[10px] font-mono text-brand-darkMuted inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                  Target: Android 10-15 ({currentScreen.nativeActivity})
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural & Functional Breakdown */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-white/10 text-xs font-mono text-brand-green">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Native Android Module · {currentScreen.nativeActivity}</span>
            </div>

            <h3 className="text-3xl font-extrabold text-white tracking-tight">
              {currentScreen.name}
            </h3>

            <p className="text-base text-brand-muted leading-relaxed">
              {currentScreen.purpose}
            </p>

            {/* Architecture Highlights */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                Underlying Hardware &amp; OS Components:
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {currentScreen.architectureComponents.map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-brand-surface/60 border border-white/10 flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                    <span className="text-xs text-white/90 font-medium">{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ADB Screencap Helper Dropdown */}
            {showAdbGuide && (
              <div className="p-4 rounded-xl bg-brand-midnight/90 border border-brand-green/30 space-y-2 animate-fadeIn font-mono text-xs">
                <div className="flex items-center justify-between text-brand-green">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Terminal className="w-4 h-4" />
                    Asset Capture Command
                  </span>
                  <span className="text-[10px] text-brand-muted">Execute in Android Studio Terminal</span>
                </div>
                <p className="text-[11px] text-brand-muted font-sans">
                  Capture genuine unedited screenshot from physical test device and place in repository:
                </p>
                <div className="p-2.5 rounded bg-black/60 border border-white/10 text-brand-mint break-all select-all">
                  adb exec-out screencap -p &gt; public/assets/screenshots/{currentScreen.screenshotFile}
                </div>
              </div>
            )}

            {/* Architecture Principle Note */}
            <div className="p-4 rounded-xl bg-brand-surface/40 border border-brand-green/20 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
              <p className="text-xs text-brand-muted leading-relaxed">
                <strong className="text-white">Authentic Application Architecture:</strong> Every screen in FocusDefend operates without persistent cloud dependencies for core app blocking, ensuring instantaneous response times and zero tracking of private user content.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
