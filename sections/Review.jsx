import React, { useRef, useState } from "react";

import Image from 'next/image';
import { testimonial } from '../data/DataTestimonial'

import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { slideIn } from "../utils/motion";

import dynamic from 'next/dynamic'

const TitleSection = dynamic(() => import('../components/TitleSection'), {
    ssr: false
})

const Review = () => {

    const [realSlide, setRealSlide] = useState(0)
    const swiper = useRef()

    const fnPrev = React.useCallback(
        () => {
            // Optional Chaining
            if (realSlide < testimonial.length) swiper?.current?.slidePrev()
        },
        [swiper, realSlide]
    )

    const fnNext = React.useCallback(
        () => {
            if (realSlide < testimonial.length) swiper?.current?.slideNext()
        },
        [swiper, realSlide]
    )

    return (
        <div className='primary-padding my-[10rem]'>

            <motion.div
                variants={slideIn('up', 0, 0.5)}
                initial='hidden'
                whileInView='show'
            >
                <TitleSection
                    subtitle='Apa Kata Mereka?'
                    title='Simak ulasan para mahasiswa dan alumni Universitas Mercu Buana'
                />
            </motion.div>

            <Swiper
                className='mt-[5rem] py-6'
                loop={true}
                loopedSlides={3}
                slidesPerView={2}
                spaceBetween={15}
                grabCursor={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                onSlideChange={(s) => setRealSlide(s.realIndex)}
                onSwiper={(s) => {
                    swiper.current = s
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
                                <div className='shadow-lg border-[1px] rounded-lg border-gray-200 flex flex-col justify-between xl:flex-row m-4 md:m-0 xl:m-2 gap-6 px-8 xl:px-[3rem] py-[3rem] h-[65vh] md:h-[50vh] xl:h-[40vh]'>

                                    <Image
                                        src={item.image}
                                        width={900}
                                        height={900}
                                        alt="profile-img"
                                        className='h-[7rem] w-[7rem] xl:h-[9rem] xl:w-[9rem] rounded-full object-cover mb-4 border-[1px] self-center'
                                    />

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

            {/* ===== Navigation ====== */}
            <div className={`flex justify-end w-full gap-2 z-50 mt-8 pr-2 md:pr-0`}>
                <button
                aria-label="button-prev"
                    onClick={fnPrev}
                    className={`bg-primary-blue p-2 rounded-full shadow-lg ml-4 text-white`}
                >
                    <RiArrowLeftSLine className='text-2xl' />
                </button>

                <button
                aria-label="button-next"
                    onClick={fnNext}
                    className={`bg-primary-blue p-2 rounded-full shadow-lg mr-2 text-white`}
                >
                    <RiArrowRightSLine className='text-2xl' />
                </button>
            </div>
        </div>
    )
}

export default Review