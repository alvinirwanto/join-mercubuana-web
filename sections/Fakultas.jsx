import { motion } from 'framer-motion'
import Image from 'next/image'
import { faculties } from '../data/DataFakultas'

import { BiBrain, BiLaptop, BiLineChart, BiPalette, BiPodcast } from 'react-icons/bi'
import { GiGears } from 'react-icons/gi'

import { slideIn, staggerAnimation, staggerItems } from '../utils/motion'

import dynamic from 'next/dynamic'

const TitleSection = dynamic(() => import('../components/TitleSection'), {
    ssr: false
})

const Fakultas = () => {

    return (
        <div name='fakultas' className='primary-padding pt-[10rem]'>

            <motion.div
                variants={slideIn('up', 0, 0.5)}
                initial='hidden'
                whileInView='show'
            >
                <TitleSection
                    subtitle='Fakultas & Program Studi'
                    title='Universitas Mercu Buana'
                />
            </motion.div>

            <div name='faculty-section' className='mt-[5rem] py-[3rem] gap-9'>

                <motion.div
                    variants={staggerAnimation}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true }}
                    className="px-[.5rem] md:px-[2rem] p-4 flex flex-col gap-[10rem]"
                >
                    {
                        faculties.map((faculty, i) => (
                            <motion.div
                                variants={staggerItems('up')}
                                viewport={{ once: true }}
                                transition={{
                                    delay: i * 0.3,
                                    stiffness: '100',
                                    type: 'tween',
                                }}
                                key={i} className='w-full'
                            >
                                <div className='flex flex-col gap-5 md:flex-row justify-between items-center'>
                                    <h2 className='order-2 md:order-1 text-3xl xl:text-4xl font-semibold text-primary-blue text-center md:text-right'>
                                        {faculty.facultyName}
                                    </h2>
                                    <div className='order-1 md:order-2 text-5xl xl:text-6xl text-primary-blue'>
                                        {
                                            faculty.facultyName === 'Fakultas Ilmu Komputer (Fasilkom)' ? <BiLaptop />
                                                : faculty.facultyName === 'Fakultas Desain & Seni Kreatif (FDSK)' ? <BiPalette />
                                                    : faculty.facultyName === 'Fakultas Ekonomi & Bisnis (FEB)' ? <BiLineChart />
                                                        : faculty.facultyName === 'Fakultas Ilmu Komunikasi (Fikom)' ? <BiPodcast />
                                                            : faculty.facultyName === 'Fakultas Psikologi (FPsi)' ? <BiBrain />
                                                                : faculty.facultyName === 'Fakultas Teknik (FT)' ? <GiGears />
                                                                    : ''
                                        }
                                    </div>
                                </div>

                                <div className='grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] mt-[3rem] gap-6 items-start'>
                                    <Image
                                        src={faculty.img}
                                        alt='foto fakultas'
                                        height={500}
                                        width={500}
                                        className='w-full max-h-[30vh] xl:max-h-[50vh] object-cover rounded-lg'
                                    />

                                    <div className='flex flex-col gap-[3rem]'>
                                        {
                                            faculty.majors.map((major, i) => (
                                                <div key={i} className='p-4 md:p-8 border-[1px] border-gray-300 rounded-lg flex flex-col gap-6'>
                                                    <h3 className='rounded text-2xl font-semibold bg-[#00326f08] border-2 border-[#00326f10] text-primary-blue py-2 px-4 self-start'>{major.name}</h3>
                                                    <p className='text-justify text-lg'>{major.content}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>

                            </motion.div>

                        ))
                    }
                </motion.div>
            </div>
        </div >
    )
}

export default Fakultas