import Head from "next/head";
import * as React from "react";
import AdminSideBar from '../AdminComponenets/AdminSideBar';

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
      <div className="min-w-[768px] h-screen overflow-scroll ">
        <div className='h-[4vh] flex items-center '>head</div>
		<div className='flex h-[96vh]'>
				<AdminSideBar/>
				<div className=''>
        {children}
				</div>
		</div>
      </div>
    </div>
  );
}
