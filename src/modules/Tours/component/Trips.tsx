import React from "react";
import { TripType } from "@/trpc/type";
import TripsCard from "./TripsCard";
import Link from "next/link";

interface Propstype {
  trips: TripType[];
  tourId:number;
}
function Trips({ trips,tourId }: Propstype) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 px-5 md:px-20 py-6">
      {trips.map((e) => (
        <Link key={e.id} href={`/trip/${e.id}?tourId=${tourId}`} className="block w-full">
          <TripsCard trip={e} />
        </Link>
      ))}
    </div>
  );
}

export default Trips;
