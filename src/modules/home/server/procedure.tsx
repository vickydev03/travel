import {
  baseProcedure,
  createTRPCRouter,
  protectedProcedure,
} from "@/trpc/init";
import { TRPCError } from "@trpc/server";
// import { string, z } from "zod";

export const HomeRouter = createTRPCRouter({
  getVibeVideo: baseProcedure.query(async ({ ctx }) => {
    try {
      const ui = await ctx.db.vibeVideo.findMany({
        orderBy: { order: "asc" },
      });

      // No UI config found
      if (!ui) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "UI configuration not found",
        });
      }

      // Optional: empty videos case
      if (ui.length === 0) {
        return {
          total: 0,
          videos: [],
        };
      }

      // Shape response (do NOT expose Prisma internals)
      return {
        total: ui.length,
        videos: ui.map((video) => ({
          id: video.id,
          url: video.url,
          title: video.title ?? null,
        })),
      };
    } catch (error) {
      // Log for observability
      console.error("[getVibeVideo]", error);

      // Known tRPC error → rethrow
      if (error instanceof TRPCError) {
        throw error;
      }

      // Unknown error → hide internals
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch vibe videos",
      });
    }
  }),
});
