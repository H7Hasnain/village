'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { 
  ArrowRight, Zap, Play, Shield, MessageSquare, 
  TrendingUp, AlertCircle, CheckCircle2, User, Star, Menu, Sparkles
} from 'lucide-react';
import { VideoModal } from '@/components/ui/VideoModal';

// Define Particle type
type Particle = {
  id: number;
  x: string;
  y: string;
  opacity: number;
  scale: number;
  duration: number;
  size: number;
};

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  
  // Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });
  const spotlightX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const spotlightY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  // Initialize particles
  useEffect(() => {
    setParticles([...Array(50)].map((_, i) => ({
      id: i,
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      opacity: Math.random() * 0.5 + 0.2,
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 10 + 10,
      size: Math.random() * 3 + 1
    })));
  }, []);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-[#0A0B1E]"
    >
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 z-0">
        {/* 1. Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B1E] via-[#1A0F2E] to-[#2D1B3D]" />
        
        {/* 2. Animated Mesh Gradient (Orbs) */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
            <motion.div 
                animate={{ x: [-50, 50, -50], y: [-20, 20, -20] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[20%] w-[800px] h-[800px] bg-purple-600/30 rounded-full blur-[120px]" 
            />
            <motion.div 
                animate={{ x: [50, -50, 50], y: [30, -30, 30] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px]" 
            />
            <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[40%] left-[50%] w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[100px]" 
            />
        </div>

        {/* 3. Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'url("/noise.png")', backgroundRepeat: 'repeat' }} />
        {/* Fallback CSS Noise if image missing */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* 4. Radial Spotlight (Mouse Responsive) */}
        <motion.div 
            style={{ x: spotlightX, y: spotlightY }}
            className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        />

        {/* 5. Geometric Wireframe Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] perspective-1000 transform-gpu rotate-x-12 scale-110 opacity-30" />

        {/* 6. Particle Field */}
        <div className="absolute inset-0 z-0">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full"
                    initial={{
                        x: p.x,
                        y: p.y,
                        opacity: p.opacity,
                    }}
                    animate={{
                        y: [null, parseFloat(p.y) - 20 + "%"], // Gentle drift up
                        opacity: [p.opacity, p.opacity * 0.5, p.opacity]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        width: p.size + "px",
                        height: p.size + "px",
                        backgroundColor: p.id % 2 === 0 ? '#A855F7' : '#3B82F6', // Cyan/Purple mix
                        boxShadow: `0 0 ${p.size * 2}px ${p.id % 2 === 0 ? '#A855F7' : '#3B82F6'}`
                    }}
                />
            ))}
        </div>

        {/* 7. Volumetric Light Rays (CSS Gradient Trick) */}
        <div className="absolute -top-20 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-500/10 to-transparent rotate-45 blur-3xl pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
          
          {/* --- LEFT SIDE: TYPOGRAPHY & MESSAGING --- */}
          <div className="flex-1 text-center lg:text-left z-10 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
            
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1A0F2E]/80 border border-purple-500/30 mb-8 backdrop-blur-md relative overflow-hidden group cursor-default shadow-[0_0_20px_-5px_rgba(168,85,247,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite]" />
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
              </span>
              <span className="text-[11px] font-extrabold tracking-[0.2em] text-white uppercase">Powered By GPT-4o</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-extrabold tracking-tight text-white mb-8 leading-[1.1] drop-shadow-xl"
            >
              Control Your Pipeline <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x relative">
                With AI That Works
                {/* Glow Bloom */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 blur-2xl opacity-50 -z-10" />
              </span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#94A3B8] mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Stop drowning in dashboards. Our <strong className="text-white">AI agents</strong> manage your leads, deals, and workflows through <strong className="text-white">WhatsApp, Telegram, or SMS</strong>—like having a <strong className="text-white">$200K/year</strong> operations manager in your pocket.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-10 text-xs md:text-sm text-[#94A3B8]"
            >
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 md:bg-transparent md:border-0 md:px-0 md:py-0">
                <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
                <span>Responds in &lt;2s</span>
              </div>
              <div className="w-1 h-1 bg-[#64748B] rounded-full hidden md:block" />
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 md:bg-transparent md:border-0 md:px-0 md:py-0">
                <Shield className="w-4 h-4 text-purple-400 fill-purple-400/20" />
                <span>Bank-level encryption</span>
              </div>
              <div className="w-1 h-1 bg-[#64748B] rounded-full hidden md:block" />
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 md:bg-transparent md:border-0 md:px-0 md:py-0">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>No code required</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 w-full sm:w-auto"
            >
                <Button 
                  size="lg" 
                  className="relative h-14 px-8 text-lg font-bold text-white bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:shadow-[0_0_40px_-5px_rgba(124,58,237,0.6)] transition-all duration-300 transform hover:-translate-y-1 group rounded-full overflow-hidden w-full sm:w-auto border border-white/10"
                >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Start Building Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Button>

                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => setIsVideoOpen(true)}
                  className="h-14 px-8 text-lg text-white border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 backdrop-blur-md transition-all rounded-full group relative w-full sm:w-auto"
                >
                    <span className="flex items-center justify-center gap-3">
                       <div className="relative">
                         <Play className="w-5 h-5 fill-white group-hover:text-cyan-400 transition-colors" />
                         <span className="absolute inset-0 animate-ping bg-cyan-400/30 rounded-full" />
                       </div>
                       Watch Demo
                    </span>
                    <span className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#050510] shadow-lg">2:30</span>
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
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-[#0A0B1E] bg-zinc-800 flex items-center justify-center text-xs text-white overflow-hidden relative shadow-lg`}>
                     <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                     <User className="w-5 h-5 text-white/50" />
                  </div>
                ))}
              </div>
              <div className="text-sm text-[#94A3B8]">
                <div className="flex items-center justify-center sm:justify-start gap-1 mb-1">
                  <div className="flex text-yellow-400 drop-shadow-md">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <span className="font-bold text-white ml-1">4.9/5</span>
                  <span className="text-xs opacity-70">on G2</span>
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
              className="relative z-20 transform scale-90 sm:scale-100"
            >
                {/* Floating Context Cards with NEURAL LINES */}
                <div className="absolute inset-0 pointer-events-none hidden md:block">
                    {/* SVG Lines connecting cards to phone center */}
                    <svg className="absolute inset-0 w-full h-full visible overflow-visible opacity-30">
                        <line x1="80%" y1="10%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="10%" y1="50%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="80%" y1="90%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" />
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#A855F7" stopOpacity="0" />
                                <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
                                <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <FloatingCard 
                  className="absolute -top-12 -right-8 z-30 hidden md:flex" 
                  delay={0.5}
                  title="Pipeline Update"
                  value="$127K Added"
                  icon={<TrendingUp className="w-4 h-4 text-cyan-400" />}
                  color="cyan"
                />
                
                <FloatingCard 
                  className="absolute top-1/2 -left-20 z-30 hidden lg:flex" 
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
                  icon={<AlertCircle className="w-4 h-4 text-pink-400" />}
                  color="pink"
                />

                {/* 3D Phone Mockup */}
                <div className="relative w-[300px] sm:w-[380px] mx-auto h-[600px] sm:h-[700px] bg-[#0F0F11] rounded-[40px] sm:rounded-[50px] border-[6px] sm:border-[8px] border-[#1C1C1E] shadow-2xl overflow-hidden transform-gpu group">
                    {/* Rim Light (Cyan Glow) */}
                    <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-[46px] blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Dynamic Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-50 rounded-[32px] sm:rounded-[42px] mix-blend-overlay" />
                    
                    {/* Screen Content */}
                    <div className="absolute inset-0 bg-[#050510] flex flex-col z-10">
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
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.5)]">
                                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 border-2 border-[#0F0F11] rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm sm:text-base">AI Operator</h3>
                                <p className="text-[10px] sm:text-xs text-cyan-400 font-medium tracking-wide">Processing 3 conversations...</p>
                            </div>
                        </div>

                        {/* Interaction Area */}
                        <div className="flex-1 p-3 sm:p-4 space-y-3 sm:space-y-4 overflow-hidden relative">
                            {/* Card 1: Pipeline */}
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.2 }}
                                className="bg-[#1A1A2E]/80 backdrop-blur-md border-l-4 border-cyan-500 rounded-lg p-3 sm:p-4 shadow-lg border-y border-r border-white/5"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider">Pipeline Update</span>
                                    <span className="text-[9px] sm:text-[10px] text-zinc-500">Just now</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                                        <CheckCircle2 className="w-3 h-3 text-cyan-500" />
                                        <span>2 leads moved to "Hot"</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                                        <CheckCircle2 className="w-3 h-3 text-cyan-500" />
                                        <span>$45K deal marked "Closing"</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 2: Message */}
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 2.5 }}
                                className="bg-[#1A1A2E]/80 backdrop-blur-md rounded-lg p-3 sm:p-4 shadow-lg border border-white/5"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-xs font-bold border border-pink-500/30">S</div>
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
                                        <button className="flex-1 bg-blue-600 text-white text-[10px] sm:text-xs font-bold py-1.5 rounded hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20">
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
                                <div className="h-10 sm:h-12 bg-[#1C1C1E] rounded-full border border-white/10 flex items-center px-4 shadow-lg">
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
        cyan: "border-cyan-500/30 bg-cyan-950/80 text-cyan-400 shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)]",
        yellow: "border-yellow-500/30 bg-yellow-950/80 text-yellow-400 shadow-[0_0_20px_-5px_rgba(250,204,21,0.3)]",
        pink: "border-pink-500/30 bg-pink-950/80 text-pink-400 shadow-[0_0_20px_-5px_rgba(244,114,182,0.3)]",
        green: "border-green-500/30 bg-green-950/80 text-green-400",
        orange: "border-orange-500/30 bg-orange-950/80 text-orange-400"
    };

    return (
        <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay, type: "spring" }}
            className={`backdrop-blur-xl border p-4 rounded-2xl flex items-center gap-3 w-48 ${className} ${colors[color as keyof typeof colors]}`}
        >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colors[color as keyof typeof colors].split(" ")[0]} bg-white/5 border border-white/10`}>
                {icon}
            </div>
            <div>
                <p className="text-[10px] font-bold uppercase tracking-wider opacity-70">{title}</p>
                <p className="text-sm font-bold text-white">{value}</p>
            </div>
        </motion.div>
    );
}
