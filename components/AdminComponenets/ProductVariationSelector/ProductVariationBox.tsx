import * as React from "react";
import { CheckIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import PropertyBox from "./PropertiesBox";
import type {
  ProductVariantType_Include_Options,
  ProductVariantType,
} from "../../../server/db/dbtypes";

export interface ProductOptionBoxPropsType {
  variation: ProductVariantType_Include_Options;
  setVariation: (variation: ProductVariantType) => void;
}

export default function ProductOptionBox(props: ProductOptionBoxPropsType) {
  const { variation,setVariation } = props;
  const [variationState, setVariationState] =
    React.useState<ProductVariantType_Include_Options>(variation);

  const diff: boolean =
    JSON.stringify(variation) == JSON.stringify(variationState);

  return (
    <>
      <div className="my-2  w-full items-center justify-between rounded-lg border border-sky-400 p-2 shadow ">
        <div className="my-2 flex w-full items-center p-2 font-vazir ">
          {variation.imageurl && variation.imageurl[0] ? (
            <div className="m-1 flex aspect-square items-center justify-items-center rounded bg-white p-1">
              <Image
                src={variation.imageurl[0]}
                width={70}
                height={70}
                className=" rounded"
                alt="product Image"
              />
            </div>
          ) : (
            ""
          )}
          <span> {variation.title}</span>
        </div>
        <div className=" p-2 w-full">
          <span className="my-2 font-vazir">مشخصات:</span>
          <div className="flex p-2 w-full flex-wrap">
            <PropertyBox properties={variation?.options && variation.options} setProperties={(properties) => { console.log(properties) }} />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            {!diff && (
              <div className="group  flex items-center rounded border border-sky-500 p-2 font-vazir font-bold text-sky-400 ">
                لغو تغیرات
                <PlusIcon
                  className="mx-1 h-5 w-5 -rotate-45 stroke-[4px] transition-all duration-300 group-hover:rotate-45"
                  onClick={(e) => e}
                />
              </div>
            )}
          </div>
          <span className="flex flex-nowrap">
          {!diff && (

            <span className="flex items-center rounded border border-secondary-600 p-2 font-vazir font-bold text-secondary-600 ">
              ثبت تغیرات
              <CheckIcon className="h-5 w-5 stroke-[4px] " onClick={(e) => e} />
            </span>
              )}
            <span className="mx-2 flex items-center rounded border border-rose-500 p-2 font-vazir font-bold text-rose-600 ">
              حذف
              <TrashIcon className="mx-1 h-5 w-5  " onClick={(e) => e} />
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
