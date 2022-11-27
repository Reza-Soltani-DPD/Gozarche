import React from "react";

type MainLayoutType = {
  children: React.ReactNode;
};
export default function MainLayout({ children }: MainLayoutType) {

  return (
    <>
      <nav className="flex justify-between bg-black">
        <div>sdf</div>
        <div>
          sdf
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
}
