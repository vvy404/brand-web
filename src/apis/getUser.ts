import { UserType, AjaxResType, DefaultErrorType } from "@/lib/globalts";

interface InfoResType {
  info: UserType,
}

interface Error {
  errorcode: number;
}

export const getUserInfo = async () : Promise<AjaxResType<InfoResType, Error>> => {
  const res = await fetch(`/api/getUserInfo`);
  const repo = await res.json()

  return repo;
}