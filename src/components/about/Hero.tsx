import React from 'react';
import { motion } from 'framer-motion';
import FogCanvas from './Fog';

const Hero: React.FC = () => {
  const sentence = "WE DON'T GUESS. WE KNOW.";
  const words = sentence.split(" ");

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-obsidian">
      {/* WebGL Background */}
      <FogCanvas />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none text-off-white mix-blend-screen">
          {words.map((word, i) => (
            <span key={i} className="inline-block mr-4 lg:mr-8 overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: 100, opacity: 0, filter: 'blur(20px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{
                  duration: 1.2,
                  delay: 0.2 + (i * 0.15), // Adjusted for no preloader
                  ease: [0.25, 1, 0.5, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-8 md:mt-12 text-gray-400 uppercase tracking-[0.2em] text-sm md:text-base font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1.5 }}
        >
          <span className="text-cardiac mr-2">●</span> Intelligence over Impulse
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-cardiac to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
