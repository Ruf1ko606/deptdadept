"use client";

import React, { useEffect } from 'react';
import Hero from '@/components/stats/Hero';
import StatsDashboard from '@/components/stats/StatsDashboard';
import GrowthChart from '@/components/stats/GrowthChart';
import ExpertSection from '@/components/stats/ExpertSection';

export default function StatsPage() {
  useEffect(() => {
    // Override accent color to red for this page
    document.documentElement.style.setProperty('--accent', '351 100% 54%'); // #FF1438
    document.documentElement.style.setProperty('--accent-foreground', '0 0% 100%');

    return () => {
      // Cleanup styles on unmount
      document.documentElement.style.removeProperty('--accent');
      document.documentElement.style.removeProperty('--accent-foreground');
    };
  }, []);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-accent selection:text-white">
      <div className="relative z-10">
        <Hero />
        <StatsDashboard />
        <GrowthChart />
        <ExpertSection />
      </div>
    </div>
  );
}
