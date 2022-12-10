import { useState } from 'react'
import TitleSection from '../components/TitleSection'

import Image from 'next/image'

import { Link } from 'react-scroll'

import FasilkomImg from '../public/fasilkom.jpg'
import FikomImg from '../public/fikom.jpeg'
import FdskImg from '../public/fdsk.jpeg'
import FebImg from '../public/feb.jpeg'
import FpsiImg from '../public/fpsi.jpeg'
import FtImg from '../public/ft.jpeg'

import FDSK from './Fakultas/FDSK'
import Fasilkom from './Fakultas/Fasilkom'
import Fikom from './Fakultas/Fikom'
import FT from './Fakultas/FT'
import FEB from './Fakultas/FEB'
import FPsi from './Fakultas/FPsi'

const Fakultas = () => {

    const [faculty, setFaculty] = useState('fdsk')

    return (
        <div className='primary-padding py-[10rem]'>
            <TitleSection
                subtitle='Fakultas & Program Studi'
                title='Universitas Mercu Buana'
            />

            <div name='faculty-section' className='grid grid-cols-[1fr_2.7fr] mt-[5rem] py-[3rem] gap-9'>
                <div className='flex flex-col gap-3 bg-gray-100 h-[110vh] p-4 rounded-sm'>

                    <Link
                        to='faculty-section'
                        offset={-80}
                        smooth={true}
                        duration={300}
                        onClick={() => { setFaculty('fdsk') }}
                        className={`rounded-sm relative w-full overflow-clip cursor-pointer
                        ${faculty === 'fdsk' ? 'h-[13rem] duration-500' : 'opacity-90 h-[7rem] hover:opacity-100'}`}>
                        <Image
                            src={FdskImg}
                            className='object-cover h-full w-full'
                        />
                        <div className={`flex items-end pb-6 px-8 absolute top-0 ${faculty === 'fdsk' ? 'bg-gradient-to-t from-primary-blue via-[#00000092] to-[#00000010]' : 'bg-[#000000a9]'} w-full h-full`}>
                            <h3 className={`text-white ${faculty === 'fdsk' ? 'text-2xl' : 'text-xl'} font-medium`}>Fakultas Desain & Seni Kreatif (FDSK)</h3>
                        </div>
                    </Link>

                    <Link
                        to='faculty-section'
                        offset={-80}
                        smooth={true}
                        duration={300}
                        onClick={() => { setFaculty('fasilkom') }}
                        className={`rounded-sm relative w-full h-[13rem] overflow-clip cursor-pointer
                        ${faculty === 'fasilkom' ? 'h-[13rem] duration-500' : 'opacity-90 h-[7rem] hover:opacity-100'}`}>
                        <Image
                            src={FasilkomImg}
                            className='object-cover h-full w-full'
                        />
                        <div className={`flex items-end pb-6 px-8 absolute top-0 ${faculty === 'fasilkom' ? 'bg-gradient-to-t from-primary-blue via-[#00000092] to-[#00000010]' : 'bg-[#000000a9]'} w-full h-full`}>
                            <h3 className={`text-white ${faculty === 'fasilkom' ? 'text-2xl' : 'text-xl'} font-medium`}>Fakultas Ilmu Komputer (Fasilkom)</h3>
                        </div>
                    </Link>

                    <Link
                        to='faculty-section'
                        offset={-80}
                        smooth={true}
                        duration={300}
                        onClick={() => { setFaculty('fikom') }}
                        className={`rounded-sm relative w-full h-[13rem] overflow-clip cursor-pointer
                        ${faculty === 'fikom' ? 'h-[13rem] duration-500' : 'opacity-90 h-[7rem] hover:opacity-100'}`}>
                        <Image
                            src={FikomImg}
                            className='object-cover h-full w-full'
                        />
                        <div className={`flex items-end pb-6 px-8 absolute top-0 ${faculty === 'fikom' ? 'bg-gradient-to-t from-primary-blue via-[#00000092] to-[#00000010]' : 'bg-[#000000a9]'} w-full h-full`}>
                            <h3 className={`text-white ${faculty === 'fikom' ? 'text-2xl' : 'text-xl'} font-medium`}>Fakultas Ilmu Komunikasi (Fikom)</h3>
                        </div>
                    </Link>

                    <Link
                        to='faculty-section'
                        offset={-80}
                        smooth={true}
                        duration={300}
                        onClick={() => { setFaculty('ft') }}
                        className={`rounded-sm relative w-full h-[13rem] overflow-clip cursor-pointer
                        ${faculty === 'ft' ? 'h-[13rem] duration-500' : 'opacity-90 h-[7rem] hover:opacity-100'}`}>
                        <Image
                            src={FtImg}
                            className='object-cover h-full w-full'
                        />
                        <div className={`flex items-end pb-6 px-8 absolute top-0 ${faculty === 'ft' ? 'bg-gradient-to-t from-primary-blue via-[#00000092] to-[#00000010]' : 'bg-[#000000a9]'} w-full h-full`}>
                            <h3 className={`text-white ${faculty === 'ft' ? 'text-2xl' : 'text-xl'} font-medium`}>Fakultas Teknik (FT)</h3>
                        </div>
                    </Link>

                    <Link
                        to='faculty-section'
                        offset={-80}
                        smooth={true}
                        duration={300}
                        onClick={() => { setFaculty('feb') }}
                        className={`rounded-sm relative w-full h-[13rem] overflow-clip cursor-pointer
                        ${faculty === 'feb' ? 'h-[13rem] duration-500' : 'opacity-90 h-[7rem] hover:opacity-100'}`}>
                        <Image
                            src={FebImg}
                            className='object-cover h-full w-full'
                        />
                        <div className={`flex items-end pb-6 px-8 absolute top-0 ${faculty === 'feb' ? 'bg-gradient-to-t from-primary-blue via-[#00000092] to-[#00000010]' : 'bg-[#000000a9]'} w-full h-full`}>
                            <h3 className={`text-white ${faculty === 'feb' ? 'text-2xl' : 'text-xl'} font-medium`}>Fakultas Ekonomi & Bisnis (FEB)</h3>
                        </div>
                    </Link>

                    <Link
                        to='faculty-section'
                        offset={-80}
                        smooth={true}
                        duration={300}
                        onClick={() => { setFaculty('fpsi') }}
                        className={`rounded-sm relative w-full h-[13rem] overflow-clip cursor-pointer
                        ${faculty === 'fpsi' ? 'h-[13rem] duration-500' : 'opacity-90 h-[7rem] hover:opacity-100'}`}>
                        <Image
                            src={FpsiImg}
                            className='object-cover h-full w-full'
                        />
                        <div className={`flex items-end pb-6 px-8 absolute top-0 ${faculty === 'fpsi' ? 'bg-gradient-to-t from-primary-blue via-[#00000092] to-[#00000010]' : 'bg-[#000000a9]'} w-full h-full`}>
                            <h3 className={`text-white ${faculty === 'fpsi' ? 'text-2xl' : 'text-xl'} font-medium`}>Fakultas Psikologi (FPsi)</h3>
                        </div>
                    </Link>

                </div>

                <div className="px-[2rem] p-4">
                    <div className={faculty === 'fdsk' ? 'block' : 'hidden'}>
                        <FDSK />
                    </div>
                    <div className={faculty === 'fasilkom' ? 'block' : 'hidden'}>
                        <Fasilkom />
                    </div>
                    <div className={faculty === 'fikom' ? 'block' : 'hidden'}>
                        <Fikom />
                    </div>
                    <div className={faculty === 'ft' ? 'block' : 'hidden'}>
                        <FT />
                    </div>
                    <div className={faculty === 'feb' ? 'block' : 'hidden'}>
                        <FEB />
                    </div>
                    <div className={faculty === 'fpsi' ? 'block' : 'hidden'}>
                        <FPsi />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fakultas