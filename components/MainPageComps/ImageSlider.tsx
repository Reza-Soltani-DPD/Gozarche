import * as React from "react";
import Carousel from "../Carousel";
import Image from "next/image";

export default function ImageSlider() {
  return (
    <div>
      <Carousel
        breakpoints={{
          z: { slideperview: 1 },
          xs: { slideperview: 1 },
          sm: { slideperview: 1 },
          md: { slideperview: 1 },
          lg: { slideperview: 1 },
          xl: { slideperview: 1 },
          dxl: { slideperview: 1 },
        }}
      >
        <div className="w-[100vw] ">
          <div className=" flex w-[480px] sm:w-[768px] md:w-[1024px] lg:w-[1280px] xl:w-[1536px] 2xl:w-[2048px]">
            <Image src='/junks/1.jpg' alt="banner" className='m-auto' height={600} width={2880}  />
          </div>
        </div>
       
      </Carousel>
    </div>
  );
}

