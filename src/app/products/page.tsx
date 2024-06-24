"use client"

import { useState, useEffect } from "react"

import SearchContent from "@/components/public/SearchContent"
import Filter from "@/components/public/Filter"
import ProductList from "@/components/public/ProductList"
import { getProductListData } from "@/apis/getProductList"

import { ProductInfoType } from "@/lib/globalts"

const Products: React.FC = () => {
  const [productlist, setProductList] = useState<ProductInfoType[]>([]);
  const getProductList = async () => {
    const res = await getProductListData({ type: "test" });
    if (res && !res.code && res.data) {
      setProductList(res.data.list);
    }
  }
  useEffect(() => {
    getProductList();
  }, [])
  return (
    <div className="mt-28 mx-10">
      <SearchContent></SearchContent>
      <Filter></Filter>
      <ProductList list={productlist}></ProductList>
    </div>
  )
}

export default Products;