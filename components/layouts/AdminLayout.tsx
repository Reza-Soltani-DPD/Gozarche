import Head from "next/head";
import * as React from "react";
import AdminSideBar from '../AdminComponenets/AdminSideBar';
import AdminLayoutHeader from "../AdminComponenets/AdminLayoutHeader";

export interface IAppProps {
  children: React.ReactNode;
  title?: string;
}

export default function AdminLayout(props: IAppProps) {
  const { title, children } = props;
  return (
    <div>
      <Head>
        <title>{title ? title + " - Gozarche" : "Admin - Gozarche"}</title>
      </Head>
      <div className="h-screen min-w-[768px]  ">
        <AdminLayoutHeader />
        <div className="flex h-[95vh]">
          <AdminSideBar className=" h-full " />
          <div className="h-full w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
