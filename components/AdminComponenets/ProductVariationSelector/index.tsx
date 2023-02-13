import { PlusIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import { trpc } from "../../../utils/trpc";
import ProductVariationBox from "./ProductVariationBox";
import type { ProductVariantType } from '../../../server/db/dbtypes'

export interface IRealationSelectorProps {
  variations: ProductVariantType[]|undefined;
  setVariations: (variations: ProductVariantType[]) => void;
}

export function ProductVariationSelector(
  props: IRealationSelectorProps
) {
  const { variations, setVariations } = props;

  const { data: productVariations } =
    trpc.admin.products.productvariations.getProductVariationsByIdsIncludeOptions.useQuery({
      ids:variations?variations.map(vari=>vari.id):[],
    });
  return (
    <div className=" m-2 box-border w-full rounded-lg border border-gray-400 bg-gray-200 ">
      <div className=" w-full ">
        <div className="m-2">
          {productVariations
            ? productVariations.map((item, index) => (
                <ProductVariationBox
                  key={index}
                  variation={item}
                  setVariation={(variation) => {
                    if (variations) {
                      setVariations([...variations,variation])
                    }
                  }}
                />
              ))
            : ""}
          <div className="group my-2 flex w-full items-center justify-center rounded-lg border border-sky-400 p-2 font-vazir font-bold text-sky-400 transition-all duration-500 hover:rounded-2xl ">
            افزودن جدید
            <PlusIcon className="mx-1 h-5 w-5   text-sky-400 transition-all duration-300 group-hover:rotate-90 stroke-[4px] " />
          </div>
        </div>
      </div>
    </div>
  );
}
