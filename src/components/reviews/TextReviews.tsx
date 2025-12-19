"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Send, User, Calendar, ThumbsUp, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  id: number;
  author: string;
  avatar?: string;
  date: string;
  rating: number;
  text: string;
  likes: number;
  verified: boolean;
}

const initialReviews: Review[] = [
  {
    id: 1,
    author: "Alexander K.",
    date: "December 15, 2024",
    rating: 5,
    text: "Been working with the team for 3 months now. My bankroll grew by 47% during this time. The manager is always available, explains every forecast. Very satisfied with the service!",
    likes: 24,
    verified: true
  },
  {
    id: 2,
    author: "Dmitry M.",
    date: "December 12, 2024",
    rating: 5,
    text: "Best football forecasts I've seen. Rustam and Nadin really know their stuff. Statistics are open, everything is honest.",
    likes: 18,
    verified: true
  },
  {
    id: 3,
    author: "Max V.",
    date: "December 10, 2024",
    rating: 5,
    text: "Was skeptical at first, but after the first month I realized it was worth it. ROI +32% per month. Special thanks for live bets!",
    likes: 31,
    verified: true
  },
  {
    id: 4,
    author: "Igor L.",
    date: "December 8, 2024",
    rating: 4,
    text: "Good service, quality analytics. The only thing — I'd like more tennis forecasts. But overall very satisfied.",
    likes: 12,
    verified: true
  },
  {
    id: 5,
    author: "Arthur S.",
    date: "December 5, 2024",
    rating: 5,
    text: "Subscribed to the premium plan — no regrets. Weekly calls with experts really help understand the betting logic.",
    likes: 27,
    verified: true
  },
  {
    id: 6,
    author: "Vlad N.",
    date: "December 3, 2024",
    rating: 5,
    text: "Transparent statistics — that's the main thing. You can see they don't hide losses. Full trust!",
    likes: 19,
    verified: true
  }
];

const TextReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [currentPage, setCurrentPage] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    text: ''
  });
  const [hoveredRating, setHoveredRating] = useState(0);

  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const currentReviews = reviews.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.text) {
      const newReview: Review = {
        id: reviews.length + 1,
        author: formData.name,
        date: new Date().toLocaleDateString('en-US', { 
          month: 'long',
          day: 'numeric', 
          year: 'numeric' 
        }),
        rating: formData.rating,
        text: formData.text,
        likes: 0,
        verified: false
      };
      setReviews([newReview, ...reviews]);
      setFormData({ name: '', rating: 5, text: '' });
      setShowForm(false);
      setCurrentPage(0);
    }
  };

  const handleLike = (id: number) => {
    setReviews(reviews.map(review => 
      review.id === id ? { ...review, likes: review.likes + 1 } : review
    ));
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
            Client Reviews
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            WHAT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">
              OUR CLIENTS SAY
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real reviews from real people. We value every opinion.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <AnimatePresence mode="wait">
            {currentReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-brand-red/30 transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3">
                  <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Header */}
                <div className="flex items-start justify-between mb-4 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-red to-red-600 flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-semibold">{review.author}</span>
                        {review.verified && (
                          <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full">
                            Verified
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {review.text}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <button 
                    onClick={() => handleLike(review.id)}
                    className="flex items-center gap-2 text-gray-500 hover:text-brand-red transition-colors"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">{review.likes}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mb-12">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white disabled:opacity-30 hover:border-brand-red/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === i 
                      ? 'bg-brand-red w-8' 
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white disabled:opacity-30 hover:border-brand-red/50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Add Review Button */}
        <div className="text-center">
          <motion.button
            onClick={() => setShowForm(!showForm)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-brand-red/25"
          >
            <Send className="w-5 h-5" />
            Leave a Review
          </motion.button>
        </div>

        {/* Review Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <form 
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto mt-12 bg-white/[0.02] border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Share Your Experience
                </h3>

                {/* Name Input */}
                <div className="mb-6">
                  <label className="block text-gray-400 text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-red/50 transition-colors"
                    required
                  />
                </div>

                {/* Rating */}
                <div className="mb-6">
                  <label className="block text-gray-400 text-sm mb-2">Your Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="p-1 transition-transform hover:scale-110"
                      >
                        <Star 
                          className={`w-8 h-8 transition-colors ${
                            star <= (hoveredRating || formData.rating) 
                              ? 'text-yellow-400 fill-yellow-400' 
                              : 'text-gray-600'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <div className="mb-6">
                  <label className="block text-gray-400 text-sm mb-2">Your Review</label>
                  <textarea
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    placeholder="Tell us about your experience..."
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-red/50 transition-colors resize-none"
                    required
                  />
                </div>

                {/* Submit */}
                <div className="flex gap-4 justify-center">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:border-white/30 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-brand-red hover:bg-red-700 rounded-xl text-white font-semibold transition-colors flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Review
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TextReviews;
