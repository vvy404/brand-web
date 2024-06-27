import { AjaxResType, DefaultErrorType } from "@/lib/globalts";

interface CurrentUserInfoType {
  token: string;
  userid: number;
}

export const getCurrentUserInfo = async () : Promise<AjaxResType<CurrentUserInfoType, DefaultErrorType>> => {
  const res = await fetch("/api/auth/getcurrentuser");
  const repo = await res.json()

  return repo;
}