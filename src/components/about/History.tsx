import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Flame, Users, Brain, Zap, Database, TrendingUp, Rocket, Sparkles } from 'lucide-react';

const historyData = [
  {
    year: "2018",
    title: "The Beginning",
    text: "Rustam placed his first conscious bet on Arsenal. Intuition and first serious analysis. A passion for analytics was born.",
    icon: Flame,
    accent: "from-orange-500/20 to-red-500/20"
  },
  {
    year: "2019",
    title: "First Patterns",
    text: "Nadin began studying team psychology. Emotional intelligence as a forecasting tool. Two paths crossed in an online forum.",
    icon: Brain,
    accent: "from-purple-500/20 to-pink-500/20"
  },
  {
    year: "2020",
    title: "Pandemic & Growth",
    text: "The world stopped, but not analytics. Time for deep statistical study. Rustam developed the first machine learning model.",
    icon: Database,
    accent: "from-blue-500/20 to-cyan-500/20"
  },
  {
    year: "2021",
    title: "Joining Forces",
    text: "First collaborative work. The synthesis of mathematics and intuition showed 78% accuracy in the test period.",
    icon: Users,
    accent: "from-green-500/20 to-emerald-500/20"
  },
  {
    year: "2022",
    title: "Systematic Approach",
    text: "Creating our own methodology. Data collection automation. First private consultations for a select circle.",
    icon: Zap,
    accent: "from-yellow-500/20 to-orange-500/20"
  },
  {
    year: "2023",
    title: "Expansion",
    text: "Growing audience. Launch of a private Telegram channel. Over 500 successful forecasts per year. Team formation.",
    icon: TrendingUp,
    accent: "from-red-500/20 to-rose-500/20"
  },
  {
    year: "2024",
    title: "The Department",
    text: "Official launch of 'Deportament Stavok' project. Combining expertise into a single platform. The beginning of a new era.",
    icon: Rocket,
    accent: "from-indigo-500/20 to-purple-500/20"
  },
  {
    year: "2025",
    title: "Future Today",
    text: "Scaling and innovation. AI assistant for analysis. Plans for international expansion and new horizons.",
    icon: Sparkles,
    accent: "from-cardiac/30 to-red-600/20"
  }
];

const History: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-48 bg-obsidian overflow-hidden">
      
      {/* Global Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-cardiac/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Container with explicit max-width and NO padding for alignment reference */}
      <div className="w-full max-w-[1400px] mx-auto relative">
        
        {/* Central SVG Line */}
        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] h-full z-20 pointer-events-none">
           <svg className="w-full h-full overflow-visible">
              {/* Background faint line */}
              <line x1="1" y1="0" x2="1" y2="100%" stroke="#1a1a1a" strokeWidth="2" />
              {/* Animated Red Line */}
              <motion.path
                d="M 1 0 V 5000"
                stroke="#D62828"
                strokeWidth="2"
                fill="none"
                style={{ pathLength }}
              />
           </svg>
        </div>

        <div className="space-y-24 md:space-y-32">
          {historyData.map((item, index) => {
            const isLeft = index % 2 === 0;
            const Icon = item.icon;
            
            return (
              <div 
                key={index} 
                className="flex flex-col md:flex-row items-center relative w-full"
              >
                {/* GIANT Background Year Number */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: "-50%" }}
                  whileInView={{ opacity: 1, scale: 1, y: "-50%" }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`absolute ${isLeft ? 'md:right-[5%]' : 'md:left-[5%]'} top-1/2 pointer-events-none select-none hidden md:block`}
                >
                  <span className="text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold text-white/[0.03] leading-none tracking-tighter">
                    {item.year}
                  </span>
                </motion.div>

                {/* Decorative accent gradient blob */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className={`absolute ${isLeft ? 'md:left-[15%]' : 'md:right-[15%]'} top-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-gradient-to-br ${item.accent} rounded-full blur-[80px] pointer-events-none hidden md:block`}
                />

                {/* Timeline Node - Icon (positioned exactly on the line) */}
                <motion.div
                  initial={{ scale: 0, x: "-50%", y: "-50%" }}
                  whileInView={{ scale: 1, x: "-50%", y: "-50%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, type: "spring" }}
                  // left-6 matches line left-6 (mobile), left-1/2 matches line left-1/2 (desktop)
                  className="absolute left-6 md:left-1/2 top-1/2 z-30 w-14 h-14 rounded-full bg-obsidian border-2 border-cardiac flex items-center justify-center shadow-lg shadow-cardiac/30"
                >
                  {/* Inner glow effect */}
                  <div className="absolute inset-1 rounded-full bg-cardiac/10" />
                  <Icon className="w-6 h-6 text-cardiac relative z-10" />
                </motion.div>

                {/* Left side content */}
                <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${isLeft ? 'md:pr-16' : 'md:pr-16 md:invisible'}`}>
                  {isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-20%" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="md:text-right relative pr-6 md:pr-0"
                    >
                      {/* Year badge */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 mb-4 md:flex-row-reverse"
                      >
                        <span className="text-cardiac font-bold text-lg tracking-widest">{item.year}</span>
                        <div className="w-8 h-[1px] bg-cardiac/50" />
                      </motion.div>
                      
                      <h3 className="text-3xl md:text-5xl font-semibold mb-6 text-off-white">{item.title}</h3>
                      <p className="text-gray-400 text-lg leading-relaxed">{item.text}</p>
                      
                      {/* Decorative corner element */}
                      <div className="hidden md:block absolute -bottom-4 right-0 w-16 h-16 border-b border-r border-white/5" />
                    </motion.div>
                  )}
                </div>

                {/* Center spacer for the line */}
                <div className="hidden md:block md:w-[10%]" />

                {/* Right side content */}
                <div className={`w-full md:w-[45%] pl-20 md:pl-16 ${!isLeft ? '' : 'md:invisible'}`}>
                  {!isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-20%" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="md:text-left relative pr-6 md:pr-0"
                    >
                      {/* Year badge */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 mb-4"
                      >
                        <div className="w-8 h-[1px] bg-cardiac/50" />
                        <span className="text-cardiac font-bold text-lg tracking-widest">{item.year}</span>
                      </motion.div>
                      
                      <h3 className="text-3xl md:text-5xl font-semibold mb-6 text-off-white">{item.title}</h3>
                      <p className="text-gray-400 text-lg leading-relaxed">{item.text}</p>
                      
                      {/* Decorative corner element */}
                      <div className="hidden md:block absolute -bottom-4 left-0 w-16 h-16 border-b border-l border-white/5" />
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* End marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: "-50%" }}
          whileInView={{ opacity: 1, scale: 1, x: "-50%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          // Matches line position left-6 (mobile), left-1/2 (desktop)
          className="absolute left-6 md:left-1/2 mt-24"
        >
          <div className="w-4 h-4 rotate-45 bg-cardiac shadow-lg shadow-cardiac/50" />
        </motion.div>
        
        {/* Spacer for bottom marker */}
        <div className="h-32" />

      </div>
    </section>
  );
};

export default History;