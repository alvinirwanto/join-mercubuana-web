import React from "react";

import { HiOutlineBadgeCheck } from 'react-icons/hi'
import { BiTimeFive } from 'react-icons/bi'
import { TbReportMoney } from 'react-icons/tb'

import Image from "next/image";

import IconAkreditasi from '../public/award.svg'
import IconHour from '../public/clock-nine.svg'
import IconBill from '../public/bill.svg'
import TitleSection from "../components/TitleSection";

const MengapaMemilihKK = () => {
    return (
        <div className="w-full py-[10rem]">
            <TitleSection
                subtitle='Mengapa Memilih Kelas Karyawan'
                title='Universitas Mercu Buana'
            />
            <div className="px-[5rem] pt-[5rem] grid grid-cols-3">
                <div className="grid grid-cols-[1fr_5fr] gap-4 p-4">
                    <Image src={IconAkreditasi} className="w-[5rem] aspect-square self-start" alt="icon" />
                    <div className="flex flex-col gap-4 mt-2">
                        <h2 className="font-semibold text-xl text-primary-blue">Terakreditasi BAN-PT</h2>
                        <p>Seluruh program studi unggulan di kelas karyawan Universitas Mercu Buana telah terakreditasi BAN-PT</p>
                    </div>
                </div>
                <div className="grid grid-cols-[1fr_5fr] gap-4 p-4">
                    <Image src={IconBill} className="w-[4rem] aspect-square self-start" alt="icon" />
                    <div className="flex flex-col gap-4 mt-2">
                        <h2 className="font-semibold text-xl text-primary-blue">Biaya Kuliah Sesuai Kualitas</h2>
                        <p>Biaya perkuliahan sesuai dengan kualitas yang dirancang sama dengan program reguler dengan kemudahan skema pembayaran yang mudah</p>
                    </div>
                </div>
                <div className="grid grid-cols-[1fr_5fr] gap-4 p-4">
                    <Image src={IconHour} className="w-[4rem] aspect-square self-start" alt="icon" />
                    <div className="flex flex-col gap-4 mt-2">
                        <h2 className="font-semibold text-xl text-primary-blue">Waktu Kuliah Fleksibel</h2>
                        <p>Di kelas karyawan, Anda dapat memilih waktu kuliah yang dapat disesuaikan dengan pekerjaan Anda</p>
                    </div>
                </div>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-3 pt-9 ">
                <div className="font-semibold bg-primary-blue px-[5rem] py-[3rem] flex flex-col items-center gap-6 text-white">
                    <HiOutlineBadgeCheck className="text-7xl" />
                    <h3 className="text-2xl">
                        Terakreditasi BAN-PT
                    </h3>
                    <p>
                        Seluruh program studi unggulan di kelas karyawan Universitas Mercu
                        Buana telah terakreditasi BAN-PT
                    </p>
                </div>
                <div className="font-semibold bg-secondary-blue px-[5rem] py-[3rem] flex flex-col items-center gap-6 text-white">
                    <HiOutlineBadgeCheck className="text-7xl" />
                    <h3 className="text-2xl">
                        Biaya Kuliah Sesuai Kualitas
                    </h3>
                    <p>
                        Biaya perkuliahan sesuai dengan kualitas yang dirancang sama dengan program reguler dengan kemudahan skema pembayaran yang mudah
                    </p>
                </div>
                <div className="font-semibold bg-primary-green px-[5rem] py-[3rem] flex flex-col items-center gap-6 text-white">
                    <HiOutlineBadgeCheck className="text-7xl" />
                    <h3 className="text-2xl">
                        Waktu Kuliah Fleksibel
                    </h3>
                    <p>
                        Di kelas karyawan, Anda dapat memilih waktu kuliah yang dapat disesuaikan dengan pekerjaan Anda
                    </p>
                </div>

            </div> */}
        </div>
    );
};

export default MengapaMemilihKK;
