import React from "react";
import styles from "./MobileTabBar.module.css";
import {ShoppingCartIcon,MagnifyingGlassIcon,HomeIcon,Bars3Icon,TagIcon} from '@heroicons/react/24/outline'
export default function MobileTabBar() {
  return (
    <>
      <div className=" w-[100vw]">
        <nav className={`fixed bottom-0 right-0 h-[10vh] w-[100vw] nav`}>
          <div id="bg" className="flex  h-[100vh] w-[100vw] justify-center">
		  <div
              id="dot "
              className={`h-[3.8rem] z-[1] w-[3.8rem] -translate-y-[0.38rem] rounded-full ${styles.cmshadow}`}
            >
              <div
                className={`m-[0.4rem] h-[3rem] w-[3rem] rounded-full bg-primary-500   ${styles.dot}`}
              />
            </div>
            <div
              id="cutout"
              className=" absolute top-0 z-0 flex justify-items-center
				before:h-[10vh]
				before:w-[100vw]
				before:translate-x-[1.5rem]
				before:translate-y-[1.25rem]
				before:rounded-tl-[2rem]
				before:bg-white
				before:shadow-[0_0_10px_rgba(0,0,0,0.3)]
				before:content-['']
				after:h-[vh]
				after:w-[100vw]
				after:translate-x-[-1.5rem]
				after:translate-y-[1.25rem]
				after:rounded-tr-[2rem]
				after:bg-white
				after:shadow-[0_0_10px_rgba(0,0,0,0.3)]
				after:content-['']
				"
            ></div>
           
          </div>
          <div id="labels" className={`labels absolute flex justify-around z-[1] left-0 bottom-0 w-[100vw] translate-y-4 h-[8vh]`}>
			<label htmlFor='nav1' className='nav1'><Bars3Icon className='w-8 h-8 text-gray-600'/></label>
			<label htmlFor='nav2' className='nav2'><TagIcon className='w-8 h-8 text-gray-600'/></label>
			<label htmlFor='nav3' className='nav3'><HomeIcon className='w-8 h-8 text-gray-600'/></label>
			<label htmlFor='nav4' className='nav4'><MagnifyingGlassIcon className='w-8 h-8 text-gray-600'/></label>
			<label htmlFor='nav5' className='nav5'><ShoppingCartIcon className='w-8 h-8 text-gray-600'/></label>
		  </div>
          <div
            className="choices absolute left-0 bottom-0 flex w-[100vw] justify-around z-[2] translate-y-5"
          >
            <input
              type="radio"
              name="choice"
              className={`choice1 ${styles.choice}`}
            />
            <input
              type="radio"
              name="choice"
              className={`choice2 ${styles.choice}`}
            />
            <input
              type="radio"
              name="choice"
              className={`choice3 ${styles.choice}`}
			  defaultChecked
            />
            <input
              type="radio"
              name="choice"
              className={`choice4 ${styles.choice}`}
            />
            <input
              type="radio"
              name="choice"
              className={`choice5 ${styles.choice}`}
            />
            
          </div>
        </nav>
      </div>
    </>
  );
}
