// "use client";

// import { Suspense } from "react";
// import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
// import { useTRPC } from "@/trpc/client";
// import dynamic from "next/dynamic";
// import Explore from "../component/Explore";
// import Thumbnail from "../component/Thumbnail";
// import BookGuaranteed from "../component/BookGuaranteed";
// import MarqueeBar from "@/component/MarqueeBar";
// import ReasonWithUs from "../component/ReasonWithUs";
// // import TrendingDestination from "../component/TrendingDestination"; // Removed to avoid conflict with dynamic import

// import { DestinationSkeleton, UpcomingTripsSkeleton, VibeWithUsSkeleton, TrendingDestinationSkeleton } from "../component/HomeSkeletons";

// const Banner = dynamic(() => import("../component/Banner"), {
//   ssr: false,
// });

// const Destination = dynamic(() => import("../component/Destination"), {
//   loading: () => <DestinationSkeleton />,
// });

// const UpcomingTrips = dynamic(() => import("@/component/UpcomingTrips"), {
//   loading: () => <UpcomingTripsSkeleton />,
// });

// const VibeWithUs = dynamic(() => import("../component/VibeWithUs"), {
//   loading: () => <VibeWithUsSkeleton />,
// });

// const TrendingDestination = dynamic(() => import("../component/TrendingDestination"), {
//   loading: () => <TrendingDestinationSkeleton />,
// });

// function HomeView() {
//   return (
//     <section className="flex flex-col items-center relative">
//       <Banner />
//       <MarqueeBar />

//       <Suspense fallback={<DestinationSkeleton />}>
//         <Destination />
//       </Suspense>
//       <Explore />
//       <Thumbnail />

//       <Suspense fallback={<UpcomingTripsSkeleton />}>
//         <UpcomingTrips />
//       </Suspense>

//       <BookGuaranteed />
    
//       <Suspense fallback={<VibeWithUsSkeleton />}>
//         <VibeWithUs />
//       </Suspense>
//       <ReasonWithUs />
      
//       <Suspense fallback={<TrendingDestinationSkeleton />}>
//         <TrendingDestination />
//       </Suspense>
//     </section>
//   );
// }

// export default HomeView;

"use client";

import { Suspense } from "react";
import { useTRPC } from "@/trpc/client";
import dynamic from "next/dynamic";
import Explore from "../component/Explore";
import Thumbnail from "../component/Thumbnail";
import BookGuaranteed from "../component/BookGuaranteed";
import MarqueeBar from "@/component/MarqueeBar";
import ReasonWithUs from "../component/ReasonWithUs";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import {
  DestinationSkeleton,
  UpcomingTripsSkeleton,
  VibeWithUsSkeleton,
  TrendingDestinationSkeleton,
} from "../component/HomeSkeletons";

const Banner = dynamic(() => import("../component/Banner"), { ssr: false });

const Destination = dynamic(() => import("../component/Destination"), {
  loading: () => <DestinationSkeleton />,
});

const UpcomingTrips = dynamic(() => import("@/component/UpcomingTrips"), {
  loading: () => <UpcomingTripsSkeleton />,
});

const VibeWithUs = dynamic(() => import("../component/VibeWithUs"), {
  loading: () => <VibeWithUsSkeleton />,
});

const TrendingDestination = dynamic(
  () => import("../component/TrendingDestination"),
  { loading: () => <TrendingDestinationSkeleton /> }
);

// ── Reusable scroll-reveal wrapper ──────────────────────────────────────────
// Each section fades up when it enters the viewport. `once: true` so it
// only plays on first reveal — not every time the user scrolls back up.

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.75, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

// ────────────────────────────────────────────────────────────────────────────

function HomeView() {
  return (
    <section className="flex flex-col items-center relative">
      {/* Banner has its own entrance animations — no wrapper needed */}
      <Banner />

      <Reveal className="w-full">
        <MarqueeBar />
      </Reveal>

      <Reveal className="w-full">
        <Suspense fallback={<DestinationSkeleton />}>
          <Destination />
        </Suspense>
      </Reveal>

      <Reveal className="w-full">
        <Explore />
      </Reveal>

      <Reveal className="w-full">
        <Thumbnail />
      </Reveal>

      <Reveal className="w-full">
        <Suspense fallback={<UpcomingTripsSkeleton />}>
          <UpcomingTrips />
        </Suspense>
      </Reveal>

      <Reveal className="w-full">
        <BookGuaranteed />
      </Reveal>

      <Reveal className="w-full">
        <Suspense fallback={<VibeWithUsSkeleton />}>
          <VibeWithUs />
        </Suspense>
      </Reveal>
      
      <Reveal className="w-full">
        <ReasonWithUs />
      </Reveal>

      <Reveal className="w-full">
        <Suspense fallback={<TrendingDestinationSkeleton />}>
          <TrendingDestination />
        </Suspense>
      </Reveal>
    </section>
  );
}

export default HomeView;