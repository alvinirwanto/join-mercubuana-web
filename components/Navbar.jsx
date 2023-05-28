import { useState, useEffect } from 'react'
import { Link } from 'react-scroll';

import Image from 'next/image'

import { HiDownload, HiOutlineMenu } from 'react-icons/hi'
import { BiX } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import ModalBrosur from './ModalBrosur';
import { useBrosurStore } from '../store/state';


const Navbar = () => {

    // Add shadow to the navbar when scroll
    const [shadowNav, setShadowNav] = useState(false)

    const [showNav, setShowNav] = useState(false)

    const { brosur, showBrosur } = useBrosurStore(state => state)

    // const [showBrosur, setShowBrosur] = useState(false)

    const addShadowNav = () => {
        window.scrollY >= 80 ? setShadowNav(true) : setShadowNav(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', addShadowNav)
        return () => window.removeEventListener('scroll', addShadowNav);
    })


    return (
        <>
            <nav className={`${shadowNav ? 'shadow-md bg-white duration-300' : 'shadow-none bg-gradient-to-b from-[#000000bc] via-[#0000006c] to-[#113dec01] duration-300'} duration-300 w-full primary-padding flex justify-between items-center fixed top-0 z-[100]`}>

                <Image
                    src={shadowNav ? '/logo/logo-umb-full.png' : '/logo/logo-umb-white.png'}
                    alt='logo'
                    width={500}
                    height={500}
                    className={`duration-500 ${shadowNav ? 'w-[4rem]' : 'w-[5rem]'}`}
                />


                <div className={`flex justify-center items-center gap-6 xl:gap-[3rem] text-base font-medium ${shadowNav ? 'text-primary-blue' : 'text-white'}`}>
                    <div className='hidden xl:block cursor-pointer'>
                        <Link to='home' >
                            Home
                        </Link>
                    </div>
                    <div className='hidden xl:block cursor-pointer'>
                        <Link to='fakultas' >
                            Fakultas
                        </Link>
                    </div>
                    <div className='hidden xl:block cursor-pointer'>
                        <Link to='tentang' offset={-110} >
                            Tentang UMB
                        </Link>
                    </div>
                    <div className='hidden xl:block cursor-pointer'>
                        <Link to='alur-penerimaan' offset={-100} >
                            Alur Penerimaan
                        </Link>
                    </div>
                    <div className='hidden xl:block cursor-pointer'>
                        <Link to='faq' offset={-100} >
                            FAQ
                        </Link>
                    </div>

                    <button
                        onClick={() => showBrosur()}
                        className={`flex justify-center items-center text-sm xl:text-lg font-semibold gap-2 px-4 py-3 rounded-md duration-200 ${shadowNav ? 'bg-primary-blue text-white hover:opacity-80' : 'bg-white text-primary-blue hover:bg-primary-blue hover:text-white'} `}
                    >
                        <HiDownload />
                        <p>Unduh Brosur</p>
                    </button>

                    <HiOutlineMenu onClick={() => setShowNav(true)} className='xl:hidden text-3xl' />
                </div>
            </nav>


            {/* ======= Mobile and Tablet ======== */}
            <div className={`${showNav ? 'block' : 'hidden'} xl:hidden z-[500] bg-[#fffffff2] text-black rounded-md w-screen h-screen fixed py-10 px-6 md:px-9`}>
                <div className='flex justify-end text-black mb-8'>
                    <BiX onClick={() => setShowNav(false)} className='text-4xl' />
                </div>
                <ul className='text-2xl md:text-4xl font-semibold flex flex-col justify-center h-full gap-8'>
                    <li>
                        <Link to='home' onClick={() => setShowNav(false)} >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='fakultas' onClick={() => setShowNav(false)} >
                            Fakultas
                        </Link>
                    </li>
                    <li>
                        <Link to='tentang' offset={-110} onClick={() => setShowNav(false)} >
                            Tentang UMB
                        </Link>
                    </li>
                    <li>
                        <Link to='alur-penerimaan' offset={-100} onClick={() => setShowNav(false)} >
                            Alur Penerimaan
                        </Link>
                    </li>
                    <li>
                        <Link to='faq' offset={-100} onClick={() => setShowNav(false)} >
                            FAQ
                        </Link>
                    </li>
                </ul>
            </div>

            <a
                href='https://wa.me/6281513113331'
                target='_blank'
                className="z-[400] fixed bottom-6 xl:bottom-10 right-4 xl:right-10 bg-[#23C467] text-white text-4xl p-4 rounded-full"
            >
                <BsWhatsapp />
            </a>

            {
                brosur && <ModalBrosur />
            }
        </>
    )
}

export default Navbar