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
        {/* Decorative elements - hidden on mobile for performance */}
        <div className="absolute inset-0 opacity-10 hidden sm:block">
          <div className="absolute top-[45%] left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative px-4 sm:px-5 md:px-10 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <Compass className="size-4 sm:size-5 text-amber-400" />
            <span className="text-amber-400/90 text-xs sm:text-sm font-medium tracking-wide uppercase">
              Discover Adventures
            </span>
          </div>
          <h1 className="font-saira text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">
              Trips
            </span>
          </h1>
          <p className="mt-2 sm:mt-3 text-white/70 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
            Find the perfect group tour for your next adventure. Filter by
            destination, budget, and travel dates.
          </p>

          {/* Quick stats - stacked on very small screens */}
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="size-3.5 sm:size-4 text-amber-400" />
              </div>
              <p className="text-white font-medium text-xs sm:text-sm">
                {tourTypes.length} Destinations
              </p>
            </div>
            <div className="hidden sm:block h-6 w-px bg-white/20"></div>
            <p className="text-white font-medium text-xs sm:text-sm pl-9 sm:pl-0">
              {trips.length}+ Trips Available
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-5 md:px-10 lg:px-20 py-4 sm:py-6 md:py-8 lg:py-10">
        {/* Filters */}
        <ExploreFilters
          tourTypes={tourTypes}
          categories={categories}
          filters={filters}
          onFiltersChange={setFilters}
        />

        {/* Results count */}
        <div className="mt-4 sm:mt-6 mb-3 sm:mb-4 flex items-center justify-between">
          <p className="text-xs sm:text-sm text-gray-500 font-medium">
            {isLoading ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="size-3.5 sm:size-4 animate-spin" /> Loading
                trips...
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
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="aspect-[0.85/1] rounded-xl sm:rounded-2xl bg-gray-100 animate-pulse"
              />
            ))}
          </div>
        ) : trips.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 text-center px-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-100 flex items-center justify-center mb-3 sm:mb-4">
              <Compass className="size-8 sm:size-10 text-gray-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1.5 sm:mb-2">
              No trips found
            </h3>
            <p className="text-gray-500 text-sm sm:text-base max-w-sm mb-4 sm:mb-6">
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
              className="rounded-full px-5 sm:px-6 text-sm sm:text-base"
            >
              Clear All Filters
            </Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {trips.map((trip) => (
                <div key={trip.id} className="w-full">
                  <TripsCard trip={trip} />
                </div>
              ))}
            </div>

            {/* Load More */}
            {hasMore && (
              <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 pb-4 sm:pb-0">
                <Button
                  onClick={loadMore}
                  disabled={isLoadingMore}
                  className="gold-gradient-soft rounded-full px-6 sm:px-8 py-4 sm:py-5 font-medium text-sm sm:text-base shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto max-w-xs sm:max-w-none"
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
