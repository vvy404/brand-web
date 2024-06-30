import { DefaultErrorType, ProductImgType, ProductColorType, ProductSizeType, AjaxResType } from "@/lib/globalts";

interface LogoutUserRes {
}

const logoutUser = async ():Promise<AjaxResType<LogoutUserRes, DefaultErrorType>> => {
  const res = await fetch('/api/auth/logout', {
    method: 'GET',
    mode: "no-cors",
    headers: { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*' 
    },
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

export default logoutUser