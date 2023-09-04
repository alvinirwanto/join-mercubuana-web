import Image from 'next/image'
import React from 'react'

export default function SelamatDatang() {
    return (
        <div className="w-full primary-padding pt-[10rem] px-4 md:px-0">
            <div className='xl:max-w-[1100px] mx-auto flex flex-col gap-6 text-lg'>
                <div className='flex flex-col items-center'>
                    <h2 className='text-3xl text-primary-blue text-center font-bold mb-8'>Selamat Datang di Universitas Mercu Buana</h2>
                    <div className='-mt-3 bg-primary-green h-[2px] w-[20%]' />
                </div>

                <div className='mt-8 text-justify flex flex-col gap-8'>
                    <p>Anda ingin meraih kesuksesan di dunia profesional? Universitas Mercu Buana adalah pilihan yang tepat untuk mewujudkannya. Kami menawarkan berbagai program sarjana dan pascasarjana yang dapat membantu Anda mengembangkan potensi dan mencapai impian karir Anda.</p>

                    <p>Apakah Anda seorang profesional yang bekerja dengan diploma? Ataukah Anda baru saja lulus diploma? Atau mungkin Anda seorang sarjana yang ingin melanjutkan studi ke jenjang Pascasarjana? Apapun situasi Anda, Kami memiliki program yang cocok untuk meningkatkan kemampuan Anda</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mt-4'>
                    <Image
                        src={'/selamat-datang/welcome-1.jpg'}
                        width={700}
                        height={700}
                        alt='selamat datang'
                        className='h-[38vh] object-cover rounded-sm'
                    />
                    <Image
                        src={'/selamat-datang/welcome-2.jpg'}
                        width={700}
                        height={700}
                        alt='selamat datang'
                        className='h-[38vh] object-cover rounded-sm'
                    />
                    <Image
                        src={'/selamat-datang/welcome-3.jpg'}
                        width={700}
                        height={700}
                        alt='selamat datang'
                        className='h-[38vh] object-cover rounded-sm'
                    />
                </div>
            </div>
        </div>
    )
}
