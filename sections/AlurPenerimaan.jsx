import React from 'react'
import TitleSection from '../components/TitleSection'

import { motion } from 'framer-motion'
import { slideIn, zoomIn } from '../utils/motion'

const steps = [
    {
        no: '1',
        title: 'Isi Data',
        content: 'Pengisian awal data diri calon mahasiswa/i'
    },
    {
        no: '2',
        title: 'Tim Kami Hubungi',
        content: 'Dalam 1x24 jam tim UMB akan menghubungi calon mahasiswa/i'
    },
    {
        no: '3',
        title: 'Lengkapi Data Diri',
        content: 'Melengkapi data diri calon mahasiswa/i di halaman pendaftaran'
    },
    {
        no: '4',
        title: 'Penyelesaian Administrasi',
        content: 'Tim UMB akan mengarahkan pada administrasi dan proses pembayaran'
    },
    {
        no: '5',
        title: 'Lakukan Pembayaran',
        content: 'Calon mahasiswa/i melakukan pembayaran'
    },
    {
        no: '6',
        title: 'Selamat!',
        content: 'Anda telah terdaftar menjadi mahasiswa/i Universitas Mercu Buana'
    },
]

const AlurPenerimaan = () => {
    return (
        <div name='alur-penerimaan' className='primary-padding my-[5rem]'>

            <motion.div
                variants={slideIn('up', 0, 0.5)}
                initial='hidden'
                whileInView='show'
            >
                <TitleSection
                    subtitle='Alur Penerimaan Mahasiswa Baru'
                    middleText='Secara Online'
                    title='Universitas Mercu Buana'
                />
            </motion.div>

            <div className='grid place-items-center mt-[5rem]'>
                <div className='flex flex-col items-start gap-[10rem] md:gap-[3rem] relative px-4'>

                    <div className='h-[140rem] md:h-[65rem] xl:h-[53rem] w-[2px] opacity-20 md:opacity-100 bg-primary-blue absolute top-0 md:top-[3rem] xl:top-[5rem] left-[50%] md:left-[2.9rem] z-[-1]'></div>

                    {
                        steps.map((step) => (
                            <div key={step.no} className='flex justify-center items-center gap-4 xl:gap-10 flex-wrap md:flex-nowrap max-w-[350px] md:max-w-[450px] xl:max-w-[700px]'>
                                <motion.span
                                    variants={zoomIn(0, 0.4)}
                                    initial='hidden'
                                    whileInView='show'
                                    className='rounded-full grid place-items-center bg-primary-blue h-[4rem] aspect-square text-white font-semibold border-8 border-white text-xl'
                                >
                                    0{step.no}
                                </motion.span>

                                <motion.div
                                    variants={zoomIn(0, 0.4)}
                                    initial='hidden'
                                    whileInView='show'
                                    className='flex flex-col border-[1px] shadow-md p-8 rounded-md w-full md:w-[70vw] xl:w-[40vw] bg-white'
                                >
                                    <span className='text-xl font-bold'>{step.title}</span>
                                    <p className='text-base'>{step.content}</p>
                                </motion.div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AlurPenerimaan