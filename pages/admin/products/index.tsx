import * as React from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import { trpc } from "../../../utils/trpc";
import Link from "next/link";

import AdminTable from '../../../components/AdminComponenets/AdminTable';
import type{tablecol} from '../../../components/AdminComponenets/AdminTable';
import { AdminHeader } from '../../../components/AdminComponenets/AdminHeader';


type colName="id"|"title"|"imageid"|"slug"|"createdAT"

const tableCols: tablecol<colName>[] = [
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
  const [deleteModalshow,setDeleteModalShow]=React.useState<boolean>(false)
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const [selected, setSelected] = React.useState<string[]>([]);
  const [productstate, setProductState] = React.useState<
    "all" | "published" | "trashed"
  >("all");
  const { data: datacount } =
    trpc.admin.products.product.productCount.useQuery();
  const {mutate:deleteMutation,isError:deleteIsError,isLoading:deleteIsLoading,status:deleteStatus} =trpc.admin.products.product.deleteproducts.useMutation()
  const { data, refetch ,isLoading} = trpc.admin.products.product.getproducts.useQuery({
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
  console.log(deleteIsLoading,deleteIsError,deleteStatus);
  
  const DeleteItems = ()=>{
    deleteMutation(selected)


    
  }
  return (
    <AdminLayout>
      <AdminHeader title='محصولات'/>
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
        {!data?(isLoading?
        <div className="flex h-full w-full items-center justify-center font-vazir text-2xl font-semibold">
            بارگزاری
          </div>:
          <div className="flex h-full w-full items-center justify-center font-vazir text-2xl font-semibold">
          خطایی رخ داده است
        </div>):
       <AdminTable<colName>
        datacount={datacount}
        itemstate={productstate}
        setItemState={setProductState}
        datarefetch={()=>refetch()}
        tableCols={tableCols}
        data={data}
        setPage={setPage}
        SetSelected={SetSelected}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        selected={selected}
        deleteModalShow={deleteModalshow}
        setDeleteModalShow={setDeleteModalShow}
        DeleteItems={DeleteItems}
        editlink='/admin/products/'
        />
      }
      </div>
    </AdminLayout>
  );
}
