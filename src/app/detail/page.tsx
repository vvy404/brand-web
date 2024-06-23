"use client"
import { useState, useEffect } from "react"

import ImageDetail from "@/components/detail/ImageDetail"
import ProductInfos from "@/components/detail/ProductInfos"
import Recommend from "@/components/detail/Recommend"
import OtherReco from "@/components/detail/OtherReco"

import { getData } from "@/apis/detail";
import { getRecoListData } from "@/apis/getRecoList"
import { ProductType, ProductImgType, ProductColorType, ProductSizeType, ProductInfoType } from "@/lib/globalts"

interface DetailPageProps {
  productid: number;
}

interface DetailPageState {

}

const Detail: React.FC<DetailPageProps> = ({ productid = 1 }) => {
  const [ imageDetail, setImageDetail ] = useState<ProductImgType[]>([]);
  const [ productInfo, setProductInfos] = useState<ProductInfoType | null>(null);
  const [ mainImg, setMainImg] = useState("");
  const [ isLike, setIsLike ] = useState(false);
  const [ recoList, setRecoList ] = useState<ProductType[]>([]);

  const getRecoList = async () => {
    const res = await getRecoListData({
      productid: 1,
    });
    console.log('----list', res);
    if (res && !res.code && res.data) {
      setRecoList(res.data.recommendlist)
    }
  }
  const getDataFunc = async () => {
    const res = await getData({productid: productid});
    if (res && res.code === 0 && res.data) {
      const product = res.data.product;
      const productimgs = res.data.productimgs;
      const productColor = res.data.productcolors;
      const productSize = res.data.productsizes;

      console.log('ress------product', res.data);
      setIsLike(product?.isLiked || false);
      const mainImg = (productimgs && productimgs.length) ? productimgs.filter((i: { ismainpage: boolean }) => i.ismainpage)[0]?.imgSrc : "";
      setMainImg(mainImg);
      const finalProductInfos = {...product, color: productColor, size: productSize};
      console.log('finalProductInfos', finalProductInfos)
      setProductInfos(finalProductInfos);
      setImageDetail(productimgs);
    }
  }

  useEffect(() => {
    getDataFunc();
    getRecoList();
  }, []);

  return (
    <div className="mt-28 mx-8 ">
      <div className="flex">
        <ImageDetail imgs={imageDetail} mainImg={mainImg} isLike={isLike}></ImageDetail>
        <ProductInfos info={productInfo}></ProductInfos>
      </div>
      <Recommend list={recoList}></Recommend>
      <OtherReco></OtherReco>
    </div>
  )
}

export default Detail;