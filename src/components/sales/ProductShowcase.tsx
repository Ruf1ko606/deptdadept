"use client";

import React from 'react';
import { useCart } from '@/components/cart/CartContext';
import { ShoppingCart } from 'lucide-react';

const products = {
  mystery: {
    id: 'mystery-box',
    name: 'Secret Kit Bundle',
    price: 99.99,
    image: '/photos/mystery.jpeg'
  },
  vip: {
    id: 'vip-pass',
    name: 'VIP Forecast Pass',
    price: 199.99,
    image: '/photos/mainSales.jpeg'
  },
  milan: {
    id: 'milan-kit',
    name: 'AC Milan Away Kit',
    price: 89.99,
    image: '/photos/MilanTovar.png'
  }
};

export const ProductShowcase: React.FC = () => {
  const { addToCart, setIsCartOpen } = useCart();

  const handleAddToCart = (productKey: keyof typeof products) => {
    addToCart(products[productKey]);
    setIsCartOpen(true);
  };
  return (
    <div className="relative py-24 z-10">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#1a0505] to-brand-dark -z-10 opacity-80"></div>
      
      {/* Festive Bokeh Lights (Top) */}
      <div className="absolute top-0 left-0 w-full h-64 overflow-hidden pointer-events-none opacity-40">
         {[...Array(20)].map((_, i) => (
             <div 
               key={i} 
               className="absolute rounded-full bg-blend-screen animate-pulse-slow"
               style={{
                 left: `${Math.random() * 100}%`,
                 top: `${Math.random() * 60}%`,
                 width: `${Math.random() * 50 + 20}px`,
                 height: `${Math.random() * 50 + 20}px`,
                 backgroundColor: i % 2 === 0 ? '#DC2626' : '#FCD34D',
                 filter: 'blur(20px)',
                 animationDelay: `${Math.random() * 5}s`
               }}
             ></div>
         ))}
      </div>

      <div className="text-center mb-20 relative">
        <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-amber-500 blur opacity-30"></div>
            <div className="relative bg-brand-dark px-6 py-2 border border-brand-red/30 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2">
                <span>🎄</span> Santa's Exclusive Drop <span>🎄</span>
            </div>
        </div>
        <h2 className="mt-6 text-5xl md:text-7xl font-serif font-black text-white drop-shadow-xl">
          UNLOCK THE <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400 italic">ADVANTAGE</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg font-light">
          Premium gear to celebrate the season of winning. Limited edition holiday releases.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end max-w-7xl mx-auto px-4">
        
        {/* === LEFT CARD (Mystery Box) === */}
        <div className="relative bg-[#0f0f0f] rounded-2xl border border-white/5 hover:border-brand-red/50 transition-all duration-500 group overflow-hidden shadow-2xl hover:-translate-y-3 hover:shadow-[inset_0_0_30px_rgba(220,38,38,0.1)]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          {/* Sticker */}
          <div className="absolute top-6 left-0 -rotate-12 bg-xmas-gold text-black text-[10px] font-bold px-3 py-1 shadow-lg z-20 uppercase tracking-widest border border-white/20">
             Mystery Drop
          </div>

          <div className="p-8 pb-0 flex flex-col items-center">
             <div className="relative w-full aspect-[4/3] flex items-center justify-center mb-6">
                <div className="absolute inset-0 bg-brand-red/5 blur-[50px] rounded-full group-hover:bg-brand-red/20 transition duration-500"></div>
                {/* 3D Mystery Box Image */}
                <img src="/photos/mystery.jpeg" alt="Mystery Kit" className="h-full object-cover rounded-xl drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform group-hover:-translate-y-4 group-hover:scale-105 transition duration-500 relative z-10 opacity-90"/>
             </div>
             <h3 className="text-2xl font-serif font-bold text-white text-center mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">Secret Kit Bundle</h3>
             <div className="flex items-center gap-3 mb-6">
                <span className="text-gray-500 line-through text-sm">€150.00</span>
                <span className="text-brand-red font-bold text-2xl">€99.99</span>
             </div>
          </div>

          <div className="bg-[#151515] p-6 border-t border-white/5 relative">
             <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-brand-red font-bold">?</span> 
                    Random Premium Jersey
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-brand-red font-bold">?</span> 
                    Exclusive Merchandise
                </li>
             </ul>
             <button 
               onClick={() => handleAddToCart('mystery')}
               className="w-full bg-white hover:bg-gray-200 text-black font-bold py-4 rounded-lg uppercase tracking-wider text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
             >
                <ShoppingCart size={18} />
                Add to Cart
             </button>
          </div>
        </div>

        {/* === CENTER CARD (VIP Pass - THE HERO) === */}
        <div className="relative bg-gradient-to-b from-[#1a0505] to-black rounded-3xl border border-brand-red/30 hover:border-brand-red transition-all duration-500 lg:-translate-y-12 shadow-[0_0_60px_rgba(220,38,38,0.15)] z-20 group hover:-translate-y-16 animate-pulse-glow hover:shadow-[inset_0_0_40px_rgba(220,38,38,0.2)]">
          {/* Ribbon Badge */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30">
             <div className="bg-gradient-to-r from-red-600 to-brand-red text-white px-8 py-2 font-bold uppercase tracking-widest text-sm shadow-lg rounded-full flex items-center gap-2 border border-red-400">
                <span>🎁</span> Santa's Choice <span>🎁</span>
             </div>
          </div>
          
          {/* Sticker */}
          <div className="absolute top-10 right-0 rotate-6 bg-red-600 text-white text-[10px] font-bold px-3 py-1 shadow-lg z-30 uppercase tracking-widest border border-white/20">
             Selling Fast
          </div>

          <div className="p-10 pb-0 flex flex-col items-center relative overflow-hidden rounded-t-3xl">
             {/* Snow inside card */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/snow.png')] opacity-10 pointer-events-none"></div>

             <div className="relative w-full aspect-square max-h-64 mb-6 rounded-xl overflow-hidden shadow-2xl border border-white/10 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all">
                <img src="/photos/mainSales.jpeg" alt="VIP Pass" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-serif font-bold text-xl">The Inner Circle</div>
             </div>

             <h3 className="text-3xl font-serif font-black text-white text-center mb-1 relative z-10">VIP Forecast Pass</h3>
             <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">Limited Holiday Edition</p>
             
             <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-bold text-xmas-gold drop-shadow-md">€199.99</span>
                <span className="text-gray-600 text-sm font-medium">/ month</span>
             </div>
          </div>

          <div className="px-8 pb-8">
             <div className="space-y-4 mb-8">
                {[
                    "Daily Premium Forecasts (90% Win Rate)",
                    "Live Betting Access with Nadin & Rustam",
                    "100% Money-Back Guarantee",
                    "Priority 24/7 Support"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <span className="text-brand-red text-lg">★</span>
                        <span className="text-gray-100 font-medium text-sm">{item}</span>
                    </div>
                ))}
             </div>
             
             <button 
               onClick={() => handleAddToCart('vip')}
               className="w-full relative bg-brand-red hover:bg-red-600 text-white font-bold py-5 rounded-xl uppercase tracking-[0.15em] text-sm transition-all shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:shadow-[0_15px_40px_rgba(220,38,38,0.5)] overflow-hidden group/btn flex items-center justify-center gap-2"
             >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/snow.png')] opacity-20"></div>
                <ShoppingCart size={18} className="relative z-10" />
                <span className="relative z-10">Add to Cart</span>
             </button>
             <p className="text-center text-[10px] text-gray-500 mt-4 uppercase tracking-wider">Only 14 Passes Left</p>
          </div>
        </div>

        {/* === RIGHT CARD (Milan) === */}
        <div className="relative bg-[#0f0f0f] rounded-2xl border border-white/5 hover:border-brand-red/50 transition-all duration-500 group overflow-hidden shadow-2xl hover:-translate-y-3 hover:shadow-[inset_0_0_30px_rgba(220,38,38,0.1)]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
           {/* Sticker */}
           <div className="absolute top-6 right-0 rotate-12 bg-gray-800 text-white text-[10px] font-bold px-3 py-1 shadow-lg z-20 uppercase tracking-widest border border-white/20">
             Official Merch
          </div>

          <div className="p-8 pb-0 flex flex-col items-center">
             <div className="relative w-full aspect-[4/3] flex items-center justify-center mb-6">
                <div className="absolute inset-0 bg-brand-red/5 blur-[50px] rounded-full group-hover:bg-brand-red/10 transition duration-500"></div>
                <img src="/photos/MilanTovar.png" alt="Milan Kit" className="h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform group-hover:-translate-y-4 group-hover:scale-105 transition duration-500 relative z-10"/>
             </div>
             <h3 className="text-2xl font-serif font-bold text-white text-center mb-2">AC Milan Away Kit</h3>
             <div className="flex items-center gap-3 mb-6">
                <span className="text-gray-500 line-through text-sm">€119.99</span>
                <span className="text-brand-red font-bold text-2xl">€89.99</span>
             </div>
          </div>

          <div className="bg-[#151515] p-6 border-t border-white/5">
             <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red font-bold text-xs">✓</span> 
                    Serie A Badge Included
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red font-bold text-xs">✓</span> 
                    PUMA dryCELL Tech
                </li>
             </ul>
             <button 
               onClick={() => handleAddToCart('milan')}
               className="w-full bg-white hover:bg-gray-200 text-black font-bold py-4 rounded-lg uppercase tracking-wider text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
             >
                <ShoppingCart size={18} />
                Add to Cart
             </button>
          </div>
        </div>

      </div>
    </div>
  );
};
