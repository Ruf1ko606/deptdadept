"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Metric } from './types';

const metrics: Metric[] = [
  { label: 'Forecasts Published', value: '2 847', subtext: 'since 2025' },
  { label: 'Average Odds', value: '2.31', subtext: 'we don\'t chase 1.10 for win rate' },
  { label: 'All-time ROI', value: '+84.7%', isHighlight: true },
  { label: 'Max Winning Streak', value: '27', subtext: 'forecasts in a row (Mar–May 2025)' },
  { label: 'Win Rate', value: '62.4%', subtext: 'with avg odds 2.31 this is cosmic' },
  { label: 'Long-term Profit', value: '+2 847', subtext: 'units at 1% flat' },
];

const StatsDashboard: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-1 bg-neutral-900 border border-neutral-900">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-black p-8 md:p-12 relative group overflow-hidden"
            >
              {/* Top Red Glow Line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <p className="font-display text-secondary text-xs uppercase tracking-wider mb-6">
                {metric.label}
              </p>
              
              <h3 className={`font-mono text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
                metric.isHighlight ? 'text-accent drop-shadow-[0_0_10px_rgba(255,20,56,0.5)]' : 'text-white'
              }`}>
                {metric.value}
              </h3>
              
              {metric.subtext && (
                <p className="font-body text-secondary text-xs md:text-sm max-w-[80%]">
                  {metric.subtext}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsDashboard;
