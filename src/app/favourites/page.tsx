"use client"

import { useState, useEffect } from "react";
import FavList from "@/components/favourites/FavList";
import { getFavListData } from "@/apis/favouriteList";
import { ProductType } from "@/lib/globalts";

const Favourites: React.FC = () => {
  const [list, setList] = useState<ProductType[]>([]);
  const getData = async () => {
    const res = await getFavListData();
    if (res && !res.code && res.data) {
      setList(res.data.list);
      console.log('list', res)
    }
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div className="mt-28 mx-10">
      <FavList list={list}></FavList>
    </div>
  )
}

export default Favourites