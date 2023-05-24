import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <div className='bg-primary-blue w-full px-4 xl:px-[3rem] py-[5rem] flex flex-col gap-10 items-center'>

            <img src="/footer.webp" alt="" className='xl:max-w-[1100px]' />

            <div className='flex flex-col text-white items-center'>
                <Image
                    height={500}
                    width={500}
                    src='/logo/logo-umb-white.png'
                    className='w-[5rem]'
                />

                <p className='text-sm'>Copyright © {new Date().getFullYear()} All rights reserved | Admisi dan Promosi Universitas Mercu Buana</p>
            </div>
        </div>
    )
}
