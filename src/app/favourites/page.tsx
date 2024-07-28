"use client"

import { useState, useEffect } from "react";
import FavList from "@/components/favourites/FavList";
import { getFavListData } from "@/apis/favouriteList";
import { ProductType, FavProductFullType, CartItemType } from "@/lib/globalts";
import deleteFavList from "@/apis/deleteFavList";
import { addCart } from "@/apis/addCart";
type SizeInfoType = Omit<CartItemType, "id" | "userid">

const Favourites: React.FC = () => {
  const [list, setList] = useState<FavProductFullType[]>([]);
  const getData = async () => {
    const res = await getFavListData();
    if (res && !res.code && res.data) {
      setList(res.data.list);
      console.log('list', res)
    }
  }
  const handleDeleteItem = async (item: FavProductFullType) => {
    console.log('handleDeleteItem', item);
    const res = await deleteFavList(String(item.productid));
    if (res && !res.code) {
      getData();
    }
  }
  const handleAddToCart = async(params: SizeInfoType) => {
    console.log('add to cart', JSON.stringify([params]));
    const res = await addCart(JSON.stringify([params]));
    if (res && !res.code) {
      window.location.reload();
      console.log('add cart done');
    }
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div className="mt-28 mx-10">
      <FavList list={list} handleDeleteItem={handleDeleteItem} handleAddToCart={handleAddToCart}></FavList>
    </div>
  )
}

export default Favourites