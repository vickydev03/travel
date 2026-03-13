"use client";
import CustomSVG from "@/component/Svg";
import { getTripDuration } from "@/lib/tripDuration";
import { ExploreTripItem } from "@/trpc/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ExploreTripCard({ trip }: { trip: ExploreTripItem }) {
  const hasDates = trip.TripDate && trip.TripDate.length > 0;
  const startDate = hasDates ? trip.TripDate[0].startDate : null;
  const endDate = hasDates ? trip.TripDate[0].endDate : null;
  const daysNight = startDate && endDate ? getTripDuration(startDate, endDate) : null;

  const originalPrice = Math.round(trip.startingPrice * 1.2);
  const discount = originalPrice - trip.startingPrice;

  return (
    <Link
      href={`/trip/${trip.id}?tourId=${trip.tourId}`}
      className="block group"
    >
      <div className="relative w-full aspect-[0.85/1] overflow-hidden rounded-2xl font-saira shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
        {/* Image */}
        <div className="relative w-full h-full">
          <Image
            unoptimized
            src={trip.cardImageUrl}
            fill
            className="pointer-events-none select-none object-cover transition-transform duration-500 group-hover:scale-110"
            alt={trip.title}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Tour type badge */}
          {trip.tour?.tourType && (
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-[#003022] shadow-sm">
                {trip.tour.tourType.title}
              </span>
            </div>
          )}

          {/* Featured badge */}
          {trip.isFeature && (
            <div className="absolute top-3 right-3 z-10">
              <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                ⭐ Featured
              </span>
            </div>
          )}
        </div>

        {/* Bottom info overlay using CustomSVG */}
        <div className="relative w-full h-full">
          <div className="absolute w-full -top-[50%] cursor-pointer">
            <CustomSVG className="w-full h-full" />
            <div className="absolute w-full h-full top-0 px-3 pb-3 pt-2 grid grid-cols-2 grid-rows-6">
              {/* Duration */}
              <p className="text-[12px] col-span-1 row-start-1 line-clamp-1 text-xs font-normal text-[#5A5A5A]">
                {daysNight ? `⌛ ${daysNight.nights}N/${daysNight.days}D` : "⌛ —"}
              </p>

              {/* Category badge */}
              {trip.category && (
                <p className="text-[11px] col-span-1 row-start-1 text-right line-clamp-1 font-normal text-[#003022]">
                  {trip.category.title}
                </p>
              )}

              {/* Title */}
              <p className="col-span-2 row-span-2 row-start-2 line-clamp-2 text-base font-medium leading-tight text-[#1f1f1f]">
                {trip.title}
              </p>

              {/* Pricing */}
              <div className="col-span-2 row-start-4 my-auto flex items-center gap-2 text-base font-medium text-[#1f1f1f] price font-saira">
                <span>₹{trip.startingPrice.toLocaleString("en-IN")}</span>
                <span className="relative text-xs">
                  ₹{originalPrice.toLocaleString("en-IN")}
                  <span className="absolute inset-0 h-0.5 w-full translate-y-1.5 bg-[#F61B00]"></span>
                </span>
                <span className="relative text-xs font-medium text-[#f61b00]">
                  ₹{discount.toLocaleString("en-IN")} off
                </span>
              </div>

              {/* Divider */}
              <div className="col-span-2 row-start-5 my-auto h-px bg-linear-to-r from-[#FDFDFD] via-[#EAEAEA] to-[#FDFDFD]"></div>

              {/* Dates */}
              <div className="col-span-2 row-start-6 text-sm">
                <div className="flex items-center gap-2 w-full h-full overflow-hidden">
                  {hasDates ? (
                    <>
                      {trip.TripDate.slice(0, 3).map((e) => (
                        <p key={e.id} className="line-clamp-1 whitespace-nowrap">
                          📆{" "}
                          {new Date(e.startDate).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                          })}
                        </p>
                      ))}
                      {trip.TripDate.length > 3 && (
                        <span className="text-xs text-[#5A5A5A]">
                          +{trip.TripDate.length - 3}
                        </span>
                      )}
                    </>
                  ) : (
                    <p className="text-xs font-medium text-[#008342]">📆 Date on Request</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ExploreTripCard;
