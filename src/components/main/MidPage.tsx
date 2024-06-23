import { Inter } from "next/font/google";
import Image from 'next/image';
import { MidProductType } from "@/lib/globalts";

const inter = Inter({ subsets: ["latin"] });

type MidPageProps = {
  list: MidProductType[],
}


export default function MidPage({
  list
}: MidPageProps) {
  return (
    <div className={`${inter.className} "midpage-comp mt-12"`}>
      <div className="text-center text-2xl w-full h-12 mt-16 mb-3">SUMMER 2024</div>
      <div className="image-group flex items-center px-28">
        {
          list.map(img => {
            return (
              <div key={img.id} className="image-item flex-auto text-left">
                <Image
                  className="w-[90%] ml-[5%]"
                  src={img.imgSrc}
                  alt="second image area"
                  width={100}
                  height={120}
                />
                <div className="text-sm leading-loose pl-6 pt-2">{img.title}</div>
                <a className="text-[12px] underline pl-6" href={img.link}>shop now</a>
              </div>
            )
          })
        }
      </div>
      <div className="h-1 mt-20 mx-8 pb-2 border-t border-solid border-gray-200"></div>
    </div>
  )
}