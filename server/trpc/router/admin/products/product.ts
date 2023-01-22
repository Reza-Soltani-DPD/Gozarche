import { z } from "zod";
import { router, protectedProcedure } from "../../../trpc";
export const productRouter = router({
  getallproducts: protectedProcedure
    .input(
      z.object({
        skip: z.optional(z.number()),
        take: z.optional(z.number()),
        orderBy: z.optional(z.string()),
      })
    )
    
    .query(async ({ ctx, input }) => {
      const products = await ctx.prisma.product.findMany({
        take: input.take,
        skip: input.skip,
        orderBy: {
          [input.orderBy ? input.orderBy : "updatedAT"]: "asc",
        },
      });
      
      return products;
    }),
});
