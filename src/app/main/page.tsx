"use client";
import { useState, useEffect } from 'react';

import OPage from "@/components/main/OPage"
import MidPage from "@/components/main/MidPage"
import LastVideo from "@/components/main/LastVideo"
import SelectorBtns from "@/components/main/SelectorBtns"
import Footer from "@/components/public/Footer"
import LoginComp from "@/components/login/LoginComp"

import { getData } from "@/apis/main";

import './page.css'
export default function Index() {
    const [ isMaskVisable, setMaskVisible ] = useState(true);
    const [ opageList, setOpageList ] = useState([]);
    const [ midpageList, setMidpageList ] = useState([]);

    useEffect(() => {
      const getDataFunc = async () => {
        const res = await getData();
        console.log('ress------', res);
        if (res && res.code===0 && res.data) {
          setOpageList(res.data.mainpageconf);
          setMidpageList(res.data.midpageconf);
        }
      }
      getDataFunc();
    }, []);

    return (
        <div className={`${isMaskVisable ? "overflow-body": ""} "o-page bg-white"`}>
            <OPage list={opageList}></OPage>
            <MidPage list={midpageList}></MidPage>
            <LastVideo></LastVideo>
            <SelectorBtns></SelectorBtns>
            <Footer></Footer>
            <div id="__next">
                <LoginComp></LoginComp>
            </div>
        </div>
    )
}       