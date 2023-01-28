import * as React from "react";
import AdminSideBarElement from './AdminSideBarElement';
import { ArchiveBoxIcon ,UserIcon} from "@heroicons/react/24/outline";

interface AdminSideBarProps {
  className: string;
  minHeight?: string;
}
export default function AdminSideBar(props: AdminSideBarProps) {
  const { minHeight } = props;
  return (
    <div
      className={`flex h-[95vh] w-40 flex-col items-center  bg-zinc-800 text-white z-20`}
    >
      <AdminSideBarElement
        title="محصولات"
        Icon={ArchiveBoxIcon}
        width="w-full"
        dropdown='right'
      >
        <AdminSideBarElement
          title="همه محصولات"
          link="/admin/products"
          width="w-full"
        />
        <AdminSideBarElement
          title="تگ ها"
          link="/admin/products"
          width="w-full"
        />
        
      </AdminSideBarElement>
      <AdminSideBarElement
        title="کاربران"
        Icon={UserIcon}
        width="w-full"
        dropdown='right'
      >
        <AdminSideBarElement
          title="تغییر رمز"
          link="/admin/products"
          width="w-full"
        />
        <AdminSideBarElement
          title="خروج"
          link="/admin/products"
          width="w-full"
        />
        
      </AdminSideBarElement>
    </div>
  );
}
