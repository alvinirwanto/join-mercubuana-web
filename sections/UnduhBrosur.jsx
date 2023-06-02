import React, { useState } from "react";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";

import Image from "next/image";
import { useBrosurStore } from "../store/state";
import { slideIn, zoomIn } from "../utils/motion";

import dynamic from 'next/dynamic';

const ModalBrosur = dynamic(() => import('../components/ModalBrosur'), {
    ssr: false
})

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

                    <motion.div
                        variants={slideIn('right', 0, 0.3)}
                        initial='hidden'
                        whileInView='show'
                        className="bg-gradient-to-t md:bg-gradient-to-l from-[#00326f] to-[#00326f21] absolute top-0 h-full w-full grid grid-cols-1 md:grid-cols-[1fr_1.5fr] xl:grid-cols-2"
                    >
                        <div></div>
                        <div className="self-center px-4 xl:px-[3rem] flex flex-col gap-6 items-start">
                            <motion.h2
                                variants={slideIn('right', 0, 0.3)}
                                initial='hidden'
                                whileInView='show'
                                className="text-white text-2xl md:text-xl xl:text-3xl font-semibold"
                            >
                                Ingin Dapatkan Informasi Lebih Lengkap Tentang Kelas Karyawan
                                Universitas Mercu Buana?
                            </motion.h2>

                            <motion.button
                                aria-label="unduh brosur"
                                variants={zoomIn(0, 0.3)}
                                initial='hidden'
                                whileInView='show'
                                onClick={() => showBrosur()}
                                className="flex justify-center font-semibold items-center gap-2 px-6 py-3 md:px-4 md:py-2 xl:px-6 xl:py-3 rounded-md duration-200 bg-transparentborder-2 border-white bg-white text-primary-blue hover:scale-105 hover:opacity-80">
                                <HiDownload />
                                <p>Unduh Brosur</p>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {
                brosur && <ModalBrosur />
            }
        </>
    );
};

export default UnduhBrosur;
