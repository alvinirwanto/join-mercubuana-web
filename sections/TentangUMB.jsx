import React from "react";
import { CgShapeRhombus } from "react-icons/cg";

const TentangUMB = () => {
  return (
    <div className="w-full p-[5rem] bg-primary-blue">
      <h4 class="text-white text-center text-3xl font-semibold">
        Mengapa Memilih Kelas Karyawan<br></br> Universitas Mercu Buana Sebagai
        <br></br>
        Tempat Kuliah yang Tepat dan<br></br> Terbaik?
      </h4>

      <div className="grid grid-cols-2 pt-9 w-full">
        <div className="text-white font-semibold flex flex-col justify-between">
          <div className="grid grid-cols-[1fr_15fr] items-center gap-4">
            <CgShapeRhombus className="px-1 text-4xl" />
            <p className="text-2xl">Program studi telah terakreditasi BAN PT</p>
          </div>

          <div className="grid grid-cols-[1fr_15fr] items-center gap-4">
            <CgShapeRhombus className="px-1 text-4xl" />
            <p className="text-2xl">
              Jadwal kuliah fleksibel/dapat dipilih oleh mahasiswa
            </p>
          </div>

          <div className="grid grid-cols-[1fr_15fr] items-center gap-4">
            <CgShapeRhombus className="px-1 text-4xl" />
            <p className="text-2xl">
              Biaya studi sesuai kualitas dengan skema pembayaran yang mudah dan
              ringan
            </p>
          </div>
        </div>

        <div className="text-white font-semibold flex flex-col justify-between">
          <div className="grid grid-cols-[1fr_15fr] items-center gap-4">
            <CgShapeRhombus className="px-1 text-4xl" />
            <p className="text-2xl">
              Tenaga pengajar yang profesional dan pengalaman di bidangnya
              <br></br>
            </p>
          </div>

          <div className="grid grid-cols-[1fr_15fr] items-center gap-4">
            <CgShapeRhombus className="px-1 text-4xl" />
            <p className="text-2xl">
              Fasilitas lengkap dan nyaman untuk proses belajar mengajar
            </p>
          </div>

          <div className="grid grid-cols-[1fr_15fr] items-center gap-4">
            <CgShapeRhombus className="px-1 text-4xl" />
            <p className="text-2xl">
              Tersedia Career Center untuk meningkatkan karir mahasiswa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangUMB;
