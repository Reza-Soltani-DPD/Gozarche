import { Bars3Icon } from "@heroicons/react/24/outline";
import React from "react";

const MegaMenu = () => {
  return (
    <>
      <Bars3Icon className=" peer/first h-8 w-8 text-gray-500" />
	  <div className='fixed w-[100vw] h-[100vh] right-0 top-0 opacity-0 hidden peer-hover:opacity-100  duration-500 transition-all container z-[1] bg-black hover:block hover:opacity-10'/>
                    <div className='
                    absolute 
                    opacity-0 
                    h-0 
                    -translate-y-0
                    container 
                    z-[9] 
                    bg-yallow
                    transition-all 
                    duration-500 
                    peer-hover/peer-first:h-screen 
                    peer-hover/peer-first:opacity-100 
                    peer-hover/peer-first:translate-y-0
                    hover:block 
                    hover:opacity-100'><div className='bg-white shadow-2xl'>hello</div></div>
    </>
  );
};

export default MegaMenu;
