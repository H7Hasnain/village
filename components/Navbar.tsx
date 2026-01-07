'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Capabilities', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className={`mx-auto transition-all duration-300 ${isScrolled ? 'container max-w-5xl' : 'container px-4 sm:px-6 lg:px-8'}`}>
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled 
              ? 'bg-background/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl shadow-black/50' 
              : 'px-0'
          }`}>
            <Link href="/" className="flex items-center gap-2 z-50">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-white tracking-tight"
              >
                GHL<span className="text-primary">AI</span>
              </motion.span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-medium text-muted-foreground hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button size="sm" className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow rounded-full px-6">
                Book Demo
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden z-50 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col justify-center items-center"
          >
            <div className="flex flex-col gap-8 text-center w-full px-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-semibold text-white hover:text-primary transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-8"
              >
                <Button size="lg" className="w-full text-lg group" onClick={() => setIsMobileMenuOpen(false)}>
                  Book a Free Demo
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
