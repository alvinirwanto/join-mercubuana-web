import React from 'react'

import {BiPalette} from 'react-icons/bi'

import FdskImg from '../../public/fdsk.jpeg'
import ProdiItem from '../../components/ProdiItem'

const FDSK = () => {
    return (
        <div className='w-full'>
            <div className='flex justify-between items-center'>
                <h2 className='text-5xl font-semibold text-primary-blue'>
                    Fakultas Desain <br /> & Seni Kreatif <br /> (FDSK)
                </h2>
                <BiPalette className='text-8xl text-primary-blue' />
            </div>
            <div className='flex flex-col gap-[5rem] mt-[5rem]'>
                <ProdiItem
                    title='Desain Produk'
                    content='Berbagai perusahaan akan terus meningkatkan inovasi produknya, salah satunya dengan memberikan sentuhan kreatif pada desain produk yang berpotensi dapat menunjang penjualan. Universitas Mercu Buana memiliki program studi desain produk yang telah terakreditasi A. Program studi ini membahas tentang desain yang diproduksi secara massal mulai dari perencanaan, perancangan, manajemen, hingga marketing dalam diskusi IPTEKS dan budaya (kearifan lokal).'
                    image={FdskImg}
                />

                <ProdiItem
                    title='Desain Interior'
                    content='Program studi desain interior telah terakreditasi B. Untuk Anda yang telah bekerja dalam bidang desain interior, tingkatkan karir Anda sekarang juga bersama UMB. Program studi interior mempelajari perencanaan dan perancangan ruang dalam suatu bangunan mulai tahap perencanaan, perancangan, manajemen, hingga marketing dalam diskusi IPTEKS dan budaya (kearifan lokal).'
                    image={FdskImg}
                    imgPosition='right'
                />

                <ProdiItem
                    title='Desain Komunikasi Visual (DKV)'
                    content='Bidang desain komunikasi visual selalu dibutuhkan oleh setiap perusahaan bahkan lowongan bidang DKV cenderung meningkat dari tahun ke tahun. Tingkatkan kemampuan desain Anda dengan bergabung bersama DKV UMB. Program studi desain komunikasi visual mengajarkan keterampilan komunikasi yang kuat di berbagai media digital, termasuk audio visual, desain cetak, serta motion graphic.'
                    image={FdskImg}
                />
            </div>
        </div>
    )
}

export default FDSK