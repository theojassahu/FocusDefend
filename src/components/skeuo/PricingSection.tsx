import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Zap, Check } from 'lucide-react';
import { useFocusStore } from '../../data/focusStore';

const PLANS = [
  {
    name: "Basic",
    price: "Free",
    period: "",
    description: "Essential controls for focused learning & family habits.",
    features: [
      "2 Restricted Distraction Apps",
      "Objective Curriculum Questions",
      "Standard Activity History",
      "Native Android Background Service",
      "Community & Discord Support",
    ],
    cta: "Download Basic APK",
    highlight: false,
    badge: null,
  },
  {
    name: "Focus Pro",
    price: "$20",
    period: "/year",
    description: "Advanced AI learning and unlimited control. Best value for students.",
    features: [
      "Unlimited Restricted Apps",
      "Subjective & Essay Questions",
      "Advanced Real-Time AI Evaluator",
      "Advanced Analytics & Parental Dashboard",
      "Priority OTA Channel Updates",
      "Direct 24/7 Priority Support",
    ],
    cta: "Get Focus Pro APK",
    highlight: true,
    badge: "Most Popular",
  },
];

export const PricingSection: React.FC = () => {
  const { setOtaModalOpen } = useFocusStore();

  return (
    <section id="pricing" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full skeuo-pill text-xs font-mono uppercase tracking-wider text-indigo-300 mb-4">
          <Sparkles size={14} className="text-indigo-400" />
          Transparent Value
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Simple, Hardware-Grade Pricing
        </h2>
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
          Choose the plan that fits your family's educational goals. Where learning unlocks freedom today.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {PLANS.map((plan, idx) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
            className={`relative p-7 sm:p-9 rounded-[28px] skeuo-card flex flex-col h-full transform-gpu will-change-transform ${
              plan.highlight
                ? "border-indigo-500/50 shadow-[0_25px_60px_-15px_rgba(79,70,229,0.3)] ring-1 ring-indigo-500/30"
                : "border-[#222e47]"
            }`}
          >
            <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

            {plan.highlight && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 skeuo-pill bg-[#13162b] border border-indigo-400/50 text-indigo-300 text-xs font-bold px-4 py-1 rounded-full shadow-[0_4px_12px_rgba(79,70,229,0.4)] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full skeuo-led-green animate-pulse" />
                <span>{plan.badge}</span>
              </div>
            )}

            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                {plan.name}
                {plan.highlight ? (
                  <Zap size={18} className="text-indigo-400" />
                ) : (
                  <Shield size={18} className="text-gray-400" />
                )}
              </h3>
              <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest">
                {plan.highlight ? "Unlimited" : "Standard"}
              </span>
            </div>

            <p className="text-xs text-gray-400 mb-6 leading-relaxed min-h-[36px]">
              {plan.description}
            </p>

            <div className="mb-7 flex items-baseline">
              <span className="text-5xl font-extrabold text-white tracking-tight">
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-gray-400 ml-2 font-medium text-sm">{plan.period}</span>
              )}
            </div>

            <div className="skeuo-well p-5 rounded-2xl mb-8 flex-1">
              <ul className="space-y-3.5">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start text-gray-300 text-xs sm:text-sm">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                      <Check size={12} className="text-indigo-300" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="/FocusDefend.apk"
              download="FocusDefend.apk"
              className={`w-full py-4 rounded-2xl font-bold text-center text-sm md:text-base tracking-wide transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                plan.highlight ? "skeuo-btn-primary text-white" : "skeuo-btn-secondary text-white"
              }`}
            >
              {plan.cta}
            </a>

            {plan.highlight && (
              <div className="mt-3 text-center">
                <button
                  onClick={() => setOtaModalOpen(true)}
                  className="text-[11px] text-indigo-400 hover:text-indigo-300 underline font-mono cursor-pointer"
                >
                  Or check OTA build updates (v1.7.7)
                </button>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
