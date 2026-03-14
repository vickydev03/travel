"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function Explore() {
  const router=useRouter()
  return (
    <section className="w-full px-4 py-12 md:py-20">
      <div
        style={{ maxWidth: "85rem" }}
        className="mx-auto grid  grid-cols-1 gap-16 md:gap-12 md:grid-cols-2 items-center"
      >
        {/* TEXT SECTION */}
        <div className="flex flex-col gap-4 text-center md:text-left md:px-4">
          <h3 className="text-sm tracking-widest text-gray-500 uppercase">
            Voices
          </h3>

          <h2 className="font-playfair text-2xl md:text-4xl leading-snug italic">
            Every journey leaves a mark on the soul.
          </h2>

          <p className="font-Cedarville text-gray-500 leading-7 max-w-xl mx-auto md:mx-0">
            “Travel isn’t about the destination — it’s about the stories you
            collect along the way, the people you meet, and the moments that
            stay with you long after the journey ends.”
          </p>

          <div className="flex justify-center md:justify-start">
            <Button onClick={() => router.push("/explore") } className="rounded-full px-6 py-2 text-sm tracking-wider border border-stone-500 text-stone-600 bg-transparent hover:bg-stone-100 transition">
              Explore
            </Button>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative flex justify-center items-center">
          {/* Back Image */}
          <div className="absolute -top-10 left-0 md:left-10 z-10">
            <Image
              src="/image/img_2.webp"
              alt="Travel moment"
              width={260}
              height={320}
              className="rounded-xl shadow-xl object-cover w-40 md:w-64"
            />
          </div>
          <div className="absolute -top-10 right-0 md:right-10 z-10">
            <Image
              src="/image/img_2.webp"
              alt="Travel moment"
              width={260}
              height={320}
              className="rounded-xl shadow-xl object-cover w-40 md:w-64"
            />
          </div>

          {/* Front Image */}
          <div className="relative z-20">
            <Image
              src="/image/img_1.webp"
              alt="Travel view"
              width={360}
              height={420}
              className="rounded-3xl shadow-2xl w-60 md:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
