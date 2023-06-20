import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import { slideIn, staggerAnimation, staggerItems } from "../utils/motion";

import dynamic from 'next/dynamic'

// import { TbReportMoney, TbAward, TbClockHour4 } from 'react-icons/tb'
import { TbReportMoney, TbAward, TbClockHour4, TbUserCheck, TbBuildingCommunity } from 'react-icons/tb'
import { MdOutlinePrecisionManufacturing } from 'react-icons/md'

const TitleSection = dynamic(() => import('../components/TitleSection'), {
    ssr: false
})

const listReasonKK = [
    {
        title: 'Terakreditasi BAN-PT',
        content: 'Seluruh program studi unggulan di kelas karyawan Universitas Mercu Buana telah terakreditasi BAN-PT'
    },
    {
        title: 'Biaya Kuliah Sesuai Kualitas',
        content: 'Biaya perkuliahan sesuai dengan kualitas yang dirancang sama dengan program reguler dengan kemudahan skema pembayaran yang mudah'
    },
    {
        title: 'Waktu Kuliah Fleksibel',
        content: 'Di kelas karyawan, Anda dapat memilih waktu kuliah yang dapat disesuaikan dengan pekerjaan Anda'
    },
    {
        title: 'Tenaga Pengajar Berkualitas',
        content: 'Semua pengajar mempunyai akreditasi yang tinggi dan berpengalaman dibidangnya'
    },
    {
        title: 'Fasilitas Lengkap dan Nyaman',
        content: 'Fasilitas diatur sehingga siswa dapat menikmati lingkungan dan hasil belajar terbaik'
    },
    {
        title: 'Relevan dengan Industri',
        content: 'Ikuti program studi yang diperbarui secara rutin dengan kurikulum yang relevan dengan industri'
    },
]

const MengapaMemilihKK = () => {
    return (
        <div className="w-full py-[10rem]">
            <motion.div
                variants={slideIn('up', 0, 0.5)}
                initial='hidden'
                whileInView='show'
            >
                <TitleSection
                    subtitle='Mengapa Memilih Kelas Karyawan'
                    title='Universitas Mercu Buana'
                />
            </motion.div>

            <motion.div
                variants={staggerAnimation}
                initial='hidden'
                whileInView='show'
                className="primary-padding pt-[5rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8"
            >
                {
                    listReasonKK.map((reason, i) => (
                        <motion.div
                            variants={staggerItems('up')}
                            transition={{
                                delay: i * 0.3,
                                stiffness: '100',
                                type: 'tween',
                            }}
                            key={i} className="grid grid-cols-[1fr_5fr] gap-4 p-4"
                        >
                            <div className="text-primary-blue justify-self-end">
                                {
                                    i === 0 ? <TbAward size={50} />
                                        : i === 1 ? <TbReportMoney size={50} />
                                            : i === 2 ? <TbClockHour4 size={50} />
                                                : i === 3 ? <TbUserCheck size={50} />
                                                    : i === 4 ? <TbBuildingCommunity size={50} />
                                                        : i === 5 ? <MdOutlinePrecisionManufacturing size={50} />
                                                            : ''

                                }
                            </div>
                            <div className="flex flex-col gap-4 mt-2">
                                <h2 className="font-semibold text-xl text-primary-blue">{reason.title}</h2>
                                <p>{reason.content}</p>
                            </div>
                        </motion.div>
                    ))
                }

            </motion.div>
        </div >
    );
};

export default MengapaMemilihKK;
