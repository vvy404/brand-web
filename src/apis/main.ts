import { MainProductType, MidProductType, AjaxResType, DefaultErrorType } from "@/lib/globalts";

interface MainPageResType {
  mainpageconf: MainProductType[],
  midpageconf: MidProductType[],
}

export const getData = async () : Promise<AjaxResType<MainPageResType, DefaultErrorType>> => {
  const res = await fetch('http://localhost:3000/api/getMainPageData');
  const repo = await res.json()

  return repo;
}