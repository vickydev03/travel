import { Button } from "@/components/ui/button";
import React from "react";

function TripMenuBtns() {
  let btnLInks = ["Itinerary", "Inclusion", "Costing", "Notes"];
  return (
    <div className="overflow-scroll px-5 md:px-20 scroll-smooth hide-scrollbar ">
      <div className=" w-full flex   gap-4">
        {btnLInks.map((link, i) => (
          <Button
            key={i}
            className="
            bg-transparent cursor-pointer font-semibold hover:bg-transparent
                px-4 py-2 rounded-full border text-sm
                border-stone-400 text-stone-600
                transition-all duration-200
                data-[state=active]:border-header
                data-[state=active]:text-header
                hover:border-stone-400
                
              "
          >
            {link}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default TripMenuBtns;
