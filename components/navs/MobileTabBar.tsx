import React from "react";
import {ShoppingCartIcon,MagnifyingGlassIcon,HomeIcon,Bars3Icon,TagIcon} from '@heroicons/react/24/outline'

type MobileTabBarProps ={
  children:React.ReactNode
}
export default function MobileTabBar(props:MobileTabBarProps) {
  const {children} =props
  return (
    <>
      <div className="cubic nav max-sm:fixed max-sm:top-0 flex h-[100vh] w-[100vw]  justify-around pr-[3px]">
        <input
          type="radio"
          name="choice"
          className="choice1 sm:hidden peer choice1 opacity-0 w-16 h-16 z-10 translate-y-[90vh]"
        />
        <input
          type="radio"
          name="choice"
          className="choice2 sm:hidden peer/choice2 opacity-0 w-16 h-16 z-10 translate-y-[90vh]"
        />
        <input
          type="radio"
          name="choice"
          className="choice3 sm:hidden peer/choice3 opacity-0 w-16 h-16 z-10 translate-y-[90vh]"
          defaultChecked
        />
        <input
          type="radio"
          name="choice"
          className="choice4 sm:hidden peer/choice4 opacity-0 w-16 h-16 z-10 translate-y-[90vh]"
        />
        <input
          type="radio"
          name="choice"
          className="choice5 sm:hidden peer/choice5 opacity-0 w-16 h-16 z-10 translate-y-[90vh]"
        />
        <div
          id="pages"
          className="pages z-2 max-sm:fixed max-sm:top-0 max-sm:right-0   w-[100vw] cubic  
          max-sm:peer-checked/choice1:translate-x-[0vw]
          max-sm:peer-checked/choice2:translate-x-[100vw]
          max-sm:peer-checked/choice3:translate-x-[200vw]
          max-sm:peer-checked/choice4:translate-x-[300vw]
          max-sm:peer-checked/choice5:translate-x-[400vw]
          "
        >
          <div className="pagecontainer  max-sm:flex  max-sm:w-[500vw] h-[100vh] w-[100vw] ">
            <div className=" w-[100vw] bg-red-200 sm:hidden overflow-x-hidden"></div>
            <div className=" w-[100vw] bg-blue-200 sm:hidden overflow-x-hidden"></div>
            <div className=" w-[100vw]  overflow-x-hidden">{children}</div>
            <div className=" w-[100vw] bg-slate-300  sm:hidden overflow-x-hidden"></div>
            <div className=" w-[100vw] bg-green-400 sm:hidden overflow-x-hidden"></div>
          </div>
        </div>
        <nav className="fixed bottom-0 left-0  h-[10vh] w-[100vw] sm:hidden cubic overflow-ellipsis">
          <div id="bg" className="flex  h-[100vh] w-[100vw] justify-center cubic">
            <div
              id="dot "
              className="cubic z-[1] h-[3.8rem] w-[3.8rem] translate-y-[-0.8rem] rounded-full shadow-[0_3rem_0_1rem_white]"
            >
              <div
                className="m-[0.4rem] h-[3rem] w-[3rem] rounded-full bg-primary-400   shadow-md"
              />
            </div>
            <div
              id="cutout"
              className="absolute top-0 z-0 flex justify-items-center
                before:h-[10vh]
                before:w-[100vw]
                before:translate-x-[1.2rem]
                before:translate-y-[1.25rem]
                before:rounded-tl-[2rem]
                before:bg-white
                before:shadow-[0_0_10px_rgba(0,0,0,0.3)]
                before:content-['']
                after:h-[vh]
                after:w-[100vw]
                after:translate-x-[-1.2rem]
                after:translate-y-[1.25rem]
                after:rounded-tr-[2rem]
                after:bg-white
                after:shadow-[0_0_10px_rgba(0,0,0,0.3)]
                after:content-['']
                "
            ></div>
          </div>

          <div id="labels"
            className={`labels absolute left-0 bottom-0 z-[1] flex h-[8vh] w-[100vw] translate-y-4 justify-around sm:hidden`}
          >
            <label htmlFor="nav1" className="nav1 cubic">
              <Bars3Icon className="h-8 w-8 cubic text-gray-600" />
            </label>
            <label htmlFor="nav2" className="nav2 cubic">
              <TagIcon className="h-8 w-8 cubic text-gray-600" />
            </label>
            <label htmlFor="nav3" className="nav3 cubic">
              <HomeIcon className="h-8 w-8 cubic text-gray-600" />
            </label>
            <label htmlFor="nav4" className="nav4 cubic">
              <MagnifyingGlassIcon className="h-8 w-8 cubic text-gray-600" />
            </label>
            <label htmlFor="nav5" className="nav5 cubic">
              <ShoppingCartIcon className="h-8 w-8 cubic text-gray-600" />
            </label>
          </div>
        </nav>
      </div>
    </>
  );
}
