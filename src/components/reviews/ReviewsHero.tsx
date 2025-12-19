"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Star, Shield } from 'lucide-react';

const ReviewsHero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center py-24 overflow-hidden bg-black">
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(220,38,38,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220,38,38,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Animated Red Circles */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border-[2px] border-brand-red/20"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Red Gradient Glow */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 60%)'
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 rounded-full px-6 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></span>
          <span className="text-sm font-bold uppercase tracking-widest text-brand-red">Client Trust</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6"
        >
          <span className="text-white">REVIEWS &</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-400 to-brand-red">
            GUARANTEES
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12"
        >
          Transparency and honesty are our core principles. 
          See the quality of our work through client reviews.
        </motion.p>

        {/* Feature Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: Shield, text: "100% Guarantee" },
            { icon: Star, text: "4.9 Rating" },
            { icon: MessageSquare, text: "1000+ Reviews" }
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

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default ReviewsHero;
