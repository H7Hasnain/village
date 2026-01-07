'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Is my data safe?",
    answer: "Absolutely. We use enterprise-grade encryption and connect via GHL's official secure API. We never store your lead data on our servers; we just pass commands through."
  },
  {
    question: "How long is setup?",
    answer: "Most agencies are up and running in less than 24 hours. We handle the technical connection and initial training of your AI agent."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, there are no long-term contracts. You can cancel your subscription at any time with one click from your dashboard."
  },
  {
    question: "What if the AI makes a mistake?",
    answer: "The AI is designed with 'human-in-the-loop' safeguards. For critical actions (like deleting leads), it will ask for confirmation. You also have a full log of every action it takes."
  },
  {
    question: "Does it work with my custom snapshots?",
    answer: "Yes! We train the AI on YOUR specific custom fields, pipelines, and workflows. It adapts to your setup, not the other way around."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/10 rounded-xl bg-background overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-semibold text-white">{faq.question}</span>
                {openIndex === idx ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
