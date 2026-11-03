import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircleHelp, ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: "How does the AI choose the educational challenges?",
    answer: "Our AI engine analyzes your child's age, grade level, and past performance to dynamically generate questions that are challenging yet achievable. It adapts in real-time, ensuring they are always learning at their optimal pace.",
  },
  {
    question: "Can I choose which apps are blocked?",
    answer: "Absolutely. The Parent Dashboard gives you granular control over exactly which apps are restricted, when they are restricted, and how many Focus Credits are required to unlock them.",
  },
  {
    question: "Does FocusDefend drain my child's battery?",
    answer: "No. FocusDefend is built natively for Android using highly optimized background services. Our native interception engine uses less than 2% of daily battery life.",
  },
  {
    question: "What if there is an emergency and my child needs their phone?",
    answer: "FocusDefend only blocks specific entertainment and social media apps that you select. Core phone functions like calling, messaging, and emergency services are never blocked.",
  },
  {
    question: "How do Over-The-Air (OTA) updates work?",
    answer: "FocusDefend connects directly to our secure edge CDN distribution network. When an update or patch is published, the app verifies package SHA-256 integrity and applies the update with zero loss of saved student progress.",
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription at any time directly from the Parent Dashboard. There are no hidden fees or long-term contracts.",
  },
];

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 md:px-12 max-w-3xl mx-auto relative z-20 pb-40">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full skeuo-pill text-xs font-mono uppercase tracking-wider text-indigo-300 mb-4">
          <CircleHelp size={14} className="text-indigo-400" />
          Clear Answers
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Everything you need to know about the product, battery life, and OTA releases.
        </p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl skeuo-card overflow-hidden transition-all duration-300 ${
                isOpen
                  ? "border-indigo-500/40 shadow-[0_12px_32px_rgba(0,0,0,0.6)]"
                  : "border-[#222e47]"
              }`}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between cursor-pointer focus:outline-none group"
              >
                <span className="font-semibold text-white text-base md:text-lg pr-6 group-hover:text-indigo-200 transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="w-8 h-8 rounded-full skeuo-btn-secondary flex items-center justify-center shrink-0 text-indigo-400"
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-1">
                      <div className="skeuo-well p-4 rounded-xl text-gray-300 text-sm leading-relaxed border border-[#182133]">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
