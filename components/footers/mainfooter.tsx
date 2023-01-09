import React from "react";
import ExpresDelivery from '../SVG/ExpressDelivery'
import Garanty from '../SVG/Garanty'
import FullTimeAnswer from '../SVG/FullTimeAnswer'
import Image from "next/image";

import SevenDay from "../SVG/SevenDay";
export default function MainFooter() {
  return (
    <div className="border-t bg-white">
      <div className="max-w-8xl container  p-4 m-auto">
        <div className="flex w-full justify-between border-b max-md:flex-col">
          <div className="grow  max-md:m-auto p-2">
            <Image
              src="/gozarche logo long.png"
              width={214}
              height={70}
              alt="logo"
            ></Image>
            
            <div className="font-yakans font-semibold px-4 py-4 text-xs text-gray-500 max-md:text-center whitespace-pre-wrap pb-4">
تلفن تماس : ۰۹۸۷۶۵۴۳۲۱
            </div>
          </div>
          <div className="max-md:m-auto my-auto "><button className='font-bold b-2 border font-iransanss py-2 px-4 rounded-lg whitespace-nowrap mb-4 mt-2'>بازگشت به بالا</button></div>
        </div>
        <div className="grid place-items-center border-b p-4 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
          <div className="p-4 ">
            <div className=" p-2">
              <SevenDay />
            </div>
            <p className="text-center font-yakan font-bold text-sm  text-slate-400">
              برگشت کالا
            </p>
          </div>
          <div className="p-4">
            <div className=" p-2">
              <ExpresDelivery />
            </div>
            <p className="text-center font-yekan font-bold  text-slate-400">
              تحویل سریع
            </p>
          </div>
          <div className="p-4">
            <div className="h-28 w-28 p-2">
              <FullTimeAnswer />
            </div>
            <p className="text-center font-yekan font-bold  text-slate-400">
              پاسخ گویی سوالات
            </p>
          </div>
          <div className="p-4">
            <div className="h-28 w-28 p-2">
              <Garanty />
            </div>
            <p className="text-center font-yakan font-bold  text-slate-400">
              تضمین کیفیت
            </p>
          </div>
        </div>
        <div className="flex w-full border-b p-4 max-md:flex-col">
          <div className="grid   grow pb-4 max-md:grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            <ul className='footer'>
              <li className='footer'>خدمات مشتری</li>
              <li className='footer'>راهنمای خرید</li>
              <li className='footer'>نحوه ثبت سفارش</li>
              <li className='footer'>رویه ارسال سفارش</li>
              <li className='footer'>شیوه‌هایپرداخت</li>
              <li className='footer'>رویه بازگرداندن کالا</li>
              <li className='footer'>گذارش خطای فنی</li>
            </ul>
            <ul className='footer'>
              <li className='footer'>راهنمای مشتریان</li>
              <li className='footer'>اطمینان از کیفیت </li>
              <li className='footer'>شرایط استفاده</li>
              <li className='footer'>حریم خصوصی</li>
              <li className='footer'>درباره ما و گذرچه</li>
              <li className='footer'>تماس با ما</li>
            </ul>
            <ul className='footer'>
              <li className='footer'>دسته بندی‌ها</li>
              <li className='footer'>لوازم خانگی</li>
              <li className='footer'>عطر و ادکلن</li>
              <li className='footer'>لوازم الکترونیکی</li>
            </ul>
            <ul className='footer'>
              <li className='footer'>لینک‌های سریع</li>
              <li className='footer'>وبلاگ</li>
              <li className='footer'>داشبرد</li>
              <li className='footer'>حساب کاربری</li>
              <li className='footer'>سبد خرید</li>
              <li className='footer'>علاقه مندی ها</li>
            </ul>
          </div>
          <div className='text-center max-md:border-t md:border-r p-4 md:pr-8'>
            <p>همراه ما باشید!</p>
          <div className="flex flex-shrink max-md:justify-center p-4  font-vazir font-bold ">
          <div className='flex aspect-square w-12 border rounded-xl items-center justify-center m-2 text-xs'> تلگرام</div>
          <div className='flex aspect-square w-12 border rounded-xl items-center justify-center m-2 text-xs'> واتساپ</div>
          <div className='flex aspect-square w-12 border rounded-xl items-center justify-center m-2 text-xs'> انستاگرام</div>
          <div className='flex aspect-square w-12 border rounded-xl items-center justify-center m-2 text-xs'> آپارات</div>
          </div>
          <p>با ثبت ایمیل از جدیدترین تخفیف‌ها با خبر شوید</p>
          <form action="" className='flex p-2'>
            <input type="email" className='border rounded-lg'/>
            <input type='submit' className='border rounded-lg px-4 bg-gray-200 ' value="ثبت"/>
          </form>
          </div>
        </div>
        <div className="flex w-full border-b p-4 max-md:flex-col md:justify-between">
          <div className="grow place-items-center pb-4 max-w-4xl pr-4">
          یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.
          </div>
          <div className="flex p-4 text-center max-md:border-t flex-nowrap justify-end m-auto">
            <div className='flex aspect-square w-24 border rounded-xl items-center justify-center m-2'> اعتماد</div>
            <div className='flex aspect-square w-24 border rounded-xl items-center justify-center m-2'> اعتماد</div>
            <div className='flex aspect-square w-24 border rounded-xl items-center justify-center m-2'> اعتماد</div>
          </div>
        </div>

        <div className="pt-2 text-center font-yekan text-xs ">
        برای استفاده از مطالب این وبسایت، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. (فروشگاه آنلاین گذرچه) .
        </div>
      </div>
    </div>
  );
}
