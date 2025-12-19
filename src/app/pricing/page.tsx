"use client";

import React from 'react';
import { PricingHero } from '@/components/pricing/PricingHero';
import { ForecastPlans } from '@/components/pricing/ForecastPlans';
import { FootballKits } from '@/components/pricing/FootballKits';
import { ExclusiveServices } from '@/components/pricing/ExclusiveServices';
import { PremiumAccess } from '@/components/pricing/PremiumAccess';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-red selection:text-white font-sans overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Large Red Circle - Top Right */}
        <div className="absolute -top-[400px] -right-[400px] w-[800px] h-[800px] rounded-full bg-brand-red/20 blur-3xl"></div>
        
        {/* Large Red Circle - Bottom Left */}
        <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-brand-red/15 blur-3xl"></div>
        
        {/* Diagonal Lines Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 50px,
            rgba(255,255,255,0.1) 50px,
            rgba(255,255,255,0.1) 51px
          )`
        }}></div>
      </div>

      <main className="relative z-10">
        <PricingHero />
        <ForecastPlans />
        <FootballKits />
        <ExclusiveServices />
        <PremiumAccess />
      </main>
    </div>
  );
}

