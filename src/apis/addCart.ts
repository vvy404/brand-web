import { DefaultErrorType, SizeInfoType, ProductColorType, ProductSizeType, AjaxResType, ProductType } from "@/lib/globalts";

interface AddCartRes {
  product: ProductType;
}

export const addCart = async (param: string): Promise<AjaxResType<AddCartRes, DefaultErrorType>> => {
  const res = await fetch('/api/addCart', {
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
    return {
      code: 1,
      message: 'worng',
      data: null,
    }

  }
}

export const deleteCart = async (param: number):Promise<AjaxResType<AddCartRes, DefaultErrorType>> => {

  const res = await fetch('/api/deleteCart', {
    method: 'POST',
    mode: "no-cors",
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: String(param),
  });

  console.log('res', res);

  try {
    const repo = await res.json()
    return repo;

  } catch (error) {
    console.log('error', error)
    return {
      code: 1,
      message: 'worng',
      data: null,
    }

  }
}

