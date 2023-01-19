import * as React from "react";

export interface AdminSideBarElementProps {
	title:string
	hoverable:boolean
	link:string
}
export default function AdminSideBarElement(props:AdminSideBarElementProps) {
	const {title} =props
  return (
    <div className="w-full border-r-4 border-sky-300 border-opacity-0 p-4 text-center font-vazir text-sm hover:border-opacity-100 hover:text-sky-300 ">
      {title}</div>
  );
}

