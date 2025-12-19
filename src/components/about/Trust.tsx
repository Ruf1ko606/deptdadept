'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const stats = [
  { value: "07", label: "Years", sub: "of Operational Excellence" },
  { value: "142", label: "ROI", sub: "Average Quarterly Return (%)" },
  { value: "4.8K", label: "Clients", sub: "Trusting our Analysis" },
  { value: "24/7", label: "Support", sub: "Global Coverage" },
];

const Trust: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Dynamic calculation of content width for precise offset
  useEffect(() => {
    const calculateScrollRange = () => {
      if (contentRef.current) {
        const contentWidth = contentRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Offset = content width - viewport width
        setScrollRange(contentWidth - viewportWidth);
      }
    };

    calculateScrollRange();
    window.addEventListener('resize', calculateScrollRange);
    return () => window.removeEventListener('resize', calculateScrollRange);
  }, []);

  // Using pixels for precise offset control
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);
  const smoothX = useSpring(x, { stiffness: 80, damping: 25, mass: 0.5 });

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-off-white text-obsidian">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-off-white z-10">
        
        <div className="absolute top-12 left-12 z-20">
          <h2 className="text-obsidian text-sm font-bold uppercase tracking-[0.3em] flex items-center gap-2">
            <span className="w-2 h-2 bg-cardiac rounded-full animate-pulse" />
            Live Metrics
          </h2>
        </div>

        <motion.div 
          ref={contentRef}
          style={{ x: smoothX }} 
          className="flex gap-16 md:gap-24 pl-12 md:pl-24 pr-24"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex-shrink-0 w-[85vw] md:w-[40vw] flex flex-col justify-center border-l-2 border-obsidian/10 pl-8 md:pl-12">
              <div className="overflow-hidden">
                <motion.span 
                  className="block text-[10rem] md:text-[16rem] font-bold leading-none tracking-tighter text-obsidian"
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {stat.value}
                </motion.span>
              </div>
              <div className="mt-4 flex items-baseline gap-4 flex-wrap">
                <span className="text-3xl md:text-6xl font-light text-cardiac">{stat.label}</span>
                <span className="text-base md:text-xl text-gray-500 max-w-xs">{stat.sub}</span>
              </div>
            </div>
          ))}
          
          {/* Closing Statement Panel */}
          <div className="flex-shrink-0 w-[90vw] md:w-[60vw] flex items-center justify-center pr-12 md:pr-24">
             <h3 className="text-4xl md:text-7xl font-semibold text-obsidian leading-tight text-center">
               Numbers are the <br /> 
               <span className="text-cardiac italic font-serif">universal language</span> <br/>
               of truth.
             </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;
