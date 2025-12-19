import React from 'react';
import { TrendingUp, Trophy, Zap } from 'lucide-react';

export const LiveTicker = () => {
  const items = [
    { text: "USER ALEX_99 +€450", icon: Trophy, color: "text-yellow-400" },
    { text: "ARSENAL vs CHELSEA: PREDICTION LANDED", icon: Zap, color: "text-green-400" },
    { text: "TOTAL PAYOUT TODAY: €12,400", icon: TrendingUp, color: "text-brand-red" },
    { text: "USER MAX_WINNER +€1,200", icon: Trophy, color: "text-yellow-400" },
    { text: "LAKERS -5.5 COVERED", icon: Zap, color: "text-green-400" },
    { text: "VIP CHANNEL: 8 WINS STREAK", icon: TrendingUp, color: "text-brand-red" },
  ];

  return (
    <div className="relative w-full bg-black/80 backdrop-blur-md border-y border-white/10 overflow-hidden z-30 h-14 flex items-center">
      {/* Gradient Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-2 mx-8 opacity-80 hover:opacity-100 transition-opacity">
            <item.icon className={`w-4 h-4 ${item.color}`} />
            <span className="font-mono text-sm font-bold uppercase tracking-wider text-white">
              {item.text}
            </span>
            <span className="text-white/20 ml-8 text-xs">///</span>
          </div>
        ))}
      </div>
    </div>
  );
};

