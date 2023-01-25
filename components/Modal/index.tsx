import * as React from "react";

export interface IAppProps {
  children: React.ReactNode;
  show: boolean;
  setShow: React.Dispatch<boolean>;
}

export default function Modal(props: IAppProps) {
  const { children, show, setShow } = props;
  return (
    <div className={`fixed h-[100vh] w-[100vw] top-0 left-0 z-30 ${!show ?"collapse": ""}`}>
      <div
        className={`absolute h-full w-full  bg-black transition-all duration-500  ${!show?"bg-opacity-0 collapse":"bg-opacity-50"}`}
        onClick={() => setShow(!show)}
      />
      <div className="w-full h-full flex items-center justify-center">
        <div className={`${!show?"-translate-y-[100vh]":"translate-y-0"}  bg-white ease-[cubic-bezier(0.33,-1,0.66,2)] transition-all duration-500
		rounded-lg p-4 shadow-[0_0_4px_0_rgba(0,0,0,0.3)] max-w-[96vw] max-h-[96vh] `}>{children}</div>
      </div>
    </div>
  );
}
