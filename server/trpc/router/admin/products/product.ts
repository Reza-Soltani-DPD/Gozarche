import { z } from "zod";
import { router, adminProcedure } from "../../../trpc";

export const productRouter = router({
  getproducts: adminProcedure
    .input(
      z.object({
        skip: z.optional(z.number()),
        take: z.optional(z.number()),
        orderBy: z.optional(
          z.object({
            order: z.string(),
            asc: z.boolean(),
          })
        ),
        filter: z.optional(
          z.object({
            filtername: z.string(),
            filterState: z.boolean(),
          })
        ),
      })
    )
    .output(
      z.array(
        z.object({
          id: z.string(),
          imageid: z.array(z.string()),
          slug: z.string(),
          title: z.string(),
          createdAT: z.date(),
        })
      )
    )
    .query(async ({ ctx, input }) => {
      const products = await ctx.prisma.product.findMany({
        take: input.take,
        skip: input.skip,
        where:
          input.filter && input.filter.filtername != "all"
            ? {
                ...{
                  [input.filter?.filtername]: input.filter?.filterState,
                },
              }
            : undefined,
        orderBy: {
          [input.orderBy?.order ? input.orderBy.order : "createdAT"]: input
            .orderBy?.asc
            ? "asc"
            : "desc",
        },
      });

      return [...products.map((product)=>{return {id:product.id,imageid:product.imageid,slug:product.slug,title:product.title,createdAT:product.createdAT}})];
    }),
    getproductById:adminProcedure.input(z.string()).query(async ({ctx,input})=>{return await ctx.prisma.product.findUnique({where:{id:input}})}),
    deleteproducts:adminProcedure.input(z.array(z.string())).mutation(({input})=>{
      
      console.log(input);
      
    }),
    editproduct:adminProcedure.mutation(({input})=>{
console.log(input);

    }),
  productCount: adminProcedure
    .output(
      z.object({
        all: z.number(),
        published: z.number(),
        trashed: z.number(),
      })
    )
    .query(async ({ ctx }) => {
      const all = await ctx.prisma.product.aggregate({
        _count: { trashed: true },
      });
      const trashed = await ctx.prisma.product.aggregate({
        _count: { trashed: true },
        where: { trashed: true },
      });
      const published = await ctx.prisma.product.aggregate({
        _count: { published: true },
        where: { published: true },
      });

      return {
        all: all._count.trashed,
        published: published._count.published,
        trashed: trashed._count.trashed,
      };
    }),
});
