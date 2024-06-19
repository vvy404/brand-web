import Image from "next/image"

export default function CartItem() {
    return (
        <div>
            <div className="flex h-40">
                <div>
                    <Image src="/a.jpeg" alt="pic" width={100} height={100} className="w-[84px] mr-4" />
                </div>
                <div>
                    <div>CURVED-HEM SHORT-SLEEVED DENIM SHIRT</div>
                    <div>1000 SEK</div>
                    <div>ORGANIC COTTON</div>
                    <div className="flex flex-col">
                        <div>
                            <div>Size</div>
                            <div>Color</div>
                            <div>Quantity</div>
                        </div>
                        <div>
                            <div>XS</div>
                            <div>White</div>
                            <input type="number" value={1} />
                        </div>
                    </div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    <div>1000 SEK</div>
                </div>
            </div>
        </div>
    )
}