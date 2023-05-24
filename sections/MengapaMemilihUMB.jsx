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
        <div className="primary-padding mt-[5rem]">
            <div className="relative h-[130vh] md:h-[110vh] rounded-lg overflow-clip">
                <Image
                    src={campusImg}
                    className='w-full object-cover'
                />

                <div className="h-full w-full z-50 absolute top-0 bg-gradient-to-b from-[#000000bc] via-[#00000076] to-[#000000aa] text-white p-4 md:p-[2rem] xl:p-[4rem] flex flex-col gap-[3rem] justify-center">
                    <div className="max-w-[700px]">
                        <h4 className="text-2xl md:text-4xl font-semibold">Mengapa Memilih Kelas Karyawan Universitas Mercu Buana Sebagai Tempat Kuliah yang Tepat dan Terbaik?</h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {
                            listOfReason.map((item, i) => (
                                <div key={i} className="p-4 md:p-8 rounded-md text-black bg-[#fffffff3] flex flex-col justify-center gap-6 items-center relative">
                                    <span className="absolute -top-4 -left-4 bg-primary-blue shadow-lg rounded-full h-9 w-9 flex items-center justify-center text-white">{i + 1}</span>
                                    <p className="text-lg text-center">{item.reason}</p>
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
