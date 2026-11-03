import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
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
  Layers,
  Sparkles,
  Zap
} from 'lucide-react';

interface AppScreenSpec {
  id: string;
  name: string;
  badge: string;
  icon: any;
  purpose: string;
  nativeActivity: string;
  screenshotFile: string;
  tilt: { rotateX: number; rotateY: number; scale: number };
  floatingCallouts: {
    topLeft: { title: string; subtitle: string; icon: any };
    topRight: { title: string; subtitle: string; icon: any };
    bottomLeft: { title: string; subtitle: string; icon: any };
    bottomRight: { title: string; subtitle: string; icon: any };
  };
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
      tilt: { rotateX: 10, rotateY: -14, scale: 1.02 },
      floatingCallouts: {
        topLeft: { title: 'Credit Ledger', subtitle: '60 Earned Focus Credits', icon: Coins },
        topRight: { title: 'Active Schedule', subtitle: 'Homework Block Enforced', icon: Clock },
        bottomLeft: { title: 'Curriculum Mode', subtitle: 'NCERT Grade 10 Science', icon: BookOpen },
        bottomRight: { title: 'System Status', subtitle: 'On-Device Gating Active', icon: ShieldCheck }
      },
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
      tilt: { rotateX: 14, rotateY: 16, scale: 1.03 },
      floatingCallouts: {
        topLeft: { title: 'Accessibility Interceptor', subtitle: 'Zero Polling Overhead', icon: Zap },
        topRight: { title: 'Bypass Safeguard', subtitle: 'Hardware Setting Locked', icon: Lock },
        bottomLeft: { title: 'Restricted Apps', subtitle: 'Instagram, YouTube, Gaming', icon: Activity },
        bottomRight: { title: 'Curfew Definitions', subtitle: 'School Hours & Bedtime', icon: Clock }
      },
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
      tilt: { rotateX: -6, rotateY: -16, scale: 0.99 },
      floatingCallouts: {
        topLeft: { title: 'Focus Stopwatch', subtitle: '45m Session Counting', icon: Clock },
        topRight: { title: 'App Switch Sensor', subtitle: '0 Distraction Exits', icon: CheckCircle2 },
        bottomLeft: { title: 'Curriculum Gating', subtitle: 'NCERT Reader Monitored', icon: BookOpen },
        bottomRight: { title: 'Reward Yield', subtitle: '+15 Credits Upon Finish', icon: Coins }
      },
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
      tilt: { rotateX: 12, rotateY: 12, scale: 1.04 },
      floatingCallouts: {
        topLeft: { title: 'NCERT Question Bank', subtitle: 'Class 9-12 Verified Banks', icon: BookOpen },
        topRight: { title: 'Instant Assessment', subtitle: 'Real-Time Concept Review', icon: Sparkles },
        bottomLeft: { title: 'Comprehension Gate', subtitle: 'Pass Required for Unlocks', icon: ShieldCheck },
        bottomRight: { title: 'Credit Minting', subtitle: '+25 Credits per Module', icon: Coins }
      },
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
      tilt: { rotateX: 8, rotateY: -18, scale: 1.01 },
      floatingCallouts: {
        topLeft: { title: 'Encrypted Ledger', subtitle: 'Local SQLite (Room DB)', icon: Lock },
        topRight: { title: 'Audit Trail', subtitle: 'Immutable Time Log', icon: Activity },
        bottomLeft: { title: 'Redemption Rate', subtitle: '20 Credits = 15m Time', icon: Coins },
        bottomRight: { title: 'Daily Quota', subtitle: 'Family Cap Guardrails', icon: Users }
      },
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
      tilt: { rotateX: 11, rotateY: 15, scale: 1.03 },
      floatingCallouts: {
        topLeft: { title: 'Family Governance', subtitle: 'PIN Protected Controls', icon: Users },
        topRight: { title: 'Quick Approval', subtitle: '5-Second Emergency Pass', icon: Zap },
        bottomLeft: { title: 'Habit Analytics', subtitle: 'Weekly Ratio Summaries', icon: Activity },
        bottomRight: { title: 'Master Override', subtitle: 'Emergency Family Bypass', icon: ShieldCheck }
      },
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
  
  // Interactive mouse tilt state for 3D perspective
  const [mouseTilt, setMouseTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const currentScreen = screens.find((s) => s.id === activeTab) || screens[0];
  const hasImageFailed = imageErrors[currentScreen.id];

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseTilt({ x: x * 14, y: -y * 14 }); // subtle tilt responsiveness
  };

  const handleMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="product-showcase"
      aria-label="Actual App Showcase"
      className="py-20 md:py-32 relative bg-brand-deep/80 border-t border-white/5 overflow-hidden"
    >
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-green/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="ANDROID APPLICATION SHOWCASE"
          title="Meet your new digital wellbeing companion."
          description="Engineered natively for Android. Experience the signature 3D perspective screenshot showcase with dynamic floating descriptions and architectural activity inspection."
        />

