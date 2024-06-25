"use client"

import { useState, useEffect } from "react"
import {usePathname, useSearchParams} from 'next/navigation'

import SearchContent from "@/components/public/SearchContent"
import Filter from "@/components/public/Filter"
import ProductList from "@/components/public/ProductList"
import { getProductListData } from "@/apis/getProductList"

import { ProductInfoType } from "@/lib/globalts"

const Products: React.FC = () => {
  const [productlist, setProductList] = useState<ProductInfoType[]>([]);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const type = searchParams?.get('type') || "1";

  console.log('pathnamepathname', pathname, searchParams?.get('type'));

  const getProductList = async () => {
    const res = await getProductListData({ type });
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
      <ProductList list={productlist} type={type}></ProductList>
    </div>
  )
}

export default Products;