import * as React from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import { trpc } from "../../../utils/trpc";

export default function Products() {
  const {data}= trpc.admin.products.getproducts.useQuery({skip:0})
  

  return (
      <AdminLayout>{data?JSON.stringify(data):"is loading"}</AdminLayout>
  );
}
