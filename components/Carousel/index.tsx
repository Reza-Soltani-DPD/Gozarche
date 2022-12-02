import React from "react";

import { Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';






export default function Carousel() {


  return (
    <>
   <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      navigation

    >
      <SwiperSlide><div className='flex justify-center'>hello</div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center'>hello</div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center'>hello</div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center'>hello</div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center'>hello</div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center'>hello</div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center'>hello</div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center'>hello</div></SwiperSlide>
    
      ...
    </Swiper>
    </>
  );
}
