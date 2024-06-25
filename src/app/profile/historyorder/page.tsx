"use client"

import { useState, useEffect } from "react"
import { OrderType, OrderCategoryType, OrderFullInfoType } from "@/lib/globalts"
import { getOrderList } from "@/apis/getOrderList"
import OrderList from "@/components/profile/OrderList"


const HistoryOrder : React.FC = () => {
  const [ orderlist , setOrderList ] = useState<OrderFullInfoType[]>([]);

  const getOrderListData = async () => {
    const res = await getOrderList();
    if (res && !res.code && res.data) {
      setOrderList(res.data.list);
    }
  } 
  useEffect(() => {
    getOrderListData();
  }, [])
  return (
      <div className="ml-28 mt-14 w-[50%]">
        <OrderList list={orderlist}></OrderList>
      </div>
  )
}
export default HistoryOrder;