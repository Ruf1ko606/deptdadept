"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Red Gradient Glow - Left Side */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 100% at 0% 100%, rgba(139, 0, 0, 0.4) 0%, rgba(80, 0, 0, 0.2) 30%, transparent 70%)'
        }}
      />
      
      {/* Red Gradient Glow - Right Side (subtle) */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 100% 80%, rgba(100, 0, 0, 0.15) 0%, transparent 50%)'
        }}
      />
      
      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.6)_100%)]" />

      {/* Red Line Reveal */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="h-[1px] bg-accent absolute top-1/2 left-0 z-10"
      />

      {/* Main Title */}
      <div className="relative z-20 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="font-display font-bold text-4xl md:text-7xl lg:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500"
        >
          TRANSPARENCY
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-4 font-display text-xs md:text-lg text-secondary tracking-[0.5em] uppercase"
        >
          UNMATCHED IN THE CIS
        </motion.p>
      </div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-20 md:bottom-32 text-center max-w-lg px-6"
      >
        <p className="font-body text-secondary text-sm md:text-base leading-relaxed">
          Since October 2025, we track every forecast.<br />
          <span className="text-white">Every single one. No exceptions.</span><br />
          Even the ones lost in the first half.
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
