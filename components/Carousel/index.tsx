import React from "react";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon,ChevronRightIcon } from '@heroicons/react/24/outline';
import "swiper/css";
import "swiper/css/navigation";

type breakpoint = {
  slideperview: number;
  spaceBetween:string
};
interface CarouselType {
  breakpoints?: {
    xs?: breakpoint;
    sm?: breakpoint;
    md?: breakpoint;
    lg?: breakpoint;
    xl?: breakpoint;
    dxl?: breakpoint;
  };
  children?: React.ReactNode;
}
SwiperCore.use([Navigation]);
const Carousel: React.FC<CarouselType> = (props) => {
  const navigationPrevRef = React.useRef<HTMLDivElement>(null);
  const navigationNextRef = React.useRef<HTMLDivElement>(null);

  const onBeforeInit = (Swiper: SwiperCore): void => {
    if (
      typeof Swiper.params.navigation !== "boolean" &&
      Swiper.params.navigation
    ) {
      const navigation = Swiper.params.navigation;
      navigation.prevEl = navigationPrevRef.current;
      navigation.nextEl = navigationNextRef.current;
    }
  };
  return (
    <>
      <div className="my-2 -mx-7 flex overflow-auto">
        <Swiper
          loop={true}
          className="order-2"
          breakpoints={{
            640: {},
          }}
          onBeforeInit={onBeforeInit}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          modules={[Navigation]}
          spaceBetween={8}
          slidesPerView={1}
        >
          {React.Children.map(props.children, (child, index) => {
            return (
              <>
                <SwiperSlide key={index}>{child}</SwiperSlide>
              </>
            );
          })}
        </Swiper>
        <div
          ref={navigationPrevRef}
          className="z-10 order-1 flex w-8 -translate-x-8 items-center opacity-5 transition-opacity duration-500 hover:opacity-100"
        >
          <ChevronRightIcon className="h-8 w-8" />
        </div>
        <div
          ref={navigationNextRef}
          className="z-10 order-3 flex w-8 translate-x-8  items-center opacity-5 transition-opacity duration-500 hover:opacity-100"
        >
          <ChevronLeftIcon className="h-8 w-8" />
        </div>
      </div>
    </>
  );
};

export default Carousel;