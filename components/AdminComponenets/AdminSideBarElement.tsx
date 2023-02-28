import Link from "next/link";
import * as React from "react";

interface iconprops {
  className: string;
  size:number
}
export interface AdminSideBarElementProps {
  title: string;
  link?: string;
  Icon?: React.FC<iconprops>;
  expandable?: boolean;
  dropdown?: "top" | "left" | "right" | "bottom";
  width?: string;
  children?: React.ReactNode;
  className?: string;
  bgColor?: string;
}
export default function AdminSideBarElement(props: AdminSideBarElementProps) {
  const { title, link, Icon, expandable, width, children, dropdown, bgColor } =
    props;
  return (
    <div
      className={`group/drop group/list relative ${width?width:"w-full"} ring-1 ring-inset  ring-sky-200 ring-opacity-0  transition-all duration-500  hover:bg-zinc-700 hover:text-sky-200 hover:ring-opacity-100 ${
        bgColor ? bgColor : "bg-inherit"
      }`}
    >
      <div>
        {link ? (
          <Link
            href={link}
            className={`group/link  flex flex-nowrap h-10  items-center  hover:text-sky-200   rounded-lg p-2 text-center font-vazir text-sm text-white  ${
              width ? width : "w-full"
            }`}
          >
            {Icon ? (
              <Icon className="h-7  w-7 p-1 text-white group-hover/link:text-sky-200" size={30} />
            ) : (
              ""
            )}
            {title}
          </Link>
        ) : (
          <div
            className={`group/link  flex h-10 flex-nowrap hover:text-sky-200 items-center rounded-lg p-2 text-center font-vazir text-sm text-white  ${
              width ? width : "w-full"
            }`}
          >
            {Icon ? (
              <Icon className="h-7 p-1 text-white group-hover/link:text-sky-200" size={30}/>
            ) : (
              ""
            )}
            {title}
          </div>
        )}
      </div>
      {expandable && children ? (
        <div
          className={`  h-0  overflow-hidden    z-20 hover:h-auto group-hover/drop:h-auto`}
        >
          {React.Children.map(children, (Child) => {
            return <div className="w-full ">{Child}</div>;
          })}
        </div>
      ) : (
        ""
      )}
      {dropdown ? (
        <div
          className={`absolute z-30 flex flex-col  ${
            dropdown == "right" ? "top-0 right-0 mr-[100%]" : ""
          } ${
            dropdown == "bottom" ? "right-0" : ""
          } h-0  w-40  overflow-hidden bg-zinc-700 hover:h-auto group-hover/drop:h-auto `}
        >
          {React.Children.map(children, (Child) => {
            return <div className="flex ">{Child}</div>;
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
