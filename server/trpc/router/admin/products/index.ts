import { router } from "../../../trpc";
import { productRouter } from './product';
import { tagsRouter } from './tags';
import { variationOptionsRouter } from './variationoptions';
import { variationsRouter } from './productvariations';

export const productsRouter = router({
  product:productRouter,
  tag:tagsRouter,
  productvariations:variationsRouter,
  variationOptions:variationOptionsRouter
});
