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
    <div className='h-screen'>
      <Head>
        <title>{title ? title + " - Gozarche" : "Admin - Gozarche"}</title>
      </Head>
      <div className="h-screen   ">
        <AdminLayoutHeader />
        <div className="flex h-[95vh] w-screen overflow-scroll ">
          <AdminSideBar className=" h-[95vh] " />
          <div className="h-[95vh] flex-grow min-w-[768px] bg-zinc-300  overflow-scroll">{children}</div>
        </div>
      </div>
    </div>
  );
}
