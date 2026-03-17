import { useMobile } from "@/hooks/useMobile";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

interface PropsType {
  thumnailImage?: string;
  thumnailvideo?: string | null;
  tourId?: number;
}

function TourBanner({ thumnailImage: initialImage, thumnailvideo: initialVideo, tourId }: PropsType) {
  const trpc = useTRPC();
  
  const { data } = useSuspenseQuery({
    ...trpc.tours.getTour.queryOptions({ id: tourId as number }),
    initialData: initialImage ? { thumbnailImageUrl: initialImage, thumbnailVideoUrl: initialVideo } as any : undefined,
  });

  const thumnailImage = data?.thumbnailImageUrl || initialImage;
  const thumnailvideo = data?.thumbnailVideoUrl !== undefined ? data.thumbnailVideoUrl : initialVideo;
  const isMobile = useMobile();

  if (thumnailvideo){
    return <div className="w-full h-full">
        {/* <div className="absolute inset-0  grayscale-100 top-0 w-full h-full" /> */}
        <div className="relative  overflow-hidden">
          <div className=" h-full">
            <video
            preload="metadata"
            // poster={thumnailImage}
              autoPlay
              loop
              muted
              className="h-full min-h-[500px] max-h-[500px] maxheight  object-cover  w-full"
            >
              <source src={thumnailvideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
  }

  if (!isMobile || !thumnailvideo) {
    return (
      <div className="w-full h-auto  ">
        <div className="relative">
          <div className=" h-full">
            <div className="absolute inset-0  grayscale-100 top-0 w-full h-full" />
            <Image
              height={100}
              width={100}
              quality={100}
              sizes="100vw"
              alt={"image"}
              src={thumnailImage || ""}
              className="h-full object-cover aspect-video w-full  max-h-128"
              unoptimized
            />
            {/* <video
            autoPlay
            loop
            muted
            className="h-full object-cover aspect-video w-full  max-h-128 "
          >
            <source src="/video/video-1.mp4" type="video/mp4" />
          </video> */}
          </div>
        </div>
      </div>
    );
  } 
}

export default TourBanner;
