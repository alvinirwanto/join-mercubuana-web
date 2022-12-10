import React from "react";
import { HiDownload } from "react-icons/hi";

import Image from "next/image";

import BgUnduhBrosur from '../public/unduh-brosur.jpeg'

const UnduhBrosur = () => {
    return (
        <div className="primary-padding">
            <div className="relative rounded-sm overflow-clip" >
                <Image
                    src={BgUnduhBrosur}
                    alt='background brosur'
                    className='h-full w-full object-cover'
                />
                <div className="bg-gradient-to-l from-[#00326f] to-[#00326f21] absolute top-0 h-full w-full grid grid-cols-2">
                    <div></div>
                    <div className="self-center px-[3rem] flex flex-col gap-6 items-start">
                        <h2 className="text-white text-3xl font-semibold">
                            Ingin Dapatkan Informasi Lebih Lengkap Tentang Kelas Karyawan
                            Universitas Mercu Buana?
                        </h2>
                        <button className="flex justify-center items-center gap-2 px-6 py-3 backdrop-blur rounded-sm duration-200 bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-blue">
                            <HiDownload />
                            <p>Unduh Brosur</p>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UnduhBrosur;
