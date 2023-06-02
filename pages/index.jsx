import Head from "next/head";
import dynamic from 'next/dynamic'

import Navbar from "../components/Navbar";
import Heropage from "../sections/Heropage";
import { useEffect, useState } from "react";


const MengapaMemilihKK = dynamic(() => import('../sections/MengapaMemilihKK'), {
    ssr: false
})

const UnduhBrosur = dynamic(() => import('../sections/UnduhBrosur'), {
    ssr: false
})

const TentangUMB = dynamic(() => import('../sections/TentangUMB'), {
    ssr: false
})

const AlurPenerimaan = dynamic(() => import('../sections/AlurPenerimaan'), {
    ssr: false
})

const Review = dynamic(() => import('../sections/Review'), {
    ssr: false
})

const FAQ = dynamic(() => import('../sections/FAQ'), {
    ssr: false
})

const MengapaMemilihUMB = dynamic(() => import('../sections/MengapaMemilihUMB'), {
    ssr: false
})

const Fakultas = dynamic(() => import('../sections/Fakultas'), {
    ssr: false
})

const Footer = dynamic(() => import('../components/Footer'), {
    ssr: false
})


import { ProgressBar } from 'react-loader-spinner'

export default function Home() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            <Head>
                <title>Gabung UMB</title>
                <meta
                    name="description"
                    content='Universitas Mercu Buana, Pilihan Terbaik PTS di Indonesia. Daftarkan Diri Anda di Sini dan Dapatkan Informasi serta cicilan biaya kuliah hingga 48 kali!'
                />
                <meta name="keywords" content="join universitas mercu buana, umb, universitas terbaik jakarta, univ swasta, kampus swasta terbaik, pts akreditasi unggul, mahasiswa berprestasi, gabung umb, universitas mercu buana meruya, kelas keryawan" />
                <link rel="icon" href="/logo/logo-umb.png" />
            </Head>

            {
                isLoading
                    ? <div className="flex justify-center items-center w-full h-screen">
                        <ProgressBar
                            height="80"
                            width="200"
                            ariaLabel="progress-bar-loading"
                            wrapperStyle={{}}
                            wrapperClass="progress-bar-wrapper"
                            borderColor='#00326f'
                            barColor='#00326f'
                        />
                    </div>

                    : <div>
                        <Navbar />

                        <main>
                            <Heropage />
                            <MengapaMemilihKK />
                            <UnduhBrosur />
                            <Fakultas />
                            <TentangUMB />
                            <MengapaMemilihUMB />
                            <AlurPenerimaan />
                            <Review />
                            <FAQ />
                        </main>

                        <Footer />
                    </div>
            }
        </>
    );
}
