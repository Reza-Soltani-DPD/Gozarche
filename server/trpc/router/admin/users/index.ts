import { router } from "../../../trpc";
import { userRouter } from './user';
export const usersRouter = router({
  user:userRouter,
});
