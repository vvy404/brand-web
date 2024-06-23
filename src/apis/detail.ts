import { ProductType, ProductImgType, ProductColorType, ProductSizeType, AjaxResType } from "@/lib/globalts";

interface GetDetailArgus {
  productid: number;
}

type GetDetailRes = {
  product: ProductType,
  productimgs: ProductImgType[],
  productcolors: ProductColorType[],
  productsizes: ProductSizeType[],
}

type Error = {
  errorcode: number;
}

export const getData = async ({ productid=999 } : GetDetailArgus): Promise<AjaxResType<GetDetailRes, Error>> => {
  const res = await fetch(`http://localhost:3000/api/getDetailData?productid=${productid}`);
  const repo = await res.json();
  
  return repo;
}