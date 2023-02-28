import * as React from "react";
import AdminSideBarElement from './AdminSideBarElement';
import { ArchiveBoxIcon ,UserIcon} from "@heroicons/react/24/outline";
import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlinePermMedia } from "react-icons/md";
import { IoMdExit } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlineShoppingCart,AiOutlineMail,AiOutlineBarChart } from "react-icons/ai";
import { BsShopWindow } from "react-icons/bs";
interface AdminSideBarProps {
  className: string;
  minHeight?: string;
}
export default function AdminSideBar(props: AdminSideBarProps) {
  const {} = props;
  return (
    <div
      className={`z-20 flex h-[95vh] w-40 flex-col  items-center bg-zinc-800 text-white`}
    >
      <AdminSideBarElement
        title="داشبورد"
        Icon={RiDashboard3Line}
        width="w-full"
        dropdown="right"
        link="/admin"
      />
      <AdminSideBarElement
        title="رسانه ها"
        Icon={MdOutlinePermMedia}
        width="w-full"
        dropdown="right"
        link="/admin"
      />

      <AdminSideBarElement
        title="وبلاگ"
        Icon={IoNewspaperOutline}
        width="w-full"
        dropdown="right"
        link="/admin"
      >
        <AdminSideBarElement
          title="پست ها"
          link="/admin/products"
          width="w-full"
        />
      </AdminSideBarElement>
      <AdminSideBarElement
        title="فروشگاه‌"
        Icon={BsShopWindow}
        width="w-full"
        dropdown="right"
        link="/admin"
      >
        <AdminSideBarElement
          title="تگ ها"
          link="/admin/products"
          width="w-full"
        />
      </AdminSideBarElement>
      <AdminSideBarElement
        title="سفارش ها"
        Icon={AiOutlineShoppingCart}
        width="w-full"
        dropdown="right"
        link="/admin"
      >
        <AdminSideBarElement
          title="تگ ها"
          link="/admin/products"
          width="w-full"
        />
      </AdminSideBarElement>

      <AdminSideBarElement
        title="محصولات"
        Icon={ArchiveBoxIcon}
        width="w-full"
        dropdown="right"
      >
        <AdminSideBarElement
          title="همه محصولات"
          link="/admin/products"
          width="w-full"
        />
        <AdminSideBarElement
          title="افزودن محصول"
          link="/admin/products"
          width="w-full"
        />
        <AdminSideBarElement
          title="دسته بندی‌ها"
          link="/admin/products"
          width="w-full"
        />
        <AdminSideBarElement
          title="خصوصیات"
          link="/admin/products"
          width="w-full"
        />
        <AdminSideBarElement
          title="افزودن محصول"
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
        dropdown="right"
      >
        <AdminSideBarElement
          title="همه کاربران"
          link="/admin/products"
          width="w-full"
        />
        <AdminSideBarElement
          title="افزودن کاربر"
          link="/admin/products"
          width="w-full"
        />
      </AdminSideBarElement>
        <AdminSideBarElement
          title="پیام کاربران"
          link="/admin/products"
          width="w-full"
          Icon={AiOutlineMail}
        />
        <AdminSideBarElement
          title="آنالیز"
          link="/admin/products"
          width="w-full"
          Icon={AiOutlineBarChart}
        />
      <AdminSideBarElement
        title="خروج"
        link="/admin/products"
        width="w-full"
        Icon={IoMdExit}
      />
    </div>
  );
}
