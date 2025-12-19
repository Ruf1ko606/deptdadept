"use client";

import React, { useState, useRef, useEffect } from 'react';
import { getSantaAnalysis } from '@/services/geminiService';
import { ChatMessage } from './types';

export const SantaChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [systemLogs, setSystemLogs] = useState<string[]>([]);
  const [booting, setBooting] = useState(true);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Boot Sequence
  useEffect(() => {
    const logs = [
      "Initializing Neural Network...",
      "Connecting to North Pole Mainframe...",
      "Calibrating festive algorithms...",
      "Loading extensive sports database (1980-2024)...",
      "Checking Naughty/Nice list...",
      "System Online."
    ];

    let delay = 0;
    logs.forEach((log, index) => {
      delay += Math.random() * 800 + 400;
      setTimeout(() => {
        setSystemLogs(prev => [...prev, log]);
        if (index === logs.length - 1) {
          setTimeout(() => {
            setBooting(false);
            setMessages([
              { role: 'model', text: "Ho-ho-ho! I'm your tactical Santa-analyst. Ask me for statistics or a holiday forecast!" }
            ]);
          }, 1000);
        }
      }, delay);
    });
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, systemLogs, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);
    setIsTyping(true);

    const response = await getSantaAnalysis(userMsg);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setLoading(false);
  };

  return (
    <div className="relative group perspective-1000">
      
      {/* Visualizer / Santa's Voice */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-end gap-1 h-10 w-32 justify-center z-20">
         {[...Array(5)].map((_, i) => (
           <div 
             key={i} 
             className="w-1.5 bg-brand-red rounded-full animate-sound-wave shadow-[0_0_10px_red]"
             style={{ animationDelay: `${i * 0.1}s`, height: '20%' }}
           ></div>
         ))}
      </div>

      {/* Main Glass Window */}
      <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col h-[500px] border border-white/10 relative transition-all duration-300 hover:border-brand-red/50 hover:shadow-[0_0_60px_rgba(220,38,38,0.1)]">
        
        {/* Frost Corners */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/10 to-transparent pointer-events-none z-10"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-10"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-white/10 to-transparent pointer-events-none z-10"></div>

        <div className="bg-black/60 p-4 flex justify-between items-center border-b border-white/5 relative z-20">
          <h3 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2 font-mono">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-red"></span>
            </span>
            Live Analyst
          </h3>
          <div className="text-[10px] text-green-500 font-mono flex items-center gap-1">
             ENCRYPTED <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-transparent relative z-20">
          
          {/* Boot Logs */}
          {booting && (
             <div className="space-y-1 font-mono text-xs text-green-500 opacity-80 mb-4">
                {systemLogs.map((log, i) => (
                  <div key={i} className="animate-pulse">
                    <span className="text-gray-500">[{new Date().toLocaleTimeString()}]</span> {log}
                  </div>
                ))}
             </div>
          )}

          {/* Messages */}
          {!booting && messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
              <div className={`max-w-[85%] rounded-lg p-3 text-sm leading-relaxed backdrop-blur-sm ${
                msg.role === 'user' 
                  ? 'bg-brand-red/90 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)]' 
                  : 'bg-white/10 text-gray-200 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          
          {/* Typing Indicator Bubble */}
          {(loading || isTyping) && (
            <div className="flex justify-start animate-fade-in-up">
              <div className="bg-white/5 border border-white/5 text-gray-400 rounded-lg p-3 flex items-center gap-1 w-16 h-10 backdrop-blur-sm">
                 <div className="w-2 h-2 bg-brand-red rounded-full animate-bounce"></div>
                 <div className="w-2 h-2 bg-brand-red rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                 <div className="w-2 h-2 bg-brand-red rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-black/60 border-t border-white/5 relative z-20">
          <div className="flex gap-2">
            <input
              type="text"
              className="flex-1 bg-white/5 border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-red text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:bg-white/10"
              placeholder="Ask Santa AI..."
              value={input}
              disabled={booting}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              disabled={loading || booting}
              className="bg-white hover:bg-gray-200 text-black px-6 py-2 rounded font-bold text-sm uppercase tracking-wider transition disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
