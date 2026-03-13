import TripsView from "@/modules/Tours/view/TripsView";
import { getQueryClient, trpc, caller } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { Metadata, ResolvingMetadata } from "next";

type PageProps = {
  params: Promise<{
    tripId: number;
  }>;
  searchParams: Promise<{
    tourId?: number;
  }>;
};

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  let { tripId } = await params;
  tripId = Number(tripId);
  try {
    const trip = await caller.tours.getTrip({ tripId });
    const title = (trip as any)?.title || 'Trip Details';
    const description = (trip as any)?.description?.substring(0, 160) || "Join this exciting trip with Stranger Together.";
    const imageUrl = (trip as any)?.imageUrl || (trip as any)?.image;

    return {
      title: `${title} | Stranger Together`,
      description,
      alternates: {
        canonical: `/trip/${tripId}`,
      },
      openGraph: {
        title: `${title} | Stranger Together`,
        description,
        images: imageUrl ? [{ url: imageUrl }] : [],
      },
    };
  } catch (error) {
    return {
      title: "Trip Details | Stranger Together",
    };
  }
}

import { TripFullPageSkeleton } from "@/modules/Tours/component/TripSkeletons";

async function page({ params, searchParams }: PageProps) {
  let { tripId } = await params;
  let { tourId } = await searchParams;
  tripId = Number(tripId);
  tourId = Number(tourId);

  

const safeTourId =
  typeof tourId === "number" && !Number.isNaN(tourId)
    ? tourId
    : undefined;

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.tours.getTrip.queryOptions({ tripId: tripId }),
  );
  void queryClient.prefetchQuery(
    trpc.tours.getItinerary.queryOptions({ tripId: tripId }),
  );
  void queryClient.prefetchQuery(trpc.tours.trandingTrips.queryOptions());
  console.log(safeTourId,56)
  void queryClient.prefetchQuery(trpc.tours.getFaq.queryOptions({tourId:safeTourId}));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<TripFullPageSkeleton />}>
        <TripsView tourId={safeTourId} tripId={tripId} />
      </Suspense>
    </HydrationBoundary>
  );
}

export default page;
