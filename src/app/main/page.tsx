"use client";
import { useState, useEffect } from 'react';

import OPage from "@/components/main/OPage"
import MidPage from "@/components/main/MidPage"
import LastVideo from "@/components/main/LastVideo"
import SelectorBtns from "@/components/main/SelectorBtns"
import { getProducTypetListData } from "@/apis/getProductTypeList"
import {useRouter, usePathname, useSearchParams} from 'next/navigation'

import { getData } from "@/apis/main";
import { MainProductType, MidProductType, ProductFullCatogoryType } from '@/lib/globalts';

import './page.css'

const Index : React.FC = () => {
    const [ isMaskVisable, setMaskVisible ] = useState(true);
    const [ opageList, setOpageList ] = useState<MainProductType[]>([]);
    const [ midpageList, setMidpageList ] = useState<MidProductType[]>([]);
    const [ typelist, setTypeList ] = useState<ProductFullCatogoryType[]>([]);
    const router = useRouter();

    const getDataFunc = async () => {
      const res = await getData();
      console.log('ress------', res);
      if (res && res.code===0 && res.data) {
        setOpageList(res.data.mainpageconf);
        setMidpageList(res.data.midpageconf);
      }
    }

  const getTypeList = async () => {
    const res = await getProducTypetListData();
    if (res && !res.code && res.data) {
      const list:any = [];
      res.data.list.forEach(bigType => {
        if(bigType.childtype && bigType.childtype.length) {
          bigType.childtype.forEach(type => {
            if(type.mainRecommend) {
              const typeitem = {
                ...bigType,
                bigTypeId: bigType.id,
                id: type.id,
                childtype: type.type,
                childtypename: type.typename,
                typename: bigType.typename + ' ' + type.typename,
              }
              list.push(typeitem);
            }
          })
        } else {
          const typeitem = {
            ...bigType,
          }
          list.push(typeitem);
        }
      })
      setTypeList(list);
      console.log(res.data.list);
    }
  }

  const handleItemClick = (typeid: number) => {
    router.push(`/products?type=${typeid}`);
    
  }

    useEffect(() => {
      getDataFunc();
      getTypeList();
    }, []);

    return (
        <div className={`o-page bg-white`}>
            <OPage list={opageList}></OPage>
            <MidPage list={midpageList}></MidPage>
            <LastVideo></LastVideo>
            <SelectorBtns
             list={typelist}
             handleItemClick={handleItemClick}
             ></SelectorBtns>
            {/* <div id="__next">
                <LoginComp></LoginComp>
            </div> */}
            
        </div>
    )
}       
export default Index