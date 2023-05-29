import React from "react";

import Image from "next/image";

import IconAkreditasi from '../public/award.svg'
import IconHour from '../public/clock-nine.svg'
import IconBill from '../public/bill.svg'
import TitleSection from "../components/TitleSection";

import { delay, motion } from "framer-motion";
import { slideIn, staggerAnimation, staggerItems } from "../utils/motion";

const listReasonKK = [
    {
        id: 1,
        img: IconAkreditasi,
        title: 'Terakreditasi BAN-PT',
        content: 'Seluruh program studi unggulan di kelas karyawan Universitas Mercu Buana telah terakreditasi BAN-PT'
    },
    {
        id: 2,
        img: IconBill,
        title: 'Biaya Kuliah Sesuai Kualitas',
        content: 'Biaya perkuliahan sesuai dengan kualitas yang dirancang sama dengan program reguler dengan kemudahan skema pembayaran yang mudah'
    },
    {
        id: 3,
        img: IconHour,
        title: 'Waktu Kuliah Fleksibel',
        content: 'Di kelas karyawan, Anda dapat memilih waktu kuliah yang dapat disesuaikan dengan pekerjaan Anda'
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
                className="primary-padding pt-[5rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
            >
                {
                    listReasonKK.map((reason) => (
                        <motion.div
                            variants={staggerItems('up')}
                            transition={{
                                delay: reason.id * 0.3,
                                stiffness: '100',
                                type: 'tween',
                            }}
                            key={reason.id} className="grid grid-cols-[1fr_5fr] gap-4 p-4"
                        >
                            <Image src={reason.img} className="w-[5rem] aspect-square self-start" alt="icon" />
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
