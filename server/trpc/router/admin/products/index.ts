import { router } from "../../../trpc";
import { productRouter } from './product';
import { tagsRouter } from './tags';
export const productsRouter = router({
  product:productRouter,
  tag:tagsRouter
});
