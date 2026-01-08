'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Bell, DollarSign, ArrowUp, Activity, Clock, CheckCircle2 } from 'lucide-react';

const useCases = [
  {
    icon: Calendar,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    query: "Show me today’s booked appointments",
    response: "Found 3 appointments for today:",
    data: [
        { label: "10:00 AM", value: "Discovery Call (Sarah J.)", status: "confirmed" },
        { label: "2:00 PM", value: "Onboarding (TechFlow)", status: "confirmed" },
        { label: "4:00 PM", value: "Strategy Review (Mike)", status: "pending" }
    ],
    meta: { time: "Executed in 0.8s", source: "Google Calendar" }
  },
  {
    icon: Users,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    query: "Move all hot leads to follow-up stage",
    response: "Processing pipeline update...",
    action: "Moved 12 leads tagged 'Hot' to 'Follow-up' stage in Main Pipeline.",
    stats: { processed: 12, success: "100%" },
    meta: { time: "Executed in 1.2s", source: "CRM Pipeline" }
  },
  {
    icon: Bell,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    query: "Send reminder to leads who didn’t reply",
    response: "Checking 'No Show' sequences...",
    action: "Sent SMS reminder to 45 leads. 3 replies received instantly.",
    stats: { sent: 45, type: "SMS Campaign" },
    meta: { time: "Executed in 2.4s", source: "Automation Workflow" }
  },
  {
    icon: DollarSign,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
    query: "Give me revenue summary for this month",
    response: "Generating revenue report...",
    financials: {
        total: "$45,200",
        trend: "+12.5%",
        pipeline: "$128,000"
    },
    meta: { time: "Executed in 1.5s", source: "Stripe / GHL" }
  }
];

export function UseCasesSection() {
  return (
    <section className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">Live Interaction Demo</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            What You Can Do With <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                Your AI Agent
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Replace hours of manual clicking with simple, natural language commands.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, idx) => (
            <UseCaseCard key={idx} data={useCase} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({ data, index }: { data: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-3xl p-1 overflow-hidden"
        >
            {/* Animated Gradient Border Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl -z-10" />
            
            <div className="bg-[#0F0F11]/90 backdrop-blur-md rounded-[20px] p-6 h-full flex flex-col relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${data.bg} border ${data.border} flex items-center justify-center relative`}>
                        <data.icon className={`w-6 h-6 ${data.color}`} />
                        {/* Particle effect */}
                        <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1">Status</span>
                        <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 px-2 py-1 rounded-full">
                            <CheckCircle2 className="w-3 h-3 text-green-500" />
                            <span className="text-[10px] font-bold text-green-400 uppercase">Completed</span>
                        </div>
                    </div>
                </div>

                {/* User Query */}
                <div className="mb-6 relative">
                    <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-transparent rounded-full opacity-50" />
                    <span className="text-[10px] font-bold tracking-[0.15em] text-blue-400 uppercase mb-2 block">You</span>
                    <p className="text-lg font-semibold text-white group-hover:text-blue-100 transition-colors">
                        "{data.query}"
                    </p>
                </div>

                {/* AI Response */}
                <div className="flex-1 bg-black/40 rounded-xl p-5 border border-white/5 relative overflow-hidden group-hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                        <span className="text-[10px] font-bold tracking-[0.15em] text-purple-400 uppercase">AI Agent</span>
                    </div>
                    
                    <div className="space-y-4">
                        <p className="text-zinc-300 text-sm leading-relaxed">{data.response}</p>
                        
                        {/* Dynamic Content based on Type */}
                        {data.data && (
                            <div className="space-y-2">
                                {data.data.map((item: any, i: number) => (
                                    <div key={i} className="flex items-center justify-between text-xs bg-white/5 p-2 rounded-lg border border-white/5">
                                        <span className="text-zinc-400 font-mono">{item.label}</span>
                                        <span className="text-white font-medium">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {data.action && (
                            <div className="bg-green-500/5 border border-green-500/10 p-3 rounded-lg flex items-start gap-2">
                                <Activity className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                <span className="text-sm text-green-100/80">{data.action}</span>
                            </div>
                        )}

                        {data.financials && (
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                                    <span className="text-[10px] text-zinc-500 uppercase block mb-1">Total Revenue</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-bold text-white">{data.financials.total}</span>
                                        <span className="text-[10px] text-green-400 bg-green-500/10 px-1 rounded flex items-center">
                                            <ArrowUp className="w-2 h-2 mr-0.5" />
                                            {data.financials.trend}
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                                    <span className="text-[10px] text-zinc-500 uppercase block mb-1">Pipeline</span>
                                    <span className="text-lg font-bold text-zinc-300">{data.financials.pipeline}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Metadata */}
                <div className="mt-4 flex items-center justify-between text-[10px] text-zinc-600 font-mono border-t border-white/5 pt-4">
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {data.meta.time}
                    </div>
                    <div>
                        Source: <span className="text-zinc-500">{data.meta.source}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
