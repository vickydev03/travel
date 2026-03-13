import Image from "next/image";
import React from "react";

function ItineraryImage({ image }: { image: string }) {
  return (
      <div className="px-5 md:px-0 md:pl-20 relative mt-5">
      <div className="relative  block aspect-[0.71/1] w-full md:aspect-[1.87/1]">
       <Image
          src={`${!image? image:"/image/img.webp"}`}
          alt="Itinerary image"
          fill
          sizes="(max-width: 768px) 100vw, 70vw"
          className="object-cover rounded-3xl object-right"
          quality={90}
          priority
        />
      </div>
    </div>
  );
}

export default ItineraryImage;
