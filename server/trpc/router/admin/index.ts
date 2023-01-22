import { router } from "../../trpc";
import { productsRouter } from './products';
import { usersRouter } from './users';
export const adminRouter = router({
  products:productsRouter,
  users:usersRouter

});
