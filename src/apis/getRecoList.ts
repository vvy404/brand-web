import { ProductType, ProductImgType, ProductColorType, ProductSizeType, AjaxResType } from "@/lib/globalts";

interface GetRecommendArgus {
  productid: number;
}

interface RecommendListResType {
  recommendlist: ProductType[],
}

interface Error {
  errorcode: number;
}

export const getRecoListData = async ({ 
  productid = 999
}: GetRecommendArgus) : Promise<AjaxResType<RecommendListResType, Error>> => {
  const res = await fetch(`http://localhost:3000/api/getRecomendData?productid=${productid}`);
  const repo = await res.json()

  return repo;
}