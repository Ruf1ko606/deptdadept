import React from 'react';

// USER: Replace with your transparent PNG of the two men for best effect
const HERO_IMAGE_URL = "/photos/hero-sales.avif"; 

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#0a0a0a] to-brand-dark"></div>
        
        {/* Subtle Pattern (Tactics + Snowflakes) */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`, 
               backgroundSize: '40px 40px' 
             }}>
        </div>
        
        {/* Red Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-red/10 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-red/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left relative">
             
            {/* Santa Hat Decoration on the Headline */}
            <div className="absolute -top-12 left-1/2 lg:-left-6 lg:top-[-60px] transform -translate-x-1/2 lg:translate-x-0 rotate-[-15deg] w-24 h-24 z-20 pointer-events-none drop-shadow-lg">
                 <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M416 192C416 192 352 96 256 96C160 96 96 192 96 192" stroke="#DC2626" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M96 192C96 192 64 352 256 352C448 352 416 192 416 192" fill="#DC2626"/>
                    <path d="M256 96V48" stroke="#DC2626" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="256" cy="48" r="32" fill="white"/>
                    <rect x="64" y="320" width="384" height="64" rx="32" fill="white"/>
                 </svg>
            </div>

            <h2 className="inline-block text-xmas-gold font-mono text-sm font-bold uppercase tracking-[0.3em] mb-6 border border-xmas-gold/30 px-4 py-1 rounded-full backdrop-blur-sm">
              🎅 Ho-Ho-Hold The Wins
            </h2>

            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-serif font-black text-white leading-[0.85] tracking-tighter mb-8 drop-shadow-2xl">
              START THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white italic font-serif">NEW YEAR</span> <br />
              <span className="text-brand-red relative inline-block">
                WINNING
                {/* Decorative underline/snow */}
                <svg className="absolute -bottom-4 left-0 w-full h-4 text-white opacity-20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
              The ball drops at midnight, but your winning streak starts now. Claim your exclusive <span className="text-brand-red font-bold">New Year bonus</span> and let Santa's AI power your predictions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a href="#exclusive-drop" className="group relative bg-brand-red hover:bg-red-700 text-white px-8 py-5 font-bold text-lg uppercase tracking-wider transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(220,38,38,0.4)] overflow-hidden rounded-sm text-center">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Claim 2025 Bonus
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/></svg>
                </span>
                {/* Snow animation inside button */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/snow.png')] opacity-20 animate-pulse"></div>
              </a>

              <a href="#santa-ai" className="group border border-white/30 hover:border-white text-white px-8 py-5 font-bold text-lg uppercase tracking-wider transition-all hover:bg-white/5 backdrop-blur-sm flex items-center justify-center gap-3 rounded-sm text-center">
                <span>Holiday Specials</span>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
              </a>
            </div>
          </div>

          {/* Right: Image Content */}
          <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
            {/* The "Glow" behind the subject - cleaner now */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-brand-red/30 to-xmas-gold/20 blur-[80px] rounded-full z-0"></div>
            
            <div className="relative z-10 group perspective-1000">
               {/* Main Image - Styled to look like a cutout if possible, or clean photo */}
               <img 
                src={HERO_IMAGE_URL} 
                alt="The Betting Experts" 
                className="w-full h-auto object-cover md:max-w-xl mx-auto drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02] relative z-10"
                style={{ 
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                }}
              />
              
              {/* Floating "Success" Elements (Stickers) with SWAY animation */}
              <div className="absolute top-10 -right-4 lg:-right-10 bg-white text-black p-3 font-bold font-mono text-xs uppercase rotate-12 shadow-xl border-2 border-brand-red z-20 transform animate-swing origin-top-left">
                Win Rate: 92% 🚀
              </div>
              <div className="absolute bottom-20 -left-4 lg:-left-10 bg-brand-red text-white p-4 font-serif font-bold text-xl -rotate-6 shadow-2xl border border-white/20 z-20 transform animate-swing origin-top-right" style={{ animationDelay: '1.5s' }}>
                Xmas Special 🎁
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
