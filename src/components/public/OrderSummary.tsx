import { CartItemType } from "@/lib/globalts"
import React from "react"

interface OrderSummaryProps {
  sum: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({sum}) => {
    return (
        <div className="text-[#1b1b1b]">
            <div className="text-sm">ORDER SUMMARY</div>
            <div className="h-1 mt-1 pb-2 border-t border-solid border-gray-200"></div>
            <div className="flex justify-between text-sm leading-10">
                <div>
                    <div>Order value</div>
                    <div>Delivery</div>
                    <div>Others</div>
                </div>
                <div>
                    <div>{sum}</div>
                    <div>Delivery</div>
                    <div>0</div>
                </div>
            </div>
            <div className="h-1 mt-1 pb-2 border-t border-solid border-gray-200"></div>
            <div className="flex justify-between">
                <div>TOTAL</div>
                <div>{sum} SEK</div>
            </div>
            <button className="mt-12 w-full py-4 bg-black text-white text-sm">PROCEED TO CHECKOUT</button>
        </div>
    )
}

export default OrderSummary