"use client";
import Banner from "@/modules/home/component/Banner";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import TourBanner from "../component/TourBanner";
import AboutTour from "../component/AboutTour";
import TripsCard from "../component/TripsCard";
import Trips from "../component/Trips";
import TrendingDestination from "@/modules/home/component/TrendingDestination";
import BottomImageBanner from "../component/BottomImageBanner";
import ReviewSection from "@/component/ReviewSection";
import ReasonWithUs from "@/modules/home/component/ReasonWithUs";
import FaqSection from "@/component/FaqSection";

import { TourBannerSkeleton, AboutTourSkeleton, TripsSkeleton, ReviewSkeleton, FaqSkeleton } from "../component/TourSkeletons";
import { TrendingDestinationSkeleton, ReasonWithUsSkeleton } from "@/modules/home/component/HomeSkeletons";
import { Suspense } from "react";

function ToursView({ id }: { id: number }) {
  return (
    <div className=" space-y-4 h-full w-full pb-20">
      <Suspense fallback={<TourBannerSkeleton />}>
        <TourBanner tourId={id} />
      </Suspense>

      <Suspense fallback={<AboutTourSkeleton />}>
        <AboutTour tourId={id} />
      </Suspense>

      {/* Trips doesn't have internal fetching yet, but we can wrap it if we refactor it too */}
      <Suspense fallback={<TripsSkeleton />}>
         <TripsContainer tourId={id} />
      </Suspense>

      <Suspense fallback={<TrendingDestinationSkeleton />}>
        <TrendingDestination />
      </Suspense>

      <BottomImageBanner image="/image/banner.webp" />

      {/* <Suspense fallback={<ReviewSkeleton />}> */}
        <ReviewSection tourId={id} />
      {/* </Suspense> */}

      <ReasonWithUsSkeleton />

      <Suspense fallback={<FaqSkeleton />}>
        <FaqSection tourId={id} />
      </Suspense>
    </div>
  );
}

// Helper component to handle Trips data fetching internally
function TripsContainer({ tourId }: { tourId: number }) {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(
        trpc.tours.getTour.queryOptions({ id: tourId })
    );
    console.log(data, "data");
    console.log(data.trips, "data.trips");
    return <Trips trips={data.trips} tourId={data.id} />;
}

export default ToursView;
