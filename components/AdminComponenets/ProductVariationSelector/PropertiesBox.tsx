import * as React from "react";
import type { VariationOptionType } from "../../../server/db/dbtypes";
import { trpc } from "../../../utils/trpc";
import OptionBox from "./OptionBox";
import { PlusIcon } from "@heroicons/react/24/outline";

export interface IPropertyProps {
  properties: VariationOptionType[];
  setProperties:(item:VariationOptionType[])=>void
}

export default function PropertyBox(props: IPropertyProps) {
  const { properties,setProperties } = props;
  const { data: propertylist,refetch } =
    trpc.admin.products.variationOptions.getVariationOptionByIdsIncludeOptiontype.useQuery(
      {
        ids: properties && properties.map((property) => property.id),
      }
    );
  return (
    <>
      {propertylist &&
        propertylist.map((property, index) => (
          <div
            key={index}
            className=" group m-1 flex flex-nowrap items-center whitespace-nowrap rounded border border-gray-400 p-1 font-vazir"
          >
            <OptionBox variationoption={property} setVariationOption={(item) => {
              setProperties([...properties.filter(pr => item.id != pr.id), item]);
              refetch()
            }} />
          </div>
        ))}
      <div className="group m-1  flex items-center rounded border border-sky-400 p-2 font-vazir">
        افزودن
        <PlusIcon className="h-5 w-5 text-sky-500 transition-all duration-300 group-hover:rotate-90" />
      </div>
    </>
  );
}
