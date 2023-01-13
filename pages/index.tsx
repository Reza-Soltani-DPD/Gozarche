import MainLayout from "../components/layouts/MainLayout";
import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";

// import { trpc } from "../utils/trpc";

import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <>
      <MainLayout>
        <div className="container mx-auto ">
          <div className=" p-auto  ">
            {/* <p>image slider</p> */}
            <Carousel />
            {/* <p> special offer  product and link</p> */}
            <div
              className="w-100 flex overflow-hidden"
              style={{
                backgroundImage: "url(mbg.png)",
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-col items-center p-3 m-auto">
                discount
                <Link
                  href="/"
                  className="font-yakan whitespace-nowrap text-lg font-bold rounded-md bg-secondary-300 p-2 m-2"
                >
                  تخفیف ویژه
                </Link>
              </div>
              <Carousel />
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
