import ImageSwiper from "../public/ImageSwiper"

export default function Recommend() {
    return (
        <div className="mb-14">
            <div className="text-xs text-gray-500 pb-3">You may also like…</div>
            <ImageSwiper></ImageSwiper>
        </div>
    )
}