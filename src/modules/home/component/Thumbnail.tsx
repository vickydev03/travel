import Image from "next/image";
import React from "react";

function Thumbnail() {
  return (
    <div className="relative w-full">
      <div className="grid grid-cols-1 md:grid-cols-12">
        
        <div className=" order-2 md:order-1 relative w-full md:px-24 py-2  col-span-8">
          <div className="w-full aspect-video">
            <video
              autoPlay
              loop
              muted
              className="h-full w-full object-cover aspect-video  md:aspect-auto  "
            >
              <source src="/video/video-1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        {/* text section */}
        <div className="md:order-1 py-2 px-4 md:px-1 md:pr-20 w-full col-span-4">
          <div className="w-full space-y-4">
            <h3 className=" text-center md:text-left font-medium font-playfair tracking-wider text-2xl italic">
              “Strangers today, stories forever — travel brings hearts
              together.”
            </h3>
            <p className="text-stone-500 tracking-widest text-[12px] md:text-sm leading-5 text-center md:text-left">
              At Stranger Together, we believe the most beautiful journeys begin
              with unfamiliar faces and end with unforgettable bonds. Travel
              with people you’ve never met, share laughter, stories, and moments
              that turn strangers into lifelong friends. Every trip is more than
              a destination — it’s a connection, a memory, a new chapter waiting
              to be written together.
            </p>
            <p className="text-stone-500 traking-widest text-sm text-center md:inline-block relative before-animation">
              “Meet as strangers, travel as family.”
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Thumbnail;
