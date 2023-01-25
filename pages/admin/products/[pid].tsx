import * as React from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import { useRouter } from "next/router";
import { trpc } from "../../../utils/trpc";
import { AdminHeader } from "../../../components/AdminComponenets/AdminHeader";

export default function Products() {
  const router = useRouter();
  const { pid } = router.query;
  const { data, isLoading } =
    trpc.admin.products.product.getproductById.useQuery(pid as string);
  console.log(data);
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
        <div className="p-2"></div>
      )}
    </AdminLayout>
  );
}
