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
  "AgencyFlow", "GrowthMasters", "RealtyPro", "SaaSify", "LeadGenX", "PipelinePro", "AutoScale", "ClickFunnel"
];

export function SocialProof() {
  return (
    <section className="py-16 bg-black border-b border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Trust Badges Marquee */}
        <div className="text-center mb-16 relative">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-8">
            Trusted by 10,000+ High-Growth Agencies
          </p>
          
          <div className="flex overflow-hidden relative mask-gradient-x">
             <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
             <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
             
             <motion.div 
                className="flex gap-16 min-w-full items-center"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             >
                {[...logos, ...logos, ...logos].map((logo, i) => (
                  <span key={i} className="text-2xl font-bold text-white/20 hover:text-white/40 transition-colors whitespace-nowrap cursor-default">
                    {logo}
                  </span>
                ))}
             </motion.div>
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
              className="bg-white/[0.03] backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:border-white/10 group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{t.result}</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center font-bold text-white text-lg">
                    {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-zinc-500">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
