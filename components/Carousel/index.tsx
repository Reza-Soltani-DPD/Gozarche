import React from "react";

import SwiperCore, { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

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
      <Swiper
      onBeforeInit={onBeforeInit}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        }}

        modules={[Navigation]}
        spaceBetween={8}
        slidesPerView={3}
      >
        {[...Array(100).keys()].map((number)=>(
        <SwiperSlide key={number}>
          <div className="flex justify-center bg-black text-rose-600 h-48">{number}</div>
        </SwiperSlide>
        ))}
        <div ref={navigationPrevRef}>perv</div>
        <div ref={navigationNextRef}>next</div>
      </Swiper>
    </>
  );
}
