import OPage from "@/components/main/OPage"
import MidPage from "@/components/main/MidPage"
import LastVideo from "@/components/main/LastVideo"

import './page.css'
export default function Index() {
    return (
        <div className="o-page bg-white">
            <OPage></OPage>
            <MidPage></MidPage>
            <LastVideo></LastVideo>
        </div>
    )
}   