import React from 'react'
import Image from 'next/image'

import HeroBg from '../public/umb.png'
import HeroImg from '../public/student.png'

const Heropage = () => {
    return (
        <div className='w-full h-[calc(100vh_-_7.5rem)]'>
            <div className='grid grid-cols-[1.3fr_1fr] gap-[5rem] h-full'>
                <div className='flex flex-col gap-4 text-primary-blue justify-center pl-[5rem] overflow-hidden w-full relative'>
                    <Image
                        src={HeroBg}
                        alt='Brand logo'
                        className='object-contain h-full w-full'
                    />

                    <Image
                        src={HeroImg}
                        alt='image'
                        sizes="100%"
                        className='object-contain px-[3rem] absolute'
                    />
                </div>

                <div className='bg-blue w-full h-full pr-[5rem] flex flex-col gap-8 justify-center'>
                    <div>
                        <h1 className='text-lg font-semibold text-primary-blue'>Tingkatkan Karirmu Bersama <br /> Kelas Karyawan UMB</h1>
                        <h2 className='text-4xl font-bold text-primary-blue'>Daftar Sekarang Juga!</h2>
                    </div>

                    <div className='bg-white mr-[6rem] flex flex-col justify-center gap-4'>
                        <p className='font-semibold text-base text-secondary-blue'>
                            Isi Data Diri Anda Di sini dan Dapatkan Gratis Biaya Formulir Pendaftaran Hingga Potongan Biaya Kuliah Jutaan Rupiah
                        </p>
                        <form className='flex flex-col justify-center gap-5 bg-[#00326f06] border-2 border-[#00326f0b] px-6 py-8 rounded-sm'>

                            <input type="text" placeholder='Nama Lengkap' />
                            <input type="text" placeholder='E-mail' />
                            <input type="text" placeholder='No. Hp' />
                            <button className='bg-primary-blue text-white py-3 px-[4rem] rounded-md'>Kirim</button>

                        </form>
                    </div>
                </div>


                {/* <div class="grid grid-cols-12 gap-4 w-full">
                    <div class="col-start-1 col-span-11 row-start-1 h-[90%] bg-black z-10">
                        {/* <Image
                            src='/hero-img.jpeg'
                            alt='Brand logo'
                            width={2000}
                            height={2000}
                            className='object-cover h-full'
                        />

                    </div>
                    <div class="col-start-3 col-end-13 row-start-1 h-[50%] self-end bg-primary-blue">02</div>
                </div> */}
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
 */}
        </div>
    )
}

export default Heropage