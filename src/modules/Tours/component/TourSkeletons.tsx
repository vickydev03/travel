import { Skeleton } from "@/components/ui/skeleton";
import { TrendingDestinationSkeleton, ReasonWithUsSkeleton } from "@/modules/home/component/HomeSkeletons";

export function TourBannerSkeleton() {
  return (
    <div className="w-full h-auto">
      <Skeleton className="w-full aspect-video max-h-128 rounded-none" />
    </div>
  );
}

export function AboutTourSkeleton() {
  return (
    <div className="relative w-full space-y-4 px-5 md:px-20 py-4">
      <Skeleton className="h-10 w-64 md:w-80" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <Skeleton className="h-4 w-24" />
    </div>
  );
}

export function TripsSkeleton() {
  return (
    <div className="w-full h-full flex flex-col md:flex-wrap md:flex-row justify-center md:justify-start gap-4 px-5 md:px-20 space-y-4 pt-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="aspect-[0.9/1] w-[88.89vw] md:w-74 md:h-86 rounded-2xl overflow-hidden shrink-0">
          <Skeleton className="h-full w-full" />
        </div>
      ))}
    </div>
  );
}

export function ReviewSkeleton() {
  return (
    <div className="w-full py-10 space-y-12">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
            <Skeleton className="h-10 w-80 md:w-96" />
        </div>
        <div className="flex justify-center">
            <Skeleton className="h-6 w-64 md:w-80" />
        </div>
      </div>
      <div className="flex gap-4 px-4 overflow-hidden justify-center">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="w-[300px] md:w-[400px] h-48 rounded-2xl shrink-0" />
        ))}
      </div>
    </div>
  );
}

export function FaqSkeleton() {
  return (
    <section className="px-5 md:px-20 py-12 md:py-20 space-y-10">
      <div className="text-center space-y-3">
        <div className="flex justify-center">
            <Skeleton className="h-10 w-80 md:w-96" />
        </div>
        <div className="flex justify-center">
            <Skeleton className="h-6 w-64 md:w-80" />
        </div>
      </div>
      <div className="max-w-4xl mx-auto space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-16 w-full rounded-lg" />
        ))}
      </div>
    </section>
  );
}

export function TourFullPageSkeleton() {
  return (
    <div className="space-y-4 h-full w-full pb-20">
      <TourBannerSkeleton />
      <AboutTourSkeleton />
      <TripsSkeleton />
      <TrendingDestinationSkeleton />
      <div className="w-full h-40 md:h-64 px-5 md:px-20">
        <Skeleton className="w-full h-full rounded-2xl" />
      </div>
      <ReviewSkeleton />
      <ReasonWithUsSkeleton />
      <FaqSkeleton />
    </div>
  );
}
