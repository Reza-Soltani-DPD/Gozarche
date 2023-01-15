import MainLayout from "../components/layouts/MainLayout";
import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";

// import { trpc } from "../utils/trpc";

import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <>
      <MainLayout>
        <div className="  ">
          <div className="   ">
            {/* <p>image slider</p> */}
            <Carousel>
              {[...Array(10).keys()].map((number) => (
                <div
                  className="  h-80 bg-fuchsia-300 text-center text-3xl  font-bold text-rose-600"
                  key={number}
                >
                  {number}
                </div>
              ))}
            </Carousel>
            {/* <p> special offer  product and link</p> */}
            <div
              className="w-100 container m-auto flex rounded-2xl p-4"
              style={{
                backgroundImage: "url(mbg.png)",
                backgroundSize: "cover",
              }}
            >
              <div className="m-auto content-center p-3 max-sm:hidden">
                <p className="p-4 text-center">discount</p>
                <p className="text-center  ">
                  <Link
                    href="/"
                    className="m-2 whitespace-nowrap rounded-md bg-secondary-300 px-4 py-2 font-iransans text-lg font-bold"
                  >
                    تخفیف ویژه
                  </Link>
                </p>
              </div>
              <div className="flex overflow-auto">
                <Carousel>
                  {[...Array(10).keys()].map((number, index) => (
                    <div
                      className="  flex h-80 items-center justify-center rounded-2xl bg-white text-3xl font-bold  text-rose-600 shadow-md"
                      key={index}
                    >
                      {number}
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
            {/* <p>discount  banner link</p> */}
            {/* <p>box for shop ad </p> */}
            {/* <p> cat</p> */}
            {/* <p>box for special offer banner</p> */}
            {/* <p>cat sugestion</p> */}
            {/* <p>top brands</p> */}
            {/* <p>some sugestion</p> */}
            {/* <p>top brands</p> */}
            {/* <p>top sale</p> */}
            {/* <p>readable</p> */}
          </div>
        </div>
      </MainLayout>
    </>
  );
}
