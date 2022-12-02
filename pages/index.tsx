import MainLayout from "../components/layouts/MainLayout";

// import { signIn, signOut, useSession } from "next-auth/react";

// import { trpc } from "../utils/trpc";


import Carousel from '../components/Carousel'


export default function Home() {
  return (
    <>
        <MainLayout title='ورود'>
        <div className="container mx-auto">
          <div className="m-auto flex-col   ">
            <Carousel/>
          </div>
        </div>
        </MainLayout>

    </>
  );
}
