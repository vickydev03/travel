"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─── Scroll-reveal hook ─────────────────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Counter animation ──────────────────────────────────────── */
function AnimatedNumber({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useReveal(0.3);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number, startTime: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame((t) => step(t, startTime));
    };
    requestAnimationFrame((t) => step(t, t));
  }, [visible, target]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── Team data ──────────────────────────────────────────────── */
const TEAM = [
  {
    name: "Arjun Mehta",
    role: "Founder & Chief Adventure Officer",
    bio: "Left a cushy tech job to hike Hampta Pass alone. Never looked back. Now he designs trips so no one has to go it alone.",
    img: "/image/img_1.webp",
    trips: 84,
  },
  {
    name: "Priya Nair",
    role: "Head of Experiences",
    bio: "Former wildlife photographer. Knows every good trail in the Western Ghats and every bad chai stall to avoid.",
    img: "/image/img_2.webp",
    trips: 61,
  },
  {
    name: "Kabir Sinha",
    role: "Community & Connections",
    bio: "The reason strangers become friends on day one. Kabir runs the campfire games, the group chats, and the playlist.",
    img: "/image/img.webp",
    trips: 53,
  },
];

/* ─── Values data ────────────────────────────────────────────── */
const VALUES = [
  {
    num: "01",
    title: "Radical Openness",
    body: "Every trip starts with one rule: no cliques. We deliberately mix backgrounds, ages, and cities so the dinner table always surprises you.",
  },
  {
    num: "02",
    title: "Slow Over Fast",
    body: "We don't tick off check-lists. We linger at viewpoints, eat where locals eat, and let the itinerary breathe.",
  },
  {
    num: "03",
    title: "Leave it Better",
    body: "Every group carries out what they carry in — and a little more. We partner with local communities on every route we run.",
  },
  {
    num: "04",
    title: "Real Friendships",
    body: "Our alumni community is 4 000+ strong. People still WhatsApp after years. That's the metric we care about.",
  },
];

/* ─── Timeline data ──────────────────────────────────────────── */
const TIMELINE = [
  {
    year: "2019",
    event:
      "First trip — 9 strangers, Kedarkantha, -12°C. Six of them are still best friends.",
  },
  {
    year: "2020",
    event:
      "Lockdown couldn't stop us. We ran virtual hikes and trivia nights to keep the community alive.",
  },
  {
    year: "2021",
    event:
      "Hit 500 travelers. Opened our first Himalayan base camp partnership.",
  },
  {
    year: "2022",
    event: "Launched international trips. Bali batch sold out in 4 hours.",
  },
  {
    year: "2023",
    event:
      "2 000 travelers. Rated #1 group travel company in India on Google Reviews.",
  },
  {
    year: "2024",
    event:
      "150+ destinations, 12-person cap per trip, and still every seat fills up.",
  },
];

