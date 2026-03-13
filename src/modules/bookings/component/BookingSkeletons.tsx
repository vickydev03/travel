import { Skeleton } from "@/components/ui/skeleton";

export function SharingTypeCardSkeleton() {
  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <Skeleton className="h-4 w-32 bg-gray-200" />
          </div>
          <Skeleton className="h-3 w-24 bg-gray-200" />
          <div className="flex items-baseline gap-2 pt-2">
            <Skeleton className="h-7 w-24 bg-gray-200" />
            <Skeleton className="h-4 w-16 bg-gray-200" />
          </div>
        </div>
        <Skeleton className="h-12 w-32 rounded-2xl bg-gray-200" />
      </div>
    </div>
  );
}

export function BookingSummarySkeleton() {
  return (
    <div className="sticky top-8 bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
      {/* Trip Brief Skeleton */}
      <div className="p-6 bg-slate-50/50 flex gap-4 border-b border-slate-100">
        <Skeleton className="h-20 w-20 rounded-2xl bg-gray-200" />
        <div className="flex flex-col justify-center space-y-2 flex-1">
          <Skeleton className="h-5 w-full bg-gray-200" />
          <div className="space-y-1">
            <Skeleton className="h-3 w-24 bg-gray-200" />
            <Skeleton className="h-3 w-20 bg-gray-200" />
          </div>
        </div>
      </div>

      {/* Price Breakdown Skeleton */}
      <div className="p-6 space-y-6">
        <div className="space-y-3">
          {[1, 2].map((i) => (
            <div key={i} className="flex justify-between">
              <Skeleton className="h-4 w-24 bg-gray-200" />
              <Skeleton className="h-4 w-20 bg-gray-200" />
            </div>
          ))}
          <div className="pt-2 border-t border-slate-100 flex justify-between">
            <Skeleton className="h-4 w-32 bg-gray-200" />
            <Skeleton className="h-4 w-20 bg-gray-200" />
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-between items-end">
          <div className="space-y-1">
            <Skeleton className="h-3 w-20 bg-gray-200" />
            <Skeleton className="h-8 w-32 bg-gray-200" />
          </div>
        </div>

        {/* Mobile Field Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-3 w-24 bg-gray-200" />
          <Skeleton className="h-12 w-full rounded-2xl bg-gray-200" />
        </div>

        <Skeleton className="h-14 w-full rounded-2xl bg-gray-200" />
      </div>
    </div>
  );
}

export function BookingFullPageSkeleton() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-8 md:py-16">
        <header className="mb-10 md:mb-14 space-y-3">
          <Skeleton className="h-10 w-64 bg-gray-200" />
          <Skeleton className="h-5 w-96 bg-gray-200" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            {[1, 2, 3].map((i) => (
              <SharingTypeCardSkeleton key={i} />
            ))}
          </div>
          <aside className="lg:col-span-5">
            <BookingSummarySkeleton />
          </aside>
        </div>
      </div>
    </div>
  );
}
