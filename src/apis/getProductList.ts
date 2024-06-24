import { ProductType, DefaultErrorType, ProductColorType, ProductInfoType, AjaxResType } from "@/lib/globalts";

interface GetProductArgus {
  type?: string;
}

interface ProductListResType {
  list: ProductInfoType[],
}


export const getProductListData = async ({ 
  type = "full-product"
}: GetProductArgus) : Promise<AjaxResType<ProductListResType, DefaultErrorType>> => {
  const res = await fetch(`http://localhost:3000/api/getfullInfoList?type=${type}`);
  const repo = await res.json()

  return repo;
}