"use client";
import { Skeleton } from "@/components/ui/skeleton";
import AboutTour from "../component/AboutTour";
import TourBanner from "../component/TourBanner";
import InclusionAndExclusion from "../component/InclusionAndExclusion";
import ItinerarySection from "../component/ItinerarySection";
import TripDetails from "../component/TripDetails";
import ItineraryImage from "../component/ItineraryImage";
import Costing from "../component/Costing";
import Notes from "../component/Notes";
import TripMenuBtns from "../component/TripMenuBtns";
import TrendingDestination from "@/modules/home/component/TrendingDestination";
import ReviewSection from "@/component/ReviewSection";
import FaqSection from "@/component/FaqSection";
import { useTRPC } from "@/trpc/client";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { getTripDate } from "@/trpc/type";

import { TripDetailsSkeleton, ItinerarySkeleton, InclusionExclusionSkeleton } from "../component/TripSkeletons";
import { TourBannerSkeleton, AboutTourSkeleton, ReviewSkeleton, FaqSkeleton } from "../component/TourSkeletons";
import { TrendingDestinationSkeleton } from "@/modules/home/component/HomeSkeletons";
import { Suspense } from "react";

function TripsView({ tripId, tourId }: { tripId: number; tourId?: number }) {
  const { user, openLogin, setOpenLogin } = useAuth();
  const trpc = useTRPC();
  
  // We still need some top-level data for the sidebar state management
  // or we can wrap the sidebar in a container that handles it.
  
  return (
    <div className="w-full h-full space-y-4 relative pb-20 sm:pb-0">
       <Suspense fallback={<TourBannerSkeleton />}>
        <TripBannerContainer tripId={tripId} />
      </Suspense>

      <div className=" w-full h-full m-0">
        <div className="grid pt-4 md:pt-16 grid-cols-1 gap-4  md:grid-cols-12">
          <div className="  col-span-8  flex flex-col gap-8 md:gap-12">
            <Suspense fallback={<AboutTourSkeleton />}>
                <AboutTourContainer tripId={tripId} />
            </Suspense>
            
            <TripMenuBtns />
            
            <Suspense fallback={<Skeleton className="h-64 w-full rounded-2xl bg-gray-200" />}>
                <ItineraryImageContainer tripId={tripId} />
            </Suspense>

            <Suspense fallback={<ItinerarySkeleton />}>
                <ItinerarySection tripId={tripId} />
            </Suspense>

            <Suspense fallback={<InclusionExclusionSkeleton />}>
                <InclusionAndExclusion tripId={tripId} />
            </Suspense>
            
            <Suspense fallback={<Skeleton className="h-40 w-full rounded-2xl bg-gray-200" />}>
                <CostingContainer tripId={tripId} />
            </Suspense>

            <Suspense fallback={<Skeleton className="h-32 w-full rounded-2xl bg-gray-200" />}>
                <NotesContainer tripId={tripId} />
            </Suspense>
          </div>
          
          <div className=" hidden md:block  col-span-4 md:mr-20">
            <Suspense fallback={<TripDetailsSkeleton />}>
                <TripDetailsContainer tripId={tripId} />
            </Suspense>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6 ">
          <Suspense fallback={<TrendingDestinationSkeleton />}>
            <TrendingDestination />
          </Suspense>
          
          <Suspense fallback={<ReviewSkeleton />}>
            <ReviewSection /> {/* ReviewSectionAll fetches all reviews which is fine */}
          </Suspense>

          <Suspense fallback={<FaqSkeleton />}>
            <FaqSection tourId={tourId} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

function TripBannerContainer({ tripId }: { tripId: number }) {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.tours.getTrip.queryOptions({ tripId }));
    return <TourBanner thumnailImage={data.thumbnailImageUrl} thumnailvideo={data.thumbnailVideoUrl} />;
}

function AboutTourContainer({ tripId }: { tripId: number }) {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.tours.getTrip.queryOptions({ tripId }));
    if (!data) return null;
    return <AboutTour about={data.About} title={data.title} />;
}

function ItineraryImageContainer({ tripId }: { tripId: number }) {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.tours.getTrip.queryOptions({ tripId }));
    return <ItineraryImage image={data.ItineraryImageUrl} />;
}

function CostingContainer({ tripId }: { tripId: number }) {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.tours.getTrip.queryOptions({ tripId }));
    const hasDates = data.TripDate && data.TripDate.length > 0;
    if (!hasDates || !data.TripDate[0].pricing || data.TripDate[0].pricing.length === 0) {
      return <div className="text-center py-4 text-slate-500 text-sm">Pricing on Request</div>;
    }
    return <Costing costs={data.TripDate[0].pricing} />;
}

function NotesContainer({ tripId }: { tripId: number }) {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.tours.getTrip.queryOptions({ tripId }));
    return <Notes note={data.notes} />;
}

function TripDetailsContainer({ tripId }: { tripId: number }) {
    const trpc = useTRPC();
    const { user, openLogin, setOpenLogin } = useAuth();
    const router = useRouter();
    const { data } = useSuspenseQuery(trpc.tours.getTrip.queryOptions({ tripId }));
    
    const mutate = useMutation(
        trpc.booking.createBookingSession.mutationOptions({
          onSuccess: (data) => {
            router.push(`/booking-details/${data.id}`);
          },
          onError: () => {
            setOpenLogin(true);
          },
        }),
      );
      
    const hasDates = data.TripDate && data.TripDate.length > 0;
    const months = hasDates ? [...new Set(data.TripDate.map((d) => dayjs(d.startDate).format("MMM YY")))] : [];
    const [selectedMonth, setSelectedMonth] = useState<string | null>(months[0] ?? null);
    const filteredDates = hasDates ? data.TripDate.filter((d) => dayjs(d.startDate).format("MMM YY") === selectedMonth) : [];
    const [travellers, setTravellers] = useState(1);
    const [selectedDate, setSelectedDate] = useState<getTripDate | null>(filteredDates[0] ?? null);

    const handleBook = async () => {
        if (!user) {
          setOpenLogin(true);
          return;
        }
        if (!selectedDate) return;
        await mutate.mutateAsync({
          userId: user.id,
          tripId: tripId,
          tripDateId: selectedDate?.id,
          seatCount: travellers,
        });
    };

    return (
        <aside className="w-full h-full ">
            <TripDetails
                trip={data}
                handleBook={handleBook}
                selectedMonth={selectedMonth}
                setSelectedDate={setSelectedDate}
                months={months}
                travellers={travellers}
                filteredDates={filteredDates}
                setSelectedMonth={setSelectedMonth}
                selectedDate={selectedDate}
                setTravellers={setTravellers}
            />
        </aside>
    );
}

export default TripsView;
