import * as React from "react";
import Modal from "../Modal";
import Image from "next/image";
export interface IAppProps {
  children?: React.ReactNode;
  setImagesIdList(list: string[]): void;
  imagesIdList?: string[];
}

export default function ImageModal(props: IAppProps) {
  const { children, imagesIdList } = props;
  const [modalShow, setModalShow] = React.useState<boolean>(false);
  return (
    <>
      <div className="flex ">
        <div
          className="m-2 flex max-w-min rounded-lg border border-sky-300 p-2 font-vazir font-bold text-sky-400 transition-all duration-500 hover:rounded-3xl hover:text-sky-500"
          onClick={() => setModalShow(!modalShow)}
        >
          ویرایش
        </div>

        <Modal show={modalShow} setShow={setModalShow}>
          <div className="flex justify-around">
            <div className="p-2 font-vazir ">انتخاب تصاویر:</div>
            <div className="animateShadow p-2 font-vazir  ">افزودن تصویر</div>
          </div>
          <div className="grid grid-cols-4 gap-4">
			<div className='w-48 bg-gray-400 h-48'></div>
			<div className='w-48 bg-gray-400 h-48 '></div>
		  </div>
        </Modal>
      </div>
      {children ? children : ""}
    </>
  );
}
