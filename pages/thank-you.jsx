import React from 'react'

import { LuCheckCircle2 } from 'react-icons/lu';
import { BsWhatsapp } from 'react-icons/bs'

import Link from 'next/link';
import Head from 'next/head';

export default function ThankYouPage() {
    return (
        <>
            <Head>
                <title>Thank You</title>
                <meta
                    name="description"
                    content='Universitas Mercu Buana, Pilihan Terbaik PTS di Indonesia. Daftarkan Diri Anda di Sini dan Dapatkan Informasi serta cicilan biaya kuliah hingga 48 kali!'
                />
                <meta name="keywords" content="join universitas mercu buana, umb, universitas terbaik jakarta, univ swasta, kampus swasta terbaik, pts akreditasi unggul, mahasiswa berprestasi, gabung umb, universitas mercu buana meruya, kelas keryawan" />
                <link rel="icon" href="/logo/logo-umb.png" />

                {/* <!-- Google tag (gtag.js) --> */}
                {/* <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=AW-949610150"
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){
                                dataLayer.push(arguments);
                            }
                            gtag('js', new Date());
                        
                            gtag('config', 'AW-949610150');
                        `,
                    }}
                /> */}
            </Head>

            <div className='min-h-screen flex flex-col gap-4 justify-center items-center -mt-[3rem]'>
                <LuCheckCircle2 className='text-green-400 text-9xl mb-9 animate-bounce' />

                <div className='text-center'>
                    <h2 className='font-bold text-3xl mb-5'>Terima kasih telah mengisi data diri kamu!</h2>
                    <p>Mohon menunggu, tim kami akan segera menghubungi kakak.</p>

                    <p>Jika ada pertanyaan lebih lanjut, silahkan menghubungi WhatsApp Kami di bawah ini</p>
                </div>

                <div className='mt-8 flex gap-8'>
                    <Link
                        href='/'
                        className='text-[#00326f] px-6 py-3 rounded font-semibold hover:underline'
                    >
                        Kembali
                    </Link>

                    <Link
                        href='https://wa.me/6281513113331'
                        target='_blank'
                        className='bg-[#23C467] hover:bg-[#30a35e] duration-200 text-white px-6 py-3 flex justify-center items-center gap-3 rounded font-semibold'
                    >
                        <BsWhatsapp className='text-white text-xl' />
                        <span>Hubungi Kami</span>
                    </Link>
                </div>
            </div>
        </>
    )
}
