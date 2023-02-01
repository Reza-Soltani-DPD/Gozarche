import * as React from "react";
import Modal from "../Modal";
import axios from "axios";
import type { AxiosRequestConfig, AxiosProgressEvent } from "axios";
import Spinner from "../SVG/Spinner";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/outline";
import { trpc } from "../../utils/trpc";
import Image from "next/image";

type image = {
  id: string;
  url: string;
  ariaLabel: string | null;
};
export interface IAppProps {
  children?: React.ReactNode;
  setImagesUrlList(list: string[]): void;
  imagesList?: image[] | undefined;
}

type SuccessfulResponse<T> = { data: T; error?: never; statusCode?: number };
type UnsuccessfulResponse<E> = { data?: never; error: E; statusCode?: number };

type ApiResponse<T, E = unknown> =
  | SuccessfulResponse<T>
  | UnsuccessfulResponse<E>;

const uploadFileRequest = async (
  formData: FormData,
  progressCallback?: (progressEvent: AxiosProgressEvent) => void
): Promise<ApiResponse<string>> => {
  const config: AxiosRequestConfig = {
    headers: { "content-type": "multipart/form-data" },
    onUploadProgress: progressCallback,
    validateStatus: () => true,
  };
  const response = await axios.post("/api/upload", formData, config);

  return response.data;
};
export default function ImageModal(props: IAppProps) {
  const { children, imagesList, setImagesUrlList } = props;
  const [modalShow, setModalShow] = React.useState<boolean>(false);
  const [isUpLoading, setIsUpLoading] = React.useState(false);
  const [uploadPercent, setUploadPercent] = React.useState<number | undefined>(
    50
  );
  const [modalSelectedImages,setmodalSelectedImages]=React.useState<string[]|undefined>(imagesList?.map(image=>image.url))
  const { data } = trpc.media.getAllMediaByType.useQuery({
    mediaType: ["IMG"],
  });
  
  React.useEffect(()=>{
    if(imagesList){
      
      setmodalSelectedImages(imagesList?.map(image=>image.url))
    }
    },[imagesList])
  const fileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsUpLoading(true);
    const formData = new FormData();
    if (event.target.files && formData) {
      Array.from(event.target.files).forEach((file) => {
        formData.append(event.target.name, file);
      });
      const { data } = await uploadFileRequest(formData, (value) => {
        setUploadPercent(value.progress);
      });
      data &&
        (imagesList
          ? setImagesUrlList([...imagesList.map((image) => image.url), data])
          : setImagesUrlList([data]));

      setIsUpLoading(false);
    }
  };
  const imageClickHandle = (url: string) => {
    if (modalSelectedImages?.includes(url)) {
      setmodalSelectedImages([...modalSelectedImages?.filter((image) => image != url)]);
    } else {
      setmodalSelectedImages(modalSelectedImages?[...modalSelectedImages,url]:[url])
    }
  };
  return (
    <>
      <div className="flex ">
        <div
          className="m-2 flex  h-min max-w-min rounded-lg border border-sky-300 p-2 font-vazir font-bold text-sky-400 transition-all duration-500 hover:rounded-3xl hover:text-sky-500"
          onClick={() => setModalShow(!modalShow)}
        >
          ویرایش
        </div>

        <Modal show={modalShow} setShow={setModalShow}>
          <div className="flex justify-around">
            <div className="p-2 font-vazir ">انتخاب تصاویر:</div>
          </div>
          <div className="max-xs:grid-cols-1 my-5 grid h-full w-full items-center gap-4 overflow-scroll  p-2 max-lg:grid-cols-3 max-sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  border-gray-400">
            <div className="flex h-full justify-center rounded border border-sky-400 font-vazir">
              <label
                htmlFor="file"
                className=" duration-50 m-auto flex items-center justify-center py-2 px-2 hover:scale-95"
              >
                افزودن
                <PlusIcon
                  className={`m-auto font-light h-12 w-12 p-2 text-sky-500  ${
                    isUpLoading ? "hidden" : ""
                  }`}
                />
                <Spinner
                  bgColor="text-gray-300"
                  percentage={uploadPercent}
                  spColor="text-sky-500"
                  opacity={isUpLoading ? "opacity-100" : "opacity-30"}
                  dimensions={12}
                  hidden={!isUpLoading}
                />
              </label>
              <input
                name="file"
                id="file"
                className="hidden"
                type="file"
                title=""
                accept=".jpg,.jpeg,.png"
                onChange={fileChange}
              />
            </div>
            {imagesList?.map((image, index) => {
              return (
                <div
                  key={index}
                  className={`aspect-square p-2 rounded-lg ${modalSelectedImages?.includes(image.url)?'shadow-[0_0_10px_-3px_rgba(50,50,200,1)]':
                  'shadow-[0_0_10px_-3px_rgba(0,0,0,0.4)]'} `}
                  onClick={() => imageClickHandle(image.url)}
                >
                  <Image
                    src={image.url}
                    className="aspect-square object-contain "
                    alt="image"
                    width={400}
                    height={400}
                  />
                </div>
              );
            })}
            {data ? (
              data.map((image, index) => {
                if (imagesList?.map(image=>image.url).includes(image.url)) {
                  return;
                }
                return (
                  <div
                    key={index}
                    className={`aspect-square p-2 rounded-lg ${modalSelectedImages?.includes(image.url)?'shadow-[0_0_10px_-3px_rgba(56,248,56,1)]':
                    'shadow-[0_0_10px_-3px_rgba(0,0,0,0.4)]'} `}
                    onClick={() => imageClickHandle(image.url)}
                  >
                    <Image
                      src={image.url}
                      height={400}
                      width={400}
                      className="aspect-square object-contain "
                      alt="image"
                    />
                  </div>
                );
              })
            ) : (
              <div>hello</div>
            )}
          </div>
          <div className='p-2 mt-1 border-t-2 border-gray-500 flex justify-around'>
            <div className='border rounded-md hover:rounded-3xl border-red-400 p-2 px-4 flex items-center font-vazir text-red-500'
            onClick={()=>{setImagesUrlList(imagesList?.map(image=>image.url)||[]);setModalShow(false)}}>
              لغو
              <PlusIcon className=' font-light h-12 w-12 p-2 rotate-45 '/>
            </div>
            <div className='border rounded-md hover:rounded-3xl border-green-400 p-2 px-4 flex items-center font-vazir text-green-500' 
            onClick={()=>{setImagesUrlList(modalSelectedImages||[]);setModalShow(false)}}>
              ثبت
              <CheckIcon className=' font-light h-12 w-12 p-2 '/>
            </div>
          </div>
        </Modal>
      </div>
      {children ? children : ""}
    </>
  );
}