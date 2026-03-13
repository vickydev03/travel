import { Skeleton } from "@/components/ui/skeleton";
import { TourBannerSkeleton, AboutTourSkeleton, ReviewSkeleton, FaqSkeleton } from "./TourSkeletons";
import { TrendingDestinationSkeleton, ReasonWithUsSkeleton } from "@/modules/home/component/HomeSkeletons";

export { TourBannerSkeleton as TripBannerSkeleton };

export function TripDetailsSkeleton() {
  return (
    <div className="flex w-full p-6 flex-col gap-5 rounded-2xl border border-[#D8D8D8] bg-white shadow-md">
      <div className="space-y-2">
        <Skeleton className="h-4 w-24 bg-gray-200" />
        <Skeleton className="h-8 w-32 bg-gray-200" />
        <Skeleton className="h-4 w-16 bg-gray-200" />
      </div>
      <div className="flex justify-between items-center">
        <Skeleton className="h-6 w-24 bg-gray-200" />
        <Skeleton className="h-10 w-28 rounded-full bg-gray-200" />
      </div>
      <div className="space-y-3">
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="space-y-1">
              <Skeleton className="h-5 w-28 bg-gray-200" />
              <Skeleton className="h-4 w-20 bg-gray-200" />
            </div>
            <Skeleton className="w-6 h-6 rounded-full bg-gray-200" />
          </div>
        ))}
      </div>
      <Skeleton className="h-12 w-full rounded-full bg-gray-200" />
    </div>
  );
}

export function ItinerarySkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="w-full aspect-video rounded-2xl bg-gray-200" />
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-8 w-40 bg-gray-200" />
            <Skeleton className="h-20 w-full rounded-xl bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function InclusionExclusionSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:px-0">
      <div className="space-y-4">
        <Skeleton className="h-8 w-32 bg-gray-200" />
        <div className="space-y-2">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-6 w-full bg-gray-200" />
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <Skeleton className="h-8 w-32 bg-gray-200" />
        <div className="space-y-2">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-6 w-full bg-gray-200" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function TripFullPageSkeleton() {
  return (
    <div className="w-full h-full space-y-4 relative pb-20">
      <TourBannerSkeleton />
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid pt-4 md:pt-16 grid-cols-1 gap-4 md:grid-cols-12">
          <div className="col-span-8 flex flex-col gap-8 md:gap-12">
            <AboutTourSkeleton />
            {/* Menu Buttons Skeleton */}
            <div className="px-5 md:px-20">
                <Skeleton className="h-12 w-full rounded-full bg-gray-200" />
            </div>
            <div className="px-5 md:px-20 space-y-8">
                <ItinerarySkeleton />
                <InclusionExclusionSkeleton />
                <Skeleton className="h-40 w-full rounded-2xl bg-gray-200" />
                <Skeleton className="h-32 w-full rounded-2xl bg-gray-200" />
            </div>
          </div>
          <div className="hidden md:block col-span-4 md:mr-20">
            <TripDetailsSkeleton />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-6">
        <TrendingDestinationSkeleton />
        <ReviewSkeleton />
        <FaqSkeleton />
      </div>
    </div>
  );
}
