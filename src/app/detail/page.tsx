import ImageDetail from "@/components/detail/ImageDetail"
import ProductInfos from "@/components/detail/ProductInfos"
import Recommend from "@/components/detail/Recommend"
import OtherReco from "@/components/detail/OtherReco"

export default function Detail() {
    return (
        <div className="mt-28 mx-8 ">
            <div className="flex">
                <ImageDetail></ImageDetail>
                <ProductInfos></ProductInfos>
            </div>
            <Recommend></Recommend>
            <OtherReco></OtherReco>
        </div>
    )
}