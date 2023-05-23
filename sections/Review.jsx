'use client';

import React from 'react'
import TitleSection from '../components/TitleSection'

import Image from 'next/image';
import { testimonial } from '../data/DataTestimonial'

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

            <Swiper
                className='my-[5rem]'
                loop={true}
                loopFillGroupWithBlank={true}
                slidesPerView={2}
                spaceBetween={15}
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
                        spaceBetween: 30,
                    },
                }}
                modules={[Autoplay, Pagination]}
            >
                {
                    testimonial.map((item) => {
                        return (
                            <SwiperSlide className='' key={item.id}>
                                <div className='shadow-lg border-[1px] rounded-lg border-gray-200 flex flex-col justify-between md:flex-row m-4 md:m-0 xl:m-2 gap-6 px-8 xl:px-[3rem] py-[3rem] h-[65vh] md:h-[45vh] xl:h-[40vh]'>

                                    <img src={item.image} alt="profile-img" className='h-[9rem] w-[9rem] rounded-full object-cover mb-4 border-[1px] self-center' />

                                    <div className='flex flex-col justify-between gap-4'>
                                        <p className='text-gray-500'>{item.description}</p>
                                        <h3 className='font-semibold'>{item.name}</h3>
                                    </div>
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