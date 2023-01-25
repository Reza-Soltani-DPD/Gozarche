import * as React from "react";
import ImageModal from "../ImageModal";

export interface IImageBoxProps {
  imagesid?: string[];
  setImagesId(list: string[]): void;
}

export default function ImageBox(props: IImageBoxProps) {
  const { imagesid, setImagesId } = props;
  return (
    <>
      <div className='flex'>
        <ImageModal imagesIdList={imagesid} setImagesIdList={setImagesId} />
        <div className="grid grid-cols-3">
          {imagesid && imagesid.length > 0 ? (
            <div>
              {imagesid.map((imageId, index) => (
                <div key={index}></div>
              ))}
            </div>
          ) : (
            <div className="m-auto  text-center">خالی</div>
          )}
        </div>
      </div>
    </>
  );
}
