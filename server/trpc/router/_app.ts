import { router } from "../trpc";
import { adminRouter } from './admin';
import { authRouter } from "./auth";
import { mediaRouter } from './media';

export const appRouter = router({
  auth: authRouter,
  admin:adminRouter,
  image:mediaRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
