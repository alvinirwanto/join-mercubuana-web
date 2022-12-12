'use client';

import React from 'react'
import TitleSection from '../components/TitleSection'

import Image from 'next/image';
import { Data } from '../data/DataTestimonial'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";

const Review = () => {
    return (
        <div className='primary-padding my-[5rem]'>
            <TitleSection
                subtitle='Apa Kata Mereka?'
                title='Simak ulasan para mahasiswa dan alumni Universitas Mercu Buana'
            />

            <Swiper className='max-w-[1100px] my-[5rem]'
                loop={true}
                loopFillGroupWithBlank={true}
                slidesPerView={2}
                spaceBetween={20}
                grabCursor={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Autoplay, Pagination]}
            >
                {
                    Data.map((item) => {
                        return (
                            <SwiperSlide className='' key={item.id}>
                                <div className='border-[1px] border-gray-200 rounded-sm flex flex-col justify-start m-4 md:m-0 xl:m-2 gap-2 px-[3rem] py-[3rem] h-[45vh] md:h-[35vh]'>
                                    <Image src={item.image} alt="profile-img" className='h-[4rem] w-[4rem] rounded-full object-cover mb-4' />
                                    <h3 className='font-semibold'>{item.title}</h3>
                                    <p className='text-gray-500'>{item.description}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Review