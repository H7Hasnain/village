import { CheckCircle2, MessageSquare, Database, Smartphone, ArrowLeftRight } from 'lucide-react';
import { motion } from 'framer-motion';

const capabilities = [
  "Check new leads instantly",
  "Update pipelines by text",
  "Send follow-ups automatically",
  "Pull reports on demand",
  "Assign leads to team members",
  "Summarize conversations"
];

export function SolutionSection() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-8">
              The Solution
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              Meet Your <span className="text-primary">GHL AI Agent</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              A custom-trained AI assistant connected directly to your GoHighLevel account that executes actions, retrieves data, and manages workflows — all through simple messages.
            </p>

            <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {capabilities.map((cap, idx) => (
                <li key={idx} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-gray-300 font-medium">{cap}</span>
                </li>
              ))}
            </ul>

            <div className="bg-secondary/30 border-l-4 border-primary p-6 rounded-r-xl backdrop-blur-sm">
              <p className="font-semibold text-white text-lg italic">
                "If you can type it, your AI agent can do it."
              </p>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[120px] rounded-full opacity-40 pointer-events-none"></div>
            
            <div className="relative">
                {/* Connecting Line Animation */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-500/50 via-primary/50 to-blue-500/50 -translate-y-1/2 z-0 hidden md:block"></div>
                
                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    
                    {/* Card 1: Messaging App */}
                    <div className="bg-[#0F0F11] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-xl hover:-translate-y-2 transition-transform duration-500 h-48">
                        <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-4 text-green-500 ring-1 ring-green-500/20">
                           <Smartphone className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-white mb-1">Chat Apps</h3>
                        <p className="text-xs text-muted-foreground">WhatsApp / Telegram</p>
                    </div>

                    {/* Card 2: The Sync Engine */}
                    <div className="bg-[#0F0F11] border border-primary/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-2xl shadow-primary/10 scale-110 relative h-48">
                         <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                            Active Sync
                        </div>
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary animate-pulse ring-1 ring-primary/30">
                            <ArrowLeftRight className="w-10 h-10" />
                        </div>
                        <h3 className="font-bold text-white mb-1">AI Bridge</h3>
                        <p className="text-xs text-muted-foreground">Real-time Processing</p>
                    </div>

                    {/* Card 3: GHL */}
                    <div className="bg-[#0F0F11] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-xl hover:-translate-y-2 transition-transform duration-500 h-48">
                        <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-4 text-blue-500 ring-1 ring-blue-600/20">
                            <Database className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-white mb-1">GoHighLevel</h3>
                        <p className="text-xs text-muted-foreground">CRM & Automation</p>
                    </div>
                </div>

                {/* Bottom Label */}
                 <div className="text-center mt-8">
                    <p className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-white/5 px-4 py-2 rounded-full border border-white/5">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Seamless Two-Way Synchronization
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
