'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

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
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Header Section (Sticky on Desktop) */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Everything you need to know about automating your agency with AI. Can't find the answer you're looking for? 
                <a href="#" className="text-primary hover:underline ml-1">Chat with our team.</a>
              </p>
              
              {/* Optional: Add a support card or something here */}
              <div className="hidden lg:block p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-white font-semibold mb-2">Still have questions?</p>
                <p className="text-sm text-muted-foreground mb-4">We're here to help.</p>
                <button className="text-sm font-medium text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors">
                    Contact Support
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`group border rounded-2xl transition-all duration-300 ${
                  openIndex === idx 
                    ? 'bg-white/[0.03] border-primary/50 shadow-[0_0_30px_-10px_rgba(59,130,246,0.1)]' 
                    : 'bg-transparent border-white/10 hover:border-white/20 hover:bg-white/[0.01]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-start justify-between p-6 sm:p-8 text-left"
                >
                  <span className={`text-lg sm:text-xl font-medium transition-colors ${
                    openIndex === idx ? 'text-white' : 'text-gray-300 group-hover:text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`ml-6 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    openIndex === idx 
                      ? 'bg-primary border-primary text-white rotate-180' 
                      : 'bg-transparent border-white/20 text-muted-foreground group-hover:border-white/40 group-hover:text-white'
                  }`}>
                    {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-8 pb-8 text-muted-foreground leading-relaxed text-base sm:text-lg border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
