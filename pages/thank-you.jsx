import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../public/lottie/success.json';
import Link from 'next/link';
import Head from 'next/head';

export default function ThankYouPage() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            // preserveAspectRatio: "xMidYMid slice"
        }
    };

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
            </Head>
            <div className='min-h-screen flex flex-col gap-4 justify-center items-center -mt-[3rem]'>
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={400}
                />

                <div className='-mt-[3rem] text-center'>
                    <h2 className='font-bold text-3xl mb-5'>Terima kasih telah mengisi Formulir Pendaftaran</h2>
                    <p>Silahkan menunggu informasi lebih lanjut</p>

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
                        className='bg-[#00326f] hover:bg-[#23C467] duration-200 text-white px-6 py-3 rounded font-semibold'
                    >
                        Hubungi Kami
                    </Link>
                </div>
            </div>
        </>
    )
}
