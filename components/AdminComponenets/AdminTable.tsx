import * as React from 'react';
import Pagination from "../Pagination";
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';


type colname=string
export type tablecol<T extends Partial<colname>> = {
  name:T;
  text: string;
};
interface AdminTableProps<T extends colname>{
	datacount:{all:number,trashed:number,published:number}|undefined
	itemstate:"all"|"published"|"trashed"
  setItemState:React.Dispatch<"all"|"published"|"trashed">
  datarefetch:()=>void
  tableCols:tablecol<T>[]
  setPageNumber:React.Dispatch<number>
  selected:string[]
  pageNumber:number
  setPage:(page:number)=>void
  SetSelected(id:string):void
  data:{[key in colname ]:unknown}[]|undefined
}
export default function AdminTable<T extends colname> (props:AdminTableProps<T>) {
	const{
		datacount,
		itemstate,
    setItemState,
    datarefetch,
    setPageNumber,
    selected,
    tableCols,
    pageNumber,
    setPage,
    SetSelected,
    data
	}=props
  return (
	<div>
	   <div className='flex justify-between'>
          <div>
            {datacount?.all != 0 ? (
              <span
                className={`font-FDvazir text-sm ${
                  itemstate == "all" ? "font-bold" : ""
                }`}
                onClick={() => {
                  setItemState("all");
                  setPageNumber(1);
                  datarefetch();
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
                  itemstate == "published" ? "font-bold" : ""
                }`}
                onClick={() => {
                  setItemState("published");
                  setPageNumber(1);
                  datarefetch();
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
                  itemstate == "trashed" ? "font-bold" : ""
                }`}
                onClick={() => {
                  setItemState("trashed");
                  setPageNumber(1);
                  datarefetch();
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
                          selected.includes(product.id as string)
                            ? "bg-sky-200 bg-opacity-50"
                            : ""
                        }`}
                      >
                        <th className="co-center items-center">
                          <div className="relative m-auto flex max-h-min max-w-min" onClick={() => SetSelected(product.id as string)}>
                            <input
                              type="radio"
                              className="peer z-10 h-4 w-4 opacity-0"
                              checked={selected.includes(product.id as string)}
                              
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
                                {product[name]?.toString()}
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
                datacount ? Math.ceil(datacount[itemstate] / 5) : 1
              }
              setPage={setPage}
            />
          </div>
        </div>
	</div>
  );
}
