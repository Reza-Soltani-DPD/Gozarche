import * as React from "react";
import Carousel from "../Carousel";
import ProductCard from "../ProductCard";
import Link from "next/link";

export default function SpecialOfferProduct () {
  return (
    <div
      className="w-100 container m-auto flex rounded-2xl p-4"
      style={{
        backgroundImage: "url(mbg.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="m-auto content-center p-2 max-sm:hidden">
        <p className="p-4 text-center">discount</p>
        <p className="text-center  ">
          <Link
            href="/"
            className="m-1 whitespace-nowrap rounded-md bg-secondary-300 px-2 py-2 font-iransans  font-bold"
          >
            پیشنهاد ویژه
          </Link>
        </p>
      </div>
      <div className="flex overflow-auto">
        <Carousel
          breakpoints={{
            z: { slideperview: 1 },
            xs: { slideperview: 2 },
            sm: { slideperview: 2 },
            md: { slideperview: 3 },
            lg: { slideperview: 4 },
            xl: { slideperview: 5 },
            dxl: { slideperview: 6 },
          }}
        >
          {[...Array(10).keys()].map((number, index) => (
            <ProductCard
              className="flex h-80 items-center justify-center rounded-2xl text-3xl font-bold shadow-md"
              key={index}
              productTitle={"mobile"}
              maxPrice={1000}
              minPrice={9000}
              imgurl={["/icons/gozarche logo short.png"]}
            >
              {number}
            </ProductCard>
          ))}
        </Carousel>
      </div>
    </div>
  );
}