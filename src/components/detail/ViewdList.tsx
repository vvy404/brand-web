import ImageSwiper from "@/components/public/ImageSwiper"
import { ProductType } from "@/lib/globalts"

interface ViewedListProps {
  list: ProductType[];
}
const ViewdList : React.FC<ViewedListProps> = ({list}) => {
    return (
        <div>
            <div className="text-xs text-gray-500 pb-3">Recently viewed</div>
            <ImageSwiper list={list}></ImageSwiper>
        </div>
    )
}

export default ViewdList;