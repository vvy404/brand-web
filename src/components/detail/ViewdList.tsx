import ImageSwiper from "../public/ImageSwiper"

export default function ViewdList() {
    return (
        <div>
            <div className="text-xs text-gray-500 pb-3">Recently viewed</div>
            <ImageSwiper></ImageSwiper>
        </div>
    )
}