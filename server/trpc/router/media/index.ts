import { z } from "zod";
import { publicProcedure, router } from "../../trpc";

export const mediaRouter = router({
  getAllMediaByType: publicProcedure
    .input(
      z.object({
        ids: z.array(z.string()),
        mediaType: z.optional(z.array(z.enum(["IMG", "VID", "AUD"]))),
      })
    )
    .query(async ({ ctx, input }) => {
      const medias = await ctx.prisma.media.findMany({
        where: {
          mediatype:{in:input.mediaType},
          id:{in:input.ids}
        },
      });
      return medias
    }),
});
