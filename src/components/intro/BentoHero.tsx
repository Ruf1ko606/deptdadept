import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const BentoHero = () => {
  return (
    <section className="bg-black min-h-screen p-4 md:p-8 pt-24 pb-12 flex flex-col justify-center">
      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 grid-rows-12 md:grid-rows-6 gap-4 h-full min-h-[800px]">
        
        {/* 
            ROW 1 (TOP) 
            Total Width: 12 Cols. 
            Split: 8 Cols (Left Big) | 4 Cols (Right Vertical)
        */}

        {/* 1. Main Title & Hero Image Block (Top Left - Large) */}
        <div className="md:col-span-8 md:row-span-4 relative bg-[#111] rounded-[2rem] overflow-hidden group border border-white/5">
           {/* Image: Grayscale -> Color on Hover */}
           <div className="absolute inset-0 bg-[url('/photos/predict.jpeg')] bg-cover bg-center md:bg-[center_top_-20%] transition-all duration-700 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105">
           </div>
           
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

           <div className="absolute bottom-0 left-0 p-6 md:p-10 z-10 w-full">
              <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.85] uppercase tracking-tighter mb-4 mix-blend-difference">
                 Predict <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-white">The Future</span>
              </h1>
              <p className="text-gray-300 max-w-md font-mono text-sm tracking-wider uppercase border-l-2 border-brand-red pl-4">
                 Premium betting analysis from top experts.
              </p>
           </div>
        </div>

        {/* 2. Vertical Visual Block (Top Right) */}
        <div className="md:col-span-4 md:row-span-4 relative bg-[#1a1a1a] rounded-[2rem] overflow-hidden group border border-white/5 flex flex-col justify-between">
            <div className="absolute inset-0 bg-cover bg-center transition-all duration-700 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105"
                 style={{ backgroundImage: 'url("/photos/tennis.jpg")' }}>
            </div>
            
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500"></div>

            {/* Top Elements */}
            <div className="relative z-10 p-6 flex justify-between items-start">
               <div className="px-4 py-1 border border-white/50 rounded-full backdrop-blur-md text-xs font-bold uppercase tracking-widest text-white">
                  Simple
               </div>
               
               {/* Circle Element */}
               <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center animate-spin-slow shadow-lg shadow-brand-red/20">
                  <span className="font-black text-black text-xl">92%</span>
               </div>
            </div>

            {/* Bottom Element inside Vertical Block */}
            <div className="relative z-10 p-6">
               <div className="max-w-[80%]">
                  <p className="text-sm font-bold text-white uppercase tracking-widest leading-relaxed mb-2">
                     Consistency is key.
                  </p>
                  <p className="text-xs text-gray-300 font-mono">
                     Over 3 years of verified statistics in major tournaments.
                  </p>
               </div>
            </div>
        </div>

        {/* 
            ROW 2 (BOTTOM) 
            Total Width: 12 Cols.
            Split: 3 Cols (Small) | 5 Cols (Medium) | 4 Cols (CTA)
        */}

        {/* 3. Small Interactive Block (Bottom Left) */}
        <div className="md:col-span-3 md:row-span-2 relative bg-[#111] rounded-[2rem] overflow-hidden group border border-white/5 flex flex-col justify-end p-6">
             <div className="absolute inset-0 bg-[url('/photos/yet.jpg')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
             
             <div className="relative z-10">
                <p className="text-gray-400 text-xs font-mono uppercase tracking-widest mb-1">
                   Still watching?
                </p>
                <h3 className="text-white font-bold text-lg leading-tight">
                   Your winning streak <br/> starts here.
                </h3>
             </div>
        </div>

        {/* 4. Medium Visual Block (Bottom Middle) */}
        <div className="md:col-span-5 md:row-span-2 relative bg-[#151515] rounded-[2rem] overflow-hidden group border border-white/5 flex items-center justify-center">
             <div className="absolute inset-0 bg-[url('/photos/wait.jpeg')] bg-cover bg-center opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
             
             <div className="relative z-10 p-6 flex flex-col justify-end h-full w-full">
                <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 self-start">
                   <p className="text-white font-mono text-sm uppercase tracking-widest">
                      Rich life is waiting
                   </p>
                </div>
             </div>
        </div>

        {/* 5. The CTA Block (Bottom Right - "DESIGN" from ref) */}
        <Link href="/sales" className="md:col-span-4 md:row-span-2 relative bg-brand-red rounded-[2rem] overflow-hidden group hover:bg-red-600 transition-colors flex flex-col p-6 md:p-8 cursor-pointer">
            {/* Top Row inside CTA */}
            <div className="flex justify-between items-start mb-2">
               <h2 className="text-5xl md:text-6xl font-black text-black uppercase tracking-tighter leading-[0.8]">
                  Start <br/> Winning
               </h2>
               <div className="text-[10px] font-bold uppercase tracking-widest text-black/60 text-right">
                  MMG <br/> 2025
               </div>
            </div>

            {/* Bottom Row inside CTA */}
            <div className="mt-auto flex justify-between items-end">
               <p className="text-[10px] font-bold uppercase tracking-widest text-black/70 max-w-[150px] leading-relaxed">
                  The template is very convenient and flexible in usage
               </p>
               <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
               </div>
            </div>
        </Link>

      </div>
    </section>
  );
};
