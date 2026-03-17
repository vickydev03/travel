import {
  baseProcedure,
  createTRPCRouter,
  protectedProcedure,
} from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import { string, z } from "zod";

export const TourRouter = createTRPCRouter({
  getTripType: baseProcedure.query(async ({ ctx }) => {
    const data = await ctx.db.tourType.findMany({
      where:{
        tours:{
          some:{
            trips:{
              some:{
                TripDate:{
                  some:{
                    startDate:{
                      gte: new Date(),
                    },
                  },
                },
              },
            },
          },
        }
      },
        include: {
          _count: {
            select: { tours: true }, 
          },
        },
    });


    return data;
  }),

getAllTour: baseProcedure.query(async ({ ctx }) => {
  try {
    const data = await ctx.db.tour.findMany({
      where: {
        isActive:true,
        trips: {
          some: {
            TripDate: {
              some: {
                startDate: {
                  gte: new Date(),
                },
                pricing: {
                  some: {
                    price: {
                      gt: 0,
                    },
                  },
                },
              },
            },
          },
        },
        
      },
      include: {
        tourType: true,
        _count: {
          select: { trips: true },
        },
      },
    });

    return data;
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to fetch tours",
      cause: error,
    });
  }
})
,upcomingTrips:baseProcedure.query(async({ctx})=>{

    try {
      const today = new Date();


    
      const trips = await ctx.db.trip.findMany({
      where: {
        
        TripDate: {
          some: {
            startDate: {
              gte: new Date()
            }
          }
        }
      },
    include: {
      TripDate: {
        where: {
          startDate: {
            gte: new Date()
          }
      },
      orderBy: {
        startDate: 'asc'
      }
    },
    tour: {
      select: { title: true }
    }
  }
});


      return trips
    } catch (error) {
      throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Failed to fetch tours',
      cause: error,
    });
    }
}),
trandingTrips:baseProcedure.query(async({ctx})=>{
  try {
    const trips = await ctx.db.trip.findMany({
      where: {
        
        TripDate: {
          some: {
            startDate: {
              gte: new Date()
            }
          }
        },AND:{
          isFeature:true
        }
      },
    include: {
      TripDate: {
        where: {
          startDate: {
            gte: new Date()
          }
      },
      orderBy: {
        startDate: 'asc'
      }
    }
  }
  });

  return trips
  } catch (error) {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Failed to fetch tours',
      cause: error,
    });
  }
})
,
getTour: baseProcedure
  .input(z.object({ id: z.number() }))
  .query(async ({ ctx, input }) => {
    try {
      const tour = await ctx.db.tour.findUnique({
  where: {
    id: input.id,
  },
  include: {
    trips: {
      include: {
        TripDate:true,
      },
    },
  },
});


      if (!tour) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Tour not found",
        });
      }

      return tour;
    } catch (error) {
      // Preserve known tRPC errors
      if (error instanceof TRPCError) {
        throw error;
      }

      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch tour",
        cause: error,
      });
    }
  }),

getReviews: baseProcedure
  .input(
    z.object({
      tourId: z.number().int().positive(),
    })
  )
  .query(async ({ ctx, input }) => {
    try {
      return await ctx.db.review.findMany({
        where: {
          tourId: input.tourId,
        },
        orderBy: {
          createdAt: "desc",
        },
        include:{
          user:true
        }
        
      });
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch reviews",
        cause: error,
      });
    }
  }),
getReviewsAll: baseProcedure
  .query(async ({ ctx }) => {
    try {
      return await ctx.db.review.findMany({
        orderBy: {
          createdAt: "desc",
        },
        include:{
          user:true
        }
        
      });
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch reviews",
        cause: error,
      });
    }
  }),
getFaq: baseProcedure
  .input(
    z.object({
      tourId: z.number().int().positive().optional(),
    })
  )
  .query(async ({ ctx, input }) => {

    if (!input.tourId) return []
    try {
      return await ctx.db.faq.findMany({
        where: {
          tourId: input.tourId,
        },
        orderBy: {
          createdAt: "desc",
        }
      });
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch faq",
        cause: error,
      });
    }
  }),

