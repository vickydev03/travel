import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface Props {
  about?: string;
  title?: string;
  tourId?: number;
}

function AboutTour({ about: initialAbout, title: initialTitle, tourId }: Props) {
  const trpc = useTRPC();
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Only fetch if tourId is provided AND we don't already have the about text
  const { data } = useQuery({
    ...trpc.tours.getTour.queryOptions({ id: tourId! }),
    enabled: !!tourId && !initialAbout,
  });

  const about = initialAbout || data?.about || "";
  const title = initialTitle || data?.title || "";

  if (!about) return null;

  return (
    <div className="relative w-full space-y-4 px-5 md:px-20">
      <h2 className="mb-3 font-cedarville  text-2xl text-[#1e1313] md:mb-4 md:text-3xl">
        About {title}
      </h2>
      <div className="text-sm font-normal leading-relaxed text-[#5A5A5A] md:text-base">
        <div className="relative">
          <div 
            className={`article transition-all duration-500 overflow-hidden ${!isExpanded ? "max-h-24 md:max-h-20" : "max-h-[5000px]"}`}
            dangerouslySetInnerHTML={{ __html: about }}
          />
          {!isExpanded && (
            <div className="absolute bottom-6 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          )}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-blue-700 underline underline-offset-4 hover:text-blue-900 transition-colors cursor-pointer"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutTour;
