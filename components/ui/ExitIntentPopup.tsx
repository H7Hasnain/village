'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsVisible(false)}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-[#0F0F11] border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl z-10"
          >
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                    <FileText className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">Wait! Before you go...</h3>
                </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Don't leave empty-handed. Get our free <strong>"GHL Automation Checklist"</strong> used by 7-figure agencies to save 20+ hours a week.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full h-12 rounded-lg bg-white/5 border border-white/10 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
                <Button className="w-full h-12 text-base font-semibold">
                    Send Me The Checklist
                </Button>
            </form>
            
            <p className="mt-4 text-center text-xs text-muted-foreground">
                No spam. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
