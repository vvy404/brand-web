import { DefaultErrorType, ProductImgType, ProductColorType, ProductSizeType, AjaxResType } from "@/lib/globalts";

interface createProductRes {
  productid: number;
}

const createProduct = async (param: string):Promise<AjaxResType<createProductRes, DefaultErrorType>> => {
  const res = await fetch('/api/root/create', {
    method: 'POST',
    mode: "no-cors",
    headers: { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*' 
    },
    body:param,
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

export default createProduct