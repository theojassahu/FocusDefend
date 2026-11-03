import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircleHelp, ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: 'All' | 'Parents' | 'Learning' | 'System';
}

const ALL_FAQS: FAQ[] = [
  {
    category: 'System',
    question: 'What is FocusDefend?',
    answer: 'FocusDefend is an AI-powered digital wellbeing and learning platform engineered specifically for students. Rather than merely locking apps and creating friction, FocusDefend introduces a constructive Learn → Earn → Unlock system. Students convert time spent on educational materials into verified Focus Credits to unlock permitted recreational screen time.',
  },
  {
    category: 'Learning',
    question: 'How does the Learn-Earn-Unlock system work?',
    answer: 'When a student reaches their allotted recreational limit or opens a restricted app during focus hours, FocusDefend intercepts the launch. Instead of a dead-end lock screen, the student is invited to engage with structured educational content (such as NCERT curriculum modules). By correctly answering quiz questions and completing study sessions, they earn Focus Credits which unlock temporary, family-approved screen time.',
  },
  {
    category: 'Parents',
    question: 'Can parents approve temporary access?',
    answer: 'Yes. Through the Parent Quick Approval feature, if a student urgently requires access to a restricted tool or app for collaborative schoolwork, they can send a temporary unlock request. Parents receive an immediate notification to approve or decline with a single tap, with limits expiring automatically.',
  },
  {
    category: 'Parents',
    question: 'Can I choose which apps are blocked?',
    answer: 'Absolutely. The Parent Dashboard gives you granular control over exactly which apps are restricted, when they are restricted, and how many Focus Credits are required to unlock them. You can customize limits per app or category.',
  },
  {
    category: 'Parents',
    question: 'Does FocusDefend completely block social media?',
    answer: 'No. FocusDefend does not believe in unconditional total blackouts that alienate students. Instead, recreational and social applications are managed according to family-configured schedules and credit thresholds. Once students earn sufficient Focus Credits through verified learning, they can unlock permitted recreational time within predefined daily guardrails.',
  },
  {
    category: 'Learning',
    question: 'How do students earn Focus Credits?',
    answer: 'Credits are awarded for tangible learning achievements: completing curriculum reading chapters, passing subject-specific comprehension quizzes, answering objective and subjective review questions, and maintaining sustained study sessions without app switching.',
  },
  {
    category: 'Learning',
    question: 'Does FocusDefend support NCERT learning material?',
    answer: 'Yes. FocusDefend includes structured learning modules and quiz challenge banks aligned with standard NCERT curricula across core subjects like Science, Mathematics, and Social Sciences for middle and high school grades.',
  },
  {
    category: 'Learning',
    question: 'How does the AI choose the educational challenges?',
    answer: "Our AI engine analyzes your child's age, grade level, and past performance to dynamically generate questions that are challenging yet achievable. It adapts in real-time, ensuring they are always learning at their optimal pace.",
  },
  {
    category: 'System',
    question: 'How does AI analyse digital habits?',
    answer: 'The on-device wellbeing assistant reviews permitted device-usage telemetry—such as timestamps, app launch frequency, and study session continuity—to recognize patterns like late-night screen time or study interruptions. The AI operates transparently: it strictly analyses usage metadata and does NOT read private messages, scan personal media, or inspect screen contents.',
  },
  {
    category: 'System',
    question: "Does FocusDefend drain my child's battery?",
    answer: 'No. FocusDefend is built natively for Android using highly optimized background services with official Android UsageStats APIs. Our native interception engine uses less than 2% of daily battery life with zero accessibility overhead.',
  },
  {
    category: 'Parents',
    question: 'What if there is an emergency and my child needs their phone?',
    answer: 'FocusDefend only blocks specific entertainment and social media apps that you select. Core phone functions like calling, emergency SOS services, and SMS are never blocked under any circumstances.',
  },
  {
    category: 'System',
    question: 'Which devices are supported?',
    answer: 'FocusDefend is built natively for Android devices running Android 10 through Android 15 (ARM64 architecture), utilizing native Android UsageStats and Knox APIs designed for minimal system resource overhead and Google Play Protect certification.',
  },
  {
    category: 'System',
    question: 'How do Over-The-Air (OTA) updates work?',
    answer: 'FocusDefend connects directly to our secure edge CDN distribution network. When an update or patch is published, the app verifies package SHA-256 integrity and applies the update with zero loss of saved student progress or parent rules.',
  },
  {
    category: 'Parents',
    question: 'How do I cancel my subscription?',
    answer: 'You can cancel your subscription at any time directly from the Parent Dashboard or billing portal. There are no hidden cancellation fees, contracts, or lock-in periods.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Parents' | 'Learning' | 'System'>('All');

  const filteredFaqs = selectedCategory === 'All'
    ? ALL_FAQS
    : ALL_FAQS.filter((f) => f.category === selectedCategory);

  return (
    <section id="faq" className="py-24 px-6 md:px-12 max-w-4xl mx-auto relative z-20 pb-40">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full skeuo-pill text-xs font-mono uppercase tracking-wider text-indigo-300 mb-4">
          <CircleHelp size={14} className="text-indigo-400" />
          Clear Answers
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Everything you need to know about FocusDefend, parental controls, NCERT learning challenges, battery consumption, and OTA releases.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {[
          { id: 'All', label: `All Questions (${ALL_FAQS.length})` },
          { id: 'Parents', label: 'Parental Controls & Family' },
          { id: 'Learning', label: 'Learning & Curriculum' },
          { id: 'System', label: 'System & Architecture' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setSelectedCategory(tab.id as any);
              setOpenIdx(0);
            }}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === tab.id
                ? 'bg-indigo-600 text-white shadow-[0_2px_12px_rgba(79,70,229,0.5)] border border-indigo-400/50'
                : 'skeuo-pill text-gray-400 hover:text-white border border-[#23314d]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <motion.div
              key={faq.question}
              initial={false}
              className={`rounded-2xl skeuo-card overflow-hidden transition-all duration-300 ${
                isOpen
                  ? 'border-indigo-500/50 shadow-[0_12px_32px_rgba(0,0,0,0.7)]'
                  : 'border-[#222e47] hover:border-[#334466]'
              }`}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between cursor-pointer focus:outline-none group"
              >
                <div className="flex items-center gap-3 pr-4">
                  <span className="font-semibold text-white text-base md:text-lg group-hover:text-indigo-200 transition-colors">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="w-8 h-8 rounded-full skeuo-btn-secondary flex items-center justify-center shrink-0 text-indigo-400"
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-1">
                      <div className="skeuo-well p-4 rounded-xl text-gray-300 text-sm leading-relaxed border border-[#182133]">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
