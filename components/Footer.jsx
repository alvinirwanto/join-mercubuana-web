import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='bg-[#E5E7E9] w-full px-4 xl:px-[3rem] py-[5rem] flex flex-col gap-10 items-center'>

                <Image
                    src="/footer.png"
                    height={700}
                    width={700}
                    alt="logo"
                    className='xl:max-w-[1400px]'
                />
            </div>

            <div className='flex flex-col text-white items-center bg-primary-blue w-full py-4 px-4 text-center'>
                <Image
                    height={500}
                    width={500}
                    src='/logo/logo-umb-white.png'
                    className='w-[5rem]'
                    alt='logo'
                />

                <p className='text-sm'>Copyright © {new Date().getFullYear()} All rights reserved | Admisi dan Promosi Universitas Mercu Buana</p>
            </div>
        </>
    )
}
