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
  const [isUpLoading, setIsUpLoading] = React.useState(false);
  const inputFileRef = React.useRef<HTMLInputElement | null>(null);
  const fileChange = async () => {
    if (!inputFileRef?.current?.files) {
      return;
    }
    setIsUpLoading(true);
    const formData = new FormData();
    Object.values(inputFileRef.current.files).forEach((file) => {
      formData.append("file", file);
    });
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const body = (await response.json()) as {
      status: "ok" | "fail";
      message: string;
    };
    alert(body.message);

    if (body.status === "ok") {
      inputFileRef.current.value = "";
      // Do some stuff on successfully upload
    } else {
      // Do some stuff on error
    }

    console.log(formData);
    setIsUpLoading(false);
  };

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
            <div className="animateShadow flex justify-center font-vazir">
              <label htmlFor="file" className="py-2 px-4">
                بارگذاری تصویر
              </label>
              <input
                id="file"
                className="hidden"
                type="file"
                title=""
                accept=".jpg,.jpeg,.png"
                onChange={() => fileChange()}
                ref={inputFileRef}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="h-48 w-48 bg-gray-400"></div>
            <div className="h-48 w-48 bg-gray-400 "></div>
          </div>
        </Modal>
      </div>
      {children ? children : ""}
    </>
  );
}
