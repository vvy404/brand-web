import { DefaultErrorType, ProductImgType, ProductColorType, ProductSizeType, AjaxResType } from "@/lib/globalts";

interface SignInUserRes {
  token: string;
  userid: number;
}

const signInUser = async (param: string):Promise<AjaxResType<SignInUserRes, DefaultErrorType>> => {
  const res = await fetch('/api/auth/signin', {
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

export default signInUser