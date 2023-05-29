import React from 'react'
import { BiX } from 'react-icons/bi'
import { useBrosurStore } from '../store/state'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { zoomIn } from '../utils/motion'

export default function ModalBrosur() {

    const { brosur, closeBrosur } = useBrosurStore(state => state)

    return (
        // ======== Unduh Brosur =======
        <div className={`w-full h-full bg-[#00000092] fixed z-[400] ${brosur === true ? 'grid' : 'hidden'} place-items-center`}>

            <motion.div
                variants={zoomIn(0.1, 0.2)}
                initial='hidden'
                animate='show'
                className='bg-white w-[95%] md:w-[80%] xl:w-[55%] py-8 px-6 md:px-8 xl:px-10 rounded-md'
            >
                <div className='flex justify-end text-black mb-8'>
                    <BiX onClick={() => closeBrosur()} className='text-3xl cursor-pointer' />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-8">
                    <div className='col-start-1 col-end-8 md:col-end-6 grid-rows-1 row-start-1 flex flex-col gap-8 z-[2]'>
                        <Image
                            src='/logo/logo-umb-full.png'
                            width={500}
                            height={500}
                            className='object-contain w-[5rem]'
                        />
                        <div>
                            <span className='text-3xl font-semibold'>Unduh brosur sekarang</span>
                            <p className='text-base'>Isi data diri Anda di bawah ini untuk dapatkan brosur seputar informasi Universitas Mercu Buana</p>
                            <iframe className='w-full h-[20rem] -ml-4 md:-ml-6' src="https://omni.mercubuana.ac.id/crm-mx/crm-app/forms/wtl/a06697d979a8c6dad5060b086994ee1c" frameBorder="0" sandbox="allow-top-navigation allow-scripts allow-forms allow-same-origin" allowFullScreen></iframe>
                        </div>

                    </div>

                    <div className='col-start-1 md:col-start-4 col-end-9 grid-rows-1 row-start-1 z-[1] relative grid place-items-center'>
                        <div className='rotate-6 z-[2] bg-gradient-to-r from-[#ffffffe1] via-[#ffffffdc] to-transparent w-full h-full absolute top-0'></div>

                        <Image
                            src='/brosur.png'
                            width={500}
                            height={500}
                            className='z-[1] w-[90%] object-contain shadow-md rotate-6 border-[1px]'
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
