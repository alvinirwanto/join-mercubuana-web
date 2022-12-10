import React from 'react'
import ProdiItem from '../../components/ProdiItem'

import { BiLineChart } from 'react-icons/bi'

import FEBImg from '../../public/feb.jpeg'

const FEB = () => {
    return (
        <div className='w-full'>
        <div className='flex justify-between items-center'>
            <h2 className='text-5xl font-semibold text-primary-blue'>
                Fakultas Ekonomi <br /> & Bisnis <br /> (FEB)
            </h2>
            <BiLineChart className='text-8xl text-primary-blue' />
        </div>
        <div className='flex flex-col gap-[5rem] mt-[5rem]'>
            <ProdiItem
                title='Manajemen'
                content='Program studi manajemen telah terakreditasi A. Tingkatkan karir Anda dengan menambah keterampilan dan pengetahuan di bidang manajemen untuk menjadi tenaga ahli yang lebih profesional. Program studi ini mempelajari pengelolaan bisnis mulai dari operasional, pemasaran, strategi, hingga keuangan.'
                image={FEBImg}
            />

            <ProdiItem
                title='D3 Manajemen'
                content='Program studi D3 Manajemen telah terakreditasi A. Bidang manajemen tentu saja banyak diminati. Tingkatkan karir Anda dengan mempelajari berbagai konsentrasi ilmu manajemen seperti bidang ritel, MICE (Meetings, Incentives, Conferences, Exhibitions), dan masih banyak lagi.'
                image={FEBImg}
                imgPosition='right'
            />

            <ProdiItem
                title='Akuntansi'
                content='Program studi ini telah terakreditasi A. Melalui program studi Akuntansi mahasiswa akan terfokus untuk mempelajari berbagai konsentrasi ilmu di bidang akuntansi seperti perancangan sistem informasi akuntansi, auditing, akuntansi keuangan, akuntansi perpajakan, akuntansi syariah, dan masih banyak lagi. Program studi ini akan mempersiapkan lulusan yang unggul dan paham akan bidang akuntansi.'
                image={FEBImg}
            />

            <ProdiItem
                title='D3 Akuntansi'
                content='Program studi D3 Akuntansi telah terakreditasi A. Melalui program studi ini mahasiswa dapat meningkatkan kemampuannya dalam bidang akuntansi perpajakan, akuntansi terkait industri, akuntansi untuk usaha kecil dan menengah, serta masih banyak lagi. Program studi D3 Akuntansi akan mempersiapkan lulusan yang unggul dan paham akan bidang akuntansi.'
                image={FEBImg}
                imgPosition='right'
            />
        </div>
    </div>
    )
}

export default FEB