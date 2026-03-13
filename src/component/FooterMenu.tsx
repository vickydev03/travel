import React from "react";
import { Search } from "lucide-react";
import { House } from "lucide-react";
import { Play } from "lucide-react";
import Image from "next/image";

function FooterMenu() {
  return (
    <div className="bg-white w-full h-full md:hidden px-4 py-3 rounded-lg">
      <div className=" grid grid-cols-5 items-center place-content-center">
        <div className="home justify-self-center">
          <House className="size-6" />
        </div>

        <div className="search justify-self-center">
          <Search className="size-6" />
        </div>
        <div className="justify-self-center">
          <h4 className="font-saira text-lg font-medium tracking-widest ">
            Trips
          </h4>
        </div>

        <div className="reels justify-self-center">
          <Play className="size-6" />
        </div>
        <div className="whatsapp justify-self-center">
          <Image
            className="object-cover w-8"
            src="/icon/whatsapp.svg"
            alt="whatsapp-icon"
            height={100}
            width={100}
          />
        </div>
      </div>
    </div>
  );
}

export default FooterMenu;
