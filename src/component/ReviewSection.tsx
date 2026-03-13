import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { reviews as reviewsType } from "@/trpc/type";
import { Star, User } from "lucide-react";
import React from "react";

function ReviewSection({ reviews: initialReviews, tourId }: { reviews?: reviewsType; tourId?: number }) {
  const trpc = useTRPC();

  const { data: reviewsData } = useSuspenseQuery(
    tourId 
      ? trpc.tours.getReviews.queryOptions({ tourId }) 
      : trpc.tours.getReviewsAll.queryOptions()
  );

  const reviews = reviewsData;
  // Duplicate reviews to ensure seamless looping
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];
  
  return (
    <div className="w-full py-10 overflow-hidden relative bg-background">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 mb-12 text-center relative z-10">
        <h2 className="text-4xl md:text-3xl font-semibold capitalize tracking-normal font-saira mb-4 text-header">
          What People think <span className="text-red-400">about us</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-poppins">
          Discover why thousands of adventurers choose us for their next
          journey.
        </p>
      </div>

      <div className="relative w-full shadow-marquee">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-4">
          {duplicatedReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="mx-4 w-[300px] md:w-[400px] flex-shrink-0 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary overflow-hidden">
                  {/* Placeholder for user image if available, else initials/icon */}
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-saira text-card-foreground group-hover:text-primary transition-colors">
                    {review.user.name}
                  </h3>
                  <div className="flex gap-0.5 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <span className="absolute -top-2 -left-2 text-4xl text-primary/20 font-serif leading-none">
                  "
                </span>
                <p className="text-muted-foreground font-poppins leading-relaxed relative z-10 pl-2">
                  {review.review}
                </p>
                <span className="absolute -bottom-4 right-0 text-4xl text-primary/20 font-serif leading-none">
                  "
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
