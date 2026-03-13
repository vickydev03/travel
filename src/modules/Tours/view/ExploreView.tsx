"use client";
import React, { useState, useCallback, useEffect } from "react";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery, useQuery } from "@tanstack/react-query";
import ExploreFilters, {
  type ExploreFilterState,
} from "../component/ExploreFilters";
import TripsCard from "../component/TripsCard";
import { Loader2, MapPin, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

function ExploreView() {
  const trpc = useTRPC();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Compute filters from URL
  const filters: ExploreFilterState = {
    tourTypeId: searchParams.get("tourTypeId") ? Number(searchParams.get("tourTypeId")) : undefined,
    categoryId: searchParams.get("categoryId") ? Number(searchParams.get("categoryId")) : undefined,
    month: searchParams.get("month") || undefined,
    minPrice: searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : undefined,
    maxPrice: searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : undefined,
    search: searchParams.get("search") || "",
    sortBy: (searchParams.get("sortBy") as ExploreFilterState["sortBy"]) || "date_asc",
  };

  // Update URL helper
  const setFilters = useCallback((newFilters: ExploreFilterState) => {
    const params = new URLSearchParams(searchParams.toString());
    
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value === undefined || value === "") {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
    });

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [searchParams, pathname, router]);

  // Debounced search
  const [debouncedSearch, setDebouncedSearch] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(filters.search);
    }, 400);
    return () => clearTimeout(timer);
  }, [filters.search]);

  // Fetch tour types & categories for filter pills
  const { data: tourTypes } = useSuspenseQuery(
    trpc.tours.getTripType.queryOptions()
  );

  const { data: categories } = useSuspenseQuery(
    trpc.tours.getCategories.queryOptions()
  );

  // Cursor pagination state
  const [allTrips, setAllTrips] = useState<any[]>([]);
  const [cursor, setCursor] = useState<number | undefined>(undefined);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Build the query input
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

  // Initial data fetch
  const { data: initialData, isFetching: isInitialFetching } = useQuery(
    trpc.tours.exploreTrips.queryOptions(queryInput)
  );

  // Reset trips when filters change
  useEffect(() => {
    if (initialData) {
      setAllTrips(initialData.trips);
      setHasMore(!!initialData.nextCursor);
      setCursor(initialData.nextCursor);
    }
  }, [initialData]);

  // Load more handler
  const loadMore = useCallback(async () => {
    if (!cursor || isLoadingMore) return;
    setIsLoadingMore(true);
    try {
      const res = await fetch(
        `/api/trpc/tours.exploreTrips?input=${encodeURIComponent(
          JSON.stringify({
            json: {
              ...queryInput,
              cursor,
            },
          })
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faf9] to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#003022] via-[#00503a] to-[#003022]">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[45%] left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative px-5 md:px-20 py-12 md:py-20">
          <div className="flex items-center gap-2 mb-3">
            <Compass className="size-5 text-amber-400" />
            <span className="text-amber-400/90 text-sm font-medium tracking-wide uppercase">
              Discover Adventures
            </span>
          </div>
          <h1 className="font-saira text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">
              Trips
            </span>
          </h1>
          <p className="mt-3 text-white/70 text-base md:text-lg max-w-xl">
            Find the perfect group tour for your next adventure. Filter by
            destination, budget, and travel dates.
          </p>

          {/* Quick stats */}
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <MapPin className="size-4 text-amber-400" />
              </div>
              <div>
                <p className="text-white font-medium text-sm">
                  {tourTypes.length} Destinations
                </p>
              </div>
            </div>
            <div className="h-6 w-px bg-white/20"></div>
            <div>
              <p className="text-white font-medium text-sm">
                {trips.length}+ Trips Available
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-5 md:px-20 py-6 md:py-10">
        {/* Filters */}
        <ExploreFilters
          tourTypes={tourTypes}
          categories={categories}
          filters={filters}
          onFiltersChange={setFilters}
        />

        {/* Results count */}
        <div className="mt-6 mb-4 flex items-center justify-between">
          <p className="text-sm text-gray-500 font-medium">
            {isLoading ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="size-4 animate-spin" /> Loading trips...
              </span>
            ) : (
              <>
                Showing{" "}
                <span className="text-[#003022] font-semibold">
                  {trips.length}
                </span>{" "}
                {trips.length === 1 ? "trip" : "trips"}
              </>
            )}
          </p>
        </div>

        {/* Trip Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="aspect-[0.85/1] rounded-2xl bg-gray-100 animate-pulse"
              />
            ))}
          </div>
        ) : trips.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Compass className="size-10 text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No trips found
            </h3>
            <p className="text-gray-500 max-w-sm mb-6">
              Try adjusting your filters or search query to discover more
              amazing trips.
            </p>
            <Button
              onClick={() =>
                setFilters({
                  tourTypeId: undefined,
                  categoryId: undefined,
                  month: undefined,
                  minPrice: undefined,
                  maxPrice: undefined,
                  search: "",
                  sortBy: "date_asc",
                })
              }
              variant="outline"
              className="rounded-full px-6"
            >
              Clear All Filters
            </Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
              {trips.map((trip) => (
                <div key={trip.id} className="w-full">
                  <TripsCard trip={trip} />
                </div>
              ))}
            </div>

            {/* Load More */}
            {hasMore && (
              <div className="flex justify-center mt-10">
                <Button
                  onClick={loadMore}
                  disabled={isLoadingMore}
                  className="gold-gradient-soft rounded-full px-8 py-5 font-medium text-base shadow-lg hover:shadow-xl transition-shadow"
                >
                  {isLoadingMore ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="size-4 animate-spin" />
                      Loading...
                    </span>
                  ) : (
                    "Load More Trips"
                  )}
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ExploreView;
