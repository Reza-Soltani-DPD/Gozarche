import * as React from "react";
import ImageModal from "../ImageModal";
import { trpc } from "../../utils/trpc";

export interface IImageBoxProps {
  imagesid?: string[];
  setImagesId(list: string[]): void;
}

export default function ImageBox(props: IImageBoxProps) {
  const { imagesid, setImagesId } = props;
  const mediaType: "IMG" | "VID" | "AUD" = "IMG";
  const { data, isLoading, isError } = trpc.image.getAllMediaByType.useQuery({
    mediaType: [mediaType],
    ids: imagesid,
  });

  return (
    <>
      <div className="flex">
        <ImageModal imagesIdList={imagesid} setImagesIdList={setImagesId} />
        <div className="grid grid-cols-3">
          {imagesid && imagesid.length > 0 ? (
            <>
              {isLoading ? (
                <div>بارگزاری</div>
              ) : (
                <>
                  {data && !isError ? (
                    <div>
                      {data.map((data, index) => (
                        <div key={index}></div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      خطا در نمایش تصاویر
                    </div>
                  )}
                </>
              )}
            </>
          ) : (
            <div className="m-auto  text-center">خالی</div>
          )}
        </div>
      </div>
    </>
  );
}
