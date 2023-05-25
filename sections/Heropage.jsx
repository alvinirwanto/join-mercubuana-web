import React from 'react'
import Image from 'next/image'

import HeroBg from '../public/umb.png'
import HeroImg from '../public/student.png'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { Pagination, Autoplay } from "swiper";

const items = [
    {
        id: 1,
        image: 'hero-1.jpg'
    },
    {
        id: 2,
        image: 'hero-2.jpg'
    },
    {
        id: 3,
        image: 'hero-3.jpg'
    },
]

const Heropage = () => {
    return (
        <div name='home' className='w-full h-[100vh] md:h-screen bg-blue-200'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper h-full w-full relative z-[-2]"
            >
                {
                    items.map((item, id) => (
                        <SwiperSlide key={id}>
                            <Image
                                width={1000}
                                height={1000}
                                src={`/hero/${item.image}`} alt="image" className="object-cover w-full h-full" />
                        </SwiperSlide>
                    ))
                }

                <div className='absolute top-0 right-0 w-full h-[80%] bg-gradient-to-b from-[#0000007e] to-transparent z-[10]'></div>

                <div className='absolute bottom-[3rem] right-2.5 md:right-10 xl:top-[8rem] xl:right-[5rem] max-w-[95vw] md:max-w-[70vw] xl:max-w-[38vw] z-[20]'>
                    <div className='border-[1px] shadow-md rounded-lg p-8 xl:p-[3rem] bg-white flex flex-col gap-4'>
                        <div>
                            <h1 className='text-lg md:text-xl font-medium text-primary-green'>Tingkatkan Karirmu Bersama <br /> Kelas Karyawan UMB</h1>
                            <h2 className='text-4xl mt-2 font-bold text-primary-blue'>Daftar Sekarang Juga!</h2>
                        </div>

                        <div className='bg-white flex flex-col justify-center gap-4'>
                            <p className='font-medium text-base text-secondary-blue'>
                                Isi Data Diri Kamu Disini dan Dapatkan Informasi serta cicilan biaya kuliah hingga 48 kali!
                            </p>
                            <iframe
                                height="850"
                                className='max-h-[20rem]'
                                src="https://omni.mercubuana.ac.id/crm-mx/crm-app/forms/wtl/77e6c3eac6ff3a5bf2b9ae14c5a4872c"
                                frameBorder="0"
                                sandbox="allow-top-navigation allow-scripts allow-forms allow-same-origin"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>

            </Swiper>

        </div>
    )
}

export default Heropage