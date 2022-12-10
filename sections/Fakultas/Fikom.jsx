import React from 'react'
import ProdiItem from '../../components/ProdiItem'

import { BiPodcast } from 'react-icons/bi'

import FikomImg from '../../public/fikom.jpeg'


const Fikom = () => {
    return (
        <div className='w-full'>
            <div className='flex justify-between items-center'>
                <h2 className='text-5xl font-semibold text-primary-blue'>
                    Fakultas Ilmu <br /> Komunikasi <br /> (Fasilkom)
                </h2>
                <BiPodcast className='text-8xl text-primary-blue' />
            </div>
            <div className='flex flex-col gap-[5rem] mt-[5rem]'>
                <ProdiItem
                    title='Broadcasting (Penyiaran)'
                    content='Program studi ini telah terakreditasi A dan mempelajari teori serta praktik kerja yang berkaitan dengan penyiaran dalam menciptakan program untuk disiarkan di radio maupun televisi. Melalui program studi broadcasting dapat meningkatkan pengetahuan serta keterampilan para tenaga kerja agar lebih profesional.'
                    image={FikomImg}
                />

                <ProdiItem
                    title='Public Relations (Hubungan Masyarakat)'
                    content='Program studi Public Relations telah terakreditasi A. Guna meningkatkan karir Anda lebih profesional dalam bidang PR. Program studi Public Relations akan mempelajari berbagai wawasan dan strategi program kehumasan, mengimplementasikan program dan kegiatan kehumasan serta melakukan monitoring dan evaluasi program kehumasan dalam membangun dan mempertahankan hubungan baik antara institusi/organisasi dengan pemangku kepentingan.'
                    image={FikomImg}
                    imgPosition='right'
                />

                <ProdiItem
                    title='Advertising & Marketing Communication'
                    content='Program studi Advertising & Marketing Communication telah terakreditasi A. Dengan belajar di program studi ini karir Anda dalam bidang periklanan dan marketing communication menjadi lebih andal dan profesional. Program studi ini mempelajari tentang digital marketing dan hal-hal yang berkaitan dengan industri marcomm untuk menciptakan strategi sebagai solusi permasalahan klien dalam menentukan pesan utama kampanye pemasaran.'
                    image={FikomImg}
                />

                <ProdiItem
                    title='Digital Communication'
                    content='Program studi ini telah terakreditasi A. Guna menjawab tantangan era digital yang semakin berkembang, program studi Digital Communication ada untuk mempersiapkan para mahasiswa/i dalam menghadapi era digitalisasi secara komprehensif, kreatif, inovatif, dan out of the box. Jurusan ini mempelajari tentang Digital Media Planning dan juga Social Media Specialities.'
                    image={FikomImg}
                    imgPosition='right'
                />

            </div>
        </div>
    )
}

export default Fikom