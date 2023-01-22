import { router } from "../../../trpc";
import { productRouter } from './product';
export const productsRouter = router({
  product:productRouter,
});
