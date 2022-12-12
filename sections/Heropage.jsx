import React from 'react'
import Image from 'next/image'

import HeroBg from '../public/umb.png'
import HeroImg from '../public/student.png'

const Heropage = () => {
    return (
        <div className='w-full md:h-[calc(100vh_-_7.5rem)] overflow-hidden primary-padding'>
            <div className='grid grid-cols-1 md:grid-cols-[1.3fr_1fr] md:gap-4 xl:gap-[5rem] h-full px-4'>
                <div className='flex flex-col gap-4 text-primary-blue justify-center xl:pl-[5rem] md:overflow-hidden w-full h-full relative'>
                    <Image
                        src={HeroBg}
                        alt='Brand logo'
                        className='object-contain h-full w-[90%] md:w-full opacity-50'
                    />

                    {/* Mobile */}
                    <Image
                        src='/student.png'
                        width={500}
                        height={500}
                        alt='Brand logo'
                        className='object-contain h-full w-full md:hidden absolute'
                    />

                    <Image
                        src={HeroImg}
                        alt='image'
                        sizes="100%"
                        className='object-contain px-[3rem] hidden md:block md:absolute '
                    />
                </div>

                <div className='bg-blue w-full h-full xl:px-8 xl:pr-[5rem] flex flex-col gap-8 justify-center'>
                    <div>
                        <h1 className='text-lg font-medium text-primary-green'>Tingkatkan Karirmu Bersama <br /> Kelas Karyawan UMB</h1>
                        <h2 className='text-4xl font-bold text-primary-blue'>Daftar Sekarang Juga!</h2>
                    </div>

                    <div className='bg-white flex flex-col justify-center gap-4'>
                        <p className='font-medium text-base text-secondary-blue'>
                            Isi Data Diri Anda Di sini dan Dapatkan Gratis Biaya Formulir Pendaftaran Hingga Potongan Biaya Kuliah Jutaan Rupiah
                        </p>
                        <form className='flex flex-col justify-center gap-5 bg-[#00326f06] border-2 border-[#00326f0b] px-6 py-8 rounded-sm'>

                            <input type="text" placeholder='Nama Lengkap' />
                            <input type="text" placeholder='E-mail' />
                            <input type="text" placeholder='No. Hp' />
                            <button className='xl:self-start bg-primary-blue text-white py-3 px-[4rem] rounded-sm'>Kirim</button>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Heropage