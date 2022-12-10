import Image from "next/image";

import campusImg from '../public/campus.jpeg'

import { BiBadgeCheck } from 'react-icons/bi'

const listOfReason = [
    { reason: 'Program studi telah terakreditasi BAN PT' },
    { reason: 'Jadwal kuliah fleksibel dan dapat dipilih oleh mahasiswa' },
    { reason: 'Biaya kuliah sesuai kualitas dengan skema pembayaran yang mudah dan ringan' },
    { reason: 'Tenaga pengajar yang profesional dan berpengalaman di bidangnya' },
    { reason: 'Fasilitas lengkap dan nyaman untuk proses belajar mengajar' },
    { reason: 'Tersedia Career & Training Center untuk meningkatkan karir mahasiswa' },
]

const MengapaMemilihUMB = () => {
    return (
        <div className="primary-padding">
            <div className="relative">
                <Image
                    src={campusImg}
                    className='w-full object-cover'
                />

                <div className="h-full w-full z-50 absolute top-0 bg-gradient-to-b from-primary-blue via-[#00000076] to-[#000000aa] text-white p-[5rem] flex flex-col gap-[3rem] justify-center">
                    <div className="max-w-[700px]">
                        <h4 className="text-4xl font-semibold">Mengapa Memilih Kelas Karyawan Universitas Mercu Buana Sebagai Tempat Kuliah yang Tepat dan Terbaik?</h4>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        {
                            listOfReason.map((item, index) => (
                                <div key={index} className="p-8 backdrop-blur border-2 border-[#ffffff9c] text-white flex flex-col justify-center gap-6 items-center">
                                    <p className="text-xl text-center">{item.reason}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MengapaMemilihUMB;
