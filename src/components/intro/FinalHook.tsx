"use client";

import React, { useState } from 'react';
import { Plus, Minus, ShieldCheck, Zap, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-xl md:text-2xl font-bold text-white group-hover:text-brand-red transition-colors font-serif italic">
            {question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-colors ${isOpen ? 'bg-brand-red border-brand-red text-white' : 'text-gray-400'}`}>
            {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
            >
                <div className="pb-8 text-gray-400 leading-relaxed max-w-2xl">
                    {answer}
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FinalHook = () => {
  return (
    <section className="bg-black relative py-32 overflow-hidden">
        
        {/* Background Texture/Video Effect */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            {/* You could replace this with a real video of smoke later */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/10 blur-[150px] rounded-full animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                
                {/* Left: Big Statement */}
                <div>
                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] tracking-tighter mb-8">
                        We Are Not <br/>
                        <span className="text-gray-700 line-through decoration-brand-red decoration-4">A Casino.</span> <br/>
                        We Are An <br/>
                        <span className="text-brand-red">Anomaly.</span>
                    </h2>
                    
                    <div className="flex items-center gap-4 mb-12">
                        <div className="text-6xl font-black text-white">89%</div>
                        <div className="text-sm font-mono text-gray-400 uppercase tracking-widest border-l border-gray-700 pl-4">
                            Winrate over <br/>
                            3 Year Period
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest">
                            <ShieldCheck className="text-green-500" /> Verified Stats
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest">
                            <Zap className="text-yellow-500" /> Instant Access
                        </div>
                    </div>
                </div>

                {/* Right: FAQ Accordion */}
                <div className="flex flex-col justify-center">
                    <div className="bg-[#0a0a0a] rounded-3xl p-8 border border-white/5 shadow-2xl">
                        <div className="mb-6 text-xs font-bold uppercase tracking-widest text-brand-red">
                            Common Questions
                        </div>
                        
                        <FAQItem 
                            question="How fast do I get the predictions?" 
                            answer="Instantly. Right after payment, you get access to the private Telegram channel and personal dashboard on the site where all forecasts are published."
                        />
                        <FAQItem 
                            question="What if a prediction loses?" 
                            answer="We work on the long run. But for your peace of mind, we have insurance: if a month closes in the red (which hasn't happened for 3 years), the next month of subscription is free."
                        />
                         <FAQItem 
                            question="How can I pay?" 
                            answer="We accept any bank cards (Visa, Mastercard), as well as cryptocurrency (USDT, BTC, ETH) for complete anonymity."
                        />
                    </div>
                </div>

            </div>
        </div>

    </section>
  );
};

