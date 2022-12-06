import React from 'react'
import Image from 'next/image'

// import HeroImg from '../public/hero-img.jpeg'

const Heropage = () => {
    return (
        <div className='w-full h-[calc(100vh_-_8rem)] primary-padding'>
            <div className='grid grid-cols-[1.2fr_2fr] gap-[5rem] h-full'>
                <div className='flex flex-col gap-4 text-primary-blue justify-center'>
                    <h1 className='text-2xl font-semibold'>Tingkatkan Karirmu Bersama <br /> Kelas Karyawan UMB</h1>
                    <h2 className='text-6xl font-bold'>Daftar Sekarang Juga!</h2>
                </div>
                <div className='flex justify-start h-full'>
                    <div className='bg-black h-[90%]'>
                        <h1>djksd</h1>
                    </div>
                </div>
            </div>
            {/* <div className='bg-gradient-to-b from-[#000000b8] to-[#00000093] h-screen w-full absolute top-0'>

                <div className='w-full h-full mt-9 grid grid-cols-[1.5fr_1fr] gap-[3rem] primary-padding justify-center items-center'>
                    <div className='flex flex-col gap-4 text-white'>
                        <h1 className='text-2xl font-semibold'>Tingkatkan Karirmu Bersama <br /> Kelas Karyawan UMB</h1>
                        <h2 className='text-6xl font-bold'>Daftar Sekarang Juga!</h2>
                    </div>
                    <div className='bg-white shadow-md py-[4rem] px-[3rem] rounded-md flex flex-col gap-9'>
                        <p className='font-semibold text-xl text-primary-blue'>
                            Isi Data Diri Anda Di sini dan Dapatkan Gratis Biaya Formulir Pendaftaran Hingga Potongan Biaya Kuliah Jutaan Rupiah
                        </p>
                        <form className='flex flex-col justify-start gap-8'>
                            <input type="text" placeholder='Nama Lengkap' />
                            <input type="text" placeholder='E-mail' />
                            <input type="text" placeholder='No. Hp' />
                            <div className='flex items-start'>
                            <button className='bg-primary-blue text-white py-3 px-[4rem] rounded-md'>Kirim</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
             <Image
                src='/hero-img.jpeg'
                alt='Brand logo'
                width={2000}
                height={2000}
                className='object-cover h-screen'
            /> */}
        </div>
    )
}

export default Heropage