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
        <nav className={`${shadowNav ? 'shadow-md bg-white duration-300' : 'shadow-none bg-transparent duration-300'} duration-300 w-full primary-padding hidden xl:flex justify-between items-center fixed top-0 z-[100]`}>

            <Image
                src={shadowNav? '/logo/logo-umb-full.png' : '/logo/logo-umb-white.png'}
                alt='logo'
                width={shadowNav ? 80 : 120}
                height={shadowNav ? 80 : 120}
                className='duration-500'
            />


            <div className={`flex justify-center items-center gap-[3rem] text-base font-medium ${shadowNav ? 'text-primary-blue' : 'text-white'}`}>
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
                    className={`flex justify-center items-center gap-2 px-4 py-2 rounded-md duration-200 border-2 ${shadowNav? 'border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white' : 'border-white text-white hover:bg-white hover:text-primary-blue'} `}
                >
                    <HiDownload />
                    <p>Unduh Brosur</p>
                </button>
            </div>
        </nav>
    )
}

export default Navbar