"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ScrollFloat from '@/components/ui/scroll-float';
import { Oswald } from 'next/font/google';
import { cn } from '@/lib/utils';

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '500', '700'] });

const TextBlockThree: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] w-full bg-off-white overflow-hidden flex flex-col items-center justify-center py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-off-white to-gray-100" />
        
        {/* Vertical lines decoration */}
        <div className="absolute inset-0 flex justify-center gap-40 opacity-[0.05]">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-black to-transparent" />
          <div className="w-px h-full bg-gradient-to-b from-transparent via-black to-transparent" />
          <div className="w-px h-full bg-gradient-to-b from-transparent via-black to-transparent" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center text-center">
        
        {/* Intro text - styled like Years/ROI/Clients */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-3xl md:text-5xl font-light text-cardiac mb-6"
        >
          Introducing
        </motion.span>

        {/* ScrollFloat Main Text - Black */}
        <ScrollFloat
          animationDuration={1.2}
          ease="back.out(1.7)"
          stagger={0.025}
          containerClassName="flex justify-center"
          textClassName={cn(
            oswald.className,
            "text-5xl md:text-7xl lg:text-8xl font-bold text-obsidian uppercase tracking-tight"
          )}
        >
          Meet The Minds
        </ScrollFloat>

        {/* Decorative arrow pointing down */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-cardiac/50 to-transparent" />
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-obsidian/30"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="opacity-50"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default TextBlockThree;
