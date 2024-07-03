import { CartItemType, AjaxResType, DefaultErrorType } from "@/lib/globalts";

interface CartListResType {
  list: CartItemType[],
}

export const getCartListData = async () : Promise<AjaxResType<CartListResType, DefaultErrorType>> => {
  const res = await fetch("/api/getCartList");
  const repo = await res.json()

  return repo;
}