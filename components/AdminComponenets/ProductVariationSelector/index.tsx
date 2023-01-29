import { PlusIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import { trpc } from "../../../utils/trpc";

export interface IRealationSelectorProps {
  ids: string[];
  setIds: (ids: string[]) => void;
}

export function ProductVariationSelector(props: IRealationSelectorProps) {
  const { ids, setIds } = props;

  const { data: variations } =
    trpc.admin.products.variations.getVariationsByIds.useQuery({
      ids,
      includes: ["variations", "tag"],
    });
  console.log(variations);

  // const {data:VOpts}=trpc.
  return (
    <div className=" box-border w-full rounded-lg border border-gray-400 m-2 ">
      <div className=" w-full ">
        <div className="m-2">
          {variations
            ? variations.map((item, index) => (
                <div
                  key={index}
                  className="my-2 flex w-full items-center justify-between rounded-lg border border-gray-400 p-2"
                >
                  <span> {item.id}</span>
                  <div>
                    <PlusIcon
                      className="h-5 w-5 rotate-45 text-red-500"
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