getTrip:baseProcedure.input(
  z.object(
    {
      tripId:z.number().int().positive(),
    }
  )
).query((async({ctx,input})=>{
  try {
    
  const trips=await ctx.db.trip.findFirst({
    where:{
      id:input.tripId
    },
    include:{
      TripDate: {
        include: {
          pricing: true,
        },
      },
    }
  })

  if (!trips){
    throw new TRPCError({
        code: "NOT_FOUND",
        message: "Failed to fetch Trip",
      });
  }
  return trips
  } catch (error) {
    throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch Trip",
        cause:error
      });
  }

})),
getItinerary:baseProcedure.input(z.object({tripId:z.number()})).query((async({ctx,input})=>{
  try {
    if(!input.tripId){
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "trip id is not found!",
      });
    }
    const itineraries=await ctx.db.itinerary.findMany({
      where:{
        tripId:input.tripId
      }
    })
    return itineraries
  } catch (error) {
    throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch inineraries",
        cause:error
      });
  }
})),

getCategories: baseProcedure.query(async ({ ctx }) => {
  try {
    const categories = await ctx.db.category.findMany({
      include: {
        _count: {
          select: { trip: true },
        },
      },
    });
    return categories;
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to fetch categories",
      cause: error,
    });
  }
}),

exploreTrips: baseProcedure
  .input(
    z.object({
      tourTypeId: z.number().optional(),
      categoryId: z.number().optional(),
      month: z.string().optional(), // "2026-04" format
      minPrice: z.number().optional(),
      maxPrice: z.number().optional(),
      search: z.string().optional(),
      sortBy: z
        .enum(["price_asc", "price_desc", "date_asc"])
        .optional()
        .default("date_asc"),
      cursor: z.number().optional(),
      limit: z.number().min(1).max(50).default(12),
    })
  )
  .query(async ({ ctx, input }) => {
    try {
      const {
        tourTypeId,
        categoryId,
        month,
        minPrice,
        maxPrice,
        search,
        sortBy,
        cursor,
        limit,
      } = input;

      // Build the where clause dynamically
      const where: any = {
        TripDate: {
          some: {
            startDate: {
              gte: new Date(),
            },
          },
        },
      };

      // Tour type filter (through tour relation)
      if (tourTypeId) {
        where.tour = { tourTypeId };
      }

      // Category filter
      if (categoryId) {
        where.categoryId = categoryId;
      }

      // Price range filter
      if (minPrice !== undefined) {
        where.startingPrice = { ...where.startingPrice, gte: minPrice };
      }
      if (maxPrice !== undefined) {
        where.startingPrice = { ...where.startingPrice, lte: maxPrice };
      }

      // Search filter (title)
      if (search && search.trim()) {
        where.title = { contains: search.trim(), mode: "insensitive" };
      }

      // Month filter — filter trips that have a TripDate starting in a given month
      if (month) {
        const [year, mon] = month.split("-").map(Number);
        const monthStart = new Date(year, mon - 1, 1);
        const monthEnd = new Date(year, mon, 0, 23, 59, 59, 999);
        where.TripDate = {
          some: {
            startDate: {
              gte: monthStart,
              lte: monthEnd,
            },
          },
        };
      }

      // Cursor-based pagination
      const cursorClause = cursor ? { id: cursor } : undefined;
      const skip = cursor ? 1 : 0;

      // Sorting
      let orderBy: any = { id: "asc" };
      if (sortBy === "price_asc") orderBy = { startingPrice: "asc" };
      if (sortBy === "price_desc") orderBy = { startingPrice: "desc" };
      if (sortBy === "date_asc") orderBy = { id: "desc" }; // newest first

      const trips = await ctx.db.trip.findMany({
        where,
        include: {
          TripDate: {
            where: {
              startDate: {
                gte: new Date(),
              },
            },
            orderBy: {
              startDate: "asc",
            },
          },
          tour: {
            include: {
              tourType: true,
            },
          },
          category: true,
        },
        orderBy,
        take: limit + 1,
        skip,
        cursor: cursorClause,
      });

      let nextCursor: number | undefined = undefined;
      if (trips.length > limit) {
        const nextItem = trips.pop();
        nextCursor = nextItem!.id;
      }

      return {
        trips,
        nextCursor,
      };
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch explore trips",
        cause: error,
      });
    }
  }),

});
