'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Search, FileText, Zap, Phone, Activity, User, Mic } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function InternalAISection() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Visual: Neural Network & Holographic Brain */}
          <div className="flex-1 w-full order-2 lg:order-1">
             <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 rounded-full blur-3xl animate-pulse" />
                
                {/* Glass Card Container */}
                <div className="relative h-full bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col overflow-hidden shadow-2xl">
                    
                    {/* Simulated Search Interface */}
                    <div className="mb-8 relative z-20">
                        <div className="bg-black/40 border border-white/10 rounded-xl p-4 flex items-center gap-3 shadow-inner">
                            <Search className="w-5 h-5 text-purple-400" />
                            <div className="h-5 w-px bg-white/10" />
                            <div className="flex-1">
                                <span className="text-sm text-zinc-400 typing-effect">How do I process a refund?</span>
                                <span className="w-0.5 h-4 bg-purple-500 inline-block ml-1 animate-pulse align-middle" />
                            </div>
                        </div>
                        
                        {/* Floating Result Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute top-full left-4 right-4 mt-2 bg-[#1A1A1A] border border-purple-500/30 rounded-xl p-4 shadow-xl z-30"
                        >
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FileText className="w-4 h-4 text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white mb-1">Refund Policy SOP.pdf</p>
                                    <p className="text-xs text-zinc-400">Page 12 • "Refunds over $500 require approval..."</p>
                                    <div className="mt-2 flex items-center gap-2">
                                        <span className="text-[10px] bg-green-500/10 text-green-400 px-1.5 py-0.5 rounded border border-green-500/20">98% Match</span>
                                        <span className="text-[10px] text-zinc-500">Found in 0.3s</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Animated Nodes Background */}
                    <div className="absolute inset-0 z-0">
                        {/* Central Brain Icon */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/10 rounded-full flex items-center justify-center blur-md animate-pulse"></div>
                        <Brain className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-purple-500 opacity-80" />
                        
                        {/* Orbiting Nodes */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]"
                                animate={{
                                    x: Math.cos(i * (360 / 6) * (Math.PI / 180)) * 120,
                                    y: Math.sin(i * (360 / 6) * (Math.PI / 180)) * 120,
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                    duration: 3 + i,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                        
                        {/* Connecting Lines (SVG) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                            {[...Array(6)].map((_, i) => (
                                <line 
                                    key={i}
                                    x1="50%" 
                                    y1="50%" 
                                    x2={`${50 + Math.cos(i * 60 * Math.PI / 180) * 40}%`} 
                                    y2={`${50 + Math.sin(i * 60 * Math.PI / 180) * 40}%`} 
                                    stroke="#A855F7" 
                                    strokeWidth="1"
                                />
                            ))}
                        </svg>
                    </div>
                </div>
             </div>
          </div>

          <div className="flex-1 order-1 lg:order-2">
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-[11px] font-extrabold tracking-widest text-purple-300 uppercase mb-6"
            >
                <Zap className="w-3 h-3" /> Perfect For Ops & HR
            </motion.div>
            
            <h2 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Your Team’s <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-x">
                Private AI Brain
              </span>
            </h2>
            
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-lg">
              We build internal AI assistants trained on your SOPs, documents, sheets, and internal knowledge — so your team never wastes time searching again.
            </p>
            
            <ul className="space-y-6 mb-10">
              {[
                  { icon: Zap, text: "Instant answers for staff", metric: "85% faster" },
                  { icon: Activity, text: "Faster onboarding", metric: "2w → 3d" },
                  { icon: Brain, text: "Consistent information", metric: "100% accuracy" }
              ].map((item, i) => (
                <motion.li 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                    <item.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                      <div className="text-lg font-semibold text-white">{item.text}</div>
                      <div className="text-xs font-mono text-purple-400 bg-purple-500/5 inline-block px-2 py-0.5 rounded border border-purple-500/10 mt-1">
                          {item.metric}
                      </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function VoiceAISection() {
  return (
    <section className="py-32 bg-[#080808] relative overflow-hidden">
        {/* Animated Waveform Background Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-orange-500/5 rounded-full animate-[spin_20s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-orange-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="flex-1">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-[11px] font-extrabold tracking-widest text-orange-300 uppercase mb-6 shadow-[0_0_15px_rgba(249,115,22,0.3)]"
            >
                <Mic className="w-3 h-3" /> Voice AI Receptionist
            </motion.div>
            
            <h2 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              A Professional Voice <br />
              That <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 drop-shadow-lg">Never Forgets</span>
            </h2>
            
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-lg">
              Our Voice AI receptionists handle calls, <strong className="text-white">qualify inquiries</strong>, log details into GHL, and send summaries <strong className="text-white">automatically</strong>.
            </p>
            
            <ul className="space-y-6 mb-10">
              {[
                  { text: "Professional image", sub: "Natural human-like voice" },
                  { text: "Call summaries", sub: "Auto-logged to CRM" },
                  { text: "Follow-up automation", sub: "Triggers workflows instantly" }
              ].map((item, i) => (
                <motion.li 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-all cursor-default"
                >
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mt-1 shadow-lg shadow-orange-500/20">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                      <div className="text-lg font-bold text-white">{item.text}</div>
                      <div className="text-sm text-zinc-500">{item.sub}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
            
             <Button className="h-16 px-8 text-lg bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 shadow-xl shadow-orange-500/20 w-full sm:w-auto group">
                <span className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                    Hear a Live Sample
                </span>
            </Button>
            
            <p className="mt-4 text-sm text-zinc-500 italic">"Hi, thanks for calling about the property..."</p>
          </div>
          
          {/* Visual: Animated Waveform & Phone */}
          <div className="flex-1 w-full flex justify-center">
             <div className="relative w-80 h-[500px] bg-black border-[8px] border-zinc-800 rounded-[3rem] shadow-2xl overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                {/* Screen Content */}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black p-6 flex flex-col items-center pt-16">
                    <div className="w-20 h-20 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center mb-4 relative">
                        <User className="w-10 h-10 text-zinc-500" />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-black rounded-full"></div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-1">Incoming Call</h3>
                    <p className="text-orange-400 font-medium mb-8">AI Receptionist Active</p>
                    
                    {/* Animated Waveform */}
                    <div className="flex items-center justify-center gap-1 h-12 w-full mb-8">
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-1.5 bg-orange-500 rounded-full"
                                animate={{ height: [10, Math.random() * 40 + 10, 10] }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: Math.random() * 0.2 }}
                            />
                        ))}
                    </div>
                    
                    {/* Live Transcript */}
                    <div className="w-full bg-white/5 rounded-xl p-4 border border-white/5">
                        <p className="text-xs text-zinc-500 mb-2 uppercase tracking-wide">Live Transcript</p>
                        <p className="text-sm text-white leading-relaxed typing-effect">
                            "Yes, I can definitely schedule a viewing for you on Tuesday. Does 2 PM work?"
                        </p>
                    </div>
                    
                    {/* Floating UI Card - Outside Phone but layered */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute bottom-20 -right-24 bg-[#1A1A1A] border border-orange-500/30 rounded-xl p-4 shadow-2xl w-48 z-20 backdrop-blur-xl"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-xs font-bold text-white">Lead Qualified</span>
                        </div>
                        <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-500 w-[80%]"></div>
                        </div>
                        <p className="text-[10px] text-zinc-400 mt-1">High Intent Score</p>
                    </motion.div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
