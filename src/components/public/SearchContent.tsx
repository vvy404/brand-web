import Image from "next/image"
export default function SearchContent() {
    return (
        <div className="text-center mt-[30px] color-[#1b1b1b] mx-28 mb-2">
            <div className="text-2xl pb-[12px] ">Women's Trousers</div>
            <div className="text-[13px] pb-[12px] px-44">The COS ready-to-wear collection is underscored by a commitment to luxury design and unrivalled craftsmanship. Our contemporary women's trousers are</div>
            <div className="flex flex-wrap justify-center">
                <button className="search-content-btn search-btn-selected">All Trousers & Culottes</button>
                <button className="search-content-btn">All Trousers</button>
                <button className="search-content-btn">All Trousers & Culottes</button>
                <button className="search-content-btn">All Trousers & Culottes</button>
                <button className="search-content-btn">All Trousers & Culottes</button>
                <button className="search-content-btn">All Trousers & Culottes</button>
            </div>
            <div className="flex justify-between mt-12">
                <div className="w-full mr-28 flex flex-col items-start last:mr-0">
                    <Image src="/a.jpeg" alt="pic1" width={100} height={140} className="w-full" />
                    <div className="text-sm mt-[10px]">EXTRA WIDE-LEG DRAWSTRING DENIM TROUSERS</div>
                    <a href="http://localhost:3000/products" className="text-xs mt-[13px] decoration-black">shop now</a>
               </div>
               <div className="w-full mr-28 flex flex-col items-start last:mr-0">
                    <Image src="/b.jpeg" alt="pic2" width={100} height={140} className="w-full" />
                    <div className="text-sm mt-[10px]">EXTRA WIDE-LEG DRAWSTRING DENIM TROUSERS</div>
                    <a href="http://localhost:3000/products" className="text-xs mt-[13px] underline decoration-black">shop now</a>
               </div>
            </div>
            <div className="h-1 mt-16 pb-2 border-t border-solid border-gray-200"></div>
        </div>
    )
}