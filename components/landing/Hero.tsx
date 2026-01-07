'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, MessageSquare, Zap } from 'lucide-react';

const chatMessages = [
  { type: 'user', text: 'Show today’s new leads' },
  { type: 'ai', text: 'Here are the 5 new leads from today:\n1. Sarah Jones (Real Estate)\n2. Mike Smith (SaaS)\n3. David Lee (E-com)\n4. Emma Wilson (Local)\n5. James Bond (Security)' },
  { type: 'user', text: 'Qualify Sarah and Mike, tag as "Hot Lead"' },
  { type: 'ai', text: 'Analyzed conversations. Sarah is interested in "AI Agents" (Budget: $5k+). Mike wants "Automation".\n\n✅ Tagged both as "Hot Lead".\n✅ Added to "Priority Follow-up" workflow.' },
  { type: 'user', text: 'Book a demo for Sarah tomorrow at 2 PM' },
  { type: 'ai', text: 'Checking calendar... 2 PM is free.\n\n📅 Appointment confirmed: Sarah Jones, Tomorrow @ 2:00 PM.\n📩 Confirmation email sent.' },
  { type: 'user', text: 'Give me this week’s pipeline report' },
  { type: 'ai', text: '📊 Weekly Report:\n- New Leads: 42 (+15%)\n- Appointments Booked: 12\n- Closed Won: $12,500\n\nProjected Revenue: $48,000. Shall I send this to the team Slack?' }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28 min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 backdrop-blur-sm"
            >
              <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium text-muted-foreground">The Future of Agency Automation</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
            >
              Control GoHighLevel <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                With a Single Text
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Stop drowning in dashboards. We build AI agents that let you manage leads, pipelines, and workflows in GoHighLevel using Telegram, WhatsApp, or chat.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
            >
              <Button size="lg" className="h-14 px-8 text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105">
                Book a Free AI Workflow Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-muted-foreground/30 hover:bg-secondary/80 hover:text-white transition-all">
                See How It Works
              </Button>
            </motion.div>
          </div>

          {/* Visual Content - Chat Interface */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl xl:max-w-2xl z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, type: "spring", bounce: 0.2 }}
              className="relative"
            >
                {/* Decoration */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-20"></div>
                
                <div className="relative bg-[#0F0F11]/90 rounded-2xl border border-white/10 p-4 sm:p-6 shadow-2xl backdrop-blur-xl h-[550px] flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-4 border-b border-white/5 pb-4 mb-4">
                    <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white shadow-inner">
                        <MessageSquare className="w-6 h-6" />
                        </div>
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0F0F11] rounded-full"></span>
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">GHL AI Operator</div>
                      <div className="text-xs text-primary/80 font-medium tracking-wide uppercase">
                        Connected to Main Sub-Account
                      </div>
                    </div>
                  </div>

                  {/* Chat Area */}
                  <div className="flex-1 overflow-y-auto space-y-6 pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                    {chatMessages.map((msg, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: msg.type === 'user' ? 20 : -20, y: 10 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + (idx * 0.8) }} // Staggered delay for "typing" effect
                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`max-w-[85%] rounded-2xl px-5 py-4 text-[15px] leading-relaxed shadow-sm ${
                            msg.type === 'user' 
                              ? 'bg-primary text-white rounded-br-sm' 
                              : 'bg-white/5 text-gray-200 border border-white/5 rounded-bl-sm'
                          }`}
                        >
                          <div className="whitespace-pre-wrap">{msg.text}</div>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Typing indicator - stays at bottom */}
                     <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 6.5, repeat: Infinity, repeatType: "reverse", duration: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white/5 rounded-2xl rounded-bl-sm px-4 py-3 border border-white/5">
                        <div className="flex gap-1.5">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-[bounce_1s_infinite_0ms]"></span>
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-[bounce_1s_infinite_200ms]"></span>
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-[bounce_1s_infinite_400ms]"></span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
