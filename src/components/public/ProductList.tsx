import Image from "next/image"
import productArr from "./productarr"

export default function ProductList() {
    return (
        <div className="grid grid-cols-4 gap-6">
            {
                productArr.map(plist => {
                    return (
                        <div className="column col-span-1">
                            {plist.map(i => {
                                return (
                                    <div className="flex flex-col relative mb-14">
                                        <div className="image-group w-full relative">
                                            {i.newFlag ? (<div className="absolute top-[10px] left-[-10px] text-xs px-4 py-1 bg-black text-white">NEW</div>) : ("")}
                                            <Image src={i.imageSrc} alt="pic" width={100} height={150} className="w-full" />
                                            <div className="absolute bottom-4 right-4 w-9 h-9 bg-white rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill={`${i.like ? 'black' : 'none'}`} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 absolute top-[6px] left-[6px] rounded-full">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="text-[11px] mt-4">{i.title}</div>
                                        <div className="text-[11px] mt-[2px]">{i.price} SEK</div>
                                        <div className="flex mt-1">
                                            {i.color.map(color => {
                                                return (
                                                    <div className="w-3 h-3 mr-1" style={{ background: color }}></div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}

                            <div className="h-1 mt-16 pb-2 border-t border-solid border-gray-200"></div>

                        </div>
                    )
                })
            }


        </div>
    )
}