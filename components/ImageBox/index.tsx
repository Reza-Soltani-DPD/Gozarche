import * as React from "react";
import ImageModal from "../ImageModal";
import { trpc } from "../../utils/trpc";
import Image from "next/image";

export interface IImageBoxProps {
  imagesid?: string[];
  setImagesId(list: string[]): void;
}

export default function ImageBox(props: IImageBoxProps) {
  const { imagesid, setImagesId } = props;
  const {
    data: images,
    isLoading,
    isError,
  } = trpc.media.getMediaById.useQuery(imagesid?imagesid:[]);

  return (
    <>
      <div className="">
        <ImageModal imagesList={images?images.map(image=>{return{id:image.id,url:image.url,ariaLabel:image.ariaLabel}}):undefined} setImagesIdList={setImagesId} />
        <div>
          {!images && isLoading ? (
            <div>بارگزاری</div>
          ) : (
            <>
              {!isError ? (
                <div className="grid grid-cols-3 gap-4 w-8/12">
                  {images
                    ? images.map((image, index) => (
                        <div className="aspect-square p-2 shadow-[0_0_4px_0_rgba(0,0,0,0.3)] bg-white rounded" key={index}>
                          <Image src={image.url} width={400} height={500} alt={image.ariaLabel?image.ariaLabel:'image '} className='aspect-square object-contain'/>
                        </div>
                      ))
                    : "خالی"}
                </div>
              ) : (
                <div>خطا در نمایش تصاویر</div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
