import { useState, useEffect } from 'react'
import Image from 'next/image'


const Navbar = () => {

    // Add shadow to the navbar when scroll
    const [shadowNav, setShadowNav] = useState(false)

    const addShadowNav = () => {
        window.scrollY >= 60 ? setShadowNav(true) : setShadowNav(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', addShadowNav)
        return () => window.removeEventListener('scroll', addShadowNav);
    })


    return (
        <div className={`${shadowNav ? 'shadow-md bg-white' : 'bg-transparent shadow-none'} w-full px-[5rem] py-2 flex justify-between items-center fixed top-0`}>

            <Image
                src='/logo-umb-full.png'
                width={shadowNav? 90 : 150}
                height={shadowNav? 90 : 150}
                className='duration-300'
            />




            <div className='flex gap-[3rem] text-base font-medium'>
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
            </div>
        </div>
    )
}

export default Navbar