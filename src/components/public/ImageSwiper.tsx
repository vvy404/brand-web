"use client";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import 'swiper/css/scrollbar';

const images = [
    "/a.jpeg", "/b.jpeg", "/a.jpeg", "/b.jpeg", "/a.jpeg", "/b.jpeg", "/a.jpeg", "/b.jpeg", "/a.jpeg", "/b.jpeg",
];

export default function ImageSwiper() {
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
                    images.map((img, idx) => {
                        return (
                            <SwiperSlide>
                                <Image src={img} alt="img" width={100} height={100} className='w-full' />
                                <div className='text-[11px] text-gray-600 mt-2'>CURVED-HEM SHORT-SLEEVED DENIM SHIRT</div>
                                <div className='text-[11px] text-gray-600'>1000 SEK</div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}