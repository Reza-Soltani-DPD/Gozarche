import { PlusIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import { trpc } from "../../../utils/trpc";

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
                  <div className="my-2 flex w-full items-center justify-between p-2 ">
                    <span> {item.title}</span>
                    <span className="flex items-center rounded border border-rose-500 p-2 font-vazir font-bold text-rose-600 ">
                      حذف
                      <PlusIcon
                        className="h-5 w-5 rotate-45 "
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
                  </div>
                  <div className="flex p-2">
                    <span className="my-2 font-vazir">مشخصات:</span>
                    <div className="flex p-2  ">
                      {item.options &&
                        item.options.map((option, index) => (
                          <div
                            key={index}
                            className="m-1 whitespace-nowrap rounded border border-gray-400 p-1 font-vazir flex flex-nowrap items-center"
                          >
                            {option.option ? (
                              <div>
                                {" "}
                                {option.option}:{option.optiontype.name}
                              </div>
                            ) : (
                              " "
                            )}
                            <div>
                              <PlusIcon className='w-5 h-5 m-1 text-rose-500 rotate-45 hover:scale-125 stroke-2 duration-50 transition-all' />
                              </div>
                          </div>
                        ))}
                      <div className='flex  border border-sky-400 rounded items-center m-1 p-2 font-vazir'>افزودن<PlusIcon className='w-5 h-5 text-sky-500 hover:scale-125 duration-50 transition-all'/></div>
                    </div>
                  </div>
                </div>
              ))
            : ""}
          <div className="group my-2 flex w-full items-center justify-center rounded-lg border border-sky-400 p-2 font-vazir font-bold text-sky-400 transition-all duration-500 hover:rounded-2xl">
            افزودن جدید
            <PlusIcon className="mx-2 h-7 w-7 text-sky-400 transition-all duration-1000 group-hover:rotate-[180deg]" />
          </div>
        </div>
      </div>
      <div className=" flex items-center">
        <label className="textLabel my-0">جستجو:</label>
        <div className=" relative ml-6 flex-grow items-center">
          <input className=" realtive  textInput peer  my-2 w-full" />
          <div
            className="absolute top-0 z-30 mx-2 h-0 w-full translate-y-10 rounded-lg border-0 bg-white 
                          shadow-lg
                          transition-all
                            duration-500
                            hover:h-64
                            hover:border
                              peer-hover:h-64
                              peer-hover:border peer-focus:h-64 peer-focus:border"
          ></div>
        </div>
      </div>
    </div>
  );
}
