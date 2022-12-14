import type { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import NavlessLayout from "../../components/layouts/NavlessLayout";
import Link from 'next/link';
import {trpc }from "../../utils/trpc"
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
type formdata = {
  username : string;
  name:string;
  lastname:string;
  email:string;
  phonenumber:string;
  password: string;
  pasconfirm:string
};

const phoneRegExp = /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/

const LoginPage: NextPage = () => {


  const formschema=z.object({
    username:z.string().min(3,"نام کاربری کوتاه است"),
    name:z.string().min(3,"نام کوتاه است"),
    lastname:z.string().min(3,"نام خوانوادگی کوتاه است"),
    email:z.string().email({message:"ایمیل معتبر نیست"}),
    phonenumber:z.string().regex(phoneRegExp,"شماره موبایل معتبر نست"),
    password:z.string(),
    pasconfirm:z.string()
  }).refine((data) => {return data.password === data.pasconfirm} , {
    path: ["pasconfirm"],
    message: "تکرار رمز صحیح تیست",
  })


  const { register, handleSubmit, formState: { errors } } = useForm<formdata>({resolver:zodResolver(formschema)});

  const mutation =trpc.auth.signUp.useMutation<formdata>()
  const router = useRouter();
  
  const onSubmit = (data:formdata)=> {
    console.log(data);
    mutation.mutate(data,{onSuccess:()=>{
      router.push(router.query?.callbackUrl?router.query.callbackUrl as unknown as string : "/" )
        return true
    }})
    
  };
  return (
    <>
      <NavlessLayout title="ثبت نام " />
      <div className="container m-auto flex  min-h-screen flex-1 items-center justify-center ">
        <div className="grid md:grid-cols-4 lg:grid-cols-3 w-screen ">
          <div className="card mb-8 mx-2 py-2 px-4  md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-2 ">
            <form className="flex flex-col" >
              <h1 className="w-full py-8 px-2 text-center text-lg font-bold ">
                ثبت نام
              </h1>

              
              <label className=" mx-4">نام کاربری : <span className='text-red-500 font-bold'>{"   "}{errors.username && errors.username?.message}</span></label>
              <input
                className={errors.username?`shadow-[0_0_5px_0_rgba(255,50,50,0.7)]`:`shadow-[0_0_5px_0_rgba(0,0,2,0.4)]`}
                {...register("username")}
              />

              <label className=" mx-4">نام  : <span className='text-red-500 font-bold'>{"   "}{errors.name && errors.name?.message}</span></label>
              <input
                className={errors.name?`shadow-[0_0_5px_0_rgba(255,50,50,0.7)]`:`shadow-[0_0_5px_0_rgba(0,0,2,0.4)]`}
                {...register("name")}
              />

              <label className=" mx-4">نام خانوادگی : <span className='text-red-500 font-bold'>{"   "}{errors.lastname && errors.lastname?.message}</span></label>
              <input
                              className={errors.lastname?`shadow-[0_0_5px_0_rgba(255,50,50,0.7)]`:`shadow-[0_0_5px_0_rgba(0,0,2,0.4)]`}

                {...register("lastname")}
              />

              <label className=" mx-4">ایمیل : <span className='text-red-500 font-bold'>{"   "}{errors.email && errors.email?.message}</span></label>
              <input
                              className={errors.email?`shadow-[0_0_5px_0_rgba(255,50,50,0.7)]`:`shadow-[0_0_5px_0_rgba(0,0,2,0.4)]`}

                {...register("email")}
              />

              <label className=" mx-4">شماره موبایل : <span className='text-red-500 font-bold'>{"   "}{errors.phonenumber && errors.phonenumber?.message}</span></label>
              <input
                              className={errors.phonenumber?`shadow-[0_0_5px_0_rgba(255,50,50,0.7)]`:`shadow-[0_0_5px_0_rgba(0,0,2,0.4)]`}

                {...register("phonenumber")}
              />

              <label className=" mx-4">رمز : <span className='text-red-500 font-bold'>{"   "}{errors.password && errors.password?.message}</span></label>
              <input
                              className={errors.password?`shadow-[0_0_5px_0_rgba(255,50,50,0.7)]`:`shadow-[0_0_5px_0_rgba(0,0,2,0.4)]`}

                type="password"
                {...register("password")}
              />
              
              <label className=" mx-4">تکرار رمز : <span className='text-red-500 font-bold'>{"   "}{errors.pasconfirm && errors.pasconfirm?.message}</span></label>
              <input
                className={errors.pasconfirm?`shadow-[0_0_5px_0_rgba(255,50,50,0.7)]`:`shadow-[0_0_5px_0_rgba(0,0,2,0.4)]`}

                type="password"
                {...register("pasconfirm")}
              />



              <button onClick={handleSubmit(onSubmit)} className="primary-button " disabled={mutation.isLoading}>
                ثبت نام
              </button>
            </form>
            <div className='flex flex-row justify-around mb-4'>
              <div>
                <Link href="/authenication/login" className='text-sm'>ورود</Link>
              </div>
              <div>
                <Link href={router.query?.callbackUrl?router.query.callbackUrl as string:"/"}className='text-sm'>صفحه اصلی</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
