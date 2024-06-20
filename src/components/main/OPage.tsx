import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type ImgDataItem = {
  id: number;
  imgSrc: string;
  btnTxt: string;
  btnLink: string;
}
type ImgDataList = ImgDataItem[];

const _imgData: ImgDataList = [
  {
    id: 1,
    imgSrc: '/a.jpeg',
    btnTxt: "WOMEN's NEW ARRIVIALS",
    btnLink: 'http://localhost:3000/main'
  },
  {
    id: 2,
    imgSrc: '/b.jpeg',
    btnTxt: "MEN's NEW ARRIVIALS",
    btnLink: 'http://localhost:3000/main'
  }
]

export default function OPage() {
  return (
    <div className={`${inter.className} OPage-Component px-8 py-24`}>
      <div className="flex">
        {
          _imgData.map(img => {
            return (
              <div key={img.id} className="relative image-group flex-auto w-full">
                <Image
                  className="flex-auto w-full"
                  src={img.imgSrc}
                  alt="new-product"
                  width={100}
                  height={120}
                />
                <button className="absolute left-[50%] top-[70%] translate-x-[-50%] text-center px-2 py-1 w-48 h-12 bg-white text-xs">
                  {img.btnTxt}
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}