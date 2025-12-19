"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '@/components/cart/CartContext';
import { Check, Zap, Crown, Rocket, Star, ShoppingCart } from 'lucide-react';

const plans = [
  {
    id: 'starter-plan',
    name: 'Starter',
    subtitle: 'Perfect for beginners',
    price: 49.99,
    originalPrice: 79.99,
    period: '/month',
    icon: Zap,
    popular: false,
    features: [
      '5 Premium Forecasts / Week',
      'Basic Match Analysis',
      'Email Support',
      'Access to Community Chat',
      '48h Response Time'
    ],
    color: 'white',
    image: '/photos/mainSales.jpeg'
  },
  {
    id: 'pro-plan',
    name: 'Pro',
    subtitle: 'Most Popular Choice',
    price: 99.99,
    originalPrice: 149.99,
    period: '/month',
    icon: Rocket,
    popular: true,
    features: [
      '15 Premium Forecasts / Week',
      'Advanced Statistics & Trends',
      'Priority Support (24h)',
      'Live Betting Signals',
      'Weekly Strategy Calls',
      'Access to Nadin & Rustam'
    ],
    color: 'red',
    image: '/photos/mainSales.jpeg'
  },
  {
    id: 'vip-pass',
    name: 'VIP Pass',
    subtitle: 'Elite Winners Only',
    price: 199.99,
    originalPrice: 299.99,
    period: '/month',
    icon: Crown,
    popular: false,
    features: [
      'Unlimited Premium Forecasts',
      'Real-time Odds Monitoring',
      '24/7 Priority Support',
      'Private Discord Access',
      '1-on-1 Weekly Consultations',
      'Money-Back Guarantee',
      'Early Access to Hot Tips'
    ],
    color: 'gold',
    image: '/photos/mainSales.jpeg'
  },
  {
    id: 'annual-elite',
    name: 'Annual Elite',
    subtitle: 'Best Value • Save 40%',
    price: 999.99,
    originalPrice: 1799.99,
    period: '/year',
    icon: Star,
    popular: false,
    features: [
      'All VIP Pass Features',
      '12 Months Full Access',
      'Exclusive Merch Bundle',
      'Personal Account Manager',
      'Quarterly Strategy Reviews',
      'Priority Beta Features',
      'Lifetime Community Access'
    ],
    color: 'white',
    image: '/photos/mainSales.jpeg'
  }
];

export const ForecastPlans: React.FC = () => {
  const { addToCart, setIsCartOpen } = useCart();

  const handleAddToCart = (plan: typeof plans[0]) => {
    addToCart({
      id: plan.id,
      name: `${plan.name} Plan`,
      price: plan.price,
      image: plan.image
    });
    setIsCartOpen(true);
  };

  return (
    <section className="py-24 relative">
      {/* Section Header */}
      <div className="container mx-auto px-4 mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-16 h-1 bg-brand-red"></div>
          <span className="text-brand-red font-bold uppercase tracking-widest text-sm">Forecast Plans</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-white mb-4"
        >
          BETTING <span className="text-brand-red">INTELLIGENCE</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 max-w-2xl"
        >
          Expert predictions backed by data. Choose the plan that matches your ambition.
        </motion.p>
      </div>

      {/* Plans Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group ${plan.popular ? 'lg:-translate-y-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-brand-red text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-brand-red/30">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`
                relative h-full rounded-2xl overflow-hidden transition-all duration-500
                ${plan.popular 
                  ? 'bg-gradient-to-b from-brand-red/20 to-black border-2 border-brand-red shadow-2xl shadow-brand-red/20' 
                  : 'bg-[#0a0a0a] border border-white/10 hover:border-white/20'
                }
                group-hover:transform group-hover:-translate-y-2
              `}>
                {/* Red Circle Decoration */}
                <div className={`
                  absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-opacity duration-500
                  ${plan.popular ? 'bg-brand-red/30' : 'bg-brand-red/10 opacity-0 group-hover:opacity-100'}
                `}></div>

                <div className="relative p-6 pt-8 flex flex-col h-full">
                  {/* Icon */}
                  <div className={`
                    w-14 h-14 rounded-xl flex items-center justify-center mb-6
                    ${plan.popular 
                      ? 'bg-brand-red text-white' 
                      : plan.color === 'gold' 
                        ? 'bg-amber-500/20 text-amber-400' 
                        : 'bg-white/10 text-white'
                    }
                  `}>
                    <plan.icon className="w-7 h-7" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-black text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mb-6">{plan.subtitle}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-white">€{plan.price}</span>
                      <span className="text-gray-500 text-sm">{plan.period}</span>
                    </div>
                    <div className="text-sm text-gray-600 line-through">€{plan.originalPrice}</div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`
                          w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                          ${plan.popular ? 'bg-brand-red/20 text-brand-red' : 'bg-white/10 text-white/70'}
                        `}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleAddToCart(plan)}
                    className={`
                      w-full py-4 rounded-xl font-bold uppercase tracking-wider text-sm
                      flex items-center justify-center gap-2 transition-all duration-300 mt-auto
                      ${plan.popular 
                        ? 'bg-brand-red hover:bg-red-600 text-white shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50' 
                        : 'bg-white hover:bg-gray-100 text-black'
                      }
                    `}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

