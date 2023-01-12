import React from "react";
import styles from "./MobileTabBar.module.css";
import {ShoppingCartIcon,MagnifyingGlassIcon,HomeIcon,Bars3Icon,TagIcon} from '@heroicons/react/24/outline'

type MobileTabBarProps ={
  children:React.ReactNode
}
export default function MobileTabBar(props:MobileTabBarProps) {
  const {children} =props
  return (
    <>
      <div className="nav fixed top-0 flex h-[100vh] w-[100vw] transform-all justify-around ">
        <input
          type="radio"
          name="choice"
          className={`choice1 ${styles.choice} sm:hidden peer choice1`}
        />
        <input
          type="radio"
          name="choice"
          className={`choice2 ${styles.choice} sm:hidden peer/choice2`}
        />
        <input
          type="radio"
          name="choice"
          className={`choice3 ${styles.choice} sm:hidden peer/choice3`}
          defaultChecked
        />
        <input
          type="radio"
          name="choice"
          className={`choice4 ${styles.choice} sm:hidden peer/choice4`}
        />
        <input
          type="radio"
          name="choice"
          className={`choice5 ${styles.choice} sm:hidden peer/choice5 `}
        />
        <div
          id="pages"
          className="pages z-2 fixed top-0 right-0 h-[100vh]  w-[100vw]   
          max-sm:peer-checked/choice1:translate-x-[0vw]
          max-sm:peer-checked/choice2:translate-x-[100vw]
          max-sm:peer-checked/choice3:translate-x-[200vw]
          max-sm:peer-checked/choice4:translate-x-[300vw]
          max-sm:peer-checked/choice5:translate-x-[400vw]

           "
        >
          <div className="pagecontainer flex  h-[100vh] max-sm:w-[500vw] w-[100vw] ">
            <div className="h-[100vh] w-[100vw] bg-red-200 sm:hidden"></div>
            <div className="h-[100vh] w-[100vw] bg-blue-200 sm:hidden"></div>
            <div className="h-[100vh] w-[100vw] bg-yellow-200 overflow-auto overflow-x-hidden">{children}</div>
            <div className="h-[100vh] w-[100vw] bg-slate-300  sm:hidden"></div>
            <div className="h-[100vh] w-[100vw] bg-green-400 sm:hidden"></div>
          </div>
        </div>
        <nav className="absolute bottom-0 left-0  h-[10vh] w-[100vw] sm:hidden">
          <div id="bg" className="flex  h-[100vh] w-[100vw] justify-center">
            <div
              id="dot "
              className={`z-[1] h-[3.8rem] w-[3.8rem] translate-y-[-0.8rem] rounded-full ${styles.cmshadow}`}
            >
              <div
                className={`m-[0.4rem] h-[3rem] w-[3rem] rounded-full bg-primary-400   ${styles.dot}`}
              />
            </div>
            <div
              id="cutout"
              className=" absolute top-0 z-0 flex justify-items-center
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

          <div
            id="labels"
            className={`labels absolute left-0 bottom-0 z-[1] flex h-[8vh] w-[100vw] translate-y-4 justify-around sm:hidden`}
          >
            <label htmlFor="nav1" className="nav1">
              <Bars3Icon className="h-8 w-8 text-gray-600" />
            </label>
            <label htmlFor="nav2" className="nav2">
              <TagIcon className="h-8 w-8 text-gray-600" />
            </label>
            <label htmlFor="nav3" className="nav3">
              <HomeIcon className="h-8 w-8 text-gray-600" />
            </label>
            <label htmlFor="nav4" className="nav4">
              <MagnifyingGlassIcon className="h-8 w-8 text-gray-600" />
            </label>
            <label htmlFor="nav5" className="nav5">
              <ShoppingCartIcon className="h-8 w-8 text-gray-600" />
            </label>
          </div>
        </nav>
      </div>
    </>
  );
}
