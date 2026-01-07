'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { motion } from 'framer-motion';

export function CTASection() {
  useEffect(() => {
	  (async function () {
		const cal = await getCalApi({"namespace":"hasnain-nisar"});
		cal("ui", {"theme":"dark", "cssVarsPerTheme":{"dark":{"cal-brand":"#3b82f6"}}, "hideEventTypeDetails":false, "layout":"month_view"});
	  })();
  }, []);

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="book-demo">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left pt-8">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight"
                >
                    Stop Managing GHL. <br />
                    <span className="text-primary">Start Commanding It.</span>
                </motion.h2>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto lg:mx-0"
                >
                    Select a time on the calendar to see how our AI agents can completely automate your agency operations.
                </motion.p>
                
                <div className="hidden lg:block">
                     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Available for new clients
                     </div>
                </div>
            </div>

            {/* Cal.com Embed */}
            <div className="flex-1 w-full">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-[#111111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative"
                >
                    {/* Window Controls Decoration */}
                    <div className="absolute top-0 left-0 right-0 h-12 bg-[#1C1C1E] border-b border-white/5 flex items-center px-4 gap-2 z-10">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                        <div className="ml-4 text-xs text-muted-foreground font-medium flex-1 text-center pr-12">
                            Book Your Strategy Call
                        </div>
                    </div>

                    <div className="pt-12">
                         <Cal 
                            namespace="hasnain-nisar"
                            calLink="hasnain-nisar"
                            style={{width:"100%", height:"100%", minHeight: "600px", overflow:"hidden"}}
                            config={{"layout":"month_view", "theme":"dark"}}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
}
