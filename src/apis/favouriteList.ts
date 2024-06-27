import { ProductType, AjaxResType, DefaultErrorType } from "@/lib/globalts";

interface FavouriteListResType {
  list: ProductType[],
}

export const getFavListData = async () : Promise<AjaxResType<FavouriteListResType, DefaultErrorType>> => {
  const res = await fetch("/api/getFavouriteList");
  const repo = await res.json()

  return repo;
}