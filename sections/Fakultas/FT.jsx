import React from 'react'
import ProdiItem from '../../components/ProdiItem'

import { GiGears } from 'react-icons/gi'

import FTImg from '../../public/ft.jpeg'

const FT = () => {
    return (
        <div className='w-full'>
            <div className='flex justify-between items-center'>
                <h2 className='text-5xl font-semibold text-primary-blue'>
                    Fakultas Teknik <br /> (FT)
                </h2>
                <GiGears className='text-8xl text-primary-blue' />
            </div>
            <div className='flex flex-col gap-[5rem] mt-[5rem]'>
                <ProdiItem
                    title='Teknik Sipil'
                    content='Program studi teknik sipil telah terakreditasi A. Untuk Anda yang telah berkarir dalam bidang sipil, tingkatkan karir Anda bersama teknik sipil UMB. Program studi ini mempelajari perencanaan, perancangan, konstruktor, dan manajemen dan berbagai pekerjaan teknik sipil.'
                    image={FTImg}
                />

                <ProdiItem
                    title='Teknik Arsitektur'
                    content='Program studi teknik arsitektur telah terakreditasi B. Tingkatkan karir profesional Anda dengan program studi teknik arsitektur. Program studi teknik arsitektur mempelajari dan merancang berbagai bangungan dengan beragam fungsinya seperti gedung perkantoran, rumah sakit, stadion, rumah tinggal, dan bangunan fungsi lain.'
                    image={FTImg}
                    imgPosition='right'
                />

                <ProdiItem
                    title='Teknik Mesin'
                    content='Program studi teknik mesin telah terakreditasi A. Karir Anda akan semakin profesional dengan bergabung bersama program studi teknik mesin UMB. Program studi teknik mesin diarahkan pada penguasaan bidang teknik yang mempunyai peran penting dalam proses industrialisasi seperti alat penggerak, alat konstruksi dan mesin perkakas pabrik.'
                    image={FTImg}
                />

                <ProdiItem
                    title='Teknik Elektro'
                    content='Program studi teknik elektro telah terakreditasi A. Diarahkan untuk meningkatkan keterampilan dalam bidang elektro mahasiswa agar lebih profesional di lingkup perusahaan. Teknik elektro mengarahkan pada kemampuan untuk menangani penelitian, pengembangan, dan pembangunan industri elektronika telekomunikasi dan tenaga listrik.'
                    image={FTImg}
                    imgPosition='right'
                />

                <ProdiItem
                    title='Teknik Industri'
                    content='Program studi teknik industri telah terakreditasi B. Diarahkan untuk meningkatkan wawasan dan keterampilan teknik industri para mahasiswa kelas karyawan agar semakin profesional dalam perusahaan. Teknik industri mempelajari mengenai perancangan, perbaikan, dan instalasi suatu sistem yang mengintegrasikan manusia, bahan, alat, informasi, dan energi untuk memproduksi barang atau jasa secara efisien dan efektif.'
                    image={FTImg}
                />
            </div>
        </div>
    )
}

export default FT