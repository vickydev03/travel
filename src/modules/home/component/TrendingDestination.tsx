import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { trandingTrips } from "@/trpc/type";
import Image from "next/image";
import React from "react";
import Link from "next/link";

function TrendingDestination({ trips: initialTrips }: { trips?: trandingTrips }) {
  const trpc = useTRPC();

  const { data: trips } = useSuspenseQuery({
    ...trpc.tours.trandingTrips.queryOptions(),
    initialData: initialTrips,
  });

  if (trips.length == 0) return null;

  return (
    <div className="flex w-full h-full py-10">
      <div className="px-5 md:px-20 space-y-6 w-full h-full">
        <div className="flex justify-between items-center">
          <h1 className="font-saira text-header font-medium tracking-tight text-[20px] md:text-3xl">
            Trending Destinations
          </h1>
        </div>

        <div className="w-full">
          <div className="overflow-scroll hide-scrollbar flex gap-4 md:gap-6">
            {trips.map((trip) => (
              <Link key={trip.id} href={`/trip/${trip.id}`}>
                <div className="relative w-[16.5rem] flex-shrink-0 cursor-pointer md:w-[18.875rem]">
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                    <div className="z-40 absolute inset-0 bg-black/10" />
                    <Image
                      unoptimized
                      src={trip.cardImageUrl}
                      height={100}
                      className="pointer-events-none select-none w-full h-full object-cover hover:scale-110 transition-transform duration-500 absolute inset-0"
                      width={100}
                      alt={trip.title}
                    />
                    <div className="py-4 px-2 absolute bottom-0 w-full z-50">
                      <h3 className="text-base font-medium text-white md:text-xl">
                        {trip.title}
                      </h3>
                      <p className="text-xs font-medium text-[#eaeaea] md:text-sm">
                        Starting Price ₹{trip.startingPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingDestination;