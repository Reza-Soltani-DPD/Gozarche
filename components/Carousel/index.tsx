import React from "react";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon,ChevronRightIcon } from '@heroicons/react/24/outline';
import "swiper/css";
import "swiper/css/navigation";

type breakpoint = {
  slideperview: number;
};
interface CarouselType {
  breakpoints: {
    z: breakpoint;
    xs: breakpoint;
    sm: breakpoint;
    md: breakpoint;
    lg: breakpoint;
    xl: breakpoint;
    dxl: breakpoint;
  };
  children: React.ReactNode;
}
SwiperCore.use([Navigation]);
const Carousel: React.FC<CarouselType> = (props) => {
  const navigationPrevRef = React.useRef<HTMLDivElement>(null);
  const navigationNextRef = React.useRef<HTMLDivElement>(null);
  const { z, xs, sm, md, lg, xl, dxl } = props.breakpoints;
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
      <div className="my-2 -mx-7 flex overflow-auto items-center">
        <Swiper
          loop={true}
          slidesPerView="auto"
          className="order-2"
          spaceBetween={8}
          breakpoints={{
            0: { slidesPerView: z.slideperview },
            420: { slidesPerView: xs.slideperview },
            640: { slidesPerView: sm.slideperview },
            768: { slidesPerView: md.slideperview },
            1024: { slidesPerView: lg.slideperview },
            1280: { slidesPerView: xl.slideperview },
            1536: { slidesPerView: dxl.slideperview },
          }}
          onBeforeInit={onBeforeInit}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          modules={[Navigation]}
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
          className="h-8 z-10 order-1 flex w-8 -translate-x-8 items-center opacity-5 transition-opacity duration-500 hover:opacity-100"
        >
          <ChevronRightIcon className="h-8 w-8" />
        </div>
        <div
          ref={navigationNextRef}
          className="h-8 z-10 order-3 flex w-8 translate-x-8  items-center opacity-5 transition-opacity duration-500 hover:opacity-100"
        >
          <ChevronLeftIcon className="h-8 w-8" />
        </div>
      </div>
    </>
  );
};

export default Carousel;