import * as React from "react";
import type { VariationOptionType_Include_OptionValue } from "../../../server/db/dbtypes";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/outline";
import { trpc } from "../../../utils/trpc";
import { debounce } from "lodash";
import Spinner from '../../SVG/Spinner';
export interface IOptionTypeBoxProps {
  variationoption: VariationOptionType_Include_OptionValue;
  setVariationOption:(item:VariationOptionType_Include_OptionValue)=>void
}

export default function OptionTypeBox(props: IOptionTypeBoxProps) {
  const { variationoption,setVariationOption } = props;
  const [edit, setEdit] = React.useState<boolean>(false);
  const [panelShow, setPanelShow] = React.useState<boolean>(false);
  const [optionType, setOptionType] = React.useState<string|undefined>(variationoption?.variation?.Name);
  const [optionValue, setOptionValue] = React.useState<string|undefined >(variationoption.optionValue );
  const typeref=React.useRef(null)
  const valueref=React.useRef(null)
  const mutation =
    trpc.admin.products.variationOptions.searchVariationOptionByIncludeVariation.useMutation();

  type debounceinput = {
    type: string | undefined;
    value: string | undefined;
  };
  const debounceCallback = debounce(({ type, value }: debounceinput) => {
    if (optionType) {
      mutation.mutate({ type, value });
    }
  }, 500);
  const handleEditClose = () => {
    setEdit(false)
    setPanelShow(false)
    
  }
  const handlesearchPanelclick = (item:VariationOptionType_Include_OptionValue) => {
    setEdit(false)
    setPanelShow(false)
    setVariationOption(item)
  }
    
  return (
    <div className="group flex min-w-fit flex-nowrap items-center p-1 transition-all duration-1000">
      <div className={`${!edit ? "w-50" : "w-0"} overflow-hidden `}>
        {variationoption.variation.Name + ": " + variationoption.optionValue}
      </div>
      <div className={`${edit ? "w-50" : "w-0"} relative  `}>
        <div className="overflow-hidden">
          <input
            ref={typeref}
            className='m-1 w-14 max-w-lg rounded-md bg-white p-1  font-vazir shadow-[0_0_4px_0_"#38bgf8"] shadow-sky-400 outline-none transition-all
            duration-500 hover:rounded-xl focus:rounded-xl disabled:bg-white   disabled:text-gray-400'
            defaultValue={variationoption.variation.Name}
            onChange={(e) => {
              setOptionType(e.target.value);
              setPanelShow(true);
              debounceCallback({ type: e.target.value, value: optionValue });
            }}
            />
          <input
            ref={valueref}
            className='m-1 w-14 max-w-lg rounded-md bg-white p-1  font-vazir shadow-[0_0_4px_0_"#38bgf8"] shadow-sky-400 outline-none transition-all
  duration-500 hover:rounded-xl focus:rounded-xl disabled:bg-white   disabled:text-gray-400'
            defaultValue={variationoption.optionValue}
            onChange={(e) => {
              setOptionValue(e.target.value);
              setPanelShow(true);
              debounceCallback({ type: optionType, value: e.target.value });
            }}
          />
        </div>

        <div
          className={`absolute p-2 ${
            !panelShow ? "hidden " : ""
          }  z-20 min-w-max rounded bg-white shadow-center `}
        >
          {!mutation.isLoading ? (mutation.data&&mutation.data.length>0
             ? (
              mutation.data.map((res, index) => (
                <div key={index} className="hover:bg-gray-300 transition-all duration-500 p-2 rounded" onClick={()=>handlesearchPanelclick(res)}>
                  {res.variation.Name + ": " + res.optionValue}
                </div>
              ))
            ) : (
              <div>نتیجه‌ای یافت نشد</div>
            )
          ) : (
              <div className="flex items-center justify-center"><Spinner bgColor="text-gray-400 " dimensions={30} percentage={60}  spColor='text-sky-500'/></div>
          )}
        </div>
      </div>
      <div
        className="flex items-center"
        onClick={() => {
          if (edit) {
            handleEditClose()
          }
          else {
            setEdit(true);
            setPanelShow(false);
          }
        }}
      >
        <PencilIcon className="my-1 h-5 w-0 text-sky-500 transition-all duration-300 hover:-rotate-45 group-hover:w-[0.9rem]" />
      </div>
      <div className="transition-all duration-300 hover:rotate-90 ">
        <PlusIcon className="h-5 w-5 rotate-45 stroke-[4px] text-rose-500 " />
      </div>
    </div>
  );
}
