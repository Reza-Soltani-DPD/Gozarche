import * as React from "react";
import Carousel from "../Carousel";
import Image from "next/image";
import image1 from "public/junks/1.jpg";
import image2 from "public/junks/2.jpg";
import image3 from "public/junks/3.jpg";
import image4 from "public/junks/4.jpg";
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
            <Image src={image1} alt="banner" className='m-auto' />
          </div>
        </div>
       
      </Carousel>
    </div>
  );
}

