'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex R.",
    role: "Agency Owner",
    company: "ScaleUp Marketing",
    result: "Cut CRM time by 80%",
    quote: "I used to spend 2 hours a day just moving leads around. Now I just text my agent and it's done."
  },
  {
    name: "Sarah J.",
    role: "Real Estate Broker",
    company: "Premier Homes",
    result: "Closed 40% more deals",
    quote: "The speed of follow-up is insane. My AI agent replies to leads while I'm sleeping. Game changer."
  },
  {
    name: "Mike T.",
    role: "Operations Director",
    company: "TechFlow",
    result: "Saved $2k/mo in hiring",
    quote: "We didn't need to hire that extra VA. The AI agent handles all the data entry and reporting perfectly."
  }
];

const logos = [
  "AgencyFlow", "GrowthMasters", "RealtyPro", "SaaSify", "LeadGenX"
];

export function SocialProof() {
  return (
    <section className="py-16 bg-background border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
            Trusted by 100+ High-Growth Agencies
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((logo, i) => (
              <span key={i} className="text-xl font-bold text-white/40 hover:text-white/80 transition-colors cursor-default">
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-secondary/20 border border-white/5 p-6 rounded-2xl hover:bg-secondary/40 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">{t.result}</h3>
              <p className="text-muted-foreground mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center font-bold text-white">
                    {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
