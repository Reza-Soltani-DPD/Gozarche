import { Bars3Icon } from "@heroicons/react/24/outline";
import React from "react";
import type { FC } from "react";
interface MegaMenuType {
  className: string;
  margintop: string;
}

const MegaMenu: FC<MegaMenuType> = (props) => {
  return (
    <>
      <div
        className={`
        absolute
        top-0
        right-0
        h-screen
        w-screen
        ${props.margintop}
        bg-black
        opacity-0
        duration-500
        peer-hover/bg:opacity-30
  `}
      >
        hello
      </div>
      <div className="peer/bg group/box">
        <div className="flex h-14 items-center p-2 font-vazir text-sm">
          <Bars3Icon className="  h-10 w-10 p-2 text-gray-500" />
          دسته بندی
        </div>
        <div
          className={`
          transition-color 
          absolute
          top-0
          
          right-0
          h-0 
          w-screen
          ${props.margintop}
          opacity-0
          duration-500
          hover:block
          hover:h-auto
          hover:opacity-100 
          group-hover/box:block
          group-hover/box:h-auto
          group-hover/box:opacity-100`}
        >
          <div className="container m-auto h-0 transition-all duration-500 rounded-b-lg border-2 border-t-0  bg-white shadow-xl group-hover/box:h-auto">
            hello
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
