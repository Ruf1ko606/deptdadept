import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { getPostBySlug } from "@/lib/data/blog-posts";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-[#050505] pt-24 text-white">
      {/* Hero Header */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div 
           className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: `url(${post.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
        
        <div className="container relative z-10 mx-auto flex h-full flex-col justify-end px-4 pb-12">
          <Link 
            href="/news"
            className="mb-8 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" /> Back to News
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm font-medium text-[#E60026]">
            <span className="bg-[#E60026]/10 px-3 py-1 uppercase tracking-wider">{post.category}</span>
          </div>

          <h1 className="mb-6 max-w-4xl text-4xl font-black uppercase leading-none md:text-6xl lg:text-7xl">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
               <User className="h-4 w-4" />
               <span className="text-white">{post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <div className="mb-12 text-2xl font-light italic leading-relaxed text-gray-200">
           {post.subtitle}
        </div>

        <div 
          className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:uppercase prose-a:text-[#E60026] prose-blockquote:border-[#E60026] prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* Footer / Share */}
        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8">
           <div className="text-sm text-gray-500">
             &copy; 2025 Deportament Stavok. All Rights Reserved.
           </div>
           <button className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm font-bold uppercase transition-colors hover:bg-white/10 hover:text-[#E60026]">
             <Share2 className="h-4 w-4" /> Share Post
           </button>
        </div>
      </div>
    </article>
  );
}

