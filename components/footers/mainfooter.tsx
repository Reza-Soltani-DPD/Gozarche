import React from "react";
import ExpresDelivery from '../SVG/ExpressDelivery'
import Garanty from '../SVG/Garanty'
import FullTimeAnswer from '../SVG/FullTimeAnswer'
import SevenDay from '../SVG/SevenDay'
export default function MainFooter() {
  return (
    <div className="bg-white border-t">
      <div className="container m-auto max-w-8xl">
        <div className="flex w-full max-md:flex-col justify-between border-b p-3">
          <div className='grow max-sm:text-center'>logo</div>
          <div className='max-sm:text-center'>go up</div>
        </div>
        <div className='grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center p-4 border-b '>
          <div className='p-4 '>
            <div className=' p-2'>
              <SevenDay/>
            </div>
            <p className='text-center font-iransans font-bold  text-slate-400'>برگشت کالا</p>
          </div>
          <div className='p-4'>
            <div className=' p-2'>
              <ExpresDelivery/>
            </div>
            <p className='text-center font-iransans font-bold  text-slate-400'>تحویل سریع</p>
          </div >
          <div className='p-4'>
            <div className='w-28 h-28 p-2'>
              <FullTimeAnswer/>
            </div>
            <p className='text-center font-iransans font-bold  text-slate-400'>پاسخ گویی سوالات</p>
          </div>
          <div className='p-4'>
            <div className='w-28 h-28 p-2'>
              <Garanty/>
            </div>
            <p className='text-center font-iransans font-bold  text-slate-400'>تضمین کیفیت</p>
          </div>

         
          
        </div>
        <div className='flex max-md:flex-col w-full p-4 border-b'>

        <div className="grow   grid max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  place-items-center pb-4">
         <div>hello</div>
         <div>hello</div>
         <div>hello</div>
         <div>hello</div>          
        </div>
        <div className=' md:border-r max-md:border-t p-4 text-center'>
           social links
        </div>
        </div>
        <div className='flex max-md:flex-col w-full p-4 border-b'>

        <div className="grow   grid max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  place-items-center pb-4">
         <div>hello</div>
         <div>hello</div>
         <div>hello</div>
         <div>hello</div>          
        </div>
        <div className=' md:border-r max-md:border-t p-4 text-center'>
           نماد اعتماد
        </div>
        </div>
       
        <div className='text-center text-xs p-1 font-yekan font-bold'>
          تمام حقوق این وبسایت متعلق به گذرچه میباشد
        </div>
      </div>
    </div>
  );
}
