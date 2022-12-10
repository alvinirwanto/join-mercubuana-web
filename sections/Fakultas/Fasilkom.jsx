import React from 'react'
import ProdiItem from '../../components/ProdiItem'

import {BiLaptop} from 'react-icons/bi'

import FasilkomImg from '../../public/fasilkom.jpg'

const Fasilkom = () => {
    return (
        <div className='w-full'>
            <div className='flex justify-between items-center'>
                <h2 className='text-5xl font-semibold text-primary-blue'>
                    Fakultas Ilmu <br /> Komputer <br /> (Fasilkom)
                </h2>
                <BiLaptop className='text-8xl text-primary-blue' />
            </div>
            <div className='flex flex-col gap-[5rem] mt-[5rem]'>
                <ProdiItem
                    title='Informatika'
                    content='Program studi informatika yang telah terakreditasi A akan meningkatkan para profesional untuk menambah wawasan dan keterampilan para tenaga kerja di bidang informatika. Program studi ini merancang dan mengimplementasikan perangkat lunak dan sistem basis data untuk kebutuhan perekaman data transaksi perusahaan berskala kecil, menengah, dan besar dengan menggunakan produk sistem manajemen basis data setingkat kalangan korporasi atau perusahaan besar.'
                    image={FasilkomImg}
                />

                <ProdiItem
                    title='Sistem Informasi'
                    content='Program studi sistem informasi telah terakreditasi B. Segala perusahaan tentu saja membutuhkan tenaga ahli dalam bidang sistem informasi. Maka dari itu tingkatkan pengetahuan dan wawasan mengenai sistem informasi agar menjadi tenaga ahli yang andal. Program studi ini merancang dan mengimplementasikan perangkat lunak dan sistem basis data untuk kebutuhan perekaman data transaksi perusahaan berskala kecil, menengah, dan besar dengan menggunakan produk sistem manajemen basis data setingkat kalangan korporasi atau perusahaan besar.'
                    image={FasilkomImg}
                    imgPosition='right'
                />

            </div>
        </div>
    )
}

export default Fasilkom