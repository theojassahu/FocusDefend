import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { ChevronDown } from 'lucide-react';
import { faqData, FAQItem } from '../data/faq';

export const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([faqData[0].id]);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = ['All', 'System', 'Learning', 'Parents', 'Technical'];

  const filteredFaqs = activeCategory === 'All'
    ? faqData
    : faqData.filter((f) => f.category === activeCategory);

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="py-24 md:py-32 relative bg-brand-midnight border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="COMMON QUESTIONS"
          title="Frequently Asked Questions"
          description="Everything you need to know about the Learn-to-Earn mechanism, Android system compatibility, and privacy boundaries."
        />

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-brand-green text-brand-midnight border-brand-green font-bold shadow-sm'
                  : 'bg-brand-surface text-brand-muted border-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {filteredFaqs.map((item: FAQItem) => {
            const isOpen = openIds.includes(item.id);

            return (
              <div
                key={item.id}
                className={`glass-panel rounded-2xl overflow-hidden transition-all duration-200 border ${
                  isOpen ? 'border-brand-green/40 shadow-glow-sm' : 'border-white/10'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-brand-green px-2 py-0.5 rounded bg-brand-green/10 border border-brand-green/20">
                      {item.category}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white leading-snug">
                      {item.question}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full bg-brand-surface border border-white/10 flex items-center justify-center text-brand-green shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-brand-green/20' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-brand-muted leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p className="bg-brand-surface/40 p-4 rounded-xl border border-white/5">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
