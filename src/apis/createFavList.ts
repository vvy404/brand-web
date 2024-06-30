import { DefaultErrorType, ProductImgType, ProductColorType, ProductSizeType, AjaxResType, ProductType } from "@/lib/globalts";

interface createFavListRes {
  product: ProductType;
}

const createFavList = async (param: string): Promise<AjaxResType<createFavListRes, DefaultErrorType>> => {
  const res = await fetch('/api/createFavList', {
    method: 'POST',
    mode: "no-cors",
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: param,
  });

  console.log('res', res);

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

export default createFavList