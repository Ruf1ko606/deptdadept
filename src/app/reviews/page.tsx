import { ReviewsHero, Guarantees, TextReviews, VideoReviews } from "@/components/reviews";

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <ReviewsHero />
      
      {/* Guarantees Section */}
      <Guarantees />
      
      {/* Text Reviews Section */}
      <TextReviews />
      
      {/* Video Reviews Section */}
      <VideoReviews />
    </div>
  );
}
