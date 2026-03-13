import Image from "next/image";
import React from "react";

function BottomImageBanner({ image }: { image: string }) {
  return (
    <div className=" relative w-full h-full flex items-center justify-center ">
      <div className="md:px-20    overflow-hidden">
        <Image
          src={image}
          alt="banner"
          height={100}
          width={100}
          // quality={100}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
          priority
          className="object-cover min-h-52 w-full h-full transition-all duration-500 md:rounded-xl"
        />
      </div>
    </div>
  );
}

export default BottomImageBanner;
