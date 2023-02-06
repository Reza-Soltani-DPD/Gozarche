import * as React from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import { useRouter } from "next/router";
import { trpc } from "../../../utils/trpc";
import { AdminHeader } from "../../../components/AdminComponenets/AdminHeader";
import moment from 'jalali-moment'
import ImageBox from '../../../components/ImageBox';
import { ProductVariationSelector } from '../../../components/AdminComponenets/ProductVariationSelector';


export default function Products() {
  const router = useRouter();
  const { pid } = router.query;
  const [product, setProduct] = React.useState<typeof data>();
  const { data, isLoading } =
    trpc.admin.products.product.getproductById.useQuery(pid as string, {
      onSuccess: (data) => {
        if (data && !product) {
          setProduct(data);
        }
      },
    });
  const setImagesUrl = (list: string[]) => {
    if (product) setProduct({ ...product, imageurl: list });
  };
  if (!data) {
    return <div>خطا</div>;
  }

  
  return (
    <AdminLayout>
      <AdminHeader title="محصولات" subtitle="ویرایش محصول" />

      {!data ? (
        isLoading ? (
          <div className="flex h-full w-full items-center justify-center font-vazir text-2xl font-semibold">
            بارگزاری
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center font-vazir text-2xl font-semibold">
            خطایی رخ داده است
          </div>
        )
      ) : (
        <div className="p-2">
          <div id="id" className="flex flex-col">
            <label className="textLabel ">آیدی:</label>
            <input className="textInput " defaultValue={product?.id} disabled />
          </div>
          <div id="title" className="flex flex-col">
            <label className="textLabel ">نام:</label>
            <input
              className="textInput"
              defaultValue={product?.title}
              onChange={(e) =>
                setProduct(product && { ...product, title: e.target.value })
              }
            />
          </div>
          <div id="slug" className="flex flex-col">
            <label className="textLabel ">اسلاگ:</label>
            <input
              className="textInput"
              defaultValue={product?.slug}
              onChange={(e) =>
                setProduct(product && { ...product, slug: e.target.value })
              }
            />
          </div>
          <div id="sku" className="flex flex-col">
            <label className="textLabel">کد محصول:</label>
            <input
              className="textInput"
              defaultValue={product?.sku ? product.sku : undefined}
              onChange={(e) =>
                setProduct(product && { ...product, sku: e.target.value })
              }
            />
          </div>
          <div className="flex max-w-lg justify-around">
            <div id="type" className="">
              <label className="textLabel flex items-center">نوع محصول:</label>
              <select
                defaultValue={product?.type || "PSC"}
                className="textInput mx-4 font-vazir "
                  onChange={(e) => e }
              >
                <option value="PSC">فیزیکی </option>
                <option value="DIG">دیجیتالی </option>
              </select>
            </div>
          </div>
          <div id="summary" className="flex flex-col">
            <label className="textLabel ">توضیحات:</label>
            <textarea
              className="textInput min-h-[15rem]"
              onChange={(e) =>
                setProduct(product && { ...product, summary: e.target.value })
              }
              rows={5}
            />
          </div>
          <div id="images" className="flex flex-col">
            <label className="textLabel ">تصاویر:</label>
            <ImageBox imagesUrl={product?.imageurl} setImagesUrl={setImagesUrl} />
          </div>
          <div id="variations " className="max-w-xl">
            <label className="textLabel flex items-center">مدل‌ها:</label>
              <ProductVariationSelector variations={product?.variations}
                setVariations={(vari) => setProduct(product && { ...product, variations: [vari] } )}
            />
          </div>
          <div id="published" className="">
            <label className="textLabel flex items-center">
              منتشر شده:
              <div className=" relative m-4 box-content h-6 w-10 overflow-hidden rounded-2xl border bg-white text-gray-200 shadow-inner peer-checked:text-sky-400 ">
                <input
                  name="check"
                  type="checkbox"
                  className="peer absolute top-0 right-0 h-10 w-10 opacity-0"
                  defaultChecked={product?.published}
                  onChange={(e) => {
                    return (
                      product &&
                      setProduct({ ...product, published: e.target.checked })
                    );
                  }}
                />
                <div className=" absolute top-[0.125rem] right-[0.125rem] h-5 w-5 rounded-full bg-gray-400 p-2 transition-all duration-300 peer-checked:-translate-x-4 peer-checked:bg-sky-500"></div>
              </div>
              {product?.publishedAT ? (
                <div className="font-FDvazir">
                  در تاریخ :
                  {moment
                    .from(product.publishedAT.toString(), "fa")
                    .format("jYYYY/jMM/jDD  ساعت-HH:mm:ss")}
                </div>
              ) : (
                ""
              )}
            </label>
          </div>
          <div id="trashed" className="">
            <label className="textLabel flex items-center">
              زباله دان:
              <div className=" relative m-4 box-content h-6 w-10 overflow-hidden rounded-2xl border bg-white text-gray-200 shadow-inner peer-checked:text-sky-400 ">
                <input
                  name="check"
                  type="checkbox"
                  className="peer absolute top-0 right-0 h-10 w-10 opacity-0"
                  defaultChecked={product?.trashed}
                  onChange={(e) => {
                    return (
                      product &&
                      setProduct({ ...product, trashed: e.target.checked })
                    );
                  }}
                />
                <div className=" absolute top-[0.125rem] right-[0.125rem] h-5 w-5 rounded-full bg-gray-400 p-2 transition-all duration-300 peer-checked:-translate-x-4 peer-checked:bg-sky-500"></div>
              </div>
              {product?.trashedAT ? (
                <div className="font-FDvazir">
                  در تاریخ :
                  {moment
                    .from(product.trashedAT.toString(), "fa")
                    .format("jYYYY/jMM/jDD  ساعت-HH:mm:ss")}
                </div>
              ) : (
                ""
              )}
            </label>
          </div>
          <div id="deleted" className="">
            <label className="textLabel flex items-center">
              حذف شده:
              <div className=" relative m-4 box-content h-6 w-10 overflow-hidden rounded-2xl border bg-white text-gray-200 shadow-inner peer-checked:text-sky-400 ">
                <input
                  name="check"
                  type="checkbox"
                  className="peer absolute top-0 right-0 h-10 w-10 opacity-0"
                  defaultChecked={product?.deleted}
                  onChange={(e) => {
                    return (
                      product &&
                      setProduct({ ...product, deleted: e.target.checked })
                    );
                  }}
                />
                <div className=" absolute top-[0.125rem] right-[0.125rem] h-5 w-5 rounded-full bg-gray-400 p-2 transition-all duration-300 peer-checked:-translate-x-4 peer-checked:bg-sky-500"></div>
              </div>
              {product?.deletedAT ? (
                <div className="font-FDvazir">
                  در تاریخ :
                  {moment
                    .from(product.deletedAT.toString(), "fa")
                    .format("jYYYY/jMM/jDD  ساعت-HH:mm:ss")}
                </div>
              ) : (
                ""
              )}
            </label>
          </div>
          <div id="updatedAT" className="">
            <label className="textLabel flex items-center">
              آخرین به روز رسانی در تاریخ:
              {product?.updatedAT ? (
                <div className="font-FDvazir">
                  {moment
                    .from(product.updatedAT?.toString(), "fa")
                    .format("jYYYY/jMM/jDD  ساعت-HH:mm:ss")}
                </div>
              ) : (
                ""
              )}
            </label>
          </div>
          <div id="createdAT" className="">
            <label className="textLabel flex items-center">
              ساخته شده در تاریخ:
              {product?.createdAT ? (
                <div className="font-FDvazir">
                  {moment
                    .from(product.createdAT?.toString(), "fa")
                    .format("jYYYY/jMM/jDD  ساعت-HH:mm:ss")}
                </div>
              ) : (
                ""
              )}
            </label>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
