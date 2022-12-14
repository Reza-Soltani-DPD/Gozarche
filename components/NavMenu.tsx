import React from "react";

type mainNav = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};
export default function MainNav(props: mainNav) {
  const { show, setShow, children } = props;

  return (
    <div
      className={`transition-color fixed z-10 h-full  w-full  top-0 left-0 bg-black bg-opacity-50 duration-300 ease-in-out ${
        !show ? "collapse bg-opacity-0 " : ""
      }`}
    >
      <div className=" h-full w-full  md:justify-items-center">
        <div className="p-6" />
        
        <div className="flex w-full max-md:h-full md:container md:m-auto ">
          <div
            className="absolute top-0 right-0 z-20 h-screen w-screen"
            onClick={() => setShow(false)}
          ></div>
          <div
            className={` bg-white p-2 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]  duration-300 ease-in-out max-md:h-full max-md:w-4/5 md:w-full ${
              !show && "max-md:translate-x-96 md:-translate-y-96"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
