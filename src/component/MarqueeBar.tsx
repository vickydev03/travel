import Image from "next/image";
import React from "react";

function MarqueeBar() {
  const items = [
    { title: "190k+ Community", icon: "/icon/insta.svg" },
    { title: "4.9 Rating", icon: "/icon/star.svg" },
    { title: "1000+ Successful Trip", icon: "/icon/trip.avif" },
    { title: "24×7 Travel Support", icon: "/icon/support.svg" },
    { title: "No Hidden Costs", icon: "/icon/price.svg" },
    { title: "Solo Friendly Trips", icon: "/icon/solo.svg" },
    { title: "Adventure • Fun • Memories", icon: "/icon/adventure.svg" },
  ];
  
  return (
    <div className="relative w-full overflow-hidden py-2 shadow-marquee">
      <div className="flex w-full animate-marquee gap-18">
        {[...items, ...items].map((e, i) => (
          <div key={i} className="flex items-center gap-2 whitespace-nowrap">
            <Image
              src={e.icon}
              width={30}
              height={30}
              alt={e.title}
              className="aspect-square"
            />
            <p className="font-mediums font-poppins tracking-wider text-sm md:text-lg text-header font-medium">
              {e.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarqueeBar;
