import { Link } from 'react-scroll';

import React from 'react'
import Image from 'next/image';

export default function ButtonDaftar() {
    return (

        <div className='relative my-0 xl:my-[15rem]'>
            <Link
                to='home'
                activeClass='active'
                spy={true}
                className='w-full h-full bg-[#ffffffe0] absolute flex justify-center items-center'
            >
                <div className='cursor-pointer bg-primary-blue text-white font-semibold rounded-md px-8 py-4 text-xl'>
                    Daftar Sekarang
                </div>
            </Link >

            <Image
                src={'/campus-2.png'}
                width={1000}
                height={1000}
                className='object-cover w-full h-[50vh] xl:h-[60vh] px-4 xl:px-9 rounded-md overflow-clip'
            />
        </div>
    )
}
