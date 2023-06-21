import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

import { BsPlayCircleFill } from 'react-icons/bs'
import { BiX } from 'react-icons/bi'
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { slideIn, zoomIn } from "../utils/motion";


import dynamic from 'next/dynamic'
import ModalVideo from "../components/ModalVideo";

const TitleSection = dynamic(() => import('../components/TitleSection'), {
    ssr: false
})


const images = [
    {
        id: '1',
        link: '/fasilitas/fasilitas-1.jpg'
    },
    {
        id: '2',
        link: '/fasilitas/fasilitas-2.jpg'
    },
    {
        id: '3',
        link: '/fasilitas/fasilitas-3.jpg'
    },
    {
        id: '4',
        link: '/fasilitas/fasilitas-4.jpg'
    },
    {
        id: '5',
        link: '/fasilitas/fasilitas-5.jpg'
    },
    {
        id: '6',
        link: '/fasilitas/fasilitas-6.jpg'
    },
    {
        id: '7',
        link: '/fasilitas/fasilitas-7.jpg'
    }
]


const TentangUMB = () => {
    const [showVideo, setShowVideo] = useState(false)
    const [showVideo2, setShowVideo2] = useState(false)


    const [realSlide, setRealSlide] = useState(0)
    const swiper = useRef()

    const fnPrev = React.useCallback(
        () => {
            // Optional Chaining
            if (realSlide < images.length) swiper?.current?.slidePrev()
        },
        [swiper, realSlide]
    )

    const fnNext = React.useCallback(
        () => {
            if (realSlide < images.length) swiper?.current?.slideNext()
        },
        [swiper, realSlide]
    )
    return (
        <div name='tentang' className="w-full primary-padding pt-[10rem]">

            <motion.div
                variants={slideIn('up', 0, 0.5)}
                initial='hidden'
                whileInView='show'
            >
                <TitleSection
                    title='Universitas Mercu Buana'
                    subtitle='Mengenai'
                />
            </motion.div>

            <div className="mt-[5rem] relative rounded-lg overflow-clip">
                <Image
                    src='/campus.png'
                    width={1000}
                    height={1000}
                    alt='campus'
                    className='w-full h-[130vh] md:h-[90vh] object-cover'
                />

                <div className="absolute top-0 w-full h-full bg-gradient-to-t xl:bg-gradient-to-r from-white via-[#ffffffe2] xl:via-[#ffffffd4] to-[#00326f57] grid grid-cols-1 xl:grid-cols-[1fr_1.5fr] place-items-center">
                    <motion.div
                        variants={slideIn('left', 0,)}
                        initial='hidden'
                        whileInView='show'
                        className="flex flex-col gap-6 px-3 md:px-8 order-2 xl:order-1"
                    >
                        <h2 className="text-2xl xl:text-4xl font-semibold">
                            Universitas Mercu Buana, <br /> Pilihan Terbaik PTS di Indonesia
                        </h2>
                        <p className="text-lg md:text-xl xl:text-lg">Universitas Mercu Buana telah mendapatkan akreditasi "UNGGUL" dari BAN-PT yang menjadikan Universitas Mercu Buana menjadi salah satu Universitas terbaik di Indonesia. Universitas Mercu Buana juga telah memiliki Akreditasi "UNGGUL" untuk beberapa jurusan yang ada. Mari bergabung bersama Universitas Mercu Buana dan jadilah Komunitas Berkelas Dunia</p>
                    </motion.div>

                    <motion.div
                        variants={zoomIn(0.5, 0.3)}
                        initial='hidden'
                        whileInView='show'
                        onClick={() => { setShowVideo(true) }}
                        className="flex flex-col items-center justify-center gap-4 my-[5rem] xl:my-0 text-black relative cursor-pointer order-1 xl:order-2"
                    >
                        <BsPlayCircleFill className="text-6xl absolute top-0 w-full h-full" />
                        <div className="bg-black h-[5rem] aspect-square rounded-full flex justify-center items-center animate-ping">
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className={showVideo
                ? "bg-[#000000d2] fixed flex justify-center items-center z-[100] top-0 left-0 w-full h-screen"
                : "hidden"}>

                <ModalVideo
                    showVideo={showVideo}
                    setShowVideo={setShowVideo}
                />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_2fr] gap-8 mt-[3rem] px-3 py-8 md:p-[3rem] border-[1px] border-gray-300 rounded-md overflow-clip">
                <motion.div
                    variants={slideIn('left', 0,)}
                    initial='hidden'
                    whileInView='show'
                    className="flex flex-col gap-[3rem] order-2 xl:order-1"
                >
                    <div className="flex flex-col gap-4">
                        <h2 className="font-semibold text-2xl">Fasilitas Kampus</h2>
                        <p>Universitas Mercu Buana dilengkapi dengan berbagai sarana dan prasarana untuk menunjang kenyamanan proses pembelajaran seperti ruang kelas yang nyaman, kampus yang dilengkapi dengan berbagai lapangan olahraga, auditorium, sasana kreasi buana, poliklinik, gedung dormitory dengan fasilitas penunjang yang lengkap, dan laboratorium mahasiswa yang terdapat di seluruh kampus.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="font-semibold text-2xl">Lokasi Kampus</h2>
                        <p>Lokasi Universitas Mercu Buana berada di tiga area yaitu kampus Meruya Jakarta Barat, Kampus Menteng Jakarta Pusat, Kampus Warung Buncit Jakarta Selatan. </p>
                    </div>
                </motion.div>

                <Swiper
                    //Use slidesPerView auto and loopedSlides to avoid hydration error
                    slidesPerView="auto"
                    spaceBetween={10}
                    loopedSlides={7}
                    breakpoints={{
                        320: {
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        }
                    }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    grabCursor={true}
                    onSlideChange={(s) => setRealSlide(s.realIndex)}
                    onSwiper={(s) => {
                        swiper.current = s
                    }}
                    // navigation={true}
                    modules={[Pagination, Autoplay]}
                    className="w-full order-1 xl:order-2"
                >
                    {
                        images.map((img) => (
                            <SwiperSlide key={img.id}>
                                <Image
                                    src={img.link}
                                    height={500}
                                    width={500}
                                    alt='campus'
                                    className="object-cover h-full w-[25rem]"
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                <div></div>

                {/* ===== Navigation ====== */}
                <div className={`flex justify-end w-full gap-2 z-50`}>
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


        </div >
    );
};

export default TentangUMB;
