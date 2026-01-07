'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, Database, Laptop, MousePointer2, ArrowRight, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const painPoints = [
  {
    icon: MousePointer2,
    title: "Click Fatigue",
    description: "Too many tabs, workflows, and menus just to do simple tasks.",
    stat: "45 mins/day lost"
  },
  {
    icon: Clock,
    title: "Training Bottlenecks",
    description: "No time to train team properly on complex CRM features.",
    stat: "2 weeks onboarding"
  },
  {
    icon: AlertCircle,
    title: "Missed Updates",
    description: "CRM updates get delayed or skipped because it takes too long.",
    stat: "20% leads inaccurate"
  },
  {
    icon: Database,
    title: "Buried Data",
    description: "Important data is buried inside dashboards you rarely check.",
    stat: "Hidden revenue"
  },
  {
    icon: Laptop,
    title: "Desktop Chains",
    description: "You need a laptop just to manage simple pipeline changes.",
    stat: "Zero mobility"
  }
];

export function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section 
      className="py-24 bg-[#050505] relative overflow-hidden" 
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
        {/* Dynamic Spotlight Effect Background */}
        <div 
            className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
            style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
            }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6"
          >
            <XCircle className="w-4 h-4" />
            The Silent Agency Killer
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            GoHighLevel Is Powerful. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              But Humans Are Slow.
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8"
          >
            Your team spends <span className="text-white font-semibold">12+ hours/week</span> just clicking buttons and updating fields.
            That's time stolen from selling.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((point, idx) => (
            <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + (idx * 0.1) }}
                className="group relative bg-[#0F0F11] border border-white/5 p-8 rounded-3xl overflow-hidden hover:border-red-500/20 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-red-500/10 text-red-400 text-xs font-bold px-2 py-1 rounded-md border border-red-500/20">
                    {point.stat}
                </div>
              </div>

              <div className="w-14 h-14 bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl flex items-center justify-center mb-6 border border-red-500/10 group-hover:scale-110 transition-transform duration-300">
                <point.icon className="w-7 h-7 text-red-500" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">{point.description}</p>
            </motion.div>
          ))}
          
           {/* Solution Card */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.6 }}
             className="relative p-8 rounded-3xl overflow-hidden group cursor-pointer"
           >
               <div className="absolute inset-0 bg-primary opacity-90 group-hover:opacity-100 transition-opacity"></div>
               <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat animate-[shimmer_3s_infinite]"></div>
               
               <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                   <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 shadow-xl">
                       <ArrowRight className="w-8 h-8 text-white" />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">The Solution?</h3>
                   <p className="text-white/80 mb-6">Stop clicking. Start commanding.</p>
                   
                   <Button variant="secondary" className="w-full bg-white text-primary hover:bg-white/90">
                       Meet Your Agent
                   </Button>
               </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
