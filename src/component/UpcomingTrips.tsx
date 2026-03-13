import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { getAllTour, UpcomingTrips as upcomingtripsTypes } from "@/trpc/type";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { getTripDuration } from "@/lib/tripDuration";
import CustomSVG from "./Svg";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import Link from "next/link";

type Props = {
  tours?: getAllTour;
  trips?: upcomingtripsTypes;
};
function UpcomingTrips({ tours: initialTours, trips: initialTrips }: Props) {
  const trpc = useTRPC();

  const { data: tours } = useSuspenseQuery({
    ...trpc.tours.getAllTour.queryOptions(),
    initialData: initialTours,
  });

  const { data: trips } = useSuspenseQuery({
    ...trpc.tours.upcomingTrips.queryOptions(),
    initialData: initialTrips,
  });

  const [tabValue, setTabsValue] = useState<string>("all");
  console.log(trips, 6678);
  return (
    <div className="w-full md:mt-6">
      <div className="space-y-3">
        <div className="px-5 md:px-20 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="font-saira text-header font-medium tracking-tight text-[20px] md:text-3xl">
              Upcoming Groups Tour
            </h1>
            <Button
              variant={"secondary"}
              className=" px-2 md:px-6 bg-transparent text-blue-600 rounded-full text-[12px] py-2  md:py-3 md:border md:border-stone-500 md:text-stone-600  font-saira"
            >
              See All
              <ArrowRight className="size-4 text-blue-600 cursor-pointer" />
            </Button>
          </div>
        </div>

        <Tabs
          onValueChange={(e) => {
            setTabsValue(e);
          }}
          defaultValue="all"
          className=" relative flex flex-col gap-3"
        >
          <section className=" overflow-scroll scroll-smooth hide-scrollbar relative px-5 md:px-20">
            <TabsList className="flex gap-3 bg-transparent">
              <TabsTrigger
                value="all"
                className="
                   px-4 py-2 font-saira rounded-full border text-sm font-medium
                   border-stone-400 text-stone-700 tracking-tighter
                   transition-all duration-200
                   data-[state=active]:border-header
                   data-[state=active]:text-header
                   hover:border-stone-400
                 "
              >
                🌏 All
              </TabsTrigger>

              {tours.slice(0, 7).map((type) => (
                <TabsTrigger
                  key={type.id}
                  value={type.title}
                  className="
                   px-4 py-2 font-saira rounded-full border text-sm font-medium
                   border-stone-400 text-stone-700 tracking-tighter
                   transition-all duration-200
                   data-[state=active]:border-header
                   data-[state=active]:text-header
                   hover:border-stone-400
                 "
                >
                  {type.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </section>
          <>
            {/* ALL TOURS */}
            {tabValue == "all" && (
              <div className=" hide-scrollbar h-fit">
                <TabsContent
                  value="all"
                  key={tabValue}
                  // className="grid auto-cols-max grid-flow-col grid-rows-2 gap-4 md:gap-6"
                  className=""
                  // style={{
                  //   transform: `translateX(${translateX}px)`,
                  //   transition: isDragging ? "none" : "transform 0.3s ease-out",
                  // }}
                >
                  <SmoothSlider>
                    {trips.map((trip) => {
                      const hasDates = trip.TripDate && trip.TripDate.length > 0;
                      const startDate = hasDates ? trip.TripDate[0].startDate : null;
                      const endDate = hasDates ? trip.TripDate[0].endDate : null;
                      const daysNight = startDate && endDate ? getTripDuration(startDate, endDate) : null;
                      return (
                        <Link key={trip.id} href={`/trip/${trip.id}`}>
                        <div >
                          <div className="group relative aspect-[0.854/1] w-[73.335vw] overflow-hidden rounded-2xl font-saira shadow-md transition-transform duration-300 md:aspect-[0.9/1] md:w-74 md:h-86 md:hover:scale-105">
                            <div className="absolute inset-0">
                              <Image
                                unoptimized
                                src={trip.cardImageUrl}
                                height={100}
                                className=" pointer-events-none select-none w-full h-full object-cover hover:scale-110  transition-transform duration-500 "
                                width={100}
                                alt={trip.title}
                              />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0">
                              <div className="relative cursor-pointer">
                                <CustomSVG className="w-full h-full" />
                                <div className=" absolute w-full h-full top-0 px-3 pb-3 pt-2 grid grid-cols-2 grid-rows-6">
                                  <p className=" text-[12px] col-span-1 row-start-1 line-clamp-1 text-xs font-normal text-[#5A5A5A] ">
                                    {daysNight ? `⌛ ${daysNight.nights} nights/${daysNight.days} days` : "⌛ —"}
                                  </p>

                                  <p className="col-span-2 row-span-2 row-start-2 line-clamp-2 text-base font-medium leading-tight text-[#1f1f1f]">
                                    {trip.title}
                                  </p>
                                  <div className="col-span-2 row-start-4 my-auto flex items-center gap-2 text-base font-medium text-[#1f1f1f] price font-saira">
                                    <span>₹{trip.startingPrice}</span>
                                    <span className="relative text-xs ">
                                      ₹{trip.startingPrice * 1.2}
                                      <span className="absolute inset-0 h-0.5 w-full translate-y-1.5 bg-[#F61B00]"></span>
                                    </span>
                                    <span className="relative text-xs font-medium text-[#f61b00]">
                                      ₹
                                      {trip.startingPrice * 1.2 -
                                        trip.startingPrice}{" "}
                                      off
                                    </span>
                                  </div>

                                  <div className="col-span-2 row-start-5 my-auto h-px bg-linear-to-r from-[#FDFDFD] via-[#EAEAEA] to-[#FDFDFD]"></div>
                                  <div className="col-span-2 row-start-6 text-sm ">
                                    <div className=" flex items-center gap-2 w-full h-full ">
                                      {hasDates ? (
                                        trip.TripDate.map((e) => (
                                          <p key={e.id} className="line-clamp-1">
                                            📆{" "}
                                            {new Date(
                                              e.startDate
                                            ).toLocaleDateString("en-GB", {
                                              day: "2-digit",
                                              month: "short",
                                            })}
                                          </p>
                                        ))
                                      ) : (
                                        <p className="text-xs font-medium text-[#008342]">📆 Date on Request</p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </Link>                
                      );
                    })}
                  </SmoothSlider>
                </TabsContent>
              </div>
            )}

            {/* FILTERED TOURS */}
            <div>
              {tours.map((type) => (
                <TabsContent
                  value={type.title}
                  key={type.id}
                  className=""
                >
                  <SmoothSlider>
                    {trips.filter((trip) => trip.tour?.title === type.title).map((trip) => {
                      const hasDates = trip.TripDate && trip.TripDate.length > 0;
                      const startDate = hasDates ? trip.TripDate[0].startDate : null;
                      const endDate = hasDates ? trip.TripDate[0].endDate : null;
                      const daysNight = startDate && endDate ? getTripDuration(startDate, endDate) : null;
                      return (
                          
                        <Link key={trip.id} href={`/trip/${trip.id}`}>
                        <div>
                          <div className="group relative aspect-[0.854/1] w-[73.335vw] overflow-hidden rounded-2xl font-saira shadow-md transition-transform duration-300 md:aspect-[0.9/1] md:w-74 md:h-86 md:hover:scale-105">
                            <div className="absolute inset-0">
                              <Image
                                unoptimized
                                src={trip.cardImageUrl}
                                height={100}
                                className=" pointer-events-none select-none w-full h-full object-cover hover:scale-110  transition-transform duration-500 "
                                width={100}
                                alt={trip.title}
                              />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0">
                              <div className="relative cursor-pointer">
                                <CustomSVG className="w-full h-full" />
                                <div className="  absolute w-full h-full top-0 px-3 pb-3 pt-2 grid grid-cols-2 grid-rows-6">
                                  <p className=" text-[12px] col-span-1 row-start-1 line-clamp-1 text-xs font-normal text-[#5A5A5A] ">
                                    {daysNight ? `⌛ ${daysNight.nights} nights/${daysNight.days} days` : "⌛ —"}
                                  </p>

                                  <p className="col-span-2 row-span-2 row-start-2 line-clamp-2 text-base font-medium leading-tight text-[#1f1f1f]">
                                    {trip.title}
                                  </p>
                                
                                  <div className="col-span-2 row-start-4 my-auto flex items-center gap-2 text-base font-medium text-[#1f1f1f] price font-saira">
                                    <span>₹{trip.startingPrice}</span>
                                    <span className="relative text-xs ">
                                      ₹{trip.startingPrice * 1.2}
                                      <span className="absolute inset-0 h-0.5 w-full translate-y-1.5 bg-[#F61B00]"></span>
                                    </span>
                                    <span className="relative text-xs font-medium text-[#f61b00]">
                                      ₹
                                      {trip.startingPrice * 1.2 -
                                        trip.startingPrice}{" "}
                                      off
                                    </span>
                                  </div>
                                  <div className="col-span-2 row-start-5 my-auto h-px bg-linear-to-r from-[#FDFDFD] via-[#EAEAEA] to-[#FDFDFD]"></div>
                                  <div className="col-span-2 row-start-6 text-sm ">
                                    <div className=" flex items-center gap-2 w-full h-full ">
                                      {hasDates ? (
                                        trip.TripDate.map((e) => (
                                          <p key={e.id} className="line-clamp-1">
                                            📆{" "}
                                            {new Date(
                                              e.startDate
                                            ).toLocaleDateString("en-GB", {
                                              day: "2-digit",
                                              month: "short",
                                            })}
                                          </p>
                                        ))
                                      ) : (
                                        <p className="text-xs font-medium text-[#008342]">📆 Date on Request</p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </Link>
                      );
                    })}
                  </SmoothSlider>
                </TabsContent>
              ))}
            </div>
          </>
        </Tabs>
      </div>
    </div>
    //  </div>
  );
}

export default UpcomingTrips;

export function SmoothSlider({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const lastTranslate = useRef(0);

  const CARD_WIDTH = 140; // adjust if needed

  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    trackRef.current!.style.transition = "none";
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;

    const dx = e.clientX - startX.current;
    const next = lastTranslate.current + dx;

    trackRef.current!.style.transform = `translateX(${next}px)`;
    currentX.current = next;
  };

  const onPointerUp = () => {
    if (!isDragging.current) return;

    isDragging.current = false;

    const container = trackRef.current!.parentElement!;
    const maxTranslate = 0;
    const minTranslate = container.offsetWidth - trackRef.current!.scrollWidth;

    // clamp
    let finalX = Math.max(
      minTranslate,
      Math.min(currentX.current, maxTranslate)
    );

    // SNAP to card
    const snapIndex = Math.round(Math.abs(finalX) / CARD_WIDTH);
    finalX = -snapIndex * CARD_WIDTH;

    trackRef.current!.style.transition = "transform 0.6s ease-out";
    trackRef.current!.style.transform = `translateX(${finalX}px)`;

    lastTranslate.current = finalX;
  };

  return (
    <div className="overflow-hidden ">
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className=" cursor-grab grid auto-cols-max grid-flow-col grid-rows-1 gap-4 md:gap-6 overflow-scroll hide-scrollbar px-5 md:px-20 py-8 transition-all duration-500"
      >
        {children}
      </div>
    </div>
  );
}
