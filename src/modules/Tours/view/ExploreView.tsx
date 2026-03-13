"use client";
import React, { useState, useCallback, useEffect } from "react";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery, useQuery } from "@tanstack/react-query";
import ExploreFilters, {
  type ExploreFilterState,
} from "../component/ExploreFilters";
import TripsCard from "../component/TripsCard";
import { Loader2, MapPin, Compass, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

function ExploreView() {
  const trpc = useTRPC();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filters: ExploreFilterState = {
    tourTypeId: searchParams.get("tourTypeId")
      ? Number(searchParams.get("tourTypeId"))
      : undefined,
    categoryId: searchParams.get("categoryId")
      ? Number(searchParams.get("categoryId"))
      : undefined,
    month: searchParams.get("month") || undefined,
    minPrice: searchParams.get("minPrice")
      ? Number(searchParams.get("minPrice"))
      : undefined,
    maxPrice: searchParams.get("maxPrice")
      ? Number(searchParams.get("maxPrice"))
      : undefined,
    search: searchParams.get("search") || "",
    sortBy:
      (searchParams.get("sortBy") as ExploreFilterState["sortBy"]) ||
      "date_asc",
  };

  const setFilters = useCallback(
    (newFilters: ExploreFilterState) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(newFilters).forEach(([key, value]) => {
        if (value === undefined || value === "") {
          params.delete(key);
        } else {
          params.set(key, String(value));
        }
      });
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  const [debouncedSearch, setDebouncedSearch] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(filters.search);
    }, 400);
    return () => clearTimeout(timer);
  }, [filters.search]);

  const { data: tourTypes } = useSuspenseQuery(
    trpc.tours.getTripType.queryOptions()
  );
  const { data: categories } = useSuspenseQuery(
    trpc.tours.getCategories.queryOptions()
  );

  const [allTrips, setAllTrips] = useState<any[]>([]);
  const [cursor, setCursor] = useState<number | undefined>(undefined);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const queryInput = {
    tourTypeId: filters.tourTypeId,
    categoryId: filters.categoryId,
    month: filters.month,
    minPrice: filters.minPrice,
    maxPrice: filters.maxPrice,
    search: debouncedSearch || undefined,
    sortBy: filters.sortBy,
    limit: 12,
    cursor: undefined as number | undefined,
  };

  const { data: initialData, isFetching: isInitialFetching } = useQuery(
    trpc.tours.exploreTrips.queryOptions(queryInput)
  );

  useEffect(() => {
    if (initialData) {
      setAllTrips(initialData.trips);
      setHasMore(!!initialData.nextCursor);
      setCursor(initialData.nextCursor);
    }
  }, [initialData]);

  const loadMore = useCallback(async () => {
    if (!cursor || isLoadingMore) return;
    setIsLoadingMore(true);
    try {
      const res = await fetch(
        `/api/trpc/tours.exploreTrips?input=${encodeURIComponent(
          JSON.stringify({ json: { ...queryInput, cursor } })
        )}`
      );
      const json = await res.json();
      const result = json?.result?.data?.json;
      if (result) {
        setAllTrips((prev) => [...prev, ...result.trips]);
        setHasMore(!!result.nextCursor);
        setCursor(result.nextCursor);
      }
    } catch (e) {
      console.error("load more error", e);
    } finally {
      setIsLoadingMore(false);
    }
  }, [cursor, isLoadingMore, queryInput]);

  const trips = allTrips;
  const isLoading = isInitialFetching && allTrips.length === 0;

  const clearAllFilters = () =>
    setFilters({
      tourTypeId: undefined,
      categoryId: undefined,
      month: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      search: "",
      sortBy: "date_asc",
    });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        .explore-root {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          background: #f5f2ed;
        }

        /* ── HERO ── */
        .hero {
          position: relative;
          background: #0d1f1a;
          overflow: hidden;
          padding: 64px 24px 80px;
        }
        @media (min-width: 768px) {
          .hero { padding: 96px 60px 120px; }
        }
        @media (min-width: 1024px) {
          .hero { padding: 120px 100px 160px; }
        }

        /* Organic blob decorations */
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.18;
          pointer-events: none;
        }
        .hero-blob-1 {
          width: 500px; height: 500px;
          background: #c8a96e;
          top: -120px; right: -80px;
        }
        .hero-blob-2 {
          width: 300px; height: 300px;
          background: #2a7a5a;
          bottom: -60px; left: 10%;
        }

        /* Grid texture overlay */
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(200, 169, 110, 0.12);
          border: 1px solid rgba(200, 169, 110, 0.3);
          border-radius: 100px;
          padding: 6px 16px;
          color: #c8a96e;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .hero-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.2rem, 6vw, 4.5rem);
          font-weight: 600;
          color: #f5f2ed;
          line-height: 1.1;
          letter-spacing: -0.02em;
          max-width: 700px;
          margin: 0 0 20px;
        }

        .hero-title em {
          font-style: italic;
          background: linear-gradient(135deg, #c8a96e, #e8c98a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          color: rgba(245, 242, 237, 0.55);
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          font-weight: 300;
          max-width: 480px;
          line-height: 1.7;
          margin: 0 0 36px;
        }

        .hero-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .hero-stat {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 10px 18px;
          backdrop-filter: blur(8px);
        }

        .hero-stat-icon {
          width: 32px; height: 32px;
          border-radius: 8px;
          background: rgba(200, 169, 110, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hero-stat-label {
          font-size: 13px;
          font-weight: 500;
          color: #f5f2ed;
        }

        .hero-stat-sub {
          font-size: 11px;
          color: rgba(245,242,237,0.45);
          font-weight: 300;
        }

        /* Diagonal cut bottom of hero */
        .hero-cut {
          position: absolute;
          bottom: -1px;
          left: 0; right: 0;
          height: 60px;
          background: #f5f2ed;
          clip-path: polygon(0 100%, 100% 100%, 100% 0);
        }

        /* ── LAYOUT ── */
        .explore-body {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 16px 80px;
        }
        @media (min-width: 1024px) {
          .explore-body {
            grid-template-columns: 280px 1fr;
            gap: 40px;
            padding: 40px 60px 100px;
            align-items: start;
          }
        }
        @media (min-width: 1280px) {
          .explore-body {
            grid-template-columns: 300px 1fr;
            padding: 48px 80px 120px;
          }
        }

        /* ── SIDEBAR FILTERS ── */
        .sidebar {
          display: none;
          position: sticky;
          top: 24px;
        }
        @media (min-width: 1024px) {
          .sidebar { display: block; }
        }

        .sidebar-card {
          background: #fff;
          border-radius: 20px;
          border: 1px solid rgba(0,0,0,0.07);
          overflow: hidden;
        }

        .sidebar-header {
          padding: 20px 24px 16px;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sidebar-title {
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 600;
          color: #0d1f1a;
        }

        .sidebar-clear {
          font-size: 12px;
          color: #c8a96e;
          cursor: pointer;
          font-weight: 500;
          background: none;
          border: none;
          padding: 0;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .sidebar-clear:hover { color: #a8893e; }

        .sidebar-body { padding: 20px 24px; }

        /* ── MOBILE FILTER BUTTON ── */
        .mobile-filter-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 0;
          margin-bottom: 4px;
        }
        @media (min-width: 1024px) {
          .mobile-filter-bar { display: none; }
        }

        .mobile-filter-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0d1f1a;
          color: #f5f2ed;
          border: none;
          border-radius: 100px;
          padding: 10px 20px;
          font-size: 13px;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: background 0.2s;
        }
        .mobile-filter-btn:hover { background: #1a3530; }

        .results-count {
          font-size: 13px;
          color: #6b7280;
          font-weight: 400;
        }
        .results-count strong { color: #0d1f1a; font-weight: 600; }

        /* ── MOBILE FILTER DRAWER ── */
        .filter-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 50;
          backdrop-filter: blur(4px);
          animation: fadeIn 0.2s ease;
        }

        .filter-drawer {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          background: #fff;
          border-radius: 24px 24px 0 0;
          z-index: 51;
          max-height: 85vh;
          overflow-y: auto;
          animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }

        .filter-drawer-handle {
          width: 40px; height: 4px;
          background: #e5e7eb;
          border-radius: 2px;
          margin: 12px auto 0;
        }

        .filter-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px 12px;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          position: sticky;
          top: 0;
          background: #fff;
          z-index: 1;
        }

        .filter-drawer-title {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 600;
          color: #0d1f1a;
        }

        .filter-drawer-close {
          width: 32px; height: 32px;
          border-radius: 50%;
          background: #f3f4f6;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .filter-drawer-close:hover { background: #e5e7eb; }

        .filter-drawer-body { padding: 16px 24px 32px; }

        .filter-drawer-actions {
          display: flex;
          gap: 12px;
          padding: 16px 24px;
          border-top: 1px solid rgba(0,0,0,0.06);
          position: sticky;
          bottom: 0;
          background: #fff;
        }

        .btn-clear {
          flex: 1;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.15);
          background: transparent;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          color: #374151;
          transition: all 0.2s;
        }
        .btn-clear:hover { background: #f9fafb; }

        .btn-apply {
          flex: 2;
          padding: 12px;
          border-radius: 12px;
          border: none;
          background: #0d1f1a;
          color: #f5f2ed;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn-apply:hover { background: #1a3530; }

        /* ── TRIP GRID ── */
        .trips-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 480px) {
          .trips-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        }
        @media (min-width: 768px) {
          .trips-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (min-width: 1024px) {
          .trips-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (min-width: 1280px) {
          .trips-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
        }

        /* ── SKELETON ── */
        .skeleton {
          border-radius: 20px;
          background: linear-gradient(90deg, #ece9e2 25%, #f5f2ed 50%, #ece9e2 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
          aspect-ratio: 3/4;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        /* ── EMPTY STATE ── */
        .empty-state {
          text-align: center;
          padding: 80px 24px;
          grid-column: 1 / -1;
        }

        .empty-icon {
          width: 80px; height: 80px;
          border-radius: 24px;
          background: linear-gradient(135deg, #e8e4db, #d4cfc4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .empty-title {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 600;
          color: #0d1f1a;
          margin: 0 0 8px;
        }

        .empty-subtitle {
          color: #9ca3af;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.6;
          margin: 0 0 24px;
          max-width: 320px;
          margin-left: auto;
          margin-right: auto;
        }

        .btn-reset {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0d1f1a;
          color: #f5f2ed;
          border: none;
          border-radius: 100px;
          padding: 12px 28px;
          font-size: 14px;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn-reset:hover { background: #1a3530; }

        /* ── LOAD MORE ── */
        .load-more-wrap {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }

        .btn-load-more {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: #0d1f1a;
          border: 1.5px solid #0d1f1a;
          border-radius: 100px;
          padding: 14px 40px;
          font-size: 14px;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: all 0.25s;
          letter-spacing: 0.02em;
        }
        .btn-load-more:hover {
          background: #0d1f1a;
          color: #f5f2ed;
        }
        .btn-load-more:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* ── CONTENT AREA ── */
        .content-area {
          min-width: 0;
        }

        .content-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 0 16px;
          margin-bottom: 4px;
        }
        @media (min-width: 1024px) {
          .content-top { padding: 0 0 20px; }
        }
      `}</style>

      <div className="explore-root">
        {/* ── HERO ── */}
        <div className="hero">
          <div className="hero-blob hero-blob-1" />
          <div className="hero-blob hero-blob-2" />
          <div className="hero-grid" />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="hero-eyebrow">
              <Compass size={12} />
              Curated Journeys
            </div>

            <h1 className="hero-title">
              Find Your Next <em>Adventure</em>
            </h1>

            <p className="hero-subtitle">
              Hand-picked group tours and customised trips — crafted for
              travellers who seek genuine experiences over tourist traps.
            </p>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-icon">
                  <MapPin size={14} color="#c8a96e" />
                </div>
                <div>
                  <div className="hero-stat-label">{tourTypes.length} Destinations</div>
                  <div className="hero-stat-sub">Across India & beyond</div>
                </div>
              </div>

              <div className="hero-stat">
                <div className="hero-stat-icon">
                  <Compass size={14} color="#c8a96e" />
                </div>
                <div>
                  <div className="hero-stat-label">{trips.length}+ Trips</div>
                  <div className="hero-stat-sub">Available now</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-cut" />
        </div>

        {/* ── BODY ── */}
        <div className="explore-body">
          {/* ── DESKTOP SIDEBAR ── */}
          <aside className="sidebar">
            <div className="sidebar-card">
              <div className="sidebar-header">
                <span className="sidebar-title">Filters</span>
                <button className="sidebar-clear" onClick={clearAllFilters}>
                  Clear all
                </button>
              </div>
              <div className="sidebar-body">
                <ExploreFilters
                  tourTypes={tourTypes}
                  categories={categories}
                  filters={filters}
                  onFiltersChange={setFilters}
                />
              </div>
            </div>
          </aside>

          {/* ── MAIN CONTENT ── */}
          <div className="content-area">
            {/* Mobile filter bar */}
            <div className="mobile-filter-bar">
              <button
                className="mobile-filter-btn"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <SlidersHorizontal size={14} />
                Filters
              </button>

              <span className="results-count">
                {isLoading ? (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <Loader2 size={13} style={{ animation: "spin 1s linear infinite" }} />
                    Loading…
                  </span>
                ) : (
                  <>
                    <strong>{trips.length}</strong> {trips.length === 1 ? "trip" : "trips"}
                  </>
                )}
              </span>
            </div>

            {/* Desktop results count */}
            <div className="content-top" style={{ display: "none" }}
              ref={(el) => {
                if (el) el.style.display = "flex";
              }}
            >
              <p className="results-count" style={{ display: "none" }}
                ref={(el) => {
                  if (el && window.innerWidth >= 1024) {
                    el.style.display = "block";
                  }
                }}
              >
                {isLoading ? (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <Loader2 size={13} />
                    Loading trips…
                  </span>
                ) : (
                  <>
                    Showing <strong>{trips.length}</strong> {trips.length === 1 ? "trip" : "trips"}
                  </>
                )}
              </p>
            </div>

            {/* Desktop-only count row */}
            <div style={{ display: "none" }} className="lg-count-row">
              <p className="results-count">
                {isLoading ? "Loading trips…" : (
                  <>Showing <strong>{trips.length}</strong> {trips.length === 1 ? "trip" : "trips"}</>
                )}
              </p>
            </div>

            {/* Trip Grid */}
            {isLoading ? (
              <div className="trips-grid">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="skeleton" />
                ))}
              </div>
            ) : trips.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">
                  <Compass size={36} color="#9ca3af" />
                </div>
                <h3 className="empty-title">No trips found</h3>
                <p className="empty-subtitle">
                  Try adjusting your filters or search query to discover more
                  amazing trips.
                </p>
                <button className="btn-reset" onClick={clearAllFilters}>
                  <X size={14} />
                  Clear all filters
                </button>
              </div>
            ) : (
              <>
                <div className="trips-grid">
                  {trips.map((trip) => (
                    <Link key={trip.id} href={`/trip/${trip.id}`}>
                    <div >
                      <TripsCard trip={trip} />
                    </div>
                      </Link>
                  ))}
                </div>

                {hasMore && (
                  <div className="load-more-wrap">
                    <button
                      className="btn-load-more"
                      onClick={loadMore}
                      disabled={isLoadingMore}
                    >
                      {isLoadingMore ? (
                        <>
                          <Loader2 size={15} style={{ animation: "spin 1s linear infinite" }} />
                          Loading more…
                        </>
                      ) : (
                        "Load more trips"
                      )}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── MOBILE FILTER DRAWER ── */}
      {mobileFiltersOpen && (
        <>
          <div
            className="filter-backdrop"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="filter-drawer">
            <div className="filter-drawer-handle" />
            <div className="filter-drawer-header">
              <span className="filter-drawer-title">Filters</span>
              <button
                className="filter-drawer-close"
                onClick={() => setMobileFiltersOpen(false)}
              >
                <X size={14} color="#374151" />
              </button>
            </div>
            <div className="filter-drawer-body">
              <ExploreFilters
                tourTypes={tourTypes}
                categories={categories}
                filters={filters}
                onFiltersChange={setFilters}
              />
            </div>
            <div className="filter-drawer-actions">
              <button
                className="btn-clear"
                onClick={() => {
                  clearAllFilters();
                  setMobileFiltersOpen(false);
                }}
              >
                Clear all
              </button>
              <button
                className="btn-apply"
                onClick={() => setMobileFiltersOpen(false)}
              >
                Show {trips.length} trips
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ExploreView;