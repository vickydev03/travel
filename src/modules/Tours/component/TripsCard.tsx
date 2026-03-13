import CustomSVG from "@/component/Svg";
import { getTripDuration } from "@/lib/tripDuration";
import { TripType, ExploreTripItem } from "@/trpc/type";
import Image from "next/image";
import React from "react";
import Link from "next/link";

function TripsCard({ trip }: { trip: TripType | ExploreTripItem }) {
  const hasDates = trip.TripDate && trip.TripDate.length > 0;
  const startDate = hasDates ? trip.TripDate[0].startDate : null;
  const endDate = hasDates ? trip.TripDate[0].endDate : null;
  const daysNight = startDate && endDate ? getTripDuration(startDate, endDate) : null;

  return (
    
      <div key={trip.id} className="w-full h-full">
        <div className="group relative w-full h-full aspect-[0.88/1] overflow-hidden rounded-2xl font-saira shadow-md transition-transform duration-300 md:aspect-[0.9/1] md:hover:scale-[1.03]">
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
                <span>₹{Math.round(trip.startingPrice).toLocaleString("en-IN")}</span>
                <span className="relative text-xs ">
                  ₹{Math.round(trip.startingPrice * 1.2).toLocaleString("en-IN")} 
                  <span className="absolute inset-0 h-0.5 w-full translate-y-1.5 bg-[#F61B00]"></span>
                </span>
                <span className="relative text-xs font-medium text-[#f61b00]">
                  ₹{Math.round(trip.startingPrice * 1.2 - trip.startingPrice).toLocaleString("en-IN")} off
                </span>
              </div>

              <div className="col-span-2 row-start-5 my-auto h-px bg-linear-to-r from-[#FDFDFD] via-[#EAEAEA] to-[#FDFDFD]"></div>
              <div className="col-span-2 row-start-6 text-sm ">
                <div className=" flex items-center gap-2 w-full h-full ">
                  {hasDates ? (
                    trip.TripDate.map((e) => (
                      <p key={e.id} className="line-clamp-1">
                        📆{" "}
                        {new Date(e.startDate).toLocaleDateString("en-GB", {
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
  );
}

export default TripsCard;
