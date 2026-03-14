"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Youtube,
  Twitter,
  Send,
  MapPin,
  Mail,
  ArrowUpRight,
  Compass,
  Mountain,
  Heart,
  Star,
} from "lucide-react";

const NAV = [
  {
    heading: "Discover",
    links: [
      { label: "Explore", href: "/explore" },
      { label: "Tours", href: "/tours" },
      { label: "Destinations", href: "/explore" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Story", href: "/our-story" },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "Contact Us", href: "/contact-us" },
      // { label: "FAQs", href: "/faqs" },
      // { label: "Travel Policy", href: "/policy" },
      // { label: "Reviews", href: "/reviews" },
    ],
  },
];

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/thestrangerstogether/" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

const TRUST_BADGES = [
  { icon: Star, text: "4.9 Rated" },
  { icon: Heart, text: "2000+ Happy Travelers" },
  { icon: Mountain, text: "150+ Destinations" },
  { icon: Compass, text: "Since 2019" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .footer-root {
          font-family: 'DM Sans', sans-serif;
          background-color: #181810;
          color: #e8e0d0;
          position: relative;
          overflow: hidden;
        }

        .footer-display {
          font-family: 'Playfair Display', Georgia, serif;
        }

        /* Subtle noise texture overlay */
        .footer-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        /* Big watermark text */
        .footer-watermark {
          font-family: 'Playfair Display', serif;
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          font-size: clamp(4rem, 13vw, 12rem);
          font-weight: 900;
          font-style: italic;
          white-space: nowrap;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.035);
          pointer-events: none;
          letter-spacing: -0.02em;
          z-index: 0;
          user-select: none;
        }

        /* Warm radial glow */
        .footer-glow {
          position: absolute;
          top: -120px;
          left: -80px;
          width: 560px;
          height: 560px;
          background: radial-gradient(circle, rgba(200,121,65,0.10) 0%, transparent 68%);
          pointer-events: none;
          z-index: 0;
        }
        .footer-glow-2 {
          position: absolute;
          bottom: 0;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(120,80,40,0.07) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
        }

        /* Nav link */
        .f-nav-link {
          display: inline-flex;
          align-items: center;
          gap: 0px;
          color: #7a7060;
          font-size: 0.875rem;
          font-weight: 400;
          text-decoration: none;
          transition: color 0.2s ease, gap 0.2s ease;
          letter-spacing: 0.01em;
          overflow: hidden;
        }
        .f-nav-link:hover {
          color: #e8c98a;
          gap: 5px;
        }
        .f-nav-link .f-arrow {
          opacity: 0;
          width: 0;
          transition: opacity 0.2s, width 0.2s;
          flex-shrink: 0;
        }
        .f-nav-link:hover .f-arrow {
          opacity: 1;
          width: 13px;
        }

        /* Social button */
        .f-social {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7a7060;
          transition: all 0.25s ease;
          background: transparent;
          cursor: pointer;
          text-decoration: none;
        }
        .f-social:hover {
          border-color: #c87941;
          color: #c87941;
          background: rgba(200,121,65,0.08);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(200,121,65,0.15);
        }

        /* Newsletter */
        .f-nl-input {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-right: none;
          border-radius: 14px 0 0 14px;
          padding: 13px 16px;
          color: #e8e0d0;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          outline: none;
          width: 100%;
          transition: border-color 0.2s, background 0.2s;
        }
        .f-nl-input::placeholder { color: rgba(255,255,255,0.18); }
        .f-nl-input:focus {
          border-color: rgba(200,121,65,0.4);
          background: rgba(255,255,255,0.06);
        }
        .f-nl-btn {
          background: #c87941;
          border: none;
          border-radius: 0 14px 14px 0;
          padding: 13px 20px;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, transform 0.15s;
          flex-shrink: 0;
        }
        .f-nl-btn:hover {
          background: #b0672d;
          transform: scale(1.04);
        }

        /* Trust badge */
        .f-badge {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.73rem;
          color: #5a5248;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .f-badge svg { color: #c87941; }

        /* Bottom links */
        .f-bottom-link {
          color: #3e3830;
          font-size: 0.72rem;
          text-decoration: none;
          transition: color 0.2s;
          letter-spacing: 0.01em;
        }
        .f-bottom-link:hover { color: #a09070; }

        /* Column heading */
        .f-col-heading {
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #c87941;
          margin: 0 0 1.25rem 0;
        }

        /* Separator dot */
        .f-dot {
          display: inline-block;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #3e3830;
          vertical-align: middle;
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-glow" />
        <div className="footer-glow-2" />
        <div className="footer-watermark">TOGETHER</div>

        {/* ── NEWSLETTER BAND ─────────────────────────────────── */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "3.5rem 2rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            <div style={{ flex: 1, minWidth: 240 }}>
              <p
                className="footer-display"
                style={{
                  fontSize: "clamp(1.3rem, 2.8vw, 1.9rem)",
                  fontWeight: 700,
                  fontStyle: "italic",
                  color: "#e8e0d0",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Never miss a trip.
              </p>
              <p
                style={{
                  color: "#5a5248",
                  fontSize: "0.82rem",
                  marginTop: "0.5rem",
                  lineHeight: 1.6,
                }}
              >
                Early-bird spots, new routes &amp; campfire stories — right in your
                inbox.
              </p>
            </div>

            <div style={{ flex: 1, minWidth: 270, maxWidth: 420 }}>
              {subscribed ? (
                <div
                  style={{
                    background: "rgba(200,121,65,0.1)",
                    border: "1px solid rgba(200,121,65,0.25)",
                    borderRadius: 14,
                    padding: "14px 20px",
                    color: "#e8c98a",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <Heart size={13} fill="#e8c98a" /> You&apos;re in! See you on the
                  trail. 🏔
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: "flex" }}>
                  <input
                    className="f-nl-input"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="f-nl-btn" aria-label="Subscribe">
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ── MAIN GRID ────────────────────────────────────────── */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1200,
            margin: "0 auto",
            padding: "4rem 2rem 3rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "2.5rem 3rem",
          }}
        >
          {/* ── Brand column ── */}
          <div style={{ gridColumn: "span 1" }}>
            <Link href="/" style={{ display: "inline-block", marginBottom: "1.2rem" }}>
              <Image
                src="/logo.png"
                alt="Stranger Together"
                width={155}
                height={52}
                style={{ objectFit: "contain" }}
              />
            </Link>

            <p
              style={{
                color: "#5a5248",
                fontSize: "0.8rem",
                lineHeight: 1.75,
                maxWidth: 210,
                marginBottom: "1.5rem",
              }}
            >
              Group travel for people who like turning strangers into lifelong
              friends — one mountain at a time.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", gap: 8, marginBottom: "1.75rem" }}>
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} aria-label={label} className="f-social">
                  <Icon size={14} />
                </a>
              ))}
            </div>

            {/* Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a
                href="mailto:hello@strangertogether.in"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#5a5248",
                  fontSize: "0.78rem",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#e8c98a")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#5a5248")
                }
              >
                <Mail size={12} style={{ color: "#c87941", flexShrink: 0 }} />
                hello@strangertogether.in
              </a>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#5a5248",
                  fontSize: "0.78rem",
                }}
              >
                <MapPin size={12} style={{ color: "#c87941", flexShrink: 0 }} />
                Bangalore, India
              </div>
            </div>
          </div>

          {/* ── Nav columns ── */}
          {NAV.map((col) => (
            <div key={col.heading}>
              <p className="f-col-heading">{col.heading}</p>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                }}
              >
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="f-nav-link">
                      <ArrowUpRight size={11} className="f-arrow" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── Curated extra column ── */}
          <div>
            <p className="f-col-heading">Traveler Love</p>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
              }}
            >
              {[
                { label: "Photo Diaries", href: "/gallery" },
                { label: "Travel Stories", href: "/stories" },
                { label: "Packing Guides", href: "/guides" },
                { label: "Solo to Group", href: "/solo-to-group" },
                { label: "Trip Reviews", href: "/reviews" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="f-nav-link">
                    <ArrowUpRight size={11} className="f-arrow" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── TRUST BADGES ─────────────────────────────────────── */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            borderTop: "1px solid rgba(255,255,255,0.04)",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "1.1rem 2rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem 3rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {TRUST_BADGES.map(({ icon: Icon, text }, i) => (
              <React.Fragment key={text}>
                <div className="f-badge">
                  <Icon size={12} strokeWidth={2.5} />
                  {text}
                </div>
                {i < TRUST_BADGES.length - 1 && (
                  <span className="f-dot" style={{ display: "none" }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── BOTTOM BAR ───────────────────────────────────────── */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1200,
            margin: "0 auto",
            padding: "1.4rem 2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              color: "#3a342c",
              margin: 0,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            © {new Date().getFullYear()} Stranger Together
            <span
              style={{
                display: "inline-block",
                width: 3,
                height: 3,
                borderRadius: "50%",
                background: "#c87941",
                verticalAlign: "middle",
              }}
            />
            Made with{" "}
            <Heart
              size={10}
              fill="#c87941"
              color="#c87941"
              style={{ display: "inline", verticalAlign: "middle" }}
            />{" "}
            in India
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Use", href: "/terms" },
              { label: "Refund Policy", href: "/refund" },
              { label: "Sitemap", href: "/sitemap.xml" },
            ].map(({ label, href }) => (
              <Link key={label} href={href} className="f-bottom-link">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}