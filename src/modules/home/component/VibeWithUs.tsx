import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { vibeUsVideo } from "@/trpc/type";
import React from "react";

interface types {
  videos?: vibeUsVideo;
}
function VibeWithUs({ videos: initialVideos }: types) {
  const trpc = useTRPC();

  const { data: vibeVideo } = useSuspenseQuery({
    ...trpc.home.getVibeVideo.queryOptions(),
    initialData: initialVideos ? { videos: initialVideos, total: initialVideos.length } : undefined,
  });

  const videos = vibeVideo.videos;
  return (
    <div className="w-full py-10">
      <h2 className="text-center capitalize  font-playfair text-xl md:text-2xl font-medium italic mb-6">
        Vibe with us
      </h2>
    
      <div className=" flex items-center justify-center">
        <div className="overflow-scroll hide-scrollbar px-5 md:px-20">
          <div className=" hide-scrollbar relative  h-full max-w-8xl  flex items-center justify-between flex-wsrap gap-4 shrink-0 cursor-grab transition-all duration-1000 " 
          // style={{transform: "translate3d(-299.43px, 0px, 0px);"}}
          >
            {videos.map((e) => (
              <div key={e.id} className="relative w-52 shrink-0 md:w-75.5">
                <div className="relative h-full max-h-[295px] w-full overflow-hidden rounded-3xl shrink-0">
                  <video
                    muted
                    autoPlay
                    loop
                    disablePictureInPicture
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={e.url} />
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VibeWithUs;

// function SmoothSlider({ children }: { children: React.ReactNode }) {
//   const trackRef = useRef<HTMLDivElement>(null);

//   const isDragging = useRef(false);
//   const startX = useRef(0);
//   const lastX = useRef(0);
//   const translateX = useRef(0);
//   const velocity = useRef(0);
//   const lastTime = useRef(0);

//   const lockDirection = useRef<"x" | "y" | null>(null);

//   const getBounds = () => {
//     const container = trackRef.current!.parentElement!;
//     const min =
//       container.offsetWidth - trackRef.current!.scrollWidth;
//     return { min, max: 0 };
//   };

//   const getCardWidth = () => {
//     const first = trackRef.current?.children[0] as HTMLElement;
//     if (!first) return 280;
//     const style = getComputedStyle(first);
//     return (
//       first.offsetWidth + parseFloat(style.marginRight || "0")
//     );
//   };

//   const onPointerDown = (e: React.PointerEvent) => {
//     isDragging.current = true;
//     startX.current = e.clientX;
//     lastX.current = e.clientX;
//     velocity.current = 0;
//     lockDirection.current = null;
//     lastTime.current = performance.now();

//     trackRef.current!.style.transition = "none";
//     trackRef.current!.setPointerCapture(e.pointerId);
//   };

//   const onPointerMove = (e: React.PointerEvent) => {
//     if (!isDragging.current) return;

//     const dx = e.clientX - lastX.current;
//     const dy = e.clientY - (e as any).clientY;

//     if (!lockDirection.current) {
//       lockDirection.current =
//         Math.abs(dx) > Math.abs(dy) ? "x" : "y";
//     }

//     if (lockDirection.current !== "x") return;

//     const now = performance.now();
//     velocity.current = dx / (now - lastTime.current);
//     lastTime.current = now;

//     let next = translateX.current + dx;

//     const { min, max } = getBounds();

//     // rubber band effect
//     if (next > max) next = max + (next - max) * 0.3;
//     if (next < min) next = min + (next - min) * 0.3;

//     translateX.current = next;
//     lastX.current = e.clientX;

//     trackRef.current!.style.transform = `translateX(${next}px)`;
//   };

//   const onPointerUp = () => {
//     if (!isDragging.current) return;
//     isDragging.current = false;

//     const cardWidth = getCardWidth();
//     const { min, max } = getBounds();

//     let projected =
//       translateX.current + velocity.current * 200;

//     projected = Math.max(min, Math.min(projected, max));

//     const snapIndex = Math.round(Math.abs(projected) / cardWidth);
//     const finalX = -snapIndex * cardWidth;

//     translateX.current = finalX;

//     trackRef.current!.style.transition =
//       "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
//     trackRef.current!.style.transform = `translateX(${finalX}px)`;
//   };

//   return (
//     <div className="w-full overflow-hidden touch-pan-y select-none">
//       <div
//         ref={trackRef}
//         onPointerDown={onPointerDown}
//         onPointerMove={onPointerMove}
//         onPointerUp={onPointerUp}
//         onPointerCancel={onPointerUp}
//         onPointerLeave={onPointerUp}
//         className="
//           flex gap-4 md:gap-6
//           px-4 md:px-20 py-8
//           cursor-grab active:cursor-grabbing
//           will-change-transform
//         "
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

// export default SmoothSlider;
