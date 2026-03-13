export const dynamic = "force-dynamic";
import ToursView from "@/modules/Tours/view/ToursView";
import { getQueryClient, trpc, caller } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { Metadata, ResolvingMetadata } from "next";

type PageProps = {
  params: Promise<{
    id: number;
  }>;
};

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  let { id } = await params;
  id = Number(id);
  try {
    const tour = await caller.tours.getTour({ id });
    const title = (tour as any)?.title || 'Tour Details';
    const description = (tour as any)?.description?.substring(0, 160) || "Explore this amazing tour with Stranger Together.";
    const imageUrl = (tour as any)?.imageUrl || (tour as any)?.image;
    
    return {
      title: `${title} | Stranger Together`,
      description,
      alternates: {
        canonical: `/tour/${id}`,
      },
      openGraph: {
        title: `${title} | Stranger Together`,
        description,
        images: imageUrl ? [{ url: imageUrl }] : [],
      },
    };
  } catch (error) {
    return {
      title: "Tour Details | Stranger Together",
    };
  }
}

export default async function Page({ params }: PageProps) {
  let { id } = await params;
  id=Number(id)
  console.log(typeof Number(id),"555");

  const queryClient = getQueryClient();
    void queryClient.prefetchQuery(trpc.tours.getTour.queryOptions({id:Number(id)}));
    void queryClient.prefetchQuery(trpc.tours.trandingTrips.queryOptions());
    void queryClient.prefetchQuery(trpc.tours.getReviews.queryOptions({tourId:Number(id)}))
    void queryClient.prefetchQuery(trpc.tours.getFaq.queryOptions({tourId:Number(id)}))

  return  <HydrationBoundary state={dehydrate(queryClient)}>
    <ToursView id ={id}/>
  </HydrationBoundary>
}
