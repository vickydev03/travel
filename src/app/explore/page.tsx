export const dynamic = "force-dynamic";
import ExploreView from "@/modules/Tours/view/ExploreView";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import React, { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Trips | Stranger Together",
  description:
    "Browse and filter group tours — domestic, international, and weekend getaways. Find your next adventure with Stranger Together.",
  alternates: {
    canonical: "/explore",
  },
  openGraph: {
    title: "Explore Trips | Stranger Together",
    description: "Browse and filter group tours — domestic, international, and weekend getaways.",
    url: "https://strangertogether.com/explore",
  },
};

async function ExplorePage() {
  const queryClient = getQueryClient();

  // Prefetch filter data and initial trips
  void queryClient.prefetchQuery(trpc.tours.getTripType.queryOptions());
  void queryClient.prefetchQuery(trpc.tours.getCategories.queryOptions());
  void queryClient.prefetchQuery(
    trpc.tours.exploreTrips.queryOptions({
      limit: 12,
      sortBy: "date_asc",
    })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense
        fallback={
          <div className="min-h-screen bg-gradient-to-b from-[#f8faf9] to-white flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 border-3 border-[#003022] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm text-gray-500 font-medium">
                Loading trips...
              </p>
            </div>
          </div>
        }
      >
        <ExploreView />
      </Suspense>
    </HydrationBoundary>
  );
}

export default ExplorePage;