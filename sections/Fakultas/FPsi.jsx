import React from 'react'
import ProdiItem from '../../components/ProdiItem'

import { BiBrain } from 'react-icons/bi'

import FPsiImg from '../../public/fpsi.jpeg'

const FPsi = () => {
    return (
        <div className='w-full'>
        <div className='flex justify-between items-center'>
            <h2 className='text-5xl font-semibold text-primary-blue'>
                Fakultas Psikologi <br /> (FPsi)
            </h2>
            <BiBrain className='text-8xl text-primary-blue' />
        </div>
        <div className='flex flex-col gap-[5rem] mt-[5rem]'>
            <ProdiItem
                title='Psikologi'
                content='Program studi psikologi telah terakreditasi B. Tingkatkan pengetahuan dan wawasan mengenai ilmu psikologis untuk mempelajari perilaku dan pengalaman manusia sebagai individu atau kelompok serta proses mental atau fisiologis yang menyertainya.'
                image={FPsiImg}
            />

        </div>
    </div>
    )
}

export default FPsi