import HomeView from "@/modules/home/view/HomeView";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { caller, getQueryClient, trpc } from "@/trpc/server";
import React, { Suspense } from "react";

import { HomeFullPageSkeleton } from "@/modules/home/component/HomeSkeletons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Stranger Together",
  description: "Welcome to Stranger Together. Explore our trending and upcoming trips.",
  alternates: {
    canonical: "/",
  },
};

async function page() {
  // console.log(77777)
  
  try {
    const user = await caller.user.profile();
    console.log(user)
  } catch (error) {
    console.log(error)
  }
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.tours.getTripType.queryOptions());
  void queryClient.prefetchQuery(trpc.tours.getAllTour.queryOptions());
  void queryClient.prefetchQuery(trpc.tours.upcomingTrips.queryOptions());
  void queryClient.prefetchQuery(trpc.home.getVibeVideo.queryOptions());
  void queryClient.prefetchQuery(trpc.tours.trandingTrips.queryOptions());
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Stranger Together',
    image: 'https://strangertogether.com/og-image.jpg',
    description: 'Welcome to Stranger Together. Group Tours & Weekend Getaways.',
    url: 'https://strangertogether.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    }
  };

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={<HomeFullPageSkeleton />}>
        <HomeView />
      </Suspense>
    </HydrationBoundary>
  );
}

export default page;
