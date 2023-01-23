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
      className={`flex min-h-${
        minHeight ? minHeight : "0"
      } w-40 flex-col items-center overflow-visible bg-zinc-800 text-white z-10`}
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
