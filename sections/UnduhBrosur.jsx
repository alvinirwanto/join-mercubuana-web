import React from "react";
import { HiDownload } from "react-icons/hi";

const UnduhBrosur = () => {
  return (
    <>
      <div className="bg-primary-blue text-left font-bold px-11 py-24">
        <h2 className="text-white text-2xl">
          Ingin Dapatkan Informasi Lebih Lengkap Tentang Kelas Karyawan<br></br>
          Universitas Mercu Buana?
        </h2>
        <br></br>
        <button className="flex justify-center items-center gap-2 px-4 py-2 rounded-md hover:scale-[1.15] duration-200 bg-sky-300 text-white">
          <HiDownload />
          <p>Unduh Brosur</p>
        </button>
      </div>
    </>
  );
};

export default UnduhBrosur;
