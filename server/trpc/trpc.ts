import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";

import { type Context } from "./context";

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const router = t.router;

/**
 * Unprotected procedure
 **/
export const publicProcedure = t.procedure;

/**
 * Reusable middleware to ensure
 * users are logged in
 */
const isAuthed = t.middleware(({ ctx, next }) => {
  
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  
  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session, user: ctx.session.user },
      prisma:ctx.prisma
    },
  });
});

const isAdmin = t.middleware(({ctx,next})=>{
  if(!ctx.session|| !ctx.session.user?.isStaff){
    throw new TRPCError({ code:"FORBIDDEN"})

  }
  return next({
    ctx:{
      session:{...ctx.session,user:ctx.session.user},
      prisma:ctx.prisma
    }
  })
})


const isSuperUser = t.middleware(({ctx,next})=>{
  if(!ctx.session|| !ctx.session.user?.isSuperUser){
    throw new TRPCError({ code:"FORBIDDEN"})

  }
  return next({
    ctx:{
      session:{...ctx.session,user:ctx.session.user},
      prisma:ctx.prisma
    }
  })
})

export const protectedProcedure = t.procedure.use(isAuthed   );
export const adminProcedure     = t.procedure.use(isAdmin    );
export const superUserProcedure = t.procedure.use(isSuperUser);
