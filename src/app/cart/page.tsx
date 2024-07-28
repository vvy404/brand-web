"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

import CartCard from "@/components/public/CartCard"
import OrderSummary from "@/components/public/OrderSummary"
import ViewdList from "@/components/detail/ViewdList"
import Recommend from "@/components/detail/Recommend"

import { CartItemType, ProductType } from "@/lib/globalts"
import { getCartListData } from "@/apis/getCartList"
import { getViewedListData } from "@/apis/getViewedList"
import { getRecoListData } from "@/apis/getRecoList"
import { deleteCart } from "@/apis/addCart"

const Cart : React.FC = () => {

  const router = useRouter();
  const pathname = usePathname();
  const [ cartlist, setCartList ] = useState<CartItemType[]>([]);
  const [ viewedlist, setViewedList ] = useState<ProductType[]>([]);
  const [ recommendlist, setRecoList ] = useState<ProductType[]>([]);
  const [cartSum, setCartSum ] = useState<number>(0);


  const getCartList = async () => {
    const res = await getCartListData();
    if (res && !res.code && res.data) {
      setCartList(res.data.list);
      let sum = 0;
      res.data.list.forEach(i => {
        const val = i.price * i.quantity;
        console.log('val', val)
        sum += val;
      })
      setCartSum(sum);
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

  const handleDeleteCartItem = async (id: number) => {
    console.log('handleDeleteCartItem', id)
    const res = await deleteCart(id);
    if (res && !res.code) {
      console.log('success');
      window.location.reload();
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
                    <CartCard list={cartlist} handleDeleteCartItem={handleDeleteCartItem}></CartCard>
                </div>
                <div className="w-[36%]">
                    <OrderSummary sum={cartSum}></OrderSummary>
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