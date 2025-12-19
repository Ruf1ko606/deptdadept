"use client";

import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
} from 'recharts';
import { motion } from 'framer-motion';
import { ChartDataPoint } from './types';

// Mock Data Generator
const generateData = (): ChartDataPoint[] => {
  const data: ChartDataPoint[] = [];
  let value = 100;
  let market = 100;
  let closing = 100;

  for (let i = 0; i < 50; i++) {
    // Simulate realistic betting growth with variance
    const change = (Math.random() - 0.4) * 10; 
    value += change;
    market += (Math.random() - 0.45) * 5; // Market grows slower
    closing += (Math.random() - 0.42) * 6; // Closing line beats market

    // Create a "drawdown" event around index 30
    if (i > 28 && i < 35) {
      value -= Math.random() * 5;
    }

    data.push({
      date: `Dec ${21 + Math.floor(i / 12)}`,
      value: Number(value.toFixed(2)),
      market: Number(market.toFixed(2)),
      closing: Number(closing.toFixed(2)),
    });
  }
  return data;
};

const data = generateData();

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black border border-accent p-4 shadow-[0_0_20px_rgba(255,20,56,0.2)]">
        <p className="font-mono text-secondary text-xs mb-2">{label}</p>
        <div className="space-y-1">
          <p className="font-mono text-accent text-sm">
            DEPT: {payload[0].value}%
          </p>
          <p className="font-mono text-gray-500 text-xs">
            Market: {payload[1].value}%
          </p>
          <p className="font-mono text-green-500 text-xs">
            CLV: {payload[2].value}%
          </p>
        </div>
      </div>
    );
  }
  return null;
};

const GrowthChart: React.FC = () => {
  return (
    <section className="relative h-[80vh] md:h-screen w-full bg-black flex flex-col justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black" />
      </div>

      <div className="container mx-auto px-6 h-full relative z-10 flex flex-col">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="flex-grow w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF1438" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#FF1438" stopOpacity={0}/>
                </linearGradient>
                <filter id="glow" height="200%" width="200%" x="-50%" y="-50%">
                   <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                   <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="glow" />
                   <feMerge>
                     <feMergeNode in="glow" />
                     <feMergeNode in="SourceGraphic" />
                   </feMerge>
                </filter>
              </defs>
              <XAxis 
                dataKey="date" 
                stroke="#333" 
                tick={{ fill: '#444', fontFamily: 'Space Mono', fontSize: 10 }} 
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#333" 
                tick={{ fill: '#444', fontFamily: 'Space Mono', fontSize: 10 }}
                tickLine={false} 
                axisLine={false}
                domain={['auto', 'auto']}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#333', strokeWidth: 1, strokeDasharray: '4 4' }} />
              
              {/* Market Line */}
              <Area 
                type="monotone" 
                dataKey="market" 
                stroke="#333" 
                strokeWidth={1} 
                fill="transparent" 
                activeDot={false}
              />
              {/* CLV Line */}
              <Area 
                type="monotone" 
                dataKey="closing" 
                stroke="#10b981" 
                strokeWidth={1} 
                strokeOpacity={0.5}
                fill="transparent" 
                activeDot={false}
              />
              {/* Main Line */}
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#FF1438" 
                strokeWidth={3} 
                fill="url(#colorValue)" 
                filter="url(#glow)"
              />
              
              {/* Drawdown Reference */}
              <ReferenceLine x="Dec 24" stroke="#333" strokeDasharray="3 3" label={{ position: 'top', value: 'Drawdown Period', fill: '#444', fontSize: 10 }} />

            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          className="mt-8 text-center"
        >
          <p className="font-display text-white text-sm md:text-xl uppercase tracking-widest">
            We don't hide drawdowns.
          </p>
          <p className="font-body text-secondary text-xs md:text-sm mt-2">
            We show them because they are part of the journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthChart;
