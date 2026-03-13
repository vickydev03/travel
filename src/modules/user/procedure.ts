import { createClient } from "@/lib/server";
import {
  baseProcedure,
  createTRPCRouter,
  getUserProcedure,
  protectedProcedure,
} from "@/trpc/init";
import { loginSchema } from "@/utils/schema";
import { supabase as supabaseAdmin } from "@/utils/supabase";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const userRouter = createTRPCRouter({
  login: baseProcedure.input(loginSchema).mutation(async ({ input, ctx }) => {
    const { email, password } = input;
    
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(data,"vicky") 
    console.log(error,"vicky")
    if (error) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message:
          error.status === 400
            ? "Invalid email or password"
            : "Login failed. Please try again.",
      });
    }
    console.log(data,"vicky")
    if (!data.user || !data.session) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Login failed. Please try again.",
      });
    }

    return {
      mode: "login" as const,
      user: data.user,
      session: data.session,
    };
  }),

  register: baseProcedure
    .input(loginSchema)
    .mutation(async ({ input, ctx }) => {
      const { email, password } = input;

      const existingUser = await ctx.db.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "An account with this email already exists. Please log in.",
        });
      }

      const supabase = await createClient();

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error || !data.user) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: error?.message ?? "Registration failed. Please try again.",
        });
      }

      const dbUser = await ctx.db.user.create({
        data: {
          id: data.user.id,
          email: data.user.email!,
          isActive: true,
        },
      });

      return {
        mode: "register" as const,
        user: data.user,
        session: data.session,
        dbUser,
      };
    }),

  // ... rest of router unchanged
  getUser: getUserProcedure.input(z.object({
    email:z.string()
  })).query(async ({ ctx,input }) => {
    try {

      const data=await ctx.db.user.findFirst({
        where:{
          email:input.email
        }
      })

      return data
    } catch (error) {
      console.log(error);
    }
  }),
  profile: getUserProcedure.query(async ({ ctx }) => {
    try {
      console.log(ctx.user, "test ");
        
      const data = await ctx.db.user.findFirst({
        where: {
          email: ctx.user?.email!
        }
      });

      if (!data) return null;

      const { password, ...safeUser } = data;
      return safeUser;

    } catch (error) {
      console.log(error);
    }
  }),

  upsert: getUserProcedure.mutation(async ({ ctx }) => {
    try {
      console.log(ctx.user, "test data user");
      if (!ctx.user || !ctx.user.email) return;
      await ctx.db.user.upsert({
        where: { id: ctx.user.sub },
        create: {
          id: ctx.user.sub,
          email: ctx.user?.email ?? "",
          name: (ctx.user as any)?.name ?? ctx.user?.user_metadata?.full_name ?? "",
        },
        update: {
          email: ctx.user?.email ?? "",
          name: (ctx.user as any)?.name ?? ctx.user?.user_metadata?.full_name ?? "",
        },
      });
    } catch (error) {
      console.error(error);
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Something went wrong.",
      });
    }
  }),
});
