import * as React from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import { trpc } from "../../../utils/trpc";
import Link from "next/link";
import Pagination from "../../../components/Pagination";

type colNames = "id"|"title"|"imageid"|"slug"
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
];
export default function Products() {
  const [productstate, setProductState] = React.useState<
    "all" | "published" | "trashed"
  >("all");
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const { data, refetch } =
    trpc.admin.products.product.getproducts.useQuery({
      take: 5,
      skip: (pageNumber - 1) * 5,
      filter: { filtername: productstate, filterState: true },
    });
  React.useEffect(() => {
    if (data) {
      refetch();
    }
    
  }, [pageNumber]);
  const { data: datacount } =
    trpc.admin.products.product.productCount.useQuery();
  console.log(data);

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
              {datacount?.published ? "(" + datacount?.published + ")" : "(0)"}
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
        <div className=" h-full w-full py-2">
          <div className="my-2 flex w-full overflow-scroll rounded-lg border border-gray-400">
            <table className=" w-full">
              <thead className="w-full bg-gray-100">
                <tr className=" border-gray-400 p-2">
                  <th className="w-5   p-2 font-vazir text-sm font-light">
                    انتخاب
                  </th>
                  {tableCols.map((col, index) => (
                    <th
                      key={index}
                      scope="col"
                      className=" py-2  font-vazir text-sm font-light"
                    >
                      <div className=" px-4 border-r border-gray-400">
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
                        className="h-10 border-b border-t border-gray-400"
                      >
                        <th className="  content-center items-center">
                          <input type="radio"></input>
                        </th>
                        {tableCols.map((col, cellindex) => {
                          const{name}=col
                          if (product[name]) {
                            return (
                              <td
                                key={cellindex}
                                className="p-2 text-center font-vazir"
                              >
                                {product[name]}
                              </td>
                            );
                          } else {
                            return (
                              <td
                                key={cellindex}
                                className="text-center text-[0.85rem] font-bold text-red-700"
                              >
                                خالی
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
              setPage={setPageNumber}
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
