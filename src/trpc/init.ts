import { initTRPC, TRPCError } from "@trpc/server";
import { cookies, headers as getHeaders } from "next/headers";

import { createServerClient } from "@supabase/ssr";
// import { cache } from "react";
import SuperJSON from "superjson";
import { db } from "../../prisma/seed";
import { createClient } from "@/lib/server";
import { convertSegmentPathToStaticExportFilename } from "next/dist/shared/lib/segment-cache/segment-value-encoding";
// import { createClient } from "@supabase/supabase-js";
// import { createClient } from "@/lib/server";
// import { getSupabaseServerClient} from "@/utils/supabase";
// import { adminAuth, db } from "../../firebase/server";
// import admin from "firebase-admin"
// import nookies from "nookies";
// import { Role } from "@/types";
export const createTRPCContext = async () => {};
// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.create({
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  transformer: SuperJSON,
});
// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure.use(async ({ next }) => {
  return next({ ctx: { db } });
});

export const getUserProcedure = baseProcedure.use(async ({ ctx, next }) => {
  // const cookieStore = await cookies();
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  console.log(data, "getUser debug")
  if (error) {
    console.error("Supabase auth error:", error);
    
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: error.message || "Authentication failed",
      cause: error,
    });
  }

  // user from getUser() has properties like .id, .email, and .user_metadata
  const user = data?.user;

  return next({
    ctx: {
      ...ctx,
      // Map properties to match how upsert expects them if needed
      user: user ? { ...user, sub: user.id } : null,
    },
  });
});

export const protectedProcedure = (requiredPermissions: string[]) =>
  getUserProcedure.use(async ({ ctx, next }) => {
    console.log(ctx.user, "456");
    const userEmail=ctx.user?.email
    if (!userEmail) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "User email missing" });
    }
    console.log(userEmail,"asb")
    const User=await ctx.db.user.findUnique({
      where:{
        email:userEmail
      }
    })
    
    console.log(User,"7845")
    if (!User){
       throw new TRPCError({ code: "FORBIDDEN", message: "Access denied" });
    }
    
    if (!requiredPermissions.includes(User.role)) {
      throw new TRPCError({ code: "FORBIDDEN", message: "Access denied" });
    }

    return next({ ctx });
  });
