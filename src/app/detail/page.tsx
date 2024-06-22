"use client"
import { useState, useEffect } from "react"

import ImageDetail from "@/components/detail/ImageDetail"
import ProductInfos from "@/components/detail/ProductInfos"
import Recommend from "@/components/detail/Recommend"
import OtherReco from "@/components/detail/OtherReco"

import { getData } from "@/apis/detail";
import { log } from "console"

type ProductImg = {
  id: string;
  imgSrc: string;
  ismainpage: boolean;
} | null;

type ProductColor = {
  id : number;
  color: string;
  availblenum: number;
}

type ProductSize = {
  id : number;
  size: string;
}

type Product = {
  id: number;
  imgSrc: string;
  title: string;
  type: number;
  isInStock: boolean;
  size: string;
  isLiked: boolean;
  isNew: boolean;
} | null;

export default function Detail() {
  const [ imageDetail, setImageDetail ] = useState([]);
  const [ productInfos, setProductInfos] = useState(null);
  const [ mainImg, setMainImg] = useState("");
  const [ isLike, setIsLike ] = useState(false);


  useEffect(() => {
    const getDataFunc = async () => {
      const res = await getData();
      if (res && res.code === 0 && res.data) {
        const product = res.data.product;
        const productimgs = res.data.productimgs;
        const productColor = res.data.productcolors;
        const productSize = res.data.productsizes;

        console.log('ress------product', res.data);
        setIsLike(product?.isLiked || false);
        const mainImg = (productimgs && productimgs.length) ? productimgs.filter((i: { ismainpage: boolean }) => i.ismainpage)[0]?.imgSrc : [];
        setMainImg(mainImg);
        const finalProductInfos = {...product, color: productColor, size: productSize};
        console.log('finalProductInfos', finalProductInfos)
        setProductInfos(finalProductInfos);
        setImageDetail(productimgs);
      }
    }
    getDataFunc();
  }, []);

  return (
    <div className="mt-28 mx-8 ">
      <div className="flex">
        <ImageDetail imgs={imageDetail} mainImg={mainImg} isLike={isLike}></ImageDetail>
        <ProductInfos info={productInfos}></ProductInfos>
      </div>
      <Recommend></Recommend>
      <OtherReco></OtherReco>
    </div>
  )
}