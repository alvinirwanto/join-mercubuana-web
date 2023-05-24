import { useState, useEffect } from 'react'
import { Link } from 'react-scroll';

import Image from 'next/image'

import { HiDownload, HiOutlineMenu } from 'react-icons/hi'
import { BiX } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'


const Navbar = () => {

    // Add shadow to the navbar when scroll
    const [shadowNav, setShadowNav] = useState(false)

    const [showNav, setShowNav] = useState(false)

    const [showBrosur, setShowBrosur] = useState(false)

    const addShadowNav = () => {
        window.scrollY >= 80 ? setShadowNav(true) : setShadowNav(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', addShadowNav)
        return () => window.removeEventListener('scroll', addShadowNav);
    })


    return (
        <>
            <nav className={`${shadowNav ? 'shadow-md bg-white duration-300' : 'shadow-none bg-transparent duration-300'} duration-300 w-full primary-padding flex justify-between items-center fixed top-0 z-[100]`}>

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
                        onClick={() => setShowBrosur(true)}
                        className={`flex justify-center items-center text-sm xl:text-base gap-2 px-4 py-2 rounded-md duration-200 border-2 ${shadowNav ? 'border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white' : 'border-white text-white hover:bg-white hover:text-primary-blue'} `}
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

            {/* ======== Unduh Brosur ======= */}
            <div className={`w-full h-full bg-[#00000092] fixed z-[300] ${showBrosur ? 'grid' : 'hidden'} place-items-center`}>
                <div className='bg-white w-[95%] md:w-[80%] xl:w-[55%] py-8 px-6 md:px-8 xl:px-10 rounded-md'>
                    <div className='flex justify-end text-black mb-8'>
                        <BiX onClick={() => setShowBrosur(false)} className='text-3xl cursor-pointer' />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-8">
                        <div className='col-start-1 col-end-8 md:col-end-6 grid-rows-1 row-start-1 flex flex-col gap-8 z-[2]'>
                            <img
                                src='/logo/logo-umb-full.png'
                                // width={500}
                                // height={500}
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

                            <img
                                src='/brosur.png'
                                className='z-[1] w-[90%] object-contain shadow-md rotate-6 border-[1px]'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar