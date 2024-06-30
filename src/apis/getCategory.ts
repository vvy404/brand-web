import { ProductFullCatogoryType, AjaxResType, DefaultErrorType } from "@/lib/globalts";

interface getCategoryListtResType {
  list: ProductFullCatogoryType[],
}

export const getCategoryList = async () : Promise<AjaxResType<getCategoryListtResType, DefaultErrorType>> => {
  const res = await fetch("/api/getProductCategoryList");
  const repo = await res.json()

  return repo;
}