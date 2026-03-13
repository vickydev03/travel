"use client";

import { Suspense } from "react";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import dynamic from "next/dynamic";
import Explore from "../component/Explore";
import Thumbnail from "../component/Thumbnail";
import BookGuaranteed from "../component/BookGuaranteed";
import MarqueeBar from "@/component/MarqueeBar";
import ReasonWithUs from "../component/ReasonWithUs";
// import TrendingDestination from "../component/TrendingDestination"; // Removed to avoid conflict with dynamic import

import { DestinationSkeleton, UpcomingTripsSkeleton, VibeWithUsSkeleton, TrendingDestinationSkeleton } from "../component/HomeSkeletons";

const Banner = dynamic(() => import("../component/Banner"), {
  ssr: false,
});

const Destination = dynamic(() => import("../component/Destination"), {
  loading: () => <DestinationSkeleton />,
});

const UpcomingTrips = dynamic(() => import("@/component/UpcomingTrips"), {
  loading: () => <UpcomingTripsSkeleton />,
});

const VibeWithUs = dynamic(() => import("../component/VibeWithUs"), {
  loading: () => <VibeWithUsSkeleton />,
});

const TrendingDestination = dynamic(() => import("../component/TrendingDestination"), {
  loading: () => <TrendingDestinationSkeleton />,
});

function HomeView() {
  return (
    <section className="flex flex-col items-center relative">
      <Banner />
      <MarqueeBar />

      <Suspense fallback={<DestinationSkeleton />}>
        <Destination />
      </Suspense>
      <Explore />
      <Thumbnail />

      <Suspense fallback={<UpcomingTripsSkeleton />}>
        <UpcomingTrips />
      </Suspense>

      <BookGuaranteed />
    
      <Suspense fallback={<VibeWithUsSkeleton />}>
        <VibeWithUs />
      </Suspense>
      <ReasonWithUs />
      
      <Suspense fallback={<TrendingDestinationSkeleton />}>
        <TrendingDestination />
      </Suspense>
    </section>
  );
}

export default HomeView;
