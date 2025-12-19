"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/components/cart/CartContext';
import { ShoppingCart, Star, Package, Sparkles } from 'lucide-react';

const kits = [
  {
    id: 'arsenal-kit',
    name: 'FC Arsenal Home Kit',
    team: 'ARSENAL',
    season: '2024/25',
    price: 94.99,
    originalPrice: 129.99,
    image: '/photos/ArsenalTovar.png',
    badge: 'Premier League',
    color: '#EF0107',
    features: ['Adidas dryCELL Tech', 'Official Premier League Badge', 'Breathable Fabric'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'mystery-box',
    name: 'Mystery Kit Bundle',
    team: 'MYSTERY',
    season: 'Surprise',
    price: 99.99,
    originalPrice: 150.00,
    image: '/photos/mystery.jpeg',
    badge: 'Limited Edition',
    color: '#FFD700',
    features: ['Random Premium Jersey', 'Exclusive Merchandise', 'Collector Items'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'milan-kit',
    name: 'AC Milan Away Kit',
    team: 'AC MILAN',
    season: '2024/25',
    price: 89.99,
    originalPrice: 119.99,
    image: '/photos/MilanTovar.png',
    badge: 'Serie A',
    color: '#FB090B',
    features: ['PUMA dryCELL Tech', 'Official Serie A Badge', 'Sustainable Materials'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  }
];

export const FootballKits: React.FC = () => {
  const { addToCart, setIsCartOpen } = useCart();
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [hoveredKit, setHoveredKit] = useState<string | null>(null);

  const handleAddToCart = (kit: typeof kits[0]) => {
    addToCart({
      id: kit.id,
      name: `${kit.name} (${selectedSizes[kit.id] || 'M'})`,
      price: kit.price,
      image: kit.image
    });
    setIsCartOpen(true);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Circle */}
        <motion.div 
          className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-brand-red/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Section Header */}
      <div className="container mx-auto px-4 mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-16 h-1 bg-brand-red"></div>
          <span className="text-brand-red font-bold uppercase tracking-widest text-sm">Official Merchandise</span>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white mb-4"
            >
              FOOTBALL <span className="text-brand-red">KITS</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-xl"
            >
              Wear your passion. Official kits from the world's greatest clubs.
            </motion.p>
          </div>

          {/* Size Guide Link */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 hover:text-white transition-colors text-sm underline underline-offset-4"
          >
            Size Guide →
          </motion.button>
        </div>
      </div>

      {/* Kits Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {kits.map((kit, index) => (
            <motion.div
              key={kit.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              onMouseEnter={() => setHoveredKit(kit.id)}
              onMouseLeave={() => setHoveredKit(null)}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-b from-[#111] to-black rounded-3xl overflow-hidden border border-white/10 hover:border-brand-red/50 transition-all duration-500">
                
                {/* Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div 
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                    style={{ 
                      backgroundColor: kit.id === 'mystery-box' ? '#FFD700' : kit.color,
                      color: kit.id === 'mystery-box' ? 'black' : 'white'
                    }}
                  >
                    {kit.id === 'mystery-box' ? <Sparkles className="w-3 h-3" /> : <Star className="w-3 h-3" />}
                    {kit.badge}
                  </div>
                </div>

                {/* Discount Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-white text-black px-2 py-1 rounded text-xs font-bold">
                    -{Math.round((1 - kit.price / kit.originalPrice) * 100)}%
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative aspect-square p-8 flex items-center justify-center overflow-hidden">
                  {/* Background Glow */}
                  <div 
                    className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                    style={{ 
                      background: `radial-gradient(circle at center, ${kit.color}40 0%, transparent 70%)`
                    }}
                  />
                  
                  {/* Product Image */}
                  <motion.img
                    src={kit.image}
                    alt={kit.name}
                    className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                    animate={{
                      scale: hoveredKit === kit.id ? 1.1 : 1,
                      rotate: hoveredKit === kit.id ? 3 : 0
                    }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Decorative Circle */}
                  <div 
                    className="absolute w-64 h-64 rounded-full border-2 opacity-20 transition-transform duration-700 group-hover:scale-110"
                    style={{ borderColor: kit.color }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 pt-0">
                  {/* Team Name */}
                  <div className="text-xs text-gray-500 font-bold tracking-widest mb-1">
                    {kit.team} • {kit.season}
                  </div>
                  
                  {/* Product Name */}
                  <h3 className="text-xl font-bold text-white mb-4">{kit.name}</h3>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {kit.features.map((feature, i) => (
                      <span 
                        key={i}
                        className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Size Selector */}
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-2">Select Size:</div>
                    <div className="flex gap-2">
                      {kit.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSizes(prev => ({ ...prev, [kit.id]: size }))}
                          className={`
                            w-10 h-10 rounded-lg text-sm font-bold transition-all
                            ${selectedSizes[kit.id] === size 
                              ? 'bg-brand-red text-white' 
                              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                            }
                          `}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price & Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <div className="text-2xl font-black text-white">€{kit.price}</div>
                      <div className="text-sm text-gray-500 line-through">€{kit.originalPrice}</div>
                    </div>
                    
                    <button
                      onClick={() => handleAddToCart(kit)}
                      className="bg-brand-red hover:bg-red-600 text-white px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-brand-red/20 hover:shadow-brand-red/40"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

