import { ProductFullCatogoryType, AjaxResType, DefaultErrorType } from "@/lib/globalts";

interface getCategoryListtResType {
  list: ProductFullCatogoryType[],
}

export const getCategoryList = async () : Promise<AjaxResType<getCategoryListtResType, DefaultErrorType>> => {
  const res = await fetch("http://localhost:3000/api/getProductCategoryList");
  const repo = await res.json()

  return repo;
}