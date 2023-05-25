import React, { useState } from "react";
import { HiDownload } from "react-icons/hi";

import Image from "next/image";
import ModalBrosur from "../components/ModalBrosur";
import { useBrosurStore } from "../store/state";

const UnduhBrosur = () => {

    const { brosur, showBrosur } = useBrosurStore(state => state)

    return (
        <>
            <div className="primary-padding">
                <div className="relative rounded-lg overflow-clip" >
                    <Image
                        src='/unduh-brosur.jpg'
                        width={1000}
                        height={1000}
                        alt='background brosur'
                        className='h-[70vh] xl:h-[90vh] w-full object-cover'
                    />
                    <div className="bg-gradient-to-t md:bg-gradient-to-l from-[#00326f] to-[#00326f21] absolute top-0 h-full w-full grid grid-cols-1 md:grid-cols-[1fr_1.5fr] xl:grid-cols-2">
                        <div></div>
                        <div className="self-center px-4 xl:px-[3rem] flex flex-col gap-6 items-start">
                            <h2 className="text-white text-2xl md:text-xl xl:text-3xl font-semibold">
                                Ingin Dapatkan Informasi Lebih Lengkap Tentang Kelas Karyawan
                                Universitas Mercu Buana?
                            </h2>

                            <button
                                onClick={() => showBrosur()}
                                className="flex justify-center font-semibold items-center gap-2 px-6 py-3 md:px-4 md:py-2 xl:px-6 xl:py-3 rounded-md duration-200 bg-transparentborder-2 border-white bg-white text-primary-blue hover:scale-105 hover:opacity-80">
                                <HiDownload />
                                <p>Unduh Brosur</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {
                brosur && <ModalBrosur />
            }
        </>
    );
};

export default UnduhBrosur;
