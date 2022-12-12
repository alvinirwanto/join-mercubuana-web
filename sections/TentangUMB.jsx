import React, { useState } from "react";
import mercu from "../public/Kelas-karyawan.webp";
import CampusImg2 from '../public/campus-2.jpeg'
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import TitleSection from "../components/TitleSection";

import { BsPlayCircleFill } from 'react-icons/bs'
import { BiX } from 'react-icons/bi'


const TentangUMB = () => {
    const [showVideo, setShowVideo] = useState(false)

    return (
        <div className="w-full primary-padding mt-[5rem]">
            <TitleSection
                title='Universitas Mercu Buana'
                subtitle='Mengenai'
            />

            <div className="mt-[5rem] relative rounded-sm overflow-clip">
                <Image
                    src='/campus-2.jpeg'
                    width={2000}
                    height={2000}
                    alt='campus'
                    className='w-full h-[150vh] md:h-[90vh] object-cover'
                />

                <div className="absolute top-0 w-full h-full bg-gradient-to-t xl:bg-gradient-to-r from-white to-[#00326f57] grid grid-cols-1 xl:grid-cols-[1fr_1.5fr] place-items-center">
                    <div className="flex flex-col gap-6 px-8 order-2 xl:order-1">
                        <h2 className="text-4xl font-semibold">
                            Universitas Mercu Buana, <br /> Pilihan Terbaik PTS di Indonesia
                        </h2>
                        <p className="">Universitas Mercu Buana merupakan salah satu perguruan tinggi swasta terbaik di Indonesia yang telah terakreditasi BAN PT. UMB memiliki program studi unggulan yang siap mengantarkan mahasiswa menjadi tenaga profesional yang andal. Universitas Mercu Buana hadir sebagai universitas swasta terbaik dengan biaya yang sesuai dengan kualitas dan menyediakan berbagai program kelas karyawan untuk para tenaga profesional yang ingin melanjutkan pendidikan ke jenjang yang lebih tinggi.</p>
                    </div>

                    <div
                        onClick={() => { setShowVideo(true) }}
                        className="flex flex-col items-center justify-center gap-4 my-[5rem] xl:my-0 text-black relative cursor-pointer order-1 xl:order-2"
                    >
                        <BsPlayCircleFill className="text-6xl absolute top-0 w-full h-full" />
                        <div className="bg-black h-[5rem] aspect-square rounded-full flex justify-center items-center animate-ping">
                        </div>
                    </div>
                </div>
            </div>

            <div className={showVideo
                ? "bg-[#000000d2] fixed flex justify-center items-center z-[100] top-0 left-0 w-full h-screen"
                : "hidden"}>
                <div className="flex items-start gap-4 w-[70%]">
                    <iframe
                        className="w-full aspect-video"
                        src={showVideo ? "https://www.youtube.com/embed/-_sIStXUSBw?autoplay=1" : ""}
                        allow='autoplay'
                        title="YouTube video player"
                    />
                    <div
                        onClick={() => { setShowVideo(false) }}
                        className="text-white cursor-pointer p-0">
                        <BiX className="text-4xl" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_2fr] gap-8 mt-[3rem] p-6 md:p-[3rem] border-[1px] border-gray-300 rounded-sm overflow-clip">
                <div className="flex flex-col gap-[3rem] order-2 xl:order-1">
                    <div className="flex flex-col gap-4">
                        <h2 className="font-semibold text-2xl">Fasilitas Kampus</h2>
                        <p>Universitas Mercu Buana dilengkapi dengan berbagai sarana dan prasarana untuk menunjang kenyamanan proses pembelajaran seperti ruang kelas yang nyaman, kampus yang dilengkapi dengan berbagai lapangan olahraga, auditorium, sasana kreasi buana, poliklinik, gedung dormitory dengan fasilitas penunjang yang lengkap, dan laboratorium mahasiswa yang terdapat di seluruh kampus.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="font-semibold text-2xl">Lokasi Kampus</h2>
                        <p>Lokasi Universitas Mercu Buana berada di tiga area yaitu kampus Meruya Jakarta Barat, Kampus Menteng Jakarta Pusat, Kampus Warung Buncit Jakarta Selatan. </p>
                    </div>
                </div>
                <Swiper
                    slidesPerView={2}
                    // centeredSlides={true}
                    spaceBetween={190}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className='w-full order-1 xl:order-2'
                >
                    <SwiperSlide>
                        <div className="bg-black w-[25rem] h-full">
                            <Image
                                src='/campus-2.jpeg'
                                width={2000}
                                height={2000}
                                alt='campus'
                                className="object-cover h-full w-full"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-black w-[25rem] h-full">
                            <Image
                                src='/campus-2.jpeg'
                                width={2000}
                                height={2000}
                                alt='campus'
                                className="object-cover h-full w-full"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-black w-[25rem] h-full">
                            <Image
                                src='/campus-2.jpeg'
                                width={2000}
                                height={2000}
                                alt='campus'
                                className="object-cover h-full w-full"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default TentangUMB;
