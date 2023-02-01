import CategoryComp from "../components/MainPageComps/CategoryComp";
import MainLayout from "../components/layouts/MainLayout";
import DiscountBanners from "../components/MainPageComps/DiscountBanners";
import ImageSlider from "../components/MainPageComps/ImageSlider";
import ShopAd from "../components/MainPageComps/ShopAd";
import SpecialOfferProduct from "../components/MainPageComps/SpecialOfferProduct";
import SpecialOfferBox from "../components/MainPageComps/SpecialOfferBox";
import CategorySugestion from "../components/MainPageComps/CategorySugesstion";
import TopBrands from "../components/MainPageComps/TopBrands";
import ProductSugestion from "../components/MainPageComps/ProductSugestion";
import TopSale from "../components/MainPageComps/TopSale";
import Readable from "../components/MainPageComps/Readable";
import type { GetServerSideProps } from "next";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

const Home = () => {
  return (
    <>
      <MainLayout>
        <div className="   ">
          <ImageSlider />
          <SpecialOfferProduct />
          <DiscountBanners />
          <ShopAd />
          <CategoryComp />
          <SpecialOfferBox />
          <CategorySugestion />
          <ProductSugestion />
          <TopBrands />
          <TopSale />
          <Readable />
        </div>
      </MainLayout>
    </>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ses = await getServerSession(context.req, context.res, authOptions);
  if (ses && ses.user && ses.user.image == undefined) {
    ses.user.image = null;
  }
  return {
    props: {
      session: ses,
    },
  };
};
