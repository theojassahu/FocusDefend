export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'System' | 'Learning' | 'Parents' | 'Technical';
}

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is FocusDefend?',
    answer: 'FocusDefend is an AI-powered digital wellbeing and learning platform engineered specifically for students. Rather than merely locking apps and creating friction, FocusDefend introduces a constructive Learn → Earn → Unlock system. Students convert time spent on educational materials into verified Focus Credits to unlock permitted recreational screen time.',
    category: 'System',
  },
  {
    id: 'faq-2',
    question: 'How does the Learn-Earn-Unlock system work?',
    answer: 'When a student reaches their allotted recreational limit or opens a restricted app during focus hours, FocusDefend intercepts the launch. Instead of a dead-end lock screen, the student is invited to engage with structured educational content (such as NCERT curriculum modules). By correctly answering quiz questions and completing study sessions, they earn Focus Credits which unlock temporary, family-approved screen time.',
    category: 'Learning',
  },
  {
    id: 'faq-3',
    question: 'Does FocusDefend completely block social media?',
    answer: 'No. FocusDefend does not believe in unconditional total blackouts that alienate students. Instead, recreational and social applications are managed according to family-configured schedules and credit thresholds. Once students earn sufficient Focus Credits through verified learning, they can unlock permitted recreational time within predefined daily guardrails.',
    category: 'System',
  },
  {
    id: 'faq-4',
    question: 'How do students earn Focus Credits?',
    answer: 'Credits are awarded for tangible learning achievements: completing curriculum reading chapters, passing subject-specific comprehension quizzes, answering objective and subjective review questions, and maintaining sustained study sessions without app switching.',
    category: 'Learning',
  },
  {
    id: 'faq-5',
    question: 'How does AI analyse digital habits?',
    answer: 'The on-device wellbeing assistant reviews permitted device-usage telemetry—such as timestamps, app launch frequency, and study session continuity—to recognize patterns like late-night screen time or study interruptions. The AI operates transparently: it strictly analyses usage metadata and does NOT read private messages, scan personal media, or inspect screen contents.',
    category: 'Technical',
  },
  {
    id: 'faq-6',
    question: 'Can parents approve temporary access?',
    answer: 'Yes. Through the Parent Quick Approval feature, if a student urgently requires access to a restricted tool or app for collaborative schoolwork, they can send a temporary unlock request. Parents receive an immediate notification to approve or decline with a single tap, with limits expiring automatically.',
    category: 'Parents',
  },
  {
    id: 'faq-7',
    question: 'Does FocusDefend support NCERT learning material?',
    answer: 'Yes. FocusDefend includes structured learning modules and quiz challenge banks aligned with standard NCERT curricula across core subjects like Science, Mathematics, and Social Sciences for middle and high school grades.',
    category: 'Learning',
  },
  {
    id: 'faq-8',
    question: 'Which devices are supported?',
    answer: 'FocusDefend is built natively for Android devices running Android 10 through Android 15 (ARM64 architecture), utilizing native Android Accessibility and UsageStats APIs designed for minimal system resource overhead. Parental oversight and quick approvals are managed collaboratively via family-authorized PIN and device policies.',
    category: 'Technical',
  },
];
