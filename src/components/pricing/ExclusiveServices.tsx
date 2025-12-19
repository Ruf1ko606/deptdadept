"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '@/components/cart/CartContext';
import { ShoppingCart, Wallet, Target, Shield, Users, Clock, TrendingUp, Lock } from 'lucide-react';

const exclusiveServices = [
  {
    id: 'full-management',
    name: 'Full Betting Management',
    tagline: 'Let the experts handle everything',
    description: 'Hand over your bankroll to our professional team. We analyze, strategize, and place bets on your behalf. Sit back and watch your profits grow.',
    price: 499.99,
    period: '/month',
    minInvestment: '€1,000',
    features: [
      { icon: Wallet, text: 'Complete Bankroll Management' },
      { icon: TrendingUp, text: 'Professional Bet Placement' },
      { icon: Clock, text: '24/7 Market Monitoring' },
      { icon: Shield, text: 'Risk Management Strategy' },
      { icon: Users, text: 'Dedicated Account Manager' }
    ],
    stats: [
      { value: '23%', label: 'Avg. Monthly ROI' },
      { value: '847', label: 'Active Clients' },
      { value: '€2.4M', label: 'Managed Assets' }
    ],
    gradient: 'from-brand-red to-red-800',
    image: '/photos/mainSales.jpeg'
  },
  {
    id: 'personal-strategy',
    name: 'Personal Strategy Development',
    tagline: 'Your custom winning blueprint',
    description: 'One-on-one consultations with our experts to develop a personalized betting strategy tailored to your goals, risk tolerance, and preferred markets.',
    price: 299.99,
    period: 'one-time',
    minInvestment: 'Any bankroll',
    features: [
      { icon: Target, text: 'Custom Strategy Blueprint' },
      { icon: Users, text: '3x Personal Consultations' },
      { icon: TrendingUp, text: 'Market Analysis Training' },
      { icon: Lock, text: 'Exclusive Trading Signals' },
      { icon: Shield, text: 'Lifetime Strategy Updates' }
    ],
    stats: [
      { value: '94%', label: 'Client Satisfaction' },
      { value: '12hrs', label: 'Strategy Development' },
      { value: '∞', label: 'Lifetime Support' }
    ],
    gradient: 'from-amber-500 to-orange-600',
    image: '/photos/mainSales.jpeg'
  }
];

export const ExclusiveServices: React.FC = () => {
  const { addToCart, setIsCartOpen } = useCart();

  const handleAddToCart = (service: typeof exclusiveServices[0]) => {
    addToCart({
      id: service.id,
      name: service.name,
      price: service.price,
      image: service.image
    });
    setIsCartOpen(true);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#0a0505] to-brand-dark"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/50 to-transparent"></div>

      {/* Section Header */}
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-16 h-1 bg-gradient-to-r from-brand-red to-amber-500"></div>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-amber-500 font-bold uppercase tracking-widest text-sm">
            Exclusive Services
          </span>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white mb-4"
            >
              PREMIUM <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-amber-400">EXCLUSIVE</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-xl"
            >
              Elite services for serious players. Let our experts maximize your returns.
            </motion.p>
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5"
          >
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-300">Verified & Trusted Since 2019</span>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {exclusiveServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              {/* Card */}
              <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all duration-500">
                
                {/* Top Gradient Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}></div>

                {/* Glow Effect */}
                <div className={`absolute -top-40 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-gradient-to-r ${service.gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`}></div>

                <div className="relative p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${service.gradient} text-white mb-3`}>
                        Exclusive
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-black text-white mb-2">{service.name}</h3>
                      <p className="text-gray-500">{service.tagline}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-white/5 rounded-xl">
                    {service.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className={`text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${service.gradient} bg-opacity-20`}>
                          <feature.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black text-white">€{service.price}</span>
                        <span className="text-gray-500">{service.period}</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        Min. Investment: {service.minInvestment}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleAddToCart(service)}
                      className={`
                        px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm
                        flex items-center gap-2 transition-all duration-300
                        bg-gradient-to-r ${service.gradient} text-white
                        shadow-lg hover:shadow-xl hover:scale-105
                      `}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Get Access
                    </button>
                  </div>

                  {/* Disclaimer */}
                  <p className="text-xs text-gray-600 mt-4">
                    * Results may vary. Past performance is not indicative of future results.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

