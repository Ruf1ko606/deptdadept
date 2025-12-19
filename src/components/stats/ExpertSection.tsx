"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExpertProfile } from './types';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

// Mock mini chart data
const miniChartData = Array.from({ length: 20 }, (_, i) => ({ value: 100 + i * 2 + Math.random() * 10 - 5 }));

const experts: ExpertProfile[] = [
  {
    id: '1',
    name: 'Rustam Shabashin',
    alias: 'Shabashin',
    role: 'Former London Arsenal Forward | 10 years in EPL',
    description: 'I bet the way I scored in the EPL — only on value. No parlays for pretty screenshots.',
    image: '/photos/sha2.png',
    metrics: { total: 1942, roi: 91.3, avgCoef: 2.38, winRate: 61.8, maxSeries: 27 },
    chartData: miniChartData
  },
  {
    id: '2',
    name: 'BuzzKill',
    alias: 'BuzzKill',
    role: 'Ex-Head of Odds at Major Bookmaker',
    description: 'The legendary buzzkill of the football world, now suffocating the bookmakers.',
    image: '/photos/mad2.png',
    metrics: { total: 1420, roi: 78.5, avgCoef: 2.15, winRate: 65.2, maxSeries: 19 },
    chartData: miniChartData.map(d => ({ value: d.value * 0.9 }))
  }
];

const ExpertCard: React.FC<{ expert: ExpertProfile }> = ({ expert }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="group relative w-full md:w-[48%] bg-neutral-900/20 border border-neutral-900 hover:border-accent transition-colors duration-700 overflow-hidden"
  >
    {/* Image Container */}
    <div className="relative h-[500px] w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
        <img src={expert.image} alt={expert.alias} className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Hover Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center p-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm bg-black/60">
            <p className="font-display text-lg md:text-2xl text-center leading-relaxed text-white">
                "{expert.description}"
            </p>
        </div>
    </div>

    {/* Content */}
    <div className="p-8 relative z-30 -mt-20">
        <div className="flex items-end justify-between mb-6">
            <div>
                <h3 className="font-display text-4xl text-white font-bold">{expert.alias}</h3>
                <p className="font-body text-secondary text-sm mt-1">{expert.role}</p>
            </div>
            {/* Mini Chart */}
            <div className="w-24 h-12">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={expert.chartData}>
                        <Area type="monotone" dataKey="value" stroke="#FF1438" fill="rgba(255,20,56,0.1)" strokeWidth={2} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>

        <div className="space-y-4 font-mono text-sm border-t border-neutral-800 pt-6">
            <div className="flex justify-between items-center">
                <span className="text-secondary">All-time ROI</span>
                <span className="text-accent text-xl font-bold">+{expert.metrics.roi}%</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-secondary">Forecasts</span>
                <span className="text-white">{expert.metrics.total}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-secondary">Avg Odds</span>
                <span className="text-white">{expert.metrics.avgCoef}</span>
            </div>
             <div className="flex justify-between items-center">
                <span className="text-secondary">Win Rate</span>
                <span className="text-white">{expert.metrics.winRate}%</span>
            </div>
        </div>
    </div>
  </motion.div>
);

const ExpertSection: React.FC = () => {
  return (
    <section className="py-32 px-4 md:px-12 bg-black relative">
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <h2 className="font-display text-3xl md:text-5xl text-white">
          Two people you can <br/><span className="text-neutral-600">trust with your money</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-0 relative">
        {/* Pulse Line Divider */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-accent to-transparent opacity-50 z-0" />
        
        {experts.map(expert => <ExpertCard key={expert.id} expert={expert} />)}
      </div>
    </section>
  );
};

export default ExpertSection;
