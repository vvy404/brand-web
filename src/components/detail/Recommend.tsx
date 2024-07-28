import ImageSwiper from "../public/ImageSwiper"
import { ProductType, ProductImgType, ProductColorType, ProductSizeType, ProductInfoType } from "@/lib/globalts"

interface RecommendProps {
  list: ProductType[];
}

const Recommend: React.FC<RecommendProps> = ({ list }) => {
  return (
    <div className="mb-14">
      <div className="text-xs text-gray-500 pb-3">You may also like…</div>
      {
        list && list.length ? (
          <ImageSwiper list={list}></ImageSwiper>
        ) : ""
      }
    </div>
  )
}

export default Recommend;