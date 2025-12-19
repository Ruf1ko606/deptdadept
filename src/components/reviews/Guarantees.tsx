"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, RefreshCcw, Lock, Users, Clock, Award, Headphones, CheckCircle } from 'lucide-react';

const guarantees = [
  {
    icon: RefreshCcw,
    title: "Money-Back Guarantee",
    description: "If the month ends in negative — the next month is free. We are confident in the quality of our forecasts.",
    highlight: true
  },
  {
    icon: Shield,
    title: "Bankroll Protection",
    description: "Bank management and betting strategy will help preserve and grow your bankroll without unnecessary risks."
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description: "Your data is fully protected. We never share information with third parties."
  },
  {
    icon: Users,
    title: "Personal Manager",
    description: "Each client is assigned a personal manager to resolve any questions 24/7."
  },
  {
    icon: Clock,
    title: "Fast Support",
    description: "Average response time — 5 minutes. We are always available when you need help."
  },
  {
    icon: Award,
    title: "Verified Statistics",
    description: "Complete forecast history is publicly available. We don't hide a single result."
  },
  {
    icon: Headphones,
    title: "Education",
    description: "Free educational materials on betting and bank management for all clients."
  },
  {
    icon: CheckCircle,
    title: "Transparent Terms",
    description: "No hidden fees or commissions. You only pay for the subscription."
  }
];

const Guarantees: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-black">
      {/* Background Effect */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(220, 38, 38, 0.15) 0%, transparent 50%)'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-red text-sm font-bold uppercase tracking-widest mb-4 block">
            Our Promises
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            IRONCLAD{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">
              GUARANTEES
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We are fully confident in the quality of our work and ready to prove it
          </p>
        </motion.div>

        {/* Guarantees Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`
                relative p-6 rounded-2xl border transition-all duration-300
                ${guarantee.highlight 
                  ? 'bg-gradient-to-br from-brand-red/20 to-brand-red/5 border-brand-red/50 shadow-lg shadow-brand-red/10' 
                  : 'bg-white/[0.02] border-white/10 hover:border-brand-red/30 hover:bg-white/[0.04]'
                }
              `}
            >
              {/* Highlight Badge */}
              {guarantee.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full">
                    MAIN
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`
                w-12 h-12 rounded-xl flex items-center justify-center mb-4
                ${guarantee.highlight 
                  ? 'bg-brand-red/20' 
                  : 'bg-white/5'
                }
              `}>
                <guarantee.icon className={`w-6 h-6 ${guarantee.highlight ? 'text-brand-red' : 'text-gray-400'}`} />
              </div>

              {/* Content */}
              <h3 className="text-white font-bold text-lg mb-2">{guarantee.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{guarantee.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-4">
            <Shield className="w-5 h-5 text-brand-red" />
            <span className="text-white font-medium">
              All guarantees are documented in the service agreement
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guarantees;
