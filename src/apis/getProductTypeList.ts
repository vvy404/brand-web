import { ProductType, DefaultErrorType, ProductColorType, ProductFullCatogoryType, AjaxResType } from "@/lib/globalts";

interface ProductTypeListResType {
  list: ProductFullCatogoryType[],
}

export const getProducTypetListData = async () : Promise<AjaxResType<ProductTypeListResType, DefaultErrorType>> => {
  const res = await fetch(`/api/root/getshoetype`);
  const repo = await res.json()

  return repo;
}