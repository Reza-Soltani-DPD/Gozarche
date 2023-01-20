import * as React from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import AdminSideBarElement from "../../components/AdminComponenets/AdminSideBarElement";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

export default function Index() {
  return (
    <>
      <AdminLayout>
        <div className="m-4">
          <AdminSideBarElement
            title="hello"
            Icon={ArrowDownCircleIcon}
            dropdown="left"
            bgColor="bg-zinc-700"
          >
            <AdminSideBarElement
              title="hello"
              link="/"
              Icon={ArrowDownCircleIcon}
            />
            <AdminSideBarElement
              title="hello"
              link="/"
              Icon={ArrowDownCircleIcon}
            />
            <AdminSideBarElement
              title="hello"
              link="/"
              Icon={ArrowDownCircleIcon}
            />
            <AdminSideBarElement
              title="hello"
              link="/"
              Icon={ArrowDownCircleIcon}
            />
            <AdminSideBarElement
              title="hello"
              link="/"
              Icon={ArrowDownCircleIcon}
            />
          </AdminSideBarElement>
        </div>
      </AdminLayout>
    </>
  );
}
