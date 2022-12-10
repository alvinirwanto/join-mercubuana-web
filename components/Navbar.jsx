import { useState, useEffect } from 'react'
import Image from 'next/image'

import { HiDownload } from 'react-icons/hi'


const Navbar = () => {

    // Add shadow to the navbar when scroll
    const [shadowNav, setShadowNav] = useState(false)

    const addShadowNav = () => {
        window.scrollY >= 80 ? setShadowNav(true) : setShadowNav(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', addShadowNav)
        return () => window.removeEventListener('scroll', addShadowNav);
    })


    return (
        <div className={`${shadowNav ? 'shadow-md' : 'shadow-none'} bg-white w-full primary-padding hidden xl:flex justify-between items-center sticky top-0 z-[100]`}>

            <Image
                src='/logo-umb-full.png'
                width={shadowNav ? 80 : 120}
                height={shadowNav ? 80 : 120}
                className='duration-500'
            />


            <div className='flex justify-center items-center gap-[3rem] text-base font-medium text-primary-blue'>
                <div>
                    Home
                </div>
                <div>
                    Fakultas
                </div>
                <div>
                    Tentang UMB
                </div>
                <div>
                    Alur Penerimaan
                </div>
                <div>
                    FAQ
                </div>
                <button
                    className='flex justify-center items-center gap-2 px-4 py-2 rounded-sm duration-200 border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white'
                >
                    <HiDownload />
                    <p>Unduh Brosur</p>
                </button>
            </div>
        </div>
    )
}

export default Navbar