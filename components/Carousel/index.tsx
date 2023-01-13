import React from "react";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon,ChevronRightIcon } from '@heroicons/react/24/outline';
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation])
export default function Carousel() {
  const navigationPrevRef = React.useRef<HTMLDivElement>(null);
  const navigationNextRef = React.useRef<HTMLDivElement>(null);
  
  const onBeforeInit = (Swiper: SwiperCore): void => {
    if (typeof Swiper.params.navigation !== 'boolean' &&Swiper.params.navigation) {
      const navigation = Swiper.params.navigation;
      navigation.prevEl = navigationPrevRef.current;
      navigation.nextEl = navigationNextRef.current;
    }

  };
  return (
    <>
    <div className='flex m-1 -translate-x-0'>

      <Swiper
      className='order-2'
      onBeforeInit={onBeforeInit}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        }}

        modules={[Navigation]}
        spaceBetween={8}
        slidesPerView={1}
      >
        {[...Array(10).keys()].map((number)=>(
          <SwiperSlide key={number}>
          <div className="  flex justify-center bg-fuchsia-300 text-rose-600 h-80 items-center text-3xl font-bold">{number}</div>
        </SwiperSlide>
        ))}
      </Swiper>
        <div ref={navigationPrevRef} className="transition-opacity flex opacity-5 hover:opacity-100 duration-500 fixed bottom-1/2 right-0 w-8 z-10 order-1 items-center"><ChevronRightIcon className='w-8 h-8'/></div>
        <div ref={navigationNextRef} className="transition-opacity flex opacity-5 hover:opacity-100 duration-500 fixed bottom-1/2  left-0 w-8 z-10 order-3 items-center"><ChevronLeftIcon  className='w-8 h-8'/></div>
      </div>
    </>
  );
}
