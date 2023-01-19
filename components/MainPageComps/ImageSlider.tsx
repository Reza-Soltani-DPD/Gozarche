import * as React from "react";
import Carousel from "../Carousel";


export default function ImageSlider () {
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
        {[...Array(10).keys()].map((number) => (
          <div
            className="  h-80 bg-fuchsia-300 text-center text-3xl  font-bold text-rose-600"
            key={number}
          >
            {number}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

