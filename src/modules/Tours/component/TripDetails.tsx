import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getTripDate, trip as TripType } from "@/trpc/type";
import React, { useEffect, useState } from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import dayjs from "dayjs";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface TripDetailstype{
  trip?: TripType;
  tripId?: number;
  handleBook:()=>void,
  selectedMonth:string |null,
  setSelectedMonth:(val:string|null)=>void,
  months:string[],
  selectedDate:getTripDate|null,
  setSelectedDate:(val:getTripDate|null)=>void,
  filteredDates:getTripDate[],
  travellers:number,
  setTravellers:(num:number)=>void,
}

function TripDetails({ trip: initialTrip, tripId, handleBook, selectedMonth ,setSelectedMonth,months,selectedDate,setSelectedDate,filteredDates,travellers,setTravellers}: TripDetailstype) {
  const trpc = useTRPC();

  const { data: trip } = useSuspenseQuery({
    ...trpc.tours.getTrip.queryOptions({ tripId: tripId as number }),
    initialData: initialTrip,
  });

  if (!trip) return null;
 


  useEffect(() => {
    if (!selectedMonth && months.length > 0) {
      setSelectedMonth(months[0]);
    }
  }, [months, selectedMonth]);

 
  // : trip.TripDate;
  useEffect(() => {
    if (!selectedDate &&filteredDates.length>0 && filteredDates.length > 0) {
      setSelectedDate(filteredDates[0]);
    }
  }, [filteredDates, selectedDate]);
  
  
  console.log(filteredDates,78848)
  return (
    <div className=" sticky top-44 ">
      <div className="flex w-full p-6  flex-col gap-5 rounded-2xl  border border-[#D8D8D8] bg-white  shadow-md">
        <div className="flex flex-col  font-medium">
          <div className="text-sm">Trip Starts From</div>
          <div className="flex gap-2 lg:items-end  lg:justify-between">
            <div className="flex items-end gap-2 md:flex-col lg:flex-row">
              <div className="flex items-center gap-2 md:flex-col lg:flex-row">
                <span className=" text-[#008342] text-[1.75rem]">
                  ₹{trip.startingPrice}
                </span>
                <span className="flex gap-1">
                  <span className="text-[#5A5A5A] line-through decoration-red-500 decoration-2">
                    ₹ {trip.startingPrice * 1.3}
                  </span>
                  <span className="text-base text-[#F61B00]">
                    ₹{trip.startingPrice * 1.3 - trip.startingPrice}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="text-sm font-medium text-gray-500">Per Person</div>
        </div>
        {months.length > 0 ? (
          <>
            <div className="flex justify-between items-center">
              <p>📅 Trip Dates</p>
              <Combobox value={selectedMonth} onValueChange={setSelectedMonth} items={months}>
                <ComboboxInput
                  className=" border border-black rounded-full  max-w-28"
                  placeholder="Select a date"
                />
                <ComboboxContent className="rounded-full border border-[#eee]">
                  <ComboboxEmpty>No items found.</ComboboxEmpty>
                  <ComboboxList>
                    {(item) => (
                      <ComboboxItem
                        className=" hover:opacity-100"
                        key={item}
                        value={item}
                      >
                        {item}
                      </ComboboxItem>
                    )}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </div>
            <div className="flex flex-col gap-3">
            
            {
              [...filteredDates].map((date) => (
                <div onClick={()=>setSelectedDate(date)} key={date.id} className="flex items-center gap-2 justify-between cursor-pointer">
                  <div className="flex flex-col gap-2">
                  
                      <h3 className="text-black font-medium">{dayjs(date.startDate).format("DD MMM YYYY")}</h3>

                    <p className="text-stone-800 capitalize text-xs">
                      Starting ₹{" "}
                      {date.pricing.length > 0
                        ? Math.min(...date.pricing.map((p) => p.price))
                        : "N/A"}{" "}
                      /Person{" "}
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-full border-black border  " role="button">
                    {selectedDate?.startDate === date.startDate && (
                      <Image src={"/icon/check.svg"} height={100} width={100} alt="check" />
                    )}
                  </div>
                </div>
              ))
            }
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-2 py-4">
            <p className="text-sm font-medium text-[#008342]">📅 Date on Request</p>
            <p className="text-xs text-stone-500">Contact us for available dates</p>
          </div>
        )}
        <div className="flex items-center justify-between">
          <p className="font-medium  text-lg tracking-wide">🧑‍🦱 No. of Travellers</p>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-full border border-black flex items-center justify-center cursor-pointer" onClick={()=>travellers>1 && setTravellers(travellers-1)}>-</button>
            <span className="w-8 h-8 rounded-full border border-black flex items-center justify-center">{travellers}</span>
            <button className="w-8 h-8 rounded-full border border-black flex items-center justify-center cursor-pointer" onClick={()=>setTravellers(travellers+1)}>+</button>
          </div>
        </div>
        <div className="flex items-center justify-between px-4">
          <Button onClick={handleBook} className=" gold-gradient-soft w-full  rounded-full py-5 cursor-pointer">Book Now</Button>
        </div>
        <div className="flex items-center gap-2">
          Any Doubt? <Button className="border bg-white  text-black hover:bg-white/50 border-black/20 rounded-full py-1 cursor-pointer font-medium flex items-center gap-2"> <Image src={"/icon/whatsapp.svg"} height={25} width={25} alt="whatsapp" /> Whatsapp</Button>
        </div>
      </div>
    </div>
  );
}

export default TripDetails;
