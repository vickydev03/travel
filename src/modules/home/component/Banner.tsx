import React from "react";

function Banner() {
  return (
    <div className="w-full h-auto  ">
      <div className="relative">
        <div className=" h-full">
          <div className="absolute inset-0  grayscale-100 top-0 w-full h-full" />
          <video
            autoPlay
            loop
            muted
            className="h-full object-cover aspect-video w-full  max-h-128 "
          >
            <source src="/video/video-1.webm" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Banner;
