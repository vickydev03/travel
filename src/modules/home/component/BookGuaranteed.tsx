import Image from "next/image";
import React from "react";

function BookGuaranteed() {
  const items = [
    {
      title: "Secure Your Spot by Paying 20% of the Trip",
      icon: "/icon/svg1.svg",
    },
    {
      title: "Book Your Trip on Easy Zero-Cost EMI",
      icon: "/icon/svg2.svg",
    },
    {
      title: "Free Travel Insurance on Every Trip",
      icon: "/icon/svg3.svg",
    },
    {
      title: "Reschedule at No Extra Charges",
      icon: "/icon/svg4.svg",
    },
    {
      title: "Free Cancellation on Group Trips ",
      icon: "/icon/svg5.svg",
    },
    {
      title: "24×7 Support & Trained Trip Captains",
      icon: "/icon/svg6.svg",
    },
  ];

  return (
    <section className="w-full bg-[#F6F4EE] py-6 lg:py-12">
      <h2 className="text-center font-playfair text-xl md:text-2xl font-medium italic mb-10">
        Stress-Free Booking. Guaranteed.
      </h2>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((e, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
            >
              {/* Icon */}
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src={e.icon}
                  alt={e.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <h3 className="text-sm font-medium text-[#1F1F1F] md:text-base">
                {e.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BookGuaranteed;
