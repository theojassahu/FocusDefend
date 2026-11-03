export interface ProblemCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  impact: string;
}

export const problemData: ProblemCard[] = [
  {
    id: 'distraction',
    icon: 'SmartphoneOff',
    title: 'Endless Digital Distractions',
    description: 'Social media, algorithmic feeds, and recreational mobile games constantly compete for student attention during essential homework and revision periods.',
    impact: 'Recreational notifications draw focus away from planned academic study.'
  },
  {
    id: 'restrictions',
    icon: 'ShieldAlert',
    title: 'Traditional Restriction Systems',
    description: 'Purely restrictive approaches can frustrate students and do not necessarily teach responsible digital habits or self-control.',
    impact: 'Hard blocks often create friction without building long-term digital discipline.'
  },
  {
    id: 'discipline',
    icon: 'Target',
    title: 'Lack of Digital Self-Discipline',
    description: 'Students need constructive guidance, tangible incentives, and positive reinforcement to build healthier, lifelong relationships with technology.',
    impact: 'Students need practice in self-regulation when direct restrictions are removed.'
  }
];

export interface WorkflowStep {
  step: string;
  title: string;
  badge: string;
  description: string;
  detail: string;
  icon: string;
}

export const howItWorksSteps: WorkflowStep[] = [
  {
    step: '01',
    badge: 'Educational Resources',
    title: 'Learn',
    description: 'Students access educational material, including supported NCERT learning resources and subject modules.',
    detail: 'Engage with structured curriculum lessons and conceptual summaries in a focused environment.',
    icon: 'BookOpen'
  },
  {
    step: '02',
    badge: 'Knowledge Verification',
    title: 'Prove Your Knowledge',
    description: 'Students complete quizzes and interactive learning activities to demonstrate genuine comprehension.',
    detail: 'Subject quizzes evaluate understanding and reinforce retention across academic topics.',
    icon: 'CheckCircle2'
  },
  {
    step: '03',
    badge: 'Focus Credits',
    title: 'Earn Focus Credits',
    description: 'Students earn credits through eligible learning activities according to the app\'s configured reward rules.',
    detail: 'Transparent credit ledger rewards academic progress with tangible screen-time currency.',
    icon: 'Coins'
  },
  {
    step: '04',
    badge: 'Time-Limited Access',
    title: 'Unlock Screen Time',
    description: 'Eligible Focus Credits can unlock permitted recreational apps and games within configured family restrictions.',
    detail: 'When the earned allowance expires, family restrictions automatically resume.',
    icon: 'Unlock'
  }
];

export interface AICapability {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  metricLabel: string;
  metricValue: string;
}

export const aiCapabilities: AICapability[] = [
  {
    id: 'usage-patterns',
    title: 'Usage Pattern Analysis',
    tagline: 'Privacy-Conscious Telemetry',
    description: 'Analyse permitted device-usage summaries to understand when students use applications most frequently throughout the week.',
    icon: 'BarChart3',
    metricLabel: 'Sample Focus Window',
    metricValue: 'Evening Revision Block'
  },
  {
    id: 'distraction-detection',
    title: 'Distraction Detection',
    tagline: 'Contextual Interception',
    description: 'Identify recurring recreational app usage during planned study periods and prompt a learning alternative.',
    icon: 'AlertCircle',
    metricLabel: 'Analysis Method',
    metricValue: 'Local Foreground Metadata'
  },
  {
    id: 'study-suggestions',
    title: 'Intelligent Study Suggestions',
    tagline: 'Optimal Revision Timing',
    description: 'Recommend suitable study windows based on usage patterns, preferences, and historical study-session activity.',
    icon: 'Brain',
    metricLabel: 'Sample Recommendation',
    metricValue: '45m High-Retention Slot'
  },
  {
    id: 'personalized-insights',
    title: 'Personalised Insights',
    tagline: 'Constructive Reflection',
    description: 'Explain observed patterns and provide practical suggestions for improving digital habits in clear, student-friendly language.',
    icon: 'Sparkles',
    metricLabel: 'Sample Guidance',
    metricValue: 'Balanced Study Pace'
  },
  {
    id: 'progress-tracking',
    title: 'Progress Tracking',
    tagline: 'Transparent Improvement',
    description: 'Help students and authorised parents understand changes in usage and study-session patterns over time.',
    icon: 'TrendingUp',
    metricLabel: 'Sample Metric',
    metricValue: 'Consistent Study Habit'
  }
];

export interface ComparisonRow {
  traditional: string;
  focusDefend: string;
}

export const comparisonData: ComparisonRow[] = [
  {
    traditional: 'Primarily blocks access',
    focusDefend: 'Encourages responsible usage'
  },
  {
    traditional: 'Focuses on restriction',
    focusDefend: 'Combines learning and restriction'
  },
  {
    traditional: 'Limited learning incentives',
    focusDefend: 'Learning-based Focus Credits'
  },
  {
    traditional: 'Screen-time management',
    focusDefend: 'Digital wellbeing development'
  },
  {
    traditional: 'Fixed control experience',
    focusDefend: 'Guided student participation'
  }
];

export interface TrustPrinciple {
  title: string;
  description: string;
  badge: string;
  icon: string;
}

export const trustPrinciples: TrustPrinciple[] = [
  {
    title: 'Privacy-Conscious Usage Analysis',
    badge: 'Metadata Only',
    description: 'FocusDefend strictly inspects application foreground state and aggregate timestamps. It never inspects message contents, browsing history, or private media.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Family-Authorised Controls',
    badge: 'Full Consent',
    description: 'All app categorization rules and curfew schedules are set collaboratively by parents and students. No hidden restrictions or backdoors.',
    icon: 'Users'
  },
  {
    title: 'Transparent Restriction Rules',
    badge: 'Predictable Policy',
    description: 'Students always know precisely how many credits are needed, how long an unlock lasts, and which subjects award credits.',
    icon: 'FileText'
  },
  {
    title: 'Responsible AI Architecture',
    badge: 'On-Device Inference',
    description: 'AI habit insights are computed locally using transparent statistical models. We do not diagnose disorders or build algorithmic behavioral profiles.',
    icon: 'Cpu'
  },
  {
    title: 'Student-Friendly Experiences',
    badge: 'Positive Reinforcement',
    description: 'Designed to feel like a high-performance productivity companion that celebrates student achievement, not a digital prison.',
    icon: 'Award'
  }
];
