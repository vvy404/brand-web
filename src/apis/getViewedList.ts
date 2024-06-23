import { ProductType, DefaultErrorType, ProductColorType, ProductSizeType, AjaxResType } from "@/lib/globalts";

interface GetViewedArgus {
  type?: string;
}

interface ViewedListResType {
  list: ProductType[],
}


export const getViewedListData = async ({ 
  type = "lastviewed"
}: GetViewedArgus) : Promise<AjaxResType<ViewedListResType, DefaultErrorType>> => {
  const res = await fetch(`http://localhost:3000/api/getProductList?type=${type}`);
  const repo = await res.json()

  return repo;
}