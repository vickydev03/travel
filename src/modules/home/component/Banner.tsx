"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  type Variants,
} from "framer-motion";

const WORDS = ["Extraordinary", "Unforgettable", "Remarkable"];

// Typed as a const tuple so TS accepts it as Easing (not just number[])
const SPRING: [number, number, number, number] = [0.16, 1, 0.3, 1];

function Banner() {
  const { scrollY } = useScroll();

  const videoY = useTransform(scrollY, [0, 600], [0, 120]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.35, 0.72]);
  const contentY = useTransform(scrollY, [0, 400], [0, -60]);
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.13, delayChildren: 0.4 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 36 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: SPRING },
    },
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 1.1, ease: "easeOut" as const },
    },
  };

  const lineGrow: Variants = {
    hidden: { scaleX: 0, originX: 0 },
    show: {
      scaleX: 1,
      transition: { duration: 1.2, ease: SPRING, delay: 0.6 },
    },
  };

  const wordVariants: Variants = {
    enter: { opacity: 0, y: 20, filter: "blur(8px)" },
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: SPRING },
    },
    exit: {
      opacity: 0,
      y: -16,
      filter: "blur(6px)",
      transition: { duration: 0.45, ease: "easeIn" as const },
    },
  };

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100svh", minHeight: 560 }}>

      {/* ── VIDEO with parallax ── */}
      <motion.div
        className="absolute inset-0 w-full"
        style={{ y: videoY, height: "115%", top: "-7.5%" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/video-1.webm" type="video/webm" />
        </video>
      </motion.div>

      {/* ── Gradient overlay ── */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(4,14,11,0.1) 0%, rgba(4,14,11,0.55) 55%, rgba(4,14,11,0.92) 100%)",
          opacity: overlayOpacity,
        }}
      />

      {/* ── Grain texture ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
      />

      {/* ── CONTENT ── */}
      <motion.div
        className="absolute inset-0 z-20 flex flex-col justify-end pb-14 md:pb-20 px-6 md:px-16 lg:px-24"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeIn} className="flex items-center gap-3 mb-5 md:mb-7">
            <motion.span
              variants={lineGrow}
              className="block h-px w-10 bg-amber-400"
            />
            <span
              className="text-amber-400 text-xs md:text-sm font-medium tracking-[0.2em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Premium Journeys
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-white leading-[1.05] tracking-tight mb-2"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
              fontWeight: 600,
            }}
          >
            Make Every Trip
          </motion.h1>

          {/* Animated cycling word */}
          <div
            className="overflow-hidden mb-6 md:mb-8"
            style={{ height: "clamp(3.2rem, 8.5vw, 6.8rem)" }}
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={WORDS[wordIndex]}
                variants={wordVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="leading-[1.05] tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
                  fontWeight: 600,
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, #c8a96e 0%, #f0d48a 50%, #c8a96e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {WORDS[wordIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-white/60 mb-8 md:mb-10 max-w-md leading-relaxed"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            }}
          >
            Hand-curated group tours and private escapes crafted for
            travellers who demand more than the ordinary.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            {/* Primary CTA */}
            <motion.a
              href="/explore"
              className="relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-[#0d1f1a]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: "linear-gradient(135deg, #c8a96e, #f0d48a, #c8a96e)",
                backgroundSize: "200% 100%",
                letterSpacing: "0.03em",
              }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Trips
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </motion.a>

            {/* Ghost CTA */}
            <motion.a
              href="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white border border-white/30"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.03em",
                backdropFilter: "blur(8px)",
                background: "rgba(255,255,255,0.06)",
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
              whileTap={{ scale: 0.97 }}
            >
              Talk to Us
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2"
        >
          <span
            className="text-white/35 text-[10px] tracking-[0.18em] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif", writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
          <motion.div
            className="w-px bg-white/20 origin-top"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ height: 48 }}
          />
        </motion.div>
      </motion.div>

      {/* ── Bottom fade into page ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-30 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #f5f2ed)",
        }}
      />
    </section>
  );
}

export default Banner;