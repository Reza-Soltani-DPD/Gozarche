import * as React from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import { trpc } from "../../../utils/trpc";

export default function Products() {
  const { data } = trpc.admin.products.product.getallproducts.useQuery({
    skip: 0,
  });

  return (
    <AdminLayout>
        <div className='w-full bg-white'>
      <h1 className="p-10 font-vazir text-lg font-bold">محصولات</h1>

		</div>
      <div>
      </div>
    </AdminLayout>
  );
}
