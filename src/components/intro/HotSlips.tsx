import React from 'react';
import { CheckCircle2, Lock, ArrowRight, CircleDot } from 'lucide-react';
import Link from 'next/link';

export const HotSlips = () => {
  return (
    <section className="bg-black py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div>
              <div className="flex items-center gap-2 mb-2">
                 <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></div>
                 <span className="text-brand-red font-mono text-xs uppercase tracking-[0.2em]">Proven Results</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic transform -skew-x-6">
                 Fresh From <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-white pr-2">The Lab</span>
              </h2>
           </div>
           
           <div className="hidden md:block w-full md:w-auto h-px bg-white/10 flex-1 mx-8 mb-4"></div>
           
           <Link href="/stats" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white flex items-center gap-2 group transition-colors">
              View All History <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
           </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

           {/* CARD 1: WON (Evidence) */}
           <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-b from-green-500 to-emerald-900 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-[#0a0a0a] rounded-2xl p-6 border border-white/5 flex flex-col h-full">
                 <div className="flex justify-between items-start mb-6">
                    <span className="bg-green-500/10 text-green-500 border border-green-500/20 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                       <CheckCircle2 className="w-3 h-3" /> Won
                    </span>
                    <span className="text-gray-500 text-xs font-mono">Yesterday</span>
                 </div>
                 
                 <div className="mb-4">
                    <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Premier League</div>
                    <div className="text-xl font-bold text-white">Man City vs Everton</div>
                 </div>

                 <div className="bg-white/5 rounded-lg p-4 mb-4 border border-white/5">
                    <div className="flex justify-between items-center mb-1">
                       <span className="text-gray-400 text-xs">Prediction</span>
                       <span className="text-green-400 font-bold">Odds 1.95</span>
                    </div>
                    <div className="text-white font-bold">Man City -1.5 AH</div>
                 </div>

                 <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs text-gray-500 font-mono">STAKE: €500</span>
                    <span className="text-green-400 font-bold font-mono">+€975.00</span>
                 </div>
              </div>
           </div>

           {/* CARD 2: LIVE (Action) */}
           <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-b from-brand-red to-red-900 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse-slow"></div>
              <div className="relative bg-[#0a0a0a] rounded-2xl p-6 border border-brand-red/30 flex flex-col h-full">
                 <div className="flex justify-between items-start mb-6">
                    <span className="bg-brand-red/10 text-brand-red border border-brand-red/20 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 animate-pulse">
                       <CircleDot className="w-3 h-3" /> Live Now
                    </span>
                    <span className="text-brand-red text-xs font-mono font-bold">58' MIN</span>
                 </div>
                 
                 <div className="mb-4">
                    <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Serie A</div>
                    <div className="text-xl font-bold text-white">Juventus vs Napoli</div>
                 </div>

                 <div className="bg-brand-red/5 rounded-lg p-4 mb-4 border border-brand-red/10">
                    <div className="flex justify-between items-center mb-1">
                       <span className="text-gray-400 text-xs">Prediction</span>
                       <span className="text-white font-bold">Odds 2.10</span>
                    </div>
                    <div className="text-white font-bold">Both Teams To Score</div>
                 </div>

                 <div className="mt-auto">
                    <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-brand-red h-full w-[65%] animate-[width_2s_ease-in-out_infinite]"></div>
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] text-gray-400 uppercase tracking-wider">
                       <span>Probability increasing</span>
                       <span>65%</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* CARD 3: LOCKED (Curiosity/FOMO) */}
           <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
              {/* Blur Layer */}
              <div className="absolute inset-0 bg-[#0a0a0a] z-0"></div>
              
              <div className="relative bg-[#0a0a0a] p-6 border border-white/5 flex flex-col h-full filter blur-[6px] opacity-40 select-none">
                 <div className="flex justify-between items-start mb-6">
                    <span className="bg-gray-800 px-3 py-1 rounded text-[10px] font-bold uppercase">Pending</span>
                 </div>
                 <div className="mb-4">
                    <div className="text-xs text-gray-400 mb-1">Champions League</div>
                    <div className="text-xl font-bold text-white">Real Madrid vs Bayern</div>
                 </div>
                 <div className="bg-white/5 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-1">
                       <span className="text-gray-400 text-xs">Prediction</span>
                       <span className="text-white font-bold">Odds 2.80</span>
                    </div>
                    <div className="text-white font-bold">Real Madrid Win & Total...</div>
                 </div>
                 <div className="mt-auto pt-4 border-t border-white/10">
                     <span className="text-xs text-gray-500">Starts in 2h 15m</span>
                 </div>
              </div>

              {/* Overlay Content (Unlock) */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl transition-all group-hover:bg-black/40">
                 <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Lock className="w-6 h-6 text-brand-red" />
                 </div>
                 <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Hidden Gem</h3>
                 <p className="text-xs text-gray-400 mb-6 text-center max-w-[200px]">
                    High confidence prediction available for members only.
                 </p>
                 <Link href="/sales" className="bg-brand-red hover:bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-brand-red/40 flex items-center gap-2">
                    Unlock Now <Lock className="w-3 h-3" />
                 </Link>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

