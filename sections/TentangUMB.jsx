import React from "react";
import mercu from "../public/Kelas-karyawan.webp";
import CampusImg2 from '../public/campus-2.jpeg'
import Image from "next/image";

import TitleSection from "../components/TitleSection";

import { BsPlayCircleFill } from 'react-icons/bs'


const TentangUMB = () => {
    return (
        <div className="w-full primary-padding">
            <TitleSection
                title='Universitas Mercu Buana'
                subtitle='Mengenai'
            />

            <div className="mt-[5rem] relative">
                <Image
                    src={CampusImg2}
                    alt='campus'
                    className='w-full h-[90vh] object-cover'
                />

                <div className="absolute top-0 w-full h-full bg-gradient-to-r from-white to-[#00326f57] grid grid-cols-[1fr_1.5fr] place-items-center">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-4xl font-semibold">Universitas Mercu Buana, <br /> Pilihan Terbaik PTS di Indonesia</h2>
                        <p className="">Universitas Mercu Buana merupakan salah satu perguruan tinggi swasta terbaik di Indonesia yang telah terakreditasi BAN PT. UMB memiliki program studi unggulan yang siap mengantarkan mahasiswa menjadi tenaga profesional yang andal. Universitas Mercu Buana hadir sebagai universitas swasta terbaik dengan biaya yang sesuai dengan kualitas dan menyediakan berbagai program kelas karyawan untuk para tenaga profesional yang ingin melanjutkan pendidikan ke jenjang yang lebih tinggi.</p>
                    </div>

                    <div
                        // onClick={ }
                        className="flex flex-col items-center justify-center gap-4 text-black relative cursor-pointer"
                    >
                        <BsPlayCircleFill className="text-6xl absolute top-0 w-full h-full" />
                        <div className="bg-black h-[5rem] aspect-square rounded-full flex justify-center items-center animate-ping">
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-9">
                <div className="">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/-_sIStXUSBw"
                        title="YouTube video player"
                    // frameborder="0"
                    // allowfullscreen='true'
                    ></iframe>
                </div>
                <div className="bg-white-500">
                    <div className="font-bold">
                        Universitas Mercu Buana,<br></br>Pilihan Terbaik PTS di Indonesia
                    </div>
                    <h2>
                        <br></br> Universitas Mercu Buana salah satu PTS terbaik di
                        Indonesia telah terakreditasi BAN PT. Memiliki program studi
                        unggulan yang siap mengantarkan menjadi tenaga profesional yang
                        andal. PTS terbaik dengan biaya yang sesuai dengan kualitas dan
                        menyediakan program kelas karyawan untuk para tenaga profesional
                        yang ingin melanjutkan ke jenjang pendidikan lebih tinggi.
                    </h2>
                </div>
            </div>
            <div className="grid grid-cols-2 pt-9">
                <div className="font-bold">
                    Fasilitas Kampus<br></br>
                </div>
                <div className="bg-white-500"></div>
                <h2>
                    <br></br> Universitas Mercu Buana memiliki kampus yang berlokasi di
                    tiga area yaitu kampus Meruya Jakarta Barat, Kampus Menteng Jakarta
                    Pusat, Kampus Warung Buncit Jakarta Selatan. Sarana ruang kelas dan
                    laboratorium mahasiswa yang terdapat di seluruh kampus.<br></br>
                    <br></br>
                    Tak hanya itu, Universitas Mercu Buana juga dilengkapi berbagai sarana
                    dan prasarana dalam kenyamanan proses pembelajaran seperti ruang kelas
                    nyaman, kampus yang dilengkapi dengan berbagai lapangan olahraga,
                    auditorium, sasana kreasi buana, poliklinik, gedung dormitory dengan
                    fasilitas penunjang yang lengkap.
                </h2>
                <div className="grid grid-cols-2 pt-9">
                    <div className="font-semibold">
                        <Image src={mercu} max-width="550" height="450" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TentangUMB;
