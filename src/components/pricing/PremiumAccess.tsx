"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Shield, Clock, TrendingUp, Mail, CheckCircle, AlertCircle, Gift } from 'lucide-react';

export const PremiumAccess: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    setError('');
    
    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setSubmitted(true);
  };

  const features = [
    { icon: Zap, text: 'Exclusive predictions' },
    { icon: TrendingUp, text: 'Live odds shifting' },
    { icon: Clock, text: '24/7 strategic support' },
    { icon: Shield, text: 'Risk-free guarantee' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#0a0505] to-brand-dark"></div>
      
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-1 bg-brand-red"></div>
              <span className="text-brand-red font-bold uppercase tracking-widest text-sm">
                AI-Powered
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              PREMIUM <span className="text-brand-red">ACCESS</span>
            </h2>
            
            <p className="text-gray-400 leading-relaxed text-lg">
              Stop guessing. Our AI analyst processes millions of data points to give you real-time insights. 
              <br/><br/>
              Get access to exclusive predictions, live odds shifting, and 24/7 strategic support.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 py-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-brand-red" />
                  </div>
                  <span className="text-gray-300 text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Email Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden group hover:border-brand-red/30 transition-colors">
              
              {/* Glow Effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-red/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Decorative Pattern */}
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <svg className="w-32 h-32 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>

              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <h3 className="text-white font-bold mb-2 text-xl flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Get Premium Access
                      </h3>
                      <p className="text-gray-500 text-sm mb-6">
                        Enter your email to unlock exclusive features and priority support.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-red">
                            <Mail className="w-5 h-5" />
                          </div>
                          <input 
                            type="email" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              setError('');
                            }}
                            className={`w-full bg-black/50 border pl-12 pr-4 py-4 text-sm focus:outline-none text-white placeholder-gray-600 rounded-xl transition-colors ${
                              error ? 'border-red-500 focus:border-red-500' : 'border-white/20 focus:border-brand-red'
                            }`}
                          />
                        </div>
                        
                        {/* Error Message */}
                        <AnimatePresence>
                          {error && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="flex items-center gap-2 text-red-500 text-sm"
                            >
                              <AlertCircle className="w-4 h-4" />
                              <span>{error}</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        
                        <button 
                          onClick={handleSubmit}
                          className="w-full bg-brand-red hover:bg-red-700 text-white py-4 font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-red-900/50 flex items-center justify-center gap-2"
                        >
                          <Zap className="w-4 h-4" />
                          Unlock Premium
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-white/10">
                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                          <Shield className="w-4 h-4 text-green-500" />
                          <span>100% Secure</span>
                        </div>
                        <div className="w-px h-4 bg-white/10"></div>
                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                          <Clock className="w-4 h-4 text-brand-red" />
                          <span>Limited spots</span>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="w-20 h-20 bg-gradient-to-br from-brand-red to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-brand-red/30"
                      >
                        <Gift className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl font-black text-white mb-3"
                      >
                        Wait for your gift!
                      </motion.h3>
                      
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-400 mb-4"
                      >
                        Check your inbox at <span className="text-brand-red font-semibold">{email}</span>
                      </motion.p>
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center justify-center gap-2 text-green-500 text-sm"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span>Successfully subscribed</span>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

