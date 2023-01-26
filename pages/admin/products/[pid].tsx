import * as React from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import { useRouter } from "next/router";
import { trpc } from "../../../utils/trpc";
import { AdminHeader } from "../../../components/AdminComponenets/AdminHeader";
import moment from 'jalali-moment'
import ImageBox from '../../../components/ImageBox';
export default function Products() {
  const router = useRouter();
  const { pid } = router.query;
  const { data, isLoading,
  } =
  trpc.admin.products.product.getproductById.useQuery(pid as string);
  const [product,setProduct] =React.useState<typeof data>(data)
  if(data){

  }
  const setImagesId=(list:string[])=>{
    
  }
  if (!data) {
    return;
  }
  return (
    <AdminLayout>
      <AdminHeader title="محصولات" subtitle='ویرایش محصول' />
      
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
          <div className='flex flex-col'><label className='textLabel '>آیدی:</label><input className="textInput " defaultValue={data.id} disabled/></div>
          <div className='flex flex-col'><label className='textLabel '>نام:</label><input className="textInput" defaultValue={data.title} /></div>
          <div className='flex flex-col'><label className='textLabel '>اسلاگ:</label><input className="textInput" defaultValue={data.slug} /></div>
          <div className='flex flex-col'><label className='textLabel '>توضیحات:</label><input className="textInput" defaultValue={data.summary} /></div>
          <div className='flex flex-col'><label className='textLabel '>تصاویر:</label><ImageBox imagesid={product?.imageid} setImagesId={setImagesId}/></div>
          <div className=''>{moment(data.createdAT).locale('en').format('jYYYY/jMM/jDD-HH:mm:ss')}</div>
          <div className=''>{moment(data.createdAT).locale('en').format('jYYYY/jMM/jDD-HH:mm:ss')}</div>
          <div className=''>{moment(data.createdAT).locale('en').format('jYYYY/jMM/jDD-HH:mm:ss')}</div>
          <div className=''>{moment(data.createdAT).locale('en').format('jYYYY/jMM/jDD-HH:mm:ss')}</div>
          <div className=''>{moment(data.createdAT).locale('en').format('jYYYY/jMM/jDD-HH:mm:ss')}</div>
          <div className=''>{moment(data.createdAT).locale('en').format('jYYYY/jMM/jDD-HH:mm:ss')}</div>
          <div className=''>{moment(data.createdAT).locale('en').format('jYYYY/jMM/jDD-HH:mm:ss')}</div>
          <div className=''>{moment(data.createdAT).locale('en').format('jYYYY/jMM/jDD-HH:mm:ss')}</div>
          <div className=''>{moment(data.createdAT).locale('en').format('jYYYY/jMM/jDD-HH:mm:ss')}</div>
          <div className=''>{moment(data.createdAT).locale('en').format('jYYYY/jMM/jDD-HH:mm:ss')}</div>
          <div className=''>{moment(data.createdAT).locale('en').format('jYYYY/jMM/jDD-HH:mm:ss')}</div>
          <div className=''>{moment(data.createdAT).locale('en').format('jYYYY/jMM/jDD-HH:mm:ss')}</div>
          <div className=''>{moment(data.createdAT).locale('en').format('jYYYY/jMM/jDD-HH:mm:ss')}</div>
          <div className=''>{moment(data.createdAT).locale('en').format('jYYYY/jMM/jDD-HH:mm:ss')}</div>
          <div className=''>{moment(data.createdAT).locale('en').format('jYYYY/jMM/jDD-HH:mm:ss')}</div>
        </div>
      )}
    </AdminLayout>
  );
}
