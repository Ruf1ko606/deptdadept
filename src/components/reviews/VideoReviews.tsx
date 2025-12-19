"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Video, User, Clock, Eye, Pause } from 'lucide-react';

interface VideoReview {
  id: number;
  title: string;
  author: string;
  duration: string;
  views: string;
  thumbnail?: string;
  videoSrc?: string; // Path to video — add later
  description: string;
}

const videoReviews: VideoReview[] = [
  {
    id: 1,
    title: "Incredible Growth in Just One Month",
    author: "Boris",
    duration: "0:08",
    views: "1.2K",
    videoSrc: "/videos/bobr.mp4",
    description: "I've tried many services, but this is the first one where I actually see a consistent profit. Great analysis!"
  },
  {
    id: 2,
    title: "The Community is Amazing",
    author: "Egor",
    duration: "0:08",
    views: "2.8K",
    videoSrc: "/videos/egor.mp4",
    description: "Not just signals, but a real community. Learned so much about bankroll management here. Highly recommended."
  },
  {
    id: 3,
    title: "Results Speak Louder",
    author: "Igor",
    duration: "0:08",
    views: "956",
    videoSrc: "/videos/igor.mp4",
    description: "Stopped guessing and started investing. The ROI in the last month has been incredible. Thanks guys!"
  }
];

const VideoReviews: React.FC = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const handlePlayClick = (id: number, videoSrc?: string) => {
    if (videoSrc) {
      setPlayingVideo(playingVideo === id ? null : id);
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-black">
      {/* Red Glow Effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-red text-sm font-bold uppercase tracking-widest mb-4 block">
            Video Reviews
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            WATCH{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">
              REAL TESTIMONIALS
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real people share their experience working with us
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {videoReviews.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              {/* Video Container */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 mb-4">
                {/* Placeholder/Thumbnail */}
                {!video.videoSrc || playingVideo !== video.id ? (
                  <>
                    {/* Placeholder Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900">
                      {/* Grid Pattern */}
                      <div 
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                          `,
                          backgroundSize: '20px 20px'
                        }}
                      />
                      
                      {/* Center Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-brand-red/20 flex items-center justify-center">
                          <Video className="w-10 h-10 text-brand-red/50" />
                        </div>
                      </div>

                      {/* "Coming Soon" Badge if no video */}
                      {!video.videoSrc && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-brand-red/80 text-white text-xs font-bold px-3 py-1 rounded-full">
                            Soon
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Play Button */}
                    <motion.button
                      onClick={() => handlePlayClick(video.id, video.videoSrc)}
                      disabled={!video.videoSrc}
                      whileHover={{ scale: video.videoSrc ? 1.1 : 1 }}
                      whileTap={{ scale: video.videoSrc ? 0.95 : 1 }}
                      className={`absolute inset-0 flex items-center justify-center group/play ${
                        video.videoSrc ? 'cursor-pointer' : 'cursor-not-allowed'
                      }`}
                    >
                      <div className={`
                        w-16 h-16 rounded-full flex items-center justify-center
                        transition-all duration-300
                        ${video.videoSrc 
                          ? 'bg-brand-red group-hover/play:bg-red-600 shadow-lg shadow-brand-red/30' 
                          : 'bg-zinc-700'
                        }
                      `}>
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </motion.button>

                    {/* Duration Badge */}
                    <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {video.duration}
                    </div>
                  </>
                ) : (
                  /* Video Player */
                  <div className="absolute inset-0">
                    <video
                      src={video.videoSrc}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                    />
                    {/* Pause Overlay Button */}
                    <button
                      onClick={() => setPlayingVideo(null)}
                      className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <Pause className="w-5 h-5 text-white" />
                    </button>
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="space-y-2">
                <h3 className="text-white font-bold text-lg group-hover:text-brand-red transition-colors">
                  {video.title}
                </h3>
                
                <p className="text-gray-400 text-sm line-clamp-2">
                  {video.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-red to-red-600 flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">{video.author}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Eye className="w-4 h-4" />
                    <span>{video.views}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
            <Video className="w-5 h-5 text-brand-red" />
            <span className="text-gray-400 text-sm">
              New video reviews added every week
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoReviews;
