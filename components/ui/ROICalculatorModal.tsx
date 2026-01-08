'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calculator, DollarSign, Clock, Users } from 'lucide-react';
import { Button } from './Button';

interface ROICalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ROICalculatorModal({ isOpen, onClose }: ROICalculatorModalProps) {
  const [leadsPerMonth, setLeadsPerMonth] = useState(500);
  const [staffHourlyRate, setStaffHourlyRate] = useState(25);
  const [hoursSpentManual, setHoursSpentManual] = useState(20);
  const [dealValue, setDealValue] = useState(1000);

  // ROI Calculations
  const monthlyCostManual = hoursSpentManual * staffHourlyRate;
  const aiCost = 497; // Growth plan cost reference
  
  const moneySaved = monthlyCostManual - aiCost;
  const timeSaved = hoursSpentManual * 0.9; // Assuming 90% automation
  
  // Conservative estimate: 20% more deals closed due to instant follow-up
  const additionalRevenue = (leadsPerMonth * 0.05) * dealValue * 0.2; 
  
  const totalMonthlyROI = moneySaved + additionalRevenue;

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-[#09090b] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                        <Calculator className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">ROI Calculator</h3>
                        <p className="text-sm text-zinc-400">See how much you save with AI agents</p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/10 rounded-full text-zinc-400 hover:text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
                
                {/* Inputs */}
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                                <Users className="w-4 h-4 text-zinc-500" /> Leads Per Month
                            </label>
                            <span className="text-sm font-bold text-white">{leadsPerMonth}</span>
                        </div>
                        <input 
                            type="range" min="50" max="5000" step="50"
                            value={leadsPerMonth}
                            onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                                <Clock className="w-4 h-4 text-zinc-500" /> Manual Hours/Month
                            </label>
                            <span className="text-sm font-bold text-white">{hoursSpentManual} hrs</span>
                        </div>
                        <input 
                            type="range" min="0" max="160" step="1"
                            value={hoursSpentManual}
                            onChange={(e) => setHoursSpentManual(Number(e.target.value))}
                            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                                <DollarSign className="w-4 h-4 text-zinc-500" /> Staff Hourly Rate
                            </label>
                            <span className="text-sm font-bold text-white">${staffHourlyRate}/hr</span>
                        </div>
                        <input 
                            type="range" min="10" max="200" step="5"
                            value={staffHourlyRate}
                            onChange={(e) => setStaffHourlyRate(Number(e.target.value))}
                            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                    </div>
                </div>

                {/* Results Card */}
                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-xl p-6 relative overflow-hidden">
                    <div className="relative z-10 grid grid-cols-2 gap-6">
                        <div>
                            <p className="text-sm text-blue-200 mb-1">Monthly Savings</p>
                            <div className="text-2xl font-bold text-white">
                                ${moneySaved > 0 ? moneySaved.toLocaleString() : 0}
                            </div>
                            <p className="text-xs text-blue-300/60 mt-1">vs hiring staff</p>
                        </div>
                        <div>
                            <p className="text-sm text-purple-200 mb-1">Time Saved</p>
                            <div className="text-2xl font-bold text-white">
                                {Math.round(timeSaved)} hrs
                            </div>
                            <p className="text-xs text-purple-300/60 mt-1">per month</p>
                        </div>
                        <div className="col-span-2 pt-4 border-t border-white/10">
                            <p className="text-sm text-green-200 mb-1">Potential Extra Revenue</p>
                            <div className="text-3xl sm:text-4xl font-bold text-green-400">
                                +${additionalRevenue.toLocaleString()}
                            </div>
                            <p className="text-xs text-green-300/60 mt-1">from faster speed-to-lead & follow-ups</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/5 bg-white/[0.02] flex justify-end">
                <Button onClick={onClose} className="w-full sm:w-auto">
                    Start Saving Now
                </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
