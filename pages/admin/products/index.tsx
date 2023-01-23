import * as React from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import { trpc } from "../../../utils/trpc";
import Link from "next/link";
import Pagination from "../../../components/Pagination";
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

type colNames = "id"|"title"|"imageid"|"slug"|"createdAT"
type tablecol = {
  name: colNames;
  text: string;
};
const tableCols: tablecol[] = [
  {
    name: 'id',
    text: 'آیدی',
  },
  {
    name: 'title',
    text: 'نام',
  },
  {
    name: 'imageid',
    text: 'تصویر',
  },
  {
    name: "slug",
    text: "آدرس",
  },
  {
    name:"createdAT",
    text:"تاریخ اضافه کردن"
  }
];
export default function Products() {
  const [productstate, setProductState] = React.useState<
    "all" | "published" | "trashed"
  >("all");
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const [selected, setSelected] = React.useState<string[]>([]);

  const { data: datacount } =
    trpc.admin.products.product.productCount.useQuery();
  const { data, refetch } = trpc.admin.products.product.getproducts.useQuery({
    take: 6,
    skip: (pageNumber - 1) * 6,
    filter: { filtername: productstate, filterState: true },
  });  
  const setPage = (page: number) => {
    setPageNumber(page);
    refetch();
  };
  const SetSelected = (id: string) => {
    if (selected) {
      setSelected(
        selected.includes(id)
          ? selected.filter((item) => item != id)
          : [...selected, id]
      );
    } else {
      setSelected(Array(id));
    }
  };
  return (
    <AdminLayout>
      <div className="flex w-full justify-between bg-white">
        <h1 className="text-md px-10 py-5 font-vazir font-bold">محصولات</h1>
      </div>
      <div className="mt-4  w-full px-4 ">
        <div className="flex items-center py-4">
          <span>
            {" "}
            <h1 className="p-2 font-vazir text-lg font-bold">محصولات </h1>
          </span>
          <span>
            <Link
              href="/admin/products/addproduct"
              className="m-2 rounded-lg border border-sky-600 p-1 font-vazir text-sm text-sky-600 transition-all duration-300 hover:border-sky-500 hover:text-sky-500"
            >
              افزودن محصول
            </Link>
          </span>
        </div>
        <div className='flex justify-between'>
          <div>
            {datacount?.all != 0 ? (
              <span
                className={`font-FDvazir text-sm ${
                  productstate == "all" ? "font-bold" : ""
                }`}
                onClick={() => {
                  setProductState("all");
                  setPageNumber(1);
                  refetch();
                }}
              >
                {datacount?.all ? "(" + datacount?.all + ")" : " "}همه{" "}
              </span>
            ) : (
              ""
            )}
            {datacount?.published != 0 ? (
              <span
                className={`font-FDvazir text-sm ${
                  productstate == "published" ? "font-bold" : ""
                }`}
                onClick={() => {
                  setProductState("published");
                  setPageNumber(1);
                  refetch();
                }}
              >
                |{" "}
                {datacount?.published
                  ? "(" + datacount?.published + ")"
                  : "(0)"}
                منتشر شده{" "}
              </span>
            ) : (
              ""
            )}
            {datacount?.trashed != 0 ? (
              <span
                className={`font-FDvazir text-sm ${
                  productstate == "trashed" ? "font-bold" : ""
                }`}
                onClick={() => {
                  setProductState("trashed");
                  setPageNumber(1);
                  refetch();
                }}
              >
                | {datacount?.trashed ? "(" + datacount?.trashed + ")" : "(0)"}{" "}
                زباله دان
              </span>
            ) : (
              ""
            )}
          </div>
          <div className='flex'>
            <span className={`transition-all duration-700 ${selected.length>0?"text-gray-600":'text-gray-400'} px-2`}>
              <TrashIcon className='h-5 w-5 '/>
            </span>
            <span className={`transition-all duration-700 ${selected.length!=1?"text-gray-400":'text-gray-600'} px-2`}>
              <PencilIcon className='h-5 w-5 '/>
            </span>
            </div>
        </div>
        <div className=" h-full w-full py-2">
          <div className="my-2 flex w-full overflow-scroll rounded-lg border border-gray-400">
            <table className=" w-full">
              <thead className="w-full bg-gray-100 h-16">
                <tr className=" border-gray-400 p-2 ">
                  <th className="w-5   p-2 font-vazir text-sm font-light ">
                    انتخاب
                  </th>
                  {tableCols.map((col, index) => (
                    <th
                      key={index}
                      scope="col"
                      className=" py-2  font-vazir text-sm font-light"
                    >
                      <div className=" border-r border-gray-400 px-4 h-full">
                        {col.text}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data
                  ? data.map((product, rowindex) => (
                      <tr
                        key={rowindex}
                        className={`h-20 border-b border-t border-gray-400 transition-all duration-700 ${
                          selected.includes(product.id)
                            ? "bg-sky-200 bg-opacity-50"
                            : ""
                        }`}
                      >
                        <th className="co-center items-center">
                          <div className="relative m-auto flex max-h-min max-w-min" onClick={() => SetSelected(product.id)}>
                            <input
                              type="radio"
                              className="peer z-10 h-4 w-4 opacity-0"
                              checked={selected.includes(product.id)}
                              
                            />
                            <label className="absolute  h-4 w-4 rounded  border border-gray-400 bg-white shadow-[inset_0_0_4px_0_rgba(0,0,0,0.4)] duration-700 transition-all  peer-checked:bg-sky-400 peer-checked:shadow-[inset_0_0_6px__rgba(250,250,250,0.4)]"></label>
                          </div>
                        </th>
                        {tableCols.map((col, cellindex) => {
                          const { name } = col;
                          if (product[name]) {
                            return (
                              <td
                                key={cellindex}
                                className="p-2 text-center font-vazir"
                              >
                                {product[name].toString()}
                              </td>
                            );
                          } else {
                            return (
                              <td
                                key={cellindex}
                                className="text-center text-[0.85rem] font-bold text-red-700"
                              >
                                {""}
                              </td>
                            );
                          }
                        })}
                      </tr>
                    ))
                  : ""}
                <tr className=" bg-gray-100 p-2">
                  <th />
                  {tableCols.map((col, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="p-2 font-vazir text-sm font-light"
                    >
                      <div className="min-w-max border-r border-gray-400">
                        {col.text}
                      </div>
                    </th>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex">
            شماره صفحه :
            <Pagination
              pageNumber={pageNumber}
              numberOfPages={
                datacount ? Math.ceil(datacount[productstate] / 5) : 1
              }
              setPage={setPage}
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
