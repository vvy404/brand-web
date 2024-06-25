"use client";
import { useState, useEffect } from 'react';

import OPage from "@/components/main/OPage"
import MidPage from "@/components/main/MidPage"
import LastVideo from "@/components/main/LastVideo"
import SelectorBtns from "@/components/main/SelectorBtns"
import LoginComp from "@/components/login/LoginComp"

import { getData } from "@/apis/main";
import { MainProductType, MidProductType } from '@/lib/globalts';

import './page.css'

const Index : React.FC = () => {
    const [ isMaskVisable, setMaskVisible ] = useState(true);
    const [ opageList, setOpageList ] = useState<MainProductType[]>([]);
    const [ midpageList, setMidpageList ] = useState<MidProductType[]>([]);

    const getDataFunc = async () => {
      const res = await getData();
      console.log('ress------', res);
      if (res && res.code===0 && res.data) {
        setOpageList(res.data.mainpageconf);
        setMidpageList(res.data.midpageconf);
      }
    }

    useEffect(() => {
      getDataFunc();
    }, []);

    return (
        <div className={`o-page bg-white`}>
            <OPage list={opageList}></OPage>
            <MidPage list={midpageList}></MidPage>
            <LastVideo></LastVideo>
            <SelectorBtns></SelectorBtns>
            {/* <div id="__next">
                <LoginComp></LoginComp>
            </div> */}
        </div>
    )
}       
export default Index