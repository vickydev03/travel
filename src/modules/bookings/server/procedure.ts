import { SharingType } from "@/generated/prisma";
import { createClient } from "@/lib/server";
import {
  baseProcedure,
  createTRPCRouter,
  protectedProcedure,
} from "@/trpc/init";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const bookingRouter = createTRPCRouter({
  createBookingSession: protectedProcedure(["USER", "ADMIN"])
    .input(
      z.object({
        userId: z.string(),
        tripId: z.number(),
        tripDateId: z.number(),
        seatCount: z.number().optional().default(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        // 1️⃣ Check if trip exists
        const trip = await ctx.db.trip.findUnique({
          where: { id: input.tripId },
        }); 

        if (!trip) {
          throw new TRPCError({
            message: "Trip not found",
            code: "BAD_REQUEST",
          });
        }

        // 2️⃣ Check if trip date exists
        const tripDate = await ctx.db.tripDate.findUnique({
          where: { id: input.tripDateId },
        });

        if (!tripDate) {
          throw new TRPCError({
            message: "Trip date not found",
            code: "BAD_REQUEST",
          });
        }

        // 3️⃣ Create booking session
        const bookingSession = await ctx.db.bookingSession.create({
          data: {
            userId: input.userId, // link to user
            tripId: input.tripId,
            tripDateId: input.tripDateId,
            seatCount: input.seatCount,
            status: "PENDING", // default status
            expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 min expiry
          },
        });

        return bookingSession;
      } catch (error) {
        console.error("createBookingSession error:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Could not create booking session",
        });
      }
    }),
  getBookingSession: protectedProcedure(["USER", "ADMIN"])
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const data = await ctx.db.bookingSession.findUnique({
        where: {
          id: input.id,
        },
        include: {
          user: true,
          trip: true,
          tripDate: {
            include:{
              pricing:true
            }
          },
        },
      });


       if (!data) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Booking session not found",
      });
        }

    return data
    }),

  createBooking:protectedProcedure(["ADMIN"]).input(
    z.object({
      items:z.array(z.object({
        sharingType:z.string(),
        quantity:z.number(),
        pricePerPerson:z.number(),
        subtotal:z.number(),
      })),
      booking:z.object({
        userId:z.string(),
        mobileNumber:z.string(),
        tripId:z.number(),
        tripDateId:z.number(),
        totalAmount:z.number(),
        totalSeats:z.number(),
      })
    })
  ).mutation(async({input,ctx})=>{
    
    // const [items,booking]=await ctx.db.$transaction

    const result = await ctx.db.$transaction(async (tx) => {

    const booking = await tx.booking.create({
      data: {
        userId:input.booking.userId,
        tripId:input.booking.tripId,
        tripDateId:input.booking.tripDateId,
        status:"PENDING",
        mobileNumber:input.booking.mobileNumber,
        totalAmount:input.booking.totalAmount,
        totalSeats:input.booking.totalSeats
      }
    });

    const items = await tx.bookingItem.createMany({
      data: input.items.map((e) => ({
      bookingId: booking.id,
      sharingType: e.sharingType as SharingType,
      quantity: e.quantity,
      pricePerPerson: e.pricePerPerson,
      subtotal: e.subtotal
    }))
  });

  return { booking, items };
});
    return {
      message:"Booking Created Successfully",
      success:true
    }

  })
});
