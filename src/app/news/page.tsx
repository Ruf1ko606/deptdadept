"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { blogPosts } from "@/lib/data/blog-posts";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-24 text-white">
      {/* Header */}
      <section className="relative overflow-hidden py-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/photos/news.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/50 to-[#050505]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black uppercase tracking-tighter md:text-8xl"
          >
            News <span className="text-[#E60026]">&</span> Insights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-gray-400"
          >
            Updates from the headquarters of analytics.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-colors hover:border-[#E60026]/50"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:opacity-20" />
                
                {/* Category Tag */}
                <div className="absolute left-4 top-4 rounded bg-[#E60026] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h2 className="mb-4 text-2xl font-bold leading-tight group-hover:text-[#E60026]">
                  <Link href={`/news/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400">
                  {post.subtitle}
                </p>

                <Link 
                  href={`/news/${post.slug}`}
                  className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white transition-all group-hover:gap-4 group-hover:text-[#E60026]"
                >
                  Read Article <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}

