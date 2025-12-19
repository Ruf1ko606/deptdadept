import React from 'react';

const FORECASTS = [
  {
    id: 1,
    league: "Premier League",
    teams: "Arsenal vs West Ham",
    prediction: "Arsenal Win & Over 2.5",
    odds: "2.15",
    confidence: "94%",
    time: "20:30",
    tag: "🎄 Boxing Day Special"
  },
  {
    id: 2,
    league: "Serie A",
    teams: "AC Milan vs Sassuolo",
    prediction: "Rafael Leão To Score",
    odds: "2.80",
    confidence: "88%",
    time: "18:00",
    tag: "🇮🇹 Italian Holiday"
  },
  {
    id: 3,
    league: "NBA Christmas",
    teams: "Lakers vs Celtics",
    prediction: "Celtics -4.5 Spread",
    odds: "1.91",
    confidence: "91%",
    time: "23:00",
    tag: "🏀 Xmas Showdown"
  }
];

export const FreeForecasts: React.FC = () => {
  return (
    <div className="w-full relative z-10 mb-24">
      
      {/* Section Header */}
      <div className="text-center mb-12 relative">
         <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10"></div>
         <span className="bg-brand-dark px-4 relative z-10 inline-block">
            <div className="flex items-center gap-3 justify-center mb-2">
                <span className="text-2xl">🎁</span>
                <span className="text-xmas-gold font-mono text-xs font-bold uppercase tracking-[0.3em]">Santa's Daily Picks</span>
                <span className="text-2xl">🎁</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-white">
            UNWRAP YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">WINS</span>
            </h2>
         </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FORECASTS.map((match, idx) => (
          <div key={match.id} className="group relative">
            
            {/* Card Background / Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-b from-brand-red to-brand-dark rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
            
            <div className="relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-2xl">
                
                {/* Decorative Snow Top */}
                <div className="absolute top-0 left-0 w-full h-2 bg-white/10" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '8px 8px',
                    opacity: 0.5
                }}></div>

                {/* Card Header */}
                <div className="p-6 pb-0 relative">
                    <div className="flex justify-between items-start mb-4">
                        <span className="inline-block bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-300">
                           {match.tag}
                        </span>
                        <span className="text-brand-red font-bold text-xs animate-pulse">● EXPIRING SOON</span>
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold text-white leading-tight mb-1 group-hover:text-brand-red transition-colors">
                        {match.teams}
                    </h3>
                    <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">
                        {match.league} • {match.time}
                    </div>
                </div>

                {/* Dashed Divider */}
                <div className="relative w-full h-4">
                    <div className="absolute left-0 top-1/2 w-3 h-3 bg-brand-dark rounded-full -translate-x-1.5 z-10"></div>
                    <div className="absolute right-0 top-1/2 w-3 h-3 bg-brand-dark rounded-full translate-x-1.5 z-10"></div>
                    <div className="absolute top-1/2 left-2 right-2 border-t-2 border-dashed border-gray-800"></div>
                </div>

                {/* Card Body - The "Gift" */}
                <div className="p-6 pt-2 flex-1 flex flex-col justify-end">
                    
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 rounded-xl border border-white/5 mb-6 relative overflow-hidden">
                        {/* Shine effect */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        
                        <div className="flex justify-between items-center mb-2">
                             <span className="text-gray-400 text-xs uppercase tracking-wider">Prediction</span>
                             <span className="text-xmas-gold font-bold text-lg">{match.odds}</span>
                        </div>
                        <div className="text-white font-bold text-lg mb-3">
                            {match.prediction}
                        </div>
                        
                        {/* Confidence Bar */}
                        <div className="relative h-1.5 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full" 
                                style={{ width: match.confidence }}
                            ></div>
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-[10px] font-bold text-green-400 uppercase tracking-wide">
                                {match.confidence} Probability
                            </span>
                        </div>
                    </div>

                    <a href="https://betboom.ru/" target="_blank" rel="noopener noreferrer" className="w-full block text-center group/btn relative bg-brand-red text-white font-bold py-4 rounded-xl uppercase text-sm tracking-widest overflow-hidden transition-all hover:bg-white hover:text-brand-red">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Bet This Slip <span className="text-lg">🎁</span>
                        </span>
                    </a>
                </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
