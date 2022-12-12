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

            <div name='faculty-section' className='mt-[5rem] py-[3rem] gap-9'>

                <div className="px-[2rem] p-4 flex flex-col gap-[10rem]">
                    <Fasilkom/>
                    <Fikom/>
                    <FDSK/>
                    <FT/>
                    <FEB/>
                    <FPsi/>
                </div>
            </div>
        </div>
    )
}

export default Fakultas