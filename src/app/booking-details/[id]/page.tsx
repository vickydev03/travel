export const dynamic = "force-dynamic";
import BookingDetails from "@/modules/bookings/view/BookingDetails";
import TripsView from "@/modules/Tours/view/TripsView";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { BookingFullPageSkeleton } from "@/modules/bookings/component/BookingSkeletons";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Details | Stranger Together",
  robots: {
    index: false,
    follow: false,
  },
};


async function page({ params }: PageProps) {
  let { id } = await params;
  // tripId = Number(tripId);

  console.log(id)
  
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.booking.getBookingSession.queryOptions({ id: id })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<BookingFullPageSkeleton />}>
        <BookingDetails id={id}/>
      </Suspense>
    </HydrationBoundary>
  );
}

export default page;
