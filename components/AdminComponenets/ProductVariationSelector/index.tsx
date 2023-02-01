import { CheckIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import { trpc } from "../../../utils/trpc";
import Image from "next/image";

export interface IRealationSelectorProps {
  ids: string[];
  setIds: (ids: string[]) => void;
}

export function ProductVariationSelector(props: IRealationSelectorProps) {
  const { ids, setIds } = props;

  const { data: productVariations } =
    trpc.admin.products.variations.getProductVariationsByIds.useQuery({
      ids,
    });

  return (
    <div className=" m-2 box-border w-full rounded-lg border border-gray-400 bg-gray-200 ">
      <div className=" w-full ">
        <div className="m-2">
          {productVariations
            ? productVariations.map((item, index) => (
                <div
                  key={index}
                  className="my-2  w-full items-center justify-between rounded-lg border border-sky-400 p-2 shadow"
                >
                  <div className="my-2 flex w-full items-center p-2 font-vazir ">
                    {item.imageurl && item.imageurl[0] ? (
                      <div className="m-1 flex aspect-square items-center justify-items-center rounded bg-white p-1">
                        <Image
                          src={item.imageurl[0]}
                          width={70}
                          height={70}
                          className=" rounded"
                          alt="product Image"
                        />
                      </div>
                    ) : (
                      ""
                    )}
                    <span> {item.title}</span>
                  </div>
                  <div className="flex p-2">
                    <span className="my-2 font-vazir">مشخصات:</span>
                    <div className="flex p-2  ">
                      {item.options &&
                        item.options.map((option, index) => (
                          <div
                            key={index}
                            className=" group m-1 flex flex-nowrap items-center whitespace-nowrap rounded border border-gray-400 p-1 font-vazir"
                          >
                            {option.option ? (
                              <div>
                                {" "}
                                {option.option}:{option.optiontype.name}
                              </div>
                            ) : (
                              " "
                            )}
                            <div className="duration-300 group-hover:rotate-90 ">
                              <PlusIcon className="m-1 h-5 w-5 rotate-45 stroke-2 text-rose-500 transition-all duration-300 hover:-rotate-45" />
                            </div>
                          </div>
                        ))}
                      <div className="group m-1  flex items-center rounded border border-sky-400 p-2 font-vazir">
                        افزودن
                        <PlusIcon className="h-5 w-5 text-sky-500 transition-all duration-300 group-hover:rotate-90" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="  flex items-center rounded border border-sky-500 p-2 font-vazir font-bold text-sky-400 ">
                      لغو تغیرات
                      <PlusIcon
                        className="mx-1 h-5 w-5 rotate-45 group-hover:-rotate-45 "
                        onClick={() => {
                          setIds(
                            ids
                              ? ids.filter((I) => {
                                  return I != item.id;
                                })
                              : []
                          );
                        }}
                      />
                    </span>
                    <span className="flex flex-nowrap">
                      <span className="flex items-center rounded border border-secondary-600 p-2 font-vazir font-bold text-secondary-600 ">
                        ثبت تغیرات
                        <CheckIcon
                          className="h-5 w-5  "
                          onClick={() => {
                            setIds(
                              ids
                                ? ids.filter((I) => {
                                    return I != item.id;
                                  })
                                : []
                            );
                          }}
                        />
                      </span>
                      <span className="mx-2 flex items-center rounded border border-rose-500 p-2 font-vazir font-bold text-rose-600 ">
                        حذف
                        <TrashIcon
                          className="mx-1 h-5 w-5 "
                          onClick={() => {
                            setIds(
                              ids
                                ? ids.filter((I) => {
                                    return I != item.id;
                                  })
                                : []
                            );
                          }}
                        />
                      </span>
                    </span>
                  </div>
                </div>
              ))
            : ""}
          <div className="group my-2 flex w-full items-center justify-center rounded-lg border border-sky-400 p-2 font-vazir font-bold text-sky-400 transition-all duration-500 hover:rounded-2xl">
            افزودن جدید
            <PlusIcon className="mx-2 h-7 w-7 text-sky-400 transition-all duration-300 group-hover:rotate-90" />
          </div>
        </div>
      </div>
    </div>
  );
}
