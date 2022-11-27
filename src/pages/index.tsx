import { type NextPage } from "next";
import MainLayout from '../components/layouts/MainLayout';

// import { signIn, signOut, useSession } from "next-auth/react";

// import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
   return (
     <>
       <MainLayout>
        hello world
       </MainLayout>
     </>
   );
};

export default Home;
