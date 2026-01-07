'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Zap, Play, Check, PlayCircle } from 'lucide-react';

const fullChatHistory = [
  { 
    id: 1,
    type: 'user', 
    text: 'Show today’s new leads',
    time: '9:41 AM'
  },
  { 
    id: 2,
    type: 'ai', 
    text: 'Here are the 5 new leads from today:\n1. Sarah Jones (Real Estate)\n2. Mike Smith (SaaS)\n3. David Lee (E-com)\n4. Emma Wilson (Local)\n5. James Bond (Security)',
    time: '9:41 AM'
  },
  { 
    id: 3,
    type: 'user', 
    text: 'Qualify Sarah and Mike, tag as "Hot Lead"',
    time: '9:42 AM'
  },
  { 
    id: 4,
    type: 'ai', 
    text: 'Analyzed conversations. Sarah is interested in "AI Agents" (Budget: $5k+). Mike wants "Automation".\n\n✅ Tagged both as "Hot Lead".\n✅ Added to "Priority Follow-up" workflow.',
    time: '9:42 AM'
  },
  { 
    id: 5,
    type: 'user', 
    text: 'Book a demo for Sarah tomorrow at 2 PM',
    time: '9:45 AM'
  },
  { 
    id: 6,
    type: 'ai', 
    text: 'Checking calendar... 2 PM is free.\n\n📅 Appointment confirmed: Sarah Jones, Tomorrow @ 2:00 PM.\n📩 Confirmation email sent.',
    time: '9:45 AM'
  },
  { 
    id: 7,
    type: 'user', 
    text: 'Give me this week’s pipeline report',
    time: '10:15 AM'
  },
  { 
    id: 8,
    type: 'ai', 
    text: '📊 Weekly Report:\n- New Leads: 42 (+15%)\n- Appointments Booked: 12\n- Closed Won: $12,500\n\nProjected Revenue: $48,000. Shall I send this to the team Slack?',
    time: '10:15 AM'
  }
];

