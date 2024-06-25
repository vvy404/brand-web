import { OrderFullInfoType, AjaxResType, DefaultErrorType } from "@/lib/globalts";

interface OrderInfoResType {
  list: OrderFullInfoType[],
}


export const getOrderList = async () : Promise<AjaxResType<OrderInfoResType, DefaultErrorType>> => {
  const res = await fetch(`http://localhost:3000/api/getOrder`);
  const repo = await res.json()

  return repo;
}