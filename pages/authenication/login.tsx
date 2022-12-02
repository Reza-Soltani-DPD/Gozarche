import type { NextPage } from "next";
import React from "react";
import MainLayout from "../../components/layouts/MainLayout";

const LoginPage: NextPage = () => {
  return (
    <>
      <MainLayout title="ورود">
        <div className="container flex min-h-full flex-1 items-center justify-center ">
          <div className="card p-2  ">
            <form>
              <h1 className="w-full py-8 px-2 text-center text-lg font-bold ">
                ورود
              </h1>
              <label className=" mx-4">ایمیل : </label>
              <br />
              <input />
              <br />
              <label className=" mx-4">رمز : </label>
              <br />
              <input />
            </form>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default LoginPage;
