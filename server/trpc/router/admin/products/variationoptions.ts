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
  getVariationOptionByIdsIncludeOptionvalue: adminProcedure
    .input(
      z.object({
        ids: z.array(z.string()),
      })
    )
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.variationOption.findMany({
        where: { id: { in: input.ids } },
        include: { optionValue: true },
      });
    }),
  searchVariationOptionByIncludeOptionvalue: adminProcedure
    .input(
      z.object({ type: z.optional(z.string()), value: z.optional(z.string()) })
    )
    .mutation(async ({ ctx, input }) => {
      const { type, value } = input;
      if (!type) return [];
      const find = await ctx.prisma.variationOption.findMany({
        where: { optionType: { contains: type } },
        include: { optionValue: true },
      });
      const res = value
        ? find
          ? find.filter((item) => item.optionValue.value.includes(value))
          : []
        : find;
      return res;
    }),
});
