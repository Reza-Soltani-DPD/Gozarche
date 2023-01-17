import React from "react";
import type { FC } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import SvgToman from "./SVG/Toman";
import Image from "next/image";
interface ProductCardProps {
  className: string;
  children: React.ReactNode;
  imgurl: string;
  price?: number;
  discount?: number;
}
const ProductCard: FC<ProductCardProps> = (props) => {
  return (
    <div className="m-auto ">
      <div className="flex flex-col rounded-md bg-white  shadow-center p-2">
        <div className="m-auto flex">
          <Image
            src={props.imgurl}
            width={300}
            height={300}
            className=" h-48 w-48 rounded-md"
            alt="product image"
          />
        </div>
        <div className="flex justify-between">
          <div >
            <div className="forn-homa m-2 rounded-full bg-primary-500 p-1 text-right text-xs text-white">
              10<span>%</span>
            </div>
          </div>
          <div className="m-2 flex items-center  text-xs font-FDdirooz">
            100000
            <div className='m-1'>
              <SvgToman className="" height="0.7rem"/>
            </div>
          </div>
        </div>
        <div className="flex p-2 justify-between ">
          <div className="flex w-6  flex-shrink items-center overflow-hidden whitespace-nowrap rounded-full border border-primary-500  pl-2 font-vazir text-xs font-bold transition-all duration-500 hover:w-28">
            <PlusIcon className="z-0  ml-1 flex h-6 w-6 flex-shrink-0 rounded-full bg-primary-500 p-1 text-white ring-1 ring-primary-500" />
            افزودن به سبد
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
