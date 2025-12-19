"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Trophy, Shield } from 'lucide-react';

export const PricingHero: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center py-24 overflow-hidden">
      {/* Animated Red Circle Background */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-[3px] border-brand-red/30"
        animate={{ 
          rotate: 360,
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 rounded-full px-6 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></span>
          <span className="text-sm font-bold uppercase tracking-widest text-brand-red">Premium Access</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6"
        >
          <span className="text-white">CHOOSE YOUR</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-400 to-brand-red">
            WINNING PATH
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12"
        >
          From expert forecasts to premium merchandise — unlock your full potential
        </motion.p>

        {/* Feature Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: Zap, text: "Instant Access" },
            { icon: Trophy, text: "90%+ Win Rate" },
            { icon: Shield, text: "Money-Back Guarantee" }
          ].map((item, i) => (
            <div 
              key={i}
              className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5"
            >
              <item.icon className="w-4 h-4 text-brand-red" />
              <span className="text-sm font-medium text-white">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent"></div>
    </section>
  );
};

