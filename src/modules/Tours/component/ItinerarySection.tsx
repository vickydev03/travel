import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { getItinerary as ItineraryType } from "@/trpc/type";
import { DownloadIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function ItinerarySection({ itinerary: initialItinerary, tripId }: { itinerary?: ItineraryType[]; tripId?: number }) {
  const trpc = useTRPC();
  
  const { data: itinerary } = useSuspenseQuery({
    ...trpc.tours.getItinerary.queryOptions({ tripId: tripId as number }),
    initialData: initialItinerary,
  });

  if (!itinerary || itinerary.length === 0) return null;
  console.log(itinerary, 78787);
  return (
    <div className="w-full px-5 md:px-0 md:pl-20">
      <div className=" flex justify-between">
        <h3 className="font-saira text-2xl md:text-3xl">Itinerary Breakdown</h3>

        <Button className="hidden md:inline-flex gold-gradient-soft rounded-full capitalize font-semibold ">
          <DownloadIcon className="size-4 text-white " />
          download Itinerary
        </Button>
      </div>
      <div className="w-full mt-10">
        <Accordion
          type="single"
          collapsible
          defaultValue={itinerary[0].title}
          className="flex flex-col gap-4"
        >
          {itinerary.map((e, i) => (
            <AccordionItem key={i} value={e.title} className="border-[#eee]">
              <AccordionTrigger className="bg-[#f3f3f3] px-4 cursor-pointer text-black font-medium text-sm md:text-xl items-center  ">
                <div className="flex items-center gap-4">
                  <span className="border border-black rounded-full min-w-[50px] px-1 md:px-6 py-1">
                    Day {e.dayNumber}
                  </span>
                  {e.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-[#f3f3f3] px-4 text-black font-medium text-sm md:text-lg">
                <div
                  className="acc-content text-xs md:text-md px-4 md:px-6"
                  dangerouslySetInnerHTML={{ __html: e.description }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default ItinerarySection;
