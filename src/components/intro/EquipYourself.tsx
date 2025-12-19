"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ShoppingCart, Flame, Package, Shirt } from 'lucide-react';
import Link from 'next/link';

// --- 3D Tilt Card Component ---
const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative transition-all duration-200 ease-out ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const EquipYourself = () => {
  return (
    <section className="bg-black py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#111] to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
           <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-none mb-4">
              Equip <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-white">Yourself</span>
           </h2>
           <p className="text-gray-400 max-w-lg text-lg border-l-4 border-brand-red pl-6 py-2">
              Professional tools for professional winners. Upgrade your game.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* 1. BIG CARD (VIP PASS) - 2/3 Width */}
            <div className="lg:col-span-2">
               <TiltCard className="h-full">
                  <div className="relative h-full bg-[#0f0f0f] rounded-3xl border border-white/10 overflow-hidden group hover:border-brand-red/50 transition-colors shadow-2xl">
                      
                      {/* Image Layer */}
                      <div className="absolute inset-0 bg-[url('/photos/vip.jpeg')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                      {/* Content */}
                      <div className="relative z-20 h-full p-8 md:p-12 flex flex-col justify-end" style={{ transform: "translateZ(50px)" }}>
                         
                         {/* Badge */}
                         <div className="absolute top-8 left-8 flex items-center gap-2 bg-brand-red text-white px-4 py-2 rounded-full font-bold uppercase tracking-widest text-xs shadow-lg shadow-brand-red/30 animate-pulse-slow">
                            <Flame className="w-4 h-4 fill-white" /> Best Seller
                         </div>

                         <div className="mb-8">
                            <h3 className="text-4xl md:text-6xl font-black text-white mb-2 uppercase italic">VIP Forecast Pass</h3>
                            <p className="text-gray-300 text-lg max-w-md">
                               Unlimited access to premium predictions, live signals, and private community.
                            </p>
                         </div>

                         <div className="flex flex-wrap items-center gap-6">
                            <div className="flex flex-col">
                               <span className="text-gray-500 text-sm line-through decoration-brand-red">€299.99</span>
                               <span className="text-4xl font-black text-white">€199.99<span className="text-sm font-normal text-gray-400">/mo</span></span>
                            </div>
                            <Link href="/pricing" className="bg-white text-black px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors flex items-center gap-3 group/btn">
                               <ShoppingCart className="w-5 h-5" /> Buy Now
                            </Link>
                         </div>
                      </div>
                  </div>
               </TiltCard>
            </div>

            {/* 2. RIGHT COLUMN (2 PRODUCTS) - 1/3 Width */}
            <div className="flex flex-col gap-8 h-full">
               
               {/* Mystery Box */}
               <TiltCard className="flex-1">
                  <div className="relative h-full bg-[#0f0f0f] rounded-3xl border border-white/10 overflow-hidden group hover:border-brand-red/50 transition-colors min-h-[300px]">
                      <div className="absolute inset-0 bg-[url('/photos/mystery.jpeg')] bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
                      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>
                      
                      <div className="relative z-20 p-8 h-full flex flex-col justify-between" style={{ transform: "translateZ(30px)" }}>
                         <div className="flex justify-between items-start">
                             <Package className="w-8 h-8 text-brand-red" />
                             <span className="bg-white/10 backdrop-blur px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">Limited</span>
                         </div>
                         <div>
                            <h4 className="text-2xl font-black text-white mb-1 uppercase">Mystery Box</h4>
                            <div className="flex items-center justify-between">
                               <span className="text-brand-red font-bold">€99.99</span>
                               <Link href="/sales" className="text-xs font-bold uppercase tracking-widest text-white hover:text-brand-red transition-colors flex items-center gap-1">
                                  View <span className="text-lg">→</span>
                               </Link>
                            </div>
                         </div>
                      </div>
                  </div>
               </TiltCard>

               {/* Milan Kit */}
               <TiltCard className="flex-1">
                  <div className="relative h-full bg-[#0f0f0f] rounded-3xl border border-white/10 overflow-hidden group hover:border-brand-red/50 transition-colors min-h-[300px]">
                      <div className="absolute inset-0 bg-[url('/photos/MilanTovar.png')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                      
                      <div className="relative z-20 p-8 h-full flex flex-col justify-between" style={{ transform: "translateZ(30px)" }}>
                         <div className="flex justify-between items-start">
                             <Shirt className="w-8 h-8 text-white" />
                             <span className="bg-black/50 backdrop-blur px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">Merch</span>
                         </div>
                         <div>
                            <h4 className="text-2xl font-black text-white mb-1 uppercase">AC Milan Kit</h4>
                            <div className="flex items-center justify-between">
                               <span className="text-white font-bold">€89.99</span>
                               <Link href="/sales" className="text-xs font-bold uppercase tracking-widest text-white hover:text-brand-red transition-colors flex items-center gap-1">
                                  Shop <span className="text-lg">→</span>
                               </Link>
                            </div>
                         </div>
                      </div>
                  </div>
               </TiltCard>

            </div>

        </div>
      </div>
    </section>
  );
};

