import Image from "next/image";

const images = [
    "/a.jpeg", "/b.jpeg", "/a.jpeg", "/b.jpeg", "/a.jpeg", "/b.jpeg", "/a.jpeg", "/b.jpeg", "/a.jpeg", "/b.jpeg",
];
export default function ImageDetail() {
    return (
        <div className="flex mb-10">
            <div className="image-small-list max-h-[42rem] overflow-y-scroll w-16">
                {images.map((img, idx) => {
                    return (
                        <div key={idx} className="my-3">
                            <Image src={img} alt="img" width={100} height={160} />
                        </div>
                    )
                })}
            </div>
            <div className="relative w-[24rem] mx-8">
                <div className="bg-white absolute top-4 right-4 w-8 h-8 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill={`${false ? 'black' : 'none'}`} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 absolute top-[5px] right-[4px] rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
                <div>
                    <Image src="/a.jpeg" alt="pic" width={100} height={160} className="w-full" />
                </div>
            </div>
        </div>
    )
}