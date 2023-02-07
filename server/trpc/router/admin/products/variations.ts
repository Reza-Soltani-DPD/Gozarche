import { z } from "zod";
import { router, adminProcedure } from "../../../trpc";

export const variationsRouter = router({
  getVariationsBySearchField: adminProcedure
    .input(
      z.object({
        field: z.string(),
        searchPhrase: z.array(z.string()),
      })
    )
    .query(async ({ ctx, input }) => {
      try {
        const variations = await ctx.prisma.productvariant.findMany({
          where: input.field
            ? { [input.field]: input.searchPhrase }
            : undefined,
        });
        return variations;
      } catch (error) {
        return undefined;
      }
    }),
  getProductVariationsByIdsIncludeOptions: adminProcedure
    .input(z.object({ ids: z.array(z.string()) }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.productvariant.findMany({
        where: { id: { in: input.ids } },
        include: { options: true },
      });
    }),
});
