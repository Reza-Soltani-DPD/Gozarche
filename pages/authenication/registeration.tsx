import type { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import NavlessLayout from "../../components/layouts/NavlessLayout";
import Link from 'next/link';
import type { Url } from 'url';

type formdata = {
  username: string;
  password: string;
};
const LoginPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formdata>();

  const router = useRouter();

  const onSubmit = handleSubmit((data) => {
        
        router.push(router.query?.callbackUrl?router.query.callbackUrl as unknown as Url:"/");
  });
  return (
    <>
      <NavlessLayout title="ثبت نام " />
      <div className="container m-auto flex  min-h-screen flex-1 items-center justify-center ">
        <div className="grid md:grid-cols-4 lg:grid-cols-3 w-screen ">
          <div className="card mb-8 mx-2 py-2 px-4  md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-2 ">
            <form className="flex flex-col" onSubmit={onSubmit}>
              <h1 className="w-full py-8 px-2 text-center text-lg font-bold ">
                ثبت نام
              </h1>
              <label className=" mx-4">ایمیل/نام کاربری : </label>

              <input
                {...register("username", {
                  required: "Email is Required",
                  minLength: { value: 3, message: "Email is not Valid" },
                })}
              />

              {errors.username && <div>{errors.username?.message}</div>}

              <label className=" mx-4">رمز : </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 8, message: "password is to short" },
                })}
              />
              <button type="submit" className="primary-button ">
                ورود
              </button>
            </form>
            <div className='flex flex-row justify-around mb-4'>
              <div>
                <Link href="/authenication/registeration" className='text-sm'>ثبت نام؟</Link>
              </div>
              <div>
                <Link href={router.query?.callbackUrl?router.query.callbackUrl as string:"/"}className='text-sm'>بازگشت</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
