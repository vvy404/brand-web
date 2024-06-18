const sizeRange = [1, 2, 3, 4, 5, 6];
export default function ProductInfos() {
    return (
        <div className="w-[34%] ml-[14%] mt-8text-[#1b1b1b]">
            <div className="text-lg">CURVED-HEM SHORT-SLEEVED DENIM SHIRT</div>
            <div>1000,00 SEK</div>
            <div className="text-[#325D7B] text-xs pt-3 pb-4">ORGANIC COTTON</div>
            <div className="text-xs">COLOUR</div>
            <select>
                <option>
                        {/* <div className="w-10 h-10 inline-block" style={{ background: 'red' }}> 11</div> */}
                        BEIGE
                </option>
                <option>
                        {/* <div className="w-10 h-10" style={{ background: 'red' }}></div> */}
                        DARK
                </option>
            </select>
            <div className="text-xs mt-4 mb-3">EU SIZE</div>
            <div className="flex flex-col">
                {
                    sizeRange.map((size, index) => {
                        return (
                            <div key={index} className="my-1">
                                <button className="w-9 h-9 border bg-black text-white">{size}</button>
                                <span className="px-4">total: </span>
                                <input type="number" step="1" className="border w-20 h-6" />
                            </div>
                        )
                    })
                }
            </div>
            <button className="w-full py-4 text-sm bg-black text-white mt-12">ADD TO BAG</button>
        </div>
    )
}