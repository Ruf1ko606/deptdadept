import React from 'react';
import { motion } from 'framer-motion';

const founders = [
  {
    id: 1,
    name: "RUSTAM SHABASHIN",
    role: "Head of Quantitative Analysis",
    desc: "Mathematics doesn't lie. People do. Alexei brings 15 years of high-frequency trading experience to the pitch.",
    img: "/photos/DualSoul1.jpg"
  },
  {
    id: 2,
    name: "NADIN MADTUSO",
    role: "Chief Strategy Officer",
    desc: "Understanding the game is one thing. Understanding the market sentiment around the game is another.",
    img: "/photos/DualSoul2.jpg"
  }
];

const Founders: React.FC = () => {
  return (
    <section className="bg-obsidian py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-16 border-b border-white/10 pb-8 flex justify-between items-end">
          <h2 className="text-4xl md:text-6xl font-light text-off-white">The <span className="text-cardiac italic font-serif">Dual</span> Soul</h2>
          <span className="hidden md:block text-gray-500 uppercase tracking-widest text-xs">Logic meets Intuition</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
          {founders.map((founder, i) => (
            <motion.div 
              key={founder.id}
              className={`group relative overflow-hidden h-[600px] md:h-[800px] cursor-none border-r border-white/5 ${i === 0 ? 'border-l' : ''}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-105 filter grayscale contrast-125 brightness-75 group-hover:grayscale-[0.3] group-hover:contrast-100"
                style={{ backgroundImage: `url(${founder.img})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-90" />
              
              {/* Red Shadow Hover Effect */}
              <div className="absolute inset-0 bg-cardiac opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-30" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="overflow-hidden mb-2">
                  <h3 className="text-3xl md:text-5xl font-bold text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75 uppercase">
                    {founder.name}
                  </h3>
                </div>
                <div className="overflow-hidden mb-4">
                  <p className="text-cardiac text-sm font-mono tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {founder.role}
                  </p>
                </div>
                <div className="max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                  <p className="text-gray-300 leading-relaxed font-light">
                    {founder.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