/* ═══════════════════════════════════════════════════════════════ */
export default function AboutUsView() {
  const heroReveal = useReveal(0.05);
  const missionReveal = useReveal(0.15);
  const valuesReveal = useReveal(0.1);
  const timelineReveal = useReveal(0.1);
  const teamReveal = useReveal(0.1);
  const statsReveal = useReveal(0.2);
  const ctaReveal = useReveal(0.2);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=Outfit:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .au-root {
          font-family: 'Outfit', sans-serif;
          background: #f5f0e8;
          color: #1c1712;
          overflow-x: hidden;
        }

        /* ── Reveal animation ── */
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
        }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1);
        }
        .reveal-left.visible { opacity: 1; transform: translateX(0); }
        .reveal-right {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1);
        }
        .reveal-right.visible { opacity: 1; transform: translateX(0); }

        /* ── Display font ── */
        .display { font-family: 'Cormorant Garamond', Georgia, serif; }

        /* ── HERO ── */
        .hero {
          position: relative;
          height: 100svh;
          min-height: 600px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero-bg img { object-fit: cover; object-position: center 30%; }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.05) 0%,
            rgba(0,0,0,0.15) 40%,
            rgba(0,0,0,0.72) 100%
          );
          z-index: 1;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          padding: clamp(2rem, 6vw, 5rem);
          padding-bottom: clamp(3rem, 7vw, 6rem);
        }
        .hero-eyebrow {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .hero-eyebrow::before {
          content: '';
          display: block;
          width: 32px;
          height: 1px;
          background: rgba(255,255,255,0.4);
        }
        .hero-title {
          font-size: clamp(3.5rem, 10vw, 9rem);
          font-weight: 300;
          line-height: 0.92;
          color: #fff;
          letter-spacing: -0.02em;
          max-width: 900px;
        }
        .hero-title em {
          font-style: italic;
          font-weight: 600;
          color: #e8c98a;
        }
        .hero-scroll {
          position: absolute;
          bottom: 2.5rem;
          right: clamp(2rem, 6vw, 5rem);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.4);
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .hero-scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.4), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.15); }
        }

        /* ── INTRO / MISSION ── */
        .section { padding: clamp(4rem, 10vw, 9rem) clamp(1.5rem, 6vw, 5rem); }
        .section-inner { max-width: 1200px; margin: 0 auto; }

        .mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        @media (max-width: 860px) {
          .mission-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
        .mission-label {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c87941;
          margin-bottom: 1.25rem;
        }
        .mission-heading {
          font-size: clamp(2.8rem, 5vw, 5rem);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: #1c1712;
        }
        .mission-heading em {
          font-style: italic;
          color: #c87941;
        }
        .mission-body {
          font-size: 1.05rem;
          line-height: 1.85;
          color: #6a5f50;
          font-weight: 300;
        }
        .mission-body + .mission-body { margin-top: 1.25rem; }

        /* Stacked image collage */
        .collage {
          position: relative;
          height: 560px;
        }
        .collage-img {
          position: absolute;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0,0,0,0.18);
        }
        .collage-img-a {
          top: 0; left: 0;
          width: 65%; height: 72%;
        }
        .collage-img-b {
          bottom: 0; right: 0;
          width: 56%; height: 56%;
        }
        .collage-tag {
          position: absolute;
          bottom: -16px;
          left: 50%;
          transform: translateX(-50%);
          background: #1c1712;
          color: #e8c98a;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 8px 16px;
          border-radius: 100px;
          white-space: nowrap;
          z-index: 3;
        }

        /* ── STATS ── */
        .stats-section {
          background: #1c1712;
          padding: clamp(3.5rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem);
        }
        .stats-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 3rem;
        }
        .stat-item { text-align: center; }
        .stat-number {
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 300;
          color: #e8c98a;
          line-height: 1;
          letter-spacing: -0.03em;
        }
        .stat-label {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-top: 0.75rem;
        }
        .stat-divider {
          width: 28px;
          height: 1px;
          background: #c87941;
          margin: 0.75rem auto 0;
        }

        /* ── VALUES ── */
        .values-section {
          background: #fff;
          padding: clamp(4rem, 10vw, 9rem) clamp(1.5rem, 6vw, 5rem);
        }
        .values-header {
          max-width: 1200px;
          margin: 0 auto 4rem;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .values-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 0;
        }
        .value-card {
          padding: 2.5rem;
          border-top: 1px solid #ede8df;
          border-right: 1px solid #ede8df;
          transition: background 0.3s;
        }
        .value-card:nth-child(4n) { border-right: none; }
        @media (max-width: 860px) {
          .value-card { border-right: none; }
        }
        .value-card:hover { background: #faf7f2; }
        .value-num {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: #c87941;
          margin-bottom: 1.5rem;
        }
        .value-title {
          font-size: 1.6rem;
          font-weight: 300;
          letter-spacing: -0.02em;
          color: #1c1712;
          margin-bottom: 1rem;
          line-height: 1.15;
        }
        .value-body {
          font-size: 0.875rem;
          line-height: 1.75;
          color: #8a7d6e;
          font-weight: 300;
        }

        /* ── TIMELINE ── */
        .timeline-section {
          background: #f5f0e8;
          padding: clamp(4rem, 10vw, 9rem) clamp(1.5rem, 6vw, 5rem);
          overflow: hidden;
        }
        .timeline-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .timeline-track {
          position: relative;
          margin-top: 4rem;
          padding-left: 2px;
        }
        .timeline-track::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, #c87941, transparent);
        }
        .timeline-item {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 2rem;
          padding: 0 0 3rem 2.5rem;
          position: relative;
        }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -4px;
          top: 6px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #c87941;
          border: 2px solid #f5f0e8;
        }
        .timeline-year {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 300;
          color: #d4c9b4;
          letter-spacing: -0.03em;
          line-height: 1;
          padding-top: 2px;
        }
        .timeline-event {
          font-size: 1rem;
          line-height: 1.7;
          color: #6a5f50;
          font-weight: 300;
          padding-top: 4px;
        }

        /* ── TEAM ── */
        .team-section {
          background: #1c1712;
          padding: clamp(4rem, 10vw, 9rem) clamp(1.5rem, 6vw, 5rem);
        }
        .team-header {
          max-width: 1200px;
          margin: 0 auto 4rem;
        }
        .team-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .team-card {
          position: relative;
          overflow: hidden;
          border-radius: 4px;
          background: #231f18;
          cursor: pointer;
        }
        .team-card-img {
          position: relative;
          height: 380px;
          overflow: hidden;
        }
        .team-card-img img {
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .team-card:hover .team-card-img img {
          transform: scale(1.06);
        }
        .team-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%);
        }
        .team-card-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.75rem;
        }
        .team-card-name {
          font-size: 1.4rem;
          font-weight: 300;
          color: #fff;
          letter-spacing: -0.01em;
          line-height: 1.15;
        }
        .team-card-role {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #e8c98a;
          margin-top: 4px;
        }
        .team-card-body {
          padding: 1.5rem 1.75rem 1.75rem;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .team-card-bio {
          font-size: 0.85rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.4);
          font-weight: 300;
        }
        .team-card-trips {
          margin-top: 1rem;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #c87941;
        }
        .team-card-trips span {
          display: inline-block;
          width: 20px;
          height: 1px;
          background: #c87941;
        }

        /* ── CTA ── */
        .cta-section {
          position: relative;
          overflow: hidden;
          height: 560px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cta-bg { position: absolute; inset: 0; z-index: 0; }
        .cta-bg img { object-fit: cover; object-position: center 60%; }
        .cta-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.58);
          z-index: 1;
        }
        .cta-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 2rem;
        }
        .cta-heading {
          font-size: clamp(2.5rem, 6vw, 6rem);
          font-weight: 300;
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 1.5rem;
        }
        .cta-heading em {
          font-style: italic;
          color: #e8c98a;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #c87941;
          color: #fff;
          text-decoration: none;
          padding: 16px 36px;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          margin-top: 0.5rem;
        }
        .cta-btn:hover {
          background: #b06835;
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(200,121,65,0.4);
        }
        .cta-btn svg {
          transition: transform 0.2s;
        }
        .cta-btn:hover svg {
          transform: translateX(4px);
        }

        /* ── Section label ── */
        .sec-label {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c87941;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .sec-label::after {
          content: '';
          display: block;
          flex: 1;
          max-width: 48px;
          height: 1px;
          background: #c87941;
          opacity: 0.4;
        }
        .sec-label-light { color: rgba(200,121,65,0.8); }
        .sec-label-light::after { background: rgba(200,121,65,0.4); }

        @media (max-width: 600px) {
          .timeline-item { grid-template-columns: 72px 1fr; gap: 1rem; }
          .collage { height: 340px; }
          .team-card-img { height: 280px; }
        }
      `}</style>

      <div className="au-root">
        {/* ══ HERO ══════════════════════════════════════════════ */}
        <section className="hero">
          <div className="hero-bg w-full h-full">
            <Image
              src="/image/IMG_6937.webp"
              alt="Mountains"
              fill
              quality={70}
              sizes="(max-width: 768px) 100vw, 70vw"
              className="object-cover object-bottom md:object-[center_40%]"
            />
          </div>
          <div className="hero-overlay" />

          <div
            ref={heroReveal.ref}
            className={`hero-content reveal ${heroReveal.visible ? "visible" : ""}`}
          >
            <p className="hero-eyebrow">Our story</p>
            <h1 className="hero-title display">
              We turned
              <br />
              <em>strangers</em>
              <br />
              into family.
            </h1>
          </div>

          <div className="hero-scroll">
            <div className="hero-scroll-line" />
            scroll
          </div>
        </section>

        {/* ══ MISSION ═══════════════════════════════════════════ */}
        <section className="section" style={{ background: "#f5f0e8" }}>
          <div className="section-inner">
            <div ref={missionReveal.ref} className="mission-grid">
              <div
                className={`reveal-left ${missionReveal.visible ? "visible" : ""}`}
              >
                <p className="mission-label">Who we are</p>
                <h2 className="mission-heading display">
                  Travel is better
                  <br />
                  with <em>people</em>
                  <br />
                  you haven't met yet.
                </h2>
              </div>

              <div
                className={`reveal-right ${missionReveal.visible ? "visible" : ""}`}
                style={{ transitionDelay: "0.2s" }}
              >
                <p className="mission-body">
                  Stranger Together was born from a simple belief — the best
                  travel stories always have other people in them. We create
                  carefully curated group trips across India and beyond, capping
                  every departure at just 12 travelers so the bonds stay real.
                </p>
                <p className="mission-body" style={{ marginTop: "1.25rem" }}>
                  We're not a tour operator. We're a community of curious people
                  who happen to end up on the same mountain, sharing the same
                  terrible altitude headache — and somehow loving every minute
                  of it.
                </p>
                <div
                  style={{
                    marginTop: "2.5rem",
                    paddingTop: "2rem",
                    borderTop: "1px solid #ddd8ce",
                    display: "flex",
                    gap: "2.5rem",
                    flexWrap: "wrap",
                  }}
                >
                  {[
                    ["12", "Travelers per trip"],
                    ["150+", "Destinations"],
                    ["4.9★", "Avg. rating"],
                  ].map(([num, label]) => (
                    <div key={label}>
                      <p
                        className="display"
                        style={{
                          fontSize: "2.2rem",
                          fontWeight: 300,
                          color: "#1c1712",
                          letterSpacing: "-0.02em",
                          lineHeight: 1,
                        }}
                      >
                        {num}
                      </p>
                      <p
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 500,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#a09070",
                          marginTop: "4px",
                        }}
                      >
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Collage row */}
            <div
              style={{ marginTop: "5rem", position: "relative" }}
              className={`reveal ${missionReveal.visible ? "visible" : ""}`}
            >
              <div className="collage">
                <div className="collage-img collage-img-a">
                  <Image src="/image/img_1.webp" alt="Trip 1" fill />
                </div>
                <div className="collage-img collage-img-b">
                  <Image src="/image/img_2.webp" alt="Trip 2" fill />
                  <div className="collage-tag">
                    Since 2019 · 2000+ Travelers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ STATS ═════════════════════════════════════════════ */}
        <section className="stats-section">
          <div
            ref={statsReveal.ref}
            className={`stats-grid reveal ${statsReveal.visible ? "visible" : ""}`}
          >
            {[
              { value: 2000, suffix: "+", label: "Travelers" },
              { value: 150, suffix: "+", label: "Destinations" },
              { value: 500, suffix: "+", label: "Trips Run" },
              { value: 98, suffix: "%", label: "Would Rebook" },
            ].map(({ value, suffix, label }) => (
              <div key={label} className="stat-item">
                <p className="stat-number display">
                  <AnimatedNumber target={value} suffix={suffix} />
                </p>
                <div className="stat-divider" />
                <p className="stat-label">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ VALUES ════════════════════════════════════════════ */}
        <section className="values-section">
          <div
            ref={valuesReveal.ref}
            className={`reveal ${valuesReveal.visible ? "visible" : ""}`}
          >
            <div className="values-header">
              <div>
                <p className="sec-label">What drives us</p>
                <h2
                  className="display"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                    fontWeight: 300,
                    letterSpacing: "-0.03em",
                    color: "#1c1712",
                    lineHeight: 1.05,
                  }}
                >
                  Our values.
                </h2>
              </div>
              <p
                style={{
                  maxWidth: 340,
                  fontSize: "0.95rem",
                  lineHeight: 1.75,
                  color: "#8a7d6e",
                  fontWeight: 300,
                  alignSelf: "flex-end",
                  paddingBottom: "0.3rem",
                }}
              >
                These aren't printed on a wall in our office. They're in every
                route we plan, every group we curate, every bonfire we sit
                around.
              </p>
            </div>

            <div className="values-grid">
              {VALUES.map((v, i) => (
                <div
                  key={v.num}
                  className="value-card"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <p className="value-num">{v.num}</p>
                  <h3 className="value-title display">{v.title}</h3>
                  <p className="value-body">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ TIMELINE ══════════════════════════════════════════ */}
        <section className="timeline-section">
          <div
            ref={timelineReveal.ref}
            className={`timeline-inner reveal ${timelineReveal.visible ? "visible" : ""}`}
          >
            <p className="sec-label">How we got here</p>
            <h2
              className="display"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.03em",
                color: "#1c1712",
                lineHeight: 1.05,
                marginBottom: "0.5rem",
              }}
            >
              Our journey.
            </h2>

            <div className="timeline-track">
              {TIMELINE.map((item, i) => (
                <div
                  key={item.year}
                  className="timeline-item"
                  style={{
                    opacity: timelineReveal.visible ? 1 : 0,
                    transform: timelineReveal.visible
                      ? "none"
                      : "translateX(-20px)",
                    transition: `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s`,
                  }}
                >
                  <p className="timeline-year display">{item.year}</p>
                  <p className="timeline-event">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ TEAM ══════════════════════════════════════════════ */}
        <section className="team-section">
          <div
            ref={teamReveal.ref}
            className={`team-header reveal ${teamReveal.visible ? "visible" : ""}`}
          >
            <p className="sec-label sec-label-light">The humans behind it</p>
            <h2
              className="display"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.03em",
                color: "#e8e0d0",
                lineHeight: 1.05,
              }}
            >
              Meet the team.
            </h2>
          </div>

          <div
            className={`team-grid reveal ${teamReveal.visible ? "visible" : ""}`}
            style={{ transitionDelay: "0.2s" }}
          >
            {TEAM.map((member, i) => (
              <div
                key={member.name}
                className="team-card"
                style={{
                  opacity: teamReveal.visible ? 1 : 0,
                  transform: teamReveal.visible ? "none" : "translateY(30px)",
                  transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`,
                }}
              >
                <div className="team-card-img">
                  <Image src={member.img} alt={member.name} fill />
                  <div className="team-card-overlay" />
                  <div className="team-card-info">
                    <p className="team-card-name display">{member.name}</p>
                    <p className="team-card-role">{member.role}</p>
                  </div>
                </div>
                <div className="team-card-body">
                  <p className="team-card-bio">{member.bio}</p>
                  <p className="team-card-trips">
                    <span /> {member.trips} trips led
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ CTA ═══════════════════════════════════════════════ */}
        <section className="cta-section">
          <div className="cta-bg">
            <Image src="/image/banner.webp" alt="CTA background" fill />
          </div>
          <div className="cta-overlay" />
          <div
            ref={ctaReveal.ref}
            className={`cta-content reveal ${ctaReveal.visible ? "visible" : ""}`}
          >
            <h2 className="cta-heading display">
              Ready to meet your
              <br />
              <em>next best friend?</em>
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "1rem",
                marginBottom: "2rem",
                fontWeight: 300,
              }}
            >
              12 seats. One mountain. Zero regrets.
            </p>
            <Link href="/tours" className="cta-btn">
              Browse Trips
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
