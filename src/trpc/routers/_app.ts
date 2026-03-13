// import { userRouter } from "@/modules/user/server/procedures";
import { TourRouter } from "@/modules/Tours/server/procedure";
import {  createTRPCRouter } from "../init";
import { HomeRouter } from "@/modules/home/server/procedure";
import { userRouter } from "@/modules/user/procedure";
import { bookingRouter } from "@/modules/bookings/server/procedure";
import { adminRouter } from "@/modules/admin/server/procedure";

export const appRouter = createTRPCRouter({
  tours:TourRouter,
  home:HomeRouter,
  user:userRouter,
  booking:bookingRouter,
  admin:adminRouter,
});

export type AppRouter = typeof appRouter;
