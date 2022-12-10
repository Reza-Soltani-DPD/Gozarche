import { z } from 'zod';
import { router, publicProcedure, protectedProcedure } from "../trpc";

export const authRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
  signUp:publicProcedure.input(z.object({username:z.string(),password:z.string()})).mutation(({input})=>{
    console.log(input);
    
  })
});
