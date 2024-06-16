import OPage from "@/components/main/OPage"
import MidPage from "@/components/main/MidPage"
import LastVideo from "@/components/main/LastVideo"
import SelectorBtns from "@/components/main/SelectorBtns"
import Footer from "@/components/main/Footer"

import './page.css'
export default function Index() {
    return (
        <div className="o-page bg-white">
            <OPage></OPage>
            <MidPage></MidPage>
            <LastVideo></LastVideo>
            <SelectorBtns></SelectorBtns>
            <Footer></Footer>
        </div>
    )
}   