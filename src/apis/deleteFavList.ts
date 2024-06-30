import { DefaultErrorType, ProductImgType, ProductColorType, ProductSizeType, AjaxResType, ProductType } from "@/lib/globalts";

interface deleteFavListRes {
  product: ProductType;
}

const deleteFavList = async (id: string): Promise<AjaxResType<deleteFavListRes, DefaultErrorType>> => {
  const res = await fetch('/api/deleteFavList', {
    method: 'POST',
    mode: "no-cors",
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: id,
  });

  try {
    const repo = await res.json()
    return repo;

  } catch (error) {
    console.log('error', error)


  }
  return {
    code: 1,
    message: 'worng',
    data: null,
  }

}

export default deleteFavList