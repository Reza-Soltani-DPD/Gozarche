import * as React from "react";
import AdminSideBarElement from "./AdminSideBarElement";
import { BuildingLibraryIcon, HomeIcon } from "@heroicons/react/24/outline";

export default function AdminLayoutHeader() {
  return (
    <div className="flex h-[5vh] w-full  items-center justify-between bg-zinc-700 ">
      <div className="flex items-center ">
        <AdminSideBarElement
          link="/admin/"
          title="خانه "
          width='w-auto'
          Icon={BuildingLibraryIcon}
        />
        <AdminSideBarElement
          link="/"
          title="مشاهده وبسایت "
          Icon={HomeIcon}     
          />
      </div>
      <div className="flex items-center ">
        <AdminSideBarElement link="/" title="حساب کاربری" />
      </div>
    </div>
  );
}
