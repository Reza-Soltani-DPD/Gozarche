import MainLayout from "../components/layouts/MainLayout";
import Link from "next/link";


import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <>
      <MainLayout>
        <div className="  ">
          <div className="   ">
            {/* <p>image slider</p> */}
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
                      className="  flex h-80 items-center justify-center rounded-2xl text-3xl font-bold shadow-md"
                      key={index}
                    
                      imgurl="/icons/gozarche logo short.png"
                    >
                      {number}
                    </ProductCard>
                  ))}
                </Carousel>
              </div>
            </div>
            <div className="container m-auto">
              <p>discount banner link</p>
            </div>
            <div className="container m-auto">
              <p>box for shop ad </p>
            </div>
            <div className="container m-auto">
              <p className=' shadow-center'> cat</p>
            </div>
            <div className="container m-auto">
              <p>box for special offer banner</p>
            </div>
            <div className="container m-auto">
              <p>cat sugestion</p>
            </div>
            <div className="container m-auto">
              <p>top brands</p>
            </div>
            <div className="container m-auto">
              <p>some sugestion</p>
            </div>
            <div className="container m-auto">
              <p>top brands</p>
            </div>
            <div className="container m-auto">
              <p>top sale</p>
            </div>
            <div className="container m-auto">
              <p>readable</p>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};
export default Home;