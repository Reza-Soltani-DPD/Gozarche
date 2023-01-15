import type { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import NavlessLayout from "../../components/layouts/NavlessLayout";
import Link from 'next/link';
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

type formdata = {
  username: string;
  password: string;
};
const LoginPage: NextPage = () => {
  const formschema = z.object({
    username:z.string().min(3,"نام کاربری کوتاه است"),
    password:z.string().min(8,"رمز کوتاه است")

  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formdata>({resolver:zodResolver(formschema)});
  const onSubmit = handleSubmit(async (data) => {
    const d = await signIn("credentials",{
      username: data.username,
      password: data.password,
      callbackUrl:"/",
  })
  console.log(d);
  
  })
  return (
    <>
      <NavlessLayout title="ورود" />
      <div className="container m-auto flex  min-h-screen flex-1 items-center justify-center ">
        <div className="grid md:grid-cols-4 lg:grid-cols-3 w-screen ">
          <div className="card mb-8 max-sm:mx-4 py-2 px-4  md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-2 ">
            <form className="flex flex-col" onSubmit={onSubmit}>
              <h1 className="w-full py-8 px-2 text-center text-lg font-bold ">
                ورود
              </h1>
              <label className=" mx-4 font-vazir text-sm">ایمیل/نام کاربری : <span className='text-red-500 font-bold text-sm'>{errors.username&&errors.username.message}</span></label>

              <input
                className={errors.username?'shadow-[0_0_5px_rgba(255,50,50,0.7)]':`shadow-[0_0_5px_0_rgba(0,0,2,0.4)]`}
                {...register("username")}
              />


              <label className=" mx-4 font-vazir text-sm">رمز :  <span className='text-red-500 font-bold text-sm'>{errors.password&&errors.password.message}</span></label>
              <input
                className={errors.password?'shadow-[0_0_5px_rgba(255,50,50,0.7)]':`shadow-[0_0_5px_0_rgba(0,0,2,0.4)]`}
                type="password"
                {...register("password")}
              />
              <button type="submit" className="primary-button ">
                ورود
              </button>
            </form>
            <div className='flex flex-row justify-around mb-4'>
              <div>
                <Link href="/authentication/registeration" className='text-sm font-vazir text-gray-400 hover:text-gray-700'>ثبت نام؟</Link>
              </div>
              <div>
                <Link href={"/"}className='text-sm font-vazir text-gray-400 hover:text-gray-700'>صفحه اصلی</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
