import React from "react";
import type { FC } from "react";
import { PlusIcon,ChevronUpDownIcon } from "@heroicons/react/24/outline";
import SvgToman from "./SVG/Toman";
import Image from "next/image";
interface ProductCardProps {
  children: React.ReactNode;
  className: string;
  productTitle:string
  imgurl: string[];
  minPrice?: number;
  maxPrice?: number;
}
const ProductCard: FC<ProductCardProps> = (props) => {
  return (
    <div className="m-auto ">
      <div className="flex flex-col rounded-md bg-white  shadow-center p-2">
        <div className="m-auto flex">
          {props.imgurl[0]?(<Image
            src={props.imgurl[0]}
            width={300}
            height={300}
            className=" h-48 w-48 rounded-md"
            alt="product image"
          />):""}
        </div>
        <div>
          {props.productTitle}
        </div>
        <div className="flex justify-between">
          
          <div className="m-2 flex items-center  ">
            <div className='text-sm font-bold text-gray-600 font-FDsamim'>
            {props.maxPrice ? (props.minPrice?props.maxPrice+"-":"")+props.minPrice:(props.minPrice?props.minPrice:<div className='font-vazir text-sm'>بدون قیمت</div>)}
            </div>
            <div className='m-1'>
              { props.minPrice||props.maxPrice?<SvgToman className="m-1" height="0.7rem"/>:""}
            </div>
          </div>
        </div>
        <div className="flex p-2 justify-between ">
          <div className="flex w-6  flex-shrink items-center overflow-hidden whitespace-nowrap rounded-full border border-primary-500  pl-2 font-vazir text-xs font-bold transition-all duration-500 hover:w-[4.5rem]">
            <PlusIcon className="z-0  ml-1 flex h-6 w-6 flex-shrink-0 rounded-full bg-primary-500 p-1 text-white ring-1 ring-primary-500" />
            افزودن 
          </div>
          <div className='flex  text-gray-600 font-FDsamim text-sm content-center'>
             فروشنده ها<ChevronUpDownIcon className='h-5 w-5'/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
