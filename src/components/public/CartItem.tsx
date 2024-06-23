import Image from "next/image"
import { CartItemType } from "@/lib/globalts"

interface CartItemProps {
  cartitem: CartItemType
}

const CartItem : React.FC<CartItemProps> = ({cartitem}) => {
    return (
        <div className="flex justify-between">
            <div className="flex mt-3 mb-7">
                <div>
                    <Image src={cartitem.imgSrc} alt="pic" width={100} height={100} className="w-[84px] mr-4" />
                </div>
                <div className="text-xs">
                    <div>{cartitem.title}</div>
                    <div className="pt-1">{cartitem.price} SEK</div>
                    <div className="pt-2 pb-3 text-[#325D7B]">{cartitem.madeof}</div>
                    <div className="flex leading-[18px]">
                        <div>
                            <div>Size</div>
                            <div>Color</div>
                            <div>Quantity</div>
                        </div>
                        <div className="px-4">
                            <div>{cartitem.size}</div>
                            <div>{cartitem.color}</div>
                            <input type="number" value={cartitem.quantity} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between items-end py-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <div className="text-xs">1000 SEK</div>
            </div>
        </div>
    )
}
export default CartItem;