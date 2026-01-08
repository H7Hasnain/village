'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { 
  ArrowRight, Zap, Play, Shield, MessageSquare, 
  TrendingUp, AlertCircle, CheckCircle2, User, Star, Menu 
} from 'lucide-react';
import { VideoModal } from '@/components/ui/VideoModal';

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 150, damping: 20 });

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-[#050510]"
    >
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      
      {/* --- BACKGROUND ATMOSPHERE --- */}
      <div className="absolute inset-0 z-0">
        {/* Deep Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050510] via-[#0A0A1F] to-[#1A0B2E]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Radial Spotlight - Mobile Optimized */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">
          
          {/* --- LEFT SIDE: TYPOGRAPHY & MESSAGING --- */}
          <div className="flex-1 text-center lg:text-left z-10 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
            
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#4F46E5]/10 border border-[#4F46E5]/30 mb-6 md:mb-8 backdrop-blur-md relative overflow-hidden group cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite]" />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-white uppercase">Powered By GPT-4</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl xl:text-[80px] font-extrabold tracking-tight text-white mb-6 md:mb-8 leading-[1.1]"
            >
              Control Your Pipeline <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x relative">
                With AI That Works
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl opacity-50 -z-10" />
              </span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#94A3B8] mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Stop drowning in dashboards. Our <strong className="text-white">AI agents</strong> manage your leads, deals, and workflows through <strong className="text-white">WhatsApp, Telegram, or SMS</strong>—like having a <strong className="text-white">$200K/year</strong> operations manager in your pocket.
            </motion.p>

            {/* Trust Indicators - Stack on mobile if needed */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-8 md:mb-10 text-xs md:text-sm text-[#64748B]"
            >
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full md:bg-transparent md:px-0 md:py-0">
                <Zap className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
                <span>Responds in &lt;2s</span>
              </div>
              <div className="w-1 h-1 bg-[#64748B] rounded-full hidden md:block" />
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full md:bg-transparent md:px-0 md:py-0">
                <Shield className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                <span>Bank-level encryption</span>
              </div>
              <div className="w-1 h-1 bg-[#64748B] rounded-full hidden md:block" />
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full md:bg-transparent md:px-0 md:py-0">
                <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                <span>No code required</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 md:mb-12 w-full sm:w-auto"
            >
                <Button 
                  size="lg" 
                  className="relative h-12 md:h-14 px-8 text-base md:text-lg font-bold text-white bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:shadow-[0_0_30px_-5px_rgba(79,70,229,0.5)] transition-all duration-300 transform hover:-translate-y-1 group rounded-full overflow-hidden w-full sm:w-auto"
                >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Start Building Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {/* Particle Trail Effect (Simplified CSS) */}
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Button>

                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => setIsVideoOpen(true)}
                  className="h-12 md:h-14 px-8 text-base md:text-lg text-white border-white/20 hover:bg-white/5 hover:border-white/40 transition-all rounded-full group relative w-full sm:w-auto"
                >
                    <span className="flex items-center justify-center gap-3">
                       <div className="relative">
                         <Play className="w-5 h-5 fill-white" />
                         <span className="absolute inset-0 animate-ping bg-white/30 rounded-full" />
                       </div>
                       Watch Demo
                    </span>
                    <span className="absolute -top-3 -right-3 bg-[#7C3AED] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#050510]">2:30</span>
                </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <div className="flex -space-x-3">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#050510] bg-zinc-800 flex items-center justify-center text-xs text-white overflow-hidden relative`}>
                     <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                     <User className="w-4 h-4 md:w-5 md:h-5 text-white/50" />
                  </div>
                ))}
              </div>
              <div className="text-xs md:text-sm text-[#94A3B8]">
                <div className="flex items-center justify-center sm:justify-start gap-1 mb-1">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <span className="font-bold text-white">4.9/5</span>
                  <span>on G2</span>
                </div>
                <p className="text-center sm:text-left">Join <strong className="text-white">2,847 teams</strong> saving 20+ hours/week</p>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: 3D MOCKUP --- */}
          <div className="flex-1 w-full max-w-[340px] sm:max-w-lg lg:max-w-none perspective-1000 mx-auto mt-12 lg:mt-0">
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, x: 100, rotateY: -30 }}
              animate={{ opacity: 1, x: 0, rotateY: -15 }}
              transition={{ duration: 1, type: "spring" }}
              className="relative z-20 transform scale-90 sm:scale-100" // Scale down slightly on mobile
            >
                {/* Floating Context Cards (Hidden on mobile to save space) */}
                <FloatingCard 
                  className="absolute -top-12 -right-8 z-30 hidden md:flex" 
                  delay={0.5}
                  title="Pipeline Update"
                  value="$127K Added"
                  icon={<TrendingUp className="w-4 h-4 text-green-400" />}
                  color="green"
                />
                
                <FloatingCard 
                  className="absolute top-1/2 -left-16 z-30 hidden lg:flex" 
                  delay={0.7}
                  title="Quick Action"
                  value="Proposal Sent ✓"
                  icon={<Zap className="w-4 h-4 text-yellow-400" />}
                  color="yellow"
                />

                <FloatingCard 
                  className="absolute -bottom-8 -right-4 z-30 hidden md:flex" 
                  delay={0.9}
                  title="Smart Alert"
                  value="3 Leads Cold"
                  icon={<AlertCircle className="w-4 h-4 text-orange-400" />}
                  color="orange"
                />

                {/* 3D Phone Mockup */}
                <div className="relative w-[300px] sm:w-[380px] mx-auto h-[600px] sm:h-[700px] bg-[#0F0F11] rounded-[40px] sm:rounded-[50px] border-[6px] sm:border-[8px] border-[#1C1C1E] shadow-2xl overflow-hidden transform-gpu">
                    {/* Dynamic Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-50 rounded-[32px] sm:rounded-[42px]" />
                    
                    {/* Screen Content */}
                    <div className="absolute inset-0 bg-[#050510] flex flex-col">
                        {/* Status Bar */}
                        <div className="h-12 sm:h-14 px-6 flex items-end justify-between pb-2">
                            <span className="text-white text-xs font-medium">9:41</span>
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white/20" />
                                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white/20" />
                            </div>
                        </div>

                        {/* App Header */}
                        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-[#0F0F11] border-b border-white/5 flex items-center gap-3 sm:gap-4">
                            <div className="relative">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 border-2 border-[#0F0F11] rounded-full animate-pulse" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm sm:text-base">AI Operator</h3>
                                <p className="text-[10px] sm:text-xs text-blue-400 font-medium">Processing 3 conversations...</p>
                            </div>
                        </div>

                        {/* Interaction Area */}
                        <div className="flex-1 p-3 sm:p-4 space-y-3 sm:space-y-4 overflow-hidden relative">
                            {/* Card 1: Pipeline */}
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.2 }}
                                className="bg-[#1A1A2E] border-l-4 border-green-500 rounded-lg p-3 sm:p-4 shadow-lg"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider">Pipeline Update</span>
                                    <span className="text-[9px] sm:text-[10px] text-zinc-500">Just now</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                                        <span>2 leads moved to "Hot"</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                                        <span>$45K deal marked "Closing"</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 2: Message */}
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 2.5 }}
                                className="bg-[#1A1A2E] rounded-lg p-3 sm:p-4 shadow-lg border border-white/5"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-xs font-bold">S</div>
                                    <span className="text-xs font-bold text-white">Sarah Martinez</span>
                                </div>
                                <p className="text-xs sm:text-sm text-zinc-300 mb-3">"Yes, interested in the premium package. Can we chat?"</p>
                                
                                <div className="bg-blue-500/10 rounded-md p-3 border border-blue-500/20">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Zap className="w-3 h-3 text-blue-400" />
                                        <span className="text-[9px] sm:text-[10px] font-bold text-blue-400 uppercase">AI Suggestion</span>
                                    </div>
                                    <p className="text-xs text-zinc-400 mb-3">Send pricing + schedule demo call</p>
                                    <div className="flex gap-2">
                                        <button className="flex-1 bg-blue-600 text-white text-[10px] sm:text-xs font-bold py-1.5 rounded hover:bg-blue-500 transition-colors">
                                            Auto-Send
                                        </button>
                                        <button className="px-3 bg-white/5 text-zinc-400 text-[10px] sm:text-xs font-bold py-1.5 rounded hover:bg-white/10">
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Typing Indicator */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 4, duration: 0.5 }}
                                className="absolute bottom-4 left-4 right-4"
                            >
                                <div className="h-10 sm:h-12 bg-[#1C1C1E] rounded-full border border-white/10 flex items-center px-4">
                                    <span className="text-xs sm:text-sm text-zinc-400 border-r border-blue-500 pr-1 animate-pulse">
                                        Qualify all new leads|
                                    </span>
                                </div>
                            </motion.div>
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

function FloatingCard({ className, delay, title, value, icon, color }: { className?: string, delay: number, title: string, value: string, icon: React.ReactNode, color: string }) {
    const colors = {
        green: "border-green-500/30 bg-green-500/10 text-green-400",
        yellow: "border-yellow-500/30 bg-yellow-500/10 text-yellow-400",
        orange: "border-orange-500/30 bg-orange-500/10 text-orange-400"
    };

    return (
        <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay, type: "spring" }}
            className={`backdrop-blur-md bg-[#0F0F11]/80 border p-4 rounded-xl shadow-2xl flex items-center gap-3 w-48 ${className} ${colors[color as keyof typeof colors]}`}
        >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${colors[color as keyof typeof colors]} bg-opacity-20 border border-current`}>
                {icon}
            </div>
            <div>
                <p className="text-[10px] font-bold uppercase tracking-wider opacity-70">{title}</p>
                <p className="text-sm font-bold text-white">{value}</p>
            </div>
        </motion.div>
    );
}
