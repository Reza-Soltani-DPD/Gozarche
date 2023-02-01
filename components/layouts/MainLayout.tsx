import Head from "next/head";
  import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  MagnifyingGlassIcon,
  ArrowsUpDownIcon,
  ShoppingBagIcon,
  BookOpenIcon,
  MapPinIcon
} from "@heroicons/react/24/outline";
import { useSession, signIn } from "next-auth/react";
import MobileTabBar from "../navs/MobileTabBar";
import MainFooter from "../footers/mainfooter";
import MegaMenu from "../navs/MegaMenu";
type MainLayoutType = {
  title?: string;
  children?: React.ReactNode;
  topbanner?: boolean;
};
export default function MainLayout({
  title,
  children,
  topbanner,
}: MainLayoutType) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const session = useSession();  
  console.log(session);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (
        window.scrollY - 0.01 * window.innerHeight > lastScrollY &&
        window.scrollY > 0.2 * window.innerHeight
      ) {
        // if scroll down hide the navbar
        setShow(false);
      }
      if (
        window.scrollY < lastScrollY - 0.01 * window.innerHeight ||
        window.scrollY < 0.2 * window.innerHeight
      ) {
        // if scroll up show the navbar
        setShow(true);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  });

  return (
    <>
      <Head>
        <title>{title ? title + " - Gozarche" : "فروشگاه گذرچه"}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <MobileTabBar>
        <div
          className={`fixed top-0 z-20 m-auto w-full justify-between  bg-white shadow-lg  duration-300 ease-in-out max-sm:right-[200vw] `}
        >
          <div
            className={`h-14 bg-secondary-300 text-center ${
              !topbanner && "hidden"
            }`}
          >
            banner
          </div>
          <nav className="w-full">
            <div className="container mx-auto flex h-16 justify-between bg-white ">
              <div className="z-20 flex flex-row items-center bg-white">
                <Link href="/" className="m-2">
                  <Image
                    src="/icons/gozarche logo long.png"
                    width={120}
                    height={50}
                    alt="logo"
                  ></Image>
                </Link>
                <form className="flex h-full w-max items-center px-4 max-md:hidden ">
                  <input
                    type="search"
                    className="bg-gray-5 transition-border  m-2 h-10 w-80 rounded-lg  border-gray-200 py-2 px-4 text-sm text-gray-900 shadow-[0_0_5px_0_rgba(0,0,0,0.2)] outline-none duration-500 hover:rounded-3xl "
                    placeholder="جستجو..."
                    required
                  />
                  <button
                    type="submit"
                    className=" relative  left-12  my-auto  py-2 text-sm font-medium  "
                  >
                    <MagnifyingGlassIcon className="h-8 w-8 text-slate-200 hover:text-slate-400" />
                  </button>
                </form>
              </div>
              <div className="z-10 flex items-center p-2 ">
                {session.status == "loading" ? (
                  <div className="aspect-square bg-slate-400" />
                ) : session.status == "unauthenticated" ? (
                  <button onClick={() => signIn()}>
                    <div className=" transition-border m-auto  flex items-center rounded-lg border-2 p-2 duration-500 hover:rounded-3xl">
                      <UserIcon className="h-6  text-gray-700" />
                      <span className="bold px-2 font-iransans text-sm">
                        ورود
                      </span>
                    </div>
                  </button>
                ) : (
                  <div className="relative">
                    <div className="peer flex items-center">
                      <span className="px-2 font-vazir">
                        {session.data?.user?.name}
                      </span>
                      {session?.data?.user?.imageurl ? (
                        <div className="overflow-hidden rounded-full border border-gray-400 shadow-[0_0_3px_0_rgba(0,0,0,0.4)] transition-all duration-500 hover:shadow-[0_0_5px_0_rgba(0,0,0,0.4)]">
                          <Image
                            src={session.data.user.imageurl}
                            height={40}
                            width={40}
                            alt="user avatar"
                          />
                        </div>
                      ) : (
                        <UserIcon className="mx-1 h-6 px-2 text-gray-700" />
                      )}
                    </div>
                    <div className="max-sm:hidden absolute left-0  h-0 rounded-xl border-2 bg-white opacity-0 transition-all duration-500 hover:h-auto hover:opacity-100 peer-hover:h-auto peer-hover:opacity-100 ">
                      <Link
                        href="/"
                        className="m-1 flex flex-nowrap items-center justify-between  rounded-xl bg-opacity-0 p-1 hover:bg-secondary-100 "
                      >
                        <span className="m-1 whitespace-nowrap font-vazir">
                          حساب کاربری
                        </span>
                        <UserIcon className="m-1 h-5 w-5" />
                      </Link>
                      <Link
                        href="/"
                        className="m-1 flex flex-nowrap items-center justify-between  rounded-xl bg-opacity-0 p-1 hover:bg-secondary-100 "
                      >
                        <span className="m-1 whitespace-nowrap font-vazir">
                          حساب کاربری
                        </span>
                        <UserIcon className="m-1 h-5 w-5" />
                      </Link>
                      <Link
                        href="/"
                        className="m-1 flex flex-nowrap items-center justify-between  rounded-xl bg-opacity-0 p-1 hover:bg-secondary-100 "
                      >
                        <span className="m-1 whitespace-nowrap font-vazir">
                          حساب کاربری
                        </span>
                        <UserIcon className="m-1 h-5 w-5" />
                      </Link>
                      <Link
                        href="/"
                        className="m-1 flex flex-nowrap items-center justify-between  rounded-xl bg-opacity-0 p-1 hover:bg-secondary-100 "
                      >
                        <span className="m-1 ml-2 whitespace-nowrap font-vazir">
خروج از حساب کاربری
                            </span>
                        <UserIcon className="m-1 h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div
              className={`overflow-clipcontaineer container z-10  m-auto max-sm:hidden duration-500${
                !show ? "h-0" : "h-12 border-t"
              }`}
            >
              <div
                className={`z-0 flex items-center justify-between bg-white duration-500 max-sm:hidden ${
                  !show
                    ? "collapse h-0 -translate-y-14 overflow-hidden"
                    : "h-12"
                }`}
              >
                <div className="flex items-center ">
                  <MegaMenu
                    className=""
                    margintop={
                      topbanner ? "translate-y-[10.5rem]" : "translate-y-[7rem]"
                    }
                  />
                  <Link
                    href="/shop"
                    className="cubic flex items-center px-3 font-vazir text-sm text-gray-500 hover:text-primary-700"
                  >
                    <ShoppingBagIcon className=" h-6 w-6" />{" "}
                    <span className="p-1">فروشگاه</span>
                  </Link>
                  <Link
                    href="/blog"
                    className="cubic flex items-center px-3 font-vazir text-sm text-gray-500 hover:text-primary-700"
                  >
                    <BookOpenIcon className=" h-6 w-6" />{" "}
                    <span className="p-1">خواندنی</span>
                  </Link>
                  <Link
                    href="/contact_us"
                    className="cubic flex items-center px-3 font-vazir text-sm text-gray-500 hover:text-primary-700"
                  >
                    <MapPinIcon className=" h-6 w-6" />{" "}
                    <span className="p-1">تماس با ما</span>
                  </Link>
                </div>
                <div className="z-0 flex">
                  <ShoppingCartIcon className="mx-2 h-6 text-gray-700 max-sm:hidden " />
                  <ArrowsUpDownIcon className="mx-2 h-6 text-gray-700 max-sm:hidden " />
                  <HeartIcon className="mx-2 h-6 text-gray-700 max-sm:hidden" />
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="mx-auto min-h-screen">
          <div
            className={`${
              topbanner
                ? "h-[7.5rem] sm:h-[11.5rem]"
                : "w-100 h-[4rem] sm:h-[7.5rem]"
            } `}
          >
            hello
          </div>
          {children}
        </div>
        <MainFooter />
        <div className="max-sm:h-16" />
      </MobileTabBar>
    </>
  );
}
