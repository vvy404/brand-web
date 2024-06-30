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
  const [ currentPageIndex, setCurrentPageIndex ] = useState<number>(0);
  const [ pageTotal, setPageTotal ] = useState<number>(1);
  const PAGENUM = 2;

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const type = searchParams?.get('type') || "1";
  console.log('pathnamepathname', pathname, searchParams?.get('type'));

  const getProductList = async (pageindex: number) => {
    console.log('currentPageIndex',currentPageIndex)
    const res = await getProductListData({ type, currentPageIndex: pageindex, pageNum: PAGENUM });
    if (res && !res.code && res.data) {
      const { list, currentPageIndex, pageTotal } = res.data;
      setProductList(list);
      setCurrentPageIndex(currentPageIndex);
      console.log('pageTotal', pageTotal)
      setPageTotal(pageTotal);
    } else {
      window.alert('worng')
    }
  }

  const handlePageIndexChange = (index: number) => {
    console.log('handlePageIndexChange', index);
    setCurrentPageIndex(index);
    setTimeout(() => {
      getProductList(index);

    })
  }
  useEffect(() => {
    getProductList(currentPageIndex);
  }, [type])
  return (
    <div className="mt-28 mx-10">
      <SearchContent></SearchContent>
      <Filter></Filter>
      <ProductList
        list={productlist}
        type={type}
        pageTotal={pageTotal}
        currentPageIndex={currentPageIndex}
        handlePageIndexChange={handlePageIndexChange}
      ></ProductList>
    </div>
  )
}

export default Products;