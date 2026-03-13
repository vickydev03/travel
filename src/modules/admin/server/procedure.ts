import {
  baseProcedure,
  createTRPCRouter,
  protectedProcedure,
} from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

const adminProcedure = protectedProcedure(["ADMIN"]);

export const adminRouter = createTRPCRouter({
  // ── Dashboard ────────────────────────────────────────────────────────
  getStats: adminProcedure.query(async ({ ctx }) => {
    const [users, tours, trips, bookings, pendingBookings] = await Promise.all([
      ctx.db.user.count(),
      ctx.db.tour.count(),
      ctx.db.trip.count(),
      ctx.db.booking.count(),
      ctx.db.booking.count({ where: { status: "PENDING" } }),
    ]);
    return { users, tours, trips, bookings, pendingBookings };
  }),

  // ── Tour Types ───────────────────────────────────────────────────────
  getAllTourTypes: adminProcedure.query(async ({ ctx }) => {
    return ctx.db.tourType.findMany({
      include: { _count: { select: { tours: true } } },
      orderBy: { priority: "asc" },
    });
  }),

  createTourType: adminProcedure
    .input(z.object({
      title: z.string().min(1),
      slug: z.string().min(1),
      description: z.string().optional(),
      priority: z.number().default(0),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.tourType.create({ data: input });
    }),

  updateTourType: adminProcedure
    .input(z.object({
      id: z.number(),
      title: z.string().min(1).optional(),
      slug: z.string().min(1).optional(),
      description: z.string().optional(),
      priority: z.number().optional(),
      isActive: z.boolean().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return ctx.db.tourType.update({ where: { id }, data });
    }),

  deleteTourType: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.tourType.delete({ where: { id: input.id } });
    }),

  // ── Categories ───────────────────────────────────────────────────────
  getAllCategories: adminProcedure.query(async ({ ctx }) => {
    return ctx.db.category.findMany({
      include: { _count: { select: { trip: true } } },
    });
  }),

  createCategory: adminProcedure
    .input(z.object({
      title: z.string().min(1),
      slug: z.string().min(1),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.category.create({ data: input });
    }),

  deleteCategory: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.category.delete({ where: { id: input.id } });
    }),

  // ── Tours ────────────────────────────────────────────────────────────
  getAllTours: adminProcedure.query(async ({ ctx }) => {
    return ctx.db.tour.findMany({
      include: {
        tourType: true,
        _count: { select: { trips: true, reviews: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  }),

  createTour: adminProcedure
    .input(z.object({
      title: z.string().min(1),
      slug: z.string().min(1),
      about: z.string().min(1),
      thumbnailImageUrl: z.string().url(),
      thumbnailVideoUrl: z.string().url().optional().or(z.literal("")),
      cardImageUrl: z.string().url(),
      tourTypeId: z.number(),
      isActive: z.boolean().default(true),
      isFeatured: z.boolean().default(false),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.tour.create({ data: input });
    }),

  updateTour: adminProcedure
    .input(z.object({
      id: z.number(),
      title: z.string().min(1).optional(),
      slug: z.string().min(1).optional(),
      about: z.string().optional(),
      thumbnailImageUrl: z.string().optional(),
      thumbnailVideoUrl: z.string().optional(),
      cardImageUrl: z.string().optional(),
      tourTypeId: z.number().optional(),
      isActive: z.boolean().optional(),
      isFeatured: z.boolean().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return ctx.db.tour.update({ where: { id }, data });
    }),

  deleteTour: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.tour.update({
        where: { id: input.id },
        data: { isActive: false },
      });
    }),

  // ── Trips ────────────────────────────────────────────────────────────
  getAllTrips: adminProcedure.query(async ({ ctx }) => {
    return ctx.db.trip.findMany({
      include: {
        tour: { select: { title: true } },
        category: true,
        TripDate: { include: { pricing: true } },
        _count: { select: { Booking: true } },
      },
      orderBy: { id: "desc" },
    });
  }),

  createTrip: adminProcedure
    .input(z.object({
      tourId: z.number(),
      categoryId: z.number(),
      title: z.string().min(1),
      slug: z.string().min(1),
      thumbnailImageUrl: z.string().url(),
      thumbnailVideoUrl: z.string(),
      cardImageUrl: z.string().url(),
      ItineraryImageUrl: z.string(),
      ItineraryLink: z.string(),
      inclusion: z.string(),
      exclusion: z.string(),
      notes: z.string(),
      About: z.string().default(""),
      startingPrice: z.number(),
      isFeature: z.boolean().default(false),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.trip.create({ data: input });
    }),

  updateTrip: adminProcedure
    .input(z.object({
      id: z.number(),
      tourId: z.number().optional(),
      categoryId: z.number().optional(),
      title: z.string().optional(),
      slug: z.string().optional(),
      thumbnailImageUrl: z.string().optional(),
      thumbnailVideoUrl: z.string().optional(),
      cardImageUrl: z.string().optional(),
      ItineraryImageUrl: z.string().optional(),
      ItineraryLink: z.string().optional(),
      inclusion: z.string().optional(),
      exclusion: z.string().optional(),
      notes: z.string().optional(),
      About: z.string().optional(),
      startingPrice: z.number().optional(),
      isFeature: z.boolean().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return ctx.db.trip.update({ where: { id }, data });
    }),

  deleteTrip: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.trip.delete({ where: { id: input.id } });
    }),

  // ── Trip Dates & Pricing ─────────────────────────────────────────────
  createTripDate: adminProcedure
    .input(z.object({
      tripId: z.number(),
      startDate: z.string(),
      endDate: z.string(),
      pricing: z.array(z.object({
        sharing: z.enum(["SINGLE", "DOUBLE", "TRIPLE", "QUAD"]),
        price: z.number(),
      })),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.tripDate.create({
        data: {
          tripId: input.tripId,
          startDate: new Date(input.startDate),
          endDate: new Date(input.endDate),
          pricing: {
            create: input.pricing,
          },
        },
        include: { pricing: true },
      });
    }),

  updateTripDate: adminProcedure
    .input(z.object({
      id: z.number(),
      startDate: z.string().optional(),
      endDate: z.string().optional(),
      pricing: z.array(z.object({
        sharing: z.enum(["SINGLE", "DOUBLE", "TRIPLE", "QUAD"]),
        price: z.number(),
      })).optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, pricing, ...data } = input;
      return ctx.db.$transaction(async (tx) => {
        if (data.startDate) data.startDate = new Date(data.startDate).toISOString() as any;
        if (data.endDate) data.endDate = new Date(data.endDate).toISOString() as any;
        
        const tripDate = await tx.tripDate.update({
          where: { id },
          data: {
            ...(data.startDate ? { startDate: new Date(data.startDate) } : {}),
            ...(data.endDate ? { endDate: new Date(data.endDate) } : {}),
          },
        });

        if (pricing) {
          await tx.tripPricing.deleteMany({ where: { tripDateId: id } });
          await tx.tripPricing.createMany({
            data: pricing.map((p) => ({ ...p, tripDateId: id })),
          });
        }
        return tripDate;
      });
    }),

  deleteTripDate: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.tripDate.delete({ where: { id: input.id } });
    }),

  // ── Itinerary ────────────────────────────────────────────────────────
  createItinerary: adminProcedure
    .input(z.object({
      tripId: z.number(),
      title: z.string().min(1),
      description: z.string(),
      dayNumber: z.number(),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.itinerary.create({ data: input });
    }),

  updateItinerary: adminProcedure
    .input(z.object({
      id: z.number(),
      title: z.string().optional(),
      description: z.string().optional(),
      dayNumber: z.number().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return ctx.db.itinerary.update({ where: { id }, data });
    }),

  deleteItinerary: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.itinerary.delete({ where: { id: input.id } });
    }),

  // ── FAQs ─────────────────────────────────────────────────────────────
  getAllFaqs: adminProcedure.query(async ({ ctx }) => {
    return ctx.db.faq.findMany({
      include: { tour: { select: { title: true } } },
      orderBy: { createdAt: "desc" },
    });
  }),

  createFaq: adminProcedure
    .input(z.object({
      tourId: z.number(),
      question: z.string().min(1),
      answer: z.string().min(1),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.faq.create({ data: input });
    }),

  updateFaq: adminProcedure
    .input(z.object({
      id: z.number(),
      question: z.string().optional(),
      answer: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return ctx.db.faq.update({ where: { id }, data });
    }),

  deleteFaq: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.faq.delete({ where: { id: input.id } });
    }),

  // ── Bookings ─────────────────────────────────────────────────────────
  getAllBookings: adminProcedure.query(async ({ ctx }) => {
    return ctx.db.booking.findMany({
      include: {
        user: { select: { name: true, email: true } },
        trip: { select: { title: true } },
        tripDate: true,
        items: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }),

  updateBookingStatus: adminProcedure
    .input(z.object({
      id: z.number(),
      status: z.enum(["PENDING", "CONFIRMED", "CANCELLED"]),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.booking.update({
        where: { id: input.id },
        data: { status: input.status },
      });
    }),

  // ── Users ────────────────────────────────────────────────────────────
  getAllUsers: adminProcedure.query(async ({ ctx }) => {
    return ctx.db.user.findMany({
      include: {
        _count: { select: { bookings: true, reviews: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  }),

  updateUserRole: adminProcedure
    .input(z.object({
      id: z.string(),
      role: z.enum(["USER", "ADMIN"]),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.update({
        where: { id: input.id },
        data: { role: input.role },
      });
    }),

  // ── Reviews ──────────────────────────────────────────────────────────
  getAllReviews: adminProcedure.query(async ({ ctx }) => {
    return ctx.db.review.findMany({
      include: {
        user: { select: { name: true, email: true } },
        tour: { select: { title: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  }),

  deleteReview: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.review.delete({ where: { id: input.id } });
    }),

  // ── Itinerary (by Trip) ──────────────────────────────────────────────
  getItinerariesByTrip: adminProcedure
    .input(z.object({ tripId: z.number() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.itinerary.findMany({
        where: { tripId: input.tripId },
        orderBy: { dayNumber: "asc" },
      });
    }),

  // ── Booking Sessions ─────────────────────────────────────────────────
  getAllBookingSessions: adminProcedure.query(async ({ ctx }) => {
    return ctx.db.bookingSession.findMany({
      include: {
        user: { select: { name: true, email: true } },
        trip: { select: { title: true } },
        tripDate: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }),

  updateBookingSessionStatus: adminProcedure
    .input(z.object({
      id: z.string(),
      status: z.enum(["PENDING", "PAID", "FAILED", "EXPIRED", "CANCELLED", "REFUNDED"]),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.bookingSession.update({
        where: { id: input.id },
        data: { status: input.status },
      });
    }),

  // ── Vibes (VibeVideo) ────────────────────────────────────────────────
  getAllVibes: adminProcedure.query(async ({ ctx }) => {
    return ctx.db.vibeVideo.findMany({
      orderBy: { order: "asc" },
    });
  }),

  createVibe: adminProcedure
    .input(z.object({
      url: z.string().url(),
      title: z.string().optional(),
      order: z.number().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      // Find or create UI config to associate the vibe with
      // let ui = await ctx.db.ui.findFirst();
      // if (!ui) {
      //   ui = await ctx.db.ui.create({ data: {} });
      // }

      return ctx.db.vibeVideo.create({
        data: {
          url: input.url,
          title: input.title,
          order: input.order,
          // uiId: ui.id,
        },
      });
    }),

  updateVibe: adminProcedure
    .input(z.object({
      id: z.number(),
      url: z.string().url().optional(),
      title: z.string().optional().nullable(),
      order: z.number().optional().nullable(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      // Convert null title/order to undefined or handle correctly
      return ctx.db.vibeVideo.update({ 
        where: { id }, 
        data: {
          url: data.url,
          title: data.title,
          order: data.order,
        } 
      });
    }),

  deleteVibe: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.vibeVideo.delete({ where: { id: input.id } });
    }),
});
