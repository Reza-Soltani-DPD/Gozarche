import { z } from "zod";
import { router, adminProcedure } from "../../../trpc";

export const variationOptionsRouter = router({
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
  getVariationOptionByIdsIncludeOptiontype: adminProcedure
    .input(
      z.object({
        ids: z.array(z.string()),
      })
    )
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.variationOption.findMany({
        where: { id: { in: input.ids } },
        include: { variation: true },
      });
    }),
  searchVariationOptionByIncludeVariation: adminProcedure
    .input(
      z.object({ type: z.optional(z.string()), value: z.optional(z.string()) })
    )
    .mutation(async ({ ctx, input }) => {
      const { type, value } = input;
      let variations
      let variationOptions
      if (type) {
        variations = await ctx.prisma.variation.findMany({
          where: { Name: { contains: type } },
        });
      }
      if (value) {
        variationOptions = await ctx.prisma.variationOption.findMany({
          where: { optionValue: { contains: value } },
          include:{variation:true}
        });
      }
      
      const varID = variations ? variations.map((vari) => vari.id) : [];
      const res = variationOptions
        ? type
          ? varID
            ? variationOptions.filter((item) =>
                varID.includes(item.variationId)
              )
            : []
          : variationOptions
        : [];
      return res;
    }),
});
