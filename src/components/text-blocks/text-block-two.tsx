"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/scroll-reveal';

const TextBlockTwo: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient orb left */}
        <div className="absolute top-1/3 -left-20 w-[50vw] h-[50vw] bg-red-950/30 rounded-full blur-[180px] pointer-events-none" />
        
        {/* Gradient orb right */}
        <div className="absolute bottom-1/3 -right-20 w-[40vw] h-[40vw] bg-neutral-800/40 rounded-full blur-[150px] pointer-events-none" />
        
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
        
        {/* Decorative quote mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute -top-10 -left-4 md:-left-10 text-[150px] md:text-[200px] font-serif text-white/10 leading-none select-none pointer-events-none"
        >
          "
        </motion.div>

        {/* ScrollReveal Text */}
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={4}
          blurStrength={8}
          animationDuration={1.5}
          staggerDelay={0.04}
          containerClassName="relative z-10"
          textClassName="text-white/90 text-center md:text-left"
        >
          Some trust only numbers. Others follow their gut. We believe the magic happens when both worlds collide — where statistical precision meets the fire of true football passion. This is not just betting. This is art.
        </ScrollReveal>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 h-[1px] w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
        />

      </div>

      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default TextBlockTwo;