        {/* Floating Top Control Dock (Inspired by focusdefend.vercel.app interactive dock) */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto pb-4 mb-14 scrollbar-none">
          <div className="flex items-center gap-1.5 p-1.5 bg-[#0a0e1a]/90 backdrop-blur-md rounded-full border border-white/10 shadow-surface">
            {screens.map((screen) => {
              const isSelected = activeTab === screen.id;
              const Icon = screen.icon;

              return (
                <button
                  key={screen.id}
                  onClick={() => setActiveTab(screen.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-brand-green text-brand-midnight font-bold shadow-glow-sm scale-105'
                      : 'text-brand-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{screen.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Perspective Canvas with Floating Descriptions */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative min-h-[660px] md:min-h-[720px] w-full flex items-center justify-center mb-16 py-8"
          style={{ perspective: '1200px' }}
        >
          {/* Floating Descriptions — Surrounding the 3D Phone Screen */}
          <div className="absolute inset-0 pointer-events-none z-30 hidden md:block">
            {/* 1. Top-Left Floating Description */}
            <motion.div
              key={`callout-tl-${currentScreen.id}`}
              initial={{ opacity: 0, x: -20, y: -10 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -8, 0]
              }}
              transition={{
                opacity: { duration: 0.5 },
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
              }}
              className="absolute top-8 left-4 lg:left-12 p-3.5 rounded-2xl bg-brand-surface/90 border border-brand-green/30 shadow-2xl backdrop-blur-md max-w-[220px] pointer-events-auto"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0">
                  <currentScreen.floatingCallouts.topLeft.icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                    <p className="text-xs font-bold text-white leading-tight">
                      {currentScreen.floatingCallouts.topLeft.title}
                    </p>
                  </div>
                  <p className="text-[10px] text-brand-muted leading-tight mt-0.5">
                    {currentScreen.floatingCallouts.topLeft.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 2. Top-Right Floating Description */}
            <motion.div
              key={`callout-tr-${currentScreen.id}`}
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, 8, 0]
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.1 },
                y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }
              }}
              className="absolute top-12 right-4 lg:right-12 p-3.5 rounded-2xl bg-brand-surface/90 border border-white/10 shadow-2xl backdrop-blur-md max-w-[220px] pointer-events-auto"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-brand-deep text-brand-mint border border-white/10 flex items-center justify-center shrink-0">
                  <currentScreen.floatingCallouts.topRight.icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">
                    {currentScreen.floatingCallouts.topRight.title}
                  </p>
                  <p className="text-[10px] text-brand-muted leading-tight mt-0.5">
                    {currentScreen.floatingCallouts.topRight.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 3. Bottom-Left Floating Description */}
            <motion.div
              key={`callout-bl-${currentScreen.id}`}
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, 9, 0]
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.2 },
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }
              }}
              className="absolute bottom-16 left-4 lg:left-14 p-3.5 rounded-2xl bg-brand-surface/90 border border-white/10 shadow-2xl backdrop-blur-md max-w-[220px] pointer-events-auto"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-brand-deep text-sky-400 border border-white/10 flex items-center justify-center shrink-0">
                  <currentScreen.floatingCallouts.bottomLeft.icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">
                    {currentScreen.floatingCallouts.bottomLeft.title}
                  </p>
                  <p className="text-[10px] text-brand-muted leading-tight mt-0.5">
                    {currentScreen.floatingCallouts.bottomLeft.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 4. Bottom-Right Floating Description */}
            <motion.div
              key={`callout-br-${currentScreen.id}`}
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -9, 0]
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.3 },
                y: { duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }
              }}
              className="absolute bottom-12 right-4 lg:right-14 p-3.5 rounded-2xl bg-brand-surface/90 border border-brand-green/30 shadow-2xl backdrop-blur-md max-w-[230px] pointer-events-auto"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0">
                  <currentScreen.floatingCallouts.bottomRight.icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">
                    {currentScreen.floatingCallouts.bottomRight.title}
                  </p>
                  <p className="text-[10px] text-brand-muted leading-tight mt-0.5">
                    {currentScreen.floatingCallouts.bottomRight.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Central 3D Transforming Android Device Frame */}
          <motion.div
            animate={{
              rotateX: currentScreen.tilt.rotateX + mouseTilt.y,
              rotateY: currentScreen.tilt.rotateY + mouseTilt.x,
              scale: currentScreen.tilt.scale,
            }}
            transition={{
              type: 'spring',
              stiffness: 90,
              damping: 20,
              mass: 0.8
            }}
            className="relative z-20 w-full max-w-[340px] md:max-w-[360px] rounded-[48px] bg-[#070E1A] p-3.5 border-4 border-slate-700/70 shadow-[0_30px_70px_rgba(0,0,0,0.95)] ring-1 ring-white/10 transform-gpu cursor-grab active:cursor-grabbing"
          >
            {/* Side Hardware Buttons */}
            <div className="absolute -left-[14px] top-28 w-[4px] h-12 bg-[#2c3242] rounded-l-md shadow-inner" />
            <div className="absolute -left-[14px] top-44 w-[4px] h-12 bg-[#2c3242] rounded-l-md shadow-inner" />
            <div className="absolute -right-[14px] top-32 w-[4px] h-16 bg-[#2c3242] rounded-r-md shadow-inner" />

            {/* Top Speaker / Camera Notch */}
            <div className="w-28 h-4 bg-slate-800 rounded-full mx-auto mb-3 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
            </div>

            {/* Native Screen Bezel Container (19.5:9 Aspect Ratio) */}
            <div className="rounded-[38px] bg-brand-midnight border border-white/10 flex flex-col justify-between overflow-hidden min-h-[560px] relative shadow-inner">
              
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
          </motion.div>
        </div>

        {/* Architectural Inspection Panel & ADB Helper */}
        <div className="max-w-4xl mx-auto glass-panel rounded-card p-6 md:p-8 border border-white/10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-white/10 text-xs font-mono text-brand-green mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Native Android Module · {currentScreen.nativeActivity}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                {currentScreen.name} Architecture
              </h3>
            </div>
            <span className="text-xs font-mono text-brand-mint bg-brand-green/10 px-3 py-1.5 rounded-full border border-brand-green/30 self-start md:self-auto">
              Interactive 3D Perspective Mode
            </span>
          </div>

          <p className="text-sm text-brand-muted leading-relaxed">
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
    </section>
  );
};
