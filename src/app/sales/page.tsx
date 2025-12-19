"use client";

import React from 'react';
import { Hero } from '@/components/sales/Hero';
import { FreeForecasts } from '@/components/sales/FreeForecasts';
import { ProductShowcase } from '@/components/sales/ProductShowcase';
import { SantaChat } from '@/components/sales/SantaChat';
import { SnowEffect } from '@/components/sales/SnowEffect';
import { Reveal } from '@/components/sales/Reveal';

export default function SalesPage() {

  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 selection:bg-brand-red selection:text-white relative font-sans">
      
      {/* Background Snow Animation */}
      <SnowEffect />

      {/* Main Content */}
      <main className="relative">
        <Hero />

        {/* Dynamic Marquee Banner */}
        <div className="bg-gradient-to-r from-black via-brand-red/20 to-black border-y border-brand-red/20 overflow-hidden relative z-20 h-10 flex items-center">
           <div className="whitespace-nowrap animate-marquee flex gap-10">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="text-white/80 font-mono text-xs uppercase tracking-[0.2em] font-bold flex items-center gap-4">
                   <span>❄️ The Only Way To Predict The Future Is To Create It</span>
                   <span className="text-brand-red">///</span>
                   <span>Start Winning Today</span>
                   <span className="text-brand-red">///</span>
                </span>
              ))}
           </div>
        </div>

        {/* Forecasts & Store Section */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          
          <Reveal>
            <FreeForecasts />
          </Reveal>
          
          <div id="exclusive-drop">
            <Reveal delay={200}>
              <ProductShowcase />
            </Reveal>
          </div>

          <div id="santa-ai" className="mt-24 max-w-4xl mx-auto">
             <div className="text-center mb-10">
                <span className="text-brand-red font-mono text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
                   🤖 Powered by North Pole Algorithms
                </span>
                <h2 className="text-4xl font-serif font-black text-white mb-6">
                   Ask Santa's <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">AI Assistant</span>
                </h2>
                <p className="text-gray-400 max-w-lg mx-auto">
                   Need a prediction? Want to know the odds? Type your question below.
                </p>
             </div>
             <Reveal delay={300}>
                <SantaChat />
             </Reveal>
          </div>

        </div>
      </main>

    </div>
  );
};
