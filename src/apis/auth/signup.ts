import { DefaultErrorType, ProductImgType, ProductColorType, ProductSizeType, AjaxResType } from "@/lib/globalts";

interface SignUpUserProps {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

interface SinUpUserRes {
  token: string;
}

const signUpUser = async (param: string):Promise<AjaxResType<SinUpUserRes, DefaultErrorType>> => {
  const res = await fetch('/api/auth/signup', {
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

    return {
      code: 1,
      message: 'worng',
      data: null,
    }
  }

  
}

export default signUpUser