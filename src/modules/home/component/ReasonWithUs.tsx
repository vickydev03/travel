import Image from "next/image";
import React from "react";

function ReasonWithUs() {
  let items = [
    {
      icon: "/icon/bage.svg",
      title: "Solo is Safe",
      description:
        "Girlies, you're safe AF. No need to wait on fam or besties—just pack and go! Explore stress-free with 100% freedom!",
    },
    {
      icon: "/icon/green-flag.svg",
      title: "we are the greenest flag.",
      description:
        "We ensure safety with verified stays, reliable transport, and trained guides for a secure, comfy, and hassle-free trip.",
    },
    {
      icon: "/icon/captain.svg",
      title: "Our group captain are fine.",
      description:
        "Our awesome trip captains are part-guide, part-friend and full time vibe curators.",
    },
    {
      icon: "/icon/middleman.svg",
      title: "No kebab main haddi.",
      description:
        "No middlemen, no hidden fees. Enjoy direct bookings, lower costs, and personalized support for a seamless and affordable trip.",
    },
    {
      icon: "/icon/vibe.svg",
      title: "Vibe check comes the first.",
      description:
        "We customize your trips based on age groups, so you’re not stuck vibing to someone else’s playlist without permission.",
    },
  ];
  return (
    <div className="w-full flex-col gap-2 py-10 md:py-18  bg-[#F5F3FF] scalloped-mask flex items-center justify-center">
      <h2 className="font-semibold tracking-wider font-playfair text-lg md:text-3xl text-cener mb-5 mg:mg-8">
        Reason to make us your Travel Partner
      </h2>

      <div className="flex flex-wrap gap-4 items-center justify-center">
        {items.map((e) => (
          <div key={e.title} className="flex aspect-[3/1] h-28 items-center rounded-2xl bg-white px-3 md:h-42 md:min-w-96 md:basis-1/4 md:items-start md:px-6">
            <div className=" my-auto flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center md:h-[70px] md:w-[70px] relative">
              <Image
                src={e.icon}
                alt={e.title}
                height={100}
                width={100}
                className=" object-cover aspect-squasre"
              />
            </div>
            <div className="flex flex-col gap-3 p-3 md:gap-4 md:p-6">
              <h3 className="text-sm font-medium text-[#1F1F1F] md:text-base">
                {e.title}
              </h3>
              <p className="text-xs font-normal text-[#5A5A5A] md:text-sm">
                {e.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReasonWithUs;
