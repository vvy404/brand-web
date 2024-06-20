export default function OrderSummary() {
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
                    <div>Order value</div>
                    <div>Delivery</div>
                </div>
            </div>
            <div className="h-1 mt-1 pb-2 border-t border-solid border-gray-200"></div>
            <div className="flex justify-between">
                <div>TOTAL</div>
                <div>1111 SEK</div>
            </div>
            <button className="mt-12 w-full py-4 bg-black text-white text-sm">PROCEED TO CHECKOUT</button>
        </div>
    )
}