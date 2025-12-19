"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Oswald } from 'next/font/google';
import { cn } from '@/lib/utils';
import { TrendingUp, Flame, Trophy } from 'lucide-react';
import GlitchText from './intro/glitch-text';
import Image from 'next/image';

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '500', '700'] });

enum HoverState {
  LEFT = 'left',
  RIGHT = 'right',
  NEUTRAL = 'neutral'
}

const Badge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-red-500/30 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(220,38,38,0.1)]">
    <span className="text-xl">{icon}</span>
    <span className="text-sm font-bold text-white tracking-wide">{text}</span>
  </div>
);

export function SplitExperts() {
  const [hoverState, setHoverState] = useState<HoverState>(HoverState.NEUTRAL);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle mouse move to determine which side is hovered
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { width, left } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    
    // Threshold: 50% of screen
    if (x < width / 2) {
      setHoverState(HoverState.LEFT);
    } else {
      setHoverState(HoverState.RIGHT);
    }
  };

  const handleMouseLeave = () => {
    setHoverState(HoverState.NEUTRAL);
  };

  // Animation Variants
  const transitionConfig = { type: "spring", stiffness: 120, damping: 20 };

  // Coordinates for the diagonal slash
  // Neutral: Top 60%, Bottom 40% (creating a / shape leaning right)
  const clipPathVariants = {
    neutral: { 
      clipPath: 'polygon(0% 0%, 60% 0%, 40% 100%, 0% 100%)',
    },
    left: { 
      clipPath: 'polygon(0% 0%, 150% 0%, 100% 100%, 0% 100%)', // Expands way past right edge
    },
    right: { 
      clipPath: 'polygon(0% 0%, -50% 0%, -20% 100%, 0% 100%)', // Shrinks way past left edge
    }
  };

  // Laser Line Variants (SVG Line coordinates)
  const laserVariants = {
    neutral: { x1: "60%", x2: "40%" },
    left: { x1: "150%", x2: "100%" },
    right: { x1: "-50%", x2: "-20%" }
  };

  const isRightActive = hoverState === HoverState.RIGHT;
  const isLeftActive = hoverState === HoverState.LEFT;

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[calc(100vh-6rem)] overflow-hidden bg-black cursor-crosshair select-none group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ------------------------------------------------------ */}
      {/* RIGHT SIDE (Black / Nadin) - The Base Layer            */}
      {/* ------------------------------------------------------ */}
      <div className="absolute inset-0 bg-[#050505] flex items-center justify-end overflow-hidden">
        {/* Background Texture & Gradient */}
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/30 via-black/0 to-black/0" />
        
        {/* Red Spotlight/Gradient Background (Active State) */}
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-500"
          style={{ 
            opacity: isRightActive ? 0.8 : 0,
            background: 'radial-gradient(circle at 50% 50%, #4a0404 0%, #000000 80%)' 
          }} 
        />

        {/* Content Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* NADIN CONTENT */}
          {/* Wrapper to handle positioning similar to original, but dynamic */}
          <div className="absolute inset-0 z-40 pointer-events-none flex flex-col justify-center p-8 md:p-16">
             
             {/* Default State: Name & Subtitle - Visible when Neutral or Left */}
             <motion.div 
               className="absolute right-10 md:right-24 top-1/2 transform -translate-y-1/2 text-right z-40"
               animate={{ 
                 opacity: isRightActive ? 0 : (hoverState === HoverState.LEFT ? 0 : 1), 
                 x: isRightActive ? 50 : 0
               }}
               transition={{ duration: 0.4 }}
             >
                <h2 className={cn(oswald.className, "text-6xl md:text-8xl font-bold text-white uppercase leading-none drop-shadow-lg text-right")}>
                  NADIN<br/>MADTUSO
                </h2>
                <p className="text-white/60 text-lg uppercase tracking-widest mt-2 text-right">
                  The Buzzkill
                </p>
             </motion.div>

             {/* Active State: The Reveal - Visible only when Right is hovered */}
             <AnimatePresence>
               {isRightActive && (
                 <motion.div 
                   className="absolute inset-0 z-40 grid grid-cols-[32%_1fr_15%] items-center"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.4 }}
                 >
                   {/* LEFT COLUMN: Space for Photo (handled separately by motion.img) */}
                   <div className="h-full" />

                   {/* CENTER COLUMN: Text & Stats */}
                   <motion.div 
                     className="flex flex-col items-center justify-center px-4"
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: 30 }}
                     transition={{ duration: 0.5, ease: "easeOut" }}
                   >
                      {/* Nickname (No Glitch) */}
                      <motion.div 
                        className="relative mb-2 flex justify-center"
                        initial={{ skewX: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                         <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-black text-[#FF0000] tracking-tighter leading-none font-display italic text-center mix-blend-screen">
                           BUZZKILL
                         </h2>
                      </motion.div>
                      
                      {/* Real Name - REMOVED as requested */}
                      
                      {/* Mottos */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col gap-4 items-center mt-4"
                      >
                         <p className="text-2xl md:text-3xl lg:text-4xl text-white font-serif italic text-center">
                           "Emotions lie. Numbers don't."
                         </p>
                         <p className="text-2xl md:text-3xl lg:text-4xl text-white font-serif italic text-center">
                           "Am I suffocating you?"
                         </p>
                         <p className="text-2xl md:text-3xl lg:text-4xl text-white font-serif italic text-center">
                           "You are not my brother..."
                         </p>
                      </motion.div>

                      {/* STATS GRID - REMOVED as requested */}
                      
                      {/* BADGES - REMOVED as requested */}

                   </motion.div>

                   {/* RIGHT COLUMN: Legendary Status (REMOVED) */}
                   <motion.div 
                     className="h-full flex flex-col items-center justify-center pr-4 md:pr-8"
                     initial={{ opacity: 0, x: 40 }}
                     animate={{ opacity: 0, x: 0 }} 
                     exit={{ opacity: 0, x: 40 }}
                     transition={{ duration: 0.5, delay: 0.25 }}
                   >
                       {/* Content removed as requested */}
                   </motion.div>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>

          {/* Right Image - The "Opponent/Nadin" */}
          <motion.img
            src="/photos/right_hero.png"
            alt="Nadin Madtuso"
            className="absolute h-[95vh] object-cover object-top pointer-events-none drop-shadow-2xl z-30 right-0"
            initial={{ x: '15%' }}
            animate={{ 
              // When hovering Right: Move to Left side (to fit 28% column in grid)
              x: isRightActive ? '-38vw' : '15%', 
              opacity: hoverState === HoverState.LEFT ? 0 : 1,
              scale: isRightActive ? 1.05 : 1.05,
              filter: isRightActive ? 'grayscale(0%) brightness(1.05) contrast(1.1)' : 'grayscale(0%) brightness(1)'
            }}
            transition={{ ...transitionConfig, duration: 0.8 }}
          />
        </div>
      </div>

      {/* ------------------------------------------------------ */}
      {/* LEFT SIDE (Red / Arsenal) - The Clipped Overlay Layer  */}
      {/* ------------------------------------------------------ */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-red-900 overflow-hidden z-20"
        variants={clipPathVariants}
        initial="neutral"
        animate={hoverState || "neutral"}
        transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}
      >
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        
        {/* Content Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Logo & Text - Fades out when right expands */}
          <motion.div 
            className="absolute left-10 md:left-20 top-1/4 md:top-1/2 transform -translate-y-1/2 z-30 pointer-events-none"
            animate={{ 
              opacity: isLeftActive ? 0 : (hoverState === HoverState.RIGHT ? 0 : 1),
              x: isLeftActive ? -50 : (hoverState === HoverState.RIGHT ? -100 : 0)
            }}
            transition={transitionConfig}
          >
            <div className="mt-8 space-y-2">
              <h1 className={cn(oswald.className, "text-6xl md:text-8xl font-bold text-white uppercase leading-none drop-shadow-lg")}>
                SHABASHIN
              </h1>
              <p className="text-white/60 text-lg uppercase tracking-widest mt-2">The Windy</p>
            </div>
          </motion.div>

          {/* Active State: The Reveal for Shabashin */}
          <AnimatePresence>
            {isLeftActive && (
                <motion.div 
                  className="absolute inset-0 z-40 grid grid-cols-[5%_1fr_45%] items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* LEFT COLUMN: Spacer */}
                  <div className="h-full" />

                  {/* CENTER COLUMN: Text & Quotes */}
                  <motion.div 
                    className="flex flex-col items-center justify-center px-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                     {/* Nickname (No Glitch) */}
                     <motion.div 
                       className="relative mb-2 flex justify-center"
                       initial={{ skewX: 0 }}
                       transition={{ duration: 0.4, delay: 0.1 }}
                     >
                       <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-black text-white tracking-tighter leading-none font-display italic text-center">
                         THE WINDY
                       </h2>
                     </motion.div>
                     
                     {/* Mottos */}
                     <motion.div
                       initial={{ opacity: 0, scale: 0.9 }}
                       animate={{ opacity: 1, scale: 1 }}
                       transition={{ delay: 0.3 }}
                       className="flex flex-col gap-4 items-center mt-4"
                     >
                        <p className="text-xl md:text-2xl lg:text-3xl text-white font-serif italic text-center max-w-4xl">
                          "Let's pool our money, buy FC Arsenal and a couple of oil rigs, and show those damn Manchester United, Chelsea, and Liverpool."
                        </p>
                        <p className="text-xl md:text-2xl lg:text-3xl text-white font-serif italic text-center">
                          "Guys, where should I take you for a ride on the pitch?"
                        </p>
                        <p className="text-xl md:text-2xl lg:text-3xl text-white font-serif italic text-center">
                          "I can't score 90, only 4."
                        </p>
                     </motion.div>
                  </motion.div>

                  {/* RIGHT COLUMN: Spacer for Image */}
                  <div className="h-full" />
                </motion.div>
            )}
          </AnimatePresence>

          {/* Left Image - The "Arsenal Player" */}
          <motion.img
            src="/photos/left_hero.png"
            alt="Arsenal Player"
            className="absolute h-[90vh] bottom-0 object-cover object-top pointer-events-none drop-shadow-2xl z-20"
            initial={{ x: '-25%' }}
            animate={{ 
              // When hovering Left: Move to Right side (Displace Opponent)
              x: hoverState === HoverState.LEFT ? '25%' : '-25%',
              // When hovering Right: Fade out
              opacity: hoverState === HoverState.RIGHT ? 0 : 1,
              scale: hoverState === HoverState.LEFT ? 1.1 : 1,
              filter: hoverState === HoverState.LEFT ? 'saturate(1.2)' : 'saturate(1)'
            }}
            transition={{ ...transitionConfig, duration: 0.8 }}
          />
        </div>
      </motion.div>

      {/* ------------------------------------------------------ */}
      {/* THE LASER DIVIDER (SVG Overlay)                        */}
      {/* ------------------------------------------------------ */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-30 overflow-visible">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="laserGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        
        {/* The Core White Laser Beam */}
        <motion.line
          y1="0%"
          y2="100%"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="square"
          filter="url(#glow)"
          variants={laserVariants}
          initial="neutral"
          animate={hoverState || "neutral"}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}
          className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        />
        
        {/* Animated particle moving along the line for "Energy" feel */}
         <motion.circle 
           r="6" 
           fill="white"
           filter="url(#glow)"
           animate={{ 
             opacity: [0.5, 1, 0.5]
           }}
           transition={{ repeat: Infinity, duration: 0.2 }}
         />
      </svg>

      {/* Interactive prompt */}
      <motion.div 
         className="absolute bottom-24 left-0 right-0 text-center z-30 pointer-events-none"
         initial={{ opacity: 0 }}
         animate={{ opacity: hoverState === HoverState.NEUTRAL ? 1 : 0 }}
         transition={{ duration: 0.3 }}
      >
        <p className="text-white/50 text-xs uppercase tracking-[0.5em] animate-pulse">
          Hover sides to dominate
        </p>
      </motion.div>

    </div>
  );
}
