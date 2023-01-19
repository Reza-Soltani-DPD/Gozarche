import * as React from "react";
import AdminSideBarElement from './AdminSideBarElement';


interface AdminSideBarProps{
	className:string
	minHeight?:string
}
export default function AdminSideBar(props:AdminSideBarProps) {
const{minHeight}=props
  return (
    <div className={`flex min-h-${minHeight?minHeight:"0"} w-40 flex-col items-center overflow-scroll bg-zinc-900 text-white`}>
   <AdminSideBarElement title='محصولات'/>
   <AdminSideBarElement title='کاربران'/>
   <AdminSideBarElement title='فروشگاه'/>
   <AdminSideBarElement title='سفارش ها'/>
   <AdminSideBarElement title='تصاویر'/>
   <AdminSideBarElement title='محصولات'/>
    </div>
  );
}