export function Hero() {
  const [messages, setMessages] = useState<typeof fullChatHistory>([fullChatHistory[0]]);
  const [isTyping, setIsTyping] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Initial load effect
  useEffect(() => {
    const timer = setTimeout(() => {
        setIsTyping(false);
        setMessages([fullChatHistory[0], fullChatHistory[1]]);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleChatClick = () => {
    if (clickCount >= 3 || isTyping) return;

    const nextUserMsgIdx = (clickCount + 1) * 2;
    if (nextUserMsgIdx >= fullChatHistory.length) return;

    // Add user message immediately
    setMessages(prev => [...prev, fullChatHistory[nextUserMsgIdx]]);
    setIsTyping(true);
    setClickCount(prev => prev + 1);

    // Simulate AI delay
    setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, fullChatHistory[nextUserMsgIdx + 1]]);
    }, 1200);
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 min-h-[calc(100vh-80px)] flex items-center">
      {/* Dynamic Background Elements - Optimized for different screens */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/20 rounded-full blur-[80px] md:blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-purple-500/10 rounded-full blur-[100px] md:blur-[140px] opacity-30"></div>
        <div className="absolute top-[20%] left-[10%] w-[150px] md:w-[300px] h-[150px] md:h-[300px] bg-blue-500/10 rounded-full blur-[60px] md:blur-[100px] opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10 max-w-2xl lg:max-w-none mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-secondary/50 border border-border mb-6 sm:mb-8 backdrop-blur-sm group hover:bg-secondary/70 transition-colors cursor-default"
            >
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">The Future of Agency Automation</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white mb-6 sm:mb-8 leading-[1.1] lg:leading-[1.05]"
            >
              Control GoHighLevel <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-purple-500 animate-gradient-x">
                With a Single Text
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Stop drowning in dashboards. We build AI agents that let you manage leads, pipelines, and workflows in GoHighLevel using Telegram, WhatsApp, or chat.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center lg:items-start gap-6"
            >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full justify-center lg:justify-start">
                    <Button 
                      size="lg" 
                      className="group relative h-14 sm:h-16 px-6 sm:px-8 text-base sm:text-lg font-semibold overflow-hidden rounded-full transition-all hover:scale-105 active:scale-95 bg-gradient-to-r from-primary to-blue-600 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] w-full sm:w-auto"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          See Your GHL Work on Autopilot
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        {/* Shine effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                    </Button>

                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="group h-14 sm:h-16 px-6 sm:px-8 text-base sm:text-lg font-medium border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
                    >
                        <span className="flex items-center justify-center gap-3">
                           <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                             <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white/20 text-white" />
                           </div>
                           See How It Works
                        </span>
                    </Button>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 text-xs sm:text-sm text-primary/90 font-medium bg-primary/10 px-4 py-2 rounded-full border border-primary/20 max-w-[90%] sm:max-w-none text-center">
                    <span className="relative flex h-2 w-2 flex-shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Next 5 demos include free workflow audit ($500 value)
                </div>
            </motion.div>
          </div>

          {/* Visual Content - Chat Interface */}
          <div className="flex-1 w-full max-w-md lg:max-w-xl xl:max-w-2xl z-10 mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, type: "spring", bounce: 0.2 }}
              className="relative cursor-pointer group perspective-1000"
              onClick={handleChatClick}
            >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Interaction Hint */}
                 {clickCount < 3 && !isTyping && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-max max-w-[90%]">
                        <div className="bg-white/10 backdrop-blur-md text-white px-4 py-2 sm:px-5 sm:py-3 rounded-full text-sm sm:text-base font-medium flex items-center justify-center gap-2 border border-white/20 shadow-2xl transform scale-105">
                            <Play className="w-4 h-4 fill-white" /> Click to continue demo
                        </div>
                    </div>
                )}

                {/* Device Frame */}
                <div className="relative bg-[#0F0F11] rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 p-1 sm:p-2 shadow-2xl h-[450px] sm:h-[550px] lg:h-[600px] flex flex-col overflow-hidden">
                  
                  {/* Status Bar */}
                  <div className="px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center text-[10px] sm:text-xs text-muted-foreground border-b border-white/5 bg-[#0F0F11]">
                    <span>9:41</span>
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-white/20"></div>
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-white/20"></div>
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white/20"></div>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 bg-[#0F0F11]/50 backdrop-blur-xl border-b border-white/5 z-20">
                    <div className="relative">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-primary flex items-center justify-center text-white shadow-lg ring-2 ring-[#0F0F11]">
                          <Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
                        </div>
                        <span className="absolute bottom-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-green-500 border-[3px] border-[#0F0F11] rounded-full"></span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-white text-base sm:text-lg tracking-tight truncate">GHL AI Operator</div>
                      <div className="text-[10px] sm:text-xs text-primary font-medium tracking-wide uppercase flex items-center gap-1.5 truncate">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse flex-shrink-0"></span>
                        Online • Connected
                      </div>
                    </div>
                  </div>

                  {/* Chat Area */}
                  <div 
                    ref={chatContainerRef}
                    className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent bg-[#0F0F11]"
                  >
                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, x: msg.type === 'user' ? 20 : -20, y: 10 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                         <div className={`flex flex-col max-w-[90%] sm:max-w-[85%] ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                            <div 
                              className={`rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 text-sm sm:text-[15px] leading-relaxed shadow-sm relative group ${
                                msg.type === 'user' 
                                  ? 'bg-primary text-white rounded-br-sm' 
                                  : 'bg-[#1C1C1E] text-gray-100 border border-white/5 rounded-bl-sm'
                              }`}
                            >
                              <div className="whitespace-pre-wrap">{msg.text}</div>
                            </div>
                            <div className="flex items-center gap-1 mt-1.5 px-1">
                                <span className="text-[10px] text-muted-foreground/60 font-medium">{msg.time}</span>
                                {msg.type === 'user' && (
                                   <Check className="w-3 h-3 text-primary" /> 
                                )}
                            </div>
                         </div>
                      </motion.div>
                    ))}
                    
                    {/* Typing indicator */}
                    <AnimatePresence>
                    {isTyping && (
                        <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="flex justify-start"
                        >
                        <div className="bg-[#1C1C1E] rounded-2xl rounded-bl-sm px-4 py-3 border border-white/5">
                            <div className="flex gap-1.5">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-[bounce_1s_infinite_0ms]"></span>
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-[bounce_1s_infinite_200ms]"></span>
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-[bounce_1s_infinite_400ms]"></span>
                            </div>
                        </div>
                        </motion.div>
                    )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Input Area (Mock) */}
                  <div className="p-3 sm:p-4 bg-[#0F0F11] border-t border-white/5">
                    <div className="h-10 sm:h-12 bg-[#1C1C1E] rounded-full border border-white/5 flex items-center px-4 justify-between opacity-50">
                        <span className="text-xs sm:text-sm text-muted-foreground truncate">Type a command...</span>
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                        </div>
                    </div>
                  </div>

                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
