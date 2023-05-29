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
        image: 'banner-1.png',
        image_md: 'banner-1-md.png',
        image_sm: 'banner-1-sm.png'
    },
    {
        id: 2,
        image: 'hero-2.jpg',
        image_md: 'hero-2.jpg',
        image_sm: 'hero-2.jpg'
    },
    {
        id: 3,
        image: 'hero-3.jpg',
        image_md: 'hero-3.jpg',
        image_sm: 'hero-3.jpg'
    },
]

const Heropage = () => {
    return (
        <div name='home' className='w-full h-full md:h-screen bg-white'>
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

                            {/* PC */}
                            <div className='hidden xl:block w-full h-full'>
                                <Image
                                    width={1200}
                                    height={1200}
                                    src={`/hero/${item.image}`} alt="image" className="object-cover w-full h-full"
                                    priority
                                />
                            </div>

                            {/* Tablet */}
                            <div className='hidden md:block xl:hidden w-full h-full'>
                                <Image
                                    width={1200}
                                    height={1200}
                                    src={`/hero/${item.image_md}`} alt="image" className="!object-cover !w-full !h-full"
                                    priority
                                />
                            </div>

                            {/* Mobile */}
                            <div className='block md:hidden w-full h-[90vh]'>
                                <Image
                                    width={1200}
                                    height={1200}
                                    src={`/hero/${item.image_sm}`} alt="image" className="object-cover w-full h-full"
                                    priority
                                />
                            </div>
                        </SwiperSlide>
                    ))
                }

                <div className='hidden md:block'>
                    <div className='absolute bottom-[3rem] md:right-10 xl:top-[8rem] xl:right-[5rem] w-[95vw] md:max-w-[70vw] xl:max-w-[38vw] z-[20]'>
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
                </div>

            </Swiper>


            {/* ========= Only on mobile ========== */}
            <div className='flex justify-center -mt-10 md:hidden'>
                <div className='w-[95vw] md:max-w-[70vw] xl:max-w-[38vw] z-[20]'>
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
            </div>
        </div>
    )
}

export default Heropage