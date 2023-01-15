import React from "react";

type proptype={
  margintop:number
  children?:React.ReactElement
}
export default function MainNav(props:proptype) {


  return (
    <div
      className={`transition-color relative z-10 h-full  w-full  top-0 left-0 bg-black bg-opacity-50 duration-300 ease-in-out `}
    >
      <div className=" h-full w-full  md:justify-items-center">
        <div className="p-6" />
        
        <div className="flex w-full max-md:h-full md:container md:m-auto ">
          <div
            className="fixed top-0 right-0 z-20 h-screen w-screen"

          ></div>
          <div
            className={` bg-white p-2 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]  duration-300 ease-in-out max-md:h-full max-md:w-4/5 md:w-full `}
          >
            hello{/* //TODO add mega menu */}
          </div>
        </div>
      </div>
    </div>
  );
}
