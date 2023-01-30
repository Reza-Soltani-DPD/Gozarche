import { router } from "../../../trpc";
import { productRouter } from './product';
import { tagsRouter } from './tags';
import { variationOptionsRouter } from './variationoptions';
import { variationsRouter } from './variations';

export const productsRouter = router({
  product:productRouter,
  tag:tagsRouter,
  variations:variationsRouter,
  variationOptions:variationOptionsRouter
});
