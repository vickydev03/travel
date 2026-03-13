import { Skeleton } from "@/components/ui/skeleton";

export function DestinationSkeleton() {
  return (
    <div className="w-full md:mt-6 space-y-3">
      <div className="px-5 md:px-20">
        <Skeleton className="h-8 w-48 md:h-10 md:w-64" />
      </div>
      <div className="px-5 md:px-20 flex gap-3 overflow-hidden">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-10 w-20 rounded-full shrink-0" />
        ))}
      </div>
      <div className="px-5 md:px-20 grid auto-cols-max grid-flow-col grid-rows-2 gap-4 md:gap-6 overflow-hidden">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="flex flex-col items-start gap-2 shrink w-16 md:w-30">
            <Skeleton className="aspect-[0.8/1] w-full rounded-[100px]" />
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function UpcomingTripsSkeleton() {
  return (
    <div className="w-full md:mt-6 space-y-3">
      <div className="px-5 md:px-20 flex justify-between items-center">
        <Skeleton className="h-8 w-64 md:h-10 md:w-80" />
        <Skeleton className="h-10 w-24 rounded-full" />
      </div>
      <div className="px-5 md:px-20 flex gap-3 overflow-hidden">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-10 w-20 rounded-full shrink-0" />
        ))}
      </div>
      <div className="px-5 md:px-20 flex gap-4 md:gap-6 overflow-hidden py-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="aspect-[0.9/1] w-[73.335vw] md:w-74 md:h-86 rounded-2xl overflow-hidden shrink-0">
            <Skeleton className="h-full w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function VibeWithUsSkeleton() {
  return (
    <div className="w-full py-10 space-y-6">
      <div className="flex justify-center">
        <Skeleton className="h-8 w-48 md:h-10 md:w-64 italic text-center rounded-lg" />
      </div>
      <div className="px-5 md:px-20 flex gap-4 overflow-hidden justify-center">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="w-52 md:w-75.5 aspect-[9/16] rounded-3xl shrink-0" />
        ))}
      </div>
    </div>
  );
}

export function TrendingDestinationSkeleton() {
  return (
    <div className="w-full py-10 space-y-6">
      <div className="px-5 md:px-20">
        <Skeleton className="h-8 w-64 md:h-10 md:w-80" />
      </div>
      <div className="px-5 md:px-20 flex gap-4 overflow-hidden">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-[16.5rem] md:w-[18.875rem] aspect-square rounded-2xl overflow-hidden shrink-0">
            <Skeleton className="h-full w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ReasonWithUsSkeleton() {
  return (
    // <div className="w-full py-10 px-5 md:px-20">
    //    <Skeleton className="w-full h-40 md:h-60 rounded-2xl" />
    // </div>
    <></>
  );
}

export function HomeFullPageSkeleton() {
  return (
    <div className="flex flex-col items-center relative w-full pb-20">
      {/* Banner Skeleton */}
      <Skeleton className="w-full aspect-video max-h-128 rounded-none" />
      
      {/* Marquee Skeleton */}
      <Skeleton className="w-full h-12 md:h-16" />

      {/* Destination Skeleton */}
      <DestinationSkeleton />

      {/* Reason With Us Skeleton */}
      <ReasonWithUsSkeleton />

      {/* Upcoming Trips Skeleton */}
      <UpcomingTripsSkeleton />

      {/* Vibe With Us Skeleton */}
      <VibeWithUsSkeleton />

      {/* Trending Destination Skeleton */}
      <TrendingDestinationSkeleton />
    </div>
  );
}
