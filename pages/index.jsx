import dynamic from 'next/dynamic'
import Heropage from "../sections/Heropage";
import { useEffect, useState } from "react";


const SelamatDatang = dynamic(() => import('../sections/SelamatDatang'), {
    ssr: false
})

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

const Fakultas = dynamic(() => import('../sections/Fakultas'), {
    ssr: false
})

const Footer = dynamic(() => import('../components/Footer'), {
    ssr: false
})


import { ProgressBar } from 'react-loader-spinner'
import ButtonDaftar from "../components/ButtonDaftar";
import Layout from '../components/Layout';

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

                    :

                    <Layout
                        title='Home'
                    >
                        <Heropage />
                        <SelamatDatang />
                        <MengapaMemilihKK />
                        <UnduhBrosur />
                        <TentangUMB />
                        <Fakultas />
                        <ButtonDaftar />
                        <Review />
                        <AlurPenerimaan />
                        <ButtonDaftar />
                        <FAQ />
                    </Layout>
            }
        </>
    );
}
