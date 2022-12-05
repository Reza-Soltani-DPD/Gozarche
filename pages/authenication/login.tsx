import type { NextPage } from "next";
import React from "react";
import MainLayout from "../../components/layouts/MainLayout";
import {useForm ,} from 'react-hook-form'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';



type formdata={
  username:string
  password:string
}
const LoginPage: NextPage = () => {
  const {register,handleSubmit,formState:{errors}} = useForm<formdata>();
  
  const router = useRouter()

  const onSubmit =handleSubmit( (data)=> {
    signIn("credentials",{username:data.username ,password:data.password}).then(function(result){
      if(!result?.error){
        console.log(result);
        
        router.push('/')
      }
      
    })
  })
  return (
    <>
      <MainLayout title="ورود">
        <div className="container flex min-h-full m-auto flex-1 items-center justify-center ">
          <div className="card py-2 px-4">
            <form className='flex flex-col' onSubmit={onSubmit}>
              <h1 className="w-full py-8 px-2 text-center text-lg font-bold ">
                ورود
              </h1>
              <label className=" mx-4">ایمیل : </label>
              
              <input {...register('username',{required:'Email is Required',minLength:{value:3,message:'Email is not Valid'}})} />
              
                {errors.username&&<div>{errors.username?.message}</div>}
              
              <label className=" mx-4">رمز : </label>
              <input type='password' {...register('password',{required:"Password is required",minLength:{value:8,message:"password is to short"}})}/>
              <button type='submit' className='primary-button '>
                ورود
              </button>
            </form>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default LoginPage;
