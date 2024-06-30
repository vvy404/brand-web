import { ProductType, DefaultErrorType, ProductColorType, ProductInfoType, AjaxResType } from "@/lib/globalts";

interface GetProductArgus {
  type?: string;
  currentPageIndex: number;
  pageNum: number;
}

interface ProductListResType {
  list: ProductInfoType[];
  currentPageIndex: number;
  pageTotal: number;
  pageNum: number;
}


export const getProductListData = async ({ 
  type = "full-product",
  currentPageIndex,
  pageNum,
}: GetProductArgus) : Promise<AjaxResType<ProductListResType, DefaultErrorType>> => {
  const res = await fetch(`/api/getfullInfoList?type=${type}&currentPageIndex=${currentPageIndex}&pageNum=${pageNum}`);
  const repo = await res.json()

  return repo;
}