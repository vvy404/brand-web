import Image from "next/image"
import productArr from "./productarr"

export default function FavList() {
    return (
        <div>
            <div className="flex flex-col items-center mb-16">
                <div className="text-3xl">My favourites</div>
                <div className="text-gray-500 pt-4">{productArr.length} ITEMS</div>
            </div>
            <div className="grid grid-cols-4 gap-6">
                {
                    productArr.map((plist,idx) => {
                        return (
                            <div key={idx} className="column col-span-1">
                                {plist.map(i => {
                                    return (
                                        <div className="flex flex-col relative mb-14 text-xs">
                                            <div className="image-group w-full relative">
                                                <Image src={i.imageSrc} alt="pic" width={100} height={150} className="w-full" />

                                            </div>
                                            <div className="text-[11px] mt-4">{i.title}</div>
                                            <div className="text-[11px] mt-[2px]">{i.price} SEK</div>
                                            <div className="flex mt-1">
                                                <div>Colour {i.color}</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div>size:</div>
                                                <select className="">
                                                    <option>xs</option>
                                                    <option>s</option>
                                                    <option>m</option>
                                                </select>
                                            </div>
                                            <button className="bg-black text-white py-4 mt-2">ADD TO CART</button>
                                            <div className="absolute top-2 right-4 w-4 h-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })
                }

            </div>
            {/* <div className="h-1 mt-16 pb-2 border-t border-solid border-gray-200"></div> */}

        </div>
    )
}