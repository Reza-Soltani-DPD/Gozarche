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
      <div className="hoverablemega">
        <div className="flex h-14 items-center p-2 font-vazir text-sm">
          <Bars3Icon className="  h-10 w-10 p-2 text-gray-500" />
          دسته بندی
        </div>
        <div
          className={`
          hoverablemegamenu
          transition-color 
          z-10
          top-0
          right-0
          ${props.margintop}
          opacity-0
          duration-500
          `}
        >
          <div className="megamenu container m-auto rounded-b-lg border-2 border-t-0  bg-white shadow-xl transition-all duration-500">
            hello
          </div>
        </div>
      </div>
          <div
            className={`
            hoverablebackground
            top-0
            right-0
            z-0
            ${props.margintop}
            bg-black
            duration-500
      `}
          >
            hello
          </div>
    </>
  );
};

export default MegaMenu;
