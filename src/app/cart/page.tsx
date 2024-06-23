"use client"

import { useState, useEffect } from "react"

import CartCard from "@/components/public/CartCard"
import OrderSummary from "@/components/public/OrderSummary"
import ViewdList from "@/components/detail/ViewdList"
import Recommend from "@/components/detail/Recommend"

import { CartItemType, ProductType } from "@/lib/globalts"
import { getCartListData } from "@/apis/getCartList"
import { getViewedListData } from "@/apis/getViewedList"
import { getRecoListData } from "@/apis/getRecoList"

const Cart : React.FC = () => {

  const [ cartlist, setCartList ] = useState<CartItemType[]>([]);
  const [ viewedlist, setViewedList ] = useState<ProductType[]>([]);
  const [ recommendlist, setRecoList ] = useState<ProductType[]>([]);

  const getCartList = async () => {
    const res = await getCartListData();
    if (res && !res.code && res.data) {
      setCartList(res.data.list)
    }
  }

  const getViewedList = async () => {
    const res = await getViewedListData({type: "lastviewed"});
    if (res && !res.code && res.data) {
      setViewedList(res.data.list)
    }
  }
  const getRecoList = async () => {
    const res = await getRecoListData({productid : 1});
    if (res && !res.code && res.data) {
      setRecoList(res.data.recommendlist)
    }
  }

  useEffect(() => {
    getCartList();
    getViewedList();
    getRecoList();
  }, [])
    return (
        <div className="mt-28 mx-8">
            <div className="flex justify-between">
                <div className="w-[56%]">
                    <CartCard list={cartlist}></CartCard>
                </div>
                <div className="w-[36%]">
                    <OrderSummary></OrderSummary>
                </div>
            </div>
            <ViewdList list={viewedlist}></ViewdList>
            <div className="mt-6">
                <Recommend list={recommendlist}></Recommend>
            </div>
        </div>
    )
}
export default Cart;