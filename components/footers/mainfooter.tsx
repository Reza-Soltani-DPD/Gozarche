import React from "react";

export default function MainFooter() {
  return (
    <div className="bg-gray-700">
      <div className="container m-auto">
        <div className="m-auto bg-gray-700 ">header</div>
        <div className="lg:grid-col-4  grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
          <div className="grid-center-container mb-4">
            <div className="col-span-1">hello</div>
          </div>
          <div className="grid-center-container">
            <div className="col-span-1">hello</div>
          </div>
          <div className="grid-center-container">
            <div className="col-span-1">hello</div>
          </div>
          <div className="grid-center-container">
            <div className="col-span-1">hello</div>
          </div>
        </div>
        <div className='text-center text-xs p-1 font-yekan font-bold'>
          تمام حقوق این وبسایت متعلق به گذرچه میباشد
        </div>
      </div>
    </div>
  );
}
