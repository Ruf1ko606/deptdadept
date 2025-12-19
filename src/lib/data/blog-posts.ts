export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  author: string;
  category: string;
  content: string; // Using simple string for now, could be markdown/html later
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "launch-deportament-stavok",
    title: "Deportament Stavok: The Game Has Changed",
    subtitle: "Where analytics meets intuition. The official launch of the most advanced betting insights platform.",
    date: "December 14, 2025",
    author: "Deportament Team",
    category: "Announcements",
    image: "/photos/news.jpg",
    content: `
      <p class="mb-6 text-lg leading-relaxed text-gray-300">
        Today marks a pivotal moment in the world of sports analytics. We are proud to announce the official launch of 
        <strong class="text-white">Deportament Stavok</strong>, a platform born from the collision of two distinct philosophies: 
        cold, hard data and raw, experienced intuition.
      </p>
      
      <p class="mb-6 text-lg leading-relaxed text-gray-300">
        For years, the betting industry has been divided. You had the "quants"—those who believe every outcome is hidden in a spreadsheet—and 
        the "purists"—those who trust their gut above all else. We asked: <em class="text-[#E60026]">why choose?</em>
      </p>

      <h3 class="my-8 text-2xl font-bold text-white">The Dual Soul Approach</h3>

      <p class="mb-6 text-lg leading-relaxed text-gray-300">
        Rustam Shabashin and Nadin Madtuso have joined forces to create a system that respects both the math and the magic of the game. 
        "The Shaba System" decodes the patterns, while Madtuso's strategic insight anticipates the market's pulse. This isn't just about 
        predicting scores; it's about understanding the narrative of every match before the whistle blows.
      </p>

      <div class="my-10 border-l-4 border-[#E60026] bg-white/5 p-6 italic text-white">
        "This website isn't just a storefront; it's a statement. We're here to bring transparency, professionalism, and, most importantly, 
        results to a market often clouded by uncertainty."
      </div>

      <h3 class="my-8 text-2xl font-bold text-white">What This Means for You</h3>

      <p class="mb-6 text-lg leading-relaxed text-gray-300">
        By joining Deportament Stavok, you aren't just buying forecasts. You are gaining access to a methodology refined over decades of 
        experience in high-stakes environments. From detailed statistical breakdowns to emotional market analysis, we provide the full picture.
      </p>

      <p class="mb-6 text-lg leading-relaxed text-gray-300">
        We are thrilled to embark on this journey with you. The infrastructure is set. The experts are ready.
      </p>
      
      <p class="text-xl font-bold text-[#E60026]">
        Welcome to the department. The game is on.
      </p>
    `
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

