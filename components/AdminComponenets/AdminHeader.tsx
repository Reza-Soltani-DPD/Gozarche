import * as React from "react";

export interface IAppProps {
  title: string;
  subtitle?: string;
}

export function AdminHeader(props: IAppProps) {
  return (
    <div className="flex w-full  flex-col justify-between ">
      <h1 className="text-md px-10 py-5 font-vazir font-bold bg-white">{props.title}</h1>
      { props.subtitle ? (
        <h1 className="text-md px-10 py-5 font-vazir font-bold  mt-4 ">
          {props.subtitle}
        </h1>
      ) : (
        ""
      )}
    </div>
  );
}
