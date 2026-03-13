import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "./routers/_app";
import { getTraceEvents } from "next/dist/trace";

 type RouterOutput = inferRouterOutputs<AppRouter>;
type ArrayElement<T> = T extends (infer U)[] ? U : never;

export type getAllTour=RouterOutput["tours"]["getAllTour"]
export type TripType =
  ArrayElement<RouterOutput["tours"]["getTour"]["trips"]>;
export type UpcomingTrips=RouterOutput["tours"]["upcomingTrips"]
export type vibeUsVideo=RouterOutput["home"]["getVibeVideo"]["videos"]
export type trandingTrips=RouterOutput["tours"]["trandingTrips"]
export type reviews=RouterOutput["tours"]["getReviews"]
export type faqType=RouterOutput["tours"]["getFaq"]
export type trip=RouterOutput["tours"]["getTrip"]
export type getTripDate=RouterOutput["tours"]["getTrip"]["TripDate"][number]
export type getItinerary=RouterOutput["tours"]["getItinerary"][number]
export type getPricing=RouterOutput["tours"]["getTrip"]["TripDate"][number]["pricing"]

// Explore page types
export type ExploreTripsOutput = RouterOutput["tours"]["exploreTrips"];
export type ExploreTripItem = ExploreTripsOutput["trips"][number];
export type CategoriesOutput = RouterOutput["tours"]["getCategories"];




