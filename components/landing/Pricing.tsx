'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Check, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { ROICalculatorModal } from '@/components/ui/ROICalculatorModal';

const plans = [
  {
    name: "Starter",
    priceMonthly: 297,
    priceAnnual: 237,
    description: "Perfect for solo agency owners.",
    features: [
      "1 AI Agent (GHL Connected)",
      "WhatsApp or Telegram Integration",
      "Unlimited Commands",
      "Basic Reporting",
      "Email Support"
    ]
  },
  {
    name: "Growth",
    priceMonthly: 497,
    priceAnnual: 397,
    popular: true,
    description: "For growing teams needing more power.",
    features: [
      "3 AI Agents (Sales, Admin, Support)",
      "Custom Workflow Training",
      "Advanced Revenue Reporting",
      "Voice Receptionist Add-on Available",
      "Priority Support"
    ]
  },
  {
    name: "Enterprise",
    priceMonthly: "Custom",
    priceAnnual: "Custom",
    description: "Full automation for large agencies.",
    features: [
      "Unlimited AI Agents",
      "White-label Solution",
      "Custom SOP Integration",
      "Dedicated Success Manager",
      "SLA Guarantee"
    ]
  }
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  return (
    <section className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
      <ROICalculatorModal isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />

      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">Simple, Transparent Pricing</h2>
          <p className="text-xl text-zinc-400 mb-10">Start automating today. No hidden fees.</p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-zinc-500'}`}>Monthly</span>
            <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-14 h-8 bg-zinc-800 rounded-full p-1 relative transition-colors hover:bg-zinc-700"
            >
                <motion.div 
                    className="w-6 h-6 bg-white rounded-full"
                    animate={{ x: isAnnual ? 24 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-zinc-500'}`}>
                Annual <span className="text-green-400 text-xs ml-1">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-3xl p-8 border backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'bg-zinc-900/50 border-blue-500/50 shadow-2xl shadow-blue-500/10' 
                  : 'bg-zinc-900/30 border-white/10 hover:border-white/20'
              } flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-lg shadow-blue-600/20">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  {typeof plan.priceMonthly === 'number' ? (
                      <>
                        <span className="text-4xl font-bold text-white">
                            ${isAnnual ? plan.priceAnnual : plan.priceMonthly}
                        </span>
                        <span className="text-zinc-500">/month</span>
                      </>
                  ) : (
                      <span className="text-4xl font-bold text-white">Custom</span>
                  )}
                </div>
                <p className="text-sm text-zinc-400">{plan.description}</p>
              </div>

              <div className="flex-1">
                  <div className="h-px w-full bg-white/10 mb-8"></div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-zinc-300">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? 'bg-blue-500/20 text-blue-400' : 'bg-zinc-800 text-zinc-400'}`}>
                            <Check className="w-3 h-3" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
              </div>

              <Button 
                variant={plan.popular ? "default" : "outline"} 
                className={`w-full h-12 text-base font-semibold ${plan.popular ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'border-white/10 hover:bg-white/5 text-white'}`}
              >
                {typeof plan.priceMonthly === 'string' ? "Contact Sales" : "Get Started"}
              </Button>
            </motion.div>
          ))}
        </div>
        
        {/* ROI Calculator Teaser */}
        <div className="mt-20 text-center">
            <motion.button 
                onClick={() => setIsCalculatorOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-zinc-400 hover:bg-white/10 hover:text-white transition-all cursor-pointer group"
            >
                <Info className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                <span>Not sure which plan? <span className="text-blue-400 group-hover:underline">Calculate your ROI</span></span>
            </motion.button>
        </div>
      </div>
    </section>
  );
}
