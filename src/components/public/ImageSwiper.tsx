"use client";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import 'swiper/css/scrollbar';

import { ProductType, ProductImgType, ProductColorType, ProductSizeType, ProductInfoType } from "@/lib/globalts"

interface ImageSwiperProps {
  list: ProductType[];
}

const images = [
    "/a.jpeg", "/b.jpeg", "/a.jpeg", "/b.jpeg", "/a.jpeg", "/b.jpeg", "/a.jpeg", "/b.jpeg", "/a.jpeg", "/b.jpeg",
];

const ImageSwiper : React.FC<ImageSwiperProps> = ({list=[]}) => {
    return (
        <div className='image-swiper-comp'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    list.map((img) => {
                        return (
                            <SwiperSlide>
                                <Image key={img.id} src={img.imgSrc} alt="img" width={100} height={100} className='w-full' />
                                <div className='text-[11px] text-gray-600 mt-2'>{img.title}</div>
                                <div className='text-[11px] text-gray-600'>${img.price} SEK</div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default ImageSwiper;