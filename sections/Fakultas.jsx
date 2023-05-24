import TitleSection from '../components/TitleSection'

import { Link } from 'react-scroll'

import { BiBrain, BiLaptop, BiLineChart, BiPalette, BiPodcast } from 'react-icons/bi'
import ProdiItem from '../components/ProdiItem'

import { faculties } from '../data/DataFakultas'
import { GiGears } from 'react-icons/gi'
import Image from 'next/image'

const Fakultas = () => {

    return (
        <div name='fakultas' className='primary-padding py-[10rem]'>
            <TitleSection
                subtitle='Fakultas & Program Studi'
                title='Universitas Mercu Buana'
            />

            <div name='faculty-section' className='mt-[5rem] py-[3rem] gap-9'>

                <div className="px-[.5rem] md:px-[2rem] p-4 flex flex-col gap-[10rem]">

                    {
                        faculties.map((faculty, i) => (

                            <div key={i} className='w-full'>
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

                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Fakultas