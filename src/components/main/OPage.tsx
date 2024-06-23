import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

import { MainProductType } from "@/lib/globalts";

const inter = Inter({ subsets: ["latin"] });

type OPageProps = {
  list: MainProductType[],
}

export default function OPage({
  list
}: OPageProps
) {
  return (
    <div className={`${inter.className} OPage-Component px-8 py-24`}>
      <div className="flex">
        {
          list.map(img => {
            return (
              <div key={img.id} className="relative image-group flex-auto w-full">
                <Image
                  className="flex-auto w-full"
                  src={img.imgSrc}
                  alt="new-product"
                  width={100}
                  height={120}
                />
                <Link href={img.link || ""} className="absolute left-[50%] top-[70%] translate-x-[-50%] text-center px-2 py-1 w-48 h-12 bg-white text-xs leading-[40px]">
                  {img.btnText}
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}