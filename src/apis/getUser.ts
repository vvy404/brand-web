import { UserType, AjaxResType, DefaultErrorType } from "@/lib/globalts";

interface InfoResType {
  info: UserType,
}

interface Error {
  errorcode: number;
}

export const getUserInfo = async () : Promise<AjaxResType<InfoResType, Error>> => {
  const res = await fetch(`http://localhost:3000/api/getUserInfo`);
  const repo = await res.json()

  return repo;
}