import { Inter } from "next/font/google";

import Image from 'next/image';
const inter = Inter({ subsets: ["latin"] });

export default function MidPage() {
    return (
        <div className={`${inter.className} "midpage-comp mt-12"`}>
            <div className="text-center text-2xl w-full h-12 mt-16 mb-3">SUMMER 2024</div>
            <div className="image-group flex items-center px-28">
                <div className="image-item flex-auto text-left">
                    <Image
                        className="w-[90%] ml-[5%]"
                        src="/a.jpeg"
                        alt="second image area"
                        width={100}
                        height={120}
                    />
                    <div className="text-sm leading-loose pl-6 pt-2">WOMEN'S HOLIDAY SHOP</div>
                    <a className="text-[12px] underline pl-6" href="http://localhost:3000/main">shop now</a>
                </div>
                <div className="image-item flex-auto text-left">
                    <Image
                        className="w-[90%] ml-[5%]"
                        src="/b.jpeg"
                        alt="second image area"
                        width={100}
                        height={120}
                    />
                    <div className="text-sm leading-loose pl-6 pt-2">WOMEN'S HOLIDAY SHOP</div>
                    <a className="text-[12px] underline pl-6" href="http://localhost:3000/main">shop now</a>
                </div>
            </div>
            <div className="h-1 mt-20 mx-8 pb-2 border-t border-solid border-gray-200"></div>
        </div>
    )
}