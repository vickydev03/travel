"use client";
import React, { useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import { getAllTour } from "@/trpc/type";
import Link from "next/link";
type Tour = {
  id: number;
  title: string;
  slug: string;
  isActive: boolean;
  about: string;
  thumbnailImageUrl: string;
  thumbnailVideoUrl: string | null;
  cardImageUrl: string;
  tourTypeId: number;
  createdAt: Date;
  updatedAt: Date;
  tourType: {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    isActive: boolean;
    priority: number;
  };
  _count: {
    trips: number;
  };
};

type Props = {
  tours?: getAllTour;
};
function Destination({ tours: initialTours }: Props) {
  const trpc = useTRPC();
  
  const { data: tours } = useSuspenseQuery({
    ...trpc.tours.getAllTour.queryOptions(),
    initialData: initialTours,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const { data: tripTypes } = useSuspenseQuery(
    trpc.tours.getTripType.queryOptions()
  );

  const [tabValue, setTabsValue] = useState<string>("all");

  console.log(tabValue, 888);
  return (
    <div className="w-full md:mt-6">
      <div className="space-y-3">
        <div className="px-5 md:px-20">
          <h1 className="font-saira text-header font-medium text-lg md:text-3xl">
            Explore Destination
          </h1>
        </div>

        <Tabs
          onValueChange={(e) => {
            setTabsValue(e);
          }}
          defaultValue="all"
          className=" relative flex flex-col gap-3 md:gap-10"
        >
          <section className=" overflow-scroll scroll-smooth hide-scrollbar relative px-5 md:px-20">
            <TabsList className="flex gap-3 bg-transparent">
              <TabsTrigger
                value="all"
                className="
                px-4 py-2 rounded-full border text-sm font-medium
                border-stone-400 text-stone-600
                transition-all duration-200
                data-[state=active]:border-header
                data-[state=active]:text-header
                hover:border-stone-400
              "
              >
                🌏 All
              </TabsTrigger>

              {tripTypes.map((type) => (
                <TabsTrigger
                  key={type.id}
                  value={type.title}
                  className="
                px-4 py-2 rounded-full border text-sm font-medium
                border-stone-400 text-stone-600
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
                  className=""
                >
                  <SmoothSlider>
                    {tours.map((tour) => (
                      <Link key={tour.id} href={`/tour/${tour.id}`}>
                      <div >
                        <div className="flex flex-col items-start gap-2 shrink w-16 md:w-30 select-none">
                          <div className="aspect-[0.83/1] md:aspect-[0.8/1] relative overflow-hidden rounded-[100px] ">
                            <Image
                              unoptimized
                              src={tour.thumbnailImageUrl}
                              height={100}
                              className=" pointer-events-none select-none w-full h-full object-cover hover:scale-110  transition-transform duration-500 "
                              width={100}
                              alt={tour.title}
                            />
                          </div>
                          <div className="flex items-center justify-center w-full">
                            <h2 className="font-normal text-xs md:text-[16px] text-center text-secondary-text tracking-wide">
                              {tour.title}
                            </h2>
                          </div>
                        </div>
                      </div>
                      </Link>
                    ))}
                  </SmoothSlider>
                </TabsContent>
              </div>
            )}

            {/* FILTERED TOURS */}
            <div>
              {tripTypes.map((type) => (
                <TabsContent key={type.id} value={type.title}>
                  <SmoothSlider>
                    {tours
                      .filter((tour) => tour.tourType.id === type.id)
                      .map((tour) => (
                        <Link
                          key={tour.id}
                          // className="bg"
                          href={`/tour/${tour.id}`}
                        >
                          <div>
                            <div className="flex flex-col items-start gap-2 shrink w-16 md:w-30 select-none">
                              <div className="aspect-[0.83/1] md:aspect-[0.8/1] relative overflow-hidden rounded-[100px] ">
                                <Image
                                  unoptimized
                                  src={tour.thumbnailImageUrl}
                                  height={100}
                                  className=" pointer-events-none select-none w-full h-full object-cover hover:scale-110  transition-transform duration-500 "
                                  width={100}
                                  alt={tour.title}
                                />
                              </div>
                              <div className="flex items-center justify-center w-full">
                                <h2 className="font-normal text-xs md:text-[16px] text-center text-secondary-text tracking-wide">
                                  {tour.title}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </SmoothSlider>
                </TabsContent>
              ))}
            </div>
          </>
        </Tabs>
      </div>
    </div>
  );
}

export default Destination;

function SmoothSlider({ children }: { children: React.ReactNode }) {
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
        className=" cursor-grab grid auto-cols-max grid-flow-col grid-rows-2 gap-4 md:gap-6 overflow-scroll hide-scrollbar px-5 md:px-20"
      >
        {children}
      </div>
    </div>
  );
}
