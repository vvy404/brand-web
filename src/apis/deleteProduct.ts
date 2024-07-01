import { FavProductFullType, AjaxResType, DefaultErrorType, ProductType } from "@/lib/globalts";

interface DeleteProductResType {
  product: ProductType[],
}

interface DeleteProductReqType {
  productid: number;
}

export const deleteProduct = async ({productid}: DeleteProductReqType) : Promise<AjaxResType<DeleteProductResType, DefaultErrorType>> => {
  const res = await fetch(`/api/deletefullInfoList?productid=${productid}`);
  const repo = await res.json()

  return repo;
}