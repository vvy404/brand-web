import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function OPage() {
    return (
        <div className={`${inter.className} "OPage-Component px-8 py-12"`}>
            <div className="flex">
                <div className="relative image-group flex-auto w-full">
                    <Image
                        className="flex-auto w-full"
                        src="/a.jpeg"
                        alt="new-product"
                        width={100}
                        height={120}
                    />
                    <button className="absolute left-[50%] top-[70%] translate-x-[-50%] text-center px-2 py-1 w-48 h-12 bg-white text-xs">
                        WOMEN's NEW ARRIVIALS
                    </button>
                </div>
                <div className="relative image-group flex-auto w-full">
                    <Image
                        className="flex-auto w-full"
                        src="/b.jpeg"
                        alt="new-product"
                        width={100}
                        height={120}
                    />
                    <button className="absolute left-[50%] top-[70%] translate-x-[-50%] text-center px-2 py-1 w-48 h-12 bg-white text-xs">
                        MEN's NEW ARRIVIALS
                    </button>
                </div>
            </div>
        </div>
    )
}