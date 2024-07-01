import { FavProductFullType, AjaxResType, DefaultErrorType } from "@/lib/globalts";

interface FavouriteListResType {
  list: FavProductFullType[],
}

export const getFavListData = async () : Promise<AjaxResType<FavouriteListResType, DefaultErrorType>> => {
  const res = await fetch("/api/getFavouriteList");
  const repo = await res.json()

  return repo;
}